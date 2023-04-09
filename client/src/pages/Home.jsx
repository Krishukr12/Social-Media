import React from "react";
import { SecondaryNav } from "../components/Seconday_Nav/SecondaryNav";
import { HomePageRoutes } from "../routes/HomePageRoutes";

export const Home = () => {
  return (
    <>
      <SecondaryNav />
      <HomePageRoutes />
    </>
  );
};
