import React from "react";
import ConversationMembers from "./ConversationMembers";
import Message from "./Message";

import SendMessageForm from "./SendMessageForm";

import Info from "../Assets/info.png";

function upperCaseConversation(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Conversation(props) {
  if (props.showMembers === true) {
    return (
      <div>
        <ConversationMembers
          members={props.members}
          toggleMembers={props.toggleMembers}
          roomName={props.roomName}
          activeUser={props.activeUser}
          addMember={props.addMember}
          removeMember={props.removeMember}
          roomId={props.roomId}
        />
      </div>
    );
  } else {
    return (
      <div className="ConversationBox col-12 d-flex flex-column pb-5 mb-5">
        <div className="ConversationName row p-2 sticky-top">
          <div className="d-flex col-12">
            <div className="mr-auto">
              <h1>
                <b>{upperCaseConversation(props.roomName)}</b>
              </h1>
            </div>
            <div className="align-self-center ConversationInfoIcon">
              <button onClick={() => props.toggleMembers(true)}>
                <img src={Info} alt="info" />
              </button>
            </div>
          </div>
        </div>
        <div className="MessageRow row px-1 pt-2 pb-5 h-100">
          <div className="col-12">
            {props.messages.map(message => {
              const activeUserClass =
                props.activeUser === message.senderId
                  ? "flex-row-reverse"
                  : " ";
              return (
                <div
                  key={message.id}
                  className={"my-2 d-flex " + activeUserClass}
                >
                  <Message
                    key={message.id}
                    text={message.parts[0].payload.content}
                    username={message.senderId}
                    activeUser={props.activeUser}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="ConversationInput mt-5">
          <div>{props.whoIsTyping}</div>
          <SendMessageForm
            sendMessage={props.sendMessage}
            userTyping={props.userTyping}
          />
        </div>
      </div>
    );
  }
}

export default Conversation;
