using Microsoft.EntityFrameworkCore;

namespace webapi.Entities
{
    
    [Index(nameof(Name), IsUnique = true)]
    public class Theater
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Seat> Seats { get; set; }
        public ICollection<Screening> Screenings { get; set; }
    }
}