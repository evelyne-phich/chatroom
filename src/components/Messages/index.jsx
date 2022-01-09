import { useSelector } from "react-redux";

import "./style.scss";

const Messages = () => {
  const messages = useSelector((state) => state.messages);

  return (
    <div className="messages">
      {messages.map((message) => (
        <div className="message">
          <div className="author">{message.author}</div>
          <div className="content">{message.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
