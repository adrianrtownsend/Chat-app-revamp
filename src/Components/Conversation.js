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
        />
      </div>
    );
  } else {
    return (
      <div className="ConversationBox col-12 d-flex flex-column pb-5">
        <div className="row p-2 d-flex align-items-center">
          <div className="ConversationName col-12">
            <div className="d-flex">
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
        </div>
        <div className="MessageRow row px-1 pt-2 pb-5">
          {props.messages.map((message, index) => {
            const activeUserClass =
              props.activeUser === message.senderId ? "flex-row-reverse" : " ";
            return (
              <div className={"col-12 my-2 d-flex " + activeUserClass}>
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
        <div className="row pt-5">
          <div className="ConversationInput col-10 mx-auto border border-bottom-0">
            <SendMessageForm sendMessage={props.sendMessage} />
          </div>
        </div>
      </div>
    );
  }
}

export default Conversation;
