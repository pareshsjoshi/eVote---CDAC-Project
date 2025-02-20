using Backend.Entity;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace eVoting_System.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoggerController : ControllerBase
    {
        private readonly ILoggerService _loggerService;

        public LoggerController(ILoggerService loggerService)
        {
            _loggerService = loggerService;
        }

        // Get all logs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Logger>>> GetAllLogs()
        {
            var logs = await _loggerService.GetAllLogsAsync();
            return Ok(logs);
        }

        // Get log by ID
        [HttpGet("{id}")]
        public async Task<ActionResult<Logger>> GetLogById(int id)
        {
            var log = await _loggerService.GetLogByIdAsync(id);
            if (log == null) return NotFound();

            return Ok(log);
        }

        // Create a new log
        [HttpPost]
        public async Task<ActionResult<Logger>> CreateLog([FromBody] Logger log)
        {
            await _loggerService.CreateLogAsync(log);
            return CreatedAtAction(nameof(GetLogById), new { id = log.Id }, log);
        }
    }
}
