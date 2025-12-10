"use client"

import { useState, lazy, Suspense } from "react";
import courseModules from "./CourseModuleData.js";
import SyllabusPopupForm from "../../../../../Forms/SyllabusPopUpForm/SyllabusPopUpForm.jsx";
import { motion } from "framer-motion"; // Make sure to import motion
import Image from "next/image.js";

export default function CourseModuleAccordion({ domain }) {
  const [openModule, setOpenModule] = useState(0);
  const [expandedModule, setExpandedModule] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // Access the correct course modules based on the domain
  const modules = courseModules[domain];

  const toggleModule = (index) => {
    setOpenModule(openModule === index ? openModule : index);
    if (typeof window !== "undefined") {
      requestAnimationFrame(() => {
        const element = document.getElementById(`module-${index}`);
        if (element) {
          const offset = element.getBoundingClientRect().top + window.scrollY - 130;
          window.scrollTo({ top: offset, behavior: "smooth" });
        }
      });
    }
  };

  const toggleReadMore = (index) => {
    setExpandedModule(expandedModule === index ? null : index);
  };

  const handleClosePopup = () => setShowPopup(false);

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <h1 className="md:text-5xl text-3xl text-orange-500 text-center font-bold mb-4">
        Course Modules:
      </h1>
      {modules && modules.map((module, index) => (
        <div key={index} id={`module-${index}`} className="mb-4">
          <div className="relative">
            <motion.button
              onClick={() => toggleModule(index)}
              className="relative flex items-center w-full px-3 py-3 justify-start text-white text-lg font-semibold rounded-md shadow-lg gap-2 overflow-hidden bg-black border-2 border-orange-500"
              whileHover={{
                borderColor: "rgba(249, 115, 22, 0.8)", // Neon orange border effect on hover
                boxShadow: "0 0 15px rgba(249, 115, 22, 0.8)",
              }}
            >
              <Image src={module.image} alt={module.title} className="w-10 h-10 object-cover rounded-md z-10 mr-2" />
              <span className="text-xl !text-white font-semibold z-10">{module.title}</span>
              <span className="text-2xl z-10">{openModule === index ? "−" : "+"}</span>
              <motion.div
                className="absolute inset-0 bg-black  opacity-80"
                // initial={{ x: "-100%" }}
                // animate={{ x: "100%" }}
                // transition={{ duration: 1.5, repeat: Infinity }}
              />
              <div className="absolute inset-0 rounded-md border-[3px] border-orange-500/50 opacity-70 animate-pulse" />
            </motion.button>
          </div>
          {openModule === index && (
            <div className="p-6 border border-white/20 rounded-sm bg-black bg-gradient-to-bl from-orange-600/25 via-black to-orange-800/15 text-white grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <p className="text-gray-300 text-xl">{module.content.description}</p>
                {expandedModule === index && (
                  <p className="text-gray-200 text-xl mb-4">{module.content.fullDescription}</p>
                )}
                <button
                  onClick={() => toggleReadMore(index)}
                  className="text-orange-500 font-semibold hover:underline"
                >
                  {expandedModule === index ? "Show Less" : "Read More"}
                </button>
                <div className="space-y-2">
                  {module.content.keyPoints.map((point, i) => (
                    <div key={i} className="flex items-start">
                      <span className="text-orange-500 mr-2">»</span>
                      <p className="text-gray-300 text-lg">{point}</p>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-orange-500">Eligibility:</h3>
                  <p className="text-gray-300">{module.content.eligibility}</p>
                  <button
                    onClick={() => setShowPopup(true)}
                    className="bg-orange-500 text-white px-6 font-semibold py-2 rounded-md hover:bg-orange-600 transition-colors"
                  >
                    Download Syllabus
                  </button>
                  {showPopup && (
                    <SyllabusPopupForm
                      isOpen={showPopup}
                      onClose={handleClosePopup}
                      title="Submit to Download Syllabus"
                      courseType={domain}
                    />
                  )}
                </div>
              </div>
              <div className="flex justify-center items-start">
                <Suspense fallback={<div className="w-full max-w-md h-auto bg-gray-700 rounded-lg shadow-lg" />}>
                  <Image
                    src={module.image}
                    alt={module.title}
                    loading="lazy"
                    className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
                  />
                </Suspense>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
