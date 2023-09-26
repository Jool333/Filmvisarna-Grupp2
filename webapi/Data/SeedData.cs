using System.Text.Json;
using webapi.Entities;

namespace webapi.Data
{
    public static class SeedData
    {
        public static async Task LoadMovieData(MoviesContext context){
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
    }
}