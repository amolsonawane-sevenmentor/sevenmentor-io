"use client"
import { useState, useEffect, useRef } from "react"
import { Search, Mic, MicOff, X } from 'lucide-react'
import { TypeAnimation } from "react-type-animation"

export default function BlogSearch({ searchQuery, onSearchChange, onClearSearch }) {
  const [isListening, setIsListening] = useState(false)
  const [isSpeechSupported, setIsSpeechSupported] = useState(false)
  const [voiceSearchActive, setVoiceSearchActive] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const searchRef = useRef(null)

  // Check if speech recognition is supported
  useEffect(() => {
    setIsSpeechSupported("SpeechRecognition" in window || "webkitSpeechRecognition" in window)
  }, [])

  // Update typing state when searchQuery changes
  useEffect(() => {
    setIsTyping(searchQuery.length > 0)
  }, [searchQuery])

  const handleInputChange = (e) => {
    const value = e.target.value
    setIsTyping(value.length > 0)
    onSearchChange(e)
  }

  const handleClearSearch = () => {
    setIsTyping(false)
    onClearSearch()
  }

  const startVoiceSearch = () => {
    if (!isSpeechSupported) {
      alert("Speech recognition is not supported in your browser.")
      return
    }

    setIsListening(true)
    setVoiceSearchActive(true)

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    const recognition = new SpeechRecognition()

    recognition.lang = "en-US"
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      // Create a synthetic event to pass to onSearchChange
      const syntheticEvent = {
        target: { value: transcript }
      }
      onSearchChange(syntheticEvent)
      setIsTyping(true)
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
    <div className="max-w-2xl mx-auto px-6 mb-8">
      <div className="relative" ref={searchRef}>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder={isListening ? "Speak Now Listening..." : ""}
          disabled={isListening}
          className="block w-full pl-10 pr-20 py-3 border border-gray-600 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />

        {/* Animated placeholder text */}
        {!isTyping && !isListening && (
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-gray-400 pointer-events-none">
            <TypeAnimation
              sequence={[
                "Search for UML and BPMN...",
                1500,
                "Search for DevOps tutorials...",
                1500,
                "Search for Cloud Computing...",
                1500,
                "Search for Networking guides...",
                1500,
                "Search for Programming tips...",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        )}

        <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-2">
          {/* Voice search button */}
          {isSpeechSupported && (
            <button
              type="button"
              onClick={startVoiceSearch}
              disabled={isListening}
              className="text-orange-500 hover:text-orange-600 transition-colors cursor-pointer"
              title={isListening ? "Listening..." : "Voice Search"}
            >
              {isListening ? (
                <Mic className="w-5 h-5 animate-pulse" />
              ) : (
                <MicOff className="w-5 h-5" />
              )}
            </button>
          )}

          {/* Clear search button */}
          {searchQuery && !isListening && (
            <button
              onClick={handleClearSearch}
              className="text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
              title="Clear search"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Search status indicators */}
      <div className="flex items-center justify-between mt-2">
        {searchQuery && (
          <p className="text-sm text-gray-400">
            Searching for: <span className="text-orange-500 font-medium">"{searchQuery}"</span>
          </p>
        )}
        
        {isListening && (
          <p className="text-sm text-orange-500 font-medium animate-pulse">
            🎤 Listening...
          </p>
        )}
        
        {!isSpeechSupported && (
          <p className="text-xs text-gray-500">
            Voice search not supported in this browser
          </p>
        )}
      </div>
    </div>
  )
}
