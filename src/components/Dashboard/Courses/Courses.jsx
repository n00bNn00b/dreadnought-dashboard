import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Course from "./Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios.get("courses.json").then((res) => setCourses(res.data));
  }, []);
  // console.log(courses);
  return (
    <div className=" my-20">
      <h2 className="text-center font-bold text-3xl text-primary">
        Top Courses
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 w-full">
        {courses.slice((0, 2)).map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
      <Link to="/courses" className="btn btn-primary w-40 flex mx-auto my-5">
        View All Courses
      </Link>
    </div>
  );
};

export default Courses;
