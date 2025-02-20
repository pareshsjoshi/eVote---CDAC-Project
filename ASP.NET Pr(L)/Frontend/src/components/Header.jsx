// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
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
//               <Link className="nav-link" to="/admin">Admin</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/polls">Polls</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">About Us</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact">Contact Us</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link btn btn-success text-white" to="/login">
//                 Login
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link btn btn-success text-white ms-2" to="/register">
//                 Register
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
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
//             <li className="nav-item">
//               <Link
//                 className="nav-link btn btn-success text-white px-3 py-1"
//                 to="/login"
//               >
//                 Login
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/polls">
                Polls
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
                to="/register" state={{ message: "User" }}
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
