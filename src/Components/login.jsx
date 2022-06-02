import React, { useState } from "react";
import { Form,Button } from "react-bootstrap";
import {AiOutlineClose} from "react-icons/ai"
import {IconContext} from "react-icons"

export function Login(){
    let [fullName,setFullName]=useState("");
    let [userName,setUserName]=useState("");
    let [password,setPassword]=useState("");
    let [email,setEmail]=useState("");
    let [phone,setPhone]=useState("");
    let errors={};
    let [error,setEror]=useState({fullName:null,userName:null,password:null,email:null,phone:null,message:null});
    let submitHandler=(e)=>{
        e.preventDefault();

        if(Validate()){
            let values ={fullName,userName,password,email,phone}
        }
        
       
    }
    
    let Validate=()=>{
      let regularrstr = /^[a-zA-Z]{3,15}$/;
      let regularrage = /^[0-9]{11}$/;
      let regularmail=/^([a-zA-Z0-9_]{3,15})@([a-zA-Z0-9]{2,10})\.([a-z]{2,7})$/
        
      if(!(fullName.match(regularrstr))){
        errors.fullName="full name lenght must string";
    }
        if(!(userName.match(regularrstr))){
            errors.userName="username lenght must be >3 and string";
        }
        if(!(email.match(regularmail))){
          errors.email="Enter valid email";
      }
        if(!(password.match("Choose User Group"))){
          errors.password="password lenght must be 4 digit";
      }
      if(!(phone.match(regularrage))){
        errors.phone="phone lenght must be 11 digit";
    }
    else{
      errors.message="Submit Successed"
    }
        setEror(errors);

        return Object.keys(errors).length!=0?false:true
    }
    let getfullNameValue=(e)=>{
      setFullName(e.target.value)
  }
    let getUserNameValue=(e)=>{
        setUserName(e.target.value)
    }
    let getUserpasswordValue=(e)=>{
      setPassword(e.target.value)
  }
  let getUserEmailValue=(e)=>{
    setEmail(e.target.value)
}
let getUserPhoneValue=(e)=>{
  setPhone(e.target.value)
}
    return(
    <div className="bg-light my-3" style={{width:'100%'}}>

      <div className="clearfix w-100 p-3 " style={{backgroundColor:'rgba(5,14,45,255)',display:'flex',justifyContent:'space-between'}}>
      <span className="float-left" style={{color:'white',fontSize:18,fontWeight:'bold',textAlign:'left'}}>Add New User</span>
         <AiOutlineClose style={{color:"white",marginLeft:"60%"}} />
        
      </div>
   
        <Form className="w-100 p-3" onSubmit={submitHandler}>
        <Form.Group controlId="formBasicName">
    <p style={{fontWeight:'bold'}}>Full Name</p>
    <Form.Control type="text" placeholder="Enter full Name" 
    value={fullName}
    onChange={(event)=>getfullNameValue(event)}
    />
    <Form.Text className="text-danger">{error.fullName}</Form.Text>
  </Form.Group>
    <Form.Group controlId="formBasicName">
    <p style={{fontWeight:'bold'}}>User Name</p>
    <Form.Control type="text" placeholder=" Enter username" 
    value={userName}
    onChange={(event)=>getUserNameValue(event)}
    />
    <Form.Text className="text-danger">{error.userName}</Form.Text>
  </Form.Group>
  <Form.Group>
    <p style={{fontWeight:'bold'}}>Email Address</p>
    <Form.Control type="email" placeholder="Enter user email address" 
   value={email}
   onChange={(event)=>getUserEmailValue(event)}
   />
   <Form.Text className="text-danger">{error.email}</Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <p style={{fontWeight:'bold'}}>User Group</p>
    <Form.Select type="text"
    value={password}
    onChange={(event)=>getUserpasswordValue(event)}
    >
      <option value="Choose User Group">Choose User Group</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </Form.Select>
    
    <Form.Text className="text-danger">{error.password}</Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicPhone">
    <p style={{fontWeight:'bold'}}>Assign Profile</p>
    <Form.Select type="text" 
   value={phone}
   onChange={(event)=>getUserPhoneValue(event)}
   >
      <option>Choose profile</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
     </Form.Select>
   <Form.Text className="text-danger">{error.phone}</Form.Text>
   <Form.Text className="text-success">{error.message}</Form.Text>
  </Form.Group>
  
  <hr style={{ color: 'gray', height: 2 }}/>
  <div style={{display:'flex',justifyContent:'space-between'}}>
  <p><u>Reset fields</u></p>
  <div>
  <Button style={{color:'black',fontWeight:'bold',background:'white',borderColor:'lightgray'}} className="m-2">
    Cancel
  </Button>
  <Button style={{color:'white',background:'rgb(2, 177, 95)',borderColor:'lightgray'}} className="float-right m-2" variant="primary" type="submit">
    Add User
  </Button>
  </div>
  </div>
</Form>
</div>
    )
}




