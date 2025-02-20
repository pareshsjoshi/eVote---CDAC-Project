using Backend.Entity;
using Backend.Context;
using System.Collections.Generic;
using System.Linq;
using Backend.Repositories;

namespace Backend.Services
{
    public class PollService : IPollService
    {
        private readonly IPollRepository _pollRepository;

        public PollService(IPollRepository pollRepository)
        {
            _pollRepository = pollRepository;
        }

        public async Task<IEnumerable<Polls>> GetAllPolls() => await _pollRepository.GetAllPollsAsync();

        public async Task<Polls?> GetPollById(int id) => await _pollRepository.GetPollByIdAsync(id);

        public async Task CreatePoll(Polls Poll) => await _pollRepository.CreatePollAsync(Poll);

        public async Task UpdatePoll(Polls Poll) => await _pollRepository.UpdatePollAsync(Poll);

        public async Task DeletePoll(int id) => await _pollRepository.DeletePollAsync(id);
    }
}
