import React, { useState } from "react";
import Reffered from "./Reffered";

const Refer = () => {
  const [code, setCode] = useState("");

  const generateCode = () => {
    const referralCode = Math.round(Math.random() * 1000000);
    const referCode = referralCode + "";
    if (referCode.length === 6) {
      setCode(referralCode);
      return referralCode;
    } else {
      return generateCode();
    }
  };

  //   console.log(refers);
  return (
    <div>
      <div className="card bg-base-100 shadow-2xl form-control w-full max-w-sm mx-auto my-20">
        <div className="card-body">
          <h1 className="text-center font-bold text-3xl text-primary py-5">
            Refer & Earn
          </h1>
          <h2>
            <span className="font-bold text-xl">My Referral Bonus:</span> $50{" "}
            <span>
              {" "}
              <button className="btn btn-sm btn-secondary mx-2">
                Claim
              </button>{" "}
            </span>
          </h2>
          <div className="my-3">
            <input
              className="input input-bordered w-full max-w-sm"
              type="text"
              placeholder="XXXXXX"
              value={code}
              readOnly
            />
            <div
              className="tooltip tooltip-open tooltip-bottom flex mx-auto mb-5"
              data-tip="Send the referral code to your friends and earn $50 when they complete milestones"
            >
              <button
                onClick={generateCode}
                className="btn btn-secondary my-2 flex mx-auto"
              >
                Generate Referral Code
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="divider mx-5" />
      <h2 className="my-5 text-center font-bold text-xl text-primary">
        Referred By Me
      </h2>
      <Reffered />
    </div>
  );
};

export default Refer;
