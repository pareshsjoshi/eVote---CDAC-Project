import React, { useState } from "react";

const PollCreationPage = () => {
  // State for form fields
  const [pollName, setPollName] = useState("");
  const [description, setDescription] = useState("");
  const [candidates, setCandidates] = useState([""]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isActive, setIsActive] = useState(false);

  // Handlers
  const handleCandidateChange = (index, value) => {
    const newCandidates = [...candidates];
    newCandidates[index] = value;
    setCandidates(newCandidates);
  };

  const addCandidate = () => {
    setCandidates([...candidates, ""]);
  };

  const removeCandidate = (index) => {
    const newCandidates = candidates.filter((_, i) => i !== index);
    setCandidates(newCandidates);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const pollData = {
      pollName,
      description,
      candidates,
      startDate,
      endDate,
      isActive,
    };

    console.log("Poll Created:", pollData);
    alert("Poll successfully created!");
    // API Call Logic to Save Poll (use fetch/axios here)
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Create a New Poll</h2>
      <form onSubmit={handleSubmit}>
        {/* Poll Name */}
        <div className="mb-3">
          <label htmlFor="pollName" className="form-label">Poll Name</label>
          <input
            type="text"
            id="pollName"
            className="form-control"
            value={pollName}
            onChange={(e) => setPollName(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea
            id="description"
            className="form-control"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Candidates */}
        <div className="mb-3">
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
        </div>

        {/* Start Date */}
        <div className="mb-3">
          <label htmlFor="startDate" className="form-label">Start Date</label>
          <input
            type="date"
            id="startDate"
            className="form-control"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        {/* End Date */}
        <div className="mb-3">
          <label htmlFor="endDate" className="form-label">End Date</label>
          <input
            type="date"
            id="endDate"
            className="form-control"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>

        {/* Active Toggle */}
        <div className="form-check mb-3">
          <input
            type="checkbox"
            id="isActive"
            className="form-check-input"
            checked={isActive}
            onChange={() => setIsActive(!isActive)}
          />
          <label htmlFor="isActive" className="form-check-label">
            Activate Poll
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">
          Create Poll
        </button>
      </form>
    </div>
  );
};

export default PollCreationPage;
