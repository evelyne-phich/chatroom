import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import "./style.scss";

const Messages = () => {
  const messages = useSelector((state) => state.messages);

  const messagesElement = useRef();

  useEffect(() => {
    messagesElement.current.scrollTo({
      top: messagesElement.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages.length]);

  return (
    <div ref={messagesElement} className="messages">
      {messages.map((message) => (
        <div key={message.id} className="message">
          <div className="message-pseudo">{message.pseudo}</div>
          <div className="message-content">{message.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Messages;
