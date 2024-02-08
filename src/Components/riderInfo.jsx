import React, { useState, useEffect } from "react";
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
  background,
} from "@chakra-ui/react";
import styles from "../Styles/riderInfo.module.css";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import MapComponent from "./MapComponent";
import { defaultRequest, getNearByDrivers } from "../Redux/Passenger/actions";
import {
  PASSENGER_DROPPED,
  PASSENGER_FAILURE,
  PASSENGER_NEARBY_DRIVERS,
} from "../Redux/Passenger/actionTypes";
import { useNavigate } from "react-router-dom";
import List_of_Drivers from "./List_of_Drivers";

function RiderInfo() {
  const { isStatus, driver } = useSelector((state) => state.passenger_reducer);
  const [action, setAction] = useState(false);
  const dispatch = useDispatch();
  const { passengerId, token } = useSelector(
    (state) => state.passenger_reducer
  );
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getNearByDrivers(passengerId, token))
      .then((res) => {
        dispatch({
          type: PASSENGER_NEARBY_DRIVERS,
          payload: res.nearBydrivers,
          payload2: res.passenger,
        });
      })
      .catch((err) => dispatch({ type: PASSENGER_FAILURE }));
    console.log(isStatus, "is status");
    if (isStatus) {
      console.log("entered to default", isStatus);
      const timeoutId = setTimeout(() => {
        dispatch(defaultRequest())
          .then((res) => {
            dispatch({ type: PASSENGER_DROPPED });
            navigate("/passenger");
          })
          .catch((err) => dispatch({ type: PASSENGER_FAILURE }));
      }, 3000);
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isStatus]);
  console.log(driver, "right now what is array");
  return (
    <div>
      <div
        style={{
          transform: "translate(0%,10%)",
          display: "flex",
          justifyContent: "space-evenly",
          // alignItems:"center",
          zIndex: "1",
          borderRadius: "10px",
          // width: "1200px",
          // border:'4px solid green'
        }}
      >
        <div className={styles.tableContainer}>
          {isStatus ? (
            <table border={1} target="_blank">
              <caption>List of Drivers nearby location</caption>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Contact No</th>
                  <th>Car Model</th>
                  <th>Pickup Location</th>
                  <th>Email</th>
                  <th>Price</th>
                  <th>Actions</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {driver?.map(
                  (
                    { _id, name, location, carModel, phoneNumber, email },
                    i
                  ) => (
                    <tr key={i}>
                      <td data-cell="name">{name}</td>
                      <td data-cell="phoneNumber">{phoneNumber}</td>
                      <td data-cell="carModel">{carModel}</td>
                      <td data-cell="location">{location}</td>
                      <td data-cell="email">{email}</td>
                      <td data-cell="price">300</td>
                      <td data-cell="action">
                        <Button
                          style={{
                            border: "none",
                            borderRadius: "3px",
                            backgroundColor: "greenyellow",
                            height: "20px",
                          }}
                          size="sm"
                        >
                          confirmed
                        </Button>
                      </td>
                      <td>A driver is on the way to pick you up</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          ) : (
            <table border={1} target="_blank">
              <caption>List of Drivers nearby location</caption>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Contact No</th>
                  <th>Car Model</th>
                  <th>Pickup Location</th>
                  <th>Email</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {driver?.map(
                  (
                    { _id, name, location, carModel, phoneNumber, email },
                    i
                  ) => (
                    <List_of_Drivers
                      key={i}
                      name={name}
                      location={location}
                      carModel={carModel}
                      phoneNumber={phoneNumber}
                      email={email}
                    />
                    // <tr
                    //   key={i}
                    // >
                    //   <td data-cell='name'>{name}</td>
                    //   <td data-cell='phoneNumber'>{phoneNumber}</td>
                    //   <td data-cell='carModel'>{carModel}</td>
                    //   <td data-cell='location'>{location}</td>
                    //   <td data-cell='email'>{email}</td>
                    //   <td data-cell='price'>300</td>
                    //   <td data-cell='action'><Button
                    //     style={{
                    //       border: "none",
                    //       borderRadius: "3px",
                    //       backgroundColor: "greenyellow",
                    //       height: "20px",
                    //     }}
                    //     size="sm"
                    //     onClick={() =>{setAction('confirmed');setTimeout(()=>navigate("/driverLogin"),2000)}}
                    //   >
                    //     confirm
                    //   </Button></td>
                    // </tr>
                  )
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
      <MapComponent />
    </div>
  );
}

export default RiderInfo;
