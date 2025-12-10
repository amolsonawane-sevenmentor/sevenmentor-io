"use client"

import { useState } from "react"
import PopupForm from "../../../../Forms/PopUpForm/PopUpForm.jsx"
// import PopupForm from "../Forms/PopUpForm/PopUpForm"
import VideoPopup from "../FreeCourseBanner/VideoPopUp.jsx"

const FreeCourseBanner = ({ courseInfo }) => {
  const [showPopupForm, setShowPopupForm] = useState(false)
  const [showVideo, setShowVideo] = useState(false)

  const handleOpenPopup = () => {
    setShowPopupForm(true)
  }

  const handleClosePopup = () => {
    setShowPopupForm(false)
  }

  const handleFormSuccess = () => {
    setShowPopupForm(false)
    console.log("VideoPip")
    setShowVideo(true)
  }

  const closeBtn = () => {
    setShowPopupForm(false)
    setShowVideo(false)
  }

  return (
    <div className="w-full py-16 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-gray-950 via-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Main Card */}
        <div className="flex flex-col lg:flex-row bg-gray-800/70 rounded-3xl overflow-hidden shadow-2xl border border-gray-700 backdrop-blur-md">
          {/* Left Section */}
          <div className="flex-1 p-8 md:p-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-white mb-6">
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {courseInfo.title}
              </span>
            </h1>

            {/* Rating */}
            <div className="flex items-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-300 text-sm ml-3">
                {courseInfo.rating}/5.0 ({courseInfo.reviews}+ reviews)
              </span>
            </div>

            {/* Tags */}
            <div className="flex space-x-3 mb-8">
              <span className="bg-orange-500/90 text-white text-xs font-semibold py-1 px-3 rounded-full">
                Bestseller
              </span>
              <span className="bg-gray-700 text-orange-300 text-xs font-semibold py-1 px-3 rounded-full border border-orange-400">
                Top Rated
              </span>
            </div>

            {/* Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {courseInfo.points.map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 bg-gray-700/40 rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  <div className="h-10 w-18 bg-orange-500/30 flex items-center justify-center rounded-full text-orange-400 text-xl">
                    {courseInfo.icon}
                  </div>
                  <p className="text-gray-300 text-sm">{point}</p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={handleOpenPopup}
              className="group relative bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl overflow-hidden transition-transform transform hover:scale-105 shadow-xl"
            >
              <span className="absolute inset-0 bg-orange-700 opacity-0 group-hover:opacity-20 transition-all rounded-xl"></span>
              <div className="flex items-center justify-center relative z-10">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
                Watch Course Preview
              </div>
            </button>
          </div>

          {/* Right Section */}
          <div className="flex-1 relative">
            <img
              src={courseInfo.image || "/placeholder.svg"}
              alt={courseInfo.title}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-3xl"></div>

            {/* Floating Badges */}
            <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
              <span className="bg-orange-500 text-white text-xs py-1 px-3 rounded-full">Industry Expert Led</span>
              <span className="bg-gray-700 text-white text-xs py-1 px-3 rounded-full border border-orange-400">
                Live Projects
              </span>
              <span className="bg-gray-700 text-white text-xs py-1 px-3 rounded-full border border-orange-400">
                100% Placement
              </span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 text-center">
          {[
            {
              label: courseInfo.duration || "6 Months",
              subLabel: "Course Duration",
              icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              label: courseInfo.sessions || "12 Sessions",
              subLabel: "Live Workshops",
              icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
            },
            {
              label: courseInfo.certification ? "Industry Recognized" : "Certificate",
              subLabel: "Certification",
              icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-gray-800/60 rounded-2xl p-6 shadow-inner hover:shadow-orange-500/20 transition"
            >
              <div className="flex items-center justify-center w-14 h-14 mb-4 bg-orange-500/20 rounded-full">
                <svg className="w-7 h-7 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                </svg>
              </div>
              <h4 className="text-white text-lg font-semibold">{stat.label}</h4>
              <p className="text-gray-400 text-sm mt-1">{stat.subLabel}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Form */}
      {showPopupForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50">
          <div className="relative bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md">
            <button onClick={closeBtn} className="absolute top-2 right-2 text-gray-300 hover:text-white">
              ✖
            </button>
            <PopupForm
              isOpen={showPopupForm}
              onClose={handleClosePopup}
              onFormSuccess={handleFormSuccess}
              title="Join Now"
              mailId={courseInfo.mailId || "registration@sevenmentor.com"}
              bannerTitle={courseInfo.title || "Individual Course At SevenMentor"}
              contactNo={courseInfo.contactNo || "02071173125"}
              skipRedirect={true}
            />
          </div>
        </div>
      )}

      {/* Video Popup */}
      {showVideo && <VideoPopup videoUrl={courseInfo.videoUrl} onClose={() => setShowVideo(false)} />}
    </div>
  )
}

export default FreeCourseBanner

// ==============================================in above code the videopop after form submission
// ======================================in below code without form video popup

// "use client"

// import { useState } from "react"
// // import PopupForm from "../../../Forms/PopUpForm/PopUpForm"
// // import VideoPopUp from "./VideoPopUp"
// import VideoPopup from './VideoPopUp.jsx'
// import Image from "next/image"
// const FreeCourseBanner = ({ courseInfo }) => {
//   // Removed showPopupForm and related logic
//   const [showVideo, setShowVideo] = useState(false)

//   // Only open video popup
//   const handleOpenPopup = () => {
//     setShowVideo(true)
//   }

//   // Only close video popup
//   const closeBtn = () => {
//     setShowVideo(false)
//   }

//   return (
//     <div className="w-full py-8 px-4 sm:px-8 lg:px-20">
//       <div className="max-w-7xl mx-auto">
//         {/* Main Card */}
//         <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl border border-gray-700 backdrop-blur-md bg-black">
//           {/* Left Section */}
//           <div className="flex-1 p-6 sm:p-10 md:p-12">
//             <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white mb-6">
//               <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
//                 {courseInfo.title.split(" ")[0]}
//               </span>{" "}
//               {courseInfo.title.split(" ").slice(1).join(" ")}
//             </h1>

//             {/* Rating */}
//             <div className="flex items-center mb-6">
//               <div className="flex space-x-1">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                   </svg>
//                 ))}
//               </div>
//               <span className="text-gray-300 text-xs sm:text-sm ml-3">4.9/5.0 (350+ reviews)</span>
//             </div>

//             {/* Tags */}
//             <div className="flex flex-wrap gap-2 mb-8">
//               <span className="bg-orange-500/90 text-white text-xs font-semibold py-1 px-3 rounded-full">
//                 Bestseller
//               </span>
//               <span className="bg-gray-700 text-orange-300 text-xs font-semibold py-1 px-3 rounded-full border border-orange-400">
//                 Top Rated
//               </span>
//             </div>
//             {/* Points */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
//               {courseInfo.points.map((point, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center gap-3 p-3 bg-gray-700/40 rounded-lg hover:scale-105 transition-transform duration-300"
//                 >
//                   <div className="h-10 w-10 bg-orange-500/30 flex items-center justify-center rounded-full text-orange-400 text-xl">
//                     {courseInfo.icon}
//                   </div>
//                   <p className="text-gray-300 text-sm">{point}</p>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <button
//               onClick={handleOpenPopup}
//               className="group relative bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-5 sm:px-6 rounded-xl overflow-hidden transition-transform transform hover:scale-105 shadow-xl w-full sm:w-auto"
//             >
//               <span className="absolute inset-0 bg-orange-700 opacity-0 group-hover:opacity-20 transition-all rounded-xl"></span>
//               <div className="flex items-center justify-center relative z-10">
//                 <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                   <path
//                     fillRule="evenodd"
//                     d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 Watch Course Preview
//               </div>
//             </button>
//           </div>

//           {/* Right Section */}
//           <div className="flex-1 relative min-h-[250px] sm:min-h-[300px] lg:min-h-auto">
//             <Image
//               src={courseInfo.image || "/placeholder.svg"}
//               alt={courseInfo.title}
//               fill
//               className="object-cover opacity-80"
//               loading="lazy"
//               sizes="100vw"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-3xl lg:rounded-none lg:rounded-r-3xl"></div>

//             {/* Floating Badges */}
//             <div className="absolute bottom-5 left-5 flex flex-wrap gap-2 max-w-[90%] sm:max-w-[80%]">
//               <span className="bg-orange-500 text-white text-xs py-1 px-3 rounded-full whitespace-nowrap">Industry Expert Led</span>
//               <span className="bg-gray-700 text-white text-xs py-1 px-3 rounded-full border border-orange-400 whitespace-nowrap">
//                 Live Projects
//               </span>
//               <span className="bg-gray-700 text-white text-xs py-1 px-3 rounded-full border border-orange-400 whitespace-nowrap">
//                 100% Placement
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="w-full bg-black py-8 px-4 sm:px-6 md:px-10 lg:px-20 mt-10 rounded-3xl">
//           <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
//             {[
//               { label: "6 Months", subLabel: "Course Duration", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
//               {
//                 label: "12 Sessions",
//                 subLabel: "Live Workshops",
//                 icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
//               },
//               {
//                 label: "Industry Recognized",
//                 subLabel: "Certification",
//                 icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
//               },
//             ].map((stat, idx) => (
//               <div
//                 key={idx}
//                 className="bg-gray-900 rounded-xl p-5 flex flex-col items-center shadow-md hover:shadow-orange-600 transition-shadow duration-300 cursor-default"
//               >
//                 <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-gradient-to-tr from-orange-500 to-orange-600 shadow-md">
//                   <svg
//                     className="w-7 h-7 text-white"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d={stat.icon} />
//                   </svg>
//                 </div>
//                 <h4 className="text-orange-400 text-lg font-semibold">{stat.label}</h4>
//                 <p className="text-gray-300 text-sm mt-1">{stat.subLabel}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Video Popup */}
//       {showVideo && (
//         <VideoPopup
//           videoUrl={courseInfo.videoUrl}
//           onClose={closeBtn}
//         />
//       )}
//     </div>
//   )
// }

// export default FreeCourseBanner
