import React from "react";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.disabledToggle = this.disabledToggle.bind(this);
  }

  handleChange(e) {
    this.setState({
      user: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.user) {
      this.props.checkLogin(this.state.user);
    }
    document.getElementById("loginForm").reset();
  }

  disabledToggle() {
    if (!this.state.user) {
      return (
        <button
          onClick={this.handleSubmit}
          type="button"
          className="btn btn-danger"
          disabled
        >
          Submit
        </button>
      );
    } else {
      return (
        <button
          onClick={this.handleSubmit}
          type="button"
          className="btn btn-danger"
        >
          Submit
        </button>
      );
    }
  }

  render() {
    return (
      <div className="col-12 p-5 LoginBlock">
        <div className="border pt-4 pb-5">
          <div className="mx-auto w-50">
            <h1>
              <b>Welcome!</b>
            </h1>
            <p>Login as user [red], [blue], or [green]</p>
            <h3>Enter Username</h3>
            <p>{this.props.errorMessage}</p>
          </div>
          <form
            className="form-inline"
            id="loginForm"
            onSubmit={this.handleSubmit}
          >
            <div className="form-group mx-auto">
              <input
                placeholder="User ID (Case Sensitive)"
                onChange={this.handleChange}
                className="form-control mr-3"
              />
              {this.disabledToggle()}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginScreen;
