"use client"

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import './CourseContent.css';

export default function CourseContent({ CourseContentData, title = "Course Content" }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);

    // Scroll to the top of the section when collapsing
    if (isExpanded && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle both string content and CourseContentData object
  const contentToDisplay = typeof CourseContentData === 'object' && CourseContentData?.content 
    ? CourseContentData.content 
    : CourseContentData;

  return (
    <>
    <div className="p-4 content-center" ref={sectionRef}>
      <div className="w-full mx-auto md:px-28">
        {/* Main Heading */}
        <h2 className="md:text-5xl font-bold text-center mb-8 text-orange-500 md:whitespace-nowrap text-4xl">
          {title}
        </h2>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-black glowing-container">
          {/* Render course content */}
          <div
            className={`course-content leading-relaxed text-black whitespace-pre-line ${
              isExpanded ? "block" : "line-clamp-7"
            }`}
            style={{
              maxHeight: isExpanded ? "none" : "20rem", // Approximate height for 20 lines
              overflow: isExpanded ? "visible" : "hidden",
            }}
            dangerouslySetInnerHTML={{ __html: contentToDisplay }}
          ></div>

          {/* Read More / Read Less Button */}
          <div className="flex justify-center mt-6">
            <button
            id="read-more-btn"
              aria-label="Toggle Read More"
              onClick={handleToggle}
              className="relative flex items-center px-8 py-3 text-white text-lg font-semibold rounded-full shadow-lg gap-2 overflow-hidden bg-black border-2 border-transparent hover:border-orange-500 cursor-pointer"
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


      {/* CSS for inside gradient border and glowing */}
      <style>{`
        .glowing-container {
          position: relative;
          box-shadow:
            0 0 15px 5px rgba(255, 165, 0, 0.2),
            0 0 60px 10px rgba(255, 140, 0, 0.3);
          transition: box-shadow 0.3s ease-in-out;
          background-color: white;
          border-radius: 1rem; /* same as rounded-lg */
          padding: 1.5rem; /* same as p-6 */
          border-width: 10px;
          border-style: solid;
          border-image-slice: 1;
          /* Gradient border inside */
          // border-image-source: linear-gradient(190deg, #f97316, #000000);
          border-image-source: linear-gradient(165deg,rgba(0, 0, 0, 1) 0%, rgba(115, 71, 18, 1) 100%);
          /* fallback for unsupported browsers */
          border-color: transparent;
        }

        /* Clamp text lines when collapsed */
        .line-clamp-7 {
          display: -webkit-box;
          -webkit-line-clamp: 7;
          -webkit-box-orient: vertical;
          overflow: hidden;
          max-height: 20rem;
        }
      `}</style>
     </>
  );
}