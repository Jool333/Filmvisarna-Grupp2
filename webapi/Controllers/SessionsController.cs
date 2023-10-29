using Microsoft.AspNetCore.Mvc;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/sessions")]
    public class SessionsController : ControllerBase
    {
        [HttpGet()]
        public IActionResult GetCurrentSessionUserId()
        {
            var userId = HttpContext.Session.GetInt32("Id");

            return Ok(userId);
        }
        [HttpPost()]
        public IActionResult SetDefaultGuest()
        {

            if (string.IsNullOrEmpty(HttpContext.Session.GetString("Id")))
                HttpContext.Session.SetInt32("Id", 0);
            return Ok();
        }
    }
}