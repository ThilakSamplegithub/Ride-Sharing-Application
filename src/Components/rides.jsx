import React, {useState} from 'react';
import {
 
  Box,

  Button,

  Container,
 
  
} from '@chakra-ui/react';

import {ChevronRightIcon} from "@chakra-ui/icons"
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';
import { Link } from 'react-router-dom';

function Rides() {
  
  const [selectedRide, setSelectedRide] = useState(null);
  const handleRideClick = (ride) => {
    setSelectedRide(ride);
  };

  return (
    
    
      
<Container style={{border:"2px solid black",marginLeft:"500px", marginTop:"60px", position:"absolute", backgroundColor:"white", zIndex:"1", borderRadius:'10px',width:"350px",}}>
      <Box style={{borderRadius:"10px",backgroundColor:"white",  padding:"10px"}}>

         <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly", width:"100%", border:'1px solid black',marginTop:"30px", borderRadius:"7px"}} >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCc4qgoFWCK7P82y-BRy8zM7jlYS4kb93QUGeOXYd3CMn8m0cLHXuX1y4XfIhrnzBN9ZA&usqp=CAU" alt="carImg" style={{width:"20%"}} />
          <div style={{display:"flex", flexDirection:"column"}}>
            <h3 style={{margin:"0px",fontWeight:"bold"}}>sedan </h3>
            <h5 style={{margin:"0px"}}>16km</h5>
            <h6 style={{margin:"0px"}}>on door</h6>
          </div>
          <h3>₹340.33</h3>
          <ChevronRightIcon/>
         </div>


         <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly", width:"100%", border: selectedRide === 1 ? '2px solid green' : '1px solid black',marginTop:"10px", borderRadius:"7px"}} onClick={() => handleRideClick(1)}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcxjKPn854Iv3KurVC6DtrllGh6ke9yzcn6W50gEZqNHL8mxl8azXLAOwNIvRavFJL0Ok&usqp=CAU" alt="carImg" style={{width:"20%"}} />
          <div style={{display:"flex", flexDirection:"column"}}>
            <h3 style={{margin:"0px",fontWeight:"bold"}}>hatchback</h3>
            <h5 style={{margin:"0px"}}>16km</h5>
            <h6 style={{margin:"0px"}}>on door</h6>
          </div>
          <h3>₹385.9</h3>
          <ChevronRightIcon/>
         </div>

         <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly", width:"100%", border:'1px solid black',marginTop:"10px", borderRadius:"7px"}} >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu0JXAjIoYXboochLapabTjvBexclmtUQNmaj3HnYbgzd31Hu85gzjkJJbxdQyc7Lz12I&usqp=CAU" alt="carImg" style={{width:"20%"}} />
          <div style={{display:"flex", flexDirection:"column"}}>
            <h3 style={{margin:"0px",fontWeight:"bold"}}>SUV</h3>
            <h5 style={{margin:"0px"}}>16km</h5>
            <h6 style={{margin:"0px"}}>on door</h6>
          </div>
          <h3>₹404.76</h3>
          <ChevronRightIcon/>
         </div>

        
           
          {/* <Link to="/riderInfo">
          <Button type="submit" mt={"30px"} mb={"10px"} style={{width:"100%", border:"none", borderRadius:"5px", height:"40px", backgroundColor:"black", color:"white", fontFamily:"sans-serif", fontWeight:"bold", fontSize:"15px", cursor:"pointer"}}>
            Confirm Ride 
          </Button>
          </Link> */}

<div onClick={() => {
          setTimeout(() => {
            // Redirect to the desired route
            window.location.href = '/riderInfo'; // Use window.location.href for redirection
          }, 3000); // Delay for 1000 milliseconds (1 second)
        }}>
         
            <Button type="submit" mt="30px" mb="10px" style={{ width: '100%', border: 'none', borderRadius: '5px', height: '40px', backgroundColor: 'black', color: 'white', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer' }}>
              Confirm Ride
            </Button>
         
        </div>
       
      </Box>
    </Container>
    
    
  );
}

export default Rides;