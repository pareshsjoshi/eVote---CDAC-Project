package com.eVote.service;

import java.util.List;

import com.eVote.dto.UserDTO;

public interface AdminService {

	UserDTO createUser(UserDTO userDTO);

	UserDTO getUserById(Long userId);

	List<UserDTO> getAllUsers();

	UserDTO updateUser(Long userId, UserDTO userDTO);

	void deleteUser(Long userId);
}
