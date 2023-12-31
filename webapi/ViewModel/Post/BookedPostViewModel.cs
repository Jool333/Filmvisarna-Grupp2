using webapi.Entities;

namespace webapi.ViewModel.Post
{
    public class BookedPostViewModel
    {
        public int ScreeningId { get; set; }
        public string Email { get; set; }
        public ICollection<BookingXSeat> BookingXSeats { get; set; }
    }
}