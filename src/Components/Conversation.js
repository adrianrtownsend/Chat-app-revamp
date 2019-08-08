import React from "react";
import Message from "./Message";

class Conversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
  }

  render() {
    return (
      <div className="ConversationBox col-12 d-flex flex-column">
        <div className="row border p-2 d-flex align-items-center">
          <div className="ConversationName col-10">
            <h1>{this.room}</h1>
            <h5>[Members Online]</h5>
          </div>
          <div className="ConversationInfo col-2">Info</div>
        </div>
        <div className="MessageRow row px-1 py-2">
          {this.props.messages.map((message, index) => {
            return (
              <Message
                key={index}
                text={message.parts[0].payload.content}
                username={message.senderId}
              />
            );
          })}
        </div>
        <div className="row">
          <div className="ConversationInput col-12 d-flex border border-bottom-0">
            <form>
              <input
                type="text"
                className="form-control"
                size="100"
                id="message"
                placeholder="Message"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Conversation;
