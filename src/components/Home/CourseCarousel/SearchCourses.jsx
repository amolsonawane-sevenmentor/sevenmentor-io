"use client"

import { useState, useEffect, useRef } from "react"
import { Search, Mic, MicOff } from "lucide-react"
import { TypeAnimation } from "react-type-animation"
import { useRouter } from "next/navigation"
import { courses } from "./CarouselData"
import Image from "next/image"

const SearchCourses = () => {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState([])
  const searchRef = useRef(null)
  const [isListening, setIsListening] = useState(false)
  const [isSpeechSupported, setIsSpeechSupported] = useState(false)
  const [voiceSearchActive, setVoiceSearchActive] = useState(false)
  const [isTyping, setIsTyping] = useState(false)

  // Check if speech recognition is supported
  useEffect(() => {
    setIsSpeechSupported("SpeechRecognition" in window || "webkitSpeechRecognition" in window)
  }, [])

  // Flatten and deduplicate courses by title
  const allCourses = Object.values(courses)
    .flat()
    .reduce((acc, course) => {
      const existingCourse = acc.find((c) => c.title === course.title)
      if (!existingCourse) {
        acc.push(course)
      }
      return acc
    }, [])

  // Handle outside clicks to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSearch = (e) => {
    const query = e.target.value
    setSearchQuery(query)
    setIsTyping(query.length > 0)
    performSearch(query)
  }

  ///working voice search
  // const performSearch = (query) => {
  //   if (query.length >= 2) {
  //     const queryWords = query
  //       .toLowerCase()
  //       .split(" ")
  //       .filter((word) => word);
  //     const uniqueTitles = new Set();
  //     const filtered = [];

  //     allCourses.forEach((course) => {
  //       const title = course.title.toLowerCase();
  //       const matches = queryWords.some((word) => title.includes(word));

  //       if (matches) {
  //         if (!uniqueTitles.has(title)) {
  //           uniqueTitles.add(title);
  //           filtered.push(course);
  //         }
  //       }
  //     });

  //     setResults(filtered.slice(0, 7));
  //     setShowResults(true);
  //   } else {
  //     setShowResults(false);
  //   }
  // };

  //excat search at top
  const performSearch = (query) => {
    if (query.length >= 2) {
      const queryWords = query
        .toLowerCase()
        .split(" ")
        .filter((word) => word)
      const uniqueTitles = new Set()
      const exactMatches = []
      const partialMatches = []

      allCourses.forEach((course) => {
        const title = course.title.toLowerCase()
        const isExactMatch = title === query.toLowerCase()
        const isPartialMatch = queryWords.some((word) => title.includes(word))

        if (isExactMatch) {
          if (!uniqueTitles.has(title)) {
            uniqueTitles.add(title)
            exactMatches.push(course)
          }
        } else if (isPartialMatch) {
          if (!uniqueTitles.has(title)) {
            uniqueTitles.add(title)
            partialMatches.push(course)
          }
        }
      })

      const filtered = [...exactMatches, ...partialMatches]

      setResults(filtered.slice(0, 7)) // Limit to 7 results
      setShowResults(true)
    } else {
      setShowResults(false)
    }
  }

  const handleResultClick = (link) => {
    router.push(link)
    setShowResults(false)
    setSearchQuery("")
    setIsTyping(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (results.length > 0) {
      router.push(results[0].link)
      setShowResults(false)
      setSearchQuery("")
      setIsTyping(false)
    }
  }

  const startVoiceSearch = () => {
    if (!isSpeechSupported) {
      alert("Speech recognition is not supported in your browser.")
      return
    }

    setIsListening(true)
    setVoiceSearchActive(true)
    setSearchQuery("Speak Now Listening...") // Set placeholder text

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()

    recognition.lang = "en-US"
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      setSearchQuery(transcript) // Update input field with transcript
      performSearch(transcript)
      setIsTyping(true) // Stop placeholder animation
    }

    recognition.onend = () => {
      setIsListening(false)
      setVoiceSearchActive(false)
    }

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error)
      setIsListening(false)
      setVoiceSearchActive(false)
      alert("Error occurred during voice search. Please try again.")
    }

    recognition.start()
  }

  return (
    <div className="relative max-w-md mx-auto" ref={searchRef}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            placeholder={isListening ? "Speak Now Listening..." : ""}
            className="w-full p-3 pl-10 pr-12 rounded-full border-2 border-orange-500 bg-white text-black"
            value={searchQuery}
            onChange={handleSearch}
            onFocus={() => {
              if (searchQuery.length >= 2 && !isListening) setShowResults(true)
            }}
            disabled={isListening} // Disable input during voice search
            suppressHydrationWarning={true}
          />
          {!isTyping && !isListening && (
            <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-gray-500 pointer-events-none">
              <TypeAnimation
                sequence={[
                  "Search for Data Analytics...",
                  1500,
                  "Search for Data Science & AI...",
                  1500,
                  "Search for Advance Genrative AI...",
                  1500,
                  "Search for Artificial Intelligence...",
                  1500,
                  "Search for Machine Learning...",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </div>
          )}
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500 w-5 h-5" />

          {/* Voice search button */}
          {isSpeechSupported && (
            <button
              type="button"
              onClick={startVoiceSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500 hover:text-orange-600 transition-colors"
              disabled={isListening}
            >
              {isListening ? <Mic className="w-5 h-5 animate-pulse" /> : <MicOff className="w-5 h-5" />}
            </button>
          )}
        </div>
      </form>

      {showResults && results.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-white rounded-lg shadow-lg">
          <ul>
            {results.map((course) => (
              <li
                key={course.id}
                className="p-3 hover:bg-orange-100 cursor-pointer border-b last:border-0"
                onClick={() => handleResultClick(course.link)}
              >
                <div className="flex items-center">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-10 h-10 object-cover rounded mr-2"
                  />
                  <div>
                    <div className="font-medium">{course.title}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SearchCourses
