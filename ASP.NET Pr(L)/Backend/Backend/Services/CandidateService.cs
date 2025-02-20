using Backend.Entity;
using Backend.Context;
using Backend.Services;
using System.Collections.Generic;
using System.Linq;
using Backend.Repositories;

namespace Backend.Services
{
    public class CandidateService : ICandidateService
    {
        private readonly ICandidateRepository _repository;

        public CandidateService(ICandidateRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Candidate>> GetAllCandidates() => await _repository.GetAllCandidatesAsync();

        public async Task<Candidate?> GetCandidateById(int id) => await _repository.GetCandidateByIdAsync(id);

        public async Task<IEnumerable<Candidate>> GetAllCandidatesByPoll(int pollId) => await _repository.GetAllCandidatesByPollAsync(pollId);

        public async Task CreateCandidate(Candidate candidate) => await _repository.CreateCandidateAsync(candidate);

        public async Task UpdateCandidate(Candidate candidate) => await _repository.UpdateCandidateAsync(candidate);

        public async Task DeleteCandidate(int id) => await _repository.DeleteCandidateAsync(id);
    }
}
