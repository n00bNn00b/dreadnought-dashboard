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
import Refer from "./components/Dashboard/Refer/Refer";
import Footer from "./components/Footer/Footer";
import Assignment from "./components/Dashboard/Assignment/Assignment";
import RequireAuth from "./components/Authentication/RequireAuth";

function App() {
  return (
    <div>
      <StartupNav />
      <Routes>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Startup />
            </RequireAuth>
          }
        />
        <Route
          path="/courses"
          element={
            <RequireAuth>
              <AllCourses />
            </RequireAuth>
          }
        />
        <Route
          path="/assignment"
          element={
            <RequireAuth>
              <Assignment />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/refer"
          element={
            <RequireAuth>
              <Refer />
            </RequireAuth>
          }
        />
        <Route
          path="/settings"
          element={
            <RequireAuth>
              <Settings />
            </RequireAuth>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route
          path="/reset"
          element={
            <RequireAuth>
              <ResetPass />
            </RequireAuth>
          }
        />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
