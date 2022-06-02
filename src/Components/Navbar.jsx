import React from "react"
 import Moment from 'moment';
 import { BsList} from "react-icons/bs";
 import { MdNotifications} from "react-icons/md";
 import { AiOutlineQuestionCircle} from "react-icons/ai";
 

export default function Navbar (){
    const currentDate = new Date();
    const formatDate = Moment().format("MMM DD,YYYY");
    const day=Moment().format("ddd");
    const time=Moment().format("hh:mmA");

  // const datee = `${currentDate.getDate()}-${currentDate.getMonth()+1} - ${currentDate.getFullYear()}`;

    return (
<>
<nav className="navbar navbar-expand-lg bg-light" style={{height:'40px'}}>
  <div className="container-fluid" style={{display:'flex',justifyContent:'space-between'}}>

  <div class="btn-group dropstart">
  <button type="button" class="btn bg-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    
<BsList/>
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
    <li><a class="dropdown-item" href="#">Menu item</a></li>
  </ul>
</div>
   
    <div className="collapse navbar-collapse" id="navbarScroll">
    
         <span style={{color:'black'}}>Good morning!</span>
      
         <span style={{color:'grey',marginLeft:'2%'}}>    { day  }    </span>
        <span style={{color:'grey',marginLeft:'2%'}}>    { formatDate  }    </span>
        <span style={{color:'grey',marginLeft:'2%'}}>    { time  }    </span>

        
      
     
    </div>
    
    <div className="navbar-collapse" style={{marginLeft:'50%'}} >
    
         <AiOutlineQuestionCircle/>
         <MdNotifications style={{marginLeft:'3%',size:40}}/>
       
        <span style={{color:'black',marginLeft:'2%'}}>| Nader Amer   NA</span>
      
        
      
     
    </div>
  </div>
</nav>


</>
    )}