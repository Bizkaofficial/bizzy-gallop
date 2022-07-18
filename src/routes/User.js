import { Route, Routes } from "react-router-dom";
import SocialMedia from "../pages/SocialMedia";
import UserProfile from "../pages/UserProfile";
import ProjectDetails from "../pages/ProjectDetails";
import ProjectUpload from "../pages/ProjectUpload";

const User = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<UserProfile />} />
        <Route path="social" caseSensitive="false" element={<SocialMedia />} />
        <Route path="projectdetails" caseSensitive="false" element={<ProjectDetails />} />
        <Route
          path="userProfile"
          caseSensitive="false"
          element={<UserProfile />} />
        <Route  path="/projectupload" caseSensitive="false" element={<ProjectUpload />} />
        <Route path="*" element={<h1>Page not Found</h1>} />
      </Routes>
    </div>
  )
}

export default User;