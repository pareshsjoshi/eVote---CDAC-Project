using Backend.Entity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Backend.Repositories
{
    public interface ILoggerRepository
    {
        // Asynchronous method to retrieve all logs
        Task<IEnumerable<Logger>> GetAllLogsAsync();

        // Asynchronous method to retrieve a log by its ID
        Task<Logger> GetLogByIdAsync(int logId);

        // Asynchronous method to create a new log
        Task CreateLogAsync(Logger log);
    }
}
