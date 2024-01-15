"use client";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
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
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLogin } from "../Redux/Passenger/actions";
import {
  PASSENGER_FAILURE,
  PASSENGER_LOGINSUCCESS,
} from "../Redux/Passenger/actionTypes";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loader from "../Components/Loader";

export default function LoginPage() {
  const toast = useToast()
  const {isLoading}=useSelector(state=>state.passenger_reducer)
  console.log(isLoading,'is loading status')
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [validate,setValidate]=useState('password must have length of 6 characters containing minimum 1 lowercase,1 uppercase,1 number and 1 special character')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // let lower='abcdefghijklmnopqrstuvwxyz'
  // const lowerCase=lower.trim().split("")
  // console.log(lowerCase,'is lowercase')
  // let upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  // const upperCase=upper.trim().split("")
  // console.log(upperCase,'is upperCase')
  // let digits='0123456789'
  // let numbers=digits.trim().split("").map(Number)
  // let special='!@#$%^&*()_'
  // let specialChar=special.trim().split("")
  // function validatePassword(password){
  //   if(password.length<6){
  //     setValidate("Must contain atleast 6 characters")
  //   }else if(!lowerCase.includes(password)){
  //     setValidate(`Must contain minimum 1 lowercase character`)
  //   }else if(!upperCase.includes(password)){
  //     setValidate(`Must contain minimum 1 uppercase character`)
  //   }else if(!numbers.includes(password)){
  //     setValidate(`Must contain minimum 1 digit between 0 to 9`)
  //   }else if(!specialChar.includes(password)){
  //     setValidate(`Must contain minimum 1 digit between 0 to 9`)
  //   }else{
  //     setValidate(`password sattisfies criteria`)
  //   }
  // }
  // useEffect(()=>{
  //   // const pass=password.trim().split("")
  //   for(let i=0;i<password.length;i++){
  //     validatePassword(password[i])
  //   }
  // },[password])
  console.log(location, "is");
  const handleClick = (e) => {
    dispatch(handleLogin({ email, password }))
      .then((res) => {
        toast({
          title: 'Login success',
          // description: "We've created your account for you.",
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
        console.log(res.data.token,'is after login')
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("passengerId",res.data.id)
        dispatch({ type: PASSENGER_LOGINSUCCESS, payload: true });
        navigate(location.state==="/passenger"?location.state:'/passenger',{replace:true});
      })
      .catch((err) =>{ toast({
        title: 'Login failed',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });dispatch({ type: PASSENGER_FAILURE })});
  };
  return (
    <Stack w={{ sm: 250, md: 300 }} border={'0px solid red'} margin={"auto"} transform={"translate(0%,50%)"} gap={5}>
      <Heading>Passenger Login</Heading>
      <Text >
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
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <Text>{validate}</Text> */}
      <Button
        border={"1px solid #0073e6"}
        borderRadius={"10px"}
        onClick={handleClick}
      >
        Login
      </Button>
      {isLoading && <Loader/>}
      <Text>
        Don't have account?{" "}
        <Link to="/signup" style={{ color: "rgb(49,130,206)" }}>
          Sign up
        </Link>
      </Text>
    </Stack>
  );
}
