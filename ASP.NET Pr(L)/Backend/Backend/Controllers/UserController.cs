using Microsoft.AspNetCore.Mvc;
using Backend.Entity;
using Backend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Authorization;
using Backend.DTOs;
using System.Data;
using System.Net;
using System.Xml.Linq;

namespace Backend.Controllers
{
    [Route("/admin")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _service;

        public UserController(IUserService service)
        {
            _service = service;
        }

        // Get all users
        [HttpGet("/admin/user-records")]
        //[Authorize(Roles = "admin")]
        public async Task<IActionResult> GetAll()
        {
            var users = await _service.GetAllAsync();
            if (users == null || !users.Any())
            {
                return NoContent(); // No content available
            }
            return Ok(users);
        }

        // Get user by ID
        [HttpGet("/admin/user-records/{id}")]
        //[Authorize(Roles = "Admin")]
        public async Task<IActionResult> GetById(int id)
        {
            var user = await _service.GetByIdAsync(id);
            if (user == null) return NotFound(); // Return NotFound if user does not exist
            return Ok(user);
        }

        //// Create a new user
        //[HttpPost("/admin/user-create/save")]
        ////[Authorize(Roles = "Admin")]
        //public async Task<IActionResult> Create([FromBody] User user)
        //{
        //    if (user == null || !ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState); // Return bad request if the model is invalid
        //    }

        //    await _service.AddAsync(user);
        //    return CreatedAtAction(nameof(GetById), new { id = user.UserId }, user); // Return Created response with user data
        //}
        // Create a new user
        [HttpPost("/admin/user-create/save")]
        //[Authorize(Roles = "Admin")]
        public async Task<IActionResult> Create(UsersDto UsersDto)
        {
            Console.WriteLine(UsersDto);
            if (UsersDto == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState); // Return bad request if the model is invalid
            }
            User user = new(UsersDto.Name, UsersDto.Email, UsersDto.Password, UsersDto.Dob, UsersDto.Role, UsersDto.ContactNum, UsersDto.Gender, UsersDto.Address, UsersDto.Pincode, UsersDto.State, UsersDto.District);
            try
            {
                await _service.AddAsync(user);
            }
            catch (Exception e) {
                Console.WriteLine(e.Message);
            }
            return CreatedAtAction(nameof(GetById), new { id = user.UserId }, UsersDto); // Return Created response with user data
        }

        // Update an existing user
        [HttpPut("/admin/user-update/{id}")]
        //[Authorize(Roles = "Admin")]
        public async Task<IActionResult> Update(int id, [FromBody] User user)
        {
            if (user == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState); // Return bad request if the model is invalid
            }

            var existingUser = await _service.GetByIdAsync(id);
            if (existingUser == null)
            {
                return NotFound(); // Return NotFound if the user to update doesn't exist
            }

            user.UserId = id; // Ensure the ID matches the path parameter
            await _service.UpdateAsync(user);
            return NoContent(); // Return NoContent for successful update
        }

        // Delete a user
        [HttpDelete("/admin/user-delete/{id}")]
        //[Authorize(Roles = "Admin")]
        public async Task<IActionResult> Delete(int id)
        {
            var existingUser = await _service.GetByIdAsync(id);
            if (existingUser == null)
            {
                return NotFound(); // Return NotFound if the user doesn't exist
            }

            await _service.DeleteAsync(id);
            return NoContent(); // Return NoContent after deletion
        }
    }
}
