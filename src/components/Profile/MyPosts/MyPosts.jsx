import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const maxLength10 = maxLengthCreator(100);
const MyPosts = (props) => {
  let postsElements = props.posts.map((post) => (
    <Post message={post.message} amountOfLikes={post.amountOfLikes} />
  ));
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
    values.newPostText = "";
  };
  return (
    <div className={classes.postInfo}>
      <div className={classes.title}>MyPosts</div>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div>{postsElements}</div>
    </div>
  );
};
const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name={"newPostText"}
        component={Textarea}
        validate={[required, maxLength10]}
        placeholder={"Post message"}
      />
      <button>Add Post</button>
    </form>
  );
};
let AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(
  AddNewPostForm
);
export default MyPosts;
