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
import ProfilePageWorkExp from "./pages/ProfilePageWorkExp";
import ProfilePageCourse from "./pages/ProfilePageCourse";
import PersonalInfo from "./pages/PersonalInfo";
import Header1 from "./pages/Header1";
import Header2 from "./pages/Header2";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";

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
        <Route path="/blog" caseSensitive="false" element={<Blog />} />
        <Route path="/discover" caseSensitive="false" element={<Discover />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Page Not Found </h1>} />
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
        <Route
          path="/socialmedia"
          caseSensitive="fasle"
          element={<SocialMedia />}
        />
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
        <Route path="/header1" caseSensitive="fasle" element={<Header1 />} />
        <Route path="/header2" caseSensitive="false" element={<Header2 />} />
      </Routes>
    </>
  );
};

export default App;
