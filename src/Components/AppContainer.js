import React from "react";
import Conversations from "./Conversations";
import New from "./New";
import Account from "./Account";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      joinedRooms: []
    };
    this.menuChange = this.menuChange.bind(this);
  }
  menuChange() {
    const e = this.props.activeComponent;

    switch (e) {
      case "Conversations":
        return (
          <Conversations
            subscribeToRoom={this.props.subscribeToRoom}
            rooms={this.props.rooms}
            messages={this.props.messages}
            sendMessage={this.props.sendMessage}
            room={this.props.roomId}
            roomName={this.props.roomName}
            activeUser={this.props.activeUser}
          />
        );
      case "New":
        return <New createRoom={this.props.createRoom} />;
      case "Account":
        return (
          <Account
            activeUser={this.props.activeUser}
            activeUsername={this.props.activeUsername}
            signOut={this.props.signOut}
          />
        );
      default:
        return (
          <Conversations
            subscribeToRoom={this.props.subscribeToRoom}
            rooms={this.props.rooms}
            messages={this.props.messages}
            sendMessage={this.props.sendMessage}
            room={this.props.roomId}
            roomName={this.props.activeRoom}
            activeUser={this.props.activeUser}
          />
        );
    }
  }
  render() {
    return <div className="col-12">{this.menuChange()}</div>;
  }
}

export default AppContainer;
