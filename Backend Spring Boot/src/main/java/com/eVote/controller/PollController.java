package com.eVote.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eVote.dto.PollDTO;
import com.eVote.entity.Polls;
import com.eVote.service.PollService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "https://fluffy-enigma-w4vvpg6jgrr3g4qg-5173.app.github.dev")
public class PollController {

	private final PollService pollService;

	@Autowired
	public PollController(PollService pollService) {
		this.pollService = pollService;
	}

	// Get all polls
	@GetMapping("/poll-records")
	public ResponseEntity<List<PollDTO>> getAllPolls() {
		List<PollDTO> pollDTOs = pollService.getAllPolls();
		return ResponseEntity.ok(pollDTOs);
	}

	// Get a poll by its ID
	@GetMapping("/poll-records/{id}")
	public ResponseEntity<PollDTO> getPollById(@PathVariable Integer id) {
		PollDTO pollDTO = pollService.getPollById(id);
		return pollDTO != null ? ResponseEntity.ok(pollDTO) : ResponseEntity.notFound().build();
	}

	// Create or update a poll
	@PostMapping("/poll-create/save")
	public ResponseEntity<PollDTO> savePoll(@Valid @RequestBody PollDTO pollDto) {
		PollDTO savedPoll = pollService.savePoll(pollDto);
		return ResponseEntity.ok(savedPoll);
	}

	// Delete a poll by its ID
	@DeleteMapping("/poll-delete/{id}")
	public ResponseEntity<Void> deletePoll(@PathVariable Integer id) {
		pollService.deletePoll(id);
		return ResponseEntity.noContent().build();
	}
}


@RestController
@RequestMapping("/polls")
@CrossOrigin(origins = "https://fluffy-enigma-w4vvpg6jgrr3g4qg-5173.app.github.dev")
class PollControllerVoter {

	private final PollService pollService;

	@Autowired
	public PollControllerVoter(PollService pollService) {
		this.pollService = pollService;
	}

	// Get all polls
	@GetMapping
	public ResponseEntity<List<PollDTO>> getNonClosedPolls() {
		List<PollDTO> pollDTOs = pollService.getNonClosedPolls();
		return ResponseEntity.ok(pollDTOs);
	}

	// Get a poll by its ID
	@GetMapping("/{id}")
	public ResponseEntity<PollDTO> getPollById(@PathVariable Integer id) {
		PollDTO pollDTO = pollService.getPollById(id);
		return pollDTO != null ? ResponseEntity.ok(pollDTO) : ResponseEntity.notFound().build();
	}
}
