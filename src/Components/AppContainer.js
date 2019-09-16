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
            deleteRoom={this.props.deleteRoom}
            rooms={this.props.rooms}
            messages={this.props.messages}
            sendMessage={this.props.sendMessage}
            roomId={this.props.roomId}
            roomName={this.props.roomName}
            activeUser={this.props.activeUser}
            members={this.props.members}
            toggleMembers={this.props.toggleMembers}
            showMembers={this.props.showMembers}
            addMember={this.props.addMember}
            removeMember={this.props.removeMember}
            isConversationList={this.props.isConversationList}
            openConversation={this.props.openConversation}
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
            roomId={this.props.roomId}
            roomName={this.props.roomName}
            activeUser={this.props.activeUser}
            members={this.props.members}
            toggleMembers={this.props.toggleMembers}
            showMembers={this.props.showMembers}
            addMember={this.props.addMember}
            removeMember={this.props.removeMember}
            isConversationList={this.props.isConversationList}
            openConversation={this.props.openConversation}
          />
        );
    }
  }
  render() {
    return <div className="col-12">{this.menuChange()}</div>;
  }
}

export default AppContainer;
