import React from "react";

class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversation: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      conversation: e.target.value
    });
    console.log(this.state.conversation);
  }

  handleSubmit(e) {
    e.preventDefault();
    if(this.state.conversation !== ""){
    this.props.createRoom(this.state.conversation);
    this.setState({
      conversation: ""
    })
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 pt-3">
          <h1>
            <b>New Conversation</b>
          </h1>
        </div>
        <div className="col-12">
          <div className="NewConversationForm mt-5 mx-auto text-center card pt-3">
            <form onSubmit={this.handleSubmit}>
              <h5>
                <b>Enter Conversation Name</b>
              </h5>
              <input
                className="my-2"
                value={this.state.conversation}
                onChange={this.handleChange}
                placeholder="Conversation Name"
              />
              <hr />
              <button onClick={this.handleSubmit} className="pb-2">
                <b>Create</b>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default New;
