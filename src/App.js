import React from "react";
/* import Chatkit !!CLIENT!! not regular chatkit */
/*import Chatkit from "@pusher/chatkit-client";*/
import Menu from "./Components/Menu";
import Conversations from "./Components/Conversations";

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
  }

  render() {
    return (
      <div className="App">
        <Conversations />
        <Menu links={this.state.menuLinks} />
      </div>
    );
  }
}

export default App;
