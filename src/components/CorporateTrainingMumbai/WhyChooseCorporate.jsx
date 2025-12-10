"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import "../Home/HomeBanner/HomeBanner.css"


export default function WhyChooseCorporate({ title }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const leftColumnItems = [
    { imageSrc: "/assets/WhyChoose/live_projects_with_hands_on_experience.webp", text: "Live Projects With Hands-on Experience " },
    {
      imageSrc: "/assets/WhyChoose/corporate_soft_skills_&_personality_building_sessions.webp",
      text: "Corporate Soft-skills & Personality Building Sessions",
    },
    {
      imageSrc: "/assets/WhyChoose/digital_online_classroom_hybrid_batches.webp",
      text: "Digital Online, Classroom, Hybrid Batches",
    },
    {
      imageSrc: "/assets/WhyChoose/interview_calls_assistance_and_mock_sessions.webp",
      text: "Interview Calls Assistance & Mock Sessions",
    },
  ]

  const rightColumnItems = [
    {
      imageSrc: "/assets/WhyChoose/be_different_with_master_certificate.webp",
      text: "Be Different With Master Certificate",
    },
    { imageSrc: "/assets/WhyChoose/latest_market_technology_and_practical_training.webp", text: "Latest Market Technology & Practical Training" },
    {
      imageSrc: "/assets/WhyChoose/resume_building_session_and_job_portals_training.webp",
      text: "Resume Building Session & Job Portals Training",
    },
    { imageSrc: "/assets/WhyChoose/enhanced_capstone_projects_for_learning.webp", text: "Enhanced Capstone Projects for learning" },
  ]

  const allItems = [...leftColumnItems, ...rightColumnItems]

  return (
    <section className="py-5 relative overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Dynamic background with circuit-like patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="w-full px-4 md:px-6 lg:px-8 relative">
        {/* Header with futuristic design */}
        <div className="relative text-center ">
          <div className="absolute left-1/2 top-0 h-12 w-0.5 bg-orange-500 transform -translate-x-1/2 -translate-y-full opacity-30"></div>

          <h2 className="text-2xl md:text-4xl font-bold relative inline-block">
            <span className="bg-clip-text text-white bg-gradient-to-r from-orange-400 to-orange-500">
              Why is <span className="text-orange-500">SevenMentor&apos;s</span> Corporate Training Program
            </span>
            <span className="block mt-2 text-white">
              A <span className="text-orange-500">Smart Choice</span>
            </span>

            {/* Decorative elements */}
            <span className="absolute -left-6 top-1/2 w-4 h-4 border-l-2 border-t-2 border-orange-500 transform -translate-y-1/2"></span>
            <span className="absolute -right-6 top-1/2 w-4 h-4 border-r-2 border-t-2 border-orange-500 transform -translate-y-1/2"></span>
          </h2>

          {/* Tech-inspired divider */}
          <div className="flex items-center justify-center my-6">
            <div className="h-0.5 w-16 bg-gradient-to-r from-transparent to-orange-500"></div>
            <div className="mx-2 w-3 h-3 bg-black border border-orange-500 rotate-45"></div>
            <div className="h-0.5 w-32 bg-orange-500"></div>
            <div className="relative px-6 py-2 bg-black border border-orange-500 text-white text-sm font-medium z-10">
              <span className="text-orange-400">Empower Your Workforce, Elevate Your Success!</span> 🚀
            </div>
            <div className="h-0.5 w-32 bg-orange-500"></div>
            <div className="mx-2 w-3 h-3 bg-black border border-orange-500 rotate-45"></div>
            <div className="h-0.5 w-16 bg-gradient-to-l from-transparent to-orange-500"></div>
          </div>
        </div>

        {/* Mobile view - Vertical carousel */}
        <div className="block md:hidden">
          <div className="relative max-h-[70vh] overflow-y-auto px-2 pb-6 custom-scrollbar">
            <div className="space-y-4">
              {allItems.map((item, index) => (
                <HexFeatureCard
                  key={`mobile-${index}`}
                  imageSrc={item.imageSrc}
                  text={item.text}
                  index={index}
                  delay={index * 0.1}
                  animationComplete={animationComplete}
                  isHovered={hoveredIndex === index}
                  onHover={() => setHoveredIndex(index)}
                  onLeave={() => setHoveredIndex(null)}
                  isMobile={true}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop view - Hexagon grid layout */}
        <div className="hidden md:block">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="space-y-6">
              {leftColumnItems.map((item, index) => (
                <HexFeatureCard
                  key={`left-${index}`}
                  imageSrc={item.imageSrc}
                  text={item.text}
                  index={index}
                  delay={index * 0.1}
                  animationComplete={animationComplete}
                  isHovered={hoveredIndex === index}
                  onHover={() => setHoveredIndex(index)}
                  onLeave={() => setHoveredIndex(null)}
                />
              ))}
            </div>
            <div className="space-y-6 mt-12">
              {rightColumnItems.map((item, index) => (
                <HexFeatureCard
                  key={`right-${index}`}
                  imageSrc={item.imageSrc}
                  text={item.text}
                  index={index + 4}
                  delay={(index + 4) * 0.1}
                  animationComplete={animationComplete}
                  isHovered={hoveredIndex === index + 4}
                  onHover={() => setHoveredIndex(index + 4)}
                  onLeave={() => setHoveredIndex(null)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const HexFeatureCard = ({
  imageSrc,
  text,
  index,
  delay,
  animationComplete,
  isHovered,
  onHover,
  onLeave,
  isMobile = false,
}) => {
  const baseClasses = `
    relative group flex items-center gap-4
    transition-all duration-500
    ${animationComplete ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
  `

  return (
    <div className={baseClasses} style={{ transitionDelay: `${delay}s` }} onMouseEnter={onHover} onMouseLeave={onLeave}>
      {/* Hexagon shape and highlights */}
      <div className="relative">
        {/* Outer ring with glow */}
        <div
          className={`
          absolute inset-0
          ${isHovered ? "scale-110 opacity-100" : "scale-100 opacity-70"}
          transition-all duration-300
        `}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <polygon
              points="40,5 70,23 70,57 40,75 10,57 10,23"
              fill="none"
              stroke="url(#hexGradient)"
              strokeWidth="1.5"
              className={`${isHovered ? "!animate-spin-slow" : ""}`}
            />
            <defs>
              <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#ea580c" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Inner hexagon with image */}
        <div
          className={`
          relative w-16 h-16 flex items-center justify-center
          ${isHovered ? "scale-105" : "scale-100"}
          transition-all duration-300
        `}
        >
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <polygon
              points="32,4 56.5,19 56.5,45 32,60 7.5,45 7.5,19"
              fill={isHovered ? "rgba(249, 115, 22, 0.15)" : "rgba(249, 115, 22, 0.15)"}
              stroke={isHovered ? "#ea580c" : "#ea580c"}
              strokeWidth="1.5"
              className="transition-all duration-300"
            />
          </svg>

          <div className="relative z-10">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={text}
              width={32}
              height={32}
              className={`
                w-8 h-8 object-contain filter
                ${isHovered ? "brightness-110 drop-shadow-glow-orange" : "brightness-90"}
                transition-all duration-300
              `}
            />
          </div>

          {/* Pulse effect on hover */}
          {isHovered && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-full h-full animate-ping-slow opacity-30">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <polygon
                    points="32,4 56.5,19 56.5,45 32,60 7.5,45 7.5,19"
                    fill="none"
                    stroke="#ea580c"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Text content with tech-inspired design */}
      <div
        className={`
        relative flex-1 p-4 pl-5
        ${isMobile ? "pr-8" : "pr-28"}
        border border-gray-700
        ${isHovered ? "border-orange-500 bg-gradient-to-r from-gray-900 to-gray-800" : "bg-gray-900/70"}
        transition-all duration-300
      `}
      >
        {/* Corner accents */}
        <div
          className={`
          absolute top-0 left-0 w-3 h-3 border-t border-l
          ${isHovered ? "border-orange-500" : "border-gray-600"}
          transition-colors duration-300
        `}
        ></div>
        <div
          className={`
          absolute bottom-0 right-0 w-3 h-3 border-b border-r
          ${isHovered ? "border-orange-500" : "border-gray-600"}
          transition-colors duration-300
        `}
        ></div>

        {/* Left edge design */}
        <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
          <div
            className={`
            w-2 h-10 flex flex-col justify-between items-center
          `}
          >
            <div
              className={`
              w-2 h-2 rounded-full
              ${isHovered ? "bg-orange-500" : "bg-gray-700"}
              transition-colors duration-300
            `}
            ></div>
            <div
              className={`
              w-0.5 h-6
              ${isHovered ? "bg-orange-500" : "bg-gray-700"}
              transition-colors duration-300
            `}
            ></div>
            <div
              className={`
              w-2 h-2 rounded-full
              ${isHovered ? "bg-orange-500" : "bg-gray-700"}
              transition-colors duration-300
            `}
            ></div>
          </div>
        </div>

        <p
          className={`
          text-md font-medium
          ${isHovered ? "text-white" : "text-gray-300"}
          transition-colors duration-300
        `}
        >
          {text}
        </p>

        {/* Right arrow indicator */}
        <div
          className={`
          absolute top-1/2 right-3 transform -translate-y-1/2
          ${isHovered ? "opacity-100" : "opacity-0"}
          transition-all duration-300
        `}
        >
          <svg className="w-5 h-5 text-orange-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 5L21 12M21 12L14 19M21 12H3"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
