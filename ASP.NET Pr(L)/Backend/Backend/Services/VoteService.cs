using Backend.Entity;
using Backend.Repositories;
using Backend.Services;

namespace AspNetCoreMySQLDemo.Services
{
    public class VoteService : IVoteService
    {
        private readonly IVoteRepository _voteRepository;

        public VoteService(IVoteRepository voteRepository)
        {
            _voteRepository = voteRepository;
        }

        public async Task<IEnumerable<Vote>> GetAllVotesAsync()
        {
            return await _voteRepository.GetAllVotesAsync();
        }

        public async Task<Vote> GetVoteByIdAsync(int id)
        {
            return await _voteRepository.GetVoteByIdAsync(id);
        }

        public async Task CreateVoteAsync(Vote vote)
        {
            await _voteRepository.CreateVoteAsync(vote);
        }

        public async Task UpdateVoteAsync(Vote vote)
        {
            await _voteRepository.UpdateVoteAsync(vote);
        }

        public async Task DeleteVoteAsync(int id)
        {
            await _voteRepository.DeleteVoteAsync(id);
        }
    }
}
