package com.eVote.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eVote.entity.Users;

public interface UsersRepository extends JpaRepository<Users, Long> {
}

