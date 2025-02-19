package com.eVote.service;

import java.util.List;

import com.eVote.dto.CandidateDTO;

public interface CandidateService {

	List<CandidateDTO> getAllCandidates();
	
	List<CandidateDTO> getCandidatesByPoll(Integer pollID);

	CandidateDTO getCandidateById(Integer id);

	CandidateDTO saveCandidate(CandidateDTO candidateDTO);

	CandidateDTO updateCandidate(Integer id, CandidateDTO candidateDTO);

	void deleteCandidate(Integer id);
}
