using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace PeopleManager.Migrations
{
    public partial class CreateDatabase : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "People",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(maxLength: 50, nullable: false),
                    DateOfBirth = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_People", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "People",
                columns: new[] { "Id", "DateOfBirth", "Name" },
                values: new object[] { 1, new DateTime(1980, 12, 1, 0, 0, 0, 0, DateTimeKind.Unspecified), "Bob Smith" });

            migrationBuilder.InsertData(
                table: "People",
                columns: new[] { "Id", "DateOfBirth", "Name" },
                values: new object[] { 2, new DateTime(1988, 3, 22, 0, 0, 0, 0, DateTimeKind.Unspecified), "Jane Auburn" });

            migrationBuilder.InsertData(
                table: "People",
                columns: new[] { "Id", "DateOfBirth", "Name" },
                values: new object[] { 3, new DateTime(1979, 4, 5, 0, 0, 0, 0, DateTimeKind.Unspecified), "William Burrows" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "People");
        }
    }
}
