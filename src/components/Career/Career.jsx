"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { careerFrontendService } from "../../services/career-frontend-service.js"
import ContactFranchise from "../../components/Franchise/ContactFranchise.jsx"
import { BriefcaseBusiness, Calendar } from "lucide-react"
import CareerPopupForm from "./CareerPopupForm"
import CareerSearch from "./CareerSearch"
import Perks from "./Perks.jsx"

export default function Career() {
  const [selectedJob, setSelectedJob] = useState({
    title: "",
    type: "",
    location: "",
  })
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredJobs, setFilteredJobs] = useState([])
  const [allCareers, setAllCareers] = useState([])
  const [categories, setCategories] = useState(["All"])
  const [categoryMap, setCategoryMap] = useState({}) // New state to map category IDs to titles
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch careers and categories on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        // Fetch careers and categories in parallel
        const [careersResponse, categoriesResponse] = await Promise.all([
          careerFrontendService.getCareers({ limit: 10000 }),
          careerFrontendService.getCareerCategories(),
        ])

        // Process careers data
        const careersData = careersResponse.data || []
        setAllCareers(careersData)
        setFilteredJobs(careersData)

        // Process categories data and create a mapping object
        const categoriesData = categoriesResponse.data || []
        const categoryTitles = categoriesData.map((cat) => cat.title)
        setCategories(["All", ...categoryTitles])
        
        // Create a mapping object from category ID to category title
        const categoryMapping = {}
        categoriesData.forEach(category => {
          categoryMapping[category.id] = category.title
        })
        setCategoryMap(categoryMapping)
      } catch (error) {
        console.error("Error fetching data:", error)
        setError("Failed to load careers data")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  // Helper function to get category title from careerCategory
  const getCategoryTitle = (careerCategory) => {
    if (!careerCategory) return ""

    // If it's an ID string, look it up in the categoryMap
    if (typeof careerCategory === "string" && categoryMap[careerCategory]) {
      return categoryMap[careerCategory]
    }

    // If it's an array, get the first item's title or ID
    if (Array.isArray(careerCategory) && careerCategory.length > 0) {
      const firstCategory = careerCategory[0]
      if (typeof firstCategory === 'string') {
        return categoryMap[firstCategory] || ""
      }
      return firstCategory.title || ""
    }

    // If it's an object, get its title
    if (typeof careerCategory === "object" && careerCategory.title) {
      return careerCategory.title
    }

    return ""
  }

  // Helper function to check if job matches category
  const jobMatchesCategory = (job, categoryName) => {
    if (!job.careerCategory) return false

    // If "All" is selected, include all jobs
    if (categoryName === "All") return true

    const jobCategoryTitle = getCategoryTitle(job.careerCategory)
    return jobCategoryTitle === categoryName
  }

  // Helper function to check if job matches search term in category
  const jobCategoryMatchesSearch = (job, searchTerm) => {
    if (!job.careerCategory) return false

    const term = searchTerm.toLowerCase()
    const jobCategoryTitle = getCategoryTitle(job.careerCategory).toLowerCase()

    return jobCategoryTitle.includes(term)
  }

  // Filter jobs based on selected category and search term
  useEffect(() => {
    let result = allCareers

    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter((job) => jobMatchesCategory(job, selectedCategory))
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(
        (job) =>
          job.title.toLowerCase().includes(term) ||
          job.location.toLowerCase().includes(term) ||
          job.type.toLowerCase().includes(term) ||
          jobCategoryMatchesSearch(job, term),
      )
    }

    setFilteredJobs(result)
  }, [selectedCategory, searchTerm, allCareers, categoryMap])

  const handlePopupOpen = (job) => {
    setSelectedJob({
      title: job.title,
      type: job.type,
      location: job.location,
    })
    setIsPopupOpen(true)
  }

  const handlePopupClose = () => setIsPopupOpen(false)

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
      <div className="bg-black min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-black min-h-screen flex justify-center items-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold text-orange-500 mb-4">Error Loading Careers</h2>
          <p className="text-gray-300">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="bg-black">
        <h1 className="text-3xl md:text-5xl font-bold text-orange-500 mb-8 text-center mt-20">Current Openings</h1>

        {/* Separator */}
        <div className="flex items-center justify-center gap-4 my-10">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          <span className="text-orange-500 font-bold md:text-md text-sm text-center">
            &quot;Unlock Your Potential. Build Your Future.&quot;
          </span>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        </div>

        {/* Search Component */}
        <div className="max-w-7xl mx-auto px-4">
          <CareerSearch
            searchQuery={searchTerm}
            onSearchChange={(e) => handleSearch(e.target.value)}
            onClearSearch={handleClearSearch}
          />
        </div>

        <section className="py-8 bg-black max-w-7xl mx-auto flex flex-col md:flex-row gap-6 px-4">
          {/* Sidebar for Categories */}
          <aside className="w-full md:w-1/4 bg-gray-800 p-6 rounded-lg">
            <h3 className="text-lg font-bold text-white mb-4">Categories</h3>
            <ul className="space-y-4">
              {categories.map((category) => (
                <li
                  key={category}
                  className={`cursor-pointer text-white p-2 rounded-lg ${
                    selectedCategory === category ? "bg-orange-500" : "hover:bg-gray-700"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </aside>

          {/* Job Cards */}
          <div className="w-full md:w-3/4">
            {filteredJobs.length === 0 ? (
              <div className="bg-white p-8 rounded-lg text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">No jobs found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or category filter to find more opportunities.
                </p>
              </div>
            ) : (
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredJobs.map((job, index) => (
                  <li
                    key={job.id || index}
                    className="bg-white border rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 flex flex-col h-full w-full"
                  >
                    {/* Hero Section */}
                    <section className="bg-[#2b2b2b] p-6 rounded-t-xl">
                      <header className="flex justify-between items-center">
                        <span className="text-orange-500 font-bold text-xs px-2 py-1 bg-orange-200 rounded-md">
                          NEW
                        </span>
                        <div className="text-orange-500">
                          <BriefcaseBusiness size={24} />
                        </div>
                      </header>
                      <Link href={`/careers/${job.slug}`}>
                        <h4 className="text-xl text-white/90 font-bold mt-3 break-words leading-snug hover:text-orange-300 transition-colors">
                          {job.title}
                        </h4>
                      </Link>
                    </section>

                    {/* Footer Section */}
                    <div className="flex flex-col justify-between flex-grow p-6 gap-4">
                      <div>
                        <p className="text-black text-sm font-bold">{job.type}</p>
                        <p className="text-gray-700 text-sm font-bold break-words">{job.location}</p>
                        {/* Display category if available */}
                        {/* {job.careerCategory && (
                          <p className="text-gray-600 text-xs mt-1">
                            Category: {getCategoryTitle(job.careerCategory)}
                          </p>
                        )} */}
                        <div className="flex items-center mt-2 text-gray-600 text-xs">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>Posted: {formatDate(job.postedDate)}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <Link
                          href={`/careers/${job.slug}`}
                          onClick={scrollToTop}
                          className="text-orange-500 hover:text-orange-600 font-medium"
                        >
                          View Details
                        </Link>
                        <button
                          className="cursor-pointer bg-orange-500 text-white py-2 px-5 rounded-full font-semibold uppercase hover:bg-orange-600 transition-all shadow-md"
                          onClick={() => handlePopupOpen(job)}
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

          {/* Popup Form */}
          <CareerPopupForm
            isOpen={isPopupOpen}
            onClose={handlePopupClose}
            jobTitle={selectedJob.title}
            jobType={selectedJob.type}
            jobLocation={selectedJob.location}
          />
        </section>

        {/* Additional Components */}
        <Perks />
        <ContactFranchise />
        {/* <AboveFooterForm mailId="corporate@sevenmentor.com" /> */}
      </div>
    </>
  )
}