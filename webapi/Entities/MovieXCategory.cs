using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace webapi.Entities
{
    public class MovieXCategory
    {
        public int MovieId { get; set; }
        [ForeignKey("MovieId")]
        public Movie Movie { get; set; }
        public int CategoryId { get; set; }  
        [ForeignKey("CategoryId")] 
        public Category Category { get; set; }
    }
}