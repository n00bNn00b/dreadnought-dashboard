import React from "react";
import Courses from "../Courses/Courses";
import Events from "../Events/Events";
import StartupNav from "../StartupNav/StartupNav";

const Startup = () => {
  return (
    <div>
      <StartupNav />
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 my-20 gap-5">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <Courses />
        </div>
        <div>
          <Events />
        </div>
      </div>
    </div>
  );
};

export default Startup;
