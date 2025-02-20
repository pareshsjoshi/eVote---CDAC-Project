using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace Backend.Entity
{
    public class Candidate
    {
        private int userId;

        public Candidate(String CreatedBy, String UpdatedBy, string agenda, string name, int pollId)
        {
            this.Agenda = agenda;
            this.Name = name;
            this.PollId = pollId;
            this.CreatedBy = CreatedBy;
            this.UpdatedBy = UpdatedBy;
        }

        [Key]
        public int CandidateId { get; set; }

        [Required]
        [MaxLength(50)]
        public string Name { get; set; }

        [Required]
        public int PollId { get; set; }

        [Required]
        public string Agenda { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        public string CreatedBy { get; set; }
        public DateTime? UpdatedAt { get; set; } = DateTime.UtcNow;
        public string UpdatedBy { get; set; }

        //public Polls Poll { get; set; }
    }
}
