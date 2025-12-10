"use client";
import { useState, useEffect } from "react";
import { EventsList } from "../../../components/Event_Page/EventsList.jsx";
import { eventsData } from "../../../components/Event_Page/EventsData.jsx";

export default function EventsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredEvents, setFilteredEvents] = useState(eventsData);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredEvents(eventsData);
    } else {
      setFilteredEvents(
        eventsData.filter((event) => event.category === activeCategory)
      );
    }
  }, [activeCategory]);

  const categories = [
    { name: "All", count: eventsData.length },
    {
      name: "Software Development",
      count: eventsData.filter((e) => e.category === "Software Development")
        .length,
    },
    {
      name: "Data Science, AI/ML",
      count: eventsData.filter((e) => e.category === "Data Science, AI/ML")
        .length,
    },
    {
      name: "Devops",
      count: eventsData.filter((e) => e.category === "Devops").length,
    },
    {
      name: "Networking & Cybersecurity",
      count: eventsData.filter((e) => e.category === "Networking & Cybersecurity").length,
    },
    {
      name: "Fashion Designing",
      count: eventsData.filter((e) => e.category === "Fashion Designing")
        .length,
    },
    {
      name: "Interior Designing",
      count: eventsData.filter((e) => e.category === "Interior Designing")
        .length,
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="px-6 md:px-12 py-20 mt-11 pb-0 bg-gradient-to-br from-gray-900 to-black text-center">
        <h2 className="text-5xl font-extrabold mb-4 text-orange-500 drop-shadow-lg">
          Upcoming Webinar
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Join us for exciting masterclasses featuring industry experts,
          hands-on workshops, and unforgettable learning experiences.
        </p>
      </section>

      <div className="px-6 md:px-12 py-8">
        <div className="flex flex-wrap gap-2 pb-4 ">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 py-2 mr-2 rounded-md transition-colors ${
                activeCategory === category.name
                  ? "bg-orange-500 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </div>

      <EventsList events={filteredEvents} />
    </div>
  );
}
