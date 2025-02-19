import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import jwtDecode from "jwt-decode";

// Function to get the user's role from JWT
const getUserRole = () => {
  const token = localStorage.getItem("jwtToken"); // Retrieve token
  if (!token) return null; // No token, user is not authenticated

  try {
    const decodedToken = jwtDecode(token);
    return decodedToken.role; // Assuming role is stored in the JWT payload
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

// Protected Route Component
const ProtectedRoute = ({ requiredRole }) => {
  const userRole = getUserRole();

  if (!userRole) {
    // User not logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  if (userRole !== requiredRole) {
    // If user has a different role, deny access
    return <h2 className="text-danger text-center mt-5">Access Denied</h2>;
  }

  return <Outlet />; // Render the child routes (Admin Pages)
};

export default ProtectedRoute;
