import { jwtDecode } from "jwt-decode";
import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
//import jwtDecode from "jwt-decode";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import AdminDashboard from "../pages/AdminDashboard";
import LoginPage from "../pages/LoginPage";
import ForgotPassword from "../pages/ForgotPassword";
import PollCreationPage from "../pages/PollCreationPage";
import RegistrationPage from "../pages/RegistrationPage";
import UserProfilePage from "../pages/UserProfilePage";
import FeedbackPage from "../pages/FeedbackPage";
import VotingPage from "../pages/VotingPage";
import AboutUs from "../pages/AboutUs";
import Admin from "../pages/Admin";
import CandidateRegistration from "../pages/CandidateRegistration";
import Polls from "../pages/Polls";
import PaymentDetails from "../pages/PaymentDetails";
import PaymentSuccess from "../pages/PaymentStatus";
import Logout from "../pages/Logout";
import ResultsPage from "../pages/ResultsPage";
// Function to get user role from JWT
const getUserRole = () => {
  const token = localStorage.getItem("jwtToken"); // Get JWT token
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded.role; // Extract role from JWT
  } catch (error) {
    console.error("Invalid token:", error);
    return null;
  }
};

// Protected Route Component
const ProtectedRoute = ({ requiredRole, children }) => {
  const userRole = getUserRole();
  const location = useLocation();

  if (!userRole) {
    return <Navigate to="/login" state={{ from: location }} replace />; // Redirect to login if not logged in
  }

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/" replace />; // Redirect unauthorized users to home
  }

  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/create-poll" element={<PollCreationPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/user-profile" element={<UserProfilePage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/polls" element={<Polls />} />
      <Route path="/polls/:id" element={<VotingPage />} />
      <Route path="/payment" element={<PaymentDetails />} />
      <Route path="/success" element={<PaymentSuccess />} />
      <Route path="/logout" element={<Logout />} /> 
      <Route path="/polls/:pollId" element={<VotingPage />} />
      <Route path="/voting/:pollId" element={<VotingPage />} />
      <Route path="/results" element={<ResultsPage />} />


      {/* Admin Routes (Protected) */}
      <Route path="/admin-dashboard" element={
        <ProtectedRoute requiredRole="ADMIN">
          <AdminDashboard />
        </ProtectedRoute>
      } />
      
      <Route path="/admin/*" element={
        <ProtectedRoute requiredRole="ADMIN">
          <Admin />
        </ProtectedRoute>
      } />

      <Route path="/can-reg" element={
        <ProtectedRoute requiredRole="ADMIN">
          <CandidateRegistration />
        </ProtectedRoute>
      } />

      {/* 404 Page */}
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;