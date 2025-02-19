//package com.eVote.service;
//
//import java.time.LocalDateTime;
//
//import org.modelmapper.ModelMapper;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.eVote.dto.VoteDTO;
//import com.eVote.entity.Candidate;
//import com.eVote.entity.Polls;
//import com.eVote.entity.Users;
//import com.eVote.entity.Votes;
//import com.eVote.repository.CandidateRepository;
//import com.eVote.repository.PollRepository;
//import com.eVote.repository.UsersRepository;
//import com.eVote.repository.VotesRepository;
//
//@Service
//public class VotesServiceImpl implements VotesService {
//
//	private final VotesRepository votesRepository;
//	private final ModelMapper modelMapper;
//	@Autowired
//	UsersRepository userDao;
//	
//	@Autowired
//	PollRepository pollDao;
//	
//	@Autowired
//	CandidateRepository candidateDao;
//
//	@Autowired
//	public VotesServiceImpl(VotesRepository votesRepository, ModelMapper modelMapper) {
//		this.votesRepository = votesRepository;
//		this.modelMapper = modelMapper;
//	}
//
//	@Override
//	public void save(VoteDTO voteDto) {
//		if (voteDto.getUserId() == null || voteDto.getPollId() == null || voteDto.getCandidateId() == null) {
//			throw new IllegalArgumentException("All fields are required!");
//		}
//		Users user = userDao.findById(voteDto.getUserId())
//				.orElseThrow(()->new RuntimeException("User Not Found"));
//		
//		Polls poll = pollDao.findById(voteDto.getPollId())
//				.orElseThrow(()->new RuntimeException("Poll Not Found"));
//
//		Candidate candidate = candidateDao.findById(voteDto.getCandidateId())
//				.orElseThrow(()->new RuntimeException("Candidate Not Found"));
//		
//		// Map DTO to entity using ModelMapper
////		Votes vote = modelMapper.map(voteDto, Votes.class);
//
//		// Set the current time for 'votedAt' field
////		vote.setCreatedAt(LocalDateTime.now());
//		
//		Votes vote = new Votes(user, poll, candidate);
//
//		// Save the vote using JpaRepository's save method
//		votesRepository.save(vote);
//	}
//
//	@Override
//	public Votes getById(Integer id) {
//		return votesRepository.findById(id).orElse(null);
//	}
//}

package com.eVote.service;

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

import java.time.LocalDateTime;
import java.util.List;

@Service
public class VotesServiceImpl implements VotesService {

    private final VotesRepository votesRepository;

    @Autowired
    private UsersRepository userDao;

    @Autowired
    private PollRepository pollDao;

    @Autowired
    private CandidateRepository candidateDao;

    @Autowired
    public VotesServiceImpl(VotesRepository votesRepository) {
        this.votesRepository = votesRepository;
    }

    @Override
    public void save(VoteDTO voteDto) {
        if (voteDto.getPollId() == null || voteDto.getCandidateId() == null) {
            throw new IllegalArgumentException("Poll ID and Candidate ID are required!");
        }

        System.out.println("REACHED WITHOUT USERID");

        Polls poll = pollDao.findById(voteDto.getPollId())
                .orElseThrow(() -> new RuntimeException("Poll Not Found"));

        Candidate candidate = candidateDao.findById(voteDto.getCandidateId())
                .orElseThrow(() -> new RuntimeException("Candidate Not Found"));

        //  Save vote WITHOUT User
        Votes vote = new Votes(poll, candidate);
        vote.setCreatedAt(LocalDateTime.now());

        votesRepository.save(vote);
    }
    
    @Override
    public String findLeaderByPollId(Integer pollId) {
        return votesRepository.findLeaderByPollId(pollId);
    }



    @Override
    public VoteDTO getById(Integer id) {
        return votesRepository.findVoteById(id);
    }

    @Override
    public List<VoteDTO> getAll() {
        return votesRepository.findAllVotes();
    }

    @Override
    public List<VoteDTO> getByPollId(Integer pollId) {
        return votesRepository.findByPollId(pollId);
    }

    @Override
    public List<VoteDTO> getByCandidateId(Integer candidateId) {
        return votesRepository.findByCandidateId(candidateId);
    }
}

