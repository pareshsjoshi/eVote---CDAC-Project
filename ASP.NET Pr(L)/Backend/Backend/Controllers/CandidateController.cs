using Backend.DTOs;
using Backend.Entity;
using Backend.Services;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Backend.Controllers
{
    [Route("/admin")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private readonly ICandidateService _candidateService;

        public CandidateController(ICandidateService candidateService)
        {
            _candidateService = candidateService;
        }

        [HttpGet("/admin/candidate-records")]
        public async Task<IActionResult> GetAllCandidates()
        {
            var Candidates = await _candidateService.GetAllCandidates();
            if (Candidates == null || !Candidates.Any())
            {
                return NoContent(); // No content available
            }
            return Ok(Candidates);
        }

        [HttpGet("/admin/candidate-records/{id}")]
        public async Task<IActionResult> GetCandidateById(int id)
        {
            var candidate = await _candidateService.GetCandidateById(id);
            if (candidate == null)
                return NotFound();

            return Ok(candidate);
        }

        [HttpPost("/admin/candidate-create/save")]
        public async Task<IActionResult> CreateCandidate(CandidateDto candidate)
        {
            if (candidate == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState); // Return bad request if the model is invalid
            }
            Candidate c = new Candidate(candidate.CreatedBy, candidate.UpdatedBy, candidate.agenda, candidate.name, candidate.pollId);
            try
            {
                await _candidateService.CreateCandidate(c);
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
            }
            return CreatedAtAction(nameof(GetCandidateById), new { id = c.CandidateId }, candidate);
        }

        [HttpPut("/admin/candidate-update/{id}")]
        public async Task<IActionResult> UpdateCandidate(int id, Candidate candidate)
        {
            if (candidate == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState); // Return bad request if the model is invalid
            }

            var existingCandidate = await _candidateService.GetCandidateById(id);
            if (existingCandidate == null)
            {
                return NotFound(); // Return NotFound if the candidate to update doesn't exist
            }

            candidate.CandidateId = id;
            await _candidateService.UpdateCandidate(candidate);
            return NoContent();
        }

        [HttpDelete("/admin/candidate-delete/{id}")]
        public async Task<IActionResult> DeleteCandidate(int id)
        {
            var existingCandidate = await _candidateService.GetCandidateById(id);
            if (existingCandidate == null)
            {
                return NotFound(); // Return NotFound if the candidate doesn't exist
            }
            await _candidateService.DeleteCandidate(id);
            return NoContent();
        }
    }

    [Route("/polls")]
    [ApiController]
    public class CabdidateControllerExternal : ControllerBase        
    {
        private readonly ICandidateService _candidateServiceExt;

        public CabdidateControllerExternal(ICandidateService candidateServiceExt)
        {
            _candidateServiceExt = candidateServiceExt;
        }
        [HttpGet("/polls/{pollId}")]
        public async Task<IActionResult> GetCandidateByPoll(int pollId)
        {
            var candidate = await _candidateServiceExt.GetAllCandidatesByPoll(pollId);
            if (candidate == null)
                return NotFound();

            return Ok(candidate);
        }
    }
}
