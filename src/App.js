import { Route, Routes } from "react-router-dom";
import Accounts from "./routes/Accounts";
import Home from "./pages";
import User from "./routes/User";
import About from "./pages/About";
import UserProfile from "./pages/UserProfile";
import Blog  from "./pages/Blog";
import Discover from "./pages/Discover";
import Contact from "./pages/Contact";

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
        <Route path="/user/*" caseSensitive="false" element={<User />} />
        <Route path="/about" caseSensitive="false" element={<About />} />
        <Route path="/discover" caseSensitive="false" element={<Discover />} />
        <Route path="/blog" caseSensitive="false" element={<Blog />} />
        <Route path="/discover" caseSensitive="false" element={<Discover />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="*" element={<h1>Page Not Found </h1>} />
      </Routes>
    </>
  );
};

export default App;
