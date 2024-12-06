import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
// import CandidateTable from "./CandidateTable";
import PollCreationPage from "./PollCreationPage";
import AdminDashboard from "./AdminDashboard";
import CandidateTable from "./CandidateTable";
import PollsTable from "./PollsTable";
import UserTable from "./UserTable";
import VotesTable from "./VotesTable";
import LogsTable from "./LogsTable";
import CandidateRegistration from "./CandidateRegistration";
import RegistrationPage from "./RegistrationPage";

const AdminRouter = () => {
  return (
    <Routes>
      <Route path={"/"} element={<AdminDashboard />} ></Route>
      <Route path={"/dashboard"} element={<AdminDashboard />} ></Route>
      <Route path={"/candidate-records"} element={<CandidateTable />} ></Route>
      <Route path={"/poll-records"} element={<PollsTable />} ></Route>
      <Route path={"/user-records"} element={<UserTable />} ></Route>
      <Route path={"/vote-records"} element={<VotesTable />} ></Route>
      <Route path={"/log-records"} element={<LogsTable />} ></Route>
      <Route path={"/poll-create"} element={<PollCreationPage />} ></Route>
      <Route path={"/candidate-create"} element={<CandidateRegistration />} ></Route>
      <Route path={"/user-create"} element={<RegistrationPage />} ></Route>
    </Routes>
  );
};

export default AdminRouter;
