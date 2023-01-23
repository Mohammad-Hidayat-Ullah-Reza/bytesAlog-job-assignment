import React from "react";

const HeroSection = () => {
  return (
    <div id="home">
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
      >
        <div className="hero-overlay bg-opacity-60 bg-green-400"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl">
            <h1 className="mb-5 text-4xl sm:text-5xl font-bold uppercase text-black">
              We Help Your Business
            </h1>
            <p className="mb-5 text-black font-bold">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <button className="btn bg-white text-black hover:bg-slate-100 hover:text-black uppercase">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
