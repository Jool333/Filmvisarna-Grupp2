using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.Entities
{
    public class MoviesXCategories
    {
        public int MovieId { get; set; }
        [ForeignKey("MovieId")]
        public Movie Movie { get; set; }
        public int CategoryId { get; set; }  
        [ForeignKey("CategoryId")] 
        public Category Category { get; set; }
    }
}