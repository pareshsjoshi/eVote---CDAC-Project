import React, { useState } from "react";
import "../stylesheets/UserProfilePage.css";
const UserProfilePage = () => {
  const [users, setUsers] = useState([
    {
      aadhar: "725456789012",
      name: "Satish More",
      email: "satish.more@example.com",
      dob: "1994-06-01",
      gender: "Male",
      contact: "9876543210",
      address: "Shree Niwas, pune",
    },
  ]);

  const [editingUserId, setEditingUserId] = useState(null);
  const [editForm, setEditForm] = useState({
    aadhar: "",
    name: "",
    email: "",
    dob: "",
    gender: "",
    contact: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  
  const validateAadhar = (aadhar) => /^\d{12}$/.test(aadhar);
  const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateDOB = (dob) => /^\d{4}-\d{2}-\d{2}$/.test(dob);
  const validateContact = (contact) => /^\d{10}$/.test(contact);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let error = "";
    if (name === "aadhar" && !validateAadhar(value)) {
      error = "Aadhar must be a 12-digit number.";
    } else if (name === "name" && !validateName(value)) {
      error = "Name must contain only alphabets.";
    } else if (name === "email" && !validateEmail(value)) {
      error = "Invalid email format.";
    } else if (name === "dob" && !validateDOB(value)) {
      error = "Date of birth must be in YYYY-MM-DD format.";
    } else if (name === "contact" && !validateContact(value)) {
      error = "Contact number must be a 10-digit number.";
    }

    setEditForm({ ...editForm, [name]: value });
    setErrors({ ...errors, [name]: error });
  };

  const handleEditClick = (user) => {
    setEditingUserId(user.aadhar);
    setEditForm({ ...user });
  };

  const handleSave = () => {
    if (Object.values(errors).some((error) => error)) {
      alert("Please fix errors before saving.");
      return;
    }

    setUsers(
      users.map((user) =>
        user.aadhar === editingUserId ? { ...editForm } : user
      )
    );
    setEditingUserId(null);
    setErrors({});
  };

  const handleCancel = () => {
    setEditingUserId(null);
    setErrors({});
  };

  
  const handleDeleteClick = (aadhar) => {
    const updatedUsers = users.filter((user) => user.aadhar !== aadhar);
    setUsers(updatedUsers);
  };


  return (
    <div className="user-profile-page">
      <h1>User Profiles</h1>
      {users.map((user) => (
        <div key={user.aadhar} className="profile-container">
          {editingUserId === user.aadhar ? (
            <div className="edit-form">
              <input
                type="text"
                name="aadhar"
                value={editForm.aadhar}
                onChange={handleChange}
                placeholder="Aadhar Number"
              />
              {errors.aadhar && <p className="error-message">{errors.aadhar}</p>}

              <input
                type="text"
                name="name"
                value={editForm.name}
                onChange={handleChange}
                placeholder="Name"
              />
              {errors.name && <p className="error-message">{errors.name}</p>}

              <input
                type="email"
                name="email"
                value={editForm.email}
                onChange={handleChange}
                placeholder="Email"
              />
              {errors.email && <p className="error-message">{errors.email}</p>}

              <input
                type="date"
                name="dob"
                value={editForm.dob}
                onChange={handleChange}
              />
              {errors.dob && <p className="error-message">{errors.dob}</p>}

              <select
                name="gender"
                value={editForm.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <input
                type="text"
                name="contact"
                value={editForm.contact}
                onChange={handleChange}
                placeholder="Contact Number"
              />
              {errors.contact && (
                <p className="error-message">{errors.contact}</p>
              )}

              <textarea
                name="address"
                value={editForm.address}
                onChange={handleChange}
                placeholder="Address"
              />

              <div className="button-group">
                <button onClick={handleSave} className="btn save-btn">
                  Save
                </button>
                <button onClick={handleCancel} className="btn cancel-btn">
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <p>
                <strong>Aadhar:</strong> {user.aadhar}
              </p>
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Date of Birth:</strong> {user.dob}
              </p>
              <p>
                <strong>Gender:</strong> {user.gender}
              </p>
              <p>
                <strong>Contact:</strong> {user.contact}
              </p>
              <p>
                <strong>Address:</strong> {user.address}
              </p>
              <button
                onClick={() => handleEditClick(user)}
                className="btn edit-btn"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteClick(user.aadhar)}
                className="btn delete-btn"
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserProfilePage;





