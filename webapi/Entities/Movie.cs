using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace webapi.Entities
{
    [Index(nameof(Title), IsUnique = true)]
    [Index(nameof(Description), IsUnique = true)]
    [Index(nameof(ImgUrl), IsUnique = true)]
    [Index(nameof(TrailerUrl), IsUnique = true)]
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; } //datatyp Json med Url:
        public string AgeLimit { get; set; } //kanske enum
        public string ImgUrl { get; set; }
        public string TrailerUrl { get; set; } 

        public ICollection<Screening> Screenings { get; set; }
        public ICollection<MovieXCategory> MovieXCategories { get; set; }
    }
}