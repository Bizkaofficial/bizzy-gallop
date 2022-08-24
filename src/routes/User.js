import { Route, Routes } from "react-router-dom";
import SocialMedia from "../pages/SocialMedia";
import UserProfile from "../pages/UserProfile";
import ProjectDetails from "../pages/ProjectDetails";
import ProjectUpload from "../pages/ProjectUpload";
import ProfilePageWorkExp from "../pages/ProfilePageWorkExp";
import ProfilePageCourse from "../pages/ProfilePageCourse";
import PersonalInfo from "../pages/PersonalInfo";
import Header2 from "../layouts/Header2";

const User = () => {
  return (
    <div>
      <Header2 />
      <Routes>
        <Route path="" element={<UserProfile />} />
        <Route path="social" caseSensitive="false" element={<SocialMedia />} />
        <Route
          path="projectdetails"
          caseSensitive="false"
          element={<ProjectDetails />}
        />
        {/* <Route
          path="userProfile"
          caseSensitive="false"
          element={<UserProfile />}
        /> */}
        <Route
          path="/project-upload"
          caseSensitive="false"
          element={<ProjectUpload />}
        />
        <Route path="*" element={<h1>Page not Found</h1>} />
        <Route
          path="/work-experience"
          caseSensitive="fasle"
          element={<ProfilePageWorkExp />}
        />
        <Route
          path="/course"
          caseSensitive="fasle"
          element={<ProfilePageCourse />}
        />
        <Route
          path="/personal-info"
          caseSensitive="false"
          element={<PersonalInfo />}
        />
      </Routes>
    </div>
  );
};

export default User;
