using Backend.Entity;
using Backend.Repositories;

namespace Backend.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _repository;

        public UserService(IUserRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<User>> GetAllAsync() => await _repository.GetAllAsync();

        public async Task<User?> GetByIdAsync(int id) => await _repository.GetByIdAsync(id);

        public async Task AddAsync(User user) => await _repository.AddAsync(user);

        public async Task UpdateAsync(User user) => await _repository.UpdateAsync(user);

        public async Task DeleteAsync(int id) => await _repository.DeleteAsync(id);
    }
}
