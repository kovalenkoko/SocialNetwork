import { connect } from "react-redux";
import { compose } from "redux";
import { sendMessageCreator } from "../../redux/dialogs-reducer";
import { withAuthRedirect } from "../hoc/withAuthRedirect";
import Dialogs from "./Dialogs";

let mapToStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
  };
};
export default compose(
  withAuthRedirect,
  connect(mapToStateToProps, mapDispatchToProps)
)(Dialogs);
