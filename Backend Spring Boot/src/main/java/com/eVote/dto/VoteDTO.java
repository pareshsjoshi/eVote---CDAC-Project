package com.eVote.dto;

import java.time.LocalDateTime;

import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VoteDTO {
	
//	private Integer voteId;

	@NotNull(message = "User ID cannot be null")
	private Long userId;

	@NotNull(message = "Poll ID cannot be null")
	private Integer pollId;

	@NotNull(message = "Candidate ID cannot be null")
	private Integer candidateId;

//	@NotNull(message = "Voted At time cannot be null")
//	private LocalDateTime votedAt; // The time the user votes will be set when submitting the vote
}
