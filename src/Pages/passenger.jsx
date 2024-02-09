import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Heading,
  Center,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Flex,
  Select,
} from "@chakra-ui/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css";
import Map from "../Components/map";
import Rides from "../Components/rides";
import {
  PlusSquareIcon,
  CalendarIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import MapComponent from "../Components/MapComponent";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleRequest } from "../Redux/Passenger/actions";
import {
  PASSENGER_FAILURE,
  PASSENGER_RIDE_REQUEST,
} from "../Redux/Passenger/actionTypes";
function Passenger() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  // const [showRides, setShowRides] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [updateStatus, setUpdateStatus] = useState(null);
  const handleSubmit = (event) => {
    console.log("invoked request ride");
    event.preventDefault();
    let id;
    // setShowRides(true);
    console.log("Ride requested:", { pickup, destination, date });
    console.log(pickup, "inside to send as api");
    // Redirect to the desired route
    // window.location.href = "/riderInfo"; // Use window.location.href for redirection
    dispatch(handleRequest({ location: pickup }))
      .then((res) => {
        console.log(res, "updated location");
        dispatch({ type: PASSENGER_RIDE_REQUEST });
      })
      .then(() => {
        id = setTimeout(() => navigate("/riderInfo"), 1000);
      })
      .catch((err) => {
        console.log(err.message);
        dispatch({ type: PASSENGER_FAILURE });
      });
    // Delay for 1000 milliseconds (1 second)
  };
  return (
    <div>
      <MapComponent />
      {/* {showRides && <Rides pickup={pickup} />} */}
      <Container
        style={{
          // marginLeft: "70px",
          marginLeft: "9%",
          // marginTop: "60px",
          marginTop: "7%",
          position: "absolute",
          backgroundColor: "white",
          zIndex: "1",
          borderRadius: "10px",
          // width: "350px",
          width: "70%",
          border: "2px solid black",
        }}
      >
        <Box style={{ borderRadius: "10px", width: "100%", padding: "8%" }}>
          <Heading>Where can we pick you up?</Heading>
          <form onSubmit={handleSubmit}>
            <FormControl id="pickup" mt={"3%"}>
              <Select
                onChange={(e) => {
                  console.log(e.target.value);
                  setPickup(e.target.value);
                }}
                placeholder="Add a pickup location"
              >
                <option value="kondapur">Kondapur</option>
                <option value="srnagar">SRNagar</option>
                <option value="punjagutta">Punjagutta</option>
                <option value="jubilee hills">Jubilee hills</option>
                <option value="dilshukhnagar">Dilshukhnagar</option>
                <option value="andheri">Andheri</option>
                <option value="bandra">Bandra</option>
                <option value="colaba">Colaba</option>
                <option value="dadar">Dadar</option>
                <option value="worli">Worli</option>
              </Select>
            </FormControl>

            <FormControl id="destination" mt={"7%"}>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <PlusSquareIcon
                    style={{
                      color: "black",
                      fontSize: "7px",
                      border: "2px solid",
                      borderRadius: "1px",
                      marginLeft: "-20%",
                      marginTop: "-10px",
                    }}
                  />
                </InputLeftElement>
                <Input
                  type="pickup"
                  placeholder="Add a destination location"
                  style={{
                    // paddingLeft: "30px",
                    paddingLeft: "9%",
                    backgroundColor: "rgb(238,238,238)",
                    border: "none",
                    height: "30px",
                    // width: "100%",
                    borderRadius: "7px",
                    fontSize: "15px",
                  }}
                  onChange={(e) => {
                    console.log(e.target.value, "is destiny");
                    setDestination(e.target.value);
                  }}
                />
              </InputGroup>
            </FormControl>

            <Box className="date-picker-wrapper" mt={"10px"}>
              <DatePicker
                selected={date}
                onChange={(newDate) => setDate(newDate)}
                timeFormat="HH:mm"
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="d MMM"
                calendarClassName="custom-calendar"
                popperModifiers={{
                  preventOverflow: {
                    enabled: true,
                    escapeWithReference: false,
                    boundariesElement: "viewport",
                  },
                }}
                minDate={new Date()}
              />

              <input
                type="time"
                value={date.toISOString().substr(11, 5)} // Convert to HH:mm format
                onChange={(e) => {
                  const time = e.target.value;
                  const [hours, minutes] = time.split(":");
                  const newDate = new Date(date);
                  newDate.setHours(hours);
                  newDate.setMinutes(minutes);
                  setDate(newDate);
                }}
              />
            </Box>

            <Box
              style={{
                width: "100%",
                borderTop: "1px solid gray",
                marginTop: "14%",
              }}
            >
              <InputGroup style={{ display: "flex", marginTop: "0px" }}>
                <InputLeftElement>
                  <CalendarIcon style={{ color: "green" }} />
                </InputLeftElement>
                <InputRightElement>
                  <ChevronRightIcon />
                </InputRightElement>
              </InputGroup>
              <Button
                type="submit"
                mt={"10px"}
                style={{
                  width: "100%",
                  border: "none",
                  borderRadius: "5px",
                  height: "40px",
                  backgroundColor: "black",
                  color: "white",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                  fontSize: "15px",
                  cursor: "pointer",
                }}
                // onClick={handleUpdate}
              >
                Request Ride
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </div>
  );
}

export default Passenger;
