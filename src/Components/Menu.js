import React from "react";

function Menu(props) {
  return (
    <div className="Menu">
      <ul>
        {props.links.map(link => {
          return <li key={link.id}>{link.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Menu;
