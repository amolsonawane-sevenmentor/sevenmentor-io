'use client'
import React, { useEffect, useState } from "react"
import { EventsList } from "./EventsList.jsx"
import { EventDetail } from "./EventDetail.jsx"

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Function to handle clicking "Join Now"
  const handleJoinClick = (event) => {
    setSelectedEvent(event)
    window.scrollTo(0, 0) // Scroll to top when opening detail page
  }

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {selectedEvent ? (
        <EventDetail event={selectedEvent} scrollPosition={scrollPosition} />
      ) : (
        <EventsList onJoinClick={handleJoinClick} />
      )}
    </div>
  )
}

export default Events
