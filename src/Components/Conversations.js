import React from "react";
import ConversationList from "./ConversationList";

function Conversations(props) {
  return (
    <div className="ConversationList col-12 pt-3">
      <div className="d-flex justify-content-between">
        <div>
          <b>Edit</b>
        </div>
        <div>
          <b>New</b>
        </div>
      </div>
      <h1>Conversations</h1>
      <ConversationList rooms={props.rooms} />
    </div>
  );
}

export default Conversations;
