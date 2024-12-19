package com.eVote.service;

import java.time.LocalDateTime;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eVote.dto.VoteDTO;
import com.eVote.entity.Candidate;
import com.eVote.entity.Polls;
import com.eVote.entity.Users;
import com.eVote.entity.Votes;
import com.eVote.repository.CandidateRepository;
import com.eVote.repository.PollRepository;
import com.eVote.repository.UsersRepository;
import com.eVote.repository.VotesRepository;

@Service
public class VotesServiceImpl implements VotesService {

	private final VotesRepository votesRepository;
	private final ModelMapper modelMapper;
	@Autowired
	UsersRepository userDao;
	
	@Autowired
	PollRepository pollDao;
	
	@Autowired
	CandidateRepository candidateDao;

	@Autowired
	public VotesServiceImpl(VotesRepository votesRepository, ModelMapper modelMapper) {
		this.votesRepository = votesRepository;
		this.modelMapper = modelMapper;
	}

	@Override
	public void save(VoteDTO voteDto) {
		if (voteDto.getUserId() == null || voteDto.getPollId() == null || voteDto.getCandidateId() == null) {
			throw new IllegalArgumentException("All fields are required!");
		}
		Users user = userDao.findById(voteDto.getUserId())
				.orElseThrow(()->new RuntimeException("User Not Found"));
		
		Polls poll = pollDao.findById(voteDto.getPollId())
				.orElseThrow(()->new RuntimeException("Poll Not Found"));

		Candidate candidate = candidateDao.findById(voteDto.getCandidateId())
				.orElseThrow(()->new RuntimeException("Candidate Not Found"));
		
		// Map DTO to entity using ModelMapper
//		Votes vote = modelMapper.map(voteDto, Votes.class);

		// Set the current time for 'votedAt' field
//		vote.setCreatedAt(LocalDateTime.now());
		
		Votes vote = new Votes(user, poll, candidate);

		// Save the vote using JpaRepository's save method
		votesRepository.save(vote);
	}

	@Override
	public Votes getById(Integer id) {
		return votesRepository.findById(id).orElse(null);
	}
}
