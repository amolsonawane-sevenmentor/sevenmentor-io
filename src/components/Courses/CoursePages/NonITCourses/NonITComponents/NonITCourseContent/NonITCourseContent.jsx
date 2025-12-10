
"use client"


// NonITCourseContent.js
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import './NonITCourseContent.css';
import { courseContent } from './CourseContentData.js';

export default function NonITCourseContent({ courseName }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);

    // Scroll to the top of the section when collapsing
    if (isExpanded && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Fetch course content based on courseName
  const CourseContentData = courseContent[courseName];

  return (
    <div className="p-4 content-center" ref={sectionRef}>
      <div className="w-[100%] mx-auto md:px-28">
        {/* Main Heading */}
        <h2 className="!md:text-[50px] !font-bold !text-center !mb-8 !text-orange-500 !md:whitespace-nowrap !text-[40px]">
          Course Content
        </h2>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
          {/* Render course content */}
          <div
            className={`course-content leading-relaxed text-white whitespace-pre-line ${
              isExpanded ? "block" : "line-clamp-7"
            }`}
            style={{
              maxHeight: isExpanded ? "none" : "20rem", // Approximate height for 20 lines
              overflow: isExpanded ? "visible" : "hidden",
            }}
            dangerouslySetInnerHTML={{ __html: CourseContentData }}
          ></div>

          {/* Read More / Read Less Button */}
          <div className="flex justify-center mt-6">
            <button
              onClick={handleToggle}
              className="relative flex items-center px-8 py-3 text-white text-lg font-semibold rounded-full shadow-lg gap-2 overflow-hidden bg-black border-2 border-transparent hover:border-orange-500"
            >
              <span className="text-white">
                {isExpanded ? "Read Less..." : "Read More..."}
              </span>

              {/* Animated Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <div className="absolute inset-0 rounded-full border-[3px] border-orange-500/50 opacity-70 animate-pulse" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
