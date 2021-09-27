import React from "react";
import { Redirect } from "react-router";
import { AddMessageFormRedux } from "./AddMessageForm/AddMessageForm";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} />
  ));
  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };
  if (!props.isAuth) {
    return <Redirect to={"/login"} />;
  }
  return (
    <div className={classes.dialogsItems}>
      <div className={classes.dialogs}>{dialogsElements}</div>
      <div className={classes.messages}>
        <div>{messagesElements}</div>
        <div className={classes.messageSend}>
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
