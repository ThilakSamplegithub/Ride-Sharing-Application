import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

const Driver_PrivateRoute = ({children}) => {
    const {isAuth}=useSelector(state=>{console.log(state.driver_reducer);return state.driver_reducer})
    console.log(isAuth,'inside drivers isAuth')
    const location=useLocation()
    if(!isAuth){
        return <Navigate state={location.pathname} to="/driverLogin"/>
    }
    return children
}

export default Driver_PrivateRoute
