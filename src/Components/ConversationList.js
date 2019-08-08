import React from "react";

class ConversationList extends React.Component {
  render() {
    const rooms = this.props.rooms.map(room => (
      <div key={room.id}>
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
        <hr />
      </div>
    ));
    return <div className="ConversationListItem">{rooms}</div>;
  }
}

export default ConversationList;
