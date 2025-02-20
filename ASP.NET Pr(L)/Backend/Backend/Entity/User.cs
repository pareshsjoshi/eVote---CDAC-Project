using System;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace Backend.Entity
{
    public class User
    {
        [Key]
        public int UserId { get; set; }

        [Required]
        [MaxLength(100)]
        public string Name { get; set; }

        [Required]
        [MaxLength(150)]
        [EmailAddress] // Validates the email format
        public string Email { get; set; }

        [Required]
        [MaxLength(100)]
        public string Password { get; set; } // Consider hashing password before storing

        [Required]
        public DateTime Dob { get; set; }

        [Required]
        [EnumDataType(typeof(UserRole))] // Assuming you have a UserRole enum
        public string Role { get; set; }

        [MaxLength(15)]
        [RegularExpression(@"^\+?[1-9]\d{1,14}$")] // Validates international phone number format
        public string ContactNum { get; set; }

        [Required]
        [EnumDataType(typeof(Gender))] // Assuming you have a Gender enum
        public string Gender { get; set; }

        [MaxLength(255)]
        public string Address { get; set; }

        [MaxLength(10)]
        public string Pincode { get; set; }

        [MaxLength(50)]
        public string State { get; set; }

        [MaxLength(50)]
        public string District { get; set; }

        // Optional: You can add validation to ensure the user is above a certain age
        public bool IsAdult => DateTime.Now.Year - Dob.Year >= 18;

        //public User() { }
        public User(string Name, string Email, string Password, DateTime Dob, string Role, string ContactNum, string Gender, string Address, string Pincode, string State, string District)
        {
            this.Name = Name;
            this.Email = Email;
            this.Password = Password;
            this.Dob = Dob;
            this.Role = Role;
            this.ContactNum = ContactNum;
            this.Gender = Gender;
            this.Address = Address;
            this.Pincode = Pincode;
            this.State = State;
            this.District = District;
        }
    }

    public enum UserRole
    {
        Admin,
        User
    }

    public enum Gender
    {
        MALE,
        FEMALE,
        OTHER
    }
}
