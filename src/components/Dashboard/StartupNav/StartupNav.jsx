import React from "react";
import { Link } from "react-router-dom";

const StartupNav = () => {
  return (
    <div className="navbar fixed top-0 bg-primary text-white">
      <div className="flex-1">
        <Link
          to="/dashboard"
          className="btn btn-ghost normal-case text-xl drawer-content"
        >
          Dashboard
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="avatar" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            <li>
              <Link to="#" className="justify-between">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StartupNav;
