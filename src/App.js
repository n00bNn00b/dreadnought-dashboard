import React from "react";
import { Route, Routes } from "react-router-dom";
import ResetPass from "./components/Authentication/ResetPass/ResetPass";
import SignIn from "./components/Authentication/SignIn/SignIn";
import Signup from "./components/Authentication/Signup/Signup";
import AllCourses from "./components/Dashboard/Courses/AllCourses/AllCourses";
import Profile from "./components/Dashboard/Profile/Profile";
import Settings from "./components/Dashboard/Settings/Settings";
import Startup from "./components/Dashboard/Startup/Startup";
import StartupNav from "./components/Dashboard/StartupNav/StartupNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <StartupNav />
      <Routes>
        <Route path="/dashboard" element={<Startup />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/reset" element={<ResetPass />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
