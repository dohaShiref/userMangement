import React,{useState} from "react"
import { MdBlockFlipped} from "react-icons/md";
import { AiFillLock} from "react-icons/ai";
import { FaPen} from "react-icons/fa";
import { GoListUnordered} from "react-icons/go";
import { AiTwotoneCalendar} from "react-icons/ai";

import './home.css'
export default function Table (){
    const [isActive, setIsActive] = useState(false);
   
    let changecolor=()=>{
         setIsActive(!isActive);
       
    }
    let usersData=[
        {name:"Hisham Haggag",userName:"hisham.haggag",email:"Hisham.Haggag@like.com",group:"Managers",userstatus:"",createdin:"Oct 20,2011"},
        {name:"Khaled Adam",userName:"khaled.adam",email:"khaled.adam@like.com",group:"Office",userstatus:"",createdin:"Dec 15,2021"},
    ]
    return (
<>

<div className="contTable" >
    <div className="firstrow">
    <input type="text" aria-label='Search' placeholder="search..." id="firstinput"/>
      <input type="text" placeholder="User Name"/>
     <select>
         <option selected disabled>Any</option>
         <option>item 1</option>
         <option>item 2</option>
         <option>item 3</option>
     </select>
    <div style={{display:"inline",border:"2px lightgray solid", height: "40px",margin:"1%"}} className="p-2">
     <span style={{fontWeight:"bold"}}>All time</span>
     <AiTwotoneCalendar className="ms-4"/>
     </div>
      <span className="linkspan">AllFilters </span>
    </div>
    <div className="secondrow">
    <span>1 selected  | </span>
    <button className="links">
        <FaPen/>
    </button>
    <button className="links">
        <MdBlockFlipped/>
    </button>
    <button className="links">
        <AiFillLock/>
    </button>
    <button className="linksbtn">
        Assign to Profile
    </button>
    <button className="linksbtn ">
    Assign to Group
    </button>
    <button className="links">
        <GoListUnordered/>
    </button>
   <a href="#">Unselect all</a>
  
    </div>
<table className="table"  style={{boderColor:'lightgray'}}>
 
  <tbody>
      
      <tr className="theader" style={{backgroundColor:'rgba(249,250,252,255)'}}>
          <td><input className="checkk" type="checkbox" onClick={changecolor}/></td>
          <td>Name</td>
          <td>User Name</td>
          <td>Email Address</td>
          <td>Group</td>
          <td>Status</td>
          <td>Created on</td>
     </tr>
     {usersData &&
            usersData.map((user, index) => {
              return (
                <>
                  <tr className="trow"  style={{
    backgroundColor: isActive ? 'rgba(249,250,252,255)' : 'white',}}>
          <td><input className="checkk" type="checkbox" value={isActive} onClick={(event)=>changecolor(event)}/></td>
          <td>{user.name}</td>
          <td>{user.userName}</td>
          <td>{user.email}</td>
          <td>{user.group}</td>
          <td><select style={{border:'none'}}>
          <option>Active</option>
              <option>Inactive</option>
              <option>Locked</option>
              </select></td>
          <td> {user.createdin}</td>
      </tr>
                </>
              );
            })}

  </tbody>
</table>



</div>


</>
    )}