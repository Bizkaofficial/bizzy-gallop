import { Route, Routes } from "react-router-dom";
import Accounts from "./routes/Accounts";
import Home from "./pages";
import User from "./routes/User";


const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" caseSensitive="false" element={<Home />}/>
        <Route path="/accounts/*" caseSensitive="false" element={<Accounts />}/>
        <Route path="/user/*" caseSensitive="false" element={<User />} />
      </Routes>
    </>
  );
};

export default App;
