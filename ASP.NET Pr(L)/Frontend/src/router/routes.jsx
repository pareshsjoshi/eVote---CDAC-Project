import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import AdminDashboard from "../pages/AdminDashboard";
import LoginPage from "../pages/LoginPage";
import PollCreationPage from "../pages/PollCreationPage";
import VotingPage from "../pages/VotingPage";
import Admin from "../pages/Admin";
import Polls from "../pages/Polls";
import AboutUs from "../pages/AboutUs";
import RegistrationPage from "../pages/RegistrationPage";
import PaymentDetails from "../pages/PaymentDetails";
import PaymentSuccess from "../pages/PaymentStatus";

const AppRoutes = () => {
  const role = localStorage.getItem("role")?.toLowerCase();
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)jwt\s*\=\s*([^;]*).*$)|^.*$/, "$1");

  // PrivateRoute function that checks role and token
  const PrivateRoute = ({ children, allowedRoles }) => {
    // If the role does not match or there is no valid token, redirect to login
    if (!token || !allowedRoles.includes(role)) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route
        path="/admin-dashboard"
        element={
          <PrivateRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin/*"
        element={
          <PrivateRoute allowedRoles={["admin"]}>
            <Admin />
          </PrivateRoute>
        }
      />
      <Route
        path="/voting"
        element={
          <PrivateRoute allowedRoles={["user", "admin"]}>
            <VotingPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/create-poll"
        element={
          <PrivateRoute allowedRoles={["admin"]}>
            <PollCreationPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <PrivateRoute allowedRoles={["admin"]}>
            <ContactPage />
          </PrivateRoute>
        }
      />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/payment" element={<PaymentDetails />} />
      <Route path="/success" element={<PaymentSuccess />} />
      <Route path="/polls" element={<Polls />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default AppRoutes;
