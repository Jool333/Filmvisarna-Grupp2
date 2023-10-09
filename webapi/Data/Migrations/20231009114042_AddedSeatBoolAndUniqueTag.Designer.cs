﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using webapi.Data;

#nullable disable

namespace webapi.Data.Migrations
{
    [DbContext(typeof(FilmvisarnaContext))]
    [Migration("20231009114042_AddedSeatBoolAndUniqueTag")]
    partial class AddedSeatBoolAndUniqueTag
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.11");

            modelBuilder.Entity("webapi.Entities.Booking", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("BookingNbr")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("BookingTime")
                        .HasColumnType("TEXT");

                    b.Property<int>("ScreeningId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("BookingNbr")
                        .IsUnique();

                    b.HasIndex("ScreeningId");

                    b.HasIndex("UserId");

                    b.ToTable("Bookings");
                });

            modelBuilder.Entity("webapi.Entities.BookingXSeat", b =>
                {
                    b.Property<int>("BookingId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SeatId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("TicketTypeId")
                        .HasColumnType("INTEGER");

                    b.HasKey("BookingId", "SeatId", "TicketTypeId");

                    b.HasIndex("SeatId");

                    b.HasIndex("TicketTypeId");

                    b.ToTable("BookingsXSeats");
                });

            modelBuilder.Entity("webapi.Entities.Category", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("Name")
                        .IsUnique();

                    b.ToTable("Category");
                });

            modelBuilder.Entity("webapi.Entities.Movie", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("AgeLimit")
                        .HasColumnType("TEXT");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<string>("ImgUrl")
                        .HasColumnType("TEXT");

                    b.Property<string>("Title")
                        .HasColumnType("TEXT");

                    b.Property<string>("TrailerUrl")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("Description")
                        .IsUnique();

                    b.HasIndex("ImgUrl")
                        .IsUnique();

                    b.HasIndex("Title")
                        .IsUnique();

                    b.HasIndex("TrailerUrl")
                        .IsUnique();

                    b.ToTable("Movies");
                });

            modelBuilder.Entity("webapi.Entities.MovieXCategory", b =>
                {
                    b.Property<int>("MovieId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("CategoryId")
                        .HasColumnType("INTEGER");

                    b.HasKey("MovieId", "CategoryId");

                    b.HasIndex("CategoryId");

                    b.ToTable("MoviesXCategories");
                });

            modelBuilder.Entity("webapi.Entities.Screening", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("MovieId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("ScreeningDate")
                        .HasColumnType("TEXT");

                    b.Property<int>("TheaterId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("MovieId");

                    b.HasIndex("TheaterId");

                    b.ToTable("Screenings");
                });

            modelBuilder.Entity("webapi.Entities.Seat", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("IsTaken")
                        .HasColumnType("INTEGER");

                    b.Property<int>("RowNbr")
                        .HasColumnType("INTEGER");

                    b.Property<int>("SeatNbr")
                        .HasColumnType("INTEGER");

                    b.Property<int>("TheaterId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("TheaterId");

                    b.ToTable("Seats");
                });

            modelBuilder.Entity("webapi.Entities.Theater", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("Name")
                        .IsUnique();

                    b.ToTable("Theaters");
                });

            modelBuilder.Entity("webapi.Entities.TicketType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.Property<int>("Price")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("Name")
                        .IsUnique();

                    b.ToTable("TicketType");
                });

            modelBuilder.Entity("webapi.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<string>("FirstName")
                        .HasColumnType("TEXT");

                    b.Property<string>("LastName")
                        .HasColumnType("TEXT");

                    b.Property<string>("Password")
                        .HasColumnType("TEXT");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.ToTable("Users");
                });

            modelBuilder.Entity("webapi.Entities.Booking", b =>
                {
                    b.HasOne("webapi.Entities.Screening", "Screening")
                        .WithMany("Bookings")
                        .HasForeignKey("ScreeningId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("webapi.Entities.User", "User")
                        .WithMany("Bookings")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Screening");

                    b.Navigation("User");
                });

            modelBuilder.Entity("webapi.Entities.BookingXSeat", b =>
                {
                    b.HasOne("webapi.Entities.Booking", "Booking")
                        .WithMany("BookingXSeats")
                        .HasForeignKey("BookingId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("webapi.Entities.Seat", "Seat")
                        .WithMany("BookingXSeats")
                        .HasForeignKey("SeatId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("webapi.Entities.TicketType", "TicketType")
                        .WithMany("BookingXSeats")
                        .HasForeignKey("TicketTypeId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Booking");

                    b.Navigation("Seat");

                    b.Navigation("TicketType");
                });

            modelBuilder.Entity("webapi.Entities.MovieXCategory", b =>
                {
                    b.HasOne("webapi.Entities.Category", "Category")
                        .WithMany("MovieXCategories")
                        .HasForeignKey("CategoryId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("webapi.Entities.Movie", "Movie")
                        .WithMany("MovieXCategories")
                        .HasForeignKey("MovieId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Category");

                    b.Navigation("Movie");
                });

            modelBuilder.Entity("webapi.Entities.Screening", b =>
                {
                    b.HasOne("webapi.Entities.Movie", "Movie")
                        .WithMany("Screenings")
                        .HasForeignKey("MovieId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("webapi.Entities.Theater", "Theater")
                        .WithMany("Screenings")
                        .HasForeignKey("TheaterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Movie");

                    b.Navigation("Theater");
                });

            modelBuilder.Entity("webapi.Entities.Seat", b =>
                {
                    b.HasOne("webapi.Entities.Theater", "Theater")
                        .WithMany("Seats")
                        .HasForeignKey("TheaterId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Theater");
                });

            modelBuilder.Entity("webapi.Entities.Booking", b =>
                {
                    b.Navigation("BookingXSeats");
                });

            modelBuilder.Entity("webapi.Entities.Category", b =>
                {
                    b.Navigation("MovieXCategories");
                });

            modelBuilder.Entity("webapi.Entities.Movie", b =>
                {
                    b.Navigation("MovieXCategories");

                    b.Navigation("Screenings");
                });

            modelBuilder.Entity("webapi.Entities.Screening", b =>
                {
                    b.Navigation("Bookings");
                });

            modelBuilder.Entity("webapi.Entities.Seat", b =>
                {
                    b.Navigation("BookingXSeats");
                });

            modelBuilder.Entity("webapi.Entities.Theater", b =>
                {
                    b.Navigation("Screenings");

                    b.Navigation("Seats");
                });

            modelBuilder.Entity("webapi.Entities.TicketType", b =>
                {
                    b.Navigation("BookingXSeats");
                });

            modelBuilder.Entity("webapi.Entities.User", b =>
                {
                    b.Navigation("Bookings");
                });
#pragma warning restore 612, 618
        }
    }
}
