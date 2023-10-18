using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/session")]
    public class SessionsController : ControllerBase
    {
        [HttpGet()]
        public IActionResult GetCurrentSessionUser()
        {
            var userId = HttpContext.Session.GetInt32("Id");

            return Ok(userId);
        }
    }
}