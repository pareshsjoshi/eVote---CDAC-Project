import React from 'react';
import '../stylesheets/AboutUs.css';  // Updated path to CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <div className="content">
        <div className="card">
          <h2>Purpose of E-Voting System</h2>
          <p>
            The purpose of our e-voting system is to provide a secure, transparent, and user-friendly platform for elections. 
            It ensures accessibility for all voters and eliminates traditional voting challenges.
          </p>
        </div>

        <div className="card">
          <h2>Our Mission</h2>
          <p>
            To enhance democratic participation by delivering a seamless, secure, and inclusive e-voting solution.
          </p>
        </div>

        <div className="card">
          <h2>Our Vision</h2>
          <p>
            To revolutionize the voting process worldwide with cutting-edge technology, fostering trust and inclusivity.
          </p>
        </div>

        <div className="card">
          <h2>Learn More About CDAC</h2>
          <p>
            Our project is inspired by the research and innovation at CDAC. Learn more about their work by visiting their official website:
          </p>
          <a 
            href="https://www.cdac.in/index.aspx?id=MB" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cdac-link-button"
          >
            Visit CDAC
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
