"use client";
import { useState } from "react"
import { placementData } from "./placementAccordianData.js"
import { FaInstagram, FaLinkedin } from "react-icons/fa"
import { useMediaQuery } from "react-responsive"
import Link from "next/link.js";

export default function PlacementAccordion() {
  const [activePlacedYear, setActivePlacedYear] = useState(null)
  const [activeBlockedYear, setActiveBlockedYear] = useState(null)
  const isMobile = useMediaQuery({ maxWidth: 768 })

  // Group placed students by year
  const placedStudentsByYear = {}
  placementData.placedStudents.forEach((monthData) => {
    if (!placedStudentsByYear[monthData.year]) {
      placedStudentsByYear[monthData.year] = []
    }
    placedStudentsByYear[monthData.year].push(monthData)
  })

  // Group blocked students by year
  const blockedStudentsByYear = {}
  placementData.blockedStudents.forEach((monthData) => {
    if (!blockedStudentsByYear[monthData.year]) {
      blockedStudentsByYear[monthData.year] = []
    }
    blockedStudentsByYear[monthData.year].push(monthData)
  })

  return (
    <div className="max-w-7xl mx-auto p-3 md:p-6">
      {/* Placed Students Section */}
      <h1 className="text-3xl md:text-5xl font-bold mb-6 text-orange-500 text-center md:text-left">
        Placed <span className="text-white">Students - </span>
      </h1>

      <div className="space-y-2">
        {Object.keys(placedStudentsByYear)
          .sort((a, b) => b - a) // Sort years in descending order
          .map((year) => (
            <div key={year} className="rounded-lg overflow-hidden">
              <button
                onClick={() => setActivePlacedYear(activePlacedYear === year ? null : year)}
                className={`w-full p-4 text-left flex items-center justify-between ${
                  activePlacedYear === year ? "bg-orange-500 text-white" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <span className="font-medium">{year}</span>
                <span className="text-xl">{activePlacedYear === year ? "−" : "+"}</span>
              </button>

              {activePlacedYear === year && (
                <div className="border-x border-b rounded-b-lg">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-orange-200">
                          <th className="px-4 py-3 text-left">Candidate Name</th>
                          {/* <th className="px-4 py-3 text-left">Placed Company</th> */}
                          <th className="px-4 py-3 text-left">Designation</th>
                          <th className="px-4 py-3 text-left">Social Links</th>
                        </tr>
                      </thead>
                      <tbody>
                        {placedStudentsByYear[year].flatMap((monthData) =>
                          monthData.placements.map((placement, index) => (
                            <tr key={`${monthData.month}-${index}-${Math.random()}`} className="border-b last:border-b-0 bg-gray-50">
                              <td className="px-4 py-3">{placement.candidateName}</td>
                              {/* <td className="px-4 py-3">{placement.placedCompany}</td> */}
                              <td className="px-4 py-3">{placement.designation}</td>
                              <td className="px-4 py-3 flex space-x-3">
                                <Link
                                  href={placement.instagram|| "#"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-pink-500 hover:text-pink-700"
                                >
                                  <FaInstagram size={20} />
                                </Link>
                                <Link
                                  href={placement.linkedin|| "#"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-500 hover:text-blue-700"
                                >
                                  <FaLinkedin size={20} />
                                </Link>
                              </td>
                            </tr>
                          )),
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>

      {/* Blocked Students Section */}
      <div className="mt-10 mb-6 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-orange-500 inline">
          Blocked <span className="text-white">Students - </span>
        </h1>

        {/* Span stays beside the heading on large screens, moves below on mobile */}
        {!isMobile ? (
          <span className="bg-red-600 text-white rounded-lg tracking-wider text-lg p-4 ml-4 inline-block">
            Students got job by our placement support and did not join in the companies
          </span>
        ) : (
          <span className="bg-red-600 w-full block text-white rounded-lg tracking-wider text-sm mt-4 mb-4 p-4 text-center">
            Students got job by our placement support and did not join in the companies
          </span>
        )}
      </div>

      <div className="space-y-2">
        {Object.keys(blockedStudentsByYear)
          .sort((a, b) => b - a) // Sort years in descending order
          .map((year) => (
            <div key={year} className="rounded-lg overflow-hidden">
              <button
                onClick={() => setActiveBlockedYear(activeBlockedYear === year ? null : year)}
                className={`w-full p-4 text-left flex items-center justify-between ${
                  activeBlockedYear === year ? "bg-orange-500 text-white" : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <span className="font-medium">{year}</span>
                <span className="text-xl">{activeBlockedYear === year ? "−" : "+"}</span>
              </button>

              {activeBlockedYear === year && (
                <div className="border-x border-b rounded-b-lg">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-orange-200">
                          <th className="px-4 py-3 text-left">Candidate Name</th>
                          <th className="px-4 py-3 text-left">Mobile</th>
                          <th className="px-4 py-3 text-left">Email</th>
                        </tr>
                      </thead>
                      <tbody>
                        {blockedStudentsByYear[year].flatMap((monthData) =>
                          monthData.blockedList.map((blocked, index) => (
                            <tr key={`${monthData.month}-${index}`} className="border-b last:border-b-0 bg-gray-50">
                              <td className="px-4 py-3">{blocked.candidateName}</td>
                              <td className="px-4 py-3">{blocked.mobile}</td>
                              <td className="px-4 py-3">{blocked.email}</td>
                            </tr>
                          )),
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}
