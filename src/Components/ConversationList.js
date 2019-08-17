import React from "react";

class ConversationList extends React.Component {
  render() {
    const rooms = this.props.rooms.map(room => (
      <div key={room.id}>
        <a
          onClick={() => this.props.subscribeToRoom(room.id, room.name)}
          href="#"
        >
          <div className="row">
            <div className="ConversationIcon col-2">
              <div className=" d-flex flex-wrap justify-content-center align-items-center">
                <span>{room.name.charAt(0)}</span>
              </div>
            </div>
            <div className="col-10 ConversationLink d-flex flex-wrap align-items-center">
              <h3>{room.name}</h3>
            </div>
          </div>
        </a>
        <hr />
      </div>
    ));

    return <div className="ConversationListItem">{rooms}</div>;
  }
}

export default ConversationList;
