import React from "react";

const Reffered = ({ refer }) => {
  const { id, email, name, milestone, percentage, signup } = refer;
  return (
    <div>
      <div className="overflow-x-auto mx-5">
        <table className="table w-full ">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Signup</th>
              <th>Milestone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{id}</th>
              <td>{name}</td>
              <td>{email}</td>
              <td>{signup}</td>
              <td>
                {milestone} <span>{percentage} </span>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reffered;
