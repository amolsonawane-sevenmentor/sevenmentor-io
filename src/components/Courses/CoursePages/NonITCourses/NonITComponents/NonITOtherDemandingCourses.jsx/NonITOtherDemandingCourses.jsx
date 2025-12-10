"use client"

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Import Image from next/image
import { motion } from "framer-motion";
import PopUpForm from "../../../../../Forms/PopUpForm/PopUpForm.jsx";

const NonITOtherDemandingCourses = ({ data, domain }) => {
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
      direction: "ltr",
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        playOnInit: autoplayEnabled,
      }),
    ]
  );

  const [cards, setCards] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (data) {
      const courses = [];
      const domainCourses = data[domain];

      if (domainCourses) {
        const usedNumbers = new Set();

        domainCourses.forEach((course) => {
          Object.values(course).forEach((nestedCourse) => {
            if (nestedCourse?.title && nestedCourse?.description) {
              const generateUniqueNumber = () => {
                let number;
                do {
                  number = Math.floor(Math.random() * 2863) + 2000;
                } while (usedNumbers.has(number));
                usedNumbers.add(number);
                return number;
              };

              const enrolledStudents = generateUniqueNumber();

              courses.push({
                title: nestedCourse.title,
                path: nestedCourse.path,
                subtitle: nestedCourse.description,
                image:
                  nestedCourse.imgSrc ||
                  "/placeholder.svg?height=300&width=200",
                enrolledStudents: enrolledStudents,
                blurDataUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=" // optional blur placeholder
              });
            }
          });
        });
      }

      courses.length < 5
        ? setCards([...courses, ...courses])
        : setCards([...courses]);
    }
  }, [data, domain]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, cards]);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative bg-black pt-10">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide px-6">
        Explore Other <span className="text-orange-500">Demanding</span> Courses
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="embla overflow-hidden py-4" ref={emblaRef}>
          <div className="flex">
            {cards.length > 0 ? (
              cards.map((card, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 px-2 sm:px-3 md:px-4"
                  onMouseEnter={() => setAutoplayEnabled(false)}
                  onMouseLeave={() => setAutoplayEnabled(true)}
                >
                  <div
                    className="relative rounded-2xl border-2 border-white bg-white h-[350px] shadow-md transition-all duration-300 transform hover:cursor-pointer hover:shadow-[0_0_8px_2px_rgba(249,115,22,0.6)]"
                  >
                    {/* Image container with relative position */}
                    <div className="relative w-full h-full rounded-2xl overflow-hidden">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index < 3} // prioritize first few images
                        loading={index < 3 ? "eager" : "lazy"}
                        placeholder={card.blurDataUrl ? "blur" : "empty"}
                        blurDataURL={card.blurDataUrl}
                        style={{ objectFit: "cover", objectPosition: "center" }}
                      />
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70 rounded-2xl" />
                    </div>
                    <div className="absolute rounded-2xl bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/70 to-transparent">
                      <h2 className="text-xl sm:text-2xl text-center font-bold text-gray-50 mb-2 line-clamp-2">
                        {card.title}
                      </h2>
                      <p className="text-sm sm:text-md font-semibold text-gray-200 mb-4 line-clamp-3">
                        {card.subtitle}
                      </p>
                      <div className="flex flex-col-reverse gap-4 justify-between items-center">
                        <motion.div
                          className="flex-1"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div className="flex items-center gap-4 min-w-full rounded-full border-2 border-orange-500 bg-gradient-to-r from-black via-white/10 to-black p-1 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md">
                            <div className="flex items-center justify-center gap-3 pl-4 text-sm text-white">
                              <Users
                                className="h-6 w-6 text-orange-500"
                                fill="orange"
                              />
                              <span>
                                <span className="text-lg font-bold text-orange-500">
                                  {card.enrolledStudents.toLocaleString()}
                                </span>{" "}
                                <span className="text-white/80 font-medium">
                                  Learning Today
                                </span>
                              </span>
                            </div>
                            <button
                              className="ml-auto border border-orange-700/20 px-4 py-2 rounded-full bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 active:scale-95 transition-transform whitespace-nowrap"
                              onClick={handleOpenPopup}
                            >
                              Enroll Now
                            </button>
                          </div>
                        </motion.div>
                        <Link
                          href={card.path}
                          className="px-3 py-2 flex items-center gap-1 bg-white border-2 border-orange-700 text-xs sm:text-sm font-semibold rounded-full hover:from-orange-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
                        >
                          Learn More
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-white mt-8 w-full">
                No courses available for the selected domain.
              </p>
            )}
          </div>
        </div>
        <button
          className="absolute z-10 left-[35%] bottom-[-10%] sm:left-6 sm:top-[62%] -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-lg "
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        </button>
        <button
          className="absolute z-10 right-[35%] bottom-[-10%] sm:right-6 sm:top-[62%] -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-lg "
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        </button>
      </div>
      {showPopup && (
        <PopUpForm
          isOpen={showPopup}
          onClose={handleClosePopup}
          title="Request Callback"
          id="NonItOtherdemandingPopupSubmit"
        />
      )}
    </div>
  );
};

export default NonITOtherDemandingCourses;
