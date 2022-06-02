import React, { useState } from "react";
import './home.css'
import Table from "./Table"
import Asider from "./Asider"
import Navbar from "./Navbar"
import { Modal,Button } from "react-bootstrap"
import { Login } from "./login";
export default function Home (){
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
<>

<Asider></Asider>
    
<Navbar></Navbar>
<div className="container homepage">
<span className="title">User Management</span>
<button className="btnn" onClick={handleShow}>+ Add New User</button>

</div>


<Table></Table>

<Modal show={show} onHide={handleClose}>
        <Modal.Body><Login/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
</>)}