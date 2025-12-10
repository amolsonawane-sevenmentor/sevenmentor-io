"use client";

import { useState, useRef } from "react";
import studentsData from "./PlacementPageData";
import Image from "next/image";


export default function PlacedStudents() {
  const [visibleCount, setVisibleCount] = useState(15);
  const [isExpanded, setIsExpanded] = useState(false);
  const sectionRef = useRef(null);

  const handleShowMore = () => {
    setVisibleCount(studentsData.length);
    setIsExpanded(true);
  };

  const handleShowLess = () => {
    setVisibleCount(15);
    setIsExpanded(false);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section ref={sectionRef} className="py-12 px-9 md:px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-orange-500 mb-8 md:mb-12">
        Our Latest Placed Students
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {studentsData.slice(0, visibleCount).map((student, index) => (
          <div key={index} className="card">
            <div className="border rounded-lg overflow-hidden hover:shadow-lg bg-white transition-shadow p-2 sm:p-3 pb-0 flex flex-col items-center text-center">
              <div className="w-14 h-14 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-2 border-4 border-gray-100 relative">
                <Image
                  // src="/assets/profilepic.webp"
                   src={student.profilePic}
                  alt={`${student.username}'s profile`}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-sm sm:text-lg font-semibold text-black mb-2">
                {student.username}
              </h2>

              <p className="text-gray-600 text-xs sm:text-base">{student.role}</p>

              <div className="w-12 h-8 sm:w-20 sm:h-16 relative overflow-hidden flex items-center justify-center mt-2">
                <Image
                  src={student.logo || "/placeholder.svg"}
                  alt={`${student.companyName} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        {!isExpanded ? (
          <button
            onClick={handleShowMore}
            className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
}