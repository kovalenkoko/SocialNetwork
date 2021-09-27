import React from "react";
import classes from "./Post.module.css";
import postAva from "./../../../../img/postAva.gif";
const Post = (props) => {
  return (
    <div className={classes.post}>
      <img className={classes.ava} src={postAva}></img>
      <span>{props.message}</span>
      <div>{props.amountOfLikes} likes</div>
    </div>
  );
};
export default Post;
