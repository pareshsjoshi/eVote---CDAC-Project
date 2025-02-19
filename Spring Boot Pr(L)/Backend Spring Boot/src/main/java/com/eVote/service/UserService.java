package com.eVote.service;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;


import java.util.List;

import com.eVote.dto.UserDTO;

public interface UserService {

	List<UserDTO> getAllUsers();

	UserDTO getUserById(Long id);

	UserDTO saveUser(UserDTO userDTO);

	void deleteUser(Long id);

	UserDTO updateUser(Long id, UserDTO userDTO);
	
    Authentication getAuthentication(String email); // Add this method signature
    
    
}
