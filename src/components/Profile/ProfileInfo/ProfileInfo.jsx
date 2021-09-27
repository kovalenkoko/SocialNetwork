import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import nullAva from "../../../img/nullAva.gif";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={classes.content}>
      <img src="http://69naruto69.at.ua/_nw/0/54082826.png"></img>
      <div className={classes.ava_description}>
        <img
          src={
            props.profile.photos.large === null
              ? nullAva
              : props.profile.photos.large
          }
        />
        <div className={classes.info}>
          <div>Name: {props.profile.fullName}</div>
          <br />
          <div>Some information about person: </div>
          <div>Status: {props.profile.aboutMe}</div>
          <ProfileStatusWithHooks
            status={props.status}
            updateStatus={props.updateStatus}
          />
          <br />
          <div>Contacts: </div>
          <div>Facebook: {props.profile.contacts.facebook}</div>
          <div>Twitter: {props.profile.contacts.twitter}</div>
          <div>Instagram: {props.profile.contacts.instagram}</div>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
