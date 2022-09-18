import React from "react";

const Assignment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="form-control w-full max-w-sm mx-auto my-20"
    >
      <h1 className="text-center text-3xl font-bold my-5">
        Startup Assignment
      </h1>
      <label className="label">
        <span className="label-text font-bold">Company Email</span>
      </label>
      <input
        type="email"
        placeholder="company@example.com"
        className="input input-bordered w-full max-w-sm"
        required
      />
      <label className="label">
        <span className="label-text font-bold">Company Website</span>
      </label>
      <input
        type="email"
        placeholder="www.example.com"
        className="input input-bordered w-full max-w-sm"
        required
      />
      <label className="label">
        <span className="label-text font-bold">Company LinkedIn</span>
      </label>
      <input
        type="email"
        placeholder="https://www.linkedin.com/company/mycompany"
        className="input input-bordered w-full max-w-sm"
        required
      />
      <label className="label">
        <span className="label-text font-bold">Company Twitter</span>
      </label>
      <input
        type="email"
        placeholder="https://twitter.com/mycompany"
        className="input input-bordered w-full max-w-sm"
        required
      />
      <input type="button" value="Submit" className="mt-5 btn btn-primary" />
    </form>
  );
};

export default Assignment;
