import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, errorProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();

  if (user) {
    console.log("signup:", user);
  }

  if (loading || updating) {
    return <div>updating...</div>;
  }

  if (error || errorProfile) {
    console.log("Error: ", error.message || errorProfile.message);
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPass = e.target.confirmPass.value;

    if (password !== confirmPass) {
      alert("Error");
    } else {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      console.log("user: ", user);
    }
  };
  return (
    <form
      onSubmit={handleSignUp}
      className="form-control card bg-base-100 shadow-2xl w-full max-w-sm my-20 mx-auto"
    >
      <div className="card-body">
        <h2 className="text-center drop-shadow-lg font-bold text-primary text-3xl my-5">
          SignUp
        </h2>
        <label className="label">
          <span className="label-text font-bold text-primary">Full Name</span>
        </label>
        <input
          type="text"
          placeholder="i.e.: Felicia Herman"
          className="input input-bordered w-full max-w-sm"
          name="name"
          required
        />

        <label className="label">
          <span className="label-text font-bold text-primary">
            Email Address
          </span>
        </label>
        <input
          type="email"
          placeholder="i.e.: felicia@example.com "
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

        <label className="label">
          <span className="label-text font-bold text-primary">
            Confirm Password
          </span>
        </label>
        <input
          type="password"
          placeholder="password"
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
      </div>
    </form>
  );
};

export default Signup;
