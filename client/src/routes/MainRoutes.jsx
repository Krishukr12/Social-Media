import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Analytics } from "../pages/Analytics";
export const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/analytics" element={<Analytics />}></Route>
      </Routes>
    </>
  );
};
