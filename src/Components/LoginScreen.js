import React from "react";
import InformationBlack from "../Assets/information-black.png";

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
      <div className="col-12 LoginBlock h-100 d-flex justify content center">
        <div className="border p-5 mx-auto my-auto">
          <div className="mx-auto w-100">
            <div className="mx-auto">
              <h1>
                <b>Welcome!</b>
              </h1>
            </div>
            <p>Login as user [red], [blue], or [green]</p>
            <h3>Enter Username</h3>
            <p>{this.props.errorMessage}</p>
          </div>
          <form
            className="form-inline"
            id="loginForm"
            onSubmit={this.handleSubmit}
          >
            <div className="form-group d-flex flex-column mx-auto">
              <div className="mx-auto">
                <input
                  placeholder="User ID (Case Sensitive)"
                  onChange={this.handleChange}
                  className="form-control mb-3"
                />
              </div>
              <div className="mx-auto">{this.disabledToggle()}</div>
            </div>
          </form>
          <div className="mt-2">
            <p>
              Once Logged In, press the{" "}
              <img
                src={InformationBlack}
                className="LoginInformationIcon"
                alt="information"
              />{" "}
              icon for information on the app.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginScreen;
