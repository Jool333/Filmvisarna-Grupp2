using Microsoft.EntityFrameworkCore;

namespace webapi.Entities
{
    [Index(nameof(Name), IsUnique = true)]
    public class TicketType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public ICollection<BookingXSeat> BookingXSeats { get; set; }
    }
}