import React from "react";

function Information(props) {
  return (
    <div className="container">
      <div className="row py-3">
        <div className="col-12">
          <h1>
            <b>Information</b>
          </h1>
        </div>
        <div className="col-12">
          <p>
            Full project code can be found at{" "}
            <a
              href="https://codesandbox.io/embed/chat-app-red-3spjf"
              target="_blank"
            >
              https://codesandbox.io/embed/chat-app-red-3spjf
            </a>
          </p>
        </div>
        <div>
          <h2>
            <b>Summary</b>
          </h2>
          <p>
            This is a functioning ReactJs groupchat web application user the
            Pusher Chatkit API. This app's design is formatted for mobile
            devices. Three test users have been created all with equal
            permissions and access to the same features below. *Currently the
            'Delete Conversation' feature does not work due to permissions
            needing to be set through backend Nodejs coding. And only the
            client-side application was coded.
          </p>
          <p>
            Thank you for taking the time to check this out! More features will
            be added to it. I also appreciate and criticism or suggestions on
            moving forward. I can be reached at <b>atownsend013@yahoo.com</b>
          </p>
          <h2>
            <b>Features</b>
          </h2>
          <ul className="InformationList">
            <li>
              Login as any user and send realtime messages received in each
              conversation.
            </li>
            <li>Create new conversations</li>
            <li>"[This user] is typing..." notifications per chat</li>
            <li>Add/Remove Members from each conversation you are apart of</li>
            <li>
              *Room Member lists display all members except for current logged
              in Member*
            </li>
          </ul>
          <h2>In Progress Features</h2>
          <ul className="InformationList">
            <li>
              Live updates of last new message received and formatted timestamp
              per conversation
            </li>
            <li>Autoscroll on new message in each conversation</li>
            <li>"Message Read" notifications</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Information;
