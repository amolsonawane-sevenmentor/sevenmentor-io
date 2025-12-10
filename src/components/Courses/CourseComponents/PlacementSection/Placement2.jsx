"use client"

import React, { useState, useEffect, useRef, useCallback } from "react";
import studentsData from "./PlacedStudentsData.js";
import "./Placement2.css";
import PopUpForm from "../../../Forms/PopUpForm/PopUpForm.jsx";
import { ChevronLeftCircleIcon, ChevronRightCircleIcon } from "lucide-react";
import Image from "next/image.js";

// Helper functions
const chunkArray = (array, chunkSize) => {
  const results = [];
  for (let i = 0; i < (Array.isArray(array) ? array.length : 0); i += chunkSize) {
    results.push(array.slice(i, i + chunkSize));
  }
  return results;
};

const splitStudentsData = (data) => {
  const rows = [[], [], [], []];
  (Array.isArray(data) ? data : []).forEach((item, index) => {
    rows[index % 4].push(item);
  });
  return rows;
};

// Lazy Video Component
const LazyVideo = ({ src, title, isInView }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsLoaded(true);
    }
  }, [isInView]);

  return isLoaded ? (
    <iframe
      aria-label="Video"
      src={`${src}?autoplay=${isInView ? 1 : 0}&mute=1&controls=1&modestbranding=1&showinfo=0&rel=0`}
      title={title}
      className="w-full h-full object-cover"
      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
      frameBorder="0"
      style={{ pointerEvents: "auto" }} // Ensure iframe can receive clicks
    />
  ) : (
    <div className="w-full h-full bg-black flex items-center justify-center">
      <p className="text-white">Loading video...</p>
    </div>
  );
};

// Animated Row Component
const AnimatedLogoRow = React.memo(({ animationClass, rowData, rowIndex }) => (
  <div className="relative flex w-full overflow-hidden">
    <div className={`flex ${animationClass} gap-1`}>
      {(Array.isArray(rowData) ? rowData : []).map((student, index) => (
        <div
          key={`${student.id}-${rowIndex}-${index}`} // Ensure unique key
          className="flex-shrink-0 w-[230px] h-[90px] sm:w-[320px] sm:h-[120px] p-2 grid place-items-center"
        >
          <div className="w-full h-full bg-white flex rounded-2xl shadow-lg border-2 border-orange-500"
            style={{
              boxShadow:
                "0 4px 6px -1px rgba(249, 115, 22, 0.3), 0 2px 4px -1px rgba(249, 115, 22, 0.2)",
            }}
          >
            <div className="w-[30%] pl-6 flex items-center justify-center p-1">
              <Image
                loading="lazy"
                aria-label="Student Profile Picture"
                src={student.profilePic}
                alt={student.username}
                width={50}
                height={50}
                className="w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full object-contain"
              />
            </div>
            <div className="w-[70%] flex flex-col justify-center items-center p-1">
              <p className="text-center text-ellipsis whitespace-nowrap text-xs sm:text-lg font-semibold text-orange-700">
                {student.username}
              </p>
              <p className="text-center text-ellipsis text-xs text-gray-500">
                {student.role}
              </p>
              <Image
                loading="lazy"
                src={student.logo}
                alt={student.companyName}
                 width={30}
                height={30}
                className="w-[30px] h-[30px] sm:w-[70px] sm:h-[50px] object-contain"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
    {/* Fading effect */}
    <div className="border rounded-3xl">
      <div className="absolute div-fade left-0 top-0 h-full w-[100px] bg-gradient-to-r from-black via-black/60 to-transparent pointer-events-none"></div>
      <div className="absolute div-fade right-0 top-0 h-full w-[100px] bg-gradient-to-l from-black via-black/60 to-transparent pointer-events-none"></div>
    </div>
  </div>
));
AnimatedLogoRow.displayName = "AnimatedLogoRow";

// Main Component
export default function Placement2({ videos, mailId, contactNo, bannerTitle }) {
  const [currentVideo, setCurrentVideo] = useState(0);
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Default to an empty array if no videos are provided
  const videoList = Array.isArray(videos) ? videos : [];

  const handleNextVideo = useCallback(() => {
    setCurrentVideo((prev) => (prev + 1) % videoList.length);
  }, [videoList.length]);

  const handlePreviousVideo = useCallback(() => {
    setCurrentVideo((prev) => (prev - 1 + videoList.length) % videoList.length);
  }, [videoList.length]);

  const handleOpenPopup = useCallback(() => {
    setShowPopup(true);
  }, []);

  const handleClosePopup = useCallback(() => {
    setShowPopup(false);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const sectionref = sectionRef.current;

    if (sectionref) observer.observe(sectionref);
    return () => sectionref && observer.unobserve(sectionref);
  }, []);

  useEffect(() => {
    if (!isInView || videoList.length === 0) return;

    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videoList.length);
    }, 20000); // Change video every 20 seconds

    return () => clearInterval(interval);
  }, [isInView, videoList.length]);

  const studentsRows = splitStudentsData(studentsData);

  return (
    <div
      ref={sectionRef}
      className="w-full flex flex-col items-center justify-center mt-8 lg:mt-[-20px] md:p-8 relative overflow-hidden"
    >
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl lg:text-[2.20rem] font-bold text-white p-4">
          Our Learners Got{" "}
          <span className="!text-2xl md:!text-3xl lg:!text-4xl text-orange-500 !tracking-tight inline-block animated-text-fill">
            Assured Placement.
          </span>{" "}
          So Can You!
        </h2>
        <div className="flex items-center justify-center ">
          <div className="h-[4px] w-[50%] rounded-l-xl bg-gradient-to-r from-transparent to-white" />
          <div className="h-[4px] w-[50%] rounded-r-xl bg-gradient-to-l from-transparent to-white" />
        </div>
      </div>

      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row items-center justify-between lg:h-[80vh]">
        {/* Left Section - Video Reels */}
        <div className="relative flex flex-col items-center mb-5">
          <div className="relative w-[340px] h-[380px] bg-black rounded-3xl p-4 overflow-hidden">
            {videoList.length > 0 ? (
              <LazyVideo
                src={videoList[currentVideo].url}
                title={videoList[currentVideo].title}
                isInView={isInView}
              />
            ) : (
              <div className="w-full h-full bg-black flex items-center justify-center">
                <p className="text-white">No videos available</p>
              </div>
            )}
          </div>
          {/* <div className="flex gap-6">
            <button
            id="prev-btn"
              className="text-white bg-slate-500 rounded-full p-2"
              onClick={handlePreviousVideo}
              aria-label="Previous video"
            >
              <ChevronLeftCircleIcon />
            </button>
            <button
            id="next-btn"
              className="text-white bg-slate-500 rounded-full p-2"
              onClick={handleNextVideo}
              aria-label="Next video"
            >
              <ChevronRightCircleIcon />
            </button>
          </div> */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              id="enroll-btn"
              aria-label="Enroll Now"
              onClick={handleOpenPopup}
              className="p-2 px-[25px] font-semibold whitespace-nowrap rounded-[30px] bg-orange-500 text-white hover:bg-orange-600"
            >
              Enroll Now
            </button>
          </div>
          {/* Popup Form */}
          {showPopup && (
            <PopUpForm
              isOpen={showPopup}
              onClose={handleClosePopup}
              title={"Request Callback"}
              mailId={mailId}
              contactNo={contactNo}
              bannerTitle={bannerTitle}
              id= "PlacementPopupSubmit"
            />
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center md:justify-start justify-center h-full w-full">
          <div className="flex flex-col items-center gap-1 w-full h-full lg:w-[75%] lg:h-[80vh] lg:justify-center">
            {/* Animated Rows */}
            {(Array.isArray(studentsRows) ? studentsRows : []).map((rowData, rowIndex) => (
              <AnimatedLogoRow
                key={rowIndex}
                rowIndex={rowIndex}
                animationClass={
                  rowIndex % 2 === 0
                    ? "animate-scroll-loop"
                    : "animate-scroll-loop-reverse"
                }
                rowData={[...rowData, ...rowData]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

