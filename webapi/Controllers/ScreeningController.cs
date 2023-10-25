using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Data;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/screenings")]
    public class ViewingsController : ControllerBase
    {
        private readonly FilmvisarnaContext _context;

        public ViewingsController(FilmvisarnaContext context, IConfiguration config)
        {
            _context = context;
        }

        [HttpGet()]
        public async Task<IActionResult> ListAll()
        {
            var result = await _context.Screenings
            .Select(s => new
            {
                Id = s.Id,
                screeningDate = s.ScreeningDate,
                movieId = s.MovieId,
                theaterId = s.TheaterId
            })
            .ToListAsync();
            return Ok(result);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _context.Screenings
                .Select(s => new
                {
                    Id = s.Id,
                    screeningDate = s.ScreeningDate,
                    movieId = s.MovieId,
                    theaterId = s.TheaterId
                })
                .SingleOrDefaultAsync(c => c.Id == id);

            return Ok(result);
        }


        [HttpGet("occupiedseats/{screeningId}")]
        public async Task<IActionResult> GetOccupiedSeats(int screeningId)
        {
            var result = await _context.Database
                .SqlQuery<int>($"SELECT seatId AS SeatId FROM bookingView WHERE ScreeningId = {screeningId}")
                .ToListAsync();

            return Ok(result);
        }
    }
}