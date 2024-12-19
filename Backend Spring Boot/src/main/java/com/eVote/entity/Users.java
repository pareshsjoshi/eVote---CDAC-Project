package com.eVote.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
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
public class Users extends BaseEntity {

	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "user_id")
	private Long aadhar_number;

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

	@Column(length = 15)
	@Pattern(regexp = "^\\+?[0-9]{7,15}$", message = "Invalid contact number")
	private String contactNum;

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
}
