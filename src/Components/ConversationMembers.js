import React from "react";

import Return from "../Assets/return.png";

function upperCaseConversation(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class ConversationMembers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addMemberBox: false,
      newMember: "",
      isReadyToDelete: false,
      deleteMemberName: ""
    };
    this.addMemberBoxToggle = this.addMemberBoxToggle.bind(this);
    this.deleteToggle = this.deleteToggle.bind(this);
    this.memberDisplay = this.memberDisplay.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      newMember: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addMember(this.state.newMember);
    this.setState({
      newMember: ""
    });
  }

  addMemberBoxToggle() {
    this.setState({
      addMemberBox: !this.state.addMemberBox,
      newMember: ""
    });
  }

  deleteToggle(name, id) {
    this.setState({
      isReadyToDelete: !this.state.isReadyToDelete,
      deleteMemberName: name
    });
  }

  removeMemberFunction(user, roomId) {
    /* 
    1 button that shows confirmation to delete [member]
    2 No -> hides/resets confirmation
    3 Yes -> 
      a) uses value of member
      b) get array of all members / save to new value
      c) get index of deleted member
      d) go through array and delete that member
      c) set the state to new array w/o the deleted member
    */
    //this.props.removeMember(member, this.props.roomName);
    this.props.removeMember(user, roomId);
  }

  memberDisplay() {
    if (this.state.addMemberBox) {
      return (
        <div className="container">
          <div>
            <form>
              <input type="text" placeholder="Enter Name" />
            </form>
          </div>
        </div>
      );
    } else {
      return <div />;
    }
  }

  render() {
    const membersList = this.props.members.map(member => (
      <div key={member.id}>
        {this.props.activeUser !== member.name ? (
          <div id={member.id}>
            {/* Remove the extra d-flex(s) when addding if state*/}
            {this.state.isReadyToDelete === true ? (
              <div className="d-flex ConversationDeleteMember">
                <div>
                  <p>
                    <b>Remove {upperCaseConversation(member.name)}?</b>
                  </p>
                </div>
                <div>
                  <button
                    onClick={() =>
                      this.removeMemberFunction(member.id, this.props.roomId)
                    }
                  >
                    Yes
                  </button>
                  |
                  <button
                    onClick={() => {
                      this.setState({
                        isReadyToDelete: false
                      });
                    }}
                  >
                    No
                  </button>
                </div>
              </div>
            ) : (
              <div className="d-flex">
                <div>{upperCaseConversation(member.name)}</div>
                <div className="ml-auto">
                  <button
                    onClick={() => this.deleteToggle(member.name, member.id)}
                  >
                    <b>&times;</b>
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          ""
        )}
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
              <button onClick={() => this.addMemberBoxToggle()}>
                <b>+ Add Members</b>
              </button>
              <hr />
            </div>
            {this.state.addMemberBox === true ? (
              <div className="d-flex flex-wrap addMemberForm">
                <button onClick={() => this.addMemberBoxToggle()}>
                  <b>&times;</b>
                </button>
                <form onSubmit={this.handleSubmit}>
                  <input
                    type="text"
                    placeholder="name"
                    onChange={this.handleChange}
                  />
                </form>
                <hr />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ConversationMembers;
