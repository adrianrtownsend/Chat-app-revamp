import React from "react";
import Message from "./Message";
import SendMessageForm from "./SendMessageForm";

function Conversation(props) {
  return (
    <div className="ConversationBox col-12 d-flex flex-column pb-5">
      <div className="row p-2 d-flex align-items-center">
        <div className="ConversationName col-10">
          <h1>
            <b>{props.roomName}</b>
          </h1>
        </div>
      </div>
      <div className="MessageRow row px-1 pt-2 pb-5">
        {props.messages.map((message, index) => {
          const activeUserClass =
            props.activeUser === message.senderId ? "flex-row-reverse" : " ";
          return (
            <div className={"col-12 my-2 d-flex " + activeUserClass}>
              <Message
                key={index}
                text={message.parts[0].payload.content}
                username={message.senderId}
                activeUser={props.activeUser}
              />
            </div>
          );
        })}
      </div>
      <div className="row pt-5">
        <div className="ConversationInput col-12 d-flex border border-bottom-0">
          <SendMessageForm sendMessage={props.sendMessage} />
        </div>
      </div>
    </div>
  );
}

export default Conversation;
