export const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE";
export const SUBMIT_MESSAGE = "SUBMIT_MESSAGE";

export const changeInputValue = (payload) => ({
  type: CHANGE_INPUT_VALUE,
  payload,
});

export const submitMessage = (payload) => ({
  type: SUBMIT_MESSAGE,
  payload,
});
