import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { useState } from "react";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./assets/logo.PNG";
import Accounts from "./components/Accounts";


const App = () => {

  const [allCustomers, setAllCustomers] = useState([]);

  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" caseSensitive="false" element={<Home/>}/>
        <Route path="/accounts/*" caseSensitive="false" element={<Accounts/>}/>
        {/* <Route path="/accounts/login" caseSensitive="false" element={<Login/>} />
        <Route path="/accounts/register" caseSensitive="false" element={<Register allCustomers={allCustomers} addNewCustomer={addNewCustomer} />} />
        <Route path="/accounts/forgot-password" caseSensitive="false"/> */}
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
