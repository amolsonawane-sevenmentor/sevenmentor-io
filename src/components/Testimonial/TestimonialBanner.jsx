"use client";
import React from "react";
import aboutus from "../../../public/assets/About/aboutusbanner.webp"
function TestimonialBaneer() {
  return (
    <div
      className="bg-cover bg-top min-h-[350px] flex flex-col items-center justify-center px-4 py-24 sm:px-6 lg:px-8"
      style={{
       backgroundImage: `url(${aboutus.src})`
      }}
    >
      {/* Hero content */}
      <div className="mx-auto max-w-4xl text-center p-2">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
      &quot;Hear What Our Students Say!&quot;
        </h1>
        <p className="mt-6 text-xl italic text-white/90">
        &quot;Real Stories, Real Success – Discover How SevenMentor Transformed Careers Across the Globe.&quot;
        </p>
      </div>
    </div>
  );
}

export default TestimonialBaneer;
