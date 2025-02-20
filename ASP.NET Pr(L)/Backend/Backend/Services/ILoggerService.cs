using Backend.Entity;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Backend.Services
{
    public interface ILoggerService 
    {
        Task<IEnumerable<Logger>> GetAllLogsAsync();
        Task<Logger> GetLogByIdAsync(int logId);
        Task CreateLogAsync(Logger log);
    }
}
