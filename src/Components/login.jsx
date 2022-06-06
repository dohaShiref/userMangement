import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
import { IconContext } from "react-icons";
import { UserContext } from "./DataContext";

export function Login() {
  let [fullName, setFullName] = useState("");
  let [userName, setUserName] = useState("");
  let [groupNo, setgroupNo] = useState("");
  let [email, setEmail] = useState("");
  let [profileNo, setprofileNo] = useState("");
  let errors = {};
  let [error, setEror] = useState({
    fullName: null,
    userName: null,
    groupNo: null,
    email: null,
    profileNo: null,
    message: null,
  });
  let [values,setvalues]=useState(
    {name:null,userName:null,email:null,group:null,userstatus:"",createdin:""}
  )
  let submitHandler = (e) => {
    e.preventDefault();

    if (Validate()) {
     setvalues({name: fullName,userName: userName,email: email,group: groupNo,userstatus: profileNo,createdin:"Oct 20,2011" });
    }
  };

  let Validate = () => {
    let regularrstr = /^[a-zA-Z]{3,15}$/;
    let regularrage = /^[0-9]$/;
    let regularmail =
      /^([a-zA-Z0-9_]{3,15})@([a-zA-Z0-9]{2,10})\.([a-z]{2,7})$/;

    if (!fullName.match(regularrstr)) {
      errors.fullName = "full name lenght must string";
    }
    if (!userName.match(regularrstr)) {
      errors.userName = "username lenght must be >3 and string";
    }
    if (!email.match(regularmail)) {
      errors.email = "Enter valid email";
    }
    if (!groupNo.match("Choose User Group")) {
      errors.groupNo = "please choose your group";
    }
    if (!profileNo.match(regularrage)) {
      errors.profileNo = "profileNo must be digit";
    } else {
      errors.message = "Submit Successed";
    }
    setEror(errors);

    return Object.keys(errors).length != 0 ? false : true;
  };
  let getfullNameValue = (e) => {
    setFullName(e.target.value);
  };
  let getUserNameValue = (e) => {
    setUserName(e.target.value);
  };
  let getUsergroupNoValue = (e) => {
    setgroupNo(e.target.value);
  };
  let getUserEmailValue = (e) => {
    setEmail(e.target.value);
  };
  let getUserprofileNoValue = (e) => {
    setprofileNo(e.target.value);
  };
  return (
    <UserContext.Consumer>
      {(value) => {
        return (
          <div className="bg-light my-3" style={{ width: "100%" }}>
            <div
              className="clearfix w-100 p-3 "
              style={{
                backgroundColor: "rgba(5,14,45,255)",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span
                className="float-left"
                style={{
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "left",
                }}
              >
                Add New User
              </span>
              <AiOutlineClose style={{ color: "white", marginLeft: "60%" }} />
            </div>

            <Form className="w-100 p-3" onSubmit={submitHandler}>
              <Form.Group controlId="formBasicName">
                <p style={{ fontWeight: "bold" }}>Full Name</p>
                <Form.Control
                  type="text"
                  placeholder="Enter full Name"
                  value={fullName}
                  onChange={(event) => getfullNameValue(event)}
                />
                <Form.Text className="text-danger">{error.fullName}</Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicName">
                <p style={{ fontWeight: "bold" }}>User Name</p>
                <Form.Control
                  type="text"
                  placeholder=" Enter username"
                  value={userName}
                  onChange={(event) => getUserNameValue(event)}
                />
                <Form.Text className="text-danger">{error.userName}</Form.Text>
              </Form.Group>
              <Form.Group>
                <p style={{ fontWeight: "bold" }}>Email Address</p>
                <Form.Control
                  type="email"
                  placeholder="Enter user email address"
                  value={email}
                  onChange={(event) => getUserEmailValue(event)}
                />
                <Form.Text className="text-danger">{error.email}</Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicgroupNo">
                <p style={{ fontWeight: "bold" }}>User Group</p>
                <Form.Select
                  type="text"
                  value={groupNo}
                  onChange={(event) => getUsergroupNoValue(event)}
                >
                  <option value="Choose User Group">Choose User Group</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </Form.Select>

                <Form.Text className="text-danger">{error.groupNo}</Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicprofileNo">
                <p style={{ fontWeight: "bold" }}>Assign Profile</p>
                <Form.Select
                  type="text"
                  value={profileNo}
                  onChange={(event) => getUserprofileNoValue(event)}
                >
                  <option>Choose profile</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Form.Select>
                <Form.Text className="text-danger">{error.profileNo}</Form.Text>
                <Form.Text className="text-success">{error.message}</Form.Text>
              </Form.Group>

              <hr style={{ color: "gray", height: 2 }} />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>
                  <u>Reset fields</u>
                </p>
                <div>
                  <Button
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      background: "white",
                      borderColor: "lightgray",
                    }}
                    className="m-2"
                    onClick={value.handleClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    style={{
                      color: "white",
                      background: "rgb(2, 177, 95)",
                      borderColor: "lightgray",
                    }}
                    className="float-right m-2"
                    variant="primary"
                    type="submit"
                    
                  >
                    Add User
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
}
