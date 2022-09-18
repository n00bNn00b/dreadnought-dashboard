import React from "react";
import Courses from "../Courses/Courses";
import Events from "../Events/Events";
import StartupNav from "../StartupNav/StartupNav";

const Startup = () => {
  return (
    <div>
      <StartupNav />
      <div className="lg:flex lg:mx-5 gap-5">
        <Courses />

        <Events />
      </div>
    </div>
  );
};

export default Startup;
