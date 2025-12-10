// "use client"

// import React, { useEffect } from 'react';
// // import VIEDOS from '../../../../../public/viedos/Starting_with_Query.MP4'
// import { Video } from "reactjs-media";
// const VideoPopup = ({ videoUrl, onClose }) => {
//   useEffect(() => {
//     // Prevent scrolling when popup is open
//     document.body.style.overflow = 'hidden';
    
//     // Handle escape key to close popup
//     const handleEscape = (e) => {
//       if (e.key === 'Escape') onClose();
//     };
    
//     window.addEventListener('keydown', handleEscape);
    
//     return () => {
//       document.body.style.overflow = 'auto';
//       window.removeEventListener('keydown', handleEscape);
//     };
//   }, [onClose]);

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
//       <div className="relative w-full max-w-4xl bg-gray-900 rounded-lg overflow-hidden">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-1 z-10 hover:bg-red-700 transition"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
        
//         {/* Fixed height and width video container */}
//         <div className="w-full" style={{ height: "calc(100vh - 200px)", maxHeight: "600px" }}>
//         {/* <iframe
//         aria-label='Video'
//   src={`${videoUrl}?autoplay=1&rel=0&modestbranding=1`}
//   title="Course Preview"
//   className="w-full h-full"
//   allowFullScreen
//   frameBorder="0"
//   allow="autoplay; encrypted-media; picture-in-picture"
// ></iframe> */}
// <Video
//     src={videoUrl}
//     controls={true}
//     height={500}
//     width={900}
 
// />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoPopup;


"use client"

import React, { useEffect } from 'react';

const VideoPopup = ({ videoUrl, onClose }) => {
  useEffect(() => {
    // Prevent scrolling when popup is open
    document.body.style.overflow = 'hidden';
    
    // Handle escape key to close popup
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleEscape);
    
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  // Helper: Is YouTube or Local?
  const isYouTube = (url) => url.includes("youtube.com") || url.includes("youtu.be");

  // If YouTube, extract embed URL
  const getYouTubeEmbedUrl = (url) => {
    try {
      const urlObj = new URL(url);
      let videoId = "";
      if (urlObj.hostname.includes("youtu.be")) {
        videoId = urlObj.pathname.slice(1);
      } else if (urlObj.hostname.includes("youtube.com")) {
        videoId = urlObj.searchParams.get("v");
      }
      if (!videoId) return null;
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    } catch {
      return null;
    }
  };

  let content = null;
  if (isYouTube(videoUrl)) {
    const embedUrl = getYouTubeEmbedUrl(videoUrl);
    content = embedUrl ? (
      <iframe
        aria-label="Course preview video"
        src={embedUrl}
        title="Course Preview"
        className="w-full h-full"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        frameBorder="0"
      />
    ) : (
      <p className="text-white p-4">Invalid YouTube video URL</p>
    );
  } else {
    // Assume it's a local or remote video file
    content = (
      <video
        src={videoUrl}
        controls
        autoPlay
        className="w-full h-full "
        style={{ maxHeight: "600px" }}
      >
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-red-600 rounded-full p-1 z-10 hover:bg-red-700 transition"
          aria-label="Close video popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="w-full" style={{ height: "calc(100vh - 200px)", maxHeight: "600px" }}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
