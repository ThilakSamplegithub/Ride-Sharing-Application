"use client";
import {
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDriverLogin } from "../Redux/Rider/actions";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  DRIVER_FAILURE,
  DRIVER_LOGIN_SUCCESS,
} from "../Redux/Rider/actionTypes";
import styles from "../Styles/driverLoginPage.module.css";
const DriverLoginPage = () => {
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location, "is");
  const { isLoading, isError } = useSelector((state) => state.driver_reducer);
  const handleClick = (e) => {
    dispatch(handleDriverLogin({ email: email.toLowerCase(), password: "123" }))
      .then((res) => {
        toast({
          title: "Login success",
          // description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        console.log(res, "is after login");
        localStorage.setItem("driver_token", res.data.token);
        localStorage.setItem("driverId", res.data.id);
        dispatch({ type: DRIVER_LOGIN_SUCCESS, payload: true });
        navigate(location.state === "/driver" ? location.state : "/driver", {
          replace: true,
        });
      })
      .catch((err) => {
        console.log(err.response.data.msg)
        toast({
          title: "Login failed",
          description: err.response.data.msg,
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        dispatch({ type: DRIVER_FAILURE });
      });
  };
  return  (
    <Stack
      w={{ base: "250px", sm: "300px", md: 300 }}
      border={"0px solid red"}
      margin={"auto"}
      transform={"translate(0%,50%)"}
      gap={5}
    >
      <Heading>Driver Login</Heading>
      <u></u>
      <Text>
        Email Address
        <Icon height={3} width={3} viewBox="0 0 24 24" color="red.500">
          <path
            fill="currentColor"
            d="m12 2l2.582 6.953L22 9.257l-5.822 4.602L18.18 21L12 16.891L5.82 21l2.002-7.141L2 9.257l7.418-.304z"
          />
        </Icon>
      </Text>
      <Input
        placeholder="enter email"
        border="1px solid  #E0E0E0"
        color={"#000000"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Text>
        Password{" "}
        <Icon height={3} width={3} viewBox="0 0 24 24" color="red.500">
          <path
            fill="currentColor"
            d="m12 2l2.582 6.953L22 9.257l-5.822 4.602L18.18 21L12 16.891L5.82 21l2.002-7.141L2 9.257l7.418-.304z"
          />
        </Icon>
      </Text>
      <Input
        placeholder="enter password"
        type="password"
        border="1px solid  #E0E0E0"
        color={"#000000"}
        value={"123"}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        border={"1px solid #0073e6"}
        borderRadius={"10px"}
        onClick={handleClick}
      >
        Login
      </Button>
      <Text>
        Don't have account?{" "}
        <Link to="/signup" style={{ color: "rgb(49,130,206)" }}>
          Sign up
        </Link>
      </Text>
      {/* {isLoading && <span className={styles.loader}></span>} */}
  
    </Stack>
  );
};

export default DriverLoginPage;
