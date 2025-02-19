package com.eVote.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.persistence.Column;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class CandidateDTO {

	private Integer candidateId;

	@NotBlank(message = "Candidate name cannot be blank")
	@Size(max = 255, message = "Candidate name must not exceed 255 characters")
	private String name;

	@Size(max = 2000, message = "Agenda must not exceed 2000 characters")
	private String agenda;

	@NotNull(message = "Poll ID cannot be null")
	private Integer pollId; // Only poll ID is needed to map a candidate to a poll.
	
	@JsonProperty(access = Access.READ_ONLY)
	private LocalDateTime createdAt = LocalDateTime.now();

	@JsonProperty(access = Access.READ_ONLY)
	private String createdBy;

	@JsonProperty(access = Access.READ_ONLY)
	private LocalDateTime updatedAt = LocalDateTime.now();

	@JsonProperty(access = Access.READ_ONLY)
	private String updatedBy;
}
