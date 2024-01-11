import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import ConfirmTable from "../Components/ConfirmTable";
const DriverPage = () => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const [passengers,setPassengers]=useState([])
  // const dispatch=useDispatch
  
  useEffect(() => {
    fetch(`${baseURL}driver/locations/${localStorage.getItem("driverId")}`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("driver_token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.passengers);
        setPassengers(res.passengers)
      })
      .catch((err) => console.log(err.message, "is error"));
  }, []);
  return <div>
    <TableContainer>
  <Table variant='simple'>
    <TableCaption>Requests for Ride</TableCaption>
    <Thead>
      <Tr>
        <Th>S.No</Th>
        <Th>Passenger name</Th>
        <Th>phoneNumber</Th>
        <Th>confirmation</Th>
      </Tr>
    </Thead>
    <Tbody>
      {passengers?.filter(el=>el.request===true)?.map((el,i)=>(
        <ConfirmTable key={i} i={i} {...el} />
    //      <Tr key={i}>
    //     <Td>{i+1}</Td>
    //     <Td>{name}</Td>
    //     <Td>{phoneNumber}</Td>
    //     <Td onClick={()=>toggleColor(i)}>{isChecked?<svg
    //   width="24"
    //   height="24"
    //   viewBox="0 0 24 24"
    //   fill='green'
    //   stroke="currentColor"
    //   strokeWidth="2"
    //   strokeLinecap="round"
    //   strokeLinejoin="round"
    // >
    //   <polyline points="20 6 9 17 4 12" />
    // </svg>:'confirm'}</Td>
    //   </Tr>
      ))}  
      {/* <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr> */}
    </Tbody>
  </Table>
</TableContainer>
  </div>;
};

export default DriverPage;
