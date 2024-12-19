package com.eVote.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eVote.dto.CandidateDTO;
import com.eVote.service.CandidateService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "https://fluffy-enigma-w4vvpg6jgrr3g4qg-5173.app.github.dev")
//@CrossOrigin(origins = "http://localhost:5173/")
public class CandidateController {

	@Autowired
	private CandidateService candidateService;

	@GetMapping("/candidate-records")
	public ResponseEntity<List<CandidateDTO>> getAllCandidates() {
		return new ResponseEntity<>(candidateService.getAllCandidates(), HttpStatus.OK);
	}

	@GetMapping("/candidate-records/{id}")
	public ResponseEntity<CandidateDTO> getCandidateById(@PathVariable Integer id) {
		CandidateDTO candidateDTO = candidateService.getCandidateById(id);
		if (candidateDTO != null) {
			return new ResponseEntity<>(candidateDTO, HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@PostMapping("/candidate-create/save")
	public ResponseEntity<CandidateDTO> createCandidate(@RequestBody CandidateDTO candidateDTO) {
		CandidateDTO savedCandidate = candidateService.saveCandidate(candidateDTO);
		return new ResponseEntity<>(savedCandidate, HttpStatus.CREATED);
	}

	@PutMapping("/candidate-update/{id}")
	public ResponseEntity<CandidateDTO> updateCandidate(@PathVariable Integer id,
			@RequestBody CandidateDTO candidateDTO) {
		CandidateDTO updatedCandidate = candidateService.updateCandidate(id, candidateDTO);
		if (updatedCandidate != null) {
			return new ResponseEntity<>(updatedCandidate, HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	@DeleteMapping("/candidate-delete/{id}")
	public ResponseEntity<Void> deleteCandidate(@PathVariable Integer id) {
		candidateService.deleteCandidate(id);
		return ResponseEntity.noContent().build();
	}
}
