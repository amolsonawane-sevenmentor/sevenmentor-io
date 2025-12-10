"use client"

import { useState, useRef, memo, useCallback, useMemo } from "react"
import Image from "next/image"

// Memoized card data to prevent recreation
const expertiseCards = [
  {
    id: "genai",
    title: "GENAI",
    number: "08",
    catalogs: "Product Catalogs",
    description:
      "Our expertise is built on the understanding that customer-facing mandates are the building blocks of business and need continuous, deliberate sharpening.",
    image: "/assets/corporate/expert1.webp",
    colors: {
      primary: "indigo-500",
      secondary: "indigo-400",
      gradient: "from-indigo-600/50 via-blue-900/100 to-indigo-500/50",
      accent: "indigo-300",
      shadow: "indigo-500",
    },
  },
  {
    id: "leadership",
    title: "LEADERSHIP & DIVERSITY",
    number: "14",
    catalogs: "Product Catalogs",
    description:
      "Our expertise is built on the understanding that customer-facing mandates are the building blocks of business and need continuous, deliberate sharpening.",
    image: "/assets/corporate/expert2.webp",
    colors: {
      primary: "emerald-500",
      secondary: "emerald-400",
      gradient: "from-emerald-600/50 via-teal-900/100 to-emerald-500/50",
      accent: "emerald-300",
      shadow: "emerald-500",
    },
  },
  {
    id: "sales",
    title: "SALES & SERVICE",
    number: "06",
    catalogs: "Product Catalogs",
    description:
      "Our expertise is built on the understanding that customer-facing mandates are the building blocks of business and need continuous, deliberate sharpening.",
    image: "/assets/corporate/expert3.webp",
    colors: {
      primary: "rose-500",
      secondary: "rose-400",
      gradient: "from-rose-600/50 via-pink-900/100 to-rose-500/50",
      accent: "rose-300",
      shadow: "rose-500",
    },
  },
  {
    id: "tech",
    title: "TECH & DATA",
    number: "05",
    catalogs: "Product Catalogs",
    description:
      "Our expertise is built on the understanding that customer-facing mandates are the building blocks of business and need continuous, deliberate sharpening.",
    image: "/assets/corporate/expert4.webp",
    colors: {
      primary: "cyan-500",
      secondary: "cyan-400",
      gradient: "from-cyan-600/50 via-sky-900/100 to-cyan-500/50",
      accent: "cyan-300",
      shadow: "cyan-500",
    },
  },
  {
    id: "talent",
    title: "TALENT FULLFILMENT",
    number: "02",
    catalogs: "Product Catalogs",
    description:
      "Our expertise is built on the understanding that customer-facing mandates are the building blocks of business and need continuous, deliberate sharpening.",
    image: "/assets/corporate/expert5.webp",
    colors: {
      primary: "amber-500",
      secondary: "amber-400",
      gradient: "from-amber-600/50 via-yellow-900/100 to-amber-500/50",
      accent: "amber-300",
      shadow: "amber-500",
    },
  },
  {
    id: "thriversity",
    title: "THRIVERSITY",
    number: "07",
    catalogs: "Product Catalogs",
    description:
      "Our expertise is built on the understanding that customer-facing mandates are the building blocks of business and need continuous, deliberate sharpening.",
    image: "/assets/corporate/expert6.webp",
    colors: {
      primary: "purple-500",
      secondary: "purple-400",
      gradient: "from-purple-600/30 via-violet-900/95 to-purple-500/30",
      accent: "purple-300",
      shadow: "purple-500",
    },
  },
]

// Memoized Desktop Card Component
const DesktopCard = memo(({ card, isActive, onHover }) => (
  <div
    className={`relative overflow-hidden rounded-md cursor-pointer flex-shrink-0 transition-all duration-500 ease-in-out ${
      isActive ? "w-[30%] shadow-lg shadow-orange-500" : "w-[11%]"
    }`}
    style={{
      height: "400px",
      contain: "layout style paint",
      transform: "translateZ(0)",
      willChange: "width, transform",
    }}
    onMouseEnter={() => onHover(card.id)}
  >
    <div
      className={`absolute inset-0 bg-gradient-to-tr ${card.colors.gradient} border border-${card.colors.secondary} opacity-80`}
    />
    <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
      <h2 className="text-2xl mb-4 text-left font-semibold tracking-tight text-gray-100">{card.title}</h2>
      {isActive && <p className="text-md text-gray-300">{card.description}</p>}
      <div className="flex items-end justify-between">
        <span className={`text-5xl font-light text-${card.colors.accent}`}>{card.number}</span>
        <span className="text-sm text-gray-400">{card.catalogs}</span>
        {isActive && (
          <div
            style={{
              opacity: isActive ? 1 : 0,
              transform: isActive ? "scale(1)" : "scale(0.8)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            <Image
              src={card.image || "/placeholder.svg"}
              alt={card.title}
              width={150}
              height={150}
              className="rounded-md"
              loading="lazy"
              sizes="150px"
              decoding="async"
            />
          </div>
        )}
      </div>
    </div>
  </div>
))

DesktopCard.displayName = "DesktopCard"

// Memoized Mobile Card Component
const MobileCard = memo(({ card }) => (
  <div
    className={`relative overflow-hidden rounded-md flex-shrink-0 w-[80%] snap-center shadow-lg shadow-${card.colors.shadow}`}
    style={{
      height: "400px",
      contain: "layout style paint",
      transform: "translateZ(0)",
    }}
  >
    <div
      className={`absolute inset-0 bg-gradient-to-tr ${card.colors.gradient} border border-${card.colors.secondary} opacity-80`}
    />
    <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
      <h2 className={`text-2xl mb-4 text-${card.colors.accent} font-semibold`}>{card.title}</h2>
      <p className="text-md text-gray-300">{card.description}</p>
      <div className="flex items-end justify-between">
        <span className={`text-5xl font-light text-${card.colors.accent}`}>{card.number}</span>
        <span className="text-sm text-gray-400">{card.catalogs}</span>
        <div>
          <Image
            src={card.image || "/placeholder.svg"}
            alt={card.title}
            width={100}
            height={100}
            className="rounded-md shadow-lg"
            loading="lazy"
            sizes="100px"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </div>
))

MobileCard.displayName = "MobileCard"

const OurExperties = memo(() => {
  const [activeCard, setActiveCard] = useState("genai")
  const scrollRef = useRef(null)

  // Memoized callback to prevent unnecessary re-renders
  const handleCardHover = useCallback((cardId) => {
    setActiveCard(cardId)
  }, [])

  // Memoized active colors calculation
  const activeColors = useMemo(() => {
    const activeCardData = expertiseCards.find((card) => card.id === activeCard)
    return activeCardData ? activeCardData.colors : expertiseCards[0].colors
  }, [activeCard])

  return (
    <section
      className="text-white p-4 md:h-[85vh] h-[60vh] mt-0"
      style={{
        minHeight: "500px",
        contain: "layout style paint",
      }}
    >
      <h2 className="text-2xl md:text-4xl text-center font-bold text-gray-100 mb-4 drop-shadow-lg">
        Our <span className="text-orange-500">Expertise</span>
      </h2>
      <div className="flex justify-center items-center mb-6">
        <div className="w-16 h-1 bg-orange-500 rounded" />
        <div className="w-3 h-3 bg-orange-500 rounded-full mx-2" />
        <div className="w-16 h-1 bg-orange-500 rounded" />
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:flex gap-2 justify-center overflow-hidden h-[65vh] mt-5 p-5">
        {expertiseCards.map((card) => (
          <DesktopCard key={card.id} card={card} isActive={activeCard === card.id} onHover={handleCardHover} />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="sm:hidden relative overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-scroll no-scrollbar snap-x snap-mandatory scroll-smooth px-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {expertiseCards.map((card) => (
            <MobileCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
})

OurExperties.displayName = "OurExperties"

export default OurExperties
