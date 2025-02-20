using Backend.Entity;
using Backend.Services;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            _authService = authService;
        }

        [HttpGet]
        public async Task<IActionResult> GetUserByCredentials([FromQuery] string email, [FromQuery] string password)
        {
            if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
            {
                return BadRequest(new { Message = "Email and Password are required" });
            }

            try
            {
                var userDto = await _authService.LoginAsync(email, password);

               
                return Ok(userDto);
            }
            catch (Exception ex)
            {
                return Unauthorized(new { Message = ex.Message });
            }
        }

        //// Register
        //[HttpPost("register")]
        //public async Task<IActionResult> Register([FromBody] dynamic model)
        //{
        //    var name = model?.Name;
        //    var email = model?.Email;
        //    var password = model?.Password;
        //    var dob = model?.Dob;
        //    var role = model?.Role;
        //    var contactNum = model?.ContactNum;
        //    var gender = model?.Gender;
        //    var address = model?.Address;
        //    var pincode = model?.Pincode;
        //    var state = model?.State;
        //    var district = model?.District;

        //    if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
        //    {
        //        return BadRequest(new { Message = "Email and Password are required" });
        //    }

        //    try
        //    {
        //        var user = new User
        //        {
        //            Name = name,
        //            Email = email,
        //            Password = password,
        //            Dob = dob,
        //            Role = role,
        //            ContactNum = contactNum,
        //            Gender = gender,
        //            Address = address,
        //            Pincode = pincode,
        //            State = state,
        //            District = district
        //        };

        //        var createdUser = await _authService.RegisterAsync(user);
        //        return CreatedAtAction(nameof(Register), new { id = createdUser.Id }, createdUser);
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(new { Message = ex.Message });
        //    }
        //}

        //// Verify OTP
        //[HttpPost("verify-otp")]
        //public async Task<IActionResult> VerifyOtp([FromBody] dynamic model)
        //{
        //    var otp = model?.Otp;

        //    if (string.IsNullOrEmpty(otp))
        //    {
        //        return BadRequest(new { Message = "OTP is required" });
        //    }

        //    var isVerified = await _authService.VerifyOtpAsync(otp);
        //    if (!isVerified)
        //        return BadRequest(new { Message = "Invalid OTP" });

        //    return Ok(new { Message = "OTP Verified" });
        //}

        //// Forgot Password
        //[HttpPost("forgot-password")]
        //public async Task<IActionResult> ForgotPassword([FromBody] dynamic model)
        //{
        //    var email = model?.Email;

        //    if (string.IsNullOrEmpty(email))
        //    {
        //        return BadRequest(new { Message = "Email is required" });
        //    }

        //    var success = await _authService.ForgotPasswordAsync(email);
        //    if (!success)
        //        return BadRequest(new { Message = "Error sending OTP" });

        //    return Ok(new { Message = "OTP sent" });
        //}

        //// Reset Password
        //[HttpPost("reset-password")]
        //public async Task<IActionResult> ResetPassword([FromBody] dynamic model)
        //{
        //    var email = model?.Email;
        //    var otp = model?.Otp;
        //    var newPassword = model?.NewPassword;

        //    if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(otp) || string.IsNullOrEmpty(newPassword))
        //    {
        //        return BadRequest(new { Message = "Email, OTP, and New Password are required" });
        //    }

        //    var success = await _authService.ResetPasswordAsync(email, otp, newPassword);
        //    if (!success)
        //        return BadRequest(new { Message = "Password reset failed" });

        //    return Ok(new { Message = "Password reset successful" });
        //}
    }
}
