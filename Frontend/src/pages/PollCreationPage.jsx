import React, { useState } from "react";
import "../stylesheets/PollCreationPage.css";
import { createPoll } from "../services/PollService";
import { useNavigate } from "react-router-dom";

const PollCreationPage = () => {
  // State for form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [candidates, setCandidates] = useState([""]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState(false);
  const [form, setForm] = useState({
    pollId: "",
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "Scheduled",
  });
  const navigate = useNavigate();

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // console.log(form);
  }

  // Handlers
  // const handleCandidateChange = (index, value) => {
  //   const newCandidates = [...candidates];
  //   newCandidates[index] = value;
  //   setCandidates(newCandidates);
  // };

  // const addCandidate = () => {
  //   setCandidates([...candidates, ""]);
  // };

  // const removeCandidate = (index) => {
  //   const newCandidates = candidates.filter((_, i) => i !== index);
  //   setCandidates(newCandidates);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createPoll(form).then(() => {
        navigate("/admin/poll-records");
      });
      if (response.status === 200) {
        console.log("Successfully created poll!")
      }
    } catch (error) {
      console.log(error);
    }
    // const pollData = {
    //   title,
    //   description,
    //   candidates,
    //   startDate,
    //   endDate,
    //   status,
    // };

    // console.log("Poll Created:", pollData);
    // alert("Poll successfully created!");
    // API Call Logic to Save Poll (use fetch/axios here)
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create a New Poll</h2>
      <form>
        {/* Poll Name */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Poll Name</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={form.title}
            onChange={handleFormChange}
            required
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            rows="3"
            value={form.description}
            onChange={handleFormChange}
            required
          ></textarea>
        </div>

        {/* Candidates */}
        {/* <div className="mb-3">
          <label className="form-label">Candidates</label>
          {candidates.map((candidate, index) => (
            <div key={index} className="input-group mb-2">
              <input
                type="text"
                className="form-control"
                value={candidate}
                onChange={(e) => handleCandidateChange(index, e.target.value)}
                placeholder={`Candidate ${index + 1}`}
                required
              />
              {candidates.length > 1 && (
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => removeCandidate(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            className="btn btn-secondary"
            onClick={addCandidate}
          >
            Add Candidate
          </button>
        </div> */}

        {/* Start Date */}
        <div className="mb-3">
          <label htmlFor="startDate" className="form-label">Start Date</label>
          <input
            type="datetime-local"
            id="startDate"
            name="startDate"
            className="form-control"
            value={form.startDate}
            onChange={handleFormChange}
            required
          />
        </div>

        {/* End Date */}
        <div className="mb-3">
          <label htmlFor="endDate" className="form-label">End Date</label>
          <input
            type="datetime-local"
            id="endDate"
            name="endDate"
            className="form-control"
            value={form.endDate}
            onChange={handleFormChange}
            required
          />
        </div>

        {/* Active Toggle */}
        {/* <div className="form-check mb-3">
          <input
            type="checkbox"
            id="status"
            name="status"
            className="form-check-input"
            checked={form.status}
            onChange={handleFormChange}
          />
          <label htmlFor="status" className="form-check-label">
            Activate Poll
          </label>
        </div> */}

        {/* Submit Button */}
        <button className="btn btn-primary w-100" onClick={handleSubmit}>
          Create Poll
        </button>
      </form>
    </div>
  );
};

export default PollCreationPage;
