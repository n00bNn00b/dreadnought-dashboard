import React from "react";
import Assignment from "../Assignment/Assignment";
import Events from "../Events/Events";
import StartupNav from "../StartupNav/StartupNav";

const Startup = () => {
  return (
    <div>
      <StartupNav />
      <Assignment />
      <Events />
    </div>
  );
};

export default Startup;
