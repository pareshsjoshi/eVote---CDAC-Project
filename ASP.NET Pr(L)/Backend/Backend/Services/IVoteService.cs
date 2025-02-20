using Backend.Entity;

namespace Backend.Services
{
    public interface IVoteService
    {
        Task<IEnumerable<Vote>> GetAllVotesAsync();
        Task<Vote> GetVoteByIdAsync(int id);
        Task CreateVoteAsync(Vote vote);
        Task UpdateVoteAsync(Vote vote);
        Task DeleteVoteAsync(int id);
    }
}
