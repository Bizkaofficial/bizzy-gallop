import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Accounts from "./components/Accounts";
import Home from "./pages";


const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" caseSensitive="false" element={<Home/>}/>
        <Route path="/accounts/*" caseSensitive="false" element={<Accounts/>}/>
        
      </Routes>
    </>
  );
};

export default App;
