import React from "react";
import './App.css'; // Adjust the path if necessary
import './index.css'; // Adjust the path if necessary

// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import ErrorBoundary from "./components/ErrorBoundary";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AdminDashboard from "./pages/AdminDashboard";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./pages/ForgotPassword";
import PollCreationPage from "./pages/PollCreationPage";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router/routes";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Header />
        <AppRoutes />
        <Footer />
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
