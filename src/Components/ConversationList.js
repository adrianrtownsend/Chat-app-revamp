import React from "react";

class ConversationList extends React.Component {
  render() {
    if (this.props.room) {
      const rooms = this.props.rooms.map(room => (
        <div key={room.id}>
          <a onClick={() => this.props.subscribeToRoom(room.id)} href="#">
            <div className="row">
              <div className="col-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/1024px-Circle-icons-camera.svg.png"
                  alt={room.name}
                />
              </div>
              <div className="col-10">
                <h3>{room.name}</h3>
              </div>
            </div>
          </a>
          <hr />
        </div>
      ));

      return <div className="ConversationListItem">{rooms}</div>;
    } else {
      return <div>Fix the conversation part...</div>;
    }
  }
}

export default ConversationList;
