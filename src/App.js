import { Route, Routes } from "react-router-dom";
import Accounts from "./routes/Accounts";
import Home from "./pages";
import User from "./routes/User";
import About from "./pages/About";
import UserProfile from "./pages/UserProfile";
import ProjectUpload from "./pages/ProjectUpload";
import Blog  from "./pages/Blog";
import Discover from "./pages/Discover";
import ProjectDetails from "./pages/ProjectDetails";
import AboutUS from "./pages/AboutUs";
import Discover from "./pages/Discover";
import ProfilePageInfo from "./pages/ProfilePageInfo";

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
        <Route
          path="/userProfile"
          caseSensitive="false"
          element={<UserProfile />} />
        <Route  path="/projectupload" caseSensitive="false" element={<ProjectUpload />} />
        <Route path="/blog" caseSensitive="false" element={<Blog />} />
        < Route path="/aboutus" caseSensitive="false" element={<AboutUS />} />
        <Route path="/discover" caseSensitive="fasle" element={<Discover />} />
        <Route path="/profilepageinfo" caseSensitive="false" element={<ProfilePageInfo />} />
        <Route path="/projectdetails" caseSensitive="false" element={<ProjectDetails />} />
      </Routes>
    </>
  );
};

export default App;
