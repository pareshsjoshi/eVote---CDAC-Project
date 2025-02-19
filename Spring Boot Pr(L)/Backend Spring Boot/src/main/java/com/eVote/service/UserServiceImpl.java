package com.eVote.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.User;


import com.eVote.dto.UserDTO;
import com.eVote.entity.Users;
import com.eVote.repository.UsersRepository;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

@Service
public class UserServiceImpl implements UserService ,UserDetailsService{

	 private final UsersRepository userRepository;
	    private final ModelMapper modelMapper;
	    private final PasswordEncoder passwordEncoder;

	    public UserServiceImpl(UsersRepository userRepository, ModelMapper modelMapper, PasswordEncoder passwordEncoder) {
	        this.userRepository = userRepository;
	        this.modelMapper = modelMapper;
	        this.passwordEncoder = passwordEncoder;
	    }

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
        // Hash the password before saving
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
        System.out.println("In ServiceImpl1: " + user);
        Users savedUser = userRepository.save(user);
        System.out.println("In ServiceImpl2: " + savedUser);
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

    // Add this method to handle user login via email and password
    public Users authenticateUser(String email, String password) {
        Users user = userRepository.findByEmail(email) .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));; // Fetch user by email
        if(user==null) {
        	System.out.println("Null");
        }
        if (user != null && passwordEncoder.matches(password, user.getPassword())) { // Check password match
            return user; // Return user if authentication is successful
        }
        return null; // Return null if authentication fails
    }

    // Add this method to get the Authentication object
    public Authentication getAuthentication(String email) {
        Users user = userRepository.findByEmail(email) .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));;  // Fetch user by email

        if (user != null) {
            // Create an Authentication object for Spring Security
            return new UsernamePasswordAuthenticationToken(
                    user.getEmail(),
                    user.getPassword(),
                    user.getAuthorities()  // Assuming you have roles assigned to users
            );
        }
        return null; // Return null if user not found
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Users user = userRepository.findByEmail(email) .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));;  // Fetch the user by email

        if (user == null) {
            throw new UsernameNotFoundException("User not found with email: " + email);
        }

        // Return a UserDetails object
        return User.builder()
                .username(user.getEmail())
                .password(user.getPassword())
                .roles(user.getRole().name())  // Assuming you have a role field in the Users entity
                .build();
    }
}
