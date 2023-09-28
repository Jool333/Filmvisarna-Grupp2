using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace webapi.Entities
{
    public class BookingXSeat
    {
        public int BookingId { get; set; }
        [ForeignKey("BookingId")]
        public Booking Booking { get; set; }
        public int SeatId { get; set; }  
        [ForeignKey("SeatId")] 
        public Seat Seat { get; set; }
        public int TicketTypeId { get; set; }
        [ForeignKey("TicketTypeId")] 
        public TicketType TicketType { get; set; }
    }
}