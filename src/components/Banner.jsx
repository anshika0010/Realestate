import React from "react";
import sofaimg from "../assets/sofaimg.jpeg";

const Banner = () => {
  return (
    <div
      className="relative w-full h-[300px] md:h-[250px] lg:h-[350px] bg-center bg-cover flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${sofaimg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20 " />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Buy or Sell Properties with Ease
        </h1>
        <p className="text-lg md:text-xl text-white mb-6">
          Find your dream home or list your property today with trusted real
          estate experts.
        </p>
        <button className="px-6 py-2 bg-red-500 text-black rounded-lg font-semibold hover:bg-blue-200 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Banner;
