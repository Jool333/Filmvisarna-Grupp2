using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Entities;
using webapi.Functions;
using webapi.ViewModel;

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
        public async Task<IActionResult> ListAll(){
            var result = await _context.Bookings
            .Select(b => new{
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
                .Select(b => new
                {
                    Id = b.Id,
                    BookingTime = b.BookingTime,
                    BookingNbr = b.BookingNbr,
                    ScreeningId = b.ScreeningId,
                    UserId = b.UserId
                })
                .SingleOrDefaultAsync(c => c.Id == id);

            return Ok(result);
        }
               
        [HttpPost("bookedGuest")]
        public async Task<IActionResult> Create(BookedPostViewModel res)
        {
            //check if all data is pre
            if (!ModelState.IsValid)
            {
                return BadRequest("All nödvändig information är inte med i anropet");
            }

            if (await _context.Users.SingleOrDefaultAsync(c => c.Email == res.Email) is not null)
                {
                    return BadRequest("Eposten är redan registrerad");
                }
            //generate a unique booking nbr
            var bookingNbr ="";
            do
            {
                bookingNbr = BookingNbrGenerator.GenerateReservationNbr();
            } while (await _context.Bookings.SingleOrDefaultAsync(b => b.BookingNbr == bookingNbr) is not null);

            //check if user/email already used
            User userWhoBooked;
            if (res.UserId is null)
            {
                userWhoBooked = new User{
                    Email = res.Email
                };
                _context.Users.Add(userWhoBooked);
                await _context.SaveChangesAsync();

            }else{
                userWhoBooked = await _context.Users.SingleOrDefaultAsync(u => u.Id == res.UserId);
                if (userWhoBooked == null)
                {
                    return NotFound("User not found");
                }
            }
            
            var bookingToAdd = new Booking{
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
                        var bookedSeats = new BookingXSeat{
                            BookingId = bookingToAdd.Id,
                            SeatId = bookingXSeat.SeatId,
                            TicketTypeId = bookingXSeat.TicketTypeId
                        };
                        _context.BookingsXSeats.Add(bookedSeats);
                    }
                    await _context.SaveChangesAsync();

                    // return StatusCode(201);
                    return CreatedAtAction(nameof(GetById), new { id = bookingToAdd.Id },
                    new
                    {
                        Id =bookingToAdd.Id,
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
    }
}