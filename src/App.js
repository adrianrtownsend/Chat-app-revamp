import React from "react";
/* import Chatkit !!CLIENT!! not regular chatkit */
import Chatkit from "@pusher/chatkit-client";
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
          name: "Friends",
          icon:
            "https://cdn2.iconfinder.com/data/icons/4web-3/139/header-account-image-line-512.png",
          disabled: true
        },
        {
          id: 3,
          name: "Notifications",
          icon: "https://png.pngtree.com/svg/20170907/3a63e3809c.png",
          disabled: true
        },
        {
          id: 4,
          name: "Account",
          icon:
            "https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/setting-512.png",
          disabled: true
        }
      ]
    };
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
        currentUser.subscribeToRoomMultipart({
          roomId: "31266321",
          hooks: {
            onMessage: message => {
              console.log(
                "Received message:",
                message.parts[0].payload.content
              );
              this.setState({ messages: [...this.state.messages, message] });
            }
          }
        });
        this.currentUser = currentUser;
        this.setState({
          joinedRooms: currentUser.rooms
        });
      })
      .catch(error => {
        console.error("error:", error);
      });
  }
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          {/*<Conversation
            room={this.state.roomId}
            messages={this.state.messages}
          />*/}

          {/*<Account />*/}
          {/*<Notifications /> */}
          <Conversations rooms={this.state.joinedRooms} />
          <Menu links={this.state.menuLinks} />
        </div>
      </div>
    );
  }
}

export default App;
