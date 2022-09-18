import axios from "axios";
import React, { useEffect, useState } from "react";
import Course from "./Course";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios.get("courses.json").then((res) => setCourses(res.data));
  }, []);
  console.log(courses);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 w-full my-20">
      {courses.map((course) => (
        <Course key={course.id} />
      ))}
    </div>
  );
};

export default Courses;
