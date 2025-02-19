import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    // Remove JWT token from localStorage
    localStorage.removeItem("jwtToken");

    // Start countdown
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          navigate("/"); // Redirect to home after countdown
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer
  }, [navigate]);

  return (
    <div className="container text-center my-5">
      <h2>You have been logged out!</h2>
      <p>Redirecting to home page in <strong>{countdown}</strong> seconds...</p>
    </div>
  );
};

export default Logout;
