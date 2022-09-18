import React, { useState } from "react";

const Assignment = () => {
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [twitter, setTwitter] = useState("");
  const [yCombinator, setYcombinator] = useState("");
  const [aws, setAws] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const companyEmail = e.target.email.value;
    const companyUrl = e.target.url.value;
    const companyLinkedIn = e.target.linkedin.value;
    const companyTwitter = e.target.twitter.value;
    const companyYcombinator = e.target.ycombinator.value;
    const companyAws = e.target.aws.value;
    // console.log(
    //   companyEmail,
    //   companyAws,
    //   companyLinkedIn,
    //   companyTwitter,
    //   companyUrl,
    //   companyYcombinator
    // );
    setEmail(companyEmail);
    setUrl(companyUrl);
    setLinkedIn(companyLinkedIn);
    setTwitter(companyTwitter);
    setYcombinator(companyYcombinator);
    setAws(companyAws);
  };
  console.log(email, url, linkedIn, twitter, yCombinator, aws);

  return (
    <form
      onSubmit={handleSubmit}
      className="form-control my-20 mx-auto w-full max-w-xs"
    >
      <label className="label">
        <span className="label-text font-bold">
          Company Email <span className="text-red-500"> *</span>{" "}
        </span>
      </label>
      <input
        type="email"
        placeholder="email@example.com"
        className="input input-bordered w-full max-w-xs"
        name="email"
      />

      <label className="label">
        <span className="label-text font-bold">
          Company Website URL <span className="text-red-500"> *</span>{" "}
        </span>
      </label>
      <input
        type="text"
        placeholder="www.example.com"
        className="input input-bordered w-full max-w-xs"
        name="url"
      />

      <label className="label">
        <span className="label-text font-bold">
          Company LinkedIn <span className="text-red-500"> *</span>{" "}
        </span>
      </label>
      <input
        type="text"
        placeholder="www.linkedin.com/company/mycompany"
        className="input input-bordered w-full max-w-xs"
        name="linkedin"
      />

      <label className="label">
        <span className="label-text font-bold">
          Company Twitter <span className="text-red-500"> *</span>{" "}
        </span>
      </label>
      <input
        type="text"
        placeholder="www.twitter.com/mycompany"
        className="input input-bordered w-full max-w-xs"
        name="twitter"
      />

      <label className="label">
        <span className="label-text font-bold">
          Y Combinator Startup profile <span className="text-red-500"> *</span>{" "}
        </span>
      </label>
      <input
        type="text"
        placeholder="https://ycombinator.com/companies/mycompany"
        className="input input-bordered w-full max-w-xs"
        name="ycombinator"
      />

      <label className="label">
        <span className="label-text font-bold">
          Company AWS Profile <span className="text-red-500"> *</span>{" "}
        </span>
      </label>
      <input
        type="text"
        placeholder="email"
        className="input input-bordered w-full max-w-xs"
        name="aws"
      />

      <input type="submit" value="Submit" className="btn btn-primary my-5" />
    </form>
  );
};

export default Assignment;
