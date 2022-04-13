import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

const Accounts = () => {
  return (
    <div>
        <Routes>
            <Route path='' element={<Navigate to='*'/> }/>
            <Route path='login' element={ <Login/> }/>
            <Route path='register' element={<Register/>}/>
            <Route path='*' element={ <h1>Page Not Found</h1> }/>
            
        </Routes>
    </div>
  )
}

export default Accounts