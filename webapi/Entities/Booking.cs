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
    }

    public class BookingsXSeats{
        public int BookingId{ get; set; }
        [ForeignKey("BookingId")]
        public Booking Booking{ get; set;}

        public int SeatId { get; set; }
        [ForeignKey("SeatId")]
        public Seat Seat { get; set; }

        public int TicketTypeId { get; set; }
        [ForeignKey("TicketTypeId")]
        public TicketType TicketType { get; set; }
    }
}
