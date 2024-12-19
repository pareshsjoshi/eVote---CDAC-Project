package com.eVote.service;

import java.util.List;

import com.eVote.dto.UserDTO;

public interface UserService {

	List<UserDTO> getAllUsers();

	UserDTO getUserById(Long id);

	UserDTO saveUser(UserDTO userDTO);

	void deleteUser(Long id);

	UserDTO updateUser(Long id, UserDTO userDTO);
}
