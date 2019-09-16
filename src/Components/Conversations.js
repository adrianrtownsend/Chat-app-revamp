import React from "react";
import ConversationList from "./ConversationList";

function Conversations(props) {
  return (
    <div className="ConversationList col-12 pt-3">
      <div className="d-flex justify-content-between" />
      <ConversationList
        subscribeToRoom={props.subscribeToRoom}
        deleteRoom={props.deleteRoom}
        rooms={props.rooms}
        messages={props.messages}
        sendMessage={props.sendMessage}
        roomId={props.roomId}
        roomName={props.roomName}
        activeUser={props.activeUser}
        members={props.members}
        toggleMembers={props.toggleMembers}
        showMembers={props.showMembers}
        addMember={props.addMember}
        removeMember={props.removeMember}
        isConversationList={props.isConversationList}
        openConversation={props.openConversation}
      />
    </div>
  );
}

export default Conversations;
