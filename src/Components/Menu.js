import React from "react";

function Menu(props) {
  return (
    <div className="Menu d-flex justify-content-around align-items-center">
      <div key={props.links[0].index}>
        <button
          onClick={() => {
            props.menuChange("Conversations");
            props.resetConversation();
          }}
        >
          <img
            src={
              props.activeComponent === "Conversations"
                ? props.links[0].iconActive
                : props.links[0].icon
            }
            alt={props.links[0].name}
            className="MenuIcon"
          />
        </button>
      </div>
      <div key={props.links[1].id}>
        <button onClick={() => props.menuChange("New")}>
          <img
            src={
              props.activeComponent === "New"
                ? props.links[1].iconActive
                : props.links[1].icon
            }
            alt={props.links[1].name}
            className="MenuIcon"
          />
        </button>
      </div>
      <div key={props.links[2].id}>
        <button onClick={() => props.menuChange("Account")}>
          <img
            src={
              props.activeComponent === "Account"
                ? props.links[2].iconActive
                : props.links[2].icon
            }
            alt={props.links[2].name}
            className="MenuIcon"
          />
        </button>
      </div>
    </div>
  );
}

export default Menu;
