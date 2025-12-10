"use client";
import React from "react";
import aboutusnew from "../../../public/assets/About/aboutusbannernew.webp";
function AboutUsBanner() {
  return (
    <div
      className="bg-cover bg-top md:min-h-[400px] min-h-[300px] flex flex-col items-center justify-center px-4 md:pt-18 !pt-14 sm:px-6 lg:px-8 opacity-80"
      style={{
        backgroundImage: `url(${aboutusnew.src})`,
      }}
    >
      <div className="opacity-50 z-10 absolute inset-0 bg-black"></div>
      {/* Hero content */}
      <div className="mx-auto max-w-4xl text-center p-2 z-20">
        <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
          Empowering Minds, Shaping Futures – SevenMentor Institute
        </h1>
        <p className="mt-6 text-xl italic text-white/90">
          Dedicated to Your Growth – SevenMentor Institute, Leading the Way in
          Learning.
        </p>
      </div>
    </div>
  );
}

export default AboutUsBanner;
