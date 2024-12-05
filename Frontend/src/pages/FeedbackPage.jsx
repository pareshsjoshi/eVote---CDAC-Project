import React, { useState } from "react";
import "../stylesheets/FeedbackPage.css";

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState("");
  const [category, setCategory] = useState("Voting Poll"); 
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleFeedbackChange = (e) => {
    const value = e.target.value;
    if (/^[^\d]*$/.test(value)) {
      
      setFeedback(value);
      setError(""); 
    } else {
      setError("Feedback should not contain numbers");
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback.trim()) {
      setError("Feedback cannot be empty.");
      return;
    }
    setSubmitted(true);
    setFeedback("");
    setCategory("Voting Poll"); 
  };

  return (
    <div className="feedback-page">
      <h1>Feedback</h1>
      {submitted ? (
        <p className="thank-you-message">Thank you for your feedback!</p>
      ) : (
        <form onSubmit={handleSubmit} className="feedback-form">
          <label htmlFor="category" className="category-label">
            Select Category:
          </label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="dropdown-input"
          >
            <option value="Voting Poll">Voting Poll</option>
            <option value="Voting App">Voting App</option>
          </select>
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Enter your feedback"
            rows="5"
            className="textarea-input"
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="btn submit-btn">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default FeedbackPage;























































































