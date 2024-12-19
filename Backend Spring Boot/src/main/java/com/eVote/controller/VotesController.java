package com.eVote.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eVote.dto.VoteDTO;
import com.eVote.entity.Votes;
import com.eVote.service.VotesService;

@RestController
@RequestMapping("/votes") // Updated path to /votes
public class VotesController {

	private final VotesService votesService;

	public VotesController(VotesService votesService) {
		this.votesService = votesService;
	}

	@PostMapping
	public ResponseEntity<String> createVote(@RequestBody VoteDTO voteDto) {
		try {
			votesService.save(voteDto);
			return ResponseEntity.status(HttpStatus.CREATED).body("Vote successfully created!");
		} catch (IllegalArgumentException ex) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getMessage());
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<Votes> getVote(@PathVariable Integer id) {
		Votes vote = votesService.getById(id);
		if (vote != null) {
			return ResponseEntity.ok(vote);
		} else {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}
	}
}
