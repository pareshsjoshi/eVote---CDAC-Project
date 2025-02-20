using System;
using Backend.Entity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend.Entity
{
    public class Logger
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("User")]
        public int UserId { get; set; }

        [Required]
        public string Action { get; set; }

        [Required]
        public DateTime CreatedAt { get; set; }

        public User User { get; set; }
    }
}
