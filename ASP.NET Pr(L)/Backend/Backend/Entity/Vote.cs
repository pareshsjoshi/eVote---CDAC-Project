using System;
using Backend.Entity;
using System.ComponentModel.DataAnnotations;

namespace Backend.Entity
{
    public class Vote
    {
        [Key]
        public int VoteId { get; set; }

        [Required]
        public int UserId { get; set; } // Foreign key for User entity

        [Required]
        public int PollId { get; set; } // Foreign key for Polls entity

        [Required]
        public int CandidateId { get; set; } // Foreign key for Candidate entity

        [Required]
        public DateTime VotedAt { get; set; } = DateTime.UtcNow; // Default to current UTC time

        // Navigation Properties
        //public User User { get; set; } // Navigation property for User entity
        //public Polls Poll { get; set; } // Navigation property for Polls entity
        //public Candidate Candidate { get; set; } // Navigation property for Candidate entity
    }
}
