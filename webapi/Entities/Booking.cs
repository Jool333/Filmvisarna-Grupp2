using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Entities
{
    public class Booking
    {
        public int Id { get; set; }
        public string BookingNbr { get; set; }
        public DateTime BookingTime { get; set; }

        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }

        public int ScreeningId { get; set; }
        [ForeignKey("ScreeningId")]
        public Screening Screening { get; set; }
        public ICollection<BookingXSeat> BookingXSeats { get; set; }
    }
}
