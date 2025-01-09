import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Registration from "./pages/User/Registration/Registration";
import Login from "./pages/User/Login/Login";
import HomePage from "./pages/User/Home/HomePage";
import StaffDashboard from "./pages/Staff/StaffDashBoard/StaffDashBoard";
import StaffCourseMnanagementPage from "./pages/Staff/StaffDashBoard/StaffCourseManagementPage";
import StaffServiceBookingsManagementPage from "./pages/Staff/StaffDashBoard/StaffServiceBookingsManagementPage";
import StaffStudentRequestsManagementPage from "./pages/Staff/StaffDashBoard/StaffStudentRequestsManagementPage";
import StaffTeachingSchedulePage from "./pages/Staff/StaffDashBoard/StaffTeachingSchedulePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/staffdashboard" element={<StaffDashboard />} />
      <Route
        path="/staffcoursemanagement"
        element={<StaffCourseMnanagementPage />}
      />
      <Route
        path="/staffservicebooking"
        element={<StaffServiceBookingsManagementPage />}
      />
      <Route
        path="/staffstudentrequest"
        element={<StaffStudentRequestsManagementPage />}
      />
      <Route
        path="/staffteachingschedule"
        element={<StaffTeachingSchedulePage />}
      />
    </Routes>
  );
};

export default AppRoutes;
