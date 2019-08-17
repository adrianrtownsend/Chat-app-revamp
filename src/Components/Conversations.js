import React from "react";
import ConversationList from "./ConversationList";

function Conversations(props) {
  return (
    <div className="ConversationList col-12 pt-3">
      <div className="d-flex justify-content-between" />
      <h1>Conversations</h1>
      <ConversationList
        subscribeToRoom={props.subscribeToRoom}
        rooms={props.rooms}
      />
    </div>
  );
}

export default Conversations;
