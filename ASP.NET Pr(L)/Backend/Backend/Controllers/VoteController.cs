using Backend.Entity;
using Backend.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("/admin")]
    [ApiController]
    public class VotesController : ControllerBase
    {
        private readonly IVoteService _voteService;

        public VotesController(IVoteService voteService)
        {
            _voteService = voteService;
        }

        // GET: api/Votes
        [HttpGet]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<IEnumerable<Vote>>> GetVotes()
        {
            var votes = await _voteService.GetAllVotesAsync();
            return Ok(votes);
        }

        // GET: api/Votes/5
        [HttpGet("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<Vote>> GetVote(int id)
        {
            var vote = await _voteService.GetVoteByIdAsync(id);
            if (vote == null)
            {
                return NotFound();
            }
            return Ok(vote);
        }

        // POST: api/Votes
        [HttpPost("/polls/{poll_id}/vote")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult> CreateVote(int PollId, Vote vote)
        {
            await _voteService.CreateVoteAsync(vote);
            return CreatedAtAction(nameof(GetVote), new { id = vote.VoteId }, vote);
        }

        //// PUT: api/Votes/5
        //[HttpPut("{id}")]
        //public async Task<IActionResult> UpdateVote(int id, Vote vote)
        //{
        //    if (id != vote.VoteId)
        //    {
        //        return BadRequest();
        //    }

        //    await _voteService.UpdateVoteAsync(vote);
        //    return NoContent();
        //}

        //// DELETE: api/Votes/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteVote(int id)
        //{
        //    await _voteService.DeleteVoteAsync(id);
        //    return NoContent();
        //}
    }

    //[Route("/polls")]
    //[ApiController]
    //public class VoteControllerExternal : ControllerBase
    //{
    //    private readonly IVoteService _voteService;
    //    public VoteControllerExternal(IVoteService voteService)
    //    {
    //        _voteService = voteService;
    //    }

    //    // POST: api/Votes
    //    [HttpPost("/polls/{poll_id}/vote")]
    //    public async Task<ActionResult> CreateVote(int PollId, Vote vote)
    //    {
    //        await _voteService.CreateVoteAsync(vote);
    //        return CreatedAtAction(nameof(GetVote), new { id = vote.VoteId }, vote);
    //    }
    //}
}
