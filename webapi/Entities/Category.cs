using Microsoft.EntityFrameworkCore;

namespace webapi.Entities
{
    [Index(nameof(Name), IsUnique = true)]
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<MovieXCategory> MovieXCategories { get; set; }
    }
}