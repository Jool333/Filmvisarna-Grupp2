using System.ComponentModel.DataAnnotations;
using webapi.Entities;

namespace webapi.ViewModel
{
    public class BookedPostViewModel
    {
        public int? UserId { get; set; }
        public int ScreeningId { get; set; }
        public string? Email { get; set; }
        public ICollection<BookingXSeat> BookingXSeats { get; set; }
    }
}