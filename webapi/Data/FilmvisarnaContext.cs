using Microsoft.EntityFrameworkCore;
using webapi.Entities;


namespace webapi.Data
{
    public class FilmvisarnaContext : DbContext
    {
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Screening> Screenings { get; set; }
        public DbSet<Seat> Seats { get; set; }
        public DbSet<Theater> Theaters { get; set; }
        public DbSet<User> Users { get; set; }
        public FilmvisarnaContext(DbContextOptions options) : base(options){}
    }
}