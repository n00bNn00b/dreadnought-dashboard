import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import { toast } from "react-toastify";

const SignIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || "/dashboard";

  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <Loading />;
  }
  if (error) {
    toast.error("Login failed! Try again later.");
  }

  const handleSignIn = async (e) => {
    const email = e.target.email.value;
    const password = e.target.password.value;
    e.target.reset();
    await signInWithEmailAndPassword(email, password);
  };

  return (
    <form
      onSubmit={handleSignIn}
      className="form-control card bg-base-100 shadow-2xl w-full max-w-sm my-20 mx-auto"
    >
      <div className="card-body">
        <h2 className="text-center drop-shadow-2xl font-bold text-primary text-3xl my-5">
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

        <input type="submit" value="Sign In" className="btn btn-primary my-5" />
      </div>
    </form>
  );
};

export default SignIn;
