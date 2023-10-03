using System.ComponentModel.DataAnnotations;
using webapi.Entities;

namespace webapi.ViewModel
{
    public class BookedGuestPostViewModel
    {
        [Required(ErrorMessage = "Epost måste anges")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Förnamn måste anges")]
        public string FirstName { get; set; }
        [Required(ErrorMessage = "Efternamn måste anges")]
        public string LastName { get; set; }
        [Required(ErrorMessage = "Telefonnummer måste anges")]
        public string PhoneNumber { get; set; }

        public int Id { get; set; }
        public string BookingNbr { get; set; }
        public DateTime BookingTime { get; set; }
        public int ScreeningId { get; set; }
        public ICollection<BookingXSeat> BookingXSeats { get; set; }
    }
}