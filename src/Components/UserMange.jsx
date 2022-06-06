import React from "react";
import { UserContext } from "./DataContext";

export function UserMange() {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <>
            <div className="container homepage">
              <span className="title">User Management</span>
              <button className="btnn" onClick={value.handleShow}>
                + Add New User
              </button>
            </div>
          </>
        );
      }}
    </UserContext.Consumer>
  );
}
