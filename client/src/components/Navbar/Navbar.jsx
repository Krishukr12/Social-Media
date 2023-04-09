import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import { useState } from "react";
export const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <div className={classes.navContainer}>
      <div className={classes.logo_container}>
        <Link onClick={() => setActiveNav("#")} to="/">
          Social Media
        </Link>
      </div>
      <div className={classes.link_container}>
        <Link
          onClick={() => setActiveNav("/")}
          className={activeNav === "/" ? classes.link : null}
          to="/"
        >
          Home
        </Link>
        <Link
          onClick={() => setActiveNav("/useranalytics")}
          className={activeNav === "/useranalytics" ? classes.link : null}
          to="/useranalytics"
        >
          UserAnalytics
        </Link>
        <Link
          onClick={() => setActiveNav("/postanalytics")}
          className={activeNav === "/postanalytics" ? classes.link : null}
          to="/postanalytics"
        >
          PostAnalytics
        </Link>
      </div>
    </div>
  );
};
