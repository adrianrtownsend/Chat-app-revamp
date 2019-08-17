import React from "react";
/* import Chatkit !!CLIENT!! not regular chatkit */
import Chatkit from "@pusher/chatkit-client";
import AppContainer from "./Components/AppContainer";
import Menu from "./Components/Menu";
import Conversations from "./Components/Conversations";
import Conversation from "./Components/Conversation";
import Account from "./Components/Account";
import Notifications from "./Components/Notifications";

import { tokenUrl, instanceLocator } from "./config";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: "",
      activeUsername: "",
      activeComponent: "",
      activeRoom: "",
      roomId: null,
      rooms: [],
      messages: [],
      joinableRooms: [],
      joinedRooms: [],
      menuLinks: [
        {
          id: 1,
          name: "Conversations",
          icon:
            "https://images.vexels.com/media/users/3/136808/isolated/preview/d3455a22af5f3ed7565fb5fb71bb8d43-send-message-icon-by-vexels.png",
          disabled: true
        },
        {
          id: 2,
          name: "New",
          icon: "https://abeon-hosting.com/images/new-message-icon-png-8.png",
          disabled: true
        },
        {
          id: 3,
          name: "Account",
          icon:
            "https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/setting-512.png",
          disabled: true
        }
      ]
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.subscribeToRoom = this.subscribeToRoom.bind(this);
    this.getJoinableRooms = this.getJoinableRooms.bind(this);
    this.menuChange = this.menuChange.bind(this);
    this.setActiveUser = this.setActiveUser.bind(this);
    this.signOut = this.signOut.bind(this);
    this.whosMessage = this.whosMessage.bind(this);
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator, // instanceLocator:instanceLocator
      userId: "red",
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    });
    chatManager
      .connect()
      .then(currentUser => {
        this.currentUser = currentUser;
        this.getJoinableRooms();
        this.setActiveUser();
      })
      .catch(error => {
        console.error("Error connecting:", error);
      });
  }

  signOut(e) {
    this.currentUser.disconnect();
    console.log("Signed Out!!", this.state.activeUser);
  }

  setActiveUser() {
    this.setState({
      activeUser: this.currentUser.id,
      activeUsername: this.currentUser.encodedId
    });
  }

  getJoinableRooms() {
    this.currentUser
      .getJoinableRooms()
      .then(joinableRooms => {
        this.setState({
          joinableRooms,
          joinedRooms: this.currentUser.rooms
        });
      })
      .catch(err => console.log("error on joinableRooms: ", err));
  }

  subscribeToRoom(roomId, roomName) {
    this.setState({ messages: [] });
    this.currentUser
      .subscribeToRoomMultipart({
        roomId: roomId,
        hooks: {
          onMessage: message => {
            console.log("Received message:", message.parts[0].payload.content);
            this.setState({ messages: [...this.state.messages, message] });
          }
        }
      })
      .then(room => {
        this.setState({
          roomId: room.id,
          activeRoom: roomName
        });
        this.getJoinableRooms();
      });
  }

  menuChange(value) {
    this.setState({
      activeComponent: value
    });
  }

  sendMessage(text, roomId) {
    this.currentUser.sendSimpleMessage({
      text,
      roomId: this.state.roomId
    });
  }

  whosMessage(username) {}

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          {/*<AppContainer
            room={this.state.roomId}
            messages={this.state.messages}
            sendMessage={this.sendMessage}
            subscribeToRoom={this.subscribeToRoom}
            rooms={this.state.joinedRooms}
            activeComponent={this.state.activeComponent}
            activeUser={this.state.activeUser}
            activeUsername={this.state.activeUsername}
            logout={this.signOut}
          />*/}
          <Conversations
            subscribeToRoom={this.subscribeToRoom}
            rooms={this.state.joinedRooms}
          />
          <Conversation
            messages={this.state.messages}
            sendMessage={this.sendMessage}
            room={this.state.roomId}
            roomName={this.state.activeRoom}
            activeUser={this.state.activeUser}
          />
          {/*<Account
            activeUser={this.state.activeUser}
            activeUsername={this.state.activeUsername}
            logout={this.logout}
          />*/}
          <Menu menuChange={this.menuChange} links={this.state.menuLinks} />
        </div>
      </div>
    );
  }
}

export default App;
