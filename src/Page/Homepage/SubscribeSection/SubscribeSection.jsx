import React from "react";

const SubscribeSection = () => {
  return (
    <div className="bg-green-500 flex justify-center items-center py-10">
      <input
        type="email"
        placeholder="Email ID"
        className="input input-bordered border-white placeholder:text-white text-white w-full max-w-xs bg-green-500"
      />
      <button className="btn border-none bg-white text-green-700 ml-10">
        Subscribe
      </button>
    </div>
  );
};

export default SubscribeSection;
