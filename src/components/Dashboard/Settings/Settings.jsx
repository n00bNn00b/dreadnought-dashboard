import React from "react";

const Settings = () => {
  const hadnleUpdate = (e) => {
    //
  };
  return (
    <form
      onSubmit={hadnleUpdate}
      className="card bg-base-100 shadow-2xl form-control w-full max-w-sm mx-auto my-20 py-20"
    >
      <div className="card-body-5">
        <h2 className="text-center text-2xl font-bold drop-shadow-lg text-primary">
          Settings
        </h2>
        <div className="divider mx-5" />
        {/* settings part */}
        <div className="collapse mt-5">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Change Profile Name ▶
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>

        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Change Email Address ▶
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>

        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Change Password ▶
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Settings;
