"use client"
import React, { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from 'lucide-react'



import Image from "next/image"

const awards = [
  {
    id: 1,
    img: "/assets/AwardsImages/award1.webp",
    title: "2023 Winner",
    description: "For IT & Technical Training",
  },
  {
    id: 2,
    img: "/assets/AwardsImages/award2.webp",
    title: "2022 Gold Winner",
    description: "For Customer Service by Stevie Awards",
  },
  {
    id: 3,
    img: "/assets/AwardsImages/award3.webp",
    title: "2021 Silver Winner",
    description: "For Customer Service by Stevie Awards",
  },
  {
    id: 4,
    img: "/assets/AwardsImages/award4.webp",
    title: "2022 Bronze Winner",
    description: "For Learning Delivery Platform",
  },
  {
    id: 5,
    img: "/assets/AwardsImages/award5.webp",
    title: "2024 Bronze Winner",
    description: "For Customer Service by Stevie Awards",
  },
  {
    id: 6,
    img: "/assets/AwardsImages/award6.webp",
    title: "2024 Bronze Winner",
    description: "For Customer Service by Stevie Awards",
  },
  {
    id: 7,
    img: "/assets/AwardsImages/award7.webp",
    title: "JITO Youth Wing Pune Sports Carnival",
  },
  {
    id: 8,
    img: "/assets/AwardsImages/award8.webp",
    title: "JITO Youth Wing Pune Sports Carnival",
  },
]

export default function AwardsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length)
    }, 2000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % awards.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + awards.length) % awards.length)
  }

  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { each: true })

  return (
    <section className="sm:py-12 pb-12 !mt-[-40px] md:mt-0 md:pb-10 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Celebrating Excellence: <span className="text-orange-500"> A Legacy of Awards</span>{" "}
        </motion.h2>
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <div className="relative w-full h-[400px]">
                <Image
                  src={awards[currentIndex].img || "/placeholder.svg"}
                  alt={awards[currentIndex].title}
                  fill
                  className="object-cover rounded-3xl"
                  priority
                />
              </div>
              <div
                className="absolute inset-0 bg-opacity-10 flex items-end justify-center rounded-3xl pb-4"
                style={{
                  boxShadow: "0 0 8px 2px rgba(249, 115, 22, 0.6)", // Orange glow effect
                }}
              >
                <div className="text-center p-8 backdrop-blur-sm bg-black/80 bg-opacity-8 rounded-lg">
                  <h3 className="text-3xl font-bold mb-2">{awards[currentIndex].title}</h3>
                  <p className="text-xl text-orange-300">{awards[currentIndex].description}</p>
                </div>
              </div>
            </motion.div>
          </div>
          <button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/20 !bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 p-2 rounded-md"
            onClick={prevSlide}
            suppressHydrationWarning={true}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 !bg-opacity-20 hover:bg-opacity-30 transition-all duration-300 p-2 rounded-md"
            onClick={nextSlide}
            suppressHydrationWarning={true}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {awards.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-orange-500" : "bg-gray-400"
              }`}
              suppressHydrationWarning={true}
              />
          ))}
        </div>
      </div>
    </section>
  )
}
