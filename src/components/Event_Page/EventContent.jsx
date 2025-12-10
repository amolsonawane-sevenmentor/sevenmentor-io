"use client"
import { ChevronRight, Star } from "lucide-react"
import { experiences, getTestimonials } from "./EventsData"
import Image from "next/image"
import CountdownTimer from "./CountdownTimer"

export const EventContent = ({ event }) => {
  return (
    <div className="w-full space-y-8">
      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-orange-500">About This Webinar</h2>
          <p className="text-gray-300 leading-relaxed">{event.description}</p>

          <hr className="my-6 border-gray-700" />

          <h3 className="text-xl font-semibold mb-4 text-white">What You&apos;ll Experience</h3>
          <ul className="space-y-3 text-gray-300">
            {experiences.map((item, index) => (
              <li key={index} className="flex items-start">
                <ChevronRight className="h-5 w-5 text-orange-500 mr-2 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-orange-500">What People Say</h2>
          <div className="space-y-6">
            {getTestimonials().map((testimonial, index) => (
              <div key={index} className="bg-gray-750 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center mb-4">
                  <div className="relative h-10 w-10 mr-3 rounded-full overflow-hidden border border-gray-600">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <div className="flex mt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-3 w-3 fill-orange-500 text-orange-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">&quot;{testimonial.text}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      
      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
        <div className="bg-orange-500 px-6 py-3">
          <h3 className="text-lg font-semibold text-white">Webinar Countdown</h3>
        </div>
        <div className="p-6">
          <CountdownTimer data={event} price={event.price} />
        </div>
      </div>
    </div>
  )
}