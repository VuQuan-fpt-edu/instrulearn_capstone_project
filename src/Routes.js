import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Registration from "./pages/User/Registration/Registration";
import Login from "./pages/User/Login/Login";
import HomePage from "./pages/User/Home/HomePage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
    </Routes>
  );
};

export default AppRoutes;
