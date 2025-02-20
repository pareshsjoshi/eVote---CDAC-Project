using Backend.Context;
using Backend.Entity;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Backend.Repositories
{
    public class LoggerRepository : ILoggerRepository
    {
        private readonly ApplicationDbContext _context;

        // Constructor to inject the ApplicationDbContext
        public LoggerRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        // Get all logs asynchronously
        public async Task<IEnumerable<Logger>> GetAllLogsAsync()
        {
            // Ensure 'Loggers' DbSet is defined in ApplicationDbContext
            return await _context.Loggers.ToListAsync();
        }

        // Get log by ID asynchronously
        public async Task<Logger> GetLogByIdAsync(int logId)
        {
            // Fetching the log by its ID
            return await _context.Loggers
                .FirstOrDefaultAsync(l => l.Id == logId); // Ensure correct logId
        }

        // Create a new log asynchronously
        public async Task CreateLogAsync(Logger log)
        {
            // Ensure log is a valid Logger instance
            _context.Loggers.Add(log);
            await _context.SaveChangesAsync(); // Make sure SaveChangesAsync is properly awaited
        }
    }
}
