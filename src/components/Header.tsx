import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 py-6 sticky top-0 z-20">
      <h1 className="text-3xl md:text-5xl lg:text-6xl text-white text-center font-bold">
        Artificial Intelligence
      </h1>
      <h2 className="text-xl md:text-3xl lg:text-4xl text-gray-200 text-center">
        Exploring the world of AI
      </h2>
    </div>
  );
};

export default Header;