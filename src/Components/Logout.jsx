import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Image,
  Button,
  Icon,
  Box,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { passengerLogout } from "../Redux/Passenger/actions";
import {
  PASSENGER_FAILURE,
  PASSENGER_LOGOUT,
} from "../Redux/Passenger/actionTypes";
import { driverLogout } from "../Redux/Rider/actions";
import { DRIVER_FAILURE, DRIVER_LOGOUT } from "../Redux/Rider/actionTypes";
const Logout = () => {
  const dispatch = useDispatch();
  function handleLogout() {
    console.log("invoke me for passenger logout");
    dispatch(passengerLogout())
      .then((res) => {
        console.log(res);
        dispatch({ type: PASSENGER_LOGOUT });
      })
      .catch((res) => dispatch({ type: PASSENGER_FAILURE }));
  }
  function handleDriverLogout() {
    dispatch(driverLogout())
      .then((res) => {
        console.log(res, "is drivers logout");
        dispatch({ type: DRIVER_LOGOUT });
      })
      .catch((err) => dispatch({ type: DRIVER_FAILURE }));
  }
  return (
    <Menu fontSize={"sm"}>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Logout
      </MenuButton>
      <MenuList>
        <MenuItem minH="48px">
          <Icon viewBox="0 0 24 24" color="RGBA(0, 0, 0, 0.92)">
            <path
              fill="currentColor"
              d="M9 19h6v2H9c-2.76 0-5-2.24-5-5V7h2v9c0 1.66 1.34 3 3 3m1.42-13.59c.78-.78.78-2.05 0-2.83c-.78-.78-2.05-.78-2.83 0c-.78.78-.78 2.05 0 2.83c.78.79 2.04.79 2.83 0M11.5 9c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v6c0 1.66 1.34 3 3 3h5.07l3.5 3.5L20 20.07L14.93 15H11.5z"
            />
          </Icon>
          <Box
            style={{ color: "black", marginLeft: 10 }}
            onClick={handleLogout}
          >
            Passenger Logout
          </Box>
        </MenuItem>
        <MenuItem minH="40px">
          <Icon viewBox="0 0 24 24" color="RGBA(0, 0, 0, 0.92)">
            <path
              fill="currentColor"
              d="M2 3h20c1.05 0 2 .95 2 2v14c0 1.05-.95 2-2 2H2c-1.05 0-2-.95-2-2V5c0-1.05.95-2 2-2m12 3v1h8V6zm0 2v1h8V8zm0 2v1h7v-1zm-6 3.91C6 13.91 2 15 2 17v1h12v-1c0-2-4-3.09-6-3.09M8 6a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
            />
          </Icon>
          <span
            style={{ color: "black", marginLeft: 10 }}
            onClick={handleDriverLogout}
          >
            Driver Logout
          </span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Logout;
