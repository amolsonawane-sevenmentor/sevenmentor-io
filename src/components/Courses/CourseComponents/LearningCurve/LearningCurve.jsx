"use client";

import Image from "next/image";
import React from "react";

const LearningCurve = ({ imagePath, title, IsNonCoursePage }) => {
  const cleanedTitle = title
    .replace(
      /\b(training|classes|Training|Classes|Course|course|in Pune)\b/gi,
      ""
    )
    .replace(/\s+/g, " ")
    .trim();
  return (
    <section className="flex flex-col items-center p-1 md:p-8 md:h-[650px]">
      <h2 className="lg:text-4xl text-2xl p-2 text-orange-500 font-semibold text-center">
        {IsNonCoursePage ? (
          <>
            <span className="text-white">Placement Process of IT Courses</span> - At SevenMentor
          </>
        ) : (
          <>
            <span className="text-white">Learning Curve for </span>{cleanedTitle}
          </>
        )}
      </h2>
      <div className="relative w-full h-[200px] md:w-[1300px] md:h-[500px] lg:max-w-[1300px]">
        <Image
          aria-label="Learning curve"
          src={imagePath}
          alt={`Learning curve for ${cleanedTitle}`}
          title={`Learning curve for ${cleanedTitle}`}
          fill
          className="object-contain rounded-lg"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default LearningCurve;
