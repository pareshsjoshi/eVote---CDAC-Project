package com.eVote.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eVote.dto.UserDTO;
import com.eVote.entity.Users;
import com.eVote.repository.UsersRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UsersRepository userRepository;

	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<UserDTO> getAllUsers() {
		List<Users> users = userRepository.findAll();
		return users.stream().map(user -> modelMapper.map(user, UserDTO.class)).collect(Collectors.toList());
	}

	@Override
	public UserDTO getUserById(Long id) {
		Optional<Users> user = userRepository.findById(id);
		if (user.isPresent()) {
			return modelMapper.map(user.get(), UserDTO.class);
		}
		return null; // Optionally, throw an exception here
	}

	@Override
	public UserDTO saveUser(UserDTO userDTO) {
		Users user = modelMapper.map(userDTO, Users.class);
		Users savedUser = userRepository.save(user);
		return modelMapper.map(savedUser, UserDTO.class);
	}

	@Override
	public void deleteUser(Long id) {
		userRepository.deleteById(id);
	}

	@Override
	public UserDTO updateUser(Long id, UserDTO userDTO) {
		Optional<Users> existingUser = userRepository.findById(id);
		if (existingUser.isPresent()) {
			Users user = modelMapper.map(userDTO, Users.class);
			user.setAadhar_number(id); // Ensure the same ID is used
			Users updatedUser = userRepository.save(user);
			return modelMapper.map(updatedUser, UserDTO.class);
		}
		return null; // Optionally, throw an exception here
	}
}
