import { DRIVER_REQUEST } from "./actionTypes"
const baseURL=process.env.REACT_APP_BASE_URL
export const handleStatus=(id,data)=>async(dispatch)=>{
dispatch({type:DRIVER_REQUEST})
  let res=await fetch(`${baseURL}driver/confirmed/${id}`,{
    method:"PATCH",
    headers:{
        "content-Type":"application/json",
        "Authorization":localStorage.getItem("driver_token")
    },
    body:JSON.stringify(data)
  })
  return res
}