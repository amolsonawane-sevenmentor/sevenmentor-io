// "use client"

// import { useState, useRef, useEffect } from "react"
// import { freeCourses, domains, courseTypes } from "./FreePaidCourseData.js"
// import FreePaidCourseCard from "./FreePaidCourseCard.jsx"
// import FreePaidCourseTab from "./FreePaidCourseTab.jsx"

// const FreePaidCoursePage = () => {
//   const [selectedDomain, setSelectedDomain] = useState(domains[0])
//   const [selectedCourseType, setSelectedCourseType] = useState(courseTypes[0])
//   const [showAll, setShowAll] = useState(false)
//   const [isMobile, setIsMobile] = useState(false)
//   const sectionRef = useRef(null)

//   // Get all courses for the selected domain
//   const domainCourses = freeCourses[selectedDomain] || []

//   // Filter courses based on selected course type
//   const filteredCourses =
//     selectedCourseType === "ALL COURSES"
//       ? domainCourses
//       : domainCourses.filter((course) => {
//           const courseTypeLabel = selectedCourseType.split(" ")[0].toLowerCase()
//           return course.courseType === courseTypeLabel
//         })

//   const displayedCourses = showAll ? filteredCourses : filteredCourses.slice(0, 6)
//   const hasMoreCourses = filteredCourses.length > 6

//   const handleShowLessClick = () => {
//     setShowAll(false)
//     if (sectionRef.current) {
//       sectionRef.current.scrollIntoView({ behavior: "smooth" })
//     }
//   }

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768)
//     }
//     handleResize() // Initial check
//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 mt-15" ref={sectionRef}>
//       <div className="text-center mb-8">
//         <h2 className="text-3xl font-bold mb-2 text-white">COURSES</h2>
//         <p className="text-xl text-white">
//           Start Learning Today with Our <span className="text-orange-500 font-bold">COURSES</span>
//         </p>
//       </div>

//       <div className="flex flex-col gap-6">
//         {/* Course Type Tabs */}
//         <FreePaidCourseTab
//           domains={domains}
//           selectedDomain={selectedDomain}
//           onSelectDomain={setSelectedDomain}
//           courseTypes={courseTypes}
//           selectedCourseType={selectedCourseType}
//           onSelectCourseType={setSelectedCourseType}
//         />

//         <div className="flex-1">
//           {isMobile ? (
//             <div className="flex flex-col gap-6">
//               {displayedCourses.map((course) => (
//                 <FreePaidCourseCard key={course.id} course={course} />
//               ))}
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {displayedCourses.map((course) => (
//                 <FreePaidCourseCard key={course.id} course={course} />
//               ))}
//             </div>
//           )}

//           {!isMobile && hasMoreCourses && (
//             <div className="flex justify-center mt-8">
//               <button
//                 onClick={showAll ? handleShowLessClick : () => setShowAll(true)}
//                 className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-colors shadow-[3px_3px_0_0_#4f4f4f]"
//               >
//                 {showAll ? "Show Less" : "Show More"}
//               </button>
//             </div>
//           )}

//           {displayedCourses.length === 0 && (
//             <div className="text-center p-8 bg-gray-100 rounded-lg mt-4">
//               <p className="text-gray-500">No courses available for this category</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default FreePaidCoursePage



"use client"

import { useState, useRef, useEffect } from "react"
import { getAllCourses } from "../../../lib/free-course-data.js"
import FreePaidCourseCard from "../FreePaidCourses/FreePaidCourseCard.jsx"

const FreePaidCoursePage = () => {
  const [showAll, setShowAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const sectionRef = useRef(null)

  const allCourses = getAllCourses()
  const displayedCourses = showAll ? allCourses : allCourses.slice(0, 6)
  const hasMoreCourses = allCourses.length > 6

  const handleShowLessClick = () => {
    setShowAll(false)
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 mt-15" ref={sectionRef}>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 text-white">FREE COURSES</h2>
        <p className="text-xl text-white">
          Start Learning Today with Our <span className="text-orange-500 font-bold">COURSES</span>
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex-1">
          {isMobile ? (
            <div className="flex flex-col gap-6">
              {displayedCourses.map((course) => (
                <FreePaidCourseCard key={course.id} course={course} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedCourses.map((course) => (
                <FreePaidCourseCard key={course.id} course={course} />
              ))}
            </div>
          )}

          {!isMobile && hasMoreCourses && (
            <div className="flex justify-center mt-8">
              <button
                onClick={showAll ? handleShowLessClick : () => setShowAll(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-colors shadow-[3px_3px_0_0_#4f4f4f]"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          )}

          {displayedCourses.length === 0 && (
            <div className="text-center p-8 bg-gray-100 rounded-lg mt-4">
              <p className="text-gray-500">No courses available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default FreePaidCoursePage
