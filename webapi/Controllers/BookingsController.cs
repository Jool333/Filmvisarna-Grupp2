using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Entities;
using webapi.Functions;
using webapi.ViewModel.Delete;
using webapi.ViewModel.Post;
using Newtonsoft.Json;
using System.Net;
using System.Net.Mail;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/bookings")]
    public class BookingsController : ControllerBase
    {
        private readonly FilmvisarnaContext _context;

        public BookingsController(FilmvisarnaContext context, IConfiguration config)
        {
            _context = context;
        }
        [HttpGet()]
        public async Task<IActionResult> ListAll()
        {
            var result = await _context.Bookings
            .Select(b => new
            {
                Id = b.Id,
                BookingTime = b.BookingTime,
                BookingNbr = b.BookingNbr,
                ScreeningId = b.ScreeningId,
                UserId = b.UserId
            })
            .ToListAsync();

            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _context.Bookings
                .Where(b => b.Id == id)
                .Select(b => new
                {
                    BookingTime = b.BookingTime,
                    BookingNbr = b.BookingNbr,
                    Movie = b.Screening.Movie.Title,
                    Theater = b.Screening.Theater.Name,
                    ScreeningDate = b.Screening.ScreeningDate,
                    Seats = b.BookingXSeats.Select(s => new
                    {
                        SeatNbr = s.Seat.SeatNbr,
                        RowNbr = s.Seat.RowNbr,
                    }),
                    Ticket = b.BookingXSeats.Select(t => new
                    {
                        Name = t.TicketType.Name,
                        Price = t.TicketType.Price,
                    })

                })
                .FirstOrDefaultAsync();

            return Ok(result);
        }

        [HttpGet("user/{userid}")]
        public async Task<IActionResult> GetByUserId(int userid)
        {
            var result = await _context.Bookings
                .Where(b => b.User.Id == userid)
                .Select(b => new
                {
                    BookingTime = b.BookingTime,
                    BookingNbr = b.BookingNbr,
                    Movie = b.Screening.Movie.Title,
                    Theater = b.Screening.Theater.Name,
                    ScreeningDate = b.Screening.ScreeningDate,
                    Seats = b.BookingXSeats.Select(s => new
                    {
                        SeatNbr = s.Seat.SeatNbr,
                        RowNbr = s.Seat.RowNbr,
                    }),
                    Ticket = b.BookingXSeats.Select(t => new
                    {
                        Name = t.TicketType.Name,
                        Price = t.TicketType.Price,
                    })

                })
                .ToListAsync();

            return Ok(result);
        }

        [HttpPost()]
        public async Task<IActionResult> Create(BookedPostViewModel res)
        {
            //check if all data is present
            if (!ModelState.IsValid)
            {
                return BadRequest("All nödvändig information är inte med i anropet");
            }
            User userWhoBooked = await _context.Users.SingleOrDefaultAsync(c => c.Email == res.Email);



            if (userWhoBooked is null)
            {
                userWhoBooked = new User
                {
                    Email = res.Email
                };
                _context.Users.Add(userWhoBooked);
                await _context.SaveChangesAsync();

            }
            //generate a unique booking nbr
            var bookingNbr = "";
            do
            {
                bookingNbr = BookingNbrGenerator.GenerateReservationNbr();
            } while (await _context.Bookings.SingleOrDefaultAsync(b => b.BookingNbr == bookingNbr) is not null);

            var bookingToAdd = new Booking
            {
                BookingNbr = bookingNbr,
                BookingTime = DateTime.Now,
                UserId = userWhoBooked.Id,
                ScreeningId = res.ScreeningId
            };

            try
            {

                await _context.Bookings.AddAsync(bookingToAdd);

                if (await _context.SaveChangesAsync() > 0)
                {
                    foreach (var bookingXSeat in res.BookingXSeats)
                    {
                        var bookedSeats = new BookingXSeat
                        {
                            BookingId = bookingToAdd.Id,
                            SeatId = bookingXSeat.SeatId,
                            TicketTypeId = bookingXSeat.TicketTypeId
                        };
                        _context.BookingsXSeats.Add(bookedSeats);
                    }
                    await _context.SaveChangesAsync();

                    try
                    {
                        string filePath = "Functions/mailsecret.json";
                        string jsonString = System.IO.File.ReadAllText(filePath);
                        var secrets = JsonConvert.DeserializeObject<dynamic>(jsonString)!;

                        string smtpServer = "smtp.gmail.com";
                        int smtpPort = 587;
                        string fromEmail = secrets.ServerEmail;
                        string password = secrets.ServerPassword;

                        using (SmtpClient client = new SmtpClient(smtpServer, smtpPort))
                        {
                            client.UseDefaultCredentials = false;
                            client.Credentials = new NetworkCredential(fromEmail, password);
                            client.EnableSsl = true;

                            using (MailMessage mailMessage = new MailMessage())
                            {
                                mailMessage.From = new MailAddress(fromEmail);
                                mailMessage.To.Add(userWhoBooked.Email);
                                mailMessage.Subject = "Bokningsbekräftelse";
                                mailMessage.Body = $"Bokningsnummer \"{bookingToAdd.BookingNbr}\n" +
                                // $"Film: {bookingToAdd.Screening}" +
                                $"Valda platser {bookingToAdd.BookingXSeats}";



                                client.Send(mailMessage);
                            }
                        }


                    }
                    catch (Exception ex)
                    {
                        Console.WriteLine("Email sending failed. Error: " + ex.Message);
                    }

                    // return StatusCode(201);
                    return CreatedAtAction(nameof(GetById), new { id = bookingToAdd.Id },
                            new
                            {
                                Id = bookingToAdd.Id,
                                BookingNbr = bookingToAdd.BookingNbr,
                                BookingTime = bookingToAdd.BookingTime,
                                UserId = bookingToAdd.UserId,
                                ScreeningId = bookingToAdd.ScreeningId
                            });
                }

                return StatusCode(500, "Internal Server Error");
            }
            catch (Exception ex)
            {
                // loggning till en databas som hanterar debug information...
                Console.WriteLine(ex.Message);
                return StatusCode(500, "Internal Server Error");
            }
        }

        [HttpDelete()]
        public async Task<IActionResult> Delete(BookingDeleteViewModel del)
        {
            try
            {
                var bookingToRemove = await _context.Bookings.FirstOrDefaultAsync(
                b => b.BookingNbr == del.BookingNbr && b.User.Email == del.Email);

                if (bookingToRemove == null)
                {
                    return NotFound("Den angivna information matchar inte någon bokning");
                }


                var bookingXSeatsToRemove = await _context.BookingsXSeats
                    .Where(bxs => bxs.BookingId == del.BookingId)
                    .ToListAsync();

                _context.BookingsXSeats.RemoveRange(bookingXSeatsToRemove);
                _context.Bookings.Remove(bookingToRemove);

                if (await _context.SaveChangesAsync() > 0)
                {
                    return Content("Bokningen är bortagen");
                }

                return StatusCode(500, "Internal Server Error");
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return StatusCode(500, "Internal Server Error");
            }

        }
    }

}