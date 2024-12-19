package com.eVote.service;

import java.util.List;

import com.eVote.dto.PollDTO;
import com.eVote.entity.Polls;

public interface PollService {

	List<PollDTO> getAllPolls();
	
	List<PollDTO> getNonClosedPolls();

	PollDTO getPollById(Integer id);

	PollDTO savePoll(PollDTO pollDto);

	void deletePoll(Integer id);
}
