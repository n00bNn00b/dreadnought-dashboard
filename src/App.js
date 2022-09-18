import React from "react";
import { Route, Routes } from "react-router-dom";
import Startup from "./components/Dashboard/Startup/Startup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Startup />} />
      </Routes>
    </div>
  );
}

export default App;
