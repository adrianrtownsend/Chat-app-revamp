import React from "react";

import Return from "../Assets/return.png";

function upperCaseConversation(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class ConversationMembers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addMemberBox: false
    };
    this.addMemberBoxToggle = this.addMemberBoxToggle.bind(this);
    this.memberDisplay = this.memberDisplay.bind(this);
  }

  addMemberBoxToggle(value) {
    if (value === "show") {
      this.setState({
        addMemberBox: true
      });
    } else if (value === "hide") {
      this.setState({
        addMemberBox: false
      });
    }
  }

  memberDisplay() {
    if (this.state.addMemberBox) {
      return (
        <div className="container">
          <div>
            <button onClick={this.addMemberBoxToggle("hide")}>&times;</button>
            <form>
              <input type="text" placeholder="Enter Name" />
            </form>
          </div>
        </div>
      );
    }
  }

  render() {
    const membersList = this.props.members.map(member => (
      <div key={member.id}>
        {upperCaseConversation(member.name)}
        <hr />
      </div>
    ));

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="d-flex flex-wrap align-items-center pt-3">
              <h1>Members of {upperCaseConversation(this.props.roomName)}</h1>
              <div className="ml-auto ConversationInfoIcon">
                <button onClick={() => this.props.toggleMembers()}>
                  <img src={Return} alt="info" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-12" />
          <div className="col-12">
            {membersList}
            <div className="ConversationAddMembers">
              <button onClick={() => this.addMemberBoxToggle("show")}>
                <b>+ Add Members</b>
              </button>
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConversationMembers;
