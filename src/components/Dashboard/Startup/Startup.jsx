import React from "react";
import Courses from "../Courses/Courses";
import Events from "../Events/Events";

const Startup = () => {
  return (
    <div>
      <div className="lg:flex lg:mx-5 gap-5">
        <Courses />
        <Events />
      </div>
    </div>
  );
};

export default Startup;
