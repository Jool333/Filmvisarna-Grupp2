namespace webapi.Entities
{
    public class TicketType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Price { get; set; }
        public ICollection<BookingXSeat> BookingXSeats { get; set; }
    }
}