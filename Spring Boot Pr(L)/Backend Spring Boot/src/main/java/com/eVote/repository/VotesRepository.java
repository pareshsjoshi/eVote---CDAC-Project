//package com.eVote.repository;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//
//import com.eVote.entity.Votes;
//
//public interface VotesRepository extends JpaRepository<Votes, Integer> {
//
//}

package com.eVote.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.eVote.dto.VoteDTO;
import com.eVote.entity.Votes;
import java.util.List;

public interface VotesRepository extends JpaRepository<Votes, Integer> {

    @Query("SELECT new com.eVote.dto.VoteDTO(v.voteId, v.createdAt, v.user.id, v.poll.pollId, v.candidate.candidateId) FROM Votes v")
    List<VoteDTO> findAllVotes();
    
    @Query(value = "SELECT c.name FROM votes v " +
    	       "JOIN candidates c ON v.candidate_id = c.candidate_id " +
    	       "WHERE v.poll_id = :pollId " +
    	       "GROUP BY c.candidate_id " +
    	       "ORDER BY COUNT(v.vote_id) DESC " +
    	       "LIMIT 1", nativeQuery = true)
    	String findLeaderByPollId(Integer pollId);
    
    @Query("SELECT new com.eVote.dto.VoteDTO(v.voteId, v.createdAt, v.user.id, v.poll.pollId, v.candidate.candidateId) FROM Votes v WHERE v.voteId = :id")
    VoteDTO findVoteById(Integer id);

    @Query("SELECT new com.eVote.dto.VoteDTO(v.voteId, v.createdAt, v.user.id, v.poll.pollId, v.candidate.candidateId) FROM Votes v WHERE v.poll.pollId = :pollId")
    List<VoteDTO> findByPollId(Integer pollId);

    @Query("SELECT new com.eVote.dto.VoteDTO(v.voteId, v.createdAt, v.user.id, v.poll.pollId, v.candidate.candidateId) FROM Votes v WHERE v.candidate.candidateId = :candidateId")
    List<VoteDTO> findByCandidateId(Integer candidateId);
}
