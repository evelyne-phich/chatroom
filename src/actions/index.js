export const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";
export const SUBMIT_MESSAGE = "SUBMIT_MESSAGE";
export const CHANGE_LOGIN_INPUT_VALUE = "CHANGE_LOGIN_INPUT_VALUE";
export const SUBMIT_LOGIN = "SUBMIT_LOGIN";
export const LOGOUT = "LOGOUT";
export const TOGGLE_LOGIN_WINDOW = "TOGGLE_LOGIN_WINDOW";

export const changeInputValue = (payload) => ({
  type: CHANGE_INPUT_VALUE,
  payload,
});

export const submitMessage = (payload) => ({
  type: SUBMIT_MESSAGE,
  payload,
});

export const changeLoginInputValue = (payload) => ({
  type: CHANGE_LOGIN_INPUT_VALUE,
  payload,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const toggleLoginWindow = () => ({
  type: TOGGLE_LOGIN_WINDOW,
});
