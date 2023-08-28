import {useSelector} from "react-redux"
import { Navigate } from "react-router-dom"
export const PrivateRoute=({children})=>{
   const {isAuth}=useSelector((state)=>state.passenger_reducer)
   console.log(isAuth,'is status')
   if(!isAuth){
    return <Navigate to="/login"/>
   }
   return children
}