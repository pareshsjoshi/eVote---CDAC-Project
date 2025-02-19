package com.eVote.entity;

import java.time.LocalDate;
import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Version;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
public class Users extends BaseEntity implements UserDetails{
	
    @Id
    @Column(name = "user_id")
//    @GeneratedValue(strategy = GenerationType.AUTO) 
    private Long aadhar_number;

    @Version
    @Column(nullable = false)
    private Integer version = 0;;
    
    @Column(nullable = false, length = 255)
    @NotBlank(message = "Name cannot be blank")
    @Size(max = 255, message = "Name cannot exceed 255 characters")
    private String name;

    @Column(nullable = false, unique = true, length = 255)
    @NotBlank(message = "Email cannot be blank")
    @Email(message = "Invalid email format")
    private String email;

    @Column(nullable = false)
    @NotBlank(message = "Password cannot be blank")
    @Size(min = 8, max = 255, message = "Password must be between 8 and 255 characters")
    private String password;

    @Column(nullable = false)
    @NotNull(message = "Date of birth cannot be null")
    @Past(message = "Date of birth must be in the past")
    private LocalDate dob;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @NotNull(message = "Role cannot be null")
    private Role role;

    @Column(name = "contact_num", length = 15)
    @Pattern(regexp = "^\\+?[0-9]{7,15}$", message = "Invalid contact number")
    private String contact_number;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column(length = 500)
    @Size(max = 500, message = "Address cannot exceed 500 characters")
    private String address;

    @Column(length = 10)
    @Pattern(regexp = "^[0-9]{5,10}$", message = "Pincode must be numeric and between 5 to 10 digits")
    private String pincode;

    @Column(length = 50)
    @Size(max = 50, message = "State name cannot exceed 50 characters")
    private String state;

    @Column(length = 50)
    @Size(max = 50, message = "District name cannot exceed 50 characters")
    private String district;

    @Column(nullable = false)
    @NotNull(message = "Active status cannot be null")
    private Boolean isActive;

    // Implementing methods required by UserDetails
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(new SimpleGrantedAuthority("ROLE_" + role.name()));
    }

    @Override
    public String getUsername() {
        return this.email; // Use email as the username
    }

    @Override
    public String getPassword() {
        return this.password; // Return password for authentication
    }

    @Override
    public boolean isAccountNonExpired() {
        return true; // Define account expiration logic if necessary
    }

    @Override
    public boolean isAccountNonLocked() {
        return true; // Define account lock logic if necessary
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true; // Define credentials expiration logic if necessary
    }

    @Override
    public boolean isEnabled() {
        return isActive; // Account is enabled if 'isActive' is true
    }

}
