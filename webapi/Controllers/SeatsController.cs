using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Entities;

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
                TheaterId = s.TheaterId,
                IsTaken = s.IsTaken
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
                TheaterId = s.TheaterId,
                IsTaken = s.IsTaken
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
                TheaterId = s.TheaterId,
                IsTaken = s.IsTaken
            })
            .SingleOrDefaultAsync(c => c.TheaterId == id);
            return Ok(result);
        }
        [HttpPatch("update/{id}")]
        public async Task<IActionResult> ChangeIsTaken(int id)
        {
            var seatToUpdate = await _context.Seats.FindAsync(id);
            if (seatToUpdate is null) return NotFound("Sätet finns inte");
            seatToUpdate.IsTaken = !seatToUpdate.IsTaken;

            _context.Seats.Update(seatToUpdate);
            if (await _context.SaveChangesAsync() > 0) return NoContent();

            return StatusCode(500, "Internal Server Error");
        }
    }
}