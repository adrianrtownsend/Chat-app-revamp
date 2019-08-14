import React from "react";
import Message from "./Message";
import SendMessageForm from "./SendMessageForm";

function Conversation(props) {
  return (
    <div className="ConversationBox col-12 d-flex flex-column pb-5">
      <div className="row border px-2 pb-5 d-flex align-items-center">
        <div className="ConversationName col-10">
          <h1>{props.room}</h1>
          <h5>[Members Online]</h5>
        </div>
        <div className="ConversationInfo col-2">Info</div>
      </div>
      <div className="MessageRow row px-1 pt-2 pb-5">
        {props.messages.map((message, index) => {
          return (
            <Message
              key={index}
              text={message.parts[0].payload.content}
              username={message.senderId}
            />
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
