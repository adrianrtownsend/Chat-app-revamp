import React from "react";

function Menu(props) {
  return (
    <div className="Menu d-flex justify-content-around align-items-center">
      {props.links.map(link => {
        return (
          <div key={link.id}>
            <button>
              <img src={link.icon} alt={link.name} className="MenuIcon" />
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
