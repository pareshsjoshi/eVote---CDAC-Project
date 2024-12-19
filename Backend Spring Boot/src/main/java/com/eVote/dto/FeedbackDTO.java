package com.eVote.dto;

import org.modelmapper.ModelMapper;

import com.eVote.entity.Feedback;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FeedbackDTO {

	
	private String message;
	private Long aadhar_number; // Assuming you want the user ID in the DTO for convenience.

	// Static method to map entity to DTO using ModelMapper
	public static FeedbackDTO fromEntity(Feedback feedback) {
		ModelMapper modelMapper = new ModelMapper();
		return modelMapper.map(feedback, FeedbackDTO.class);
	}

	// Convert DTO to entity
	public Feedback toEntity() {
		ModelMapper modelMapper = new ModelMapper();
		return modelMapper.map(this, Feedback.class);
	}
}
