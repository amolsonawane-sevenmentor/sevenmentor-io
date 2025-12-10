"use client"

import { useState, useCallback, memo } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import FranchiseForm from "../Forms/FranchiseForm.jsx"

// Memoized Right Content Component
const RightContent = memo(({ onBookDemo }) => (
  <div className="space-y-6 text-center px-1 md:px-2 md:text-left w-full p-0">
    <div className="text-left">
      <ul className="space-y-3 text-gray-700">
        <li>
          <strong className="text-orange-500">Tailored Onboarding Programs: </strong>
          <span className="text-gray-100">
            Custom-designed onboarding programs that meet specific needs of your organization and new hires.
          </span>
        </li>
        <li>
          <strong className="text-orange-500">Role-Specific Training: </strong>
          <span className="text-gray-100">
            Focused training that aligns with specific roles and responsibilities of new employees
          </span>
        </li>
        <li>
          <strong className="text-orange-500">Expert Guidance:</strong>{" "}
          <span className="text-gray-100">
            Experienced professionals providing guidance and support throughout the onboarding process.
          </span>
        </li>
        <li>
          <strong className="text-orange-500">Foundational Knowledge:</strong>{" "}
          <span className="text-gray-100">
            Equipping new hires with essential knowledge and skills applications, infrastructure, data, AI and modern
            workplaces.
          </span>
        </li>
        <li>
          <strong className="text-orange-500">Hands-On Experience:</strong>{" "}
          <span className="text-gray-100">
            Practical training that allows new hires to apply their knowledge in real-world scenarios.
          </span>
        </li>
        <li>
          <strong className="text-orange-500">Continuous Support:</strong>
          <span className="text-gray-100">
            Ongoing support to ensure new hires continue to grow and succeed in their roles.
          </span>
        </li>
        <li>
          <strong className="text-orange-500">Emerging Technologies:</strong>
          <span className="text-gray-100">
            Training in the latest technologies to prepare new hires for future challenges.
          </span>
        </li>
      </ul>
    </div>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onBookDemo}
      className="group px-4 py-2 text-md font-semibold bg-orange-600 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:shadow-orange-500/50 hover:bg-orange-700 border border-white/60 cursor-pointer"
      aria-label="Book a free demo session"
    >
      <span className="flex items-center justify-center">
        BOOK FREE DEMO
        <ChevronRight className="inline-block ml-2 w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      </span>
    </motion.button>
  </div>
))

RightContent.displayName = "RightContent"

// Memoized Video Player Component
const VideoPlayer = memo(({ videoLoaded, onVideoLoad }) => (
  <div
    className="relative w-full aspect-video rounded-lg border-2 border-orange-500 shadow-lg overflow-hidden cursor-pointer"
    onClick={onVideoLoad}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        onVideoLoad()
      }
    }}
    aria-label="Play educational video about SevenMentor onboarding"
  >
    {videoLoaded ? (
      <iframe
        src="https://www.youtube.com/embed/dUOVbUa094A?si=mcowoTzP425mTFtO&autoplay=1&mute=1"
        title="SevenMentor Educational Video - Onboarding Programs"
        className="absolute inset-0 w-full h-full pointer-events-auto !object-cover"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        loading="lazy"
      />
    ) : (
      <div className="absolute inset-0 flex items-center justify-center bg-black group">
        {/* Thumbnail */}
        <div className="relative w-full h-full">
          <Image
            src="\assets\IndustryHomeSection/SevenMentorYT.webp"
            alt="SevenMentor onboarding program video thumbnail"
            fill
            className="object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105 opacity-70 hover:opacity-100"
            priority={false}
            loading="lazy"
          />
        </div>

        {/* Play Icon */}
        <div className="absolute">
          <Image
            src="/assets/IndustryHomeSection/ytIcon.webp"
            alt="Play video button"
            width={96}
            height={96}
            className="rounded-full shadow-lg group-hover:scale-105 transition-transform duration-300 ease-in-out w-16 h-16 md:w-24 md:h-24"
            loading="lazy"
          />
        </div>
      </div>
    )}
  </div>
))

VideoPlayer.displayName = "VideoPlayer"

// Main VideoSection Component
const VideoSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  const handleOpenPopup = useCallback(() => {
    setShowPopup(true)
  }, [])

  const handleClosePopup = useCallback(() => {
    setShowPopup(false)
  }, [])

  const handleVideoLoad = useCallback(() => {
    setVideoLoaded(true)
  }, [])

  return (
    <div>
      <h2 className="text-2xl md:text-4xl text-center font-bold text-gray-100 mb-2 mt-3 p-3">
        Where Does <span className="text-orange-500">SevenMentor</span> Come in?
      </h2>

      {/* Separator */}
      <div className="flex items-center justify-center gap-4 my-5">
        <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        <span className="text-orange-500 font-bold md:text-md text-sm text-center">
          &quot;Seamless Onboarding, Exceptional Growth!&quot; 🚀
        </span>
        <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      </div>

      <div className="bg-gradient-to-r from-orange-500/10 to-zinc-800/10 text-white flex justify-center mt-2">
        <div className="mx-auto px-3 md:px-24 pb-5 md:py-10">
          <div className="grid gap-8 md:gap-14 md:grid-cols-2 items-center justify-around">
            <VideoPlayer videoLoaded={videoLoaded} onVideoLoad={handleVideoLoad} />
            <RightContent onBookDemo={handleOpenPopup} />
          </div>
        </div>

        {/* Franchise Form Popup */}
        {showPopup &&

          <FranchiseForm
            isOpen={showPopup}
            onClose={handleClosePopup}
            title="Book Free Demo"
            mailSubject={"New Corporate Training Free Demo Reqest Received"}
            userEmailSubject={"Thank You, Your Demo Request Has Been Received – SevenMentor"}
            contactNo={"7360000325"}
            bannerTitle={"Corporate Training Program"}
            emailRoute={"/corporate-form"}
            mailId={"corporate@sevenmentor.com"}
          />
        }
      </div>
    </div>
  )
}

export default VideoSection
