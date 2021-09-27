import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <NavLink to="/profile" activeClassName={classes.active}>
        Profile
      </NavLink>
      <NavLink to="/users" activeClassName={classes.active}>
        Users
      </NavLink>
      <NavLink to="/dialogs" activeClassName={classes.active}>
        Messages
      </NavLink>
      <NavLink to="/news" activeClassName={classes.active}>
        News
      </NavLink>
      <NavLink to="/music" activeClassName={classes.active}>
        Music
      </NavLink>
    </nav>
  );
};
export default Navbar;
