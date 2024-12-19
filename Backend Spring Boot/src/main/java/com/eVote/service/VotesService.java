package com.eVote.service;

import com.eVote.dto.VoteDTO;
import com.eVote.entity.Votes;

public interface VotesService {
	void save(VoteDTO voteDto);

	Votes getById(Integer id);
}
