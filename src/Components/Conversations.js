import React from "react";
import ConversationList from "./ConversationList";

function Conversations(props) {
  return (
    <div className="ConversationList col-12 pt-3">
      <div className="d-flex justify-content-between" />
      <ConversationList
        subscribeToRoom={props.subscribeToRoom}
        rooms={props.rooms}
        messages={props.messages}
        sendMessage={props.sendMessage}
        room={props.room}
        roomName={props.roomName}
        activeUser={props.activeUser}
      />
    </div>
  );
}

export default Conversations;
