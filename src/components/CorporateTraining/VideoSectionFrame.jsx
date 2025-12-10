"use client";

import React from "react";

export default function VideoSectionFrame({ onError }) {
  return (
    <div className="relative w-full aspect-video rounded-lg border-2 border-orange-500 shadow-lg overflow-hidden">
      <iframe
        src="https://www.youtube.com/embed/PDe9wOWeNPM?rel=0&modestbranding=1"
        title="Educational Video"
        className="absolute inset-0 w-full h-full pointer-events-auto"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        onError={onError}
      ></iframe>
    </div>
  );
}
