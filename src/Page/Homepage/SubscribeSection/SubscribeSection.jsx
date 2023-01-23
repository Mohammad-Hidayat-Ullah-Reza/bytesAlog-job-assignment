import React from "react";

const SubscribeSection = () => {
  return (
    <div
      id="subscribe"
      className="bg-green-500 flex justify-center items-center px-4 py-10 sm:px-6"
    >
      <input
        type="email"
        placeholder="Email ID"
        className="input input-bordered border-white placeholder:text-white text-white w-full max-w-2xl bg-green-500"
      />
      <button className="btn border-none bg-white hover:bg-slate-100 text-green-700 hover:text-green-800 ml-10">
        Subscribe
      </button>
    </div>
  );
};

export default SubscribeSection;
