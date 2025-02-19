package com.eVote.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.eVote.dto.UserDTO;
import com.eVote.service.UserService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class UserController {

	@Autowired
	private UserService userService;

	// Only Admins can access this endpoint
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@GetMapping("/user-records")
	public ResponseEntity<List<UserDTO>> getAllUsers() {
		List<UserDTO> users = userService.getAllUsers();
		return new ResponseEntity<>(users, HttpStatus.OK);
	}

	// Only Admins can access this endpoint
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@GetMapping("/user-records/{id}")
	public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
		UserDTO user = userService.getUserById(id);
		if (user != null) {
			return new ResponseEntity<>(user, HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}

	// Only Admins can create new users
	//@PreAuthorize("hasRole('ROLE_ADMIN')")
	@PostMapping("/user-create/save")
	public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {
		System.out.println("In Ctrl" + userDTO);
		UserDTO savedUser = userService.saveUser(userDTO);
		return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
	}

	// Only Admins can delete users
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@DeleteMapping("/user-delete/{id}")
	public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
		userService.deleteUser(id);
		return ResponseEntity.noContent().build();
	}

	// Only Admins can update user information
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	@PutMapping("/user-update/{id}")
	public ResponseEntity<UserDTO> updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
		UserDTO updatedUser = userService.updateUser(id, userDTO);
		if (updatedUser != null) {
			return new ResponseEntity<>(updatedUser, HttpStatus.OK);
		}
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	}
}

//@RestController
//@RequestMapping("/user")
//@CrossOrigin(origins = "*")
//class UserControllerVoter {
//
//	@Autowired
//	private UserService userService;
//
//	// Authenticated user can view their profile
//	@GetMapping("/user-profile/{id}")
//	public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
//		UserDTO user = userService.getUserById(id);
//		if (user != null) {
//			return new ResponseEntity<>(user, HttpStatus.OK);
//		}
//		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//	}
//
//	// User can register (no role needed here)
//	@PostMapping("/register/save")
//	public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {
//		UserDTO savedUser = userService.saveUser(userDTO);
//		return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
//	}
//
//	// Only Admin can delete user, not the user themselves
//	@PreAuthorize("hasRole('ROLE_ADMIN')")
//	@DeleteMapping("/user-delete/{id}")
//	public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
//		userService.deleteUser(id);
//		return ResponseEntity.noContent().build();
//	}
//
//	// Only Admin can update user, not the user themselves
//	@PreAuthorize("hasRole('ROLE_ADMIN')")
//	@PutMapping("/user-update/{id}")
//	public ResponseEntity<UserDTO> updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
//		UserDTO updatedUser = userService.updateUser(id, userDTO);
//		if (updatedUser != null) {
//			return new ResponseEntity<>(updatedUser, HttpStatus.OK);
//		}
//		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//	}
//}
