using Microsoft.EntityFrameworkCore;
using Backend.Context;
using Backend.Entity;

namespace Backend.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _context;

        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<User>> GetAllAsync()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<User?> GetByIdAsync(int id)
        {
            return await _context.Users.FindAsync(id);
        }

        public async Task<User?> GetByEmailAsync(string email)
        {
            return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
        }

        public async Task AddAsync(User user)
        {
            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(User user)
        {
            //_context.Users.Update(user);
            // Check if the users is already tracked
            var existingUsers = await _context.Users.FindAsync(user.UserId);
            if (existingUsers != null)
            {
                // If users is already tracked, update its values
                _context.Entry(existingUsers).CurrentValues.SetValues(user);
            }
            else
            {
                // Otherwise, attach and mark as modified
                _context.Users.Attach(user);
                _context.Entry(user).State = EntityState.Modified;
            }
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user != null)
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
            }
        }

        public Task<string> LoginAsync(string email, string password)
        {
            throw new NotImplementedException();
        }
    }
}
