import React from "react";

function Menu(props) {
  return (
    <div className="Menu col-12">
      <div className="row">
        {props.links.map(link => {
          return (
            <div className="col-3" key={link.id}>
              {link.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
