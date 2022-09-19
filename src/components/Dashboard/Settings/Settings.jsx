import React from "react";
import { useUpdateEmail } from "react-firebase-hooks/auth";
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Loading/Loading";
import { useUpdatePassword } from "react-firebase-hooks/auth";

const Settings = () => {
  const [updateEmail, updating, error] = useUpdateEmail(auth);
  const [updateProfile, updatingName, errorName] = useUpdateProfile(auth);
  const [updatePassword, updatingPass, errorPass] = useUpdatePassword(auth);

  if (updating || updatingName || updatingPass) {
    return <Loading />;
  }
  if (error || errorName || errorPass) {
    toast.error("Something went wrong! Try Again Later.");
    // console.log(errorPass);
  }
  const hadnleEmailUpdate = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    // console.log(email);
    await updateEmail(email);
    // console.log(error.message);
    toast.success("Email Updated!");
    //
  };

  const handleNameUpdate = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    await updateProfile({ displayName: name });
    toast.success("Profile Name has been updated!");
    // console.log(name);
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    // console.log(password);
    await updatePassword(password);
    toast.success("Password Changed Successfully!");
  };
  return (
    <div className="card bg-base-100 shadow-2xl form-control w-full max-w-sm mx-auto my-20 py-20">
      <div className="card-body-5">
        <h2 className="text-center text-2xl font-bold drop-shadow-lg text-primary">
          Settings
        </h2>
        <div className="divider mx-5" />
        {/* settings part */}
        <form
          onSubmit={handleNameUpdate}
          className="collapse collapse-arrow mt-5"
        >
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Change Profile Name
          </div>
          <div className="collapse-content">
            <label className="label">
              <span className="label-text font-bold text-primary">
                Full Name
              </span>
            </label>
            <input
              type="text"
              placeholder="i.e.: Felicia Herman"
              className="input input-bordered w-full max-w-sm"
              name="name"
              required
            />
            <input
              type="submit"
              className="btn btn-primary my-3 flex mx-auto"
              value="Update Profile Name"
            />
          </div>
        </form>
        {/* email settings */}
        <form onSubmit={hadnleEmailUpdate} className="collapse collapse-arrow">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Change Email Address
          </div>
          <div className="collapse-content">
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
            <input
              type="submit"
              className="btn btn-primary my-3 flex mx-auto"
              value="Change Email"
            />
          </div>
        </form>

        {/* password settings */}
        <form
          onSubmit={handlePasswordChange}
          className="collapse collapse-arrow"
        >
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Change Password
          </div>
          <div className="collapse-content">
            <label className="label">
              <span className="label-text font-bold text-primary">
                New Password
              </span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered w-full max-w-sm"
              name="password"
              required
            />
            <input
              type="submit"
              className="btn btn-primary my-3 flex mx-auto"
              value="Change Password"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
