// import React, { useState } from "react";
// import "../stylesheets/FeedbackPage.css";
// import { createFeedback } from "../services/FeedbackService";

// const FeedbackPage = () => {
//   const [feedback, setFeedback] = useState("");
//   const [category, setCategory] = useState("Voting Poll");
//   const [error, setError] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [form, setForm] = useState({
//     userId: 2,
//     category: "Voting Poll",
//     message: "",
//   });

//   const handleFormChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//     // console.log(form);
//   }
//   const handleFeedbackChange = (e) => {
//     const value = e.target.value;
//     if (/^[^\d]*$/.test(value)) {
//       setFeedback(value);

//       setError("");
//     } else {
//       setError("Feedback should not contain numbers");
//     }
//   };

//   const handleCategoryChange = (e) => {
//     setCategory(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // if (!message.trim()) {
//     //   setError("Message cannot be empty.");
//     //   return;
//     // }
//     try {
//       const response = await createFeedback(form);//.then(() => {
//         // navigate("/admin/candidate-records");
//       // });
//       if (response.status === 200) {
//         console.log("Successfully created candidate!")
//       }
//     } catch (error) {
//       console.log(error);
//     }
//     setSubmitted(true);
//     // setFeedback("");
//     // setCategory("Voting Poll"); 
//   };

//   return (
//     <div className="feedback-page">
//       <h1>Feedback</h1>
//       {submitted ? (
//         <p className="thank-you-message">Thank you for your feedback!</p>
//       ) : (
//         <form className="feedback-form">
//           {/* <div className="form-group">
//             <label>User ID:</label>
//             <input
//               type="text"
//               name="userId"
//               value={form.userId}
//               onChange={handleFormChange}
//               placeholder="Enter User ID"
//             />
//           </div> */}
//           <label htmlFor="category" className="category-label">
//             Select Category:
//           </label>
//           <select
//             id="category"
//             name="category"
//             value={form.category}
//             onChange={handleFormChange}
//             className="dropdown-input"
//           >
//             <option value="Voting Poll">Voting Poll</option>
//             <option value="Voting App">Voting App</option>
//           </select>
//           <textarea
//             name="message"
//             value={form.message}
//             onChange={handleFormChange}
//             placeholder="Enter your message"
//             rows="5"
//             className="textarea-input"
//           />
//           {error && <p className="error-message">{error}</p>}
//           <button className="btn submit-btn" onClick={handleSubmit}>
//             Submit
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default FeedbackPage;


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import {jwtDecode} from "jwt-decode"; // Fixed import

// const Header = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isVoter, setIsVoter] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("jwtToken");

//     if (token) {
//       setIsAuthenticated(true);
//       try {
//         const decoded = jwtDecode(token);
//         setIsVoter(decoded.role === "VOTER"); // Check if role is VOTER
//       } catch (error) {
//         console.error("Error decoding token:", error);
//       }
//     }
//   }, []);

//   return (
//     <header className="bg-dark text-white p-3">
//       <nav className="navbar navbar-expand-lg navbar-dark container">
//         <Link className="navbar-brand" to="/">
//           <strong>eVote</strong>
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             {!isVoter && (
//               <li className="nav-item">
//                 <Link className="nav-link" to="/admin">
//                   Admin
//                 </Link>
//               </li>
//             )}
//             <li className="nav-item">
//               <Link className="nav-link" to="/polls">
//                 Polls
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">
//                 About Us
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact">
//                 Contact Us
//               </Link>
//             </li>

//             {/* Show Feedback button if the user is a VOTER */}
//             {isVoter && (
//               <li className="nav-item">
//                 <button
//                   className="nav-link btn btn-warning text-dark px-3 py-1 me-lg-2"
//                   onClick={() => navigate("/feedback")}
//                 >
//                   Feedback
//                 </button>
//               </li>
//             )}

//             {/* Show Logout button if logged in, else show Login & Register */}
//             {isAuthenticated ? (
//               <li className="nav-item">
//                 <Link
//                   className="nav-link btn btn-danger text-white px-3 py-1"
//                   to="/logout"
//                 >
//                   Logout
//                 </Link>
//               </li>
//             ) : (
//               <>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link btn btn-success text-white px-3 py-1 me-lg-2"
//                     to="/login"
//                   >
//                     Login
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link
//                     className="nav-link btn btn-outline-light px-3 py-1 mt-2 mt-lg-0"
//                     to="/register"
//                     state={{ message: "VOTER" }}
//                   >
//                     Register
//                   </Link>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";

const FeedbackPage = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", feedback);
    setFeedback(""); // Clear input after submission
  };

  return (
    <div>
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Enter your feedback here..."
          rows="4"
          cols="50"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FeedbackPage;






















































































