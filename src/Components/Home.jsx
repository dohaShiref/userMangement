import React, { useState } from "react";
import './home.css'
import Table from "./Table"
import Asider from "./Asider"
import Navbar from "./Navbar"
import {  UserMange} from "./UserMange";
import { InfoModal } from "./InfoModal";
import DataContext from './DataContext'

export default function Home (){
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
<>
<DataContext>
<Asider></Asider>
    
<Navbar></Navbar>
<UserMange></UserMange>

<Table></Table>
<InfoModal></InfoModal>
      </DataContext>
</>)}