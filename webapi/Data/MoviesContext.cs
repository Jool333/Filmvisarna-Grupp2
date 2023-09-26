using Microsoft.EntityFrameworkCore;
using webapi.Entities;


namespace webapi.Data
{
    public class MoviesContext : DbContext
    {
        public DbSet<Movie> Movies { get; set; }
        public MoviesContext(DbContextOptions options) : base(options){}
    }
}