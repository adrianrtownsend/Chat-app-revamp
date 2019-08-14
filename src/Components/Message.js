import React from "react";

function Message(props) {
  return (
    <div className="message col-12">
      <div className="message-username">{props.username}</div>
      <div className="message-text">{props.text}</div>
      <br />
    </div>
  );
}

export default Message;
