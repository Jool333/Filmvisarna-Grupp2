using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/sessions")]
    public class SessionsController : ControllerBase
    {
        [HttpGet()]
        public IActionResult GetCurrentSessionUser()
        {
            var userId = HttpContext.Session.GetInt32("Id");

            return Ok(userId);
        }
        [HttpPost()]
        public IActionResult SetDefaultGuest()
        {

            if (HttpContext.Session.GetInt32("Id") is null)
                HttpContext.Session.SetInt32("Id", 0);
            return Ok();
        }
    }
}