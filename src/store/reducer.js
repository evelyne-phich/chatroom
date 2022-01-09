import { v4 as uuidv4 } from "uuid";

import { CHANGE_INPUT_VALUE, SUBMIT_MESSAGE } from "../actions";

const initialState = {
  inputValue: "",
  messages: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      };
    case SUBMIT_MESSAGE:
      return {
        ...state,
        inputValue: "",
        messages: [
          ...state.messages,
          {
            id: uuidv4(),
            author: "Me",
            content: state.inputValue,
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
