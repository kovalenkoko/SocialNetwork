import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { message: "Hey, how are u?", amountOfLikes: "89" },
        { message: "You are so handsome", amountOfLikes: "56" },
        { message: "Like me, pls", amountOfLikes: "74" },
      ],
      newPostText: "Hello",
    },
    dialogsPage: {
      messages: [
        { message: "Hey! How are you?" },
        { message: "Yo! I am fine" },
        { message: "Could you tell me pls ..." },
      ],
      dialogs: [
        { id: 1, name: "Danya" },
        { id: 2, name: "Kostya" },
        { id: 3, name: "Armyanka" },
        { id: 4, name: "Varya" },
        { id: 5, name: "Toha" },
      ],
      newMessageBody: "",
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
