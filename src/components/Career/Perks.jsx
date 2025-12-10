"use client"

import { useRef } from "react"
import { MoveLeft, MoveRight } from 'lucide-react'
import useEmblaCarousel from "embla-carousel-react"

const benefits = [
  {
    title: "Flexible Work Hours",
    description:
      "We promote a healthy work-life balance with flexible scheduling options.",
  },
  {
    title: "PF (Provident Fund)",
    description:
      "SevenMentor contributes to your Provident Fund to help you plan a secure future.",
  },
  {
    title: "Team Outings & Events",
    description:
      "Regular team activities and offsite events encourage collaboration and bonding.",
  },
  {
    title: "Festival Celebrations / Office Parties",
    description: "Our workplace culture thrives on celebration — we honor every occasion together.",
  },
  {
    title: "Training & Upskilling Programs",
    description: "Comprehensive training ensures your skills evolve with industry standards.",
  },
  {
    title: "Mentorship / Leadership Development",
    description: "We cultivate leaders through focused mentorship and professional guidance.",
  },
  {
    title: "Employee Assistance Program",
    description: "Our EAP offers support for personal well-being and professional growth.",
  },
  {
    title: "CSR Activities",
    description: "We believe in social responsibility — making a difference through community-driven initiatives.",
  },
  
]

export default function Perks() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    dragFree: true,
  })

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev()
  const scrollNext = () => emblaApi && emblaApi.scrollNext()

  return (
    <div className="md:h-[60vh] h-[35vh] pb-5 bg-black flex items-center justify-center px-4">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-100">
            Perks & Benefits
          </h2>
          <div className="flex justify-center items-center mt-5">
            <div className="w-16 h-1 bg-orange-500 rounded"></div>
            <div className="w-3 h-3 bg-orange-500 rounded-full mx-2"></div>
            <div className="w-16 h-1 bg-orange-500 rounded"></div>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex space-x-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="min-w-[300px] p-6 bg-gradient-to-br from-orange-500/20 via-black/95 to-orange-500/20 rounded-lg shadow-lg text-white transform hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-xl font-semibold mb-3 text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-md text-center">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="cursor-pointer absolute md:left-[-80px] left-[0] top-1/2 -translate-y-1/2 md:w-10 md:h-10 w-8 h-8 rounded-full text-white shadow-lg flex items-center justify-center bg-orange-500 hover:bg-orange-600 hover:text-white transition duration-300"
            aria-label="Previous slide"
            style={{
                boxShadow: "-2.6px 2px 0 0 rgba(255, 255, 255, 1)",
              }}
          >
            <div className="text-sm md:text-2xl">
              <MoveLeft />
            </div>
          </button>

          <button
            onClick={scrollNext}
            className="cursor-pointer absolute md:right-[-80px] right-0 top-1/2 -translate-y-1/2 md:w-10 md:h-10 w-8 h-8 rounded-full bg-orange-500 text-white shadow-lg flex items-center justify-center hover:bg-orange-600 hover:text-white transition duration-300"
            aria-label="Next slide"
            style={{
                boxShadow: "2.6px 2px 0 0 rgba(255, 255, 255, 1)",
              }}
          >
            <div className="text-sm md:text-2xl ">
              <MoveRight />
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
