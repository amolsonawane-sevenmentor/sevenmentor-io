"use client"

import React ,{ useState } from "react";
import HomePopUpForm from "../HomeStickyButton/HomePopUpForm";

export default function OrbitContent({ mailId, bannerTitle, contactNo }) {
  const [showPopup, setShowPopup] = useState(false)

  const handleOpenPopup = () => {
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <section className=" px-4 py-12 md:py-16 lg:py-10">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold md:text-5xl lg:leading-tight">
              <span className="text-white">One Platform, </span>
              <span className="text-orange-500">Infinite Possibilities.</span>
            </h2>

            <h2 className="text-lg font-semibold md:font-normal md:text-2xl lg:text-3xl">
              <span className="text-white">Empower Your Future with Our </span>
              <span className="text-orange-500">Industry-Focused</span>
              <span className="text-white"> Professional Programs</span>
            </h2>
          </div>

          <p className="text-gray-300 text-md font-medium">
            Unlock your potential with expert-led, career-focused training that prepares you for the real world. At
            SevenMentor, we offer immersive, industry-aligned learning designed to build the skills top companies seek.
            Gain hands-on experience, learn from seasoned mentors, and take your next big career step with confidence.
          </p>

          <p className="text-orange-500 text-lg font-medium">The future you want starts here.</p>

          <div className="flex w-full items-center justify-center md:inline md:justify-start">
            <button
              id="request-call-back-btn"
              className="inline-block rounded-full bg-orange-500 px-6 py-3 md:mt-3 text-white font-medium hover:bg-orange-600 transition-colors"
              onClick={handleOpenPopup}
              suppressHydrationWarning={true}
            >
              Request Callback
            </button>
            {showPopup && (
              <HomePopUpForm
                isOpen={showPopup}
                onClose={handleClosePopup}
                title={"Request Callback"}
                mailId={mailId}
                bannerTitle={bannerTitle}
                contactNo={contactNo}
                mailSubject={"New Callback Request Received From PopUp Form"}
                userEmailSubject={"Thank You For Requesting A Course Details"}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
