
"use client"
import { useState, useRef } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { courses, domains } from "./CarouselData"
import CourseCard from "./CourseCard"
// import DomainSidebar from "./DomainSideBar"
import SearchCourses from "./SearchCourses"
import useEmblaCarousel from "embla-carousel-react"
import dynamic from "next/dynamic";

const DomainSidebar = dynamic(() => import("./DomainSidebar"), { ssr: false });

const CourseCarousel = () => {
  const [selectedDomain, setSelectedDomain] = useState(domains[0])
  const [showAll, setShowAll] = useState(false)
  const sectionRef = useRef(null)

  // Embla carousel for mobile view - properly using the hook
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  })

  // Get courses for the selected domain
  const domainCourses = courses[selectedDomain] || []

  // Determine how many courses to display
  const displayedCourses = showAll ? domainCourses : domainCourses.slice(0, 6)

  // Check if we need to show the "Show More" button
  const hasMoreCourses = domainCourses.length > 6

  // Handle show less click - scroll to the top of the section
  const handleShowLessClick = () => {
    setShowAll(false)
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="bg-black w-full py-10" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header section */}
        <div className="text-center mb-8 px-4">
          <h2 className="text-4xl font-bold text-orange-500 mb-4">OUR COURSES</h2>
          <p className="text-lg md:text-2xl font-semibold text-white mb-6">
            Programs To Help You Upskill which Lands you to your <span className="text-orange-500">DREAM JOB</span>
          </p>

          {/* Search bar with voice search */}
          <SearchCourses />
        </div>

        {/* Main content with sidebar and courses */}
        <div className="flex flex-col md:flex-row">
          {/* Sidebar with domain tabs */}
          <DomainSidebar domains={domains} selectedDomain={selectedDomain} onSelectDomain={setSelectedDomain} />

          {/* Courses container */}
          <div className="flex-1 px-4">
            {/* Mobile carousel - visible only on small screens */}
            <div className="block md:hidden overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {domainCourses.map((course) => (
                  <div className="flex-[0_0_90%] min-w-0 pl-4 first:pl-0" key={course.id}>
                    <CourseCard course={course} />
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop grid - visible only on md and larger */}
            <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>

            {/* Show More/Less button - only on desktop (md and up) */}
            {hasMoreCourses && (
              <div className="hidden md:flex justify-center mt-8">
                <button
                  id="show-more-btn"
                  onClick={showAll ? handleShowLessClick : () => setShowAll(true)}
                  className="flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors"
                 suppressHydrationWarning={true}
                >
                  {showAll ? (
                    <>
                      Show Less <ChevronUp className="ml-2 w-5 h-5" />
                    </>
                  ) : (
                    <>
                      Show More <ChevronDown className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            )}

            {/* No courses message */}
            {displayedCourses.length === 0 && (
              <div className="text-center py-12 text-white">
                <p className="text-xl">No courses available for this category</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCarousel
