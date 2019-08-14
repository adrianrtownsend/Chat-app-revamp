import React from "react";

function Account(props) {
  return (
    <div className="Account col-12 pt-3">
      <div className="d-flex justify-content-between">
        <div>
          <b>Edit</b>
        </div>
        <div>
          <b>New</b>
        </div>
      </div>
      <h1>Account Settings</h1>
      <div className="row my-3">
        <div className="AccountIcon col-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Circle-icons-camera.svg/1024px-Circle-icons-camera.svg.png"
            alt="icon"
          />
        </div>
        <div className="col-10">
          <h3>{props.activeUser}</h3>
          <h5>{props.activeUsername}</h5>
        </div>
      </div>
      <div className="col-12 AccountSettings">
        <ul>
          <li>
            [Change Name/Username]
            <hr />
          </li>
          <li>
            [Change Password]
            <hr />
          </li>
          <li>
            [Friends List]
            <hr />
          </li>
          <li>
            [Privacy Settings]
            <hr />
          </li>
          <li className="SignOut">
            <button onClick={() => props.signOut("out")}>Sign Out</button>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Account;
