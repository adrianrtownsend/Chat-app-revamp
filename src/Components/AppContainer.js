import React from "react";
import Conversations from "./Conversations";
import Friends from "./Friends";
import Notifications from "./Notifications";
import Account from "./Account";

class AppContainer extends React.Component {
  constructor(props) {
    super(props);
    this.menuChange = this.menuChange.bind(this);
  }
  menuChange() {
    const e = this.props.activeComponent;
    switch (e) {
      case "Conversations":
        return (
          <Conversations
            subscribeToRoom={this.subscribeToRoom}
            rooms={this.props.joinedRooms}
          />
        );
      case "Friends":
        return <Friends />;
      case "Notifications":
        return <Notifications />;
      case "Account":
        return (
          <Account
            activeUser={this.props.activeUser}
            activeUsername={this.props.activeUsername}
            logout={this.logout}
          />
        );
      default:
        return (
          <Conversations
            subscribeToRoom={this.subscribeToRoom}
            rooms={this.props.joinedRooms}
          />
        );
    }
  }
  render() {
    return <div className="col-12">{this.menuChange()}</div>;
  }
}

export default AppContainer;
