using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Entities;
using webapi.ViewModel.Get;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/seats")]
    public class SeatsController : ControllerBase
    {
        private readonly FilmvisarnaContext _context;

        public SeatsController(FilmvisarnaContext context, IConfiguration config)
        {
            _context = context;
        }

        [HttpGet()]
        public async Task<IActionResult> ListAll()
        {
            var result = await _context.Seats
            .Select(s => new
            {
                Id = s.Id,
                SeatNbr = s.SeatNbr,
                RowNbr = s.RowNbr,
                TheaterId = s.TheaterId
            })
            .ToListAsync();
            return Ok(result);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _context.Seats
            .Select(s => new
            {
                Id = s.Id,
                SeatNbr = s.SeatNbr,
                RowNbr = s.RowNbr,
                TheaterId = s.TheaterId
            })
            .SingleOrDefaultAsync(c => c.Id == id);
            return Ok(result);
        }
        [HttpGet("theater/{id}")]
        public async Task<IActionResult> GetByTheaterId(int id)
        {
            var result = await _context.Seats
            .Select(s => new
            {
                Id = s.Id,
                SeatNbr = s.SeatNbr,
                RowNbr = s.RowNbr,
                TheaterId = s.TheaterId
            })
            .SingleOrDefaultAsync(c => c.TheaterId == id);
            return Ok(result);
        }

        [HttpGet("screening/{id}")]
        public async Task<IActionResult> GetByScreeningId(int id)
        {
            var screening = await _context.Screenings
            .Include(s => s.Theater)
            .ThenInclude(t => t.Seats)
            .Where(s => s.Id == id)
            .FirstOrDefaultAsync();

            var bookedSeatIds = await _context.BookingsXSeats
            .Where(bxs => bxs.Booking.ScreeningId == id)
            .Select(bxs => bxs.SeatId)
            .ToListAsync();

            var allSeats = screening.Theater.Seats.Select(seat => new SeatViewModel
            {
                Id = seat.Id,
                SeatNumber = seat.SeatNbr,
                RowNumber = seat.RowNbr,
                IsTaken = bookedSeatIds.Contains(seat.Id)
            });

            var seatsGroupedByRow = allSeats.GroupBy(seat => seat.RowNumber)
                                            .Select(group => group.ToList());


            return Ok(seatsGroupedByRow);
        }

    }
}