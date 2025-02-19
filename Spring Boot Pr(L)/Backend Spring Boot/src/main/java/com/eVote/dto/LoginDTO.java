package com.eVote.dto;

public class LoginDTO {
    private String email;
    private String password;

    // Getters and Setters
  

    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getEmail() {
    	System.out.println("email:"+email);
        return email;
    }

    public String getPassword() {
    	System.out.println("password:"+password);
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
