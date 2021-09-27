import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator } from "../../../../redux/profile-reducer";
import MyPosts from "../MyPosts";

const mapToStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText));
    },
  };
};
const MyPostContainer = connect(mapToStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostContainer;
