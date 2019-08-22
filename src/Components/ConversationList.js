import React from "react";
import Conversation from "./Conversation";

class ConversationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isConversationList: true
    };
    this.openConversation = this.openConversation.bind(this);
  }

  openConversation() {
    console.log(this.state.isConversationList);
    this.setState({
      isConversationList: !this.state.isConversationList
    });
  }

  render() {
    if (this.state.isConversationList) {
      const rooms = this.props.rooms.map(room => (
        <div key={room.id}>
          <a
            onClick={() => {
              this.props.subscribeToRoom(room.id, room.name);
              this.openConversation();
            }}
            href="#"
          >
            <div className="row">
              <div className="ConversationIcon col-2">
                <div className=" d-flex flex-wrap justify-content-center align-items-center">
                  <span>{room.name.charAt(0)}</span>
                </div>
              </div>
              <div className="col-10 ConversationLink d-flex flex-wrap align-items-center">
                <h3>{room.name}</h3>
              </div>
            </div>
          </a>
          <hr />
        </div>
      ));
      return (
        <div className="ConversationListItem">
          <h1>Conversations</h1>
          {rooms}
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.openConversation}>&#8592;</button>
          <Conversation
            messages={this.props.messages}
            sendMessage={this.props.sendMessage}
            room={this.props.room}
            roomName={this.props.roomName}
            activeUser={this.props.activeUser}
          />
        </div>
      );
    }
  }
}

export default ConversationList;
