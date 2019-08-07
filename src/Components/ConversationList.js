import React from "react";

function ConversationList() {
  return (
    <div className="ConversationList col-12">
      <div className="d-flex justify-content-between">
        <div>
          <b>Edit</b>
        </div>
        <div>
          <b>New</b>
        </div>
      </div>
      <h1>Conversations</h1>
      {/* Component To Render */}
      <div class="row">
        <div className="ConversationListIcon col-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/1024px-Circle-icons-camera.svg.png"
            alt="icon"
          />
        </div>
        <div className="ConversationListInfo col-10">
          <div className="row">
            <div className="col-8">
              <b>Productivity</b>
            </div>
            <div className="col-4">
              <span>12:24pm</span>
            </div>
            <div className="col-12">
              <p>We need to be extra productive this week!!</p>
            </div>
          </div>
        </div>
      </div>
      {/* End of Component To Render */}
    </div>
  );
}

export default ConversationList;
