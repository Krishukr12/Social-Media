import React, { useState } from "react";
import classes from "./SecondaryNav.module.css";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const SecondaryNav = () => {
  const [currentTitle, setCurrentTitle] = useState("Posts");
  return (
    <div className={classes.main_container}>
      <div className={classes.title}>{currentTitle}</div>
      <div className={classes.link_container}>
        <Link to="/">
          <Button onClick={() => setCurrentTitle("Posts")}>Posts</Button>
        </Link>
        <Link to="/users">
          <Button onClick={() => setCurrentTitle("Users")}>Users</Button>
        </Link>
        <Link to="createupdateuser">
          {" "}
          <Button onClick={() => setCurrentTitle("Create and update user")}>
            Create and update User
          </Button>
        </Link>
        <Link to="/createupdateposts">
          <Button onClick={() => setCurrentTitle("Create and update post")}>
            Create and update Post
          </Button>
        </Link>
      </div>
    </div>
  );
};
