import React, { useState } from "react";
import "../stylesheets/CandidateRegistration.css";
import { createCandidate } from "../services/CandidateServices";
import { useNavigate } from "react-router-dom";

const CandidateRegistration = () => {

  const [form, setForm] = useState({
    name: "",
    userId: "",
    pollId: "",
    agenda: "",
  });
  const [candidates, setCandidates] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


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


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(errors).some((error) => error) || Object.values(form).some((value) => value === "")) {
      alert("Please fix errors and fill all fields before submitting.");
      return;
    }
    try {
      const response = await createCandidate(form).then(() =>{
        navigate("/admin/candidate-records");
      });
      if (response.status === 200) {
        console.log("Successfully created candidate!")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="candidate-registration">
      <h1>Candidate Registration</h1>
      <form>
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

        <button className="btn register-btn" onClick={handleSubmit}>
          Register Candidate
        </button>
      </form>
    </div>
  );
};

export default CandidateRegistration;
