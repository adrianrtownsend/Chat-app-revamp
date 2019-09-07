import React from "react";
import LoginScreen from "./Components/LoginScreen";
import MainApp from "./MainApp";
import LoginCheck from "./Components/LoginCheck";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      isLoggedIn: "false",
      errorMessage: ""
    };
    this.checkLogin = this.checkLogin.bind(this);
    this.loginStatus = this.loginStatus.bind(this);
    this.signOut = this.signOut.bind(this);
    this.errorMessageLog = this.errorMessageLog.bind(this);
    this.switchState = this.switchState.bind(this);
  }

  checkLogin(value) {
    LoginCheck(value, this);
  }

  signOut() {
    this.setState({
      user: "",
      isLoggedIn: "false",
      errorMessage: ""
    });
  }

  errorMessageLog(value) {
    this.setState({
      isLoggedIn: "false",
      errorMessage: value
    });
  }

  switchState(value) {
    this.setState({
      isLoggedIn: "true",
      user: value
    });
  }

  loginStatus() {
    if (this.state.isLoggedIn === "true") {
      return <MainApp user={this.state.user} signOut={this.signOut} />;
    } else {
      return (
        <LoginScreen
          switchState={this.switchState}
          checkLogin={this.checkLogin}
          errorMessage={this.state.errorMessage}
        />
      );
    }
  }

  render() {
    return this.loginStatus();
  }
}

export default App;
