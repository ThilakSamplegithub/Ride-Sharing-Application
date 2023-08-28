import { PASSENGER_FAILURE, PASSENGER_LOGINSUCCESS, PASSENGER_REQUEST, PASSENGER_SUCCESS } from "./actionTypes"

const initialState={
isLoading:false,
isAuth:false,
passenger:{},
isError:false
}
export const passenger_reducer=(state=initialState,{type,payload})=>{
switch(type){
    case PASSENGER_REQUEST:{
        return {...state,isLoading:true}
    }
    case PASSENGER_SUCCESS:{
        console.log(payload)
        return {...state,isLoading:false,passenger:payload}
    }
    case PASSENGER_FAILURE:{
        return {...state,isLoading:false,isError:true}
    }
    case PASSENGER_LOGINSUCCESS:{
         console.log(payload,"is payload")
        return {...state,isLoading:false,isAuth:payload}
    }
    default:{
        return state
    }
}
}
