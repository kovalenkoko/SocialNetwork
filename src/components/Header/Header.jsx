import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import logo from "./../../img/logo.png";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <NavLink to="/profile">
        <img src={logo}></img>
      </NavLink>

      <div className={classes.loginBlock}>
        {props.isAuth ? (
          <div>
            <span>{props.login} </span>
            <button onClick={props.logout}>Logout</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};
export default Header;
