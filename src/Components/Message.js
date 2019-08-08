import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div className="message col-12">
        <div className="message-username">{this.props.username}</div>
        <div className="message-text">{this.props.text}</div>
        <br />
      </div>
    );
  }
}

export default Message;
