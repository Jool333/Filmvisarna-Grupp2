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
            .OrderBy(s => s.ScreeningDate)
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
            .OrderBy(s => s.ScreeningDate)
            .Select(s => new
            {
                Id = s.Id,
                screeningDate = s.ScreeningDate,
                movieId = s.MovieId,
                Title = s.Movie.Title,
                theaterId = s.TheaterId,
                Theater = s.Theater.Name
            })
            .SingleOrDefaultAsync(c => c.Id == id);

            return Ok(result);
        }
        [HttpGet("movie/{movieid}")]
        public async Task<IActionResult> GetByMovieId(int movieid)
        {
            var result = await _context.Screenings
                .Where(s => s.Movie.Id == movieid && s.ScreeningDate.Date >= DateTime.Today)
                .OrderBy(s => s.ScreeningDate)
                .GroupBy(s => s.ScreeningDate.Date)
                .Select(dateGroup => new
                {
                    Date = dateGroup.Key,
                    Screenings = dateGroup.Select(s => new
                    {
                        Id = s.Id,
                        Time = s.ScreeningDate.TimeOfDay
                    }).ToList()
                })
                .ToListAsync();

            return Ok(result);
        }
        /*
        [HttpGet("movie/{movieid}")]
        public async Task<IActionResult> GetByMovieId(int movieid)
        {
            var result = await _context.Screenings
            .Where(s => s.Movie.Id == movieid)
            .OrderBy(s => s.ScreeningDate)
            .Select(s => new
            {
                Id = s.Id,
                ScreeningDate = new
                {
                    Date = s.ScreeningDate.Date,
                    Times = new[] { s.ScreeningDate.TimeOfDay }
                },
            })
            .ToListAsync();

            return Ok(result);
        }*/
    }
}