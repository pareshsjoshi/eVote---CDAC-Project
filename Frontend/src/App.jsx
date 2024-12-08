import React from "react";
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




// import AboutPage from "./pages/AboutPage";
// import VoterDashboard from "./pages/VoterDashboard";
// import PollsPage from "./pages/PollsPage";
// import CandidateManagementPage from "./pages/CandidateManagementPage";
// import VoterManagementPage from "./pages/VoterManagementPage";
// import ResultsPage from "./pages/ResultsPage";
// import RegisterPage from "./pages/RegisterPage";

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
