"use client";

import { useState, lazy, Suspense, useCallback, useEffect } from "react";
import { Play } from "lucide-react";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import HiringPopUpForm from "../Forms/HiringPopUpForm/HiringPopUpForm.jsx";
import HiringBanner from "../../../public/assets/HiringPartner/hiringpartner.webp"

const VideoModal = lazy(() => import("./VideoModal"));



export default function HiringPartnerBanner() {
  const [showVideo, setShowVideo] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const handleOpenPopup = useCallback(() => {
    setShowPopup(true);
  }, []);

  const handleClosePopup = useCallback(() => {
    setShowPopup(false);
  }, []);

  // Set the isDesktop state on client-side
  useEffect(() => {
    const checkIsDesktop = window.innerWidth >= 1024;
    setIsDesktop(checkIsDesktop);

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`relative h-[65vh] md:min-h-[75vh] overflow-hidden text-white ${
        isDesktop
          ? "" // Use default styles for desktop
          : "bg-gradient-to-br bg-black from-orange-500/70 via-black to-orange-500/70"
      }`}
    >
      {/* Desktop Background Image */}
      {isDesktop && (
        <Image
          src={HiringBanner}
          alt="Hiring Partner Banner"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 md:py-20 pt-8 lg:px-24 md:mt-16 mt-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 gap-5 items-center">
          {/* Left Section */}
          <div className="md:space-y-8 space-y-4">
            <h1 className="text-2xl sm:text-4xl font-bold leading-tight">
              Hire job-ready professionals,
              <br />
              <span className="text-orange-500">faster.</span>
            </h1>
            <p className="text-md sm:text-lg text-gray-300">
              Pick from our pool of qualified & pre-trained candidates.
              <br />
              Increase your interview-to-offer ratio.
            </p>

            <div className="flex flex-wrap gap-4 text-lg">
              <span>Lateral Hiring</span>
              <span className="text-orange-500">•</span>
              <span>Off-Campus Hiring</span>
              <span className="text-orange-500">•</span>
              <span>Campus Hiring</span>
            </div>
            <div className="flex justify-center items-center gap-4 mt-6 md:flex md:justify-start">
            <button
              className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors items-center"
              onClick={handleOpenPopup}
            >
              Request a callback
            </button>
            </div> 
          </div>

          {/* Right Section (Video & Stats) */}
          <div className="flex flex-col items-center space-y-6">
            {/* Play Button */}
            <button
              className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors cursor-none"
              // onClick={() => setShowVideo(true)}
            >
              <Play className="w-8 h-8 text-[#FF6B00] ml-1" />
            </button>

            {/* Statistics */}
            <div className="flex !md:flex-col justify-center items-center gap-5 w-[70%]">
              <div className="text-center">
                <div className="text-2xl md:text-2xl font-bold md:text-nowrap">
                  12.3 Million+
                </div>
                <div className="text-gray-400">Learners</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-2xl font-bold">Zero</div>
                <div className="text-gray-400">Hiring Cost</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-2xl font-bold">3900+</div>
                <div className="text-gray-400">Hiring Companies</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lazy-loaded video modal */}
      {showVideo && (
        <Suspense
          fallback={
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <VideoModal onClose={() => setShowVideo(false)} />
        </Suspense>
      )}

      {/* Popup Form */}
      {showPopup && (
        <HiringPopUpForm
          isOpen={showPopup}
          onClose={handleClosePopup}
          title={"Request Callback"}
          mailId={"support@sevenmentor.com"}
          contactNo={"7798058777"}
          bannerTitle={"Hiring Partner"}
          mailSubject={"Hiring Partner Form Submission Received"}
          userEmailSubject={"Thank You for Reaching Out"}
        />
      )}
    </div>
  );
}
