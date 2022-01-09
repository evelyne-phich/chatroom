import SendIcon from "@mui/icons-material/Send";

import { useSelector, useDispatch } from "react-redux";

import { changeInputValue, submitMessage } from "../../actions";

import "./style.scss";

const Form = () => {
  const inputValue = useSelector((state) => state.inputValue);
  const dispatch = useDispatch();

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(submitMessage());
      }}
    >
      <input
        className="input"
        type="text"
        placeholder="Votre message..."
        value={inputValue}
        onChange={(event) => {
          const message = event.target.value;
          dispatch(changeInputValue(message));
        }}
      />
      <button className="button" type="submit">
        <SendIcon />
      </button>
    </form>
  );
};
export default Form;
