import axios from "axios";
import React, { useEffect, useState } from "react";
import ReferredTable from "./ReferredTable";

const Reffered = () => {
  const [refers, setRefers] = useState([]);
  useEffect(() => {
    axios.get("refer.json").then((res) => setRefers(res.data));
  }, []);
  return (
    <div className="mb-20">
      <div className="overflow-x-auto mx-5">
        <table className="table w-full ">
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Signup</th>
              <th>Milestone</th>
            </tr>
          </thead>
          <tbody>
            {refers.map((refer) => (
              <ReferredTable key={refer.id} refer={refer} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reffered;
