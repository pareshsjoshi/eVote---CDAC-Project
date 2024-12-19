package com.eVote.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PollDTO {

	// private int pollId;
	
	@NotBlank(message = "Poll title cannot be blank")
	@Size(max = 50, message = "Poll title must not exceed 50 characters")
	private String title;
	@NotBlank(message = "Poll description cannot be blank")
	@Size(max = 255, message = "Poll description must not exceed 255 characters")
	private String description;
	@NotNull(message = "Poll Start Date cannot be null")
	@FutureOrPresent(message = "Poll Start Date must be in the future")
	private LocalDateTime startDate;
	@NotNull(message = "Poll End Date cannot be null")
	@FutureOrPresent(message = "Poll Start Date must be in the future")
	private LocalDateTime endDate;
	@NotNull(message = "Poll status cannot be null")
	private String status;
	
	@JsonProperty(access = Access.READ_ONLY)
	private LocalDateTime createdAt = LocalDateTime.now();

	@JsonProperty(access = Access.READ_ONLY)
	private String createdBy;

	@JsonProperty(access = Access.READ_ONLY)
	private LocalDateTime updatedAt = LocalDateTime.now();

	@JsonProperty(access = Access.READ_ONLY)
	private String updatedBy;
}
