package com.eVote.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eVote.entity.Votes;

public interface VotesRepository extends JpaRepository<Votes, Integer> {

}
