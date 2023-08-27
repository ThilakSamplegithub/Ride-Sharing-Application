import React from 'react';

import { Route, Routes } from 'react-router-dom';
import Passenger from './passenger';
import Rider from './rider';
import Homepage from '../Components/HomePage';
function MainRoutes() {
  return (
    <Routes>
      
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/passenger' element={<Passenger/>}></Route>
        <Route path='/rider' element={<Rider/>}></Route>
    
    </Routes>
  );
}

export default MainRoutes;