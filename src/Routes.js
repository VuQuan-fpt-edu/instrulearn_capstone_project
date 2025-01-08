import React from "react";
import { Routes, Route } from "react-router-dom";
import Registration from "./pages/User/Registration/Registration";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
};

export default AppRoutes;
