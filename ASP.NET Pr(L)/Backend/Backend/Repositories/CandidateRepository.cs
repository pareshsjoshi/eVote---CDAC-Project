using Backend.Context;
using Backend.Entity;
using Backend.Repositories;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Backend.Repositories
{
    public class CandidateRepository : ICandidateRepository
    {
        private readonly ApplicationDbContext _context;

        public CandidateRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Candidate>> GetAllCandidatesAsync()
        {
            return await _context.Candidates.ToListAsync();
        }
        public async Task<Candidate> GetCandidateByIdAsync(int candidateId)
        {
            return await _context.Candidates.FindAsync(candidateId);
        }

        public async Task<IEnumerable<Candidate>> GetAllCandidatesByPollAsync(int pollId)
        {
            return await _context.Candidates.Where(c => c.PollId == pollId).ToListAsync();
        }

        public async Task CreateCandidateAsync(Candidate candidate)
        {
            await _context.Candidates.AddAsync(candidate);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateCandidateAsync(Candidate candidate)
        {
            //_context.Candidates.Update(candidate);
            // Check if the candidate is already tracked
            var existingCandidate = await _context.Candidates.FindAsync(candidate.CandidateId);
            if (existingCandidate != null)
            {
                // If candidate is already tracked, update its values
                _context.Entry(existingCandidate).CurrentValues.SetValues(candidate);
            }
            else
            {
                // Otherwise, attach and mark as modified
                _context.Candidates.Attach(candidate);
                _context.Entry(candidate).State = EntityState.Modified;
            }
            await _context.SaveChangesAsync();
        }

        public async Task DeleteCandidateAsync(int candidateId)
        {
            var candidate = await _context.Candidates.FindAsync(candidateId);
            if (candidate != null)
            {
                _context.Candidates.Remove(candidate);
                await _context.SaveChangesAsync();
            }
        }
    }
}
