import React from "react";
import { Link } from "react-router-dom";

const StartupNav = () => {
  return (
    <div className="navbar bg-primary text-white fixed top-0 z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="#">Assignment</Link>
            </li>
            <li>
              <Link to="/refer">Refer & Earn</Link>
            </li>
          </ul>
        </div>
        <Link to="/dashboard" className="btn btn-ghost normal-case text-xl">
          Startup Dashboard
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="#">Assignment</Link>
          </li>
          <li>
            <Link to="/refer">Refer & Earn</Link>
          </li>
        </ul>
      </div>
      {/* avatar */}
      <div className="flex-none navbar-end">
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle lg:mx-5 md:mx-2 sm:mx-0"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-sm indicator-item">3</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-primary shadow"
          >
            <div className="card-body">
              <li>New Course Module has been realeased for startups</li>
              <li>New Course Module has been realeased for startups</li>
              <li>New Course Module has been realeased for startups</li>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar lg:mx-5 md:mx-2 sm:mx-0"
          >
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" alt="avatar" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            <li>
              <Link to="/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
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
