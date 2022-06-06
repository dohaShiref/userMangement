import React,{createContext,useState} from "react";
export let UserContext=createContext();
export default function DataContext(props){
    
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let [usersData,setUserData]=useState([
        {name:"Hisham Haggag",userName:"hisham.haggag",email:"Hisham.Haggag@like.com",group:"Managers",userstatus:"",createdin:"Oct 20,2011"},
        {name:"Khaled Adam",userName:"khaled.adam",email:"khaled.adam@like.com",group:"Office",userstatus:"",createdin:"Dec 15,2021"},
    ])
    const addUser = (newuser) => {
        // setUserData(dta)
        // setUserData(usersData => [...usersData, {name:newuser.name,userName:newuser.userName,email:newuser.email,group:newuser.group,
        //     userstatus:newuser.userstatus,createdin:newuser.createdin}]);
    };
 
    return(
        <UserContext.Provider value={{usersData,handleShow,handleClose,show,addUser}}>
            {props.children}
        </UserContext.Provider>
    );
}