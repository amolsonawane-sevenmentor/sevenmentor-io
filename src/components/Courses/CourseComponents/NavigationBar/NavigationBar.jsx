"use client"

import { useState, useEffect, useRef } from "react"
import { useMediaQuery } from "react-responsive"

const NavigationBar = ({ sections, isVisible, differentPage }) => {
  const [activeSection, setActiveSection] = useState(null)
  const [isMounted, setIsMounted] = useState(false) // Track if component is mounted on client
  const [isDesktopState, setIsDesktopState] = useState(true) // Local state for desktop detection
  const buttonRefs = useRef({}) // To store refs for each button
  const scrollTimeoutRef = useRef(null) // Ref to store scroll timeout

  // Fix: Remove the incorrect third parameter and use proper media query hook
  // The third parameter should be an onChange callback function, not a boolean
  const isDesktop = useMediaQuery(
    { minWidth: 768 }, // Media query object
    undefined, // Device parameter (undefined for client-side)
    // Fix: Add proper onChange callback to handle media query changes safely
    (matches) => {
      // Only update state if component is still mounted
      if (isMounted) {
        setIsDesktopState(matches)
      }
    },
  )

  // Fix: Set mounted state and initialize desktop state safely
  useEffect(() => {
    setIsMounted(true)
    // Fix: Initialize desktop state based on window width to prevent hydration mismatch
    if (typeof window !== "undefined") {
      setIsDesktopState(window.innerWidth >= 768)
    }
  }, [])

  // Fix: Update local desktop state when media query changes and component is mounted
  useEffect(() => {
    if (isMounted) {
      setIsDesktopState(isDesktop)
    }
  }, [isDesktop, isMounted])

  useEffect(() => {
    // Fix: Add debounced scroll handler to prevent excessive function calls
    const handleScroll = () => {
      // Fix: Clear previous timeout to debounce scroll events
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // Fix: Debounce scroll handling to improve performance and prevent errors
      scrollTimeoutRef.current = setTimeout(() => {
        // Fix: Only proceed if component is still mounted and sections exist
        if (!isMounted || !sections) return

        let currentSection = null

        // Fix: Add try-catch to handle potential errors during scroll calculation
        try {
          Object.keys(sections).forEach((key) => {
            const sectionRef = sections[key]?.current
            if (sectionRef) {
              const { top } = sectionRef.getBoundingClientRect()
              const windowHeight = document.documentElement.clientHeight

              // Check if the section is visible in the viewport
              if (top >= 0 && top < windowHeight / 3) {
                currentSection = key
              }
            }
          })

          if (currentSection) {
            setActiveSection(currentSection)

            // Fix: Add safety check before scrolling button into view
            if (buttonRefs.current[currentSection]) {
              buttonRefs.current[currentSection].scrollIntoView({
                behavior: "smooth",
                inline: "center",
              })
            }
          }
        } catch (error) {
          // Fix: Silently handle scroll calculation errors to prevent crashes
          console.warn("NavigationBar scroll calculation error:", error)
        }
      }, 16) // Fix: 16ms debounce for smooth 60fps performance
    }

    // Fix: Only add scroll listener if window is available and component is mounted
    if (typeof window !== "undefined" && isMounted) {
      window.addEventListener("scroll", handleScroll, { passive: true }) // Fix: Add passive flag for better performance
      handleScroll() // Run on mount to set the initial active section

      return () => {
        // Fix: Clean up scroll listener and timeout on unmount
        window.removeEventListener("scroll", handleScroll)
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current)
        }
      }
    }
  }, [sections, isMounted]) // Fix: Add isMounted to dependency array

  // Fix: Add cleanup effect for component unmount
  useEffect(() => {
    return () => {
      // Fix: Clear any pending timeouts when component unmounts
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  // Fix: Don't render if not visible or not mounted (prevents hydration issues)
  if (!isVisible || !isMounted) return null

  const coursepageSections = [
    { key: "advisor", label: "Talk to Advisor" },
    { key: "skills", label: "Skills & Tools" },
    { key: "placement", label: "Placement" },
    { key: "whychoose", label: "Why Choose Us" },
    { key: "syllabus", label: "Curriculum" },
    { key: "faq", label: "FAQ" },
    { key: "quiz", label: "Quiz" },
    { key: "footerform", label: "Book Free Demo" },
  ]

  const differentPageSections= [
    { key: "advisor", label: "Talk to Advisor" },
    { key: "skills", label: "Skills & Tools" },
    { key: "placement", label: "Placement" },
    { key: "whychoose", label: "Why Choose Us" },
    { key: "faq", label: "FAQ" },
    { key: "footerform", label: "Book Free Demo" },
  ]

  const sectionTitles = differentPage ? differentPageSections : coursepageSections

  const scrollToSection = (sectionKey) => {
    // Fix: Add safety checks before scrolling to prevent errors
    if (!sections || !sections[sectionKey]) return

    const sectionRef = sections[sectionKey]?.current
    if (sectionRef && typeof window !== "undefined") {
      // Fix: Add try-catch for scroll operation to handle potential errors
      try {
        const navHeight = 105
        const sectionTop = sectionRef.getBoundingClientRect().top + window.scrollY - navHeight
        window.scrollTo({ top: sectionTop, behavior: "smooth" })
      } catch (error) {
        // Fix: Handle scroll errors gracefully
        console.warn("NavigationBar scroll error:", error)
      }
    }
  }

  // Fix: Use local desktop state instead of media query directly to prevent hydration issues
  // This ensures consistent rendering between server and client
  const navbarClassName = isDesktopState
    ? "fixed top-[125px] w-[85vw] overflow-hidden mr-auto bg-white/30 hidden md:block backdrop-blur-3xl border border-gray-400/50 rounded-full shadow-xl z-20"
    : "fixed top-[85px] w-[100vw] overflow-hidden mr-auto bg-white/20 px-4 backdrop-blur-3xl border border-gray-400/50 shadow-xl z-20"

  const navClassName = isDesktopState
    ? "flex justify-between md:px-3 py-0 overflow-x-auto"
    : "flex justify-between md:px-3 py-2 overflow-x-auto"

  return (
    <div className="flex justify-center items-center w-full mr-auto mx-auto">
      <div className={navbarClassName}>
        <nav className={navClassName}>
          {/* Fix: Add safety check for sectionTitles array */}
          {Array.isArray(sectionTitles) &&
            sectionTitles.map((section) => (
              <button
                aria-label={`Scroll to ${section.label} Section`} // Fix: More descriptive aria-label
                key={section.key}
                ref={(el) => {
                  // Fix: Add safety check when setting button refs
                  if (el && buttonRefs.current) {
                    buttonRefs.current[section.key] = el
                  }
                }}
                onClick={() => scrollToSection(section.key)}
                className={`${isDesktopState ? "my-1" : ""} relative px-6 py-${isDesktopState ? "1" : "2"} text-[14px] md:text-${isDesktopState ? "md" : "lg"} whitespace-nowrap text-white hover:bg-orange-500/20 ${
                  activeSection === section.key
                    ? "text-white hover:text-white !bg-orange-500/90 !hover:bg-orange-500/90 md:font-semibold rounded-full border-orange-600"
                    : "text-white hover:text-white md:font-semibold rounded-full border-orange-600"
                }`}
                suppressHydrationWarning={true} // Fix: Suppress hydration warnings for dynamic content
              >
                {section.label}
              </button>
            ))}
        </nav>
      </div>
    </div>
  )
}

export default NavigationBar
