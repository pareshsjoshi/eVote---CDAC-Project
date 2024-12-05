import React, { useState } from "react";
import "../stylesheets/CandidateRegistration.css";

const CandidateRegistration = () => {
  
  const [form, setForm] = useState({
    name: "",
    userId: "",
    pollId: "",
    agenda: "",
  });

  const [candidates, setCandidates] = useState([]);
  const [errors, setErrors] = useState({});

  
  const validateName = (name) => /^[a-zA-Z\s]+$/.test(name); 
  const validateUserId = (userId) => /^[0-9]{1,10}$/.test(userId); 
  const validatePollId = (pollId) => /^[0-9]{1,10}$/.test(pollId); 
  const validateAgenda = (agenda) => agenda.trim() !== "";

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    
    let error = "";
    if (name === "name" && !validateName(value)) {
      error = "Name must only contain letters and spaces.";
    } else if (name === "userId" && !validateUserId(value)) {
      error = "User ID must be 1-10 alphanumeric characters.";
    } else if (name === "pollId" && !validatePollId(value)) {
      error = "Poll ID must be 1-10 alphanumeric characters.";
    } else if (name === "agenda" && !validateAgenda(value)) {
      error = "Agenda is required.";
    }
    setErrors({ ...errors, [name]: error });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();


    if (
      Object.values(errors).some((error) => error) ||
      Object.values(form).some((value) => value === "")
    ) {
      alert("Please fix errors and fill all fields before submitting.");
      return;
    }

    
    setCandidates([...candidates, form]);

    
    setForm({
      name: "",
      userId: "",
      pollId: "",
      agenda: "",
    });

    alert("Candidate registered successfully!");
  };

  return (
    <div className="candidate-registration">
      <h1>Candidate Registration</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter Candidate Name"
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>User ID:</label>
          <input
            type="text"
            name="userId"
            value={form.userId}
            onChange={handleChange}
            placeholder="Enter User ID"
          />
          {errors.userId && <p className="error-message">{errors.userId}</p>}
        </div>

        <div className="form-group">
          <label>Poll ID:</label>
          <input
            type="text"
            name="pollId"
            value={form.pollId}
            onChange={handleChange}
            placeholder="Enter Poll ID"
          />
          {errors.pollId && <p className="error-message">{errors.pollId}</p>}
        </div>

        <div className="form-group">
          <label>Agenda:</label>
          <textarea
            name="agenda"
            value={form.agenda}
            onChange={handleChange}
            placeholder="Enter Candidate Agenda"
          />
          {errors.agenda && <p className="error-message">{errors.agenda}</p>}
        </div>

        <button type="submit" className="btn register-btn">
          Register Candidate
        </button>
      </form>

      <h2>Registered Candidates</h2>
      {candidates.length > 0 ? (
        <ul className="candidate-list">
          {candidates.map((candidate, index) => (
            <li key={index}>
              <strong>Name:</strong> {candidate.name} | <strong>User ID:</strong>{" "}
              {candidate.userId} | <strong>Poll ID:</strong>{" "}
              {candidate.pollId} | <strong>Agenda:</strong> {candidate.agenda}
            </li>
          ))}
        </ul>
      ) : (
        <p>No candidates registered yet.</p>
      )}
    </div>
  );
};

export default CandidateRegistration;
