using System;
using System.ComponentModel.DataAnnotations;

namespace PeopleManager.Models
{
    public class People
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        public string Name { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime DateOfBirth { get; set; }

    }
}
