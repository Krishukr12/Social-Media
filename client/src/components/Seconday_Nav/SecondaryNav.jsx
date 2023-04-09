import React from "react";
import classes from "./SecondaryNav.module.css";
import { Button } from "@chakra-ui/react";

export const SecondaryNav = () => {
  return (
    <div className={classes.main_container}>
      <div>Electives</div>
      <div className={classes.link_container}>
        <Button>Posts</Button>
        <Button>Users</Button>
        <Button>Create and update User</Button>
        <Button>Create and update Post</Button>
      </div>
    </div>
  );
};
