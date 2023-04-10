import React from "react";
import UserCard from "../components/User Card/UserCard";
import config from "../config/config.js";
import useFetch from "../hooks/useFetch";
export const AllUser = () => {
  const { data, isLoading, error, refetchData } = useFetch(
    "http://localhost:8080/users"
  );

  console.log(data);
  return (
    <div>
      <UserCard />
    </div>
  );
};
