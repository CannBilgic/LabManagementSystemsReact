import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Reports from "./pages/Reports";
import ReportDetails from "./pages/ReportDetails";
import PatientProfile from "./pages/PatientProfile";
import Home from "./pages/Home";
import LabSignin from "./pages/Auth/LabSignin";
import LabSignup from "./pages/Auth/LabSignup";
import Laborant from "./pages/Laborant";
import Lab from "./pages/Laborant/Lab";
import Image from "./pages/Laborant/Image";
import Role from "./pages/Laborant/Role";
import Patient from "./pages/Laborant/Patient";
import ReportsLab from "./pages/Laborant/ReportsLab";
import PatientDetails from "./pages/Laborant/PatientDetails";
import RoleCreate from "./pages/Laborant/RoleCreate";
import ReportLabUpdate from "./pages/Laborant/ReportLabUpdate";
import NewReport from "./pages/Laborant/NewReport";
import UploadImage from "./pages/Laborant/UploadImage";
import SortReport from "./pages/Laborant/SortReport";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div id="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report" element={<Reports />} />
            <Route path="report/:reportId" element={<ReportDetails />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/patientProfile" element={<PatientProfile />} />
            <Route path="/labSignin" element={<LabSignin />} />
            <Route path="/labSignup" element={<LabSignup />} />
            <Route path="/laborant" element={<Laborant />} />
            <Route path="/laborant/lab" element={<Lab />} />
            <Route path="/laborant/image" element={<Image />} />
            <Route path="/laborant/role" element={<Role />} />
            <Route path="/laborant/report" element={<ReportsLab />} />
            <Route path="/laborant/patient" element={<Patient />} />
            <Route path="/laborant/patient/:patientId" element={<PatientDetails />} />
            <Route path="/laborant/role/create" element={<RoleCreate />} />
            <Route path="/laborant/report/:reportId" element={<ReportLabUpdate />} />
            <Route path="/laborant/report/create" element={<NewReport />} />
            <Route path="/laborant/image/create" element={<UploadImage />} />
            <Route path="/laborant/report/sort" element={<SortReport />} />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
