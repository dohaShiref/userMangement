import React,{useState} from "react"
import './asider.css'
export default function Dropmenu (props){
    const [isActive, setIsActive] = useState(false);
    let changeBackGround=()=>{
        setIsActive(!isActive);
    };
    return (
<div className="btn-group" >
  {/* <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="true"
  style={{
    backgroundColor: isActive ? 'green' : 'rgba(5,14,45,255)',
    color: isActive ? 'white' : 'rgb(128, 125, 125)',
    width:'90%',
    textAlign:'left',
    marginTop:'1%'
  }}
  onClick={changeBackGround}
>
{   props.title}
  </button> */}
  {/* <ul className="dropdown-menu dropdown-menu-end ">
    <li><button className="dropdown-item" type="button">Action</button></li>
    <li><button className="dropdown-item" type="button">Another action</button></li>
    <li><button className="dropdown-item" type="button">Something else here</button></li>
  </ul> */}
  <select class="form-select" aria-label="Default select example"
  //  style={{backgroundColor:'rgba(5,14,45,255)',border:'none',color:'rgb(122, 120, 120)'}}
  style={{
    backgroundColor: isActive ? 'green' : 'rgba(5,14,45,255)',
    color: isActive ? 'white' : 'rgb(128, 125, 125)',
    width:'100%',
    textAlign:'left',
    marginTop:'1%',
    border:'none'
  }}
  onClick={changeBackGround}
   
   >
  <option selected disabled className="options"
    style={{
      backgroundColor: isActive ? 'rgba(5,14,45,255)' : '',
      color: isActive ? 'green' : 'white',
     
    }}
    onClick={changeBackGround}
     
   
  >{props.title}</option>
  <option value="1" className="options"
   style={{
    backgroundColor: isActive ? 'rgba(5,14,45,255)' : '',
    color: isActive ? 'green' : 'white',
   
  }}
  onClick={changeBackGround}
  >Users</option>
  <option value="2" className="options"
   style={{
    backgroundColor: isActive ? 'rgba(5,14,45,255)' : '',
    color: isActive ? 'green' : 'white',
   
  }}
  
  >Profile</option>
  <option value="3" className="options"
   style={{
    backgroundColor: isActive ? 'rgba(5,14,45,255)' : '',
    color: isActive ? 'green' : 'white',
   
  }}
  onClick={changeBackGround}
  >Groups</option>
</select>
</div>
    )}

