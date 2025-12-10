"use client";

import React, { useEffect, useState } from "react";
import "./StickyButton.css";
import { FaCirclePlay } from "react-icons/fa6";

import PopupForm from "../Forms/PopUpForm/PopUpForm";
import Image from "next/image";
import shimmer from "../../../public/assets/shimmer.webp";
import Link from "next/link";

const StickyButton = ({ mailId, contactNo, bannerTitle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (typeof window === "undefined") return; // Prevent running on server

    const handleScroll = () => {
      setIsVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Run once initially in case user already scrolled
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed left-0 top-[20%] sm:top-1/2 transform -translate-y-1/2 z-[999] transition-transform duration-300 ${
          isVisible ? "translate-x-0" : "-translate-x-full"
        } block`}
      >
        <div className="relative inline-block">
          <button
            id="book-for-demo-btn"
            aria-label="Request a Callback"
            onClick={handleOpenPopup}
            className="custom-ribbon-btn text-start flex items-center cursor-pointer p-2"
          >
            <FaCirclePlay className="text-white md:text-xl text-lg" />
            <span className="pr-11 pl-1 md:text-sm text-[12px] font-normal">
              Get Me <br />
              <div className="md:text-lg text-lg font-bold tracking-tight -mt-1">
                JOB
              </div>
            </span>
            <Image
              aria-label="Shimmer Animation"
              src={shimmer}
              alt="shimmer animation"
              className="absolute top-0 left-0 w-[44px] h-[58px] shimmer-effect"
              width={44}
              height={48}
              style={{
                objectFit: "cover",
              }}
            />
          </button>
        </div>
      </div>

      {showPopup && (
        <PopupForm
          isOpen={showPopup}
          onClose={handleClosePopup}
          title={"Request Callback"}
          mailId={mailId}
          contactNo={contactNo}
          bannerTitle={bannerTitle}
        />
      )}
    </>
  );

//   return (
//     <>
//       <div
//         className={`fixed left-0 top-[20%] sm:top-1/2 transform -translate-y-1/2 z-[999] transition-transform duration-300 ${
//           isVisible ? "translate-x-0" : "-translate-x-full"
//         } block`}
//       >
//         <div className="relative inline-block">
//           <Link
//             href="/events"
//             id="book-for-demo-btn"
//             aria-label="Request a Callback"
//             className="custom-ribbon-btn text-start flex items-center cursor-pointer p-2"
//           >
//             <FaCirclePlay className="text-white md:text-xl text-lg" />
//             <span className="pr-11 pl-1 font-normal">
//               <div className="md:text-lg text-lg font-bold tracking-tight">
//                 FREE
//               </div>
//               <div className="md:text-sm text-[12px] font-normal -mt-1">
//                 EVENTS
//               </div>
//             </span>

//             <Image
//               aria-label="Shimmer Animation"
//               src={shimmer}
//               alt="shimmer animation"
//               className="absolute top-0 left-0 w-[44px] h-[58px] shimmer-effect"
//               width={44}
//               height={48}
//               style={{
//                 objectFit: "cover",
//               }}
//             />
//           </Link>
//         </div>
//       </div>

//       {showPopup && (
//         <PopupForm
//           isOpen={showPopup}
//           onClose={handleClosePopup}
//           title={"Request Callback"}
//           mailId={mailId}
//           contactNo={contactNo}
//           bannerTitle={bannerTitle}
//         />
//       )}
//     </>
//   );
 };
export default StickyButton;
