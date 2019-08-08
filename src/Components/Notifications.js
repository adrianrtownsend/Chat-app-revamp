import React from "react";

function Notifications() {
  return (
    <div className="Notifications">
      <div className="row">
        <div className="col-10">
          <h1>Notifications</h1>
        </div>
        <div className="col-2">[Edit]</div>
        {/* Component To Render */}
        <div className="row">
          <div className="ConversationIcon col-2">
            <img src="" alt="icon" />
          </div>
          <div className="ConversationInfo col-10">
            <div className="row">
              <div className="col-8">
                <b>[Username]</b>
              </div>
              <div className="col-4">
                <span>[Time]</span>
              </div>
              <div className="col-12">
                <p>[Notification]</p>
              </div>
            </div>
          </div>
        </div>
        {/* End of Component To Render */}
      </div>
    </div>
  );
}

export default Notifications;
