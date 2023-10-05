using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Data;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/bookings")]
    public class BookingsController : ControllerBase
    {
        private readonly FilmvisarnaContext _context;
        //private readonly BookingNbrGenerator generator;

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
        /*        
        [HttpPost("bookedGuest")]
        public async Task<IActionResult> Create(BookedPostViewModel res , BookedGuestPostViewModel resGuest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("All nödvändig information är inte med i anropet");
            }
            
            User userWhoBooked;
            if (resGuest is not null)
            {
                if (await _context.Users.SingleOrDefaultAsync(c => c.Email == resGuest.Email) is not null)
                {
                    return BadRequest("Eposten är redan registrerad");
                }
                userWhoBooked = new User{
                Email = resGuest.Email,
                FirstName = resGuest.FirstName,
                LastName = resGuest.LastName,
                PhoneNumber = resGuest.PhoneNumber
                };
            }else{
                userWhoBooked = await _context.Users.SingleOrDefaultAsync(u => u.Id == res.UserId);
                if (userWhoBooked == null)
                {
                    return NotFound("User not found");
                }
            }
            
            var bookingToAdd = new Booking{
                BookingNbr = generator.GenerateBookingNbr(),
                BookingTime = DateTime.Now,
                

            };

            try
            {
                await _context.Bookings.AddAsync(bookingToAdd);

                if (await _context.SaveChangesAsync() > 0)
                {
                    // return StatusCode(201);
                    return CreatedAtAction(nameof(GetById), new { id = bookingToAdd.Id },
                    new
                    {
                        Id =bookingToAdd.Id,
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
        */        
    }
}