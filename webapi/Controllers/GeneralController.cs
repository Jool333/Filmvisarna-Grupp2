using System.Reflection;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Data;

namespace webapi.Controllers
{
    public interface IEntity
    {
        int Id { get; set; }
    }

    [ApiController]
    [Route("api/general")]
    public class GeneralController<T> : ControllerBase where T : class, IEntity
    {
        private readonly FilmvisarnaContext _context;
        private readonly string _imgBaseUrl;

        public GeneralController(FilmvisarnaContext context, IConfiguration config)
        {
            _context = context;
            _imgBaseUrl = config.GetSection("apiImageUrl").Value;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var entities = await _context.Set<T>().ToListAsync();
                return Ok(entities);
            }
            catch (Exception ex)
            {
                // Logging 
                Console.WriteLine(ex.Message);
                return StatusCode(500, "Internal Server Error");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var entity = await _context.Set<T>().FindAsync(id);

            if (entity == null)
            {
                return NotFound();
            }

            return Ok(entity);
        }
        
        [HttpPost("create")]
        public async Task<IActionResult> Add([FromBody] T entity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("All information är inte med i anropet");
            }
        
            try
            {
                await _context.Set<T>().AddAsync(entity);
        
                if (await _context.SaveChangesAsync() > 0)
                {
                    PropertyInfo idProperty = typeof(T).GetProperty("Id");
                    if (idProperty != null)
                    {
                        int entityId = (int)idProperty.GetValue(entity, null);
                        return CreatedAtAction(nameof(GetById), new { id = entityId }, entity);
                    }
                    else
                    {
                        return BadRequest("Entity does not contain an 'Id' property.");
                    }
                }
        
                return StatusCode(500, "Internal Server Error");
            }
            catch (Exception ex)
            {
                // Logging to a database or other logging mechanisms...
                Console.WriteLine(ex.Message);
                return StatusCode(500, "Internal Server Error");
            }
        }
    }
}