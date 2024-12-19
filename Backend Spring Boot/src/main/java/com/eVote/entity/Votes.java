package com.eVote.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Votes")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Votes {

	public Votes(Users user2, Polls poll2, Candidate candidate2) {
		this.user = user2;
		this.poll = poll2;
		this.candidate = candidate2;
		this.createdAt = LocalDateTime.now();
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int voteId;

	@NotNull(message = "User ID cannot be null")
	@ManyToOne
	@JoinColumn(name = "user_id", nullable = false)
	private Users user;

	@NotNull(message = "Poll ID cannot be null")
	@ManyToOne
	@JoinColumn(name = "poll_id", nullable = false)
	private Polls poll;

	@NotNull(message = "Candidate ID cannot be null")
	@ManyToOne
	@JoinColumn(name = "candidate_id", nullable = false)
	private Candidate candidate;

	@CreationTimestamp
	@Column(name = "created_at", nullable = false, updatable = false)
	private LocalDateTime createdAt;
}
