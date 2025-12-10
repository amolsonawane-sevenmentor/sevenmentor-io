

"use client"

import { useState } from "react"
import RewardSpinner from "../../../components/Rewards/RewardSpinner"
import RewardForm from "../../../components/Rewards/RewardForm"
import DisplayWinner from "../../../components/Rewards/DisplayWinner"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)
  const [winner, setWinner] = useState(null)
  const [showWinner, setShowWinner] = useState(false)

  const handleFormSubmit = async (formData) => {
    setIsModalOpen(false)
    setIsSpinning(true)

    // Simulate API call delay
    setTimeout(() => {
      const prizes = [
        "25% DISCOUNT",
        "LAPTOP BAG",
        "CASH BACK",
        "500 RS",
        "FREE COURSE",
        "AMAZON VOUCHER",
        "15% DISCOUNT",
        "SURPRISE GIFT",
      ]

      const randomPrize = prizes[Math.floor(Math.random() * prizes.length)]

      setWinner({
        name: formData.name,
        prize: randomPrize,
      })

      setIsSpinning(false)
      setShowWinner(true)
    }, 4000)
  }

  const resetGame = () => {
    setWinner(null)
    setShowWinner(false)
    setIsSpinning(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-orange-900 flex items-center justify-center p-4 mt-12">
      <div className="text-center max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
         
          <p className="text-md text-gray-300 font-semibold bg-gray-800/30 px-8 py-3 rounded-full border border-orange-500/30 inline-block">
            Spin the wheel and win amazing prizes!
          </p>
        </div>

        {/* Spinner */}
        <div className="mb-12">
          <RewardSpinner isSpinning={isSpinning} />
        </div>

        {/* Action Button */}
        {!showWinner && !isSpinning && (
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold py-4 px-5 rounded-full text-md shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse border-4 border-orange-400 relative overflow-hidden"
          >
            <span className="relative z-10">🎁 SPIN TO WIN AMAZING REWARDS! 🎁</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-transparent animate-pulse"></div>
          </button>
        )}

        {/* Spinning State */}
        {isSpinning && (
          <div className="text-orange-400 text-xl font-bold animate-bounce bg-gray-800/50 px-5 py-4 rounded-full border-2 border-orange-500 inline-block">
            🎲 SPINNING... GOOD LUCK! 🎲
          </div>
        )}

        <RewardForm isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleFormSubmit} />
        <DisplayWinner winner={winner} isVisible={showWinner} onClose={resetGame} />
      </div>
    </div>
  )
}