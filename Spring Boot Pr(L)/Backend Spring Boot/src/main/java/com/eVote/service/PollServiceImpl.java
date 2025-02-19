package com.eVote.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.eVote.dto.CandidateDTO;
import com.eVote.dto.PollDTO;
import com.eVote.entity.Candidate;
import com.eVote.entity.Polls;
import com.eVote.repository.PollRepository;

@Service
public class PollServiceImpl implements PollService {

	@Autowired
	private PollRepository pollRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<PollDTO> getAllPolls() {
		return pollRepository.findAll().stream().map(poll -> modelMapper.map(poll, PollDTO.class))
//				.filter((poll)-> poll.getStatus() == "Available")
				.collect(Collectors.toList());
	}
	
	@Override
	public List<PollDTO> getNonClosedPolls(){
		return pollRepository.findAll().stream().map(poll -> modelMapper.map(poll, PollDTO.class))
				.filter(poll -> poll.getStatus().equals("active") || poll.getStatus().equals("Scheduled"))
				.collect(Collectors.toList());
	}

	@Override
	public PollDTO getPollById(Integer id) {
		return pollRepository.findById(id).map(poll -> modelMapper.map(poll, PollDTO.class)).orElse(null);
	}

	@Override
	@Transactional
	public PollDTO savePoll(PollDTO pollDto) {
		Polls poll = modelMapper.map(pollDto, Polls.class);
		Polls savedPoll = pollRepository.save(poll);
		return modelMapper.map(savedPoll, PollDTO.class);
	}

	@Override
	@Transactional
	public void deletePoll(Integer id) {
		pollRepository.deleteById(id);
	}
}
