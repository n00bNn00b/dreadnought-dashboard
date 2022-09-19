import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <form className="form-control card bg-base-100 shadow-2xl w-full max-w-sm my-20 mx-auto">
      <div className="card-body">
        <h2 className="text-center font-bold text-primary text-3xl my-5">
          Sign In
        </h2>

        <label className="label">
          <span className="label-text font-bold text-primary">
            Email Address
          </span>
        </label>
        <input
          type="email"
          placeholder="i.e.: felicia@example.com"
          className="input input-bordered w-full max-w-sm"
          name="email"
          required
        />

        <label className="label">
          <span className="label-text font-bold text-primary">Password</span>
        </label>
        <input
          type="password"
          placeholder="password"
          className="input input-bordered w-full max-w-sm"
          name="password"
          required
        />

        <div className="mt-5">
          Do not Have an Account?{" "}
          <Link className="text-primary font-bold" to="/signup">
            Sign Up
          </Link>
        </div>
        <div>
          Forgot Password?{" "}
          <Link to="/reset" className="text-primary font-bold">
            Reset
          </Link>
        </div>

        <input type="submit" value="Sign Up" className="btn btn-primary my-5" />
      </div>
    </form>
  );
};

export default SignIn;
