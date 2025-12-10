"use client"

import { MoveRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const FreePaidCourseCard = ({ course }) => {
  const getBadgeColor = (type) => {
    switch (type) {
      case "free":
        return "bg-green-500"
      case "paid":
        return "bg-blue-500"
      case "combo":
        return "bg-purple-500"
      default:
        return "bg-blue-500"
    }
  }

  return (
    <Link
      href={`/free-courses/${course.slug}`}
      scroll={false}
      className="block no-underline"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <div className="bg-white text-black rounded-lg shadow-md hover:scale-105 transform transition-transform h-[420px] flex flex-col">
        <div className="relative w-full h-auto">
          <Image
            src={course.image || "/placeholder.svg?height=250&width=400"}
            alt={course.title}
            className="rounded-t-lg object-cover w-[400px] h-[250px]"
            width={400}
            height={250}
          />

          <div className={`absolute top-3 left-3 ${getBadgeColor(course.courseType)} text-white py-1 px-3 rounded-md`}>
            <span className="text-sm font-bold">
              {course.courseType === "free"
                ? "FREE"
                : course.courseType === "paid"
                  ? "PAID"
                  : course.courseType === "combo"
                    ? "COMBO"
                    : "PAID"}
            </span>
          </div>
        </div>

        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-bold line-clamp-2 mb-2">{course.title}</h3>
          <p className="text-sm text-gray-700 line-clamp-2">{course.description}</p>

          <div className="mt-auto flex gap-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center whitespace-nowrap">
                <Star className="text-yellow-400 mr-1 h-4 w-4 fill-yellow-400" />
                <span className="mr-1">{course.rating}</span>
                <span className="text-xs text-gray-500">({course.reviews} Reviews)</span>
              </div>
            </div>

            <button className="w-full py-2 rounded-full text-sm font-semibold bg-orange-500 text-white hover:bg-orange-600 transition-colors shadow-[3px_3px_0_0_#4f4f4f]">
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

export default FreePaidCourseCard
