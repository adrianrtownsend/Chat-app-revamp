import React from "react";
/* import Chatkit !!CLIENT!! not regular chatkit */
import Chatkit from "@pusher/chatkit-client";
import Menu from "./Components/Menu";
import ConversationList from "./Components/ConversationList";
import Conversation from "./Components/Conversation";
import Notifications from "./Components/Notifications";

import { tokenUrl, instanceLocator } from "./config";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomId: null,
      messages: [],
      joinableRooms: [],
      joinedRooms: [],
      menuLinks: [
        {
          id: 1,
          name: "Conversations",
          icon:
            "https://images.vexels.com/media/users/3/136808/isolated/preview/d3455a22af5f3ed7565fb5fb71bb8d43-send-message-icon-by-vexels.png"
        },
        {
          id: 2,
          name: "Friends",
          icon:
            "https://cdn2.iconfinder.com/data/icons/4web-3/139/header-account-image-line-512.png"
        },
        {
          id: 3,
          name: "Notifications",
          icon: "https://png.pngtree.com/svg/20170907/3a63e3809c.png"
        },
        {
          id: 4,
          name: "Account",
          icon:
            "https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/setting-512.png"
        }
      ]
    };
  }

  componentDidMount() {
    console.log("Mounted");
    console.log(tokenUrl, instanceLocator);
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
          roomId: currentUser.rooms[0].id,
          hooks: {
            onMessage: message => {
              console.log(
                "Received message:",
                message.parts[0].payload.content
              );
            }
          }
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
          {/*<Conversation />*/}
          {/*<Notifications /> */}
          <ConversationList />
          <Menu links={this.state.menuLinks} />
        </div>
      </div>
    );
  }
}

export default App;
