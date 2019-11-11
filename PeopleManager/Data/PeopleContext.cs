using Microsoft.EntityFrameworkCore;
using PeopleManager.Models;
using System;

namespace PeopleManager.Data
{
    public class PeopleContext : DbContext
    {
        public PeopleContext(DbContextOptions<PeopleContext> options) : base(options) { }
        public DbSet<People> People { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"Data source=People.db");
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<People>().HasData(
                new People { Id = 1, Name = "Bob Smith", DateOfBirth = DateTime.Parse("1980/12/01") },
                new People { Id = 2, Name = "Jane Auburn", DateOfBirth = DateTime.Parse("1988/03/22") },
                new People { Id = 3, Name = "William Burrows", DateOfBirth = DateTime.Parse("1979/04/05") }
                );
        }
    }
}
