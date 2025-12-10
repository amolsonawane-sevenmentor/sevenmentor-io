"use client";
import { useEffect, useState, useRef } from "react"
import DomainSidebar from "./BlogLeftSlider"
import BlogCard from "./BlogCard"
import Pagination from "./Pagination"
import BlogSearch from "./BlogSearch.jsx"

import StickyButton from "../StickyButton/StickyButton.jsx"
import { fetchInitialBlogPosts, fetchRemainingBlogPosts, fetchBlogCategories } from "../../services/BlogService.js"
import ContactLinks from "../Courses/CourseComponents/ContactLinks/ContactLinks.jsx"
import AboveFooterForm from "../Home/AboveFooterForm/AboveFooterForm"

// Cache variables outside component to persist across navigations
let cachedAllPosts = null
let cachedCategories = null
let cacheTimestamp = null
const CACHE_DURATION = 5 * 60 * 1000 // 5 minutes

export default function BlogPage() {
  const [categories, setCategories] = useState([{ id: "all", title: "All Blogs" }])
  const [selectedCategory, setSelectedCategory] = useState("All Blogs")
  const [blogPosts, setBlogPosts] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false) // Page loads instantly
  const [initialLoaded, setInitialLoaded] = useState(false) // Track initial 9 posts
  const [allLoaded, setAllLoaded] = useState(false) // Track all posts loaded
  const POSTS_PER_PAGE = 9
  
  // Add refs to track loading states and prevent duplicate requests
  const loadingRef = useRef(false)
  const mountedRef = useRef(true)

  useEffect(() => {
    mountedRef.current = true
    return () => {
      mountedRef.current = false
    }
  }, [])

  useEffect(() => {
    const getAllData = async () => {
      if (loadingRef.current) return
      
      loadingRef.current = true
      
      try {
        // Check if we have valid cached data
        const now = Date.now()
        const isCacheValid = cachedAllPosts && cachedCategories && cacheTimestamp && (now - cacheTimestamp) < CACHE_DURATION

        if (isCacheValid) {
          // Use cached data
          setBlogPosts(cachedAllPosts)
          setCategories(cachedCategories)
          setInitialLoaded(true)
          setAllLoaded(true)
        } else {
          // Load initial 9 posts first for immediate display
          const initialPostsResponse = await fetchInitialBlogPosts()
          
          if (!mountedRef.current) return

          setBlogPosts(initialPostsResponse.data || [])
          setInitialLoaded(true)

          // Load all data in background using Promise.all
          setTimeout(async () => {
            if (!mountedRef.current) return
            
            try {
              const [allPostsResponse, categoriesResponse] = await Promise.all([
                fetchRemainingBlogPosts(),
                fetchBlogCategories(1000)
              ])

              if (!mountedRef.current) return

              const allPosts = [...(initialPostsResponse.data || []), ...(allPostsResponse.data || [])]
              const categoryList = categoriesResponse.data || []
              const finalCategories = [{ id: "all", title: "All Blogs" }, ...categoryList]

              // Remove duplicates from posts
              const uniquePosts = allPosts.filter((post, index, self) => 
                index === self.findIndex(p => p.id === post.id)
              )

              // Cache the data
              cachedAllPosts = uniquePosts
              cachedCategories = finalCategories
              cacheTimestamp = Date.now()

              // Update state
              setBlogPosts(uniquePosts)
              setCategories(finalCategories)
              setAllLoaded(true)
            } catch (error) {
              console.error("Error fetching all data", error)
              if (mountedRef.current) {
                setAllLoaded(true)
              }
            }
          }, 100)
        }
      } catch (error) {
        console.error("Error fetching initial data", error)
        if (mountedRef.current) {
          setInitialLoaded(true)
        }
      } finally {
        loadingRef.current = false
      }
    }

    // Reset states when component mounts/remounts
    setInitialLoaded(false)
    setAllLoaded(false)
    setBlogPosts([])
    loadingRef.current = false

    getAllData()
  }, []) // Empty dependency array to run only on mount

  // Filter posts based on category and search query
  const getFilteredPosts = () => {
    let filtered = blogPosts

    // Filter by category
    if (selectedCategory !== "All Blogs") {
      const selectedCatObj = categories.find((cat) => cat.title === selectedCategory)
      filtered = filtered.filter((post) => post.category === selectedCatObj?.id)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.content1.toLowerCase().includes(query) ||
          post.authorName.toLowerCase().includes(query),
      )
    }

    return filtered
  }

  const filteredPosts = getFilteredPosts()
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const currentPosts = Array.isArray(filteredPosts)
    ? filteredPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE)
    : []

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat)
    setCurrentPage(1)
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  const handleClearSearch = () => {
    setSearchQuery("")
    setCurrentPage(1)
  }

  return (
    <>
      <div className="bg-black">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 text-center mt-20">Blogs</h1>

        <div className="flex items-center justify-center gap-4 my-5">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          <span className="text-orange-500 font-bold md:text-md text-sm text-center">
            &quot;Insights, Ideas, and Inspiration&quot;
          </span>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        </div>

        {/* Search Component */}
        <BlogSearch
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          onClearSearch={handleClearSearch}
        />

        <div className="flex min-h-screen md:flex-row flex-col justify-start">
          {/* Sidebar */}
          <DomainSidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
            blogPosts={blogPosts}
          />

          {/* Blog Cards */}
          <main className="flex-1 p-6 pt-0">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-white">{selectedCategory}</h1>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <p className="text-orange-500">
                  {initialLoaded 
                    ? `Showing ${currentPosts.length} of ${filteredPosts.length} posts${!allLoaded ? ' (Loading more...)' : ''}`
                    : "Loading posts..."
                  }
                </p>
                {searchQuery && <p className="text-sm text-gray-400">Results for "{searchQuery}"</p>}
              </div>
            </div>

            {!initialLoaded ? (
              // Show minimal loading for initial posts only
              <div className="grid md:gap-6 gap-8 grid-cols-1 lg:grid-cols-3">
                {Array.from({ length: 9 }, (_, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4 animate-pulse">
                    <div className="h-48 bg-gray-700 rounded mb-4"></div>
                    <div className="h-4 bg-gray-700 rounded mb-2"></div>
                    <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-700 rounded w-1/2"></div>
                  </div>
                ))}
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">No blogs found</h3>
                <p className="text-gray-400 mb-4">
                  {searchQuery
                    ? `No blogs match your search for "${searchQuery}"`
                    : "No blogs available in this category"}
                </p>
                {searchQuery && (
                  <button
                    onClick={handleClearSearch}
                    className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors cursor-pointer"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            ) : (
              <>
                <div className="grid md:gap-6 gap-8 grid-cols-1 lg:grid-cols-3">
                  {currentPosts.map((post) => (
                    <BlogCard key={post.id} post={post} categories={categories} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="mt-8">
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                  </div>
                )}
              </>
            )}
          </main>
        </div>

        <AboveFooterForm mailId="registration@sevenmentor.com" />
        <StickyButton
          mailId="registration@sevenmentor.com"
          contactNo="7798058777"
          bannerTitle="Individual Course At SevenMentor"
        />
        <ContactLinks phoneno={"7798058777"} whatsappno={"7798058777"} />
      </div>
    </>
  )
}
