using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Entities;
using webapi.ViewModel;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/movies")]
    public class MoviesController : ControllerBase
    {
        private readonly FilmvisarnaContext _context;
        private readonly string _imgBaseUrl;

        public MoviesController(FilmvisarnaContext context, IConfiguration config)
        {
            _context = context;
            _imgBaseUrl = config.GetSection("apiImageUrl").Value;
        }
        [HttpGet()]
        public async Task<IActionResult> ListAll(){
            var result = await _context.Movies
            .Select(m => new{
                Id = m.Id,
                Title = m.Title,
                ImgUrl = _imgBaseUrl + m.ImgUrl ?? "no-movie.png"
            })
            .ToListAsync();

            return Ok(result);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _context.Movies
                .Select(m => new
                {
                    Id = m.Id,
                    Title = m.Title,
                    Description = m.Description,
                    ImgUrl = _imgBaseUrl + m.ImgUrl ?? "no-movie.png",
                    TrailerUrl = m.TrailerUrl
                })
                .SingleOrDefaultAsync(c => c.Id == id);

            return Ok(result);
        }

        [HttpPost()]
        public async Task<IActionResult> Add(MoviePostViewModel movie)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("All information är inte med i anropet");
            }

            if (await _context.Movies.SingleOrDefaultAsync(c => c.Title == movie.Title) is not null)
            {
                return Conflict($"Filmen {movie.Title} finns redan i systemet");
            }

            var movieToAdd = new Movie
            {
                Title = movie.Title,
                Description = movie.Description,
                AgeLimit = movie.AgeLimit,
                ImgUrl = movie.ImgUrl,
                TrailerUrl = movie.TrailerUrl
            };

            try
            {
                await _context.Movies.AddAsync(movieToAdd);

                if (await _context.SaveChangesAsync() > 0)
                {
                    // return StatusCode(201);
                    return CreatedAtAction(nameof(GetById), new { id = movieToAdd.Id },
                    new
                    {
                        Id = movieToAdd.Id,
                        Title = movieToAdd.Title,
                        Description = movieToAdd.Description,
                        AgeLimit = movieToAdd.AgeLimit,
                        ImgUrl = movieToAdd.ImgUrl,
                        TrailerUrl = movieToAdd.TrailerUrl
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