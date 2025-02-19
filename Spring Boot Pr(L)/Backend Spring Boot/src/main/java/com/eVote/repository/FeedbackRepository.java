package com.eVote.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eVote.entity.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Integer> {
	
}
