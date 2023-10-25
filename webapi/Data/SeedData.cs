using System.Text.Json;
using webapi.Entities;

namespace webapi.Data
{
    public static class SeedData
    {
        public static async Task LoadMovieData(FilmvisarnaContext context){
            var options = new JsonSerializerOptions{
                PropertyNameCaseInsensitive = true
            };

            if (context.Movies.Any()) return;
            var json = System.IO.File.ReadAllText("Data/json/movies.json");

            var movies = JsonSerializer.Deserialize<List<Movie>>(json,options);

            if( movies is not null && movies.Count > 0 ){
                await context.Movies.AddRangeAsync(movies);
                await context.SaveChangesAsync();
            }
        }

        public static async Task LoadUserData(FilmvisarnaContext context){
            var options = new JsonSerializerOptions{
                PropertyNameCaseInsensitive = true
            };
            if (context.Users.Any()) return;
            var json = System.IO.File.ReadAllText("Data/json/users.json");

            var users = JsonSerializer.Deserialize<List<User>>(json,options);

            if( users is not null && users.Count > 0 ){
                await context.Users.AddRangeAsync(users);
                await context.SaveChangesAsync();
            }
        }

        public static async Task LoadBookingData(FilmvisarnaContext context){
            var options = new JsonSerializerOptions{
                PropertyNameCaseInsensitive = true
            };
            if (context.Bookings.Any()) return;
            var json = System.IO.File.ReadAllText("Data/json/bookings.json");

            var bookings = JsonSerializer.Deserialize<List<Booking>>(json,options);

            if( bookings is not null && bookings.Count > 0 ){
                await context.Bookings.AddRangeAsync(bookings);
                await context.SaveChangesAsync();
            }
        }
        public static async Task LoadScreeningData(FilmvisarnaContext context){
            var options = new JsonSerializerOptions{
                PropertyNameCaseInsensitive = true
            };
            if (context.Screenings.Any()) return;
            var json = System.IO.File.ReadAllText("Data/json/screenings.json");

            var screenings = JsonSerializer.Deserialize<List<Screening>>(json,options);

            if( screenings is not null && screenings.Count > 0 ){
                await context.Screenings.AddRangeAsync(screenings);
                await context.SaveChangesAsync();
            }
        }
        public static async Task LoadSeatData(FilmvisarnaContext context){
            var options = new JsonSerializerOptions{
                PropertyNameCaseInsensitive = true
            };
            if (context.Seats.Any()) return;
            var json = System.IO.File.ReadAllText("Data/json/seats.json");

            var seats = JsonSerializer.Deserialize<List<Seat>>(json,options);

            if( seats is not null && seats.Count > 0 ){
                await context.Seats.AddRangeAsync(seats);
                await context.SaveChangesAsync();
            }
        }
        public static async Task LoadTheaterData(FilmvisarnaContext context){
            var options = new JsonSerializerOptions{
                PropertyNameCaseInsensitive = true
            };
            if (context.Theaters.Any()) return;
            var json = System.IO.File.ReadAllText("Data/json/theaters.json");

            var theaters = JsonSerializer.Deserialize<List<Theater>>(json,options);

            if( theaters is not null && theaters.Count > 0 ){
                await context.Theaters.AddRangeAsync(theaters);
                await context.SaveChangesAsync();
            }
        }
        public static async Task LoadUserRoleData(FilmvisarnaContext context){
            var options = new JsonSerializerOptions{
                PropertyNameCaseInsensitive = true
            };
            if (context.UserRoles.Any()) return;
            var json = System.IO.File.ReadAllText("Data/json/userroles.json");

            var roles = JsonSerializer.Deserialize<List<UserRole>>(json,options);

            if( roles is not null && roles.Count > 0 ){
                await context.UserRoles.AddRangeAsync(roles);
                await context.SaveChangesAsync();
            }
        }
        public static async Task LoadBookingXSeatData(FilmvisarnaContext context){
            var options = new JsonSerializerOptions{
                PropertyNameCaseInsensitive = true
            };
            if (context.BookingsXSeats.Any()) return;
            var json = System.IO.File.ReadAllText("Data/json/bookingsxseats.json");

            var bookingsXseats = JsonSerializer.Deserialize<List<BookingXSeat>>(json,options);

            if( bookingsXseats is not null && bookingsXseats.Count > 0 ){
                await context.BookingsXSeats.AddRangeAsync(bookingsXseats);
                await context.SaveChangesAsync();
            }
        }
        public static async Task LoadMovieXCategoryData(FilmvisarnaContext context){
            var options = new JsonSerializerOptions{
                PropertyNameCaseInsensitive = true
            };
            if (context.MoviesXCategories.Any()) return;
            var json = System.IO.File.ReadAllText("Data/json/moviesxcategories.json");

            var moviesXcategories = JsonSerializer.Deserialize<List<MovieXCategory>>(json,options);

            if( moviesXcategories is not null && moviesXcategories.Count > 0 ){
                await context.MoviesXCategories.AddRangeAsync(moviesXcategories);
                await context.SaveChangesAsync();
            }
        }
        public static async Task LoadJsonData<T>(FilmvisarnaContext context) where T : class
        {
            var options = new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            };

            if (context.Set<T>().Any()) return;

            var json = System.IO.File.ReadAllText("Data/json/moviesxcategories.json");
            var data = JsonSerializer.Deserialize<List<T>>(json, options);

            if (data is not null && data.Count > 0)
            {
                await context.Set<T>().AddRangeAsync(data);
                await context.SaveChangesAsync();
            }
        }

    }
}