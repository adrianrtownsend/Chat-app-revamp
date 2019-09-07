import React from "react";
import ReactDOM from "react-dom";
import WrongWay from "../Assets/wrong-way-redo.png";
import Trash from "../Assets/trash.png";
import X from "../Assets/x.png";
import Conversation from "./Conversation";

class ConversationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deletes: false,
      showDeletes: false,
      thisDelete: false,
      activeKey: ""
    };
    this.upperCaseConversation = this.upperCaseConversation.bind(this);
    this.converTimeStamp = this.converTimeStamp.bind(this);
    this.openDeletes = this.openDeletes.bind(this);
    this.deleteThis = this.deleteThis.bind(this);
    this.showThisDeletes = this.showThisDeletes.bind(this);
  }

  openConversation() {
    console.log(this.state.isConversationList);
    this.setState({
      isConversationList: !this.state.isConversationList
    });
    const node = ReactDOM.findDOMNode(this);
    node.scrollTop = node.scrollHeight;
  }

  upperCaseConversation(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  converTimeStamp(string) {
    // get today's date
    var todaysDate = new Date();
    if (string) {
      const messageFullDate = string.split("T");
      const messageDate = messageFullDate[0].split("-");
      const messageDateConv =
        messageDate[1] + "/" + messageDate[2] + "/" + messageDate[0];
      const messageTime = messageFullDate[1].split(":");
      console.log(messageDateConv, messageTime);
    }
    const todaysMonthDayYear =
      todaysDate.getMonth() +
      "/" +
      todaysDate.getDate() +
      "/" +
      todaysDate.getFullYear();
    console.log("today:", todaysMonthDayYear);
    // get last message timestamp
    // convert to date only
    // if date == today show only time
    // else show date only
    const time = new Date();
  }

  openDeletes() {
    this.setState({
      deletes: !this.state.deletes,
      showDeletes: false,
      thisDelete: false,
      activeKey: ""
    });
  }

  showThisDeletes(e) {
    this.setState({
      showDeletes: !this.state.showDeletes,
      thisDelete: !this.state.thisDelete,
      activeKey: e
    });
    console.log(this.state.showDeletes);
    console.log(this.state.activeKey);
  }

  deleteThis(value) {
    this.props.deleteRoom(value);
  }

  render() {
    if (this.props.isConversationList) {
      //Sort rooms by last Message at?
      const timeSortRooms = [this.props.rooms].sort(
        (a, b) => b.lastMessageAt - a.lastMessageAt
      );
      const rooms = this.props.rooms.map(room => (
        <div key={room.id}>
          <div className="row">
            {this.state.deletes === true ? (
              <div className="col-1 ConversationDeleteButton px-1 d-flex align-items-center">
                <button onClick={() => this.showThisDeletes(room.id)}>
                  <img
                    src={WrongWay}
                    alt="delete"
                    className={
                      this.state.showDeletes === true
                        ? "ConversationDeleteImg ConversationDeleteImgRotate"
                        : "ConversationDeleteImg"
                    }
                  />
                </button>
              </div>
            ) : (
              ""
            )}
            <div className={this.state.deletes === true ? "col-11" : "col-12"}>
              {this.state.thisDelete === true ? (
                <div
                  id={room.id}
                  className="d-flex flex-wrap align-items-center"
                >
                  <div className="mr-2 pt-2">
                    <h3>
                      Delete&nbsp;
                      <b>{this.upperCaseConversation(room.name)}</b>?
                    </h3>
                  </div>
                  <div>
                    <button
                      onClick={() => this.deleteThis(room.id)}
                      className="ConversationConfirmDelete"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ) : (
                <a
                  className="ConversationListLink"
                  onClick={() => {
                    this.props.subscribeToRoom(room.id, room.name);
                    this.props.openConversation();
                    this.props.toggleMembers();
                  }}
                  href="#"
                >
                  <div className="row">
                    <div className="ConversationIcon col-2">
                      <div className=" d-flex flex-wrap justify-content-center align-items-center">
                        <span>{room.name.charAt(0).toUpperCase()}</span>
                      </div>
                    </div>
                    <div className="col-10 ConversationLink d-flex flex-wrap align-items-center">
                      <div>
                        <h3>{this.upperCaseConversation(room.name)}</h3>
                        <div>&nbsp;</div>
                      </div>
                      <div className="d-flex align-content-center ml-auto ConversationNotification">
                        <div className="mx-auto my-auto">
                          <b>{room.unreadCount}</b>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              )}
            </div>
          </div>
          <hr />
        </div>
      ));
      return (
        <div className="ConversationListItem">
          <div className="d-flex">
            <div className="mr-auto">
              <h1>Conversations</h1>
            </div>
            <div className="ml-auto pt-2 ConversationEdit">
              <button onClick={() => this.openDeletes()}>
                <img
                  src={this.state.deletes === false ? Trash : X}
                  alt="edit"
                />
              </button>
            </div>
          </div>
          {rooms}
        </div>
      );
    } else {
      return (
        <div>
          <button
            className="ConversationBack"
            onClick={this.props.openConversation}
          >
            <b>&#8592;</b>
          </button>
          <Conversation
            toggleMembers={this.props.toggleMembers}
            showMembers={this.props.showMembers}
            members={this.props.members}
            addMemberBox={this.props.addMemberBox}
            addMember={this.props.addMember}
            removeMember={this.props.removeMember}
            messages={this.props.messages}
            sendMessage={this.props.sendMessage}
            room={this.props.room}
            roomName={this.props.roomName}
            activeUser={this.props.activeUser}
            getLastMessage={this.getLastMessage}
          />
        </div>
      );
    }
  }
}

export default ConversationList;
