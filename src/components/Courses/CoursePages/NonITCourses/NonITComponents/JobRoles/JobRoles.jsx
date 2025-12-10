"use client"

import { useState } from "react";
import jobRolesData from "./jobRolesData.js";
import Image from "next/image.js";

const JobRoles = ({ type }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function for mobile
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Get job roles based on the type prop
  const roles = jobRolesData[type];

  return (
    <div className="flex flex-col gap-4 p-6 justify-center items-center bg-black md:py-12 md:pb-24">
      <h1 className="text-center text-orange-500 text-3xl md:text-5xl font-bold mb-4">
        Job Roles <span className="text-white">You Can Target</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-4 md:px-24 bg-black p-4 rounded-lg w-full items-center">
        {roles.map((job, index) => (
          <div
            key={index}
            className={`relative flex flex-col justify-center items-center border border-orange-500 bg-gray-900 cursor-pointer overflow-hidden transition-all duration-500 rounded-md md:w-56 w-72 h-20 md:h-96 ${
              activeIndex === index ? "h-40 md:flex-[4]" : "h-20 md:flex-1"
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => handleToggle(index)} // Toggle on mobile
          >
            <Image
              src={job.image}
              alt={job.role}
              className="w-full h-full object-cover absolute top-0 left-0 opacity-60"
            />

            {/* Role Name - Hidden on Mobile when Active, Visible Otherwise */}
            <span
              className={`absolute text-orange-500 uppercase bg-black/50 rounded-lg px-3 py-1 tracking-wide font-bold transition-all duration-500 text-center z-10 ${
                activeIndex === index
                  ? "hidden md:block md:top-8 md:left-1/2 md:-translate-x-1/2 md:rotate-0"
                  : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:-rotate-90"
              }`}
            >
              {job.role}
            </span>

            {/* Description - Only Visible When Active */}
            {activeIndex === index && (
              <p className="absolute bottom-2 w-full text-white text-sm bg-black bg-opacity-75 p-2 rounded-md transition-opacity duration-500 opacity-100 text-center md:bottom-4">
                {job.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobRoles;