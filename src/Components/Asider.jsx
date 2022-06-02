import React from "react"
import './asider.css'
import Dropmenu from "./Dropmenu.jsx"
export default function Asider (){
    return (
<>
<aside >
<img className="logoo" src="logoo.jpg" style={{marginTop:'1%'}}/>
<input type="text" placeholder="Quick access" className="inputAside" 

 />

<p className="spanAside">
    <img src="dashboard.jpg" style={{width:'30px'}}/> Dashboard</p>
    <br></br>
    <p className="pAside">SETTINGS</p>
    <div className="container">
    
<Dropmenu title='ATM Settings'></Dropmenu>
<Dropmenu title='Bussiness Setup'></Dropmenu>
<Dropmenu title='User Management'></Dropmenu>

    </div>
    <br></br> <br></br>
    <p className="spanAside">
     Lisence Management </p>
   
</aside>
</>
    )
}