import React from "react";

class SendMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.message);
    this.props.sendMessage(this.state.message);
    this.setState({
      message: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="form-control"
          size="100"
          id="message"
          placeholder="Type Message and press ENTER"
          value={this.state.message}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default SendMessageForm;
