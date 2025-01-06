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




import React from "react";
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

        {/* Commented out duplicate Upcoming Elections section */}
        {/* <div className="col-md-3 mb-4"></div>
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
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;

