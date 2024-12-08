import React, { useState } from "react";
import "../stylesheets/FeedbackPage.css";
import { createFeedback } from "../services/FeedbackService";

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState("");
  const [category, setCategory] = useState("Voting Poll");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    category: "",
    feedback: ""
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // console.log(form);
  }
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!feedback.trim()) {
      setError("Feedback cannot be empty.");
      return;
    }
    try {
      const response = await createFeedback(form).then(() => {
        navigate("/admin/candidate-records");
      });
      if (response.status === 200) {
        console.log("Successfully created candidate!")
      }
    } catch (error) {
      console.log(error);
    }
    // setSubmitted(true);
    // setFeedback("");
    // setCategory("Voting Poll"); 
  };

  return (
    <div className="feedback-page">
      <h1>Feedback</h1>
      {submitted ? (
        <p className="thank-you-message">Thank you for your feedback!</p>
      ) : (
        <form className="feedback-form">
          <label htmlFor="category" className="category-label">
            Select Category:
          </label>
          <select
            id="category"
            value={form.category}
            onChange={handleFormChange}
            className="dropdown-input"
          >
            <option value="Voting Poll">Voting Poll</option>
            <option value="Voting App">Voting App</option>
          </select>
          <textarea
            value={form.feedback}
            onChange={handleFormChange}
            placeholder="Enter your feedback"
            rows="5"
            className="textarea-input"
          />
          {error && <p className="error-message">{error}</p>}
          <button className="btn submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default FeedbackPage;























































































