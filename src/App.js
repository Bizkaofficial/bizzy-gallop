import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Accounts from "./components/Accounts";
import Home from "./pages";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" caseSensitive="false" element={<Home />} />
        <Route
          path="/accounts/*"
          caseSensitive="false"
          element={<Accounts />}
        />
        <Route path="/about" caseSensitive="false" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
