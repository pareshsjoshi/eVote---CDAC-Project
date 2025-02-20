using Backend.Entity;
using System.Collections.Generic;

namespace Backend.Services
{
    public interface ICandidateService
    {
        Task<IEnumerable<Candidate>> GetAllCandidates();
        Task<Candidate?> GetCandidateById(int id);
        Task<IEnumerable<Candidate>> GetAllCandidatesByPoll(int pollId);
        Task CreateCandidate(Candidate candidate);
        Task UpdateCandidate(Candidate candidate);
        Task DeleteCandidate(int id);
    }
}
