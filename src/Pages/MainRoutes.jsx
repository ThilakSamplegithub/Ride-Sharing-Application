import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Passenger from './passenger';
import Rider from './rider';
import Homepage from '../Components/HomePage';
import SignupPage from './SignupPage';
import LoginPage from './LoginPage';
import { PrivateRoute } from './PrivateRoute';
function MainRoutes() {
  return (
    <Routes>
      
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/passenger' element={<PrivateRoute><Passenger/></PrivateRoute>}></Route>
        <Route path='/rider' element={<Rider/>}></Route>
        <Route path='/signup' element={<SignupPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
    </Routes>
  );
}

export default MainRoutes;