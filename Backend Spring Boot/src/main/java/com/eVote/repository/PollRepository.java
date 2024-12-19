package com.eVote.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eVote.entity.Polls;

public interface PollRepository extends JpaRepository<Polls, Integer> {

}
