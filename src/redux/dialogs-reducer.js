const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  messages: [
    { message: "Hey! How are you?" },
    { message: "Yo! I am fine" },
    { message: "Could you tell me pls ..." },
  ],
  dialogs: [
    { id: 1, name: "Danya" },
    { id: 2, name: "Kostya" },
    { id: 3, name: "Alina" },
    { id: 4, name: "Varya" },
    { id: 5, name: "Tony" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => {
  return { type: SEND_MESSAGE, newMessageBody };
};
export default dialogsReducer;
