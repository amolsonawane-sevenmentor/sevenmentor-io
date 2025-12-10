"use client"


import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import studentWorkImages from "./StudentWorkImages.js";
import "./StudentWork.css";
import PopupForm from "../../../../../Forms/PopUpForm/PopUpForm.jsx";
import Image from "next/image.js";

const StudentWork = ({ type }) => {
  // Get the images based on the type prop
  const images = studentWorkImages[type] || [];

    const [showPopup, setShowPopup] = useState(false);
  
    const handleOpenPopup = useCallback(() => {
      setShowPopup(true);
    }, []);
  
    const handleClosePopup = useCallback(() => {
      setShowPopup(false);
    }, []);

  // Initialize Embla carousel with autoplay plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 2000 })]
  );

  return (
    <section id="student-work-section" className="student-work-section">
      <div className="containerSD mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Left column - Text content */}
          <div className="lg:w-1/3 text-contentSD">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Student Work Showcase:
              <br />
              Creativity Unleashed
            </h1>
            <h5 className="text-white text-xl font-medium mb-4 md:mb-8">
              Discover the innovative projects of our talented students
            </h5>
            <button onClick={handleOpenPopup} className="apply-now-btn text-orange-500">Book Free Demo</button>
          </div>

          {/* Right column - Carousel */}
          <div className="lg:w-2/3 carousel-containerSD">
            <div className="emblaSD" ref={emblaRef}>
              <div className="embla__containerSD">
                {images.map((src, index) => (
                  <div className="embla__slideSD" key={index}>
                    <div className="slide-innerSD p-4 bg-white rounded-[3rem] cursor-grab">
                      <Image
                        src={src || "/placeholder.svg"}
                        alt={`Student Work ${index}`}
                        className="slide-imageSD select-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
            <PopupForm
              isOpen={showPopup}
              onClose={handleClosePopup}
              title={"Request Callback"}
               mailId="cad@sevenmentor.com"
          contactNo={"02071173025"}
          bannerTitle={"Fashion Course At SevenMentor"}
            />
          )}
    </section>
  );
};

export default StudentWork;
