import React from "react";
const Hero = () => {
  return (
    <div className="max-w-[20000px] mx-auto">
      <div className="max-h-[500px]">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-500">Home</span> Decor
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover"
          src="https://specials-images.forbesimg.com/imageserve/6123b033133106144df23946/Best-Home-Decor-Ideas--Nearly-Natural-faux-plants/960x0.jpg?fit=scale"
          alt="/"
        />
      </div>
    </div>
  );
};
export default Hero;
