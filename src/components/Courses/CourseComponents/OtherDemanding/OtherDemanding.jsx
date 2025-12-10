"use client"
import { useEffect, useState, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import PopUpForm from "../../../Forms/PopUpForm/PopUpForm.jsx"
import { cfUrl } from "../../../../services/AxiosInstance.js"

const OtherDemanding = ({ courses, data, domain }) => {
  const [autoplayEnabled, setAutoplayEnabled] = useState(true)
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
    ],
  )

  const [cards, setCards] = useState([])
  const [showPopup, setShowPopup] = useState(false)
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedEmail, setSelectedEmail] = useState("")
  const [selectedContactNo, setSelectedContactNo] = useState("")
  const [selectedBannerTitle, setSelectedBannerTitle] = useState("")

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  // Generate unique random numbers for student counts
  const generateUniqueNumbers = (count) => {
    const usedNumbers = new Set()
    const numbers = []

    for (let i = 0; i < count; i++) {
      let number
      do {
        number = Math.floor(Math.random() * 2863) + 2000
      } while (usedNumbers.has(number))
      usedNumbers.add(number)
      numbers.push(number)
    }

    return numbers
  }

  useEffect(() => {
    let processedCards = []

    // CASE 1: API data is provided
    if (courses && Array.isArray(courses) && courses.length > 0) {
      const studentNumbers = generateUniqueNumbers(courses.length)

      processedCards = courses.map((course, index) => ({
        title: course.headtitle,
        path: course.slug && course.slug.startsWith("/") ? course.slug : `/${course.slug || ""}`,
        subtitle: (course.banner && course.banner[0]?.description1) || "No description available",
        image: (course.banner && course.banner[0]?.path?.includes("https"))
          ? course.banner[0]?.path
          : (course.banner && course.banner[0]?.path 
              ? cfUrl + course.banner[0]?.path 
              : "/placeholder.svg?height=300&width=200"),
        email: course.email || "registration@sevenmentor.com",
        contactNo: course.phoneno || "+91 8888888888",
        bannerTitle: (course.banner && course.banner[0]?.title) || "NA",
        enrolledStudents: studentNumbers[index],
        blurDataUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
      }))
    }
    // CASE 2: Static data is provided
    else if (
      data &&
      domain &&
      data.IT_Courses &&
      data.IT_Courses[domain] &&
      Array.isArray(data.IT_Courses[domain]) &&
      data.IT_Courses[domain][0] &&
      typeof data.IT_Courses[domain][0] === "object"
    ) {
      try {
        const domainObject = data.IT_Courses[domain][0]
        const courseKeys = Object.keys(domainObject)
        const studentNumbers = generateUniqueNumbers(courseKeys.length)

        processedCards = courseKeys.map((key, index) => {
          const course = domainObject[key]
          return {
            title: course.title,
            path: course.path || "/", // Keep the path as is, including any leading slash
            subtitle: course.description || "No description available",
            image: course.imgSrc || "/placeholder.svg?height=300&width=200",
            email: "registration@sevenmentor.com",
            contactNo: "+91 8888888888",
            bannerTitle: course.title,
            enrolledStudents: studentNumbers[index],
            blurDataUrl: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
          }
        })
      } catch (error) {
        console.error("Error processing static data:", error)
      }
    }

    // Duplicate cards if less than 5 to ensure smooth carousel
    if (Array.isArray(processedCards) && processedCards.length > 0) {
      setCards(processedCards.length < 5 ? [...processedCards, ...processedCards] : processedCards)
    } else {
      setCards([])
    }
  }, [courses, data, domain])

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit()
    }
  }, [emblaApi, cards])

  const handleOpenPopup = (email, contactNo, bannerTitle) => {
    setSelectedEmail(email)
    setSelectedContactNo(contactNo)
    setSelectedBannerTitle(bannerTitle)
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <div className="relative bg-black pt-10">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-6 tracking-wide px-6">
        Explore Other <span className="text-orange-500">Demanding</span> Courses
      </h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="embla overflow-hidden py-4" ref={emblaRef}>
          <div className="flex">
            {Array.isArray(cards) && cards.length > 0 ? (
              cards.map((card, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 px-2 sm:px-3 md:px-4"
                  onMouseEnter={() => setAutoplayEnabled(false)}
                  onMouseLeave={() => setAutoplayEnabled(true)}
                >
                  <Link href={card.path}>
                    <div
                      className="relative rounded-2xl border-2 border-white bg-white h-full shadow-md transition-all duration-300 transform hover:cursor-pointer hover:shadow-[0_0_8px_2px_rgba(249,115,22,0.6)]"
                      style={{
                        height: "350px",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      <div className="absolute inset-0 z-0">
                        <Image
                          src={card.image}
                          alt={card.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          style={{ 
                            objectFit: "cover",
                            objectPosition: "center",
                          }}
                          priority={index < 3}
                          placeholder="blur"
                          blurDataURL={card.blurDataUrl}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/70"></div>
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
                              <div className="flex items-center !whitespace-nowrap  justify-center gap-3 pl-4 text-sm text-white">
                                <Users className="h-6 w-6 text-orange-500" fill="orange" />
                                <span>
                                  <span className="text-lg font-bold text-orange-500">
                                    {card.enrolledStudents && card.enrolledStudents.toLocaleString()}
                                  </span>{" "}
                                  <span className="text-white/80 font-medium">Learning Today</span>
                                </span>
                              </div>
                              <button
                                id="enroll-btn"
                                aria-label="Enroll Now"
                                className="ml-auto border whitespace-nowrap  border-orange-700/20 px-4 py-2 rounded-full bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 active:scale-95 transition-transform"
                                onClick={(e) => {
                                  e.preventDefault()
                                  handleOpenPopup(card.email, card.contactNo, card.bannerTitle)
                                }}
                              >
                                Enroll Now
                              </button>
                            </div>
                          </motion.div>
                          <div className="px-3 py-2 flex items-center gap-1 bg-white border-2 border-orange-700 text-xs sm:text-sm font-semibold rounded-full hover:from-orange-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105">
                            Explore Course
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center text-white mt-8 w-full">No courses available for the selected domain.</p>
            )}
          </div>
        </div>
        <button
          id="prev-btn"
          aria-label="Previous Slide"
          className="absolute z-10 left-[35%] bottom-[-10%] sm:left-6 sm:top-[62%] -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-lg"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
        </button>
        <button
          id="next-btn"
          aria-label="Next Slide"
          className="absolute z-10 right-[35%] bottom-[-10%] sm:right-6 sm:top-[62%] -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-lg"
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
          id="OtherDemandingCoursesPopupSubmit"
        />
      )}
    </div>
  )
}

export default OtherDemanding