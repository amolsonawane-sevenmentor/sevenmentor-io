'use client';

import { useState, useEffect } from "react";

const CorporateBannerVideo = ({ videoId, desktopHeight = "768px", mobileHeight = "250px", width = "100%" }) => {
  const [iframeHeight, setIframeHeight] = useState(desktopHeight);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768; // Tailwind's md breakpoint
      setIframeHeight(isMobile ? mobileHeight : desktopHeight);
    };

    if (typeof window !== "undefined") {
      handleResize(); // Set initial height
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [desktopHeight, mobileHeight]);

  return (
    <div className="video-container mt-[40px]">
      <iframe
        width={width}
        height={iframeHeight}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&mute=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=0&disablekb=1&rel=0&iv_load_policy=3`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default CorporateBannerVideo;
