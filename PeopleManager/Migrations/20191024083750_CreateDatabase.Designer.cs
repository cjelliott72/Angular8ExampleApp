﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using PeopleManager.Data;

namespace PeopleManager.Migrations
{
    [DbContext(typeof(PeopleContext))]
    [Migration("20191024083750_CreateDatabase")]
    partial class CreateDatabase
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.0");

            modelBuilder.Entity("PeopleManager.Models.People", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DateOfBirth")
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT")
                        .HasMaxLength(50);

                    b.HasKey("Id");

                    b.ToTable("People");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            DateOfBirth = new DateTime(1980, 12, 1, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Name = "Bob Smith"
                        },
                        new
                        {
                            Id = 2,
                            DateOfBirth = new DateTime(1988, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Name = "Jane Auburn"
                        },
                        new
                        {
                            Id = 3,
                            DateOfBirth = new DateTime(1979, 4, 5, 0, 0, 0, 0, DateTimeKind.Unspecified),
                            Name = "William Burrows"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
