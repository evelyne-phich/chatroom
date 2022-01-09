import SendIcon from "@mui/icons-material/Send";

import "./style.scss";

const Form = () => (
  <form className="form">
    <input className="form-input" type="text" placeholder="Votre message..." />
    <button className="form-button" type="submit">
      <SendIcon />
    </button>
  </form>
);

export default Form;
