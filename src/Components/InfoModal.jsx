import React from "react";
import { UserContext } from "./DataContext";
import { Modal,Button } from "react-bootstrap"
import { Login } from "./login";

export function InfoModal() {
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <>
            <Modal show={value.show} onHide={value.handleShow}>
        <Modal.Body><Login/></Modal.Body>
        <Modal.Footer>
          {/* <Button variant="primary" onClick={value.handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
          </>
        );
      }}
    </UserContext.Consumer>
  );
}
