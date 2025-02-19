// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("jwtToken");
//     console.log("JWT Token Found:", token); // Debugging log
//     setIsAuthenticated(!!token); // Convert to boolean
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
//             <li className="nav-item">
//               <Link className="nav-link" to="/admin">
//                 Admin
//               </Link>
//             </li>
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

//             {!isAuthenticated && (
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


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {jwtDecode} from "jwt-decode";

// const Header = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [isVoter, setIsVoter] = useState(false);

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

//             {!isAuthenticated && (
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


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";

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

//             {/* 🔹 Show Feedback button only for VOTERs */}
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

//             {/* 🔹 Show Logout button only if authenticated */}
//             {isAuthenticated ? (
//               <li className="nav-item">
//                 <button
//                   className="nav-link btn btn-danger text-white px-3 py-1"
//                   onClick={() => navigate("/logout")}
//                 >
//                   Logout
//                 </button>
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


// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";

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
//               <Link className="nav-link" to="/results">
//                 Results
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

//             {/* 🔹 Show Feedback button only for VOTERs */}
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

//             {/* 🔹 Show Logout button only if authenticated */}
//             {isAuthenticated ? (
//               <li className="nav-item">
//                 <button
//                   className="nav-link btn btn-danger text-white px-3 py-1"
//                   onClick={() => navigate("/logout")}
//                 >
//                   Logout
//                 </button>
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

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isVoter, setIsVoter] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");

    if (token) {
      setIsAuthenticated(true);
      try {
        const decoded = jwtDecode(token);
        setIsVoter(decoded.role === "VOTER"); // Check if role is VOTER
      } catch (error) {
        console.error("Error decoding token:", error);
      }
    }
  }, []);

  return (
    <header className="bg-dark text-white p-3">
      <nav className="navbar navbar-expand-lg navbar-dark container">
        <Link className="navbar-brand" to="/">
          <strong>eVote</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {!isVoter && (
              <li className="nav-item">
                <Link className="nav-link" to="/admin">
                  Admin
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link className="nav-link" to="/polls">
                Polls
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/results">
                Results
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>

            {/* 🔹 Show Feedback button only for VOTERs */}
            {/* {isVoter && (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-warning text-dark px-3 py-1 me-lg-2"
                  onClick={() => navigate("/feedback")}
                >
                  Feedback
                </button>
              </li>
            )} */}

            {/* 🔹 Show Logout button only if authenticated */}
            {isAuthenticated && (
              <li className="nav-item">
                <button
                  className="nav-link btn btn-danger text-white px-3 py-1"
                  onClick={() => navigate("/logout")}
                >
                  Logout
                </button>
              </li>
            )}

            {!isAuthenticated && (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link btn btn-success text-white px-3 py-1 me-lg-2"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link btn btn-outline-light px-3 py-1 mt-2 mt-lg-0"
                    to="/register"
                    state={{ message: "VOTER" }}
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;



