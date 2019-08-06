import React from "react";

function Conversations() {
  return (
    <div className="Conversations">
      <h1>Conversations</h1>
      <div class="row">
        <div className="ConversationIcon col-2">
          <img src="" alt="icon" />
        </div>
        {/* Component To Render */}
        <div className="ConversationInfo col-10">
          <div className="row">
            <div className="col-8">
              <b>[Conversation Name]</b>
            </div>
            <div className="col-4">
              <span>[Time]</span>
            </div>
            <div className="col-12">
              <p>[Conversation Message]</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Conversations;
