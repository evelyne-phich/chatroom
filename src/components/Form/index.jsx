import SendIcon from "@mui/icons-material/Send";

import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import { changeInputValue, submitMessage } from "../../actions";

import "./style.scss";

const Form = () => {
  const inputValue = useSelector((state) => state.inputValue);
  const loginPseudo = useSelector((state) => state.login.pseudo);
  const dispatch = useDispatch();
  const input = useRef();

  useEffect(() => {
    input.current.focus();
  }, [loginPseudo]);

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(submitMessage());
      }}
    >
      <input
        ref={input}
        className="form-input"
        type="text"
        placeholder="Votre message..."
        value={inputValue}
        disabled={!loginPseudo}
        onChange={(event) => {
          const message = event.target.value;
          dispatch(changeInputValue(message));
        }}
      />
      <button className="form-submit" type="submit">
        <SendIcon />
      </button>
    </form>
  );
};
export default Form;
