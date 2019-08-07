import React from "react";

function Menu(props) {
  return (
    <div className="Menu col-12">
      <div className="row">
        {props.links.map(link => {
          return (
            <div className="col-3" key={link.id}>
              <div className="row">
                <div className="col-12">
                  <img src={link.icon} alt={link.name} className="MenuIcon" />
                </div>
                <div className="col-12">{link.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
