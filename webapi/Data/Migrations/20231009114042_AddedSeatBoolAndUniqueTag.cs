using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace webapi.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddedSeatBoolAndUniqueTag : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Date",
                table: "Screenings",
                newName: "ScreeningDate");

            migrationBuilder.AddColumn<bool>(
                name: "IsTaken",
                table: "Seats",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateIndex(
                name: "IX_Users_Email",
                table: "Users",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_TicketType_Name",
                table: "TicketType",
                column: "Name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Theaters_Name",
                table: "Theaters",
                column: "Name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Movies_Description",
                table: "Movies",
                column: "Description",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Movies_ImgUrl",
                table: "Movies",
                column: "ImgUrl",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Movies_Title",
                table: "Movies",
                column: "Title",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Movies_TrailerUrl",
                table: "Movies",
                column: "TrailerUrl",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Category_Name",
                table: "Category",
                column: "Name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Bookings_BookingNbr",
                table: "Bookings",
                column: "BookingNbr",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_Users_Email",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_TicketType_Name",
                table: "TicketType");

            migrationBuilder.DropIndex(
                name: "IX_Theaters_Name",
                table: "Theaters");

            migrationBuilder.DropIndex(
                name: "IX_Movies_Description",
                table: "Movies");

            migrationBuilder.DropIndex(
                name: "IX_Movies_ImgUrl",
                table: "Movies");

            migrationBuilder.DropIndex(
                name: "IX_Movies_Title",
                table: "Movies");

            migrationBuilder.DropIndex(
                name: "IX_Movies_TrailerUrl",
                table: "Movies");

            migrationBuilder.DropIndex(
                name: "IX_Category_Name",
                table: "Category");

            migrationBuilder.DropIndex(
                name: "IX_Bookings_BookingNbr",
                table: "Bookings");

            migrationBuilder.DropColumn(
                name: "IsTaken",
                table: "Seats");

            migrationBuilder.RenameColumn(
                name: "ScreeningDate",
                table: "Screenings",
                newName: "Date");
        }
    }
}
