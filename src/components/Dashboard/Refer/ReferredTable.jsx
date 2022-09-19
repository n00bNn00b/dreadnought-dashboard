import React from "react";

const ReferredTable = ({ refer }) => {
  const { id, name, email, signup, milestone, percentage } = refer;
  return (
    <tr>
      <th>{id}</th>
      <td>{name}</td>
      <td>{email} </td>
      <td>
        <div className="badge badge-success font-bold badge-outline mx-3">
          {signup}
        </div>{" "}
      </td>
      <td>
        {milestone === "Complete" ? (
          <div className="badge badge-success font-bold badge-outline mx-3">
            {milestone}
          </div>
        ) : (
          <div className="badge badge-warning font-bold badge-outline mx-3">
            {milestone}
          </div>
        )}
        {percentage === "100%" ? (
          <div className="badge badge-success font-bold badge-outline">
            {percentage}
          </div>
        ) : (
          <div className="badge badge-warning font-bold badge-outline">
            {percentage}
          </div>
        )}
      </td>
    </tr>
  );
};

export default ReferredTable;
