//package com.eVote.controller;
//
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.access.prepost.PreAuthorize;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.eVote.dto.VoteDTO;
//import com.eVote.entity.Votes;
//import com.eVote.service.VotesService;
//
//@RestController
//@RequestMapping("/votes") // Updated path to /votes
//public class VotesController {
//
//    private final VotesService votesService;
//
//    public VotesController(VotesService votesService) {
//        this.votesService = votesService;
//    }
//
//    // Only authenticated users can create a vote
//    @PostMapping
//    @PreAuthorize("hasRole('ROLE_USER')") // Any authenticated user can create a vote
//    public ResponseEntity<String> createVote(@RequestBody VoteDTO voteDto) {
//        try {
//            votesService.save(voteDto);
//            return ResponseEntity.status(HttpStatus.CREATED).body("Vote successfully created!");
//        } catch (IllegalArgumentException ex) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
//        }
//    }
//
//    // Any authenticated user can view a vote by its ID
//    @GetMapping("/{id}")
//    @PreAuthorize("hasRole('ROLE_USER')") // Any authenticated user can view a vote
//    public ResponseEntity<Votes> getVote(@PathVariable Integer id) {
//        Votes vote = votesService.getById(id);
//        if (vote != null) {
//            return ResponseEntity.ok(vote);
//        } else {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
//        }
//    }
//}

package com.eVote.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.eVote.dto.VoteDTO;
import com.eVote.service.VotesService;

import java.util.List;

@RestController
@RequestMapping("/votes")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST})
public class VotesController {

    private final VotesService votesService;

    public VotesController(VotesService votesService) {
        this.votesService = votesService;
    }

    
    @PostMapping
    public ResponseEntity<String> createVote(@RequestBody VoteDTO voteDto) {
        try {
        	if (voteDto.getUserId() == null) {
                System.out.println("User ID is null, proceeding without it...");
        	}
            votesService.save(voteDto);
            return ResponseEntity.status(HttpStatus.CREATED).body("Vote successfully created!");
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
        }
    }

    @GetMapping("/leader/{pollId}")
    public ResponseEntity<String> getLeaderByPoll(@PathVariable Integer pollId) {
        String leader = votesService.findLeaderByPollId(pollId);
        return ResponseEntity.ok("Leader is: " + leader);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<VoteDTO> getVote(@PathVariable Integer id) {
        VoteDTO vote = votesService.getById(id);
        return vote != null ? ResponseEntity.ok(vote) : ResponseEntity.notFound().build();
    }

    @GetMapping("/all")
    public ResponseEntity<List<VoteDTO>> getAllVotes() {
        return ResponseEntity.ok(votesService.getAll());
    }

    @GetMapping("/poll/{pollId}")
    public ResponseEntity<List<VoteDTO>> getVotesByPollId(@PathVariable Integer pollId) {
        List<VoteDTO> votes = votesService.getByPollId(pollId);
        return votes.isEmpty() ? ResponseEntity.notFound().build() : ResponseEntity.ok(votes);
    }

    @GetMapping("/candidate/{candidateId}")
    public ResponseEntity<List<VoteDTO>> getVotesByCandidateId(@PathVariable Integer candidateId) {
        List<VoteDTO> votes = votesService.getByCandidateId(candidateId);
        return votes.isEmpty() ? ResponseEntity.notFound().build() : ResponseEntity.ok(votes);
    }
}
