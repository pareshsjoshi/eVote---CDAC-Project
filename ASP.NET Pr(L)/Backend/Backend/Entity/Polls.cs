using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.SqlTypes;
using System.Xml.Linq;

namespace Backend.Entity
{
    public class Polls
    {
        [Key]
        public int PollId { get; set; }

        [Required]
        [MinLength(5), MaxLength(255)]
        public string Title { get; set; }

        [MinLength(5), MaxLength(1000)]
        public string Description { get; set; }

        [Required]
        public DateTime StartDate { get; set; }

        [Required]
        public DateTime EndDate { get; set; }

        [Required]
        [EnumDataType(typeof(PollStatus))]
        public string Status { get; set; } // Example: "Active", "Closed", "Scheduled"

        public List<Candidate> Candidates { get; set; } = new List<Candidate>();

        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public string CreatedBy { get; set; }
        public DateTime UpdatedAt { get; set; } = DateTime.UtcNow;
        public string UpdatedBy { get; set; }
        public Polls(string Title, string Description, DateTime StartDate, DateTime EndDate, string Status, string CreatedBy, string UpdatedBy)
        {
            this.Title = Title;
            this.Description = Description;
            this.StartDate = StartDate;
            this.EndDate = EndDate;
            this.Status = Status;
            this.CreatedBy = CreatedBy;
            this.UpdatedBy = UpdatedBy;
        }

        public enum PollStatus
        {
            Active,
            Closed,
            Scheduled
        }
    }
}
