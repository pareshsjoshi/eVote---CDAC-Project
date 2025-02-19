/*import React from "react";
import { Link } from "react-router-dom";

import "../stylesheets/HomePage.css";

const HomePage = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4">
          Welcome to <strong>eVote</strong>
        </h1>
        <p className="lead">
          A secure and efficient online voting system for everyone.  
          Vote for change with ease and confidence!
        </p>
        <Link to="/register" state={{ message: "VOTER" }} className="btn btn-primary btn-lg">
          Get Started
        </Link>
      </div>

      <div className="row text-center">
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3>Login</h3>
              <p className="text-muted">
                Please log in to your account to access your dashboard and stay updated.
              </p>
              <Link to="/login" className="btn btn-secondary">Login</Link>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3>Upcoming Elections</h3>
              <p className="text-muted">
                Stay informed about the upcoming elections and be prepared to vote.
              </p>
              <Link to="/polls" className="btn btn-success">View Elections</Link>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4"></div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3>Upcoming Elections</h3>
              <p className="text-muted">
                Stay informed about the upcoming elections and be prepared to vote.
              </p>
              <Link to="/polls" className="btn btn-success">View Elections</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;*/




// import React from "react";
// import { Link } from "react-router-dom";

// import "../stylesheets/HomePage.css";

// const HomePage = () => {
//   return (
//     <div className="container my-5">
//       <div className="text-center mb-5">
//         <h1 className="display-4">
//           Welcome to <strong>eVote</strong>
//         </h1>
//         <p className="lead">
//           A secure and efficient online voting system for everyone.  
//           Vote for change with ease and confidence!
//         </p>
//         <Link to="/register" state={{ message: "VOTER" }} className="btn btn-primary btn-lg">
//           Get Started
//         </Link>
//       </div>

//       <div className="row text-center">
//         <div className="col-md-6 mb-4">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h3>Login</h3>
//               <p className="text-muted">
//                 Please log in to your account to access your dashboard and stay updated.
//               </p>
//               <Link to="/login" className="btn btn-secondary">Login</Link>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-6 mb-4">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h3>Upcoming Elections</h3>
//               <p className="text-muted">
//                 Stay informed about the upcoming elections and be prepared to vote.
//               </p>
//               <Link to="/polls" className="btn btn-success">View Elections</Link>
//             </div>
//           </div>
//         </div>

//         {/* Commented out duplicate Upcoming Elections section */}
//         {/* <div className="col-md-3 mb-4"></div>
//         <div className="col-md-6 mb-4">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h3>Upcoming Elections</h3>
//               <p className="text-muted">
//                 Stay informed about the upcoming elections and be prepared to vote.
//               </p>
//               <Link to="/polls" className="btn btn-success">View Elections</Link>
//             </div>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// import React from "react";
// import { Link } from "react-router-dom";
// import {jwtDecode} from "jwt-decode"; // Import jwtDecode to extract email
// import "../stylesheets/HomePage.css";

// const HomePage = () => {
//   // Get token from local storage
//   const token = localStorage.getItem("jwtToken");
//   let userEmail = null;

//   if (token) {
//     try {
//       const decodedToken = jwtDecode(token);
//       userEmail = decodedToken.sub; // Extract email from payload
//     } catch (error) {
//       console.error("Invalid token", error);
//       localStorage.removeItem("jwtToken"); // Remove invalid token
//     }
//   }

//   return (
//     <div className="container my-5">
//       <div className="text-center mb-5">
//         <h1 className="display-4">
//           Welcome to <strong>eVote</strong>
//         </h1>
//         <p className="lead">
//           A secure and efficient online voting system for everyone.  
//           Vote for change with ease and confidence!
//         </p>
//         <Link to="/register" state={{ message: "VOTER" }} className="btn btn-primary btn-lg">
//           Get Started
//         </Link>
//       </div>

//       <div className="row text-center">
//         {/* Conditionally Render Card Based on Login Status */}
//         <div className="col-md-6 mb-4">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               {userEmail ? (
//                 // Logged-in User Card (Replaces Login Card)
//                 <>
//                   <h3>Welcome Back!</h3>
//                   <p className="text-muted">Logged in as: <strong>{userEmail}</strong></p>
//                  // <Link to="/dashboard" className="btn btn-secondary">Go to Dashboard</Link>
//                 </>
//               ) : (
//                 // Login Card (Visible if Not Logged In)
//                 <>
//                   <h3>Login</h3>
//                   <p className="text-muted">
//                     Please log in to your account to access your dashboard and stay updated.
//                   </p>
//                   <Link to="/login" className="btn btn-secondary">Login</Link>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>

//         <div className="col-md-6 mb-4">
//           <div className="card shadow-sm">
//             <div className="card-body">
//               <h3>Upcoming Elections</h3>
//               <p className="text-muted">
//                 Stay informed about the upcoming elections and be prepared to vote.
//               </p>
//               <Link to="/polls" className="btn btn-success">View Elections</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import { Link } from "react-router-dom";
import {jwtDecode} from "jwt-decode"; // To decode JWT
import "../stylesheets/HomePage.css";

const HomePage = () => {
  // Retrieve token from localStorage
  const token = localStorage.getItem("jwtToken");
  let userEmail = null;

  // Decode JWT if available
  if (token) {
    try {
      const decoded = jwtDecode(token);
      userEmail = decoded.sub; // Assuming email is stored in 'sub' claim
    } catch (error) {
      console.error("Invalid token:", error);
      localStorage.removeItem("jwtToken"); // Remove invalid token
    }
  }

  return (
    <div className="container my-5">
      <div className="text-center mb-5">
        <h1 className="display-4">
          Welcome to <strong>eVote</strong>
        </h1>
        <p className="lead">
          A secure and efficient online voting system for everyone.
          Vote for change with ease and confidence!
        </p>
        <Link to="/register" state={{ message: "VOTER" }} className="btn btn-primary btn-lg">
          Get Started
        </Link>
      </div>

      <div className="row text-center">
        {/* Maintains the same height as Upcoming Elections card */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm" style={{ minHeight: "200px" }}>
            <div className="card-body d-flex flex-column justify-content-center">
              {userEmail ? (
                <>
                  <h3>Welcome Back</h3>
                  <p className="text-muted">Logged in as: <strong>{userEmail}</strong></p>
                </>
              ) : (
                <>
                  <h3>Login</h3>
                  <p className="text-muted">
                    Please log in to your account to access your dashboard and stay updated.
                  </p>
                  <Link to="/login" className="btn btn-secondary">Login</Link>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card shadow-sm" style={{ minHeight: "200px" }}>
            <div className="card-body d-flex flex-column justify-content-center">
              <h3>Upcoming Elections</h3>
              <p className="text-muted">
                Stay informed about the upcoming elections and be prepared to vote.
              </p>
              <Link to="/polls" className="btn btn-success">View Elections</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;


