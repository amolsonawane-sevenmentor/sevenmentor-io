// AcademicCollaboration.jsx
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const images = [
  "/assets/AcademicCollaborations/FutureSkills.webp",
  "/assets/AcademicCollaborations/IIT_Bombay.webp",
  "/assets/AcademicCollaborations/ISO.webp",
  "/assets/AcademicCollaborations/MEI.webp",
  "/assets/AcademicCollaborations/Nasscom.webp",
  "/assets/AcademicCollaborations/SVU.webp",
];

export default function AcademicCollaboration() {
  // Embla carousel with loop and autoplay plugin, draggable enabled by default
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      dragFree: true,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  return (
    <section
      className="w-full md:h-[500px] flex flex-col items-center justify-center"
      style={{
        background:
          "linear-gradient(135deg, #000000 0%, #1a0e00 100%)", // black with subtle orange shade
      }}
    >
      <h2 className="text-xl lg:text-5xl font-bold text-orange-500 mb-10">
        Academic Collaboration
      </h2>

      <div
        className="embla w-full max-w-7xl overflow-hidden cursor-grab p-6 rounded-lg bg-gradient-to-br from-gray-800 to-orange-500/20"
        ref={emblaRef}
      >
        <div className="embla__container flex gap-6 select-none">
          {images.map((src, index) => (
            <div
              key={index}
              className="embla__slide flex-shrink-0"
              style={{ width: 300, height: 150 }}
            >
              <img
                src={src}
                alt={`Collaboration ${index + 1}`}
                className="w-[300px] h-[150px] object-cover rounded-md"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
