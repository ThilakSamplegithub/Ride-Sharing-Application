import React,{useState, useEffect}  from 'react';
import {
 
  Box,

  Container,
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  
} from '@chakra-ui/react';

import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';

import MapComponent from './MapComponent';

function RiderInfo() {
    
 
    const [passengers, setPassengers] = useState([]);
    // const [selectedPassenger, setSelectedPassenger] = useState(null);
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // // useEffect(() => {
     
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch('https://sparkriders-backend.onrender.com/rider');
    //       if (response.ok) {
    //         const data = await response.json();
    //         setPassengers(data);
    //       } else {
    //         console.error('Failed to fetch data');
    //       }
    //     } catch (error) {
    //       console.error('An error occurred while fetching data:', error);
    //     }
    //   };
  
    //   fetchData();
    // }, []);
    useEffect(() => {
      
      const dummyApiResponse = [
        {
            id: 1,
            name: 'Masai Singh',
            contact: '9090909090',
            Carnumber:"Tl 1 420",
            pickupLocation: 'railway station, Hyderabad',
            destination: 'bus stand, hyderabad',
            price:"₹340.33"
          },
         
       
      ];
      setPassengers(dummyApiResponse);
    }, []);
   
    
     
 

  return (
    
    <div>
      
<Container style={{left:"90px", top:"200px", position:"absolute", zIndex:"1", borderRadius:'10px', width:"1200px"}}>
      <Box style={{border:"2px solid black",borderRadius:"10px", width:"1200px", height:"100%"}}>
        

      <Table  style={{width:"100%"}}>
            <Thead>
              <Tr>
                
                <Th>Name</Th>
                <Th>Contact No</Th>
                <Th>Car Number</Th>
                <Th>Pickup Location</Th>
                <Th>Destination</Th>
                <Th>Price</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody >
              {passengers.map((passenger, index) => (
                <Tr key={passenger.id}>
                  
                  <Td>{passenger.name}</Td>
                  <Td>{passenger.contact}</Td>
                  <Td>{passenger.Carnumber}</Td>
                  <Td>{passenger.pickupLocation}</Td>
                  <Td>{passenger.destination}</Td>
                  <Td>{passenger.price}</Td>
                  <Td>
                    <Button style={{border:"none", borderRadius:"3px", backgroundColor:"greenyellow", height:"20px"}} size="sm" >
                      Track
                    </Button>
                    <Button style={{border:"none", borderRadius:"3px", backgroundColor:"green", height:"20px"}} size="sm" ml={4}>
                      Call
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
         
          
       
         
      </Box>
    </Container>
    <MapComponent/>
    </div>
    
  );
}

export default RiderInfo;