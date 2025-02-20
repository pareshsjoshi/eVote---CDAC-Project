using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Backend.Repositories;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.Threading.Tasks;
using Backend.Entity;
using Backend.DTOs;

namespace Backend.Services
{
    public interface IAuthService
    {
        Task<UserDto> LoginAsync(string email, string password);
        //Task<User> RegisterAsync(User user);
        //Task<bool> VerifyOtpAsync(string otp);
        //Task<bool> ForgotPasswordAsync(string email);
        //Task<bool> ResetPasswordAsync(string email, string otp, string newPassword);
    }

    public class AuthService : IAuthService
    {
        private readonly IUserRepository _userRepository;
        private readonly IConfiguration _configuration;

        public AuthService(IUserRepository userRepository, IConfiguration configuration)
        {
            _userRepository = userRepository;
            _configuration = configuration;
        }

        public async Task<UserDto> LoginAsync(string email, string password)
        {
            var user = await _userRepository.GetByEmailAsync(email);
            if (user == null || user.Password != password) // Simple password check (no hashing for this beginner approach)
            {
                throw new UnauthorizedAccessException("Invalid credentials.");
            }

            // Generate JWT token here with role-based authentication
            var token = GenerateJwtToken(user);
          //  var tokenString = token.ToString();

            return new UserDto
            {
                Token = token,
                Role = user.Role  // Include the user's role in the DTO
            };
        }

        private string GenerateJwtToken(User user)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.Name, user.Name),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.Role),  // Adding Role to claims
               // new Claim("Id", user.Id.ToString())    // You can also include user-specific info
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:SecretKey"])); // The Secret Key from appsettings.json
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"], // Typically the domain of your app
                audience: _configuration["Jwt:Audience"], // Your audience (can be the same as issuer)
                claims: claims,
                expires: DateTime.Now.AddMinutes(60), // Expiration time (e.g., 60 minutes)
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);  // Serialize the token and return as string
        }
    }
}


        //public async Task<User> RegisterAsync(User user)
        //{
        //    var existingUser = await _userRepository.GetByEmailAsync(user.Email);
        //    if (existingUser != null)
        //    {
        //        throw new Exception("Email is already registered.");
        //    }

        //    await _userRepository.AddAsync(user);
        //    return user;
        //}

        //public async Task<bool> VerifyOtpAsync(string otp)
        //{
        //    // Implement OTP verification logic here (dummy for now)
        //    return true;  // Dummy implementation
        //}

        //public async Task<bool> ForgotPasswordAsync(string email)
        //{
        //    // Implement OTP sending logic here (dummy for now)
        //    return true;  // Dummy implementation
        //}

        //public async Task<bool> ResetPasswordAsync(string email, string otp, string newPassword)
        //{
        //    // Implement password reset logic using OTP (dummy for now)
        //    return true;  // Dummy implementation
       //}
    

