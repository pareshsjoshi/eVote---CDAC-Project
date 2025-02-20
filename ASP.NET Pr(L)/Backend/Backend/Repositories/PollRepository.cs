using Backend.Context;
using Backend.Entity;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Backend.Repositories
{
    public class PollRepository : IPollRepository
    {
        private readonly ApplicationDbContext _context;

        public PollRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<Polls> GetPollByIdAsync(int PollId)
        {
            return await _context.Polls.FindAsync(PollId);
        }

        public async Task<IEnumerable<Polls>> GetAllPollsAsync()
        {
            return await _context.Polls.ToListAsync();
        }

        public async Task CreatePollAsync(Polls Poll)
        {
            await _context.Polls.AddAsync(Poll);
            await _context.SaveChangesAsync();
        }

        public async Task UpdatePollAsync(Polls Poll)
        {
            //_context.Polls.Update(Poll);
            // Check if the polls is already tracked
            var existingPolls = await _context.Polls.FindAsync(Poll.PollId);
            if (existingPolls != null)
            {
                // If polls is already tracked, update its values
                _context.Entry(existingPolls).CurrentValues.SetValues(Poll);
            }
            else
            {
                // Otherwise, attach and mark as modified
                _context.Polls.Attach(Poll);
                _context.Entry(Poll).State = EntityState.Modified;
            }
            await _context.SaveChangesAsync();
        }

        public async Task DeletePollAsync(int PollId)
        {
            var Poll = await _context.Polls.FindAsync(PollId);
            if (Poll != null)
            {
                _context.Polls.Remove(Poll);
                await _context.SaveChangesAsync();
            }
        }
    }
}
