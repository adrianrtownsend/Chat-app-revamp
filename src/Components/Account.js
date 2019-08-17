import React from "react";

function Account(props) {
  return (
    <div className="Account col-12 pt-5">
      <h1>
        <b>My Account</b>
      </h1>
      <div className="row my-3">
        <div className="AccountIcon col-2">
          <div className=" d-flex flex-wrap justify-content-center align-items-center">
            <span>{props.activeUser.charAt(0)}</span>
          </div>
        </div>
        <div className="col-10">
          <h3>
            <b>{props.activeUser}</b>
          </h3>
          <h5>{props.activeUsername}</h5>
        </div>
      </div>
      <div className="col-12 SignOut d-flex flex-wrap justify-content-center">
        <div>
          <button onClick={() => props.logout()}>Sign Out</button>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Account;
