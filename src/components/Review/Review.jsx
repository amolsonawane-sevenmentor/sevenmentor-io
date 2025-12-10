"use client";
import { useEffect, useRef, useState } from "react";
import AboveFooterForm from "../Home/AboveFooterForm/AboveFooterForm.jsx";

import ReviewForm from "../Forms/ReviewForm.jsx";
import VideoReviewSection from "./VideoReviewSection.jsx";
import Image from "next/image.js";
import dynamic from "next/dynamic";

import ReviewImg from "../../../public/assets/Review/Review.webp"

const Review = () => {
  const trustindexRef = useRef(null);
  const scriptLoadedRef = useRef(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTrustIndexLoaded, setIsTrustIndexLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 1024);
      }
    };

    checkMobile();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", checkMobile);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", checkMobile);
      }
    };
  }, []);

  useEffect(() => {
    if (!scriptLoadedRef.current && trustindexRef.current) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.trustindex.io/loader.js?9baf698445a046914d86f944e15";
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setTimeout(() => setIsTrustIndexLoaded(true), 3000); // fallback for loading
      };
      trustindexRef.current.appendChild(script);
      scriptLoadedRef.current = true;
    }
  }, []);

  const ratings = [
    {
      platform: "Google",
      rating: 4.9,
      reviews: 1045,
      logo: "/assets/Review/google.webp",
      gradient: "from-blue-500 to-blue-600",
      color: "#4285F4",
    },
    {
      platform: "LinkedIn",
      rating: 4.9,
      reviews: 789,
      logo: "/assets/Review/linkedin.webp",
      gradient: "from-cyan-500 to-cyan-600",
      color: "#06B6D4",
    },
    {
      platform: "Sulekha",
      rating: 4.9,
      reviews: 967,
      logo: "/assets/Review/sulekha.webp",
      gradient: "from-red-500 to-red-600",
      color: "#E53E3E",
    },
    {
      platform: "Facebook",
      rating: 4.9,
      reviews: 913,
      logo: "/assets/facebook.webp",
      gradient: "from-blue-700 to-blue-800",
      color: "#1877F2",
    },
  ];

  return (
    <>
      <div className="md:mt-16 mt-10">
        <Image
          src={ReviewImg}
          alt="Review Section"
          width={1620}
          height={400}
          className="md:w-[1620px] md:h-[400px] w-full h-auto object-cover "
        />
      </div>
      <div className="flex items-center justify-center gap-4">
        <VideoReviewSection />
      </div>
      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto px-4 lg:px-6 relative">
        {/* Left Section */}
        <div className="w-full lg:w-2/3 p-6 rounded-xl shadow-md text-white">
          <h2 className="text-3xl font-bold text-orange-500 text-center mb-4">
            Learner Testimonials
          </h2>
          <p className="text-gray-300 text-sm text-center mb-6">
            Real feedback from learners who loved our training and support.
          </p>
          <div ref={trustindexRef} className="min-h-[400px] relative">
            {!isTrustIndexLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-40 z-10 rounded-xl">
                <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <div
              className="trustindex-widget"
              data-id="9baf698445a046914d86f944e15"
            ></div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/3 space-y-6 md:mt-28 mt-0">
          {/* Ratings - Enhanced Section */}
          <div className="p-6 rounded-xl shadow-lg text-white">
            <h3 className="text-xl font-semibold text-orange-500 text-center mb-6">
              Our Platform Ratings
            </h3>
            <div className="space-y-3">
              {ratings.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-4 h-[140px] shadow-md transform transition-transform hover:scale-105"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center overflow-hidden p-2`}
                      >
                        <Image
                          src={item.logo}
                          alt={`${item.platform} logo`}
                          width={48}
                          height={48}
                          className="w-[48px] h-[48px] object-contain"
                        />
                      </div>
                      <div className="text-lg font-medium text-white">
                        {item.platform}
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center">
                        <div className="text-xl font-bold text-yellow-400">
                          {item.rating}
                        </div>
                        <div className="text-sm font-normal text-gray-300 ml-1">
                          / 5
                        </div>
                      </div>
                      <div className="text-sm text-gray-300 mt-1">
                        {item.reviews.toLocaleString()}+ reviews
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 flex justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="text-xl"
                        style={{
                          color:
                            star <= item.rating
                              ? "#FBBF24"
                              : star - 0.5 <= item.rating
                              ? "#FBBF24"
                              : "#4B5563",
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 w-full bg-gray-700 rounded-full h-1.5">
                    <div
                      className="h-1.5 rounded-full"
                      style={{
                        width: `${(item.rating / 5) * 100}%`,
                        backgroundColor: item.color,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sticky Review Form */}
          <div
            className={`${
              !isMobile ? "sticky top-[120px]" : ""
            } p-6 rounded-xl shadow-md text-white`}
          >
            <ReviewForm email={"feedback@sevenmentor.com"} />
          </div>
        </div>
      </div>
      <AboveFooterForm />
    </>
  );
};

export default dynamic(() => Promise.resolve(Review), { ssr: false });
