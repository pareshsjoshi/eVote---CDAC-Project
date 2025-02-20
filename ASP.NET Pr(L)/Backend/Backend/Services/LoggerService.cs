using Backend.Entity;
using Backend.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Backend.Services
{
    public class LoggerService : ILoggerService
    {
        private readonly ILoggerRepository _loggerRepository;

        public LoggerService(ILoggerRepository loggerRepository)
        {
            _loggerRepository = loggerRepository;
        }

        // Get all logs
        public async Task<IEnumerable<Logger>> GetAllLogsAsync()
        {
            return await _loggerRepository.GetAllLogsAsync();
        }

        // Get log by ID
        public async Task<Logger> GetLogByIdAsync(int logId)
        {
            return await _loggerRepository.GetLogByIdAsync(logId);
        }

        // Create a new log
        public async Task CreateLogAsync(Logger log)
        {
            await _loggerRepository.CreateLogAsync(log);
        }
    }
}
