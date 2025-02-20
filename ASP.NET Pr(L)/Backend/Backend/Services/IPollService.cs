using Backend.Entity;
using System.Collections.Generic;

namespace Backend.Services
{
    public interface IPollService
    {
        Task<IEnumerable<Polls>> GetAllPolls();
        Task<Polls?> GetPollById(int id);
        Task CreatePoll(Polls Poll);
        Task UpdatePoll(Polls Poll);
        Task DeletePoll(int id);
    }
}
