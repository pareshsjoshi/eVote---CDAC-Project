using Microsoft.AspNetCore.Http.HttpResults;

namespace Backend.DTOs
{
    public class CandidateDto
    {
        public String agenda { get; set; }
        public String name { get; set; }
        public int pollId { get; set; }
        public int userId { get; set; }
        public string CreatedBy { get; set; }
        public string UpdatedBy { get; set; }
        public CandidateDto(String CreatedBy, String UpdatedBy, String agenda, String name, int pollId)
        {
            this.agenda = agenda;
            this.name = name;
            this.pollId = pollId;
            this.CreatedBy = CreatedBy;
            this.UpdatedBy = UpdatedBy;
        }
    }
}
