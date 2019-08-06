import React from "react";

function ConversationList() {
  return (
    <div className="ConversationList">
      <div className="d-flex justify-content-between">
        <div>Edit</div>
        <div>New</div>
      </div>
      <h1>Conversations</h1>
      {/* Component To Render */}
      <div class="row">
        <div className="ConversationListIcon col-2">
          <img src="" alt="icon" />
        </div>
        <div className="ConversationListInfo col-10">
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
      {/* End of Component To Render */}
    </div>
  );
}

export default ConversationList;
