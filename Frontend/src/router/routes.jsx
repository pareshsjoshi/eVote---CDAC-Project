import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import AdminDashboard from "../pages/AdminDashboard";
// import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import ForgotPassword from "../pages/ForgotPassword";
import PollCreationPage from "../pages/PollCreationPage";
import RegistrationPage from "../pages/RegistrationPage"
import ErrorBoundary from "../components/ErrorBoundary";
import UserProfilePage from "../pages/UserProfilePage";
import FeedbackPage from "../pages/FeedbackPage";
import VotingPage from "../pages/VotingPage";

import AboutUs from "../pages/AboutUs";
import Admin from "../pages/Admin";
import Dashboard from "../pages/Dashboard";
import RecordsTable from "../pages/CandidateTable";
import Polls from "../pages/Polls";
import CandidateRegistration from "../pages/CandidateRegistration";
// import VoterDashboard from "../pages/VoterDashboard";
// import PollsPage from "../pages/PollsPage";
// import CandidateManagementPage from "../pages/CandidateManagementPage";
// import VoterManagementPage from "../pages/VoterManagementPage";
// import ResultsPage from "../pages/ResultsPage";

const AppRoutes = () => {
  return (
    // <ErrorBoundary>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      {/* <Route path="*" element={<ErrorPage />} /> Catch-all route */}
      <Route path="*" element={<div>Page Not Found</div>} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={< ForgotPassword />} />
      <Route path="/create-poll" element={<PollCreationPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/user-profile" element={<UserProfilePage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/about" element={<AboutUs />} />
      {/* <Route path="/poll-id" element={<VotingPage />} /> */}
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/can-reg" element={<CandidateRegistration />} />
      <Route path="/polls" element={<Polls />} />
      <Route path={"/polls/:id"} element={<VotingPage />} ></Route>


      {/* <Route path={"/admin/dashboard"} element={<Dashboard />} ></Route>
      <Route path={"/admin/records"} element={<RecordsTable />} ></Route> */}



      {/*
      <Route path="/voter-dashboard" element={<VoterDashboard />} />
      <Route path="/manage-voters" element={<VoterManagementPage />} />
      <Route path="/results" element={<ResultsPage />} /> */}


    </Routes>
    // </ErrorBoundary>
  );
};

export default AppRoutes;
