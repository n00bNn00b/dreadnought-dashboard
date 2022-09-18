import React from "react";

const Events = () => {
  const date = new Date().toDateString();

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto my-20">
      <div className="card-body">
        <h2 className="card-title">Event</h2>
        <p>
          <li>Live Support Session at 8:00 PM, {date} </li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
          <li>Lorem ipsum dolor sit amet.</li>
        </p>
      </div>
    </div>
  );
};

export default Events;
