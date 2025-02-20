import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "../stylesheets/Login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:5182/api/auth/?email=${email}&password=${password}`
      );
      
      if (response.data && response.data.token && response.data.role) {
         console.log(response.data.role);
         Cookies.set('jwt', response.data.token, { expires: 1, path: '/', secure: true, sameSite: 'None' });
            localStorage.setItem("role",response.data.role);
          if (response.data.role === "User") {
            localStorage.setItem("role",response.data.role);
            navigate("/");
          } else if (response.data.role === "Admin") {
            navigate("/admin");
            console.log("Very good");
            localStorage.setItem("role",response.data.role);
            
          }
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      console.log(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form"> {/* Directly apply the class to the form container */}
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button
          className="forgot-password"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </button>
      </div>
    </div>
  );
};

export default Login;
