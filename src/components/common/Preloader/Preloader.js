import React from "react";
import preloder from "../../../img/preloader.gif";
import classes from "./Preloader.module.css";
let Preloader = (props) => {
  return (
    <div className={classes.preloader}>
      <img className={classes.preloaderImg} src={preloder} />
    </div>
  );
};
export default Preloader;
