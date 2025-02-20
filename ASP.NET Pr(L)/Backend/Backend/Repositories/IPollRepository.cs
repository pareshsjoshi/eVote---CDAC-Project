using Backend.Entity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Backend.Repositories
{
    public interface IPollRepository
    {
        Task<Polls> GetPollByIdAsync(int PollId);
        Task<IEnumerable<Polls>> GetAllPollsAsync();
        Task CreatePollAsync(Polls Poll);
        Task UpdatePollAsync(Polls Poll);
        Task DeletePollAsync(int PollId);
    }
}


