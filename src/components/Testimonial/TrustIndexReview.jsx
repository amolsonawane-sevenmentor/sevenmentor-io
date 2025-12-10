"use client"
import React, { Suspense, lazy } from 'react';
import "../../../Home/HomeBanner/HomeBanner.css"


// Lazy load the TrustIndexWidget component
const TrustIndexWidget = lazy(() => import('./TrustIndexWidget.jsx'));

function TrustIndexReview() {
  return (
    <div className="bg-black py-2 sm:py-8">
      <div className="container mx-auto px-2 lg:px-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-4">
          Our Success Lies In Our Learner&apos;s, {" "}
            <span className="text-orange-500 text-3xl sm:!text-6xl animated-text-fill !tracking-tight">
            Success 
            </span>
            {" "}Stories
          </h2>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
          Explore our student&apos;s experiences and discover how we&apos;ve helped them
            achieve their goals through excellence and dedication.
          </p>
        </div>

        <div className="relative w-full mx-auto">
          <div className="relative bg-gray-900 rounded-xl shadow-xl xs:px-2 sm:px-5 lg:px-8 xs:py-0 lg:py-12">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/70 to-black rounded-xl blur opacity-30"></div>
            {/* Use flexbox to display TrustindexWidget components */}
            <div className="flex flex-wrap justify-center">
              <div className="w-full p-2" style={{ height: '260px' }}> {/* Set a fixed height to keep layout consistent */}
                {/* Suspense to handle the lazy loading */}
                <Suspense
                  fallback={
                    <div className="w-full h-full flex justify-center items-center">
                      {/* White loading spinner */}
                      <div className="border-4 border-t-4 border-orange-500 rounded-full w-16 h-16 animate-spin"></div>
                    </div>
                  }
                >
                  <TrustIndexWidget />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustIndexReview;
