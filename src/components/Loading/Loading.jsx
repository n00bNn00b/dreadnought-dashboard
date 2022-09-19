import React from "react";
import { DotLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="my-20">
      <DotLoader className="mx-auto" color="#073e60" size={150} />
    </div>
  );
};

export default Loading;
