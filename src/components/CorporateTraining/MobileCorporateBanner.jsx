"use client"
import { useState } from "react"
import { TrendingUp, Users, Award, ArrowRight, Sparkles } from "lucide-react"
import FranchiseForm from "../Forms/FranchiseForm.jsx"

export default function MobileCorporateBanner() {
  const [showPopup, setShowPopup] = useState(false)

  const handleOpenPopup = () => setShowPopup(true)
  const handleClosePopup = () => setShowPopup(false)

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 to-black">
      {/* Simplified background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-4 w-2 h-2 bg-orange-500 rotate-45 opacity-60"></div>
        <div className="absolute bottom-60 right-12 w-1 h-1 bg-orange-400 rotate-45 opacity-40"></div>
        <div className="absolute top-2/3 left-8 w-1.5 h-1.5 bg-orange-300 rotate-45 opacity-50"></div>
        <div className="absolute top-1/4 right-6 w-1 h-1 bg-orange-500 rotate-45 opacity-60"></div>
        <div className="absolute bottom-1/3 left-12 w-1.5 h-1.5 bg-orange-400 rotate-45 opacity-40"></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen p-6">
        {/* Header section */}
        <div className="pt-8">
          {/* Company badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 text-sm font-medium">SevenMentor</span>
          </div>

          {/* Main headline */}
          <div className="space-y-4">
            <h1 className="text-4xl font-black leading-tight">
              <div className="flex justify-start items-center">
                <div className=" text-white">WHERE </div>
                <div className=" text-orange-400 ml-2">TALENT</div>
              </div>
              <div className="flex justify-start items-center">
                <div className=" text-orange-500">MEETS </div>
                <div className=" text-white ml-2">HIRING</div>
              </div>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed max-w-sm">
              Customized Corporate Learning Solutions that Transform Teams
            </p>
          </div>
        </div>

        {/* Features section */}
        <div className="mt-[15px]">
          <div className="space-y-4">
            {/* Feature 1 */}
            <div className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/10">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg">Boost Productivity</h3>
                <p className="text-gray-400 text-sm">Accelerate team performance</p>
              </div>
              <ArrowRight className="w-5 h-5 text-orange-400" />
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/10">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg">Enhance Collaboration</h3>
                <p className="text-gray-400 text-sm">Build stronger connections</p>
              </div>
              <ArrowRight className="w-5 h-5 text-orange-400" />
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-4 bg-white/5 rounded-2xl p-4 border border-white/10">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg">Cultivate Leadership</h3>
                <p className="text-gray-400 text-sm">Develop future leaders</p>
              </div>
              <ArrowRight className="w-5 h-5 text-orange-400" />
            </div>
          </div>
        </div>

        {/* CTA section */}
        <div className="pb-8 space-y-6">
          {/* Primary CTA */}
          <button
            onClick={handleOpenPopup}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-2xl"
          >
            <span className="flex items-center justify-center gap-2">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </span>
          </button>

          {/* Secondary info */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">Join 10,000+ professionals already growing with us</p>
            <div className="flex justify-center items-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showPopup && (
        <FranchiseForm
          isOpen={showPopup}
          onClose={handleClosePopup}
          title="Request Callback"
          mailSubject={"New Callback Request Received"}
          userEmailSubject={"Thank You, Your Callback Request Has Been Received – SevenMentor"}
          contactNo={"7360000325"}
          bannerTitle={"Corporate Training Program"}
          emailRoute={"/corporate-form"}
          mailId={"corporate@sevenmentor.com"}
        />
      )}
    </div>
  )
}
