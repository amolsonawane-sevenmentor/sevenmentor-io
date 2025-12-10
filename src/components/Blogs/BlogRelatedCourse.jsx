'use client';

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PopUpForm from "../Forms/PopUpForm/PopUpForm";
import { cfUrl } from "../../services/AxiosInstance";

const generateUniqueNumbers = (count) => {
  // This function was referenced but not defined in the original code
  // Adding a simple implementation
  const numbers = [];
  for (let i = 0; i < count; i++) {
    numbers.push(Math.floor(Math.random() * 500) + 100);
  }
  return numbers;
};

const BlogRelatedCourse = ({ courses, data, domain }) => {
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
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedContactNo, setSelectedContactNo] = useState("");
  const [selectedBannerTitle, setSelectedBannerTitle] = useState("");

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

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
    let processedCards = [];

    // CASE 1: API data is provided
    if (courses && Array.isArray(courses) && courses.length > 0) {
      processedCards = courses.map((course, index) => ({
        title: course.title,
        path: course.slug,
        subtitle: course.banner[0]?.description1 || "No description available",
        image: course.banner[0]?.path?.includes("https")
          ? course.banner[0]?.path
          : cfUrl + course.banner[0]?.path ||
            "/placeholder.svg?height=300&width=200",
        email: course.email || "registration@sevenmentor.com",
        contactNo: course.phoneno,
        bannerTitle: course.banner[0]?.title || "NA",
      }));
    }
    // CASE 2: Static data is provided
    else if (
      data &&
      domain &&
      data.IT_Courses &&
      data.IT_Courses[domain] &&
      Array.isArray(data.IT_Courses[domain])
    ) {
      try {
        const domainObject = data.IT_Courses[domain][0];
        const courseKeys = Object.keys(domainObject);
        const studentNumbers = generateUniqueNumbers(courseKeys.length);

        processedCards = courseKeys.map((key, index) => {
          const course = domainObject[key];
          return {
            title: course.title,
            path: course.path, // Keep the path as is, including any leading slash
            subtitle: course.description || "No description available",
            image: course.imgSrc,
            email: "registration@sevenmentor.com",
            contactNo: "+91 8888888888",
            bannerTitle: course.title,
            enrolledStudents: studentNumbers[index],
          };
        });
      } catch (error) {
        console.error("Error processing static data:", error);
      }
    }

    // Duplicate cards if less than 5 to ensure smooth carousel
    if (processedCards.length > 0) {
      setCards(
        processedCards.length < 5
          ? [...processedCards, ...processedCards]
          : processedCards
      );
    } else {
      setCards([]);
    }
  }, [courses, data, domain]);

  useEffect(() => {
    if (emblaApi) emblaApi.reInit();
  }, [emblaApi]);
  
  const handleOpenPopup = (email, contactNo, bannerTitle) => {
    setSelectedEmail(email);
    setSelectedContactNo(contactNo);
    setSelectedBannerTitle(bannerTitle);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  
  return (
    <div className="relative">
      <h2 className="text-center text-xl md:text-3xl font-bold text-white mb-6 tracking-wide px-6">
        Explore Other <span className="text-orange-500">Demanding</span> Courses
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden mb-12 sm:mb-0">
        <div className="embla overflow-hidden py-4" ref={emblaRef}>
          <div className="flex">
            {cards.length > 0 ? (
              cards.map((card, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_100%] lg:flex-[0_0_50%] min-w-0 px-2 sm:px-3 md:px-4"
                  onMouseEnter={() => setAutoplayEnabled(false)}
                  onMouseLeave={() => setAutoplayEnabled(true)}
                >
                  <Link href={`/${card.path}`} className="block h-full">
                    <div
                      className="relative rounded-2xl border-2 border-white bg-white h-full shadow-md transition-all duration-300 transform hover:cursor-pointer hover:shadow-[0_0_8px_2px_rgba(249,115,22,0.6)]"
                      style={{
                        height: "300px",
                        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7)), url('${card.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
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
                            <div className="flex items-center gap-4 min-w-full rounded-full p-1 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md">
                              <span className="px-3 text-black py-2 flex items-center gap-1 bg-white border-2 border-orange-700 text-xs sm:text-sm font-semibold rounded-full text-nowrap">
                                Learn More
                                <ArrowRight className="w-5 h-5" />
                              </span>
                              <button
                                className="cursor-pointer ml-auto border border-orange-700/20 px-4 py-2 rounded-full bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 active:scale-95 transition-transform text-nowrap"
                                onClick={(e) => {
                                  e.preventDefault(); // prevent Link navigation
                                  handleOpenPopup(
                                    card.email,
                                    card.contactNo,
                                    card.bannerTitle
                                  );
                                }}
                              >
                                Enroll Now
                              </button>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </Link>
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
          className="cursor-pointer absolute z-10 left-[35%] bottom-[-13%] sm:left-0 sm:top-[60%] -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-lg "
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        </button>
        <button
          className="cursor-pointer absolute z-10 right-[35%] bottom-[-13%] sm:right-0 sm:top-[60%] -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-lg "
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
          mailId={selectedEmail}
          contactNo={selectedContactNo}
          bannerTitle={selectedBannerTitle}
        />
      )}
    </div>
  );
};

export default BlogRelatedCourse;