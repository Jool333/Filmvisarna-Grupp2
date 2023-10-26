using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Entities;
using webapi.Functions;
using webapi.ViewModel.Post;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/category")]
    public class CategoryController : ControllerBase
    {
       private readonly FilmvisarnaContext _context;

            public CategoryController(FilmvisarnaContext context, IConfiguration config)
            {
                _context = context;
            } 
       
        [HttpGet("movie/{movieid}")]
        public async Task<IActionResult> GetByMovieId(int movieid)
        {

            var result = await _context.MoviesXCategories
             .Where(b => movieid == b.MovieId)
                .Select(b => new
                {
                    Id = b.CategoryId,
             
                category=b.Category.Name


                })

                .ToListAsync();

            return Ok(result);
        }

    }
}