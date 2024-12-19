package com.eVote.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eVote.entity.Candidate;

public interface CandidateRepository extends JpaRepository<Candidate, Integer> {
}
