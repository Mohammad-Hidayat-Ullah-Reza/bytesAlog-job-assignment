import React from "react";

const AboutUsSection = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between">
          <img
            src="https://placeimg.com/260/260/arch"
            className="max-w-sm rounded-lg shadow-2xl w-2/5"
          />
          <div className="w-2/5 pr-28">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              repudiandae doloribus in laborum dicta rem debitis odio omnis
              adipisci corporis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
