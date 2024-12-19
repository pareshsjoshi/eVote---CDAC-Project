package com.eVote.entity;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity
@Table(name = "polls")
@ToString(callSuper = true, exclude = "candidates")
public class Polls extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "poll_id")
	private int pollId;

	@NotNull(message = "Title cannot be null")
	@Size(min = 5, max = 255, message = "Title must be between 5 and 255 characters")
	@Column(name = "title", nullable = false)
	private String title;

	@Size(max = 1000, message = "Description should not exceed 1000 characters")
	@Column(name = "description", columnDefinition = "TEXT")
	private String description;

	@NotNull(message = "Start date cannot be null")
	@Column(name = "start_date", nullable = false)
	private LocalDateTime startDate;

	@NotNull(message = "End date cannot be null")
	@Column(name = "end_date", nullable = false)
	private LocalDateTime endDate;

	@NotNull(message = "Status cannot be null")
	@Size(min = 3, max = 50, message = "Status must be between 3 and 50 characters")
	@Column(name = "status", nullable = false)
	private String status; // Example: "Active", "Closed", "Scheduled"

	@OneToMany(mappedBy = "poll", cascade = CascadeType.ALL, orphanRemoval = true)
//	@JsonIgnore
	private List<Candidate> candidates = new ArrayList<>();
}
