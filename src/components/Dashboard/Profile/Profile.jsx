import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Profile = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="card bg-base-100 shadow-xl w-96 mx-auto my-20">
      <div className="card-body">
        <div className="avatar mx-auto">
          <div className="w-24 rounded">
            <img
              src={user?.photoURL || "https://placeimg.com/192/192/people"}
              alt="avatar"
            />
          </div>
        </div>
        <p>
          <span className="font-bold text-primary">Name: </span>
          {user?.displayName}
        </p>
        <p>
          <span className="font-bold text-primary">Email: </span>
          {user?.email}
        </p>
        <p>
          <span className="font-bold text-primary">Account Created At: </span>
          {user?.metadata?.creationTime}
        </p>
      </div>
    </div>
  );
};

export default Profile;
