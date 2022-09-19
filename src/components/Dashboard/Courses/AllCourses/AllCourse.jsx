import React from "react";

const AllCourse = ({ course }) => {
  const { courseName, description } = course;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{courseName}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-primary">Watch Now</button>
        </div>
      </div>
    </div>
  );
};

export default AllCourse;
