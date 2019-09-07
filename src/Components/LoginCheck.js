import React from "react";
import Chatkit from "@pusher/chatkit-client";
import { tokenUrl, instanceLocator } from "../config";

function LoginCheck(props, functionCall) {
  const chatManager = new Chatkit.ChatManager({
    instanceLocator,
    userId: props,
    tokenProvider: new Chatkit.TokenProvider({
      url: tokenUrl
    })
  });
  chatManager
    .connect()
    .then(currentUser => {
      functionCall.switchState(props);
    })
    .catch(error => {
      functionCall.errorMessageLog("Invalid User, Please Try Again!");
      console.error("error:", error);
    });
}

export default LoginCheck;

/* 
currentUser => {
      functionCall.switchState(props.user);
    })
    .catch(error => {
      functionCall.errorMessage("Not a User");
    });
  chatManager.disconnect();
*/
