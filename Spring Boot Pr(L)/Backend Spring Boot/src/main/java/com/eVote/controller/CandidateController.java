package com.eVote.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.eVote.dto.CandidateDTO;
import com.eVote.service.CandidateService;
import org.springframework.security.access.prepost.PreAuthorize;
@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
// @CrossOrigin(origins = "http://localhost:5173/") // Uncomment for local testing
public class CandidateController {

    @Autowired
    private CandidateService candidateService;

    @GetMapping("/candidate-records")
    @PreAuthorize("hasRole('ROLE_ADMIN')")  // Only admins can access
    public ResponseEntity<List<CandidateDTO>> getAllCandidates() {
        return new ResponseEntity<>(candidateService.getAllCandidates(), HttpStatus.OK);
    }

    @GetMapping("/candidate-records/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")  // Only admins can access
    public ResponseEntity<CandidateDTO> getCandidateById(@PathVariable Integer id) {
        CandidateDTO candidateDTO = candidateService.getCandidateById(id);
        if (candidateDTO != null) {
            return new ResponseEntity<>(candidateDTO, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/candidate-create/save")
    @PreAuthorize("hasRole('ROLE_ADMIN')")  // Only admins can create candidates
    public ResponseEntity<CandidateDTO> createCandidate(@RequestBody CandidateDTO candidateDTO) {
        CandidateDTO savedCandidate = candidateService.saveCandidate(candidateDTO);
        return new ResponseEntity<>(savedCandidate, HttpStatus.CREATED);
    }

    @PutMapping("/candidate-update/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")  // Only admins can update candidates
    public ResponseEntity<CandidateDTO> updateCandidate(@PathVariable Integer id,
            @RequestBody CandidateDTO candidateDTO) {
        CandidateDTO updatedCandidate = candidateService.updateCandidate(id, candidateDTO);
        if (updatedCandidate != null) {
            return new ResponseEntity<>(updatedCandidate, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/candidate-delete/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")  // Only admins can delete candidates
    public ResponseEntity<Void> deleteCandidate(@PathVariable Integer id) {
        candidateService.deleteCandidate(id);
        return ResponseEntity.noContent().build();
    }

    // ✅ New Endpoint: Get Candidates by Poll ID (Accessible by both Admin & Voter)
    @GetMapping("/polls/{pollId}/candidates")
    @PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_VOTER')")  // Admins & Voters can access
    public ResponseEntity<List<CandidateDTO>> getCandidatesByPoll(@PathVariable Integer pollId) {
        List<CandidateDTO> candidates = candidateService.getCandidatesByPoll(pollId);
        return new ResponseEntity<>(candidates, HttpStatus.OK);
    }
}

