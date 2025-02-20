using Microsoft.EntityFrameworkCore;
using Backend.Context;
using Backend.Entity;

namespace Backend.Repositories
{
    public class VoteRepository : IVoteRepository
    {
        private readonly ApplicationDbContext _context;

        public VoteRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Vote>> GetAllVotesAsync()
        {
            return await _context.Votes.ToListAsync();
        }

        public async Task<Vote> GetVoteByIdAsync(int id)
        {
            return await _context.Votes.FindAsync(id);
        }

        public async Task CreateVoteAsync(Vote vote)
        {
            await _context.Votes.AddAsync(vote);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateVoteAsync(Vote vote)
        {
            _context.Votes.Update(vote);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteVoteAsync(int id)
        {
            var vote = await _context.Votes.FindAsync(id);
            if (vote != null)
            {
                _context.Votes.Remove(vote);
                await _context.SaveChangesAsync();
            }
        }
    }
}
