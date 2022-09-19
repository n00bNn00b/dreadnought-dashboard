import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const fName = e.target.name.value;
    const mail = e.target.email.value;
    const pass = e.target.password.value;
    const confirmPass = e.target.confirmPass.value;
  };
  return (
    <form className="form-control w-full max-w-sm my-20 mx-auto">
      <h2 className="text-center font-bold text-primary text-3xl my-5">
        SignUp
      </h2>
      <label className="label">
        <span className="label-text font-bold text-primary">Full Name</span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-sm"
        name="name"
        required
      />

      <label className="label">
        <span className="label-text font-bold text-primary">Email Address</span>
      </label>
      <input
        type="email"
        placeholder="Type here"
        className="input input-bordered w-full max-w-sm"
        name="email"
        required
      />

      <label className="label">
        <span className="label-text font-bold text-primary">Password</span>
      </label>
      <input
        type="password"
        placeholder="Type here"
        className="input input-bordered w-full max-w-sm"
        name="password"
        required
      />

      <label className="label">
        <span className="label-text font-bold text-primary">
          Confirm Password
        </span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-sm"
        name="confirmPass"
        required
      />

      <div className="mt-5">
        Already Have an Account?{" "}
        <Link className="text-primary font-bold" to="/signin">
          Sign In
        </Link>
      </div>

      <input type="submit" value="Sign Up" className="btn btn-primary my-5" />
    </form>
  );
};

export default Signup;
