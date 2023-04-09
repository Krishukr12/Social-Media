import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
export const Navbar = () => {
  return (
    <div className={classes.navContainer}>
      <div className={classes.logo_container}>
        <Link to="/">Social Media</Link>
      </div>
      <div className={classes.link_container}>
        <Link className={classes.link} to="/">
          Home
        </Link>
        <Link className={classes.link} to="/analytics">
          Analytics
        </Link>
      </div>
    </div>
  );
};
