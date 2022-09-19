import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const ResetPass = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const hadnleReset = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const confirmEmail = e.target.confirmEmail.value;
    console.log(email, confirmEmail);
  };

  return (
    <form
      onSubmit={hadnleReset}
      className="card bg-base-100 shadow-2xl form-control w-full max-w-sm mx-auto my-20 py-20"
    >
      <div className="card-body">
        <h2 className="text-center text-2xl font-bold drop-shadow-lg text-primary">
          Reset Password
        </h2>
        <label className="label">
          <span className="label-text font-bold text-primary">
            Email Address
          </span>
        </label>
        <input
          type="email"
          placeholder="Type your email address"
          className="input input-bordered w-full max-w-sm"
          name="email"
        />

        <label className="label">
          <span className="label-text font-bold text-primary">
            Confirm Email Address
          </span>
        </label>
        <input
          type="email"
          placeholder="Confirm email address"
          className="input input-bordered w-full max-w-sm"
          name="confirmEmail"
        />
      </div>
      <input
        type="submit"
        value="Reset Password"
        className="btn btn-primary w-40 mx-auto"
      />
    </form>
  );
};

export default ResetPass;
