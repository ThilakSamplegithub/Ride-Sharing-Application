import axios from "axios"
import { PASSENGER_LOGINSUCCESS, PASSENGER_REQUEST, PASSENGER_SUCCESS } from "./actionTypes"
const baseurl=`${process.env.REACT_APP_BASE_URL}`
export const handleRegister=(state)=>async(dispatch)=>{
    console.log(baseurl,"is baseurl")
    dispatch({type:PASSENGER_REQUEST})
  let res= await axios.post(`${baseurl}passenger/register`,state)
  console.log(res.data.passenger)
     return res
}
export const handleLogin=({email,password})=>async(dispatch)=>{
   dispatch({type:PASSENGER_REQUEST})
    let res=await axios.post(`${baseurl}passenger/login`,{email,password})
    return res
}