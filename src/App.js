import React from "react";
/* import Chatkit !!CLIENT!! not regular chatkit */
import Chatkit from "@pusher/chatkit-client";
import Menu from "./Components/Menu";
/* import Conversations from "./Components/ConversationList"; */
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
        { id: 1, name: "Conversations" },
        { id: 2, name: "Friends" },
        { id: 3, name: "Notifications" },
        { id: 4, name: "Account" }
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
        <Conversation />
        {/*<Notifications /> */}
        {/* <ConversationList /> */}
        <Menu links={this.state.menuLinks} />
      </div>
    );
  }
}

export default App;
