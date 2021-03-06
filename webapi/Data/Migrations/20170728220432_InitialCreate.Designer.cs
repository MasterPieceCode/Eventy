﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;
using webapi.Data;

namespace webapi.Data.Migrations
{
    [DbContext(typeof(ApplicationDbContext))]
    [Migration("20170728220432_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.0-preview2-25794");

            modelBuilder.Entity("webapi.Models.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp");

                    b.Property<DateTimeOffset?>("CreateDate");

                    b.Property<string>("Email");

                    b.Property<bool>("EmailConfirmed");

                    b.Property<DateTimeOffset?>("LastPasswordChangeDate");

                    b.Property<DateTimeOffset?>("LastSignInDate");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("NormalizedEmail");

                    b.Property<string>("NormalizedUserName");

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.ToTable("ApplicationUser");
                });

            modelBuilder.Entity("webapi.Models.Event", b =>
                {
                    b.Property<long>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description")
                        .IsRequired();

                    b.Property<DateTime>("EventDateTime");

                    b.Property<byte[]>("Img");

                    b.HasKey("Id");

                    b.ToTable("Cards");
                });

            modelBuilder.Entity("webapi.Models.RefData", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Discriminator")
                        .IsRequired();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("Name")
                        .IsUnique();

                    b.ToTable("RefData");

                    b.HasDiscriminator<string>("Discriminator").HasValue("RefData");
                });

            modelBuilder.Entity("webapi.Models.Location", b =>
                {
                    b.Property<long?>("EventId");

                    b.Property<string>("Address");

                    b.Property<int>("CityId");

                    b.Property<int>("CountryId");

                    b.Property<double>("Longitude");

                    b.Property<double>("Lttitude");

                    b.HasKey("EventId");

                    b.ToTable("Cards");
                });

            modelBuilder.Entity("webapi.Models.Category", b =>
                {
                    b.HasBaseType("webapi.Models.RefData");

                    b.Property<long>("EventId");

                    b.HasIndex("EventId");

                    b.ToTable("Category");

                    b.HasDiscriminator().HasValue("Category");
                });

            modelBuilder.Entity("webapi.Models.City", b =>
                {
                    b.HasBaseType("webapi.Models.RefData");

                    b.Property<int>("CountryId");

                    b.ToTable("City");

                    b.HasDiscriminator().HasValue("City");
                });

            modelBuilder.Entity("webapi.Models.Country", b =>
                {
                    b.HasBaseType("webapi.Models.RefData");


                    b.ToTable("Country");

                    b.HasDiscriminator().HasValue("Country");
                });

            modelBuilder.Entity("webapi.Models.Organizer", b =>
                {
                    b.HasBaseType("webapi.Models.RefData");

                    b.Property<long>("EventId");

                    b.Property<bool>("IsPrincipal");

                    b.Property<int>("UserId");

                    b.Property<string>("UserId1");

                    b.HasIndex("EventId");

                    b.HasIndex("UserId1");

                    b.ToTable("Organizer");

                    b.HasDiscriminator().HasValue("Organizer");
                });

            modelBuilder.Entity("webapi.Models.Participant", b =>
                {
                    b.HasBaseType("webapi.Models.RefData");

                    b.Property<string>("Email");

                    b.Property<long>("EventId");

                    b.HasIndex("EventId");

                    b.ToTable("Participant");

                    b.HasDiscriminator().HasValue("Participant");
                });

            modelBuilder.Entity("webapi.Models.Location", b =>
                {
                    b.HasOne("webapi.Models.Event")
                        .WithOne("Location")
                        .HasForeignKey("webapi.Models.Location", "EventId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("webapi.Models.Category", b =>
                {
                    b.HasOne("webapi.Models.Event", "Event")
                        .WithMany()
                        .HasForeignKey("EventId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("webapi.Models.Organizer", b =>
                {
                    b.HasOne("webapi.Models.Event", "Event")
                        .WithMany("Organizers")
                        .HasForeignKey("EventId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("webapi.Models.ApplicationUser", "User")
                        .WithMany()
                        .HasForeignKey("UserId1");
                });

            modelBuilder.Entity("webapi.Models.Participant", b =>
                {
                    b.HasOne("webapi.Models.Event", "Event")
                        .WithMany("Participants")
                        .HasForeignKey("EventId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
