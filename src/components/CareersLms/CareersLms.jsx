// "use client"

// import { useState, useEffect } from "react"
// import { getJobsFromLms } from "../../services/CareersLmsService.js"
// import { BriefcaseBusiness, Calendar, MapPin, DollarSign } from "lucide-react"

// export default function CareersLms() {
//   const [selectedJob, setSelectedJob] = useState({
//     jobName: "",
//     organizationName: "",
//     jobLocation: "",
//   })
//   const [selectedDepartment, setSelectedDepartment] = useState("All")
//   const [searchTerm, setSearchTerm] = useState("")
//   const [filteredJobs, setFilteredJobs] = useState([])
//   const [allJobs, setAllJobs] = useState([])
//   const [departments, setDepartments] = useState(["All"])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   // Fetch jobs on component mount
//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         setLoading(true)
        
//         // Call the service function
//         const jobsData = await getJobsFromLms()
        
//         // Filter only active jobs
//         const activeJobs = jobsData.filter(job => 
//           job.status === 'active' && 
//           job.jobPositionStatus === 'open' && 
//           !job.isDeleted
//         )
        
//         setAllJobs(activeJobs)
//         setFilteredJobs(activeJobs)
        
//         // Extract unique departments
//         const uniqueDepartments = [...new Set(
//           activeJobs.map(job => job.department).filter(Boolean)
//         )]
//         setDepartments(["All", ...uniqueDepartments])
        
//       } catch (error) {
//         console.error("Error fetching jobs:", error)
//         setError(
//           error.response?.data?.message || 
//           error.message || 
//           "Failed to load jobs data"
//         )
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchJobs()
//   }, [])

//   // Filter jobs based on selected department and search term
//   useEffect(() => {
//     let result = allJobs

//     // Filter by department
//     if (selectedDepartment !== "All") {
//       result = result.filter((job) => job.department === selectedDepartment)
//     }

//     // Filter by search term
//     if (searchTerm) {
//       const term = searchTerm.toLowerCase()
//       result = result.filter(
//         (job) =>
//           job.jobName?.toLowerCase().includes(term) ||
//           job.organizationName?.toLowerCase().includes(term) ||
//           job.jobLocation?.toLowerCase().includes(term) ||
//           job.department?.toLowerCase().includes(term) ||
//           job.salary?.toLowerCase().includes(term)
//       )
//     }

//     setFilteredJobs(result)
//   }, [selectedDepartment, searchTerm, allJobs])

//   const handleApplyClick = (job) => {
//     // Store selected job info
//     setSelectedJob({
//       jobName: job.jobName,
//       organizationName: job.organizationName,
//       jobLocation: job.jobLocation,
//     })
    
//     // Redirect to external URL - Replace with your actual application URL
//     const applicationUrl = `https://lms.sevenmentor.io/`
//     window.location.href = applicationUrl
//   }

//   const handleSearch = (term) => {
//     setSearchTerm(term)
//   }

//   const handleClearSearch = () => {
//     setSearchTerm("")
//   }

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" })
//   }

//   const formatDate = (dateString) => {
//     if (!dateString) return "Recently"
//     const date = new Date(dateString)
//     return date.toLocaleDateString("en-GB", {
//       day: '2-digit',
//       month: '2-digit',
//       year: 'numeric'
//     })
//   }

//   if (loading) {
//     return (
//       <div className="bg-black min-h-screen flex justify-center items-center mt-24">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
//       </div>
//     )
//   }

//   if (error) {
//     return (
//       <div className="bg-black min-h-screen flex justify-center items-center mt-24">
//         <div className="text-center text-white">
//           <h2 className="text-2xl font-bold text-orange-500 mb-4">Error Loading Jobs</h2>
//           <p className="text-gray-300">{error}</p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <>
//       <div className="bg-black min-h-screen">
//         <div className="pt-24 pb-8">
//           <h1 className="text-3xl md:text-5xl font-bold text-orange-500 mb-8 text-center">
//             LMS Job Opportunities
//           </h1>

//           {/* Separator */}
//           <div className="flex items-center justify-center gap-4 my-10 px-4">
//             <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
//             <span className="text-orange-500 font-bold md:text-md text-sm text-center whitespace-nowrap">
//               &quot;Find Your Dream Job Today&quot;
//             </span>
//             <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
//           </div>

//           {/* Search Bar */}
//           <div className="max-w-7xl mx-auto px-4 mb-8">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search by job title, organization, location, or department..."
//                 value={searchTerm}
//                 onChange={(e) => handleSearch(e.target.value)}
//                 className="w-full px-4 py-3 pl-12 pr-12 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-orange-500"
//               />
//               <svg
//                 className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//               {searchTerm && (
//                 <button
//                   onClick={handleClearSearch}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
//                 >
//                   ✕
//                 </button>
//               )}
//             </div>
//           </div>

//           <section className="py-8 bg-black max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-4">
//             {/* Sidebar for Departments */}
//             <aside className="w-full md:w-1/4 bg-gray-800 p-6 rounded-lg h-fit">
//               <h3 className="text-lg font-bold text-white mb-4">Departments</h3>
//               <ul className="space-y-4">
//                 {departments.map((department) => (
//                   <li
//                     key={department}
//                     className={`cursor-pointer text-white p-2 rounded-lg transition-colors ${
//                       selectedDepartment === department
//                         ? "bg-orange-500"
//                         : "hover:bg-gray-700"
//                     }`}
//                     onClick={() => setSelectedDepartment(department)}
//                   >
//                     {department}
//                   </li>
//                 ))}
//               </ul>
//             </aside>

//             {/* Job Cards */}
//             <div className="w-full md:w-3/4">
//               {filteredJobs.length === 0 ? (
//                 <div className="bg-white p-8 rounded-lg text-center">
//                   <h3 className="text-xl font-bold text-gray-800 mb-2">No jobs found</h3>
//                   <p className="text-gray-600">
//                     Try adjusting your search or department filter to find more opportunities.
//                   </p>
//                 </div>
//               ) : (
//                 <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {filteredJobs.map((job, index) => (
//                     <li
//                       key={job.id || index}
//                       className="bg-white border rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col h-full"
//                     >
//                       {/* Hero Section */}
//                       <section className="bg-[#2b2b2b] p-6 rounded-t-xl">
//                         <header className="flex justify-between items-center">
//                           <span className="text-orange-500 font-bold text-xs px-2 py-1 bg-orange-200 rounded-md">
//                             {job.jobPositionStatus === 'open' ? 'OPEN' : 'NEW'}
//                           </span>
//                           <div className="text-orange-500">
//                             <BriefcaseBusiness size={24} />
//                           </div>
//                         </header>
//                         <h4 className="text-xl text-white/90 font-bold mt-3 break-words leading-snug">
//                           {job.jobName}
//                         </h4>
//                         <p className="text-gray-300 text-sm mt-2">
//                           {job.organizationName}
//                         </p>
//                       </section>

//                       {/* Details Section */}
//                       <div className="flex flex-col justify-between flex-grow p-6 gap-4">
//                         <div className="space-y-2">
//                           {job.department && (
//                             <div className="flex items-start gap-2">
//                               <BriefcaseBusiness className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
//                               <p className="text-gray-700 text-sm font-medium break-words">
//                                 {job.department}
//                               </p>
//                             </div>
//                           )}
                          
//                           {job.jobLocation && (
//                             <div className="flex items-start gap-2">
//                               <MapPin className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
//                               <p className="text-gray-700 text-sm break-words">
//                                 {job.jobLocation}
//                               </p>
//                             </div>
//                           )}
                          
//                           {job.salary && (
//                             <div className="flex items-start gap-2">
//                               <DollarSign className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
//                               <p className="text-gray-700 text-sm font-semibold">
//                                 {job.salary}
//                               </p>
//                             </div>
//                           )}
                          
//                           <div className="flex items-center gap-2 text-gray-600 text-xs pt-2">
//                             <Calendar className="w-4 h-4 flex-shrink-0" />
//                             <span>Posted: {formatDate(job.jobPostedDate)}</span>
//                           </div>
//                         </div>

//                         {/* Action Buttons */}
//                         <div className="flex justify-between items-center pt-4 border-t border-gray-200">
//                           <button
//                             onClick={() => {
//                               // You can add a view details modal or navigation here
//                               console.log('View details for:', job.jobName)
//                               scrollToTop()
//                             }}
//                             className="text-orange-500 hover:text-orange-600 font-medium text-sm"
//                           >
//                             View Details
//                           </button>
//                           <button
//                             className="bg-orange-500 text-white py-2 px-5 rounded-full font-semibold text-sm uppercase hover:bg-orange-600 transition-all shadow-md"
//                             onClick={() => handleApplyClick(job)}
//                           >
//                             Apply
//                           </button>
//                         </div>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </section>
//         </div>
//       </div>
//     </>
//   )
// }








"use client"

import { useState, useEffect } from "react"
import { getJobsFromLms } from "../../services/CareersLmsService.js"
import { BriefcaseBusiness, Calendar, MapPin, DollarSign } from "lucide-react"

export default function CareersLms() {
  const [selectedJob, setSelectedJob] = useState({
    jobName: "",
    organizationName: "",
    jobLocation: "",
  })
  const [selectedDepartments, setSelectedDepartments] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredJobs, setFilteredJobs] = useState([])
  const [allJobs, setAllJobs] = useState([])
  const [departments, setDepartments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch jobs on component mount
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true)
        
        // Call the service function
        const jobsData = await getJobsFromLms()
        
        // Filter only active jobs
        const activeJobs = jobsData.filter(job => 
          job.status === 'active' && 
          job.jobPositionStatus === 'open' && 
          !job.isDeleted
        )
        
        setAllJobs(activeJobs)
        setFilteredJobs(activeJobs)
        
        // Extract unique departments and add predefined categories
        const uniqueDepartments = [...new Set(
          activeJobs.map(job => job.department).filter(Boolean)
        )]
        
        // Add Software Development and other related categories
        const predefinedCategories = [
          "Software Development",
          "Web Development",
          "Mobile Development",
          "Data Science",
          "Quality Assurance",
          "DevOps",
          "UI/UX Design",
          "Product Management",
          "Business Analysis"
        ]
        
        // Combine and remove duplicates
        const allDepartments = [...new Set([...predefinedCategories, ...uniqueDepartments])]
        setDepartments(allDepartments)
        
      } catch (error) {
        console.error("Error fetching jobs:", error)
        setError(
          error.response?.data?.message || 
          error.message || 
          "Failed to load jobs data"
        )
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

  // Filter jobs based on selected departments and search term
  useEffect(() => {
    let result = allJobs

    // Filter by departments (multiple selection)
    if (selectedDepartments.length > 0) {
      result = result.filter((job) => 
        selectedDepartments.includes(job.department)
      )
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        (job) =>
          job.jobName?.toLowerCase().includes(term) ||
          job.organizationName?.toLowerCase().includes(term) ||
          job.jobLocation?.toLowerCase().includes(term) ||
          job.department?.toLowerCase().includes(term) ||
          job.salary?.toLowerCase().includes(term)
      )
    }

    setFilteredJobs(result)
  }, [selectedDepartments, searchTerm, allJobs])

  const handleDepartmentChange = (department) => {
    setSelectedDepartments((prev) => {
      if (prev.includes(department)) {
        // Remove department if already selected
        return prev.filter((d) => d !== department)
      } else {
        // Add department to selection
        return [...prev, department]
      }
    })
  }

  const handleApplyClick = (job) => {
    // Store selected job info
    setSelectedJob({
      jobName: job.jobName,
      organizationName: job.organizationName,
      jobLocation: job.jobLocation,
    })
    
    // Redirect to external URL - Replace with your actual application URL
    const applicationUrl = `https://lms.sevenmentor.io/`
    window.location.href = applicationUrl
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const handleClearSearch = () => {
    setSearchTerm("")
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const formatDate = (dateString) => {
    if (!dateString) return "Recently"
    const date = new Date(dateString)
    return date.toLocaleDateString("en-GB", {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  if (loading) {
    return (
      <div className="bg-black min-h-screen flex justify-center items-center mt-24">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-black min-h-screen flex justify-center items-center mt-24">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Error Loading Jobs</h2>
          <p className="text-gray-300">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="bg-black min-h-screen">
        <div className="pt-24 pb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-orange-500 mb-8 text-center">
            LMS Job Opportunities
          </h1>

          {/* Separator */}
          <div className="flex items-center justify-center gap-4 my-10 px-4">
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
            <span className="text-orange-500 font-bold md:text-md text-sm text-center whitespace-nowrap">
              &quot;Find Your Dream Job Today&quot;
            </span>
            <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          </div>

          {/* Search Bar */}
          <div className="max-w-7xl mx-auto px-4 mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by job title, organization, location, or department..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full px-4 py-3 pl-12 pr-12 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-orange-500"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchTerm && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <section className="py-8 bg-black max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-4">
            {/* Sidebar for Departments with Fixed Height and Scroll */}
            <aside className="w-full md:w-1/4 bg-gray-800 rounded-lg h-fit md:sticky md:top-24">
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-4">Departments</h3>
                
                {/* Scrollable Department List */}
                <div className="max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                  <ul className="space-y-3">
                    {departments.map((department) => (
                      <li
                        key={department}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                        onClick={() => handleDepartmentChange(department)}
                      >
                        <input
                          type="checkbox"
                          id={`dept-${department}`}
                          checked={selectedDepartments.includes(department)}
                          onChange={() => handleDepartmentChange(department)}
                          className="w-4 h-4 accent-orange-500 cursor-pointer"
                          onClick={(e) => e.stopPropagation()}
                        />
                        <label
                          htmlFor={`dept-${department}`}
                          className="text-white text-sm cursor-pointer flex-1"
                        >
                          {department}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Clear Filters Button */}
                {selectedDepartments.length > 0 && (
                  <button
                    onClick={() => setSelectedDepartments([])}
                    className="mt-4 w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    Clear All Filters ({selectedDepartments.length})
                  </button>
                )}
              </div>
            </aside>

            {/* Job Cards */}
            <div className="w-full md:w-3/4">
              {filteredJobs.length === 0 ? (
                <div className="bg-white p-8 rounded-lg text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">No jobs found</h3>
                  <p className="text-gray-600">
                    Try adjusting your search or department filter to find more opportunities.
                  </p>
                </div>
              ) : (
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredJobs.map((job, index) => (
                    <li
                      key={job.id || index}
                      className="bg-white border rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col h-full"
                    >
                      {/* Hero Section */}
                      <section className="bg-[#2b2b2b] p-6 rounded-t-xl">
                        <header className="flex justify-between items-center">
                          <span className="text-orange-500 font-bold text-xs px-2 py-1 bg-orange-200 rounded-md">
                            {job.jobPositionStatus === 'open' ? 'OPEN' : 'NEW'}
                          </span>
                          <div className="text-orange-500">
                            <BriefcaseBusiness size={24} />
                          </div>
                        </header>
                        <h4 className="text-xl text-white/90 font-bold mt-3 break-words leading-snug">
                          {job.jobName}
                        </h4>
                        <p className="text-gray-300 text-sm mt-2">
                          {job.organizationName}
                        </p>
                      </section>

                      {/* Details Section */}
                      <div className="flex flex-col justify-between flex-grow p-6 gap-4">
                        <div className="space-y-2">
                          {job.department && (
                            <div className="flex items-start gap-2">
                              <BriefcaseBusiness className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-700 text-sm font-medium break-words">
                                {job.department}
                              </p>
                            </div>
                          )}
                          
                          {job.jobLocation && (
                            <div className="flex items-start gap-2">
                              <MapPin className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-700 text-sm break-words">
                                {job.jobLocation}
                              </p>
                            </div>
                          )}
                          
                          {job.salary && (
                            <div className="flex items-start gap-2">
                              <DollarSign className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-700 text-sm font-semibold">
                                {job.salary}
                              </p>
                            </div>
                          )}
                          
                          <div className="flex items-center gap-2 text-gray-600 text-xs pt-2">
                            <Calendar className="w-4 h-4 flex-shrink-0" />
                            <span>Posted: {formatDate(job.jobPostedDate)}</span>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                          <button
                            onClick={() => {
                              // You can add a view details modal or navigation here
                              console.log('View details for:', job.jobName)
                              scrollToTop()
                            }}
                            className="text-orange-500 hover:text-orange-600 font-medium text-sm"
                          >
                            View Details
                          </button>
                          <button
                            className="bg-orange-500 text-white py-2 px-5 rounded-full font-semibold text-sm uppercase hover:bg-orange-600 transition-all shadow-md"
                            onClick={() => handleApplyClick(job)}
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #f97316;
          border-radius: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ea580c;
        }

        /* Firefox scrollbar */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #f97316 #1f2937;
        }
      `}</style>
    </>
  )
}
