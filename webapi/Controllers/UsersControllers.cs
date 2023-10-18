using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.Data;
using webapi.Entities;
using webapi.Functions;
using webapi.ViewModel.Post;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UsersControllers : ControllerBase
    {
        private readonly FilmvisarnaContext _context;

        public UsersControllers(FilmvisarnaContext context, IConfiguration config)
        {
            _context = context;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var result = await _context.Users
                .Select(u => new
                {
                    Id = u.Id,
                    Email = u.Email,
                    Password = u.Password,
                    FirstName = u.FirstName,
                    LastName = u.LastName,
                    PhoneNumber = u.PhoneNumber,
                    UserRole = u.UserRole
                })
                .SingleOrDefaultAsync(c => c.Id == id);

            return Ok(result);
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginPostViewModel login)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { error = "All information är inte med i anropet" });
            }
            //check if Email is in DB
            User user = await _context.Users.SingleOrDefaultAsync(c => c.Email == login.Email);

            if (user is null)
            {
                return Unauthorized(new { error = "Ogiltig epost" });
            }
            //kolla att angivet lösenord stämmer till ang användare 
            if (UserService.HashPassword(login.Password) != user.Password)
            {
                return Unauthorized(new { error = "Ogiltigt lösenord" });
            }

            HttpContext.Session.SetInt32("Id", user.Id);
            var userId = HttpContext.Session.GetInt32("Id");
            return Ok(userId);
        }

        [HttpDelete()]
        public IActionResult LogOut()
        {
            HttpContext.Session.SetInt32("Id", 0);
            var userId = HttpContext.Session.GetInt32("Id");
            return Ok(userId);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegistrationPostViewModel reg)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { error = "All nödvändig information är inte med i anropet" });
            }
            if (await _context.Users.SingleOrDefaultAsync(c => c.Email == reg.Email) is not null)
            {
                return BadRequest(new { error = "Eposten är redan registrerad" });
            }

            var userToAdd = new User
            {
                Email = reg.Email,
                Password = UserService.HashPassword(reg.Password),
                FirstName = reg.FirstName,
                LastName = reg.LastName,
                PhoneNumber = reg.PhoneNumber,
                UserRoleId = 2
            };

            try
            {
                await _context.Users.AddAsync(userToAdd);

                if (await _context.SaveChangesAsync() > 0)
                {
                    // return StatusCode(201);
                    return CreatedAtAction(nameof(GetById), new { id = userToAdd.Id },
                    new
                    {
                        Email = userToAdd.Email,
                        FirstName = userToAdd.FirstName,
                        LastName = userToAdd.LastName,
                        PhoneNumber = userToAdd.PhoneNumber
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