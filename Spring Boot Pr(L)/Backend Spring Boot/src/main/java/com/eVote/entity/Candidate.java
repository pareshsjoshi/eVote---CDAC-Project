package com.eVote.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity
@Table(name = "candidates")
@ToString(callSuper = true, exclude = "poll")
public class Candidate extends BaseEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "candidate_id")
	private int candidateId;

	@NotBlank(message = "Candidate name cannot be blank")
	@Size(max = 255, message = "Candidate name must not exceed 255 characters")
	@Column(name = "name", nullable = false)
	private String name;

	@Size(max = 2000, message = "Agenda must not exceed 2000 characters")
	@Column(name = "agenda", columnDefinition = "TEXT")
	private String agenda;

	@NotNull(message = "Poll cannot be null")
	@ManyToOne
	@JsonIgnore
	@JoinColumn(name = "poll_id", nullable = false)
	private Polls poll;
}
