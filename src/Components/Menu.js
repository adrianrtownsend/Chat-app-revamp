import React from "react";

function Menu(props) {
  return (
    <div className="Menu d-flex justify-content-around align-items-center">
      <div key={props.links[0].index}>
        <button onClick={() => props.menuChange("Conversations")}>
          <img
            src={props.links[0].icon}
            alt={props.links[0].name}
            className="MenuIcon"
          />
        </button>
      </div>
      <div key={props.links[1].id}>
        <button onClick={() => props.menuChange("New")}>
          <img
            src={props.links[1].icon}
            alt={props.links[1].name}
            className="MenuIcon"
          />
        </button>
      </div>
      <div key={props.links[2].id}>
        <button onClick={() => props.menuChange("Account")}>
          <img
            src={props.links[2].icon}
            alt={props.links[2].name}
            className="MenuIcon"
          />
        </button>
      </div>
    </div>
  );
}

export default Menu;
