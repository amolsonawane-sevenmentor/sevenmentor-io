"use client"

import SkillsGrid from "../SkillsGrid/SkillsGrid.jsx";

export default function CourseRole({ title, courseData, skillsRef, tools }) {
  // Check if courseData is an array and has elements
  if (!Array.isArray(courseData) || courseData.length === 0) {
    return (
      <div className="min-h-screen bg-black text-[#FF4500] flex items-center justify-center">
        <p className="text-3xl font-extrabold">Course data not found.</p>
      </div>
    );
  }

  const cleanedTitle = title
    .replace(/\b(training|classes|Training|Classes|Course|course| in Pune)\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim();

  return (
    <div className="relative bg-gradient-to-b from-black to-[#121212] py-8 sm:py-8 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-4 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-orange-500">
            Master In{" "}
            <span className="animated-text-fill text-white !text-2xl sm:!text-3xl lg:!text-4xl !tracking-tight">
              {cleanedTitle} 
            </span>
           {" "} Course
          </h2>
          {/* <p className="mt-2 sm:mt-4 text-base sm:text-lg text-gray-300 mx-auto">
            {courseData[0]?.description || "NA"}
          </p> */}
        </div>

        <section className="mb-8">
          <h2 className="text-xl w-full flex items-center justify-center sm:text-2xl font-semibold text-center text-gray-200 uppercase mb-4">
            One<span className="text-orange-500 mx-2">Course</span>Multiple<span className="text-orange-500 mx-2">Roles</span>
          </h2>

          <p className="mt-2 mb-5 text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Empower your career with in-demand data skills and open doors to
            top-tier opportunities.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:px-24 px-0">
            {(Array.isArray(courseData) ? courseData : []).map((role) => (
              <div
                key={role.id}
                className="flex items-center border border-white/20 text-lg justify-center bg-gradient-to-br from-white/20 via-[#0f0f0f] to-[#0f0f0f] text-white/90 rounded-xl shadow-lg transform hover:scale-105 hover:rotate-2 hover:shadow-xl transition-all duration-300 p-3"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="transform hover:scale-110 hover:rotate-3 transition-all duration-300"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <span className="block text-base sm:text-sm font-bold text-center">
                    {role.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef}>
          <SkillsGrid courseData={courseData} tools={tools} />
        </section>
      </div>
    </div>
  );
}
