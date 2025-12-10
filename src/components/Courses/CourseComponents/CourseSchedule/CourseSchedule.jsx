"use client"
import { useState } from "react"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"
import advancedFormat from "dayjs/plugin/advancedFormat"
import { scheduleData as _scheduleData, WeekendData as _WeekendData } from "./DataCourseSchedule"
import SchedulePopUp from "./SchedulePopUp.jsx"

// Enable Day.js plugins
dayjs.extend(customParseFormat)
dayjs.extend(advancedFormat)

function CourseSchedule({ courseName, mailId, contactNo, bannerTitle }) {
  const [showForm, setShowForm] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [activeTab, setActiveTab] = useState("all")
  const [selectedBatchType, setSelectedBatchType] = useState(null)

  // Defensive: default to [] if undefined
  const scheduleData = Array.isArray(_scheduleData) ? _scheduleData : []
  const WeekendData = Array.isArray(_WeekendData) ? _WeekendData : []

  // Combine both schedule data arrays and sort by date
  const allScheduleData = [...scheduleData, ...WeekendData].sort((a, b) => {
    return dayjs(a.date, "DD/MM/YYYY").diff(dayjs(b.date, "DD/MM/YYYY"))
  })

  // Filter batches based on active tab
  const filteredBatches = allScheduleData.filter((batch) => {
    if (activeTab === "all") return true
    if (activeTab === "weekend") return batch.batch && batch.batch.toLowerCase().includes("weekend")
    if (activeTab === "weekday") return batch.batch && !batch.batch.toLowerCase().includes("weekend")
    return true
  })

  const handleBookNowClick = (course = null) => {
    let batchType = null

    if (course) {
      setSelectedCourse(course)
      // Determine batch type based on the course batch name
      batchType = course.batch && course.batch.toLowerCase().includes("weekend") ? "Weekend" : "Regular"
    } else {
      // If clicked from the general "Register Now" button, use the active tab
      batchType = activeTab === "all" ? "Not Specified" : activeTab
    }

    setShowForm(true)
    // Pass the batch type to the SchedulePopUp component
    setSelectedBatchType(batchType)
  }

  const closeForm = () => {
    setShowForm(false)
    setSelectedCourse(null)
  }

  // Group batches by week
  const groupedByWeek = {}
  filteredBatches.forEach((batch) => {
    const batchDate = dayjs(batch.date, "DD/MM/YYYY")
    const weekStart = batchDate.clone().startOf("week").format("YYYY-MM-DD")
    if (!groupedByWeek[weekStart]) {
      groupedByWeek[weekStart] = []
    }
    groupedByWeek[weekStart].push(batch)
  })

  const cleanedTitle = courseName
    .replace(/\b(training|classes|Training|Classes|Course|course|in Pune)\b/gi, "")
    .replace(/\s+/g, " ")
    .trim()

  return (
    <section>
      <div className="bg-black p-4 md:p-8">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-orange-500">BATCH SCHEDULE</h2>

        <div className="mx-auto max-w-6xl">
          {/* Desktop View - Hidden on mobile */}
          <div className="hidden md:block">
            {/* Header */}
            <div className="grid grid-cols-4 text-white">
              <div className="border rounded-l-xl border-[#a8a5a5] p-3 text-center font-medium bg-gradient-to-r from-orange-500 to-orange-600">
                Date
              </div>
              <div className="border border-[#a8a5a5] p-3 text-center font-medium bg-gradient-to-r from-orange-500 to-orange-600">
                Course
              </div>
              <div className="border border-[#a8a5a5] p-3 text-center font-medium bg-gradient-to-r from-orange-500 to-orange-600">
                Training Type
              </div>
              <div className="border rounded-r-xl border-[#a8a5a5] p-3 text-center font-medium bg-gradient-to-r from-orange-500 to-orange-600">
                Batch
              </div>
            </div>

            {/* Schedule Rows */}
            {Array.isArray(allScheduleData) &&
              allScheduleData.map((row, index) => (
                <div key={index} className="grid grid-cols-4 border-t border-[#2d2d2d] bg-[#000000]">
                  <div className="border border-[#a8a5a5] p-3 text-center text-white">
                    {dayjs(row.date, "DD/MM/YYYY").format("ddd, MMM Do YYYY")}
                  </div>
                  <div className="border border-[#a8a5a5] p-3 text-center text-white">{cleanedTitle}</div>
                  <div className="border border-[#a8a5a5] p-3 text-center text-white">{row.trainingType}</div>
                  <div className="border border-[#a8a5a5] p-3 text-center text-white">{row.batch}</div>
                </div>
              ))}
          </div>

          {/* Enhanced Mobile UI - Hidden on desktop */}
          <div className="md:hidden">
            {/* Course Card Header */}
            <div className="bg-gray-900 rounded-t-xl p-4 border-b border-orange-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500 rounded-full -mr-12 -mt-12 opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-orange-500 rounded-full -ml-8 -mb-8 opacity-10"></div>

              <div className="text-center relative z-10">
                <h3 className="text-2xl font-bold text-orange-500">{cleanedTitle} Course</h3>
                <p className="text-white text-md mt-1">Find Your Perfect Training Session</p>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="bg-gray-900 overflow-x-auto scrollbar-hide">
              <div className="flex p-2 space-x-2 min-w-max">
                {["all", "weekend", "weekday"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-full text-lg whitespace-nowrap transition-all ${
                      activeTab === tab ? "bg-orange-500 text-white font-semibold shadow-lg" : "bg-gray-800 text-white"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Batch Calendar */}
            <div className="bg-black rounded-b-xl overflow-hidden mb-4 max-h-screen overflow-y-auto">
              {Object.keys(groupedByWeek).length > 0 ? (
                Object.keys(groupedByWeek)
                  .sort()
                  .map((weekStart) => {
                    const weekLabel = `${dayjs(weekStart).format("MMM D")} - ${dayjs(weekStart).add(6, "days").format("MMM D")}`
                    const weekBatches = Array.isArray(groupedByWeek[weekStart]) ? groupedByWeek[weekStart] : []
                    return (
                      <div key={weekStart} className="mb-4">
                        {/* Week Header */}
                        <div className="sticky top-0 z-10 bg-gray-800 p-3 border-l-4 border-orange-500">
                          <div className="flex justify-between items-center">
                            <h4 className="text-white font-medium">{weekLabel}</h4>
                            <span className="bg-gray-700 px-2 py-1 rounded-full text-xs text-gray-300">
                              {weekBatches.length} sessions
                            </span>
                          </div>
                        </div>

                        {/* Week Batches */}
                        <div className="bg-gray-900 rounded-b-lg overflow-hidden">
                          {weekBatches.map((batch, idx) => {
                            const batchDate = dayjs(batch.date, "DD/MM/YYYY")
                            const isToday = batchDate.isSame(dayjs(), "day")

                            return (
                              <div
                                key={idx}
                                className={`flex items-center p-4 border-b border-gray-800 ${
                                  isToday ? "bg-gradient-to-r from-gray-800 to-gray-900" : ""
                                }`}
                              >
                                {/* Day Column */}
                                <div className="mr-4 text-center">
                                  <div
                                    className={`w-12 h-12 rounded-full flex flex-col justify-center ${
                                      isToday ? "bg-orange-500" : "bg-gray-800"
                                    }`}
                                  >
                                    <span className="text-lg font-bold text-white">{batchDate.format("DD")}</span>
                                  </div>
                                  <span className="text-xs text-gray-400 mt-1">{batchDate.format("ddd")}</span>
                                </div>

                                {/* Details Column */}
                                <div className="flex-1">
                                  <div className="flex items-center mb-1">
                                    <span
                                      className={`inline-block w-3 h-3 rounded-full mr-2 ${
                                        batch.trainingType === "Online" ? "bg-blue-500" : "bg-green-500"
                                      }`}
                                    ></span>
                                    <span className="text-white">{batch.trainingType}</span>
                                    {isToday && (
                                      <span className="ml-2 bg-orange-500 text-xs text-white px-2 py-0.5 rounded-full">
                                        Today
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-sm text-gray-400">{batch.batch}</div>
                                </div>

                                {/* Action Column */}
                                <button
                                  onClick={() => handleBookNowClick(batch)}
                                  className="bg-orange-500 hover:bg-orange-600 text-white text-sm py-2 px-4 rounded-lg transition-colors"
                                >
                                  Register
                                </button>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })
              ) : (
                <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
                  <div className="w-16 h-16 mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-white font-medium mb-2">No Batches Found</h3>
                  <p className="text-gray-400 text-sm">
                    No {activeTab !== "all" ? activeTab : ""} batches are currently scheduled.
                  </p>
                  {activeTab !== "all" && (
                    <button onClick={() => setActiveTab("all")} className="mt-4 text-orange-500 underline text-sm">
                      View all batches
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Quick Actions Bar */}
            {/* <div className="bg-gray-900 rounded-xl p-4 mb-4">
              <div className="text-center">
                <p className="text-white text-sm mb-2">Looking for custom batch schedules?</p>
                <button
                  onClick={() => handleBookNowClick()}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm py-2 px-4 rounded-lg inline-flex items-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                  Request Custom Batch
                </button>
              </div>
            </div> */}
          </div>

          {/* Register Now Button */}
          <div className="text-center mt-6">
            <button
              id="register-now-btn"
              aria-label="Register Now"
              onClick={() => handleBookNowClick()}
              className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 text-white hover:from-orange-600 hover:to-orange-700 transition-transform duration-300 hover:scale-105"
            >
              Register Now
            </button>
          </div>

          {/* Popup Form */}
          {showForm && (
            <div className="fixed top-[70%] right-0 z-50">
              <SchedulePopUp
                isOpen={showForm}
                onClose={closeForm}
                title={"Book Your Course Now"}
                mailId={mailId}
                contactNo={contactNo}
                bannerTitle={bannerTitle}
                courseType={courseName}
                course={selectedCourse}
                batchType={selectedBatchType}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default CourseSchedule
