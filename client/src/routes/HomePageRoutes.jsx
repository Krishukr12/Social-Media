import React from "react";
import { Route, Routes } from "react-router-dom";
import { AllPosts } from "../pages/AllPosts";
import { AllUser } from "../pages/AllUser";
import { ManageUser } from "../pages/ManageUser";
import { ManagePosts } from "../pages/ManagePosts";
export const HomePageRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AllPosts />}></Route>
        <Route path="/users" element={<AllUser />}></Route>
        <Route path="/createupdateuser" element={<ManageUser />}></Route>
        <Route path="/createupdateposts" element={<ManagePosts />}></Route>
      </Routes>
    </div>
  );
};
