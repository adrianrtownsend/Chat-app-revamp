import React from "react";

function Conversations() {
  return (
    <div className="Conversations">
      <h1>Conversations</h1>
      <ul>
        <li>
          <div className="ConversationIcon">
            <img src="" alt="icon" />
          </div>
          <div className="ConversationInfo">
            <h3>[Conversation Name]</h3>
            <p>[Conversation Message]</p>
          </div>
          <div className="ConversationData">
            <span>[Time]</span>
            <button>Open</button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Conversations;
