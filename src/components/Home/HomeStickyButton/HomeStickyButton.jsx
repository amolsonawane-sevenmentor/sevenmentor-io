import React, { useEffect, useState } from "react";
import "./HomeStickyButton.css";
import { FaCirclePlay } from "react-icons/fa6";
import shimmer from "../../assets/shimmer.webp";
import HomePopUpForm from "./HomePopUpForm";
import Image from "next/image";

const HomeStickyButton = ({ mailId, contactNo, bannerTitle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed left-0 top-1/2 transform -translate-y-1/2 z-[999] transition-transform duration-300 ${isVisible ? "translate-x-0" : "-translate-x-full"
          } block`}
      >
        <div className="relative inline-block">
          <button
            id="book-for-demo-btn"
            aria-label="Request a Callback"
            onClick={handleOpenPopup}
            className="custom-ribbon-btn text-start flex items-center"
          >
            <FaCirclePlay className="text-white md:text-xl text-lg ml-1" />
            <span className="pr-10 pl-1 md:text-sm text-[12px] font-normal">
              Book For <br />
              <div className="md:text-xl text-lg font-bold tracking-wider -mt-1">DEMO</div>
            </span>
            <Image
              aria-label="Shimmer Animation"
              src={shimmer || "/placeholder.svg"}
              alt="shimmer animation"
              className="absolute top-0 left-0 w-[44px] h-[48px] shimmer-effect"
              width={44}
              height={48}
              style={{
                objectFit: "cover",
                height: "100%",
              }}
            />
          </button>
        </div>
      </div>

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
    </>
  );
};

export default HomeStickyButton;