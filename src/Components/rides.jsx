import React from 'react';
import {
 
  Box,

  Button,

  Container,
 
  
} from '@chakra-ui/react';

import {ChevronRightIcon} from "@chakra-ui/icons"
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';


function Rides() {
  
  
  

  return (
    
    
      
<Container style={{border:"2px solid black",marginLeft:"500px", marginTop:"60px", position:"absolute", backgroundColor:"white", zIndex:"1", borderRadius:'10px',width:"350px",}}>
      <Box style={{borderRadius:"10px",backgroundColor:"white",  padding:"10px"}}>

         <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly", width:"100%", border:"1px solid black",marginTop:"30px", borderRadius:"7px"}}>
          <img src="" alt="carImg" />
          <div style={{display:"flex", flexDirection:"column"}}>
            <h3 style={{margin:"0px"}}>ride type</h3>
            <h5 style={{margin:"0px"}}>distance</h5>
            <h6 style={{margin:"0px"}}>features/speaciality</h6>
          </div>
          <h3>$price</h3>
          <ChevronRightIcon/>
         </div>


         <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly", width:"100%", border:"1px solid black", marginTop:"10px", borderRadius:"7px"}}>
          <img src="" alt="carImg" />
          <div style={{display:"flex", flexDirection:"column"}}>
            <h3 style={{margin:"0px"}}>ride type</h3>
            <h5 style={{margin:"0px"}}>distance</h5>
            <h6 style={{margin:"0px"}}>features/speaciality</h6>
          </div>
          <h3>$price</h3>
          <ChevronRightIcon/>
         </div>

         <div style={{display:"flex", alignItems:"center", justifyContent:"space-evenly", width:"100%", border:"1px solid black",marginTop:"10px", borderRadius:"7px"}}>
          <img src="" alt="carImg" />
          <div style={{display:"flex", flexDirection:"column"}}>
            <h3 style={{margin:"0px"}}>ride type</h3>
            <h5 style={{margin:"0px"}}>distance</h5>
            <h6 style={{margin:"0px"}}>features/speaciality</h6>
          </div>
          <h3>$price</h3>
          <ChevronRightIcon/>
         </div>

         <Button type="submit" mt={"30px"} mb={"10px"} style={{width:"100%", border:"none", borderRadius:"5px", height:"40px", backgroundColor:"black", color:"white", fontFamily:"sans-serif", fontWeight:"bold", fontSize:"15px", cursor:"pointer"}}>
            Confirm Ride 
          </Button>
      </Box>
    </Container>
    
    
  );
}

export default Rides;