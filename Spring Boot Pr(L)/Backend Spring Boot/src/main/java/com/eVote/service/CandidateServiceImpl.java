package com.eVote.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eVote.dto.CandidateDTO;
import com.eVote.entity.Candidate;
import com.eVote.entity.Polls;
import com.eVote.repository.CandidateRepository;
import com.eVote.repository.PollRepository;

@Service
public class CandidateServiceImpl implements CandidateService {

	@Autowired
	private CandidateRepository candidateRepository;

	@Autowired
	private PollRepository pollRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<CandidateDTO> getAllCandidates() {
		return candidateRepository.findAll().stream().map(candidate -> modelMapper.map(candidate, CandidateDTO.class))
				.collect(Collectors.toList());
	}
	
	@Override
	public List<CandidateDTO> getCandidatesByPoll(Integer pollID){
		return candidateRepository.findAll().stream().map(candidate -> modelMapper.map(candidate, CandidateDTO.class))
				.filter(candidate -> candidate.getPollId() == pollID)
				.collect(Collectors.toList());
	}

	@Override
	public CandidateDTO getCandidateById(Integer id) {
		Optional<Candidate> candidate = candidateRepository.findById(id);
		return candidate.map(value -> modelMapper.map(value, CandidateDTO.class)).orElse(null);
	}

	@Override
	public CandidateDTO saveCandidate(CandidateDTO candidateDTO) {
		Optional<Polls> poll = pollRepository.findById(candidateDTO.getPollId());
		if (!poll.isPresent()) {
			throw new IllegalArgumentException("Invalid poll ID: " + candidateDTO.getPollId());
		}
		Candidate candidate = modelMapper.map(candidateDTO, Candidate.class);
		candidate.setPoll(poll.get());
		Candidate savedCandidate = candidateRepository.save(candidate);
		return modelMapper.map(savedCandidate, CandidateDTO.class);
	}

	@Override
	public CandidateDTO updateCandidate(Integer id, CandidateDTO candidateDTO) {
		Optional<Candidate> existingCandidate = candidateRepository.findById(id);
		if (existingCandidate.isPresent()) {
			Optional<Polls> poll = pollRepository.findById(candidateDTO.getPollId());
			if (!poll.isPresent()) {
				throw new IllegalArgumentException("Invalid poll ID: " + candidateDTO.getPollId());
			}
			Candidate candidate = modelMapper.map(candidateDTO, Candidate.class);
			candidate.setCandidateId(id);
			candidate.setPoll(poll.get());
			Candidate updatedCandidate = candidateRepository.save(candidate);
			return modelMapper.map(updatedCandidate, CandidateDTO.class);
		}
		return null;
	}

	@Override
	public void deleteCandidate(Integer id) {
		candidateRepository.deleteById(id);
	}
}
