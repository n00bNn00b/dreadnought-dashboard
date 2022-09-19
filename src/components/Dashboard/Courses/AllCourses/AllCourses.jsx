import axios from "axios";
import React, { useEffect, useState } from "react";
import AllCourse from "./AllCourse";

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios.get("courses.json").then((res) => setCourses(res.data));
  }, []);
  return (
    <div className="my-20">
      <h2 className="text-center font-bold text-primary text-2xl my-5">
        All Courses offered by Dreadnought
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {courses.map((course) => (
          <AllCourse key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
