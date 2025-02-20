using Backend.Entity;

namespace Backend.Repositories
{
    public interface IVoteRepository
    {
        Task<IEnumerable<Vote>> GetAllVotesAsync();
        Task<Vote> GetVoteByIdAsync(int id);
        Task CreateVoteAsync(Vote vote);
        Task UpdateVoteAsync(Vote vote);
        Task DeleteVoteAsync(int id);
    }
}
