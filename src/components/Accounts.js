import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Register from '../pages/Register';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';

const Accounts = () => {
  return (
    <div>
        <Routes>
            <Route path='' element={<Navigate to='*'/> }/>
            <Route path='login' element={ <Login /> }/>
            <Route path='register' element={<Register />}/>
            <Route path='forgot-password' element={<ForgotPassword />}/>
            <Route path='*' element={ <h1>Page Not Found</h1> }/>
            
        </Routes>
    </div>
  )
}

export default Accounts