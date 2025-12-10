
"use client"

import { useEffect } from "react"
import { Trophy, Gift, X } from "lucide-react"

export default function DisplayWinner({ winner, isVisible, onClose }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [onClose])

  if (!winner || !isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-gradient-to-b from-gray-900 to-black border border-orange-500/50 shadow-xl rounded-lg p-6">
        
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-orange-400 transition-colors duration-200"
          onClick={onClose}
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="mx-auto w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <Trophy size={28} className="text-black" />
          </div>
          
          <h2 className="text-2xl font-semibold text-orange-400 mb-2">
            Congratulations!
          </h2>
          
          <p className="text-gray-300 text-lg">
            <span className="text-orange-400 font-medium">{winner.name}</span>
          </p>
        </div>

        {/* Prize Section */}
        <div className="text-center mb-6">
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/30 rounded-lg p-6 mb-4">
            <Gift size={32} className="mx-auto mb-3 text-orange-400" />
            <h3 className="text-xl font-medium text-white mb-2">You've Won:</h3>
            <p className="text-orange-400 text-lg font-semibold">{winner.prize}</p>
          </div>
          
          <p className="text-gray-400 text-sm bg-gray-800/50 p-3 rounded border border-gray-700">
            Prize details will be sent to your email shortly.
          </p>
        </div>

        {/* Action Button */}
        <div className="text-center">
          <button
            onClick={onClose}
            className="w-full bg-orange-500 hover:bg-orange-600 text-black py-3 px-6 font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  )
}