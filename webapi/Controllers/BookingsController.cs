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
        [HttpGet("{UserId}")]
        public async Task<IActionResult> GetByUserId(int UserId)
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
                .SingleOrDefaultAsync(c => c.UserId == UserId);

            return Ok(result);
        }
        
    }
}