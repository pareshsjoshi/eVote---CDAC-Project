package com.eVote.service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eVote.dto.UserDTO;
import com.eVote.entity.Users;
import com.eVote.exception.ResourceNotFoundException;
import com.eVote.repository.UsersRepository;

import jakarta.validation.Valid;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	private UsersRepository usersRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public UserDTO createUser(@Valid UserDTO userDTO) {
		Users user = modelMapper.map(userDTO, Users.class);
		user.setIsActive(true);
		Users savedUser = usersRepository.save(user);
		return modelMapper.map(savedUser, UserDTO.class);
	}

	@Override
	public UserDTO getUserById(Long userId) {
		Users user = usersRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
		return modelMapper.map(user, UserDTO.class);
	}

	@Override
	public List<UserDTO> getAllUsers() {
		List<Users> users = usersRepository.findAll();
		return users.stream().map(user -> modelMapper.map(user, UserDTO.class)).collect(Collectors.toList());
	}

	@Override
	public UserDTO updateUser(Long userId, @Valid UserDTO userDTO) {
		Users user = usersRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));

		// Map updated fields from DTO to the existing entity
		modelMapper.map(userDTO, user);

		Users updatedUser = usersRepository.save(user);
		return modelMapper.map(updatedUser, UserDTO.class);
	}

	@Override
	public void deleteUser(Long userId) {
		Users user = usersRepository.findById(userId)
				.orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
		usersRepository.delete(user);
	}
}
