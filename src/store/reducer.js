import { v4 as uuidv4 } from "uuid";

import {
  CHANGE_INPUT_VALUE,
  CHANGE_LOGIN_INPUT_VALUE,
  LOGOUT,
  SUBMIT_LOGIN,
  SUBMIT_MESSAGE,
  TOGGLE_LOGIN_WINDOW,
} from "../actions";

import users from "../data";

const initialState = {
  inputValue: "",
  messages: [],
  login: {
    opened: true,
    pseudo: "",
    email: "",
    password: "",
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      return {
        ...state,
        inputValue: action.payload,
      };
    case SUBMIT_MESSAGE:
      if (state.inputValue) {
        return {
          ...state,
          inputValue: "",
          messages: [
            ...state.messages,
            {
              id: uuidv4(),
              pseudo: state.login.pseudo,
              content: state.inputValue,
            },
          ],
        };
      }
      return state;
    case CHANGE_LOGIN_INPUT_VALUE:
      return {
        ...state,
        login: { ...state.login, ...action.payload },
      };
    case SUBMIT_LOGIN: {
      const userLogged = users.find(
        (user) =>
          // eslint-disable-next-line
          user.email === state.login.email &&
          user.password === state.login.password,
      );

      if (userLogged) {
        return {
          ...state,
          login: { opened: false, ...userLogged },
        };
      }

      return state;
    }
    case LOGOUT:
      return {
        ...state,
        login: {
          opened: false,
          pseudo: "",
          email: "",
          password: "",
        },
      };
    case TOGGLE_LOGIN_WINDOW:
      return {
        ...state,
        login: {
          ...state.login,
          opened: !state.login.opened,
        },
      };
    default:
      return state;
  }
};

export default reducer;
