using System.ComponentModel.DataAnnotations;

namespace webapi.ViewModel
{
    public class RegistrationPostViewModel
    {
        [Required(ErrorMessage = "Epost måste anges")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Lösenord måste anges")]
        public string Password { get; set; }
        [Required(ErrorMessage = "Förnamn måste anges")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "Efternamn måste anges")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "Telefonnummer måste anges")]
        public string PhoneNumber { get; set; }
    }
}