using Backend.DTOs;
using Backend.Entity;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Backend.Controllers
{
    [Route("/admin")]
    [ApiController]
    public class PollController : ControllerBase
    {
        private readonly IPollService _PollService;

        public PollController(IPollService PollService)
        {
            _PollService = PollService;
        }

        [HttpGet("/admin/poll-records")]
        public async Task<IActionResult> GetAllPolls()
        {
            var Polls = await _PollService.GetAllPolls();
            if (Polls == null || !Polls.Any())
            {
                return NoContent(); // No content available
            }
            return Ok(Polls);
        }

        [HttpGet("/admin/polls/{id}")]
        public async Task<IActionResult> GetPollById(int id)
        {
            var Poll = await _PollService.GetPollById(id);
            if (Poll == null)
                return NotFound();

            return Ok(Poll);
        }

        //[HttpPost("/admin/poll-create/save")]
        //public async Task<IActionResult> CreatePoll([FromBody] Polls Poll)
        //{
        //    Console.WriteLine(Poll);
        //    await _PollService.CreatePoll(Poll);
        //    return CreatedAtAction(nameof(GetPollById), new { id = Poll.PollId }, Poll);
        //}

        [HttpPost("/admin/poll-create/save")]
        public async Task<IActionResult> CreatePoll(PollDto PollDto)
        {
            Console.WriteLine(PollDto);
            if(PollDto == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState); // Return bad request if the model is invalid
            }
            Polls Poll = new(PollDto.Title, PollDto.Description, PollDto.StartDate, PollDto.EndDate, PollDto.Status, PollDto.CreatedBy, PollDto.UpdatedBy);
            try
            {
                await _PollService.CreatePoll(Poll);
            }
            catch( Exception e)
            {
                Console.WriteLine(e.Message);
            }
            return CreatedAtAction(nameof(GetPollById), new { id = Poll.PollId }, PollDto);
        }

        [HttpPut("/admin/poll-update/{id}")]
        public async Task<IActionResult> UpdatePoll(int id, PollDto PollDto)
        {
            if (PollDto == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState); // Return bad request if the model is invalid
            }

            var existingPoll = await _PollService.GetPollById(id);
            if (existingPoll == null)
            {
                return NotFound(); // Return NotFound if the user to update doesn't exist
            }
            Polls Polls = new(PollDto.Title, PollDto.Description, PollDto.StartDate, PollDto.EndDate, PollDto.Status, PollDto.CreatedBy, PollDto.UpdatedBy);
            Polls.PollId = id;
            await _PollService.UpdatePoll(Polls);
            return NoContent();
        }

        [HttpDelete("/admin/poll-delete/{id}")]
        public async Task<IActionResult> DeletePoll(int id)
        {
            await _PollService.DeletePoll(id);
            return NoContent();
        }
    }

    [Route("polls")]
    [ApiController]
    public class PollControllerExternal : ControllerBase
    {
        private readonly IPollService _PollServiceExt;

        public PollControllerExternal(IPollService PollServiceExt)
        {
            _PollServiceExt = PollServiceExt;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPolls()
        {
            var Polls = await _PollServiceExt.GetAllPolls();
            if (Polls == null || !Polls.Any())
            {
                return NoContent(); // No content available
            }
            return Ok(Polls);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPollById(int id)
        {
            var Poll = await _PollServiceExt.GetPollById(id);
            if (Poll == null)
                return NotFound();

            return Ok(Poll);
        }
    }
}
