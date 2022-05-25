import { Route, Routes } from "react-router-dom";
import SocialMedia from "../pages/SocialMedia";
import UserProfile from "../pages/UserProfile";

const User = () => {
  return (
    <div>
      <Routes>
        <Route path="" element={<UserProfile />} />
        <Route path="social" element={<SocialMedia />} />
      </Routes>
    </div>
  )
}

export default User;