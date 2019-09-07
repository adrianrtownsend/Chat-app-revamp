import React from "react";
/* import Chatkit !!CLIENT!! not regular chatkit */
import Chatkit from "@pusher/chatkit-client";
import AppContainer from "./Components/AppContainer";
import Menu from "./Components/Menu";
import ConversationBlack from "./Assets/conversation-black.png";
import ConversationWhite from "./Assets/conversation-white.png";
import NewBlack from "./Assets/new-message-black.png";
import NewWhite from "./Assets/new-message-white.png";
import SettingsBlack from "./Assets/settings-black.png";
import SettingsWhite from "./Assets/settings-white.png";

import { tokenUrl, instanceLocator } from "./config";

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: "",
      activeUsername: "",
      activeComponent: "Conversations",
      activeRoom: "",
      isConversationList: true,
      roomId: null,
      rooms: [],
      showMembers: false,
      members: [],
      messages: [],
      joinableRooms: [],
      joinedRooms: [],
      menuLinks: [
        {
          id: 1,
          name: "Conversations",
          icon: ConversationBlack,
          iconActive: ConversationWhite,
          disabled: true
        },
        {
          id: 2,
          name: "New",
          icon: NewBlack,
          iconActive: NewWhite,
          disabled: true
        },
        {
          id: 3,
          name: "Account",
          icon: SettingsBlack,
          iconActive: SettingsWhite,
          disabled: true
        }
      ]
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.subscribeToRoom = this.subscribeToRoom.bind(this);
    this.getJoinableRooms = this.getJoinableRooms.bind(this);
    this.menuChange = this.menuChange.bind(this);
    this.setActiveUser = this.setActiveUser.bind(this);
    this.createRoom = this.createRoom.bind(this);
    this.deleteRoom = this.deleteRoom.bind(this);
    this.openConversation = this.openConversation.bind(this);
    this.resetConversation = this.resetConversation.bind(this);
    this.toggleMembers = this.toggleMembers.bind(this);
    this.addMember = this.addMember.bind(this);
    this.removeMember = this.removeMember.bind(this);
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator, // instanceLocator:instanceLocator
      userId: this.props.user,
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    });
    chatManager
      .connect()
      .then(currentUser => {
        this.setState({ loginSuccess: "true" });
        this.currentUser = currentUser;
        this.getJoinableRooms();
        this.setActiveUser();
      })
      .catch(error => {
        this.setState({ loginSuccess: "false" });
        console.error("Error connecting:", error);
      });
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
            this.setState({ messages: [...this.state.messages, message] });
          }
        }
      })
      .then(room => {
        this.setState({
          roomId: room.id,
          activeRoom: roomName,
          members: room.users
        });
        this.getJoinableRooms();
      });
  }

  createRoom(value) {
    this.currentUser
      .createRoom({
        id: value,
        name: value,
        private: false,
        addUserIds: [this.state.activeUser]
      })
      .then(room => {
        console.log("Created room called", room.name);
      })
      .catch(err => {
        console.log("Error creating room", err);
      });
  }

  deleteRoom(value) {
    this.currentUser
      .deleteRoom({
        roomId: value
      })
      .then(() => {
        console.log("Deleted room with ID: ", value);
      })
      .catch(err => {
        console.log("Error deleting room", value, " ", err);
      });
  }

  menuChange(value) {
    this.setState({
      activeComponent: value
    });
  }

  openConversation() {
    this.setState({
      isConversationList: !this.state.isConversationList
    });
  }

  resetConversation() {
    this.setState({
      isConversationList: true
    });
  }

  toggleMembers(value) {
    if (value === true) {
      this.setState({
        showMembers: true
      });
    } else {
      this.setState({
        showMembers: false
      });
    }
  }

  addMember(/*user, room*/) {
    return console.log("I can see the value!! --> ");
    /*this.currentUser
      .addUserToRoom({
        userId: user,
        roomId: room
      })
      // Need a return that switches back to UPDATED LIST
      .then(() => {
        console.log("Added " + user + " to room " + room);
      })
      // Error needs to return "please try entering user again"
      .catch(err => {
        console.log("Error adding user to room " + room + ": " + err);
      });*/
  }

  removeMember(user, room) {
    this.currentUser
      .removeUserFromRoom({
        userId: user,
        roomId: room
      })
      //Need to show confirmation or updated list minus deleted user
      .then(() => {
        console.log("Removed " + user + " from room " + room);
      })
      //Show "sorry there was an issue deleting user"
      .catch(err => {
        console.log("Error removing user from room " + room + ": " + err);
      });
  }

  sendMessage(text, roomId) {
    this.currentUser.sendSimpleMessage({
      text,
      roomId: this.state.roomId
    });
  }

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <AppContainer
            room={this.state.roomId}
            messages={this.state.messages}
            sendMessage={this.sendMessage}
            subscribeToRoom={this.subscribeToRoom}
            rooms={this.state.joinedRooms}
            roomName={this.state.activeRoom}
            activeComponent={this.state.activeComponent}
            activeUser={this.state.activeUser}
            activeUsername={this.state.activeUsername}
            members={this.state.members}
            toggleMembers={this.toggleMembers}
            showMembers={this.state.showMembers}
            addMember={this.addMember}
            removeMember={this.removeMember}
            addMemberBox={this.state.addMemberBox}
            logout={this.signOut}
            createRoom={this.createRoom}
            deleteRoom={this.deleteRoom}
            signOut={this.props.signOut}
            isConversationList={this.state.isConversationList}
            openConversation={this.openConversation}
          />
          <Menu
            resetConversation={this.resetConversation}
            menuChange={this.menuChange}
            links={this.state.menuLinks}
            activeComponent={this.state.activeComponent}
          />
        </div>
      </div>
    );
  }
}

export default MainApp;
