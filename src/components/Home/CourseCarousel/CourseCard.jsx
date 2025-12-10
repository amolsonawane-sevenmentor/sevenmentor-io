"use client"

import { MoveRight } from "lucide-react"
import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"

const CourseCard = ({ course }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <Link href={course.link || "#"} onClick={scrollToTop} className="block no-underline">
       <div className="bg-white text-black rounded-lg shadow-md hover:scale-105 transform transition-transform h-[390px] flex flex-col">
        {/* Course image */}
        <div className="relative w-full h-48">
          <Image
            src={course.image || "/placeholder.svg"}
            fill
            alt={course.title}
            className="w-full h-full object-cover rounded-t-lg"
          />

          {/* Partner logos */}
          {course.partners && (
            <div className="absolute top-3 left-3 bg-white py-1 px-3 rounded-md">
              {course.partners.includes("IBM") && <span className="text-sm font-bold mr-2">IBM</span>}
              {course.partners.includes("Microsoft") && <span className="text-sm font-bold">Microsoft</span>}
            </div>
          )}
        </div>

        {/* Course content */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-bold line-clamp-2 mb-2">{course.title}</h3>

          <p className="text-sm text-gray-700 line-clamp-3">{course.description}</p>

          {/* Course details */}
          {course.duration && (
            <div className="flex items-center mb-2 text-sm text-gray-600">
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                {course.duration}
              </span>
            </div>
          )}

          {course.certification && (
            <div className="flex items-center mb-2 text-sm text-gray-600">
              <svg
                className="w-4 h-4 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              {course.certification}
            </div>
          )}

          {/* Rating and reviews */}
          <div className="mt-auto flex gap-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center whitespace-nowrap">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400 mr-1" />
                <span className="mr-1">{course.rating}</span>
                <span className="text-xs text-gray-500">({course.reviews} Reviews)</span>
              </div>
            </div>

            {/* View more button */}
            <button
              className="w-full py-2 rounded-full text-sm font-semibold bg-orange-500 text-white hover:bg-orange-600 transition-colors"
              style={{ boxShadow: "3px 3px 0 0 #4f4f4f" }}
              suppressHydrationWarning={true}
            >
              <span className="flex justify-center items-center">
                VIEW MORE <MoveRight className="ml-1 w-4 h-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CourseCard
