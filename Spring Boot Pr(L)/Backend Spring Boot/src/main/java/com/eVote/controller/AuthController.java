package com.eVote.controller;

import com.eVote.dto.LoginDTO;
import com.eVote.entity.Users;
import com.eVote.repository.UsersRepository;
import com.eVote.service.UserServiceImpl;
import com.eVote.util.JwtTokenUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")

public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    
    @Autowired
    private UsersRepository usersRepository;

    // Login endpoint
    @PostMapping("/login")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody LoginDTO loginDTO) {
        // Authenticate user with email and password
    	System.out.println("Hi1");
    	try {
    	    Authentication authentication = authenticationManager.authenticate(
    	        new UsernamePasswordAuthenticationToken(loginDTO.getEmail(), loginDTO.getPassword())
    	    );
    	    System.out.println("Hi4");

    	    //System.out.println("Authentication successful: " + authentication.isAuthenticated());

            SecurityContextHolder.getContext().setAuthentication(authentication);

    	} catch (Exception e) {
    	    System.out.println("Authentication failed: " + e.getMessage());
    	    e.printStackTrace();
    	}
    	  Users user = usersRepository.findByEmail(loginDTO.getEmail())
                  .orElseThrow(() -> new RuntimeException("User not found"));

    	  // Step 3: Get the user's role from the database or from the user's object
    	  String role = user.getRole().name();

        // Generate JWT token
        String jwt = jwtTokenUtil.generateToken(user.getEmail(),role);
        System.out.println("Generated JWT: " + jwt);
        return ResponseEntity.ok(new JwtResponse(jwt));
    }

    // A response DTO for sending JWT token
    public static class JwtResponse {
        private String token;

        public JwtResponse(String token) {
            this.token = token;
        }

        public String getToken() {
            return token;
        }

        public void setToken(String token) {
            this.token = token;
        }
    }
}
