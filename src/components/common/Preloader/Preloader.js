import React from "react";
import preloader from "../../../img/preloader.gif";
import classes from "./Preloader.module.css";
let Preloader = (props) => {
  return (
    <div className={classes.preloader}>
      {/* <img className={classes.preloaderImg} src={preloader} />  */}
      <div className={classes.spinner}></div>
    </div>
  );
};
export default Preloader;
