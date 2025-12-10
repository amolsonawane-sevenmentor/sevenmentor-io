import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeftCircleIcon, ChevronRightCircleIcon } from "lucide-react";
import videoReviewData from "./VideoReviewData"; // Import the video data
import Image from "next/image"

// Lazy Video Component
const LazyVideo = ({ src, title, isInView }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isInView) {
      setIsLoaded(true);
    }
  }, [isInView]);

  return isLoaded ? (
    <iframe
      aria-label="Video"
      src={`${src}?autoplay=${isInView ? 1 : 0
        }&mute=1&controls=1&modestbranding=1&showinfo=0&rel=0`}
      title={title}
      className="w-full h-full object-cover rounded-xl"
      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
      frameBorder="0"
      style={{ pointerEvents: "auto" }}
    />
  ) : (
    <div className="w-full h-full bg-black flex items-center justify-center rounded-xl">
      <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

// Video Thumbnail Component
const VideoThumbnail = ({ video, isActive, onClick }) => (
  <div
    className={`cursor-pointer transition-all duration-300 ${isActive
      ? "border-2 border-orange-500 scale-105"
      : "border border-gray-700 opacity-70 hover:opacity-100"
      } rounded-lg overflow-hidden flex flex-col`}
    onClick={onClick}
  >
    <div className="h-24 relative">

      <Image
        src={video.thumbnail || `https://i.ytimg.com/vi/${getYouTubeID(video.url)}/mqdefault.jpg`}
        alt={video.title}
        width={480} // Approximate width for mqdefault.jpg
        height={360} // Approximate height
        className="w-full h-full object-cover"
      />
      {isActive && (
        <div className="absolute inset-0 bg-orange-500 bg-opacity-30 flex items-center justify-center">
          <div className="bg-white bg-opacity-90 rounded-full p-1">
            <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
            </svg>
          </div>
        </div>
      )}
    </div>
    <div className="p-2 bg-gray-900">
      <h3 className="text-xs font-medium text-white truncate">{video.title}</h3>
    </div>
  </div>
);

// Helper function to extract YouTube ID
const getYouTubeID = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

// Main Component
export default function VideoReviewSection({ customVideos }) {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);

  // Use provided videos or default to the data file
  const videoList = customVideos || videoReviewData;

  const handleNextVideo = useCallback(() => {
    setCurrentVideo((prev) => (prev + 1) % videoList.length);
  }, [videoList.length]);

  const handlePreviousVideo = useCallback(() => {
    setCurrentVideo((prev) => (prev - 1 + videoList.length) % videoList.length);
  }, [videoList.length]);

  // Scroll thumbnails to keep active one in view
  useEffect(() => {
    if (carouselRef.current) {
      const scrollPosition = currentVideo * 150; // Approximate width of each thumbnail + gap
      carouselRef.current.scrollTo({
        left: scrollPosition - carouselRef.current.clientWidth / 3,
        behavior: 'smooth'
      });
    }
  }, [currentVideo]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.2 }
    );

    const currentElement = sectionRef.current; // Store ref value here
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);


  return (
    <div
      ref={sectionRef}
      className="w-full bg-black text-white flex flex-col items-center justify-center py-8 md:py-12 px-4"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Video <span className="text-orange-500">Reviews</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Watch our comprehensive video reviews and get insights into the features, performance, and value
          </p>
          <div className="flex items-center justify-center mt-4">
            <div className="h-1 w-24 rounded-l-xl bg-gradient-to-r from-transparent to-orange-500" />
            <div className="h-1 w-24 rounded-r-xl bg-gradient-to-l from-transparent to-orange-500" />
          </div>
        </div>

        {/* Main video container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Video player - takes up 2/3 of screen on large displays */}
          <div className="lg:col-span-2 w-full">
            <div className="bg-gray-900 rounded-2xl p-4 shadow-lg shadow-orange-500/10">
              {/* Video player */}
              <div className="aspect-video rounded-xl overflow-hidden bg-black relative">
                <LazyVideo
                  src={videoList[currentVideo].url}
                  title={videoList[currentVideo].title}
                  isInView={isInView}
                />

                {/* Video navigation arrows */}
                <div className="absolute inset-0 flex items-center justify-between pointer-events-none p-2">
                  <button
                    className="p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all pointer-events-auto"
                    onClick={handlePreviousVideo}
                    aria-label="Previous video"
                  >
                    <ChevronLeftCircleIcon size={30} className="text-orange-500" />
                  </button>
                  <button
                    className="p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-all pointer-events-auto"
                    onClick={handleNextVideo}
                    aria-label="Next video"
                  >
                    <ChevronRightCircleIcon size={30} className="text-orange-500" />
                  </button>
                </div>
              </div>

              {/* Video info */}
              <div className="mt-4">
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  {videoList[currentVideo].title}
                </h3>
                <p className="text-gray-400 mt-2">
                  {videoList[currentVideo].description || "Watch our detailed video review"}
                </p>

                {/* Video controls and share buttons */}
                <div className="flex flex-wrap items-center justify-between mt-4 border-t border-gray-800 pt-4">
                  <div className="flex items-center space-x-2">
                    <div className="text-orange-500 font-medium">Video {currentVideo + 1} of {videoList.length}</div>
                  </div>


                </div>
              </div>
            </div>
          </div>

          {/* Video playlist */}
          <div className="w-full">
            <div className="bg-gray-900 rounded-2xl p-4 shadow-lg shadow-orange-500/10 h-full">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
                Video Playlist
              </h3>

              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-800">
                {videoList.map((video, index) => (
                  <div
                    key={video.id}
                    className={`p-2 rounded-lg cursor-pointer transition-all duration-200 ${currentVideo === index
                      ? 'bg-orange-500 bg-opacity-20 border border-orange-500'
                      : 'hover:bg-gray-800 border border-gray-800'
                      }`}
                    onClick={() => setCurrentVideo(index)}
                  >
                    <div className="flex space-x-3">
                      <div className="flex-shrink-0 w-24 h-16 relative rounded-md overflow-hidden">
                        <Image
                          src={video.thumbnail || `https://i.ytimg.com/vi/${getYouTubeID(video.url)}/mqdefault.jpg`}
                          alt={video.title}
                          width={480}  // YouTube mqdefault.jpg is typically 320x180 or 480x360
                          height={360}
                          className="w-full h-full object-cover"
                        />
                        {currentVideo === index && (
                          <div className="absolute inset-0 bg-orange-500 bg-opacity-30 flex items-center justify-center">
                            <div className="bg-white bg-opacity-90 rounded-full p-1">
                              <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-medium ${currentVideo === index ? 'text-white' : 'text-white'}`}>
                          {video.title}
                        </h4>
                        <p className="text-xs text-white line-clamp-2 mt-1">
                          {video.description || "Watch our detailed video review"}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile scroll indicator */}
              <div className="mt-4 text-center block md:hidden text-gray-500 text-sm">
                Scroll to see more videos
              </div>
            </div>
          </div>
        </div>

        {/* Mobile scroll view for thumbnails */}
        {/* <div className="mt-6 lg:hidden">
          <div 
            ref={carouselRef}
            className="flex space-x-3 pb-4 overflow-x-auto scrollbar-hide"
          >
            {videoList.map((video, index) => (
              <VideoThumbnail
                key={video.id}
                video={video}
                isActive={currentVideo === index}
                onClick={() => setCurrentVideo(index)}
              />
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
}