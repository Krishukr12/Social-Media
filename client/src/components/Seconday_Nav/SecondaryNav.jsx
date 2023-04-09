import React, { useState } from "react";
import classes from "./SecondaryNav.module.css";
import { Button } from "@chakra-ui/react";

export const SecondaryNav = () => {
  const [currentTitle, setCurrentTitle] = useState("Posts");
  return (
    <div className={classes.main_container}>
      <div className={classes.title}>{currentTitle}</div>
      <div className={classes.link_container}>
        <Button onClick={() => setCurrentTitle("Posts")}>Posts</Button>
        <Button onClick={() => setCurrentTitle("Users")}>Users</Button>
        <Button onClick={() => setCurrentTitle("Create and update user")}>
          Create and update User
        </Button>
        <Button onClick={() => setCurrentTitle("Create and update post")}>
          Create and update Post
        </Button>
      </div>
    </div>
  );
};
