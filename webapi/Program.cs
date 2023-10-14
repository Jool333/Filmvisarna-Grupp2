using Microsoft.EntityFrameworkCore;
using webapi.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddDbContext<FilmvisarnaContext>(options =>
{
    options.UseSqlite(builder.Configuration.GetConnectionString("Sqlite"));
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder => builder.WithOrigins("*") // frontend URL
                        .AllowAnyHeader()
                        .AllowAnyMethod());
});

var app = builder.Build();

using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
try
{
    var context = services.GetRequiredService<FilmvisarnaContext>();
    await context.Database.MigrateAsync();

    //ta bort kommentarer när resp json fil är klar
    await SeedData.LoadMovieData(context);
    // await SeedDAta.LoadCategoryData(context);
    await SeedData.LoadUserRoleData(context);
    await SeedData.LoadUserData(context);
    await SeedData.LoadTheaterData(context);
    // await SeedData.LoadSeatData(context); 
    // await SeedData.LoadScreeningData(context);  
    // await SeedData.LoadBookingData(context); 
    // await SeedData.LoadBookingXSeatData(context);
    // await SeedData.LoadMovieXCategoryData(context);


}
catch (Exception ex)
{
    System.Console.WriteLine(ex.Message);
    throw;
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

app.UseStaticFiles();

app.UseAuthorization();

app.UseCors("AllowSpecificOrigin");

app.MapControllers();

app.Run();
