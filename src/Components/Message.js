import React from "react";

function Message(props) {
  const activeUserClass =
    props.activeUser === props.username ? "activeUserClass-" : "";
  return (
    <div className="message">
      <div className={activeUserClass + "message-username"}>
        {props.username}
      </div>
      <div className={activeUserClass + "message-text"}>{props.text}</div>
      <br />
    </div>
  );
}

export default Message;
