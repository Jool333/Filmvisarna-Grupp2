using Microsoft.EntityFrameworkCore;
using webapi.Entities;


namespace webapi.Data
{
    public class FilmvisarnaContext : DbContext
    {
        public DbSet<Movie> Movies { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Screening> Screenings { get; set; }
        public DbSet<Seat> Seats { get; set; }
        public DbSet<Theater> Theaters { get; set; }
        public DbSet<TicketType> TicketType { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<MovieXCategory> MoviesXCategories { get; set; }
        public DbSet<BookingXSeat> BookingsXSeats { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Configure the many-to-many relationship
            modelBuilder.Entity<MovieXCategory>()
                .HasKey(mxc => new { mxc.MovieId, mxc.CategoryId });

            modelBuilder.Entity<MovieXCategory>()
                .HasOne(mxc => mxc.Movie)
                .WithMany(m => m.MovieXCategories)
                .HasForeignKey(mxc => mxc.MovieId);

            modelBuilder.Entity<MovieXCategory>()
                .HasOne(mxc => mxc.Category)
                .WithMany(c => c.MovieXCategories)
                .HasForeignKey(mxc => mxc.CategoryId);

            // Configure the many-to-many relationship
            modelBuilder.Entity<BookingXSeat>()
                .HasKey(bxs => new { bxs.BookingId, bxs.SeatId, bxs.TicketTypeId });

            modelBuilder.Entity<BookingXSeat>()
                .HasOne(bxs => bxs.Booking)
                .WithMany(b => b.BookingXSeats)
                .HasForeignKey(bxs => bxs.BookingId);

            modelBuilder.Entity<BookingXSeat>()
                .HasOne(bxs => bxs.Seat)
                .WithMany(s => s.BookingXSeats)
                .HasForeignKey(bxs => bxs.SeatId);

            modelBuilder.Entity<BookingXSeat>()
                .HasOne(bxs => bxs.TicketType)
                .WithMany(tt => tt.BookingXSeats)
                .HasForeignKey(bxs => bxs.TicketTypeId);
        }
        public FilmvisarnaContext(DbContextOptions options) : base(options) { }
    }
}