package com.eVote.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eVote.dto.PollDTO;
import com.eVote.service.PollService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/admin")  // Admin endpoints for managing polls
@CrossOrigin(origins = "*")
public class PollController {

    private final PollService pollService;

    @Autowired
    public PollController(PollService pollService) {
        this.pollService = pollService;
    }

    // Admin can view all polls
    @GetMapping("/poll-records")
//   @PreAuthorize("hasRole('ROLE_ADMIN')")  // Only admins can view all polls
    public ResponseEntity<List<PollDTO>> getAllPolls() {
        List<PollDTO> pollDTOs = pollService.getAllPolls();
        return ResponseEntity.ok(pollDTOs);
    }

    // Admin can view a poll by its ID
    @GetMapping("/poll-records/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")  // Only admins can view a poll by ID
    public ResponseEntity<PollDTO> getPollById(@PathVariable Integer id) {
        PollDTO pollDTO = pollService.getPollById(id);
        return pollDTO != null ? ResponseEntity.ok(pollDTO) : ResponseEntity.notFound().build();
    }

    // Admin can create or update a poll
    @PostMapping("/poll-create/save")
    @PreAuthorize("hasRole('ROLE_ADMIN')")  // Only admins can create/update polls
    public ResponseEntity<PollDTO> savePoll(@Valid @RequestBody PollDTO pollDto) {
        PollDTO savedPoll = pollService.savePoll(pollDto);
        return ResponseEntity.ok(savedPoll);
    }

    // Admin can delete a poll by its ID
    @DeleteMapping("/poll-delete/{id}")
  //  @PreAuthorize("hasRole('ROLE_ADMIN')")  // Only admins can delete polls
    public ResponseEntity<Void> deletePoll(@PathVariable Integer id) {
        pollService.deletePoll(id);
        return ResponseEntity.noContent().build();
    }
}

@RestController
@RequestMapping("/polls")  // User endpoints for viewing polls
@CrossOrigin(origins = "*")
class PollControllerVoter {

    private final PollService pollService;

    @Autowired
    public PollControllerVoter(PollService pollService) {
        this.pollService = pollService;
    }

    // Any authenticated user can view non-closed polls
    @GetMapping
    @PreAuthorize("hasRole('ROLE_USER')")  // Only authenticated users can view non-closed polls
    public ResponseEntity<List<PollDTO>> getNonClosedPolls() {
        List<PollDTO> pollDTOs = pollService.getNonClosedPolls();
        return ResponseEntity.ok(pollDTOs);
    }

    // Any authenticated user can view a poll by its ID
    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_USER')")  // Only authenticated users can view a poll by ID
    public ResponseEntity<PollDTO> getPollById(@PathVariable Integer id) {
        PollDTO pollDTO = pollService.getPollById(id);
        return pollDTO != null ? ResponseEntity.ok(pollDTO) : ResponseEntity.notFound().build();
    }
}
