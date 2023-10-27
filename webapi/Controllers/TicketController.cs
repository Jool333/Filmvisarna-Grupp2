using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Data;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/tickets")]
    public class TicketController : ControllerBase
    {
        private readonly FilmvisarnaContext _context;
        public TicketController(FilmvisarnaContext context)
        {
            _context = context;
        }
        [HttpGet()]
        public async Task<IActionResult> ListAll()
        {
            var result = await _context.TicketType
            .Select(t => new
            {
                Id = t.Id,
                Name = t.Name,
                Price = t.Price
            })
            .ToListAsync();
            return Ok(result);
        }
    }
}