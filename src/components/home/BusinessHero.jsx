import React from "react";

export default function TechBusinessHero() {
  return (
    <div 
      className=" flex items-center justify-start p-10 lg:p-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("/background.png")', // Replace with your image path
      }}
    >
      <div className="w-full ">
        <h1 className="text-white font-Passion text-4xl sm:text-4xl lg:text-7xl xl:text-7xl font-extrabold uppercase leading-tight tracking-tight mb-10">
          WE DO TECH BETTER<br />
          WE MAKE YOUR BUSINESS<br />
          <h2 className="lg:text-8xl text-7xl">GROW</h2>
        </h1>
        
        <button className="bg-yellow-400 hover:bg-yellow-300 text-amber-900 lg:px-8 px-8 lg:py-4 p-2 rounded-full text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0 shadow-md">
          Find More
        </button>
      </div>
    </div>
  );
}