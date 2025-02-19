//package com.eVote.service;
//
//import com.eVote.dto.VoteDTO;
//import com.eVote.entity.Votes;
//
//public interface VotesService {
//	void save(VoteDTO voteDto);
//
//	Votes getById(Integer id);
//}


package com.eVote.service;

import com.eVote.dto.VoteDTO;
import java.util.List;

public interface VotesService {
    void save(VoteDTO voteDto);
    VoteDTO getById(Integer id);
    List<VoteDTO> getAll();
    List<VoteDTO> getByPollId(Integer pollId);
    List<VoteDTO> getByCandidateId(Integer candidateId);
    String findLeaderByPollId(Integer pollId);

}
