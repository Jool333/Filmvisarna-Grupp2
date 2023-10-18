using System.ComponentModel.DataAnnotations;

namespace webapi.ViewModel.Post
{
    public class LoginPostViewModel
    {
        [Required(ErrorMessage = "Epost måste anges")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Lösenord måste anges")]
        public string Password { get; set; }
    }
}