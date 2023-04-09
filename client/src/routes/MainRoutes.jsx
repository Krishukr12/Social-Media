import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { PostAnalytics } from "../pages/PostAnalytics";
import { UserAnalytics } from "../pages/UserAnalytics";
export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/postanalytics" element={<PostAnalytics />}></Route>
        <Route path="/useranalytics" element={<UserAnalytics />}></Route>
      </Routes>
    </>
  );
};
