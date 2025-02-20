using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Http.HttpResults;

namespace Backend.DTOs
{
    public class PollDto(string Title, string Description, DateTime StartDate, DateTime EndDate, string Status, string CreatedBy, string UpdatedBy)
    {
        //public int PollId { get; set; }
        public string Title { get; set; } = Title;
        public string Description { get; set; } = Description;
        public DateTime StartDate { get; set; } = StartDate;
        public DateTime EndDate { get; set; } = EndDate;
        public string Status { get; set; } = Status;
        public string CreatedBy { get; set; } = CreatedBy;
        public string UpdatedBy { get; set; } = UpdatedBy;
    }
}
