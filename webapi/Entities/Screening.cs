using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Entities
{
    public class Screening
    {
        public int Id { get; set; }
        public DateTime ScreeningDate { get; set; }
        public int MovieId { get; set; }
        [ForeignKey("MovieId")]
        public Movie Movie { get; set; }

        public int TheaterId { get; set; }
        [ForeignKey("TheaterId")]
        public Theater Theater { get; set; }

        public ICollection<Booking> Bookings { get; set; }
    }
}