"use client"

import { motion } from "framer-motion"
import { Download, ChevronDown } from "lucide-react"
import { useState, useEffect, useMemo } from "react"
import SyllabusPopupForm from "../../../Forms/SyllabusPopUpForm/SyllabusPopUpForm.jsx"

export default function SyllabusSection({
  pdfUrlPath,
  contactNo,
  mailId,
  bannerTitle,
  title,
  curriculumData = [],  // <-- Default to empty array
  ...rest
}) {
  const [selectedModule, setSelectedModule] = useState(null)
  const [isDownloading, setIsDownloading] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [visibleModules, setVisibleModules] = useState([])
  const [showAllModules, setShowAllModules] = useState(false)

  const handleClosePopup = () => setShowPopup(false)

  const handleFormSubmit = async (formData) => {
    try {
      setIsDownloading(true)
      handleClosePopup()
      setIsDownloading(false)
      return {
        status: 200,
        message: "Thank you! Your syllabus has been downloaded.",
      }
    } catch (error) {
      console.error("Error downloading syllabus:", error)
      setIsDownloading(false)
      return {
        status: 500,
        message: "An error occurred while downloading the syllabus.",
      }
    }
  }

  const modules = useMemo(() => {
    if (!curriculumData) {
      return []
    }
    return Array.from(new Set(curriculumData.map((item) => item.parent))).map((parent) => ({
      parent,
      description: curriculumData
        .filter((item) => item.parent === parent)
        .map((item) => item.description)
        .join("\n\n"),
    }))
  }, [curriculumData])

  useEffect(() => {
    // Initialize with first batch of modules (15 initially)
    if ((modules?.length ?? 0) > 0 && (visibleModules?.length ?? 0) === 0) {
      const initialBatchSize = 15
      setVisibleModules(modules.slice(0, initialBatchSize))
    }
  }, [modules, visibleModules.length])

  // Function to show all modules
  const handleViewMoreModules = () => {
    setShowAllModules(true)
    setVisibleModules(modules)
  }

  // For desktop view, select first module when component loads
  useEffect(() => {
    if (typeof window !== "undefined") { // <-- FIXED: Prevent SSR window usage
      const isDesktop = window.innerWidth >= 1024

      if ((modules?.length ?? 0) > 0 && !selectedModule && isDesktop) {
        setSelectedModule(modules[0])
      }

      const handleResize = () => {
        const isDesktopNow = window.innerWidth >= 1024
        if (isDesktopNow && !selectedModule && (modules?.length ?? 0) > 0) {
          setSelectedModule(modules[0])
        }
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [modules, selectedModule])

  const renderedMobileModules = useMemo(() => {
    return visibleModules.map((module) => (
      <div key={module.parent} className="rounded-xl overflow-hidden mb-4">
        <button
          aria-label="Toggle Module"
          onClick={() => setSelectedModule(selectedModule?.parent === module.parent ? null : module)}
          className={`relative w-full text-left transition-all p-4 flex justify-between items-center ${
            selectedModule?.parent === module.parent
              ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)]"
              : "bg-gradient-to-br from-black via-black/95 to-orange-500/20 text-white/80 border border-orange-500/60 border-l-transparent"
          }`}
        >
          <span className="text-lg font-semibold">{module.parent}</span>
          <ChevronDown
            className={`h-5 w-5 transition-transform ${selectedModule?.parent === module.parent ? "rotate-180" : ""}`}
          />
        </button>

        {selectedModule?.parent === module.parent ? (
          <div
            className="bg-white/10 p-4 text-white/90 whitespace-pre-line text-[18px]"
            dangerouslySetInnerHTML={{
              __html: module.description,
            }}
          />
        ) : null}
      </div>
    ))
  }, [visibleModules, selectedModule])

  if (!(modules?.length > 0)) return <p>No data available for this domain.</p>

     const cleanedTitle = title.replace(/\b(training|classes|Training|Classes|Course|course|in Pune)\b/gi, '').replace(/\s+/g, ' ').trim();

  return (
    <div className="bg-gradient-to-br from-black via-black to-orange-950 p-4 sm:p-6 lg:p-8 text-white">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-orange-500/30 bg-black/60 backdrop-blur-xl shadow-[0_0_50px_rgba(249,115,22,0.15)]">
        <div className="relative p-2 sm:p-6 lg:p-10">
          {/* Header */}
          <div className="mb-4 flex items-center justify-center md:justify-between flex-col lg:flex-row gap-8">
            <h2 className="text-2xl text-center lg:text-left sm:text-3xl lg:!text-[2.20rem] font-bold text-white">
              Curriculum For
              <span className="ml-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                {" "}
                {cleanedTitle}{" "}
              </span>
            </h2>
            <button
              id="download-syllabus-btn"
              aria-label="Download Syllabus"
              onClick={() => setShowPopup(true)}
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-sm lg:text-lg font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Download className="h-5 w-5" />
                Download Syllabus
              </span>
            </button>
          </div>

          {/* Mobile Scrollable Accordion View */}
          <div className="block lg:hidden">
            <div className="h-[50vh] overflow-y-auto space-y-4 p-2">
              {renderedMobileModules}

              {/* Mobile View More Modules button */}
              {!showAllModules && modules.length > visibleModules.length && (
                <button
                  className="text-orange-500 underline !mt-5 flex items-center justify-center mx-auto"
                  onClick={handleViewMoreModules}
                >
                  View More Modules
                </button>
              )}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid gap-4 md:gap-10 lg:grid-cols-[500px_1fr]">
            {/* Left Side: Module List */}
            <motion.div
              className="space-y-4 h-[60vh] overflow-y-auto syllabus-scrollbar"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {visibleModules.map((module) => (
                <button
                  aria-label="Select Module"
                  key={module.parent}
                  onClick={() => setSelectedModule(module)}
                  className={`relative w-full mt-2 rounded-xl p-5 text-left transition-all !overflow-x-hidden ${
                    selectedModule?.parent === module?.parent
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                      : "bg-white/5 text-white/80 hover:bg-white/10"
                  }`}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-orange-700/80"
                    initial={{ x: "100%" }}
                    animate={{
                      x: selectedModule?.parent === module?.parent ? "0%" : "100%",
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10 text-lg font-semibold">{module.parent}</span>
                </button>
              ))}

              {/* Desktop View More Modules button */}
              {!showAllModules && modules.length > visibleModules.length && (
                <button
                  className="text-orange-500 underline !mt-5 flex items-center justify-center mx-auto"
                  onClick={handleViewMoreModules}
                >
                  View More Modules
                </button>
              )}
            </motion.div>

            {/* Right Side: Module Content */}
            <div className="rounded-2xl bg-opacity-70 p-2 sm:p-8 sm:py-2 shadow-[0_0_30px_rgba(249,115,22,0.1)] backdrop-blur-sm ">
              {selectedModule && (
                <>
                  <h3 className="mb-4 text-xl sm:text-2xl lg:text-3xl text-center font-bold text-orange-600">
                    {selectedModule.parent}
                  </h3>
                  <div
                    className="text-left !text-[18px] h-[50vh] overflow-y-auto syllabus-scrollbar sm:text-lg text-white/90 bg-white/10 rounded-lg p-4 whitespace-pre-line"
                    dangerouslySetInnerHTML={{
                      __html: selectedModule.description,
                    }}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <SyllabusPopupForm
          isOpen={showPopup}
          onClose={handleClosePopup}
          onSubmit={handleFormSubmit}
          title="Submit to Download Syllabus"
          courseType={title}
          bannerTitle={bannerTitle}
          pdfUrl={pdfUrlPath}
          mailId={mailId}
          contactNo={contactNo}
        />
      )}
    </div>
  )
}
