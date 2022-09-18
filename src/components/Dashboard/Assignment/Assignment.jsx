import React, { useState } from "react";

const Assignment = () => {
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [twitter, setTwitter] = useState("");
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
        <span className="label-text font-bold">
          Company Email <span className="font-bold text-red-500">*</span>
        </span>
      </label>
      <input
        type="email"
        placeholder="company@example.com"
        className="input input-bordered w-full max-w-sm"
        name="email"
        required
      />
      <label className="label">
        <span className="label-text font-bold">
          Company Website URL<span className="font-bold text-red-500"> *</span>
        </span>
      </label>
      <input
        type="text"
        placeholder="www.example.com"
        className="input input-bordered w-full max-w-sm"
        name="url"
        required
      />
      <label className="label">
        <span className="label-text font-bold">
          Company LinkedIn<span className="font-bold text-red-500"> *</span>
        </span>
      </label>
      <input
        type="text"
        placeholder="https://www.linkedin.com/company/mycompany"
        className="input input-bordered w-full max-w-sm"
        name="linkedin"
        required
      />
      <label className="label">
        <span className="label-text font-bold">
          Company Twitter <span className="font-bold text-red-500"> *</span>
        </span>
      </label>
      <input
        type="text"
        placeholder="https://twitter.com/mycompany"
        className="input input-bordered w-full max-w-sm"
        name="twitter"
        required
      />
      <input type="button" value="Submit" className="mt-5 btn btn-primary" />
    </form>
  );
};

export default Assignment;
