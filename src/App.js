import { Route, Routes } from "react-router-dom";
import Accounts from "./routes/Accounts";
import Home from "./pages";
import User from "./routes/User";
import About from "./pages/About";
import SocialMedia from "./pages/SocialMedia";
import UserProfile from "./pages/UserProfile";
import ProjectUpload from "./pages/ProjectUpload";
import Blog from "./pages/Blog";
import Discover from "./pages/Discover";
import ProjectDetails from "./pages/ProjectDetails";
import AboutUS from "./pages/AboutUs";
import ProfilePageWorkExp from "./pages/ProfilePageWorkExp";
import ProfilePageCourse from "./pages/ProfilePageCourse";
import PersonalInfo from "./pages/PersonalInfo";

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
          element={<UserProfile />}
        />
        <Route
          path="/projectupload"
          caseSensitive="fasle"
          element={<ProjectUpload />}
        />
        <Route path="/blog" caseSensitive="false" element={<Blog />} />
        <Route path="/aboutus" caseSensitive="false" element={<AboutUS />} />
        <Route
          path="/socialmedia"
          caseSensitive="fasle"
          element={<SocialMedia />}
        />
        <Route path="/discover" caseSensitive="fasle" element={<Discover />} />

        <Route
          path="/profilepageworkexp"
          caseSensitive="fasle"
          element={<ProfilePageWorkExp />}
        />
        <Route
          path="/profilepagecourse"
          caseSensitive="fasle"
          element={<ProfilePageCourse />}
        />
        <Route path="/blog" caseSensitive="false" element={<Blog />} />
        <Route path="/aboutus" caseSensitive="false" element={<AboutUS />} />
        <Route path="/discover" caseSensitive="fasle" element={<Discover />} />
        <Route
          path="/projectdetails"
          caseSensitive="false"
          element={<ProjectDetails />}
        />
        <Route
          path="/personalinfo"
          caseSensitive="false"
          element={<PersonalInfo />}
        />
      </Routes>
    </>
  );
};

export default App;
