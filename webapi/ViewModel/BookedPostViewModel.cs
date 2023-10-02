using webapi.Entities;

namespace webapi.ViewModel
{
    public class BookedPostViewModel
    {
        public int Id { get; set; }
        public string BookingNbr { get; set; }
        public DateTime BookingTime { get; set; }
        public int UserId { get; set; }
        public int ScreeningId { get; set; }
        public ICollection<BookingXSeat> BookingXSeats { get; set; }
    }
}