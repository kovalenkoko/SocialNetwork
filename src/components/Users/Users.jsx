import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../img/photo.gif";
import { NavLink } from "react-router-dom";

const Users = (props) => {
  // let pagesCount = Math.ceil(
  //   this.props.totalUsersCount / this.props.pageSize
  // );
  let pagesCount = 10;
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={classes.pagesNav}>
        {pages.map((page) => {
          return (
            <button
              className={props.currentPage === page && classes.selectedPage}
              onClick={() => {
                props.onPageChanged(page);
              }}
            >
              {page}
            </button>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id} className={classes.user}>
          <div className={classes.photo_button}>
            <div>
              <NavLink to={"/profile/" + user.id}>
                <img
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                  className={classes.photo}
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  disabled={props.isFollowInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.isFollowInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </div>
          <div className={classes.info}>
            <div className={classes.infoLeft}>
              <div className={classes.name}>{user.name}</div>
              <div>{user.status}</div>
            </div>
            <div className={classes.infoRight}>
              <div>{"country"}</div>
              <div>{"city"}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
