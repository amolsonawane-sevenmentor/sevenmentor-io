"use client";
import React, { useState, useMemo } from "react";

import { motion } from "framer-motion";
import { Rocket, ChevronRight } from "lucide-react";

import HomePopUpForm from "../../HomeStickyButton/HomePopUpForm.jsx";
import Image from "next/image";

import SevenMentorYt from "../../../../public/assets/IndustryHomeSection/SevenMentorYT.webp";
import YtIcon from "../../../../public/assets/IndustryHomeSection/ytIcon.webp";

const UpskillNow = ({ mailId, bannerTitle, contactNo }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  // Memoized Left Content
  const leftContent = useMemo(
    () => (
      <div className="space-y-6 text-center md:text-left w-full">
        <div className="inline-flex items-center gap-2 bg-orange-500/10 rounded-full px-4 py-2 border border-orange-700/20 ">
          <Rocket className="w-4 h-4 text-orange-500" />
          <span className="text-orange-500 font-medium">
            Formula For Growth
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl tracking-normal md:!leading-[58px] lg:text-5xl font-bold">
          Why Should You <span className="text-orange-500">Upskill Now?</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-8">
          Join Seven Mentor - Pune&apos;s Premier Training Institute for a
          Future-Ready Career
        </p>
        <motion.button
          id="book-free-demo-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleOpenPopup}
          className="group px-4 py-2 text-md font-semibold bg-orange-600 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:shadow-orange-500/50 hover:bg-orange-700 border border-white/60"
          suppressHydrationWarning={true}
        >
          <span className="flex items-center justify-center">
            BOOK FREE DEMO
            <ChevronRight className="inline-block ml-2 w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
          </span>
        </motion.button>
      </div>
    ),
    []
  );

  return (
    <div className="bg-gradient-to-r from-orange-500/10 to-zinc-800/10 text-white flex justify-center mt-8 mb-8">
      <div className="container mx-auto px-6 md:px-24 py-14 md:py-10">
        <div className="grid gap-8 md:gap-2 md:grid-cols-2 items-center justify-around">
          {leftContent}

          {/* Video Placeholder Until Clicked */}
          <div
            className="relative w-full aspect-video rounded-lg border-2 border-orange-500 shadow-lg overflow-hidden cursor-pointer"
            onClick={handleVideoLoad}
          >
            {videoLoaded ? (
              <iframe
                src="https://www.youtube.com/embed/dUOVbUa094A?si=mcowoTzP425mTFtO&autoplay=1&mute=1"
                title="Educational Video"
                className="absolute inset-0 w-full h-full pointer-events-auto !object-cover"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-black group">
                {/* Thumbnail */}
                <Image
                  src={SevenMentorYt}
                  alt="Video Thumbnail"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105 opacity-70 "
                />

                {/* Play Icon */}
                <Image
                  src={YtIcon}
                  alt="Play Icon"
                  width={24}
                  height={24}
                  className="absolute w-[96px] h-[96px] rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300 ease-in-out"
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Popup Form */}
      {showPopup && (
        <HomePopUpForm
          isOpen={showPopup}
          onClose={handleClosePopup}
          title={"Request Callback"}
          mailId={mailId}
          contactNo={contactNo}
          bannerTitle={bannerTitle}
        />
      )}
    </div>
  );
};

export default UpskillNow;
