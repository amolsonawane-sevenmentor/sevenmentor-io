"use client";

import React, { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useMediaQuery } from "react-responsive";
import { MoveLeft, MoveRight } from "lucide-react";
import { cfUrl } from "../../../../services/AxiosInstance";
import Image from "next/image";

// Lazy Image Component
function LazyImage({ src, alt }) {
  return (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt || "Project Logo"}
      width={100} // Set a base width (adjust as needed)
      height={100} // Set a base height (adjust as needed)
      className="h-full w-full rounded-full object-cover"
      loading="lazy"
      aria-label="Project Logo"
    />
  );
}

export default function CourseProject({ CourseProjectData = [] }) {
  // <-- default empty array
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Ensure we have a valid project ID to start with
  const initialProjectId =
    CourseProjectData.length > 0 ? CourseProjectData[0].id : null;
  const [selectedProjectId, setSelectedProjectId] = useState(initialProjectId);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    if (CourseProjectData && CourseProjectData.length > 0) {
      const foundProject = CourseProjectData.find(
        (project) => project.id === selectedProjectId
      );
      if (foundProject) {
        setActiveProject(foundProject);
      } else {
        setActiveProject(null);
      }
    } else {
      setActiveProject(null);
    }
  }, [CourseProjectData, selectedProjectId]);

  const scrollToPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollToNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleSelect = useCallback(() => {
    if (!emblaApi) return;
    const selectedIndex = emblaApi.selectedScrollSnap();
    // Defensive: check if CourseProjectData[selectedIndex] exists
    if (CourseProjectData && CourseProjectData[selectedIndex]) {
      setSelectedProjectId(CourseProjectData[selectedIndex].id);
    }
  }, [emblaApi, CourseProjectData]);

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", handleSelect);
    }
  }, [emblaApi, handleSelect]);

  return (
    <div className="mx-auto w-full p-8 sm:p-12">
      <div className="text-center mb-4 lg:mb-8">
        <h2 className="text-2xl sm:text-4xl lg:text-[2.5rem] font-bold tracking-tight text-orange-600">
          Learning Comes Alive Through Hands-On{" "}
          <span className="animated-text-fill !text-3xl sm:!text-4xl lg:!text-5xl !tracking-tight">
            PROJECTS!
          </span>
        </h2>
        <p className="mt-2 mb-8 sm:mt-4 text-lg text-gray-100 max-w-3xl mx-auto">
          Comprehensive Training Programs Designed to Elevate Your Career
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col gap-8 items-center justify-between md:flex-row">
        {/* Left Section - Carousel */}
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Previous Button (conditional placement for mobile) */}
          {!isMobile && (
            <button
              aria-label="Previous Project"
              className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 border border-white text-lg"
              onClick={scrollToPrev}
            >
              <MoveLeft className="text-white font-bold w-6 h-6" />
            </button>
          )}

          {/* Carousel Card */}
          <div className="relative max-w-sm">
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex">
                {(Array.isArray(CourseProjectData)
                  ? CourseProjectData
                  : []
                ).map((project) => (
                  <div
                    key={project.id}
                    className="embla__slide flex-shrink-0 w-full p-4"
                  >
                    <div
                      className={`relative flex flex-col border border-orange-700 items-center gap-6 transform duration-300 rounded-[1.5rem] shadow-lg p-8 transition-all ${
                        selectedProjectId === project.id
                          ? "scale-105 bg-gradient-to-br from-orange-700/60 via-black to-orange-700/60"
                          : "scale-100 bg-gradient-to-br from-orange-700/60 via-black to-orange-700/60"
                      }`}
                      style={{
                        boxShadow: "0 0 8px 2px rgba(249, 115, 22, 0.6)", // Orange glow effect
                      }}
                    >
                      {/* Unique Image Frame */}
                      <div className="relative h-40 w-40 rounded-full bg-gradient-to-b from-orange-500 to-black p-[4px] shadow-lg">
                        <div className="h-full w-full rounded-full bg-white overflow-hidden">
                          <LazyImage
                            src={
                              project.logo?.includes("https")
                                ? project.logo
                                : cfUrl + project.logo
                            }
                            alt={project.name}
                          />
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="text-center text-gray-100">
                        <h3 className="text-xl font-bold text-gray-100">
                          {project.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Next Button (conditional placement for mobile) */}
          {!isMobile && (
            <button
              aria-label="Next Project"
              className="bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 border border-white"
              onClick={scrollToNext}
            >
              <MoveRight className="text-white font-bold w-6 h-6" />
            </button>
          )}
        </div>

        {/* Mobile Buttons */}
        {isMobile && (
          <div className="flex gap-8">
            <button
              aria-label="Previous Project"
              className="bg-orange-500 text-white p-2 rounded-full shadow-lg hover:bg-orange-600 border border-white"
              onClick={scrollToPrev}
            >
              <MoveLeft className="text-white font-bold w-6 h-6" />
            </button>
            <button
              aria-label="Next Project"
              className="bg-orange-500 text-white p-2 rounded-full shadow-lg hover:bg-orange-600 border border-white"
              onClick={scrollToNext}
            >
              <MoveRight className="text-white font-bold w-6 h-6" />
            </button>
          </div>
        )}

        {/* Right Section - Active Project Details */}
        <div
          className="flex-1 rounded-lg bg-gradient-to-br from-black via-black/95 to-orange-500/20 p-6 sm:p-12 shadow-lg"
          style={{
            boxShadow: "0px 4px 20px rgba(249, 115, 22, 0.6)", // Orange glow effect
          }}
        >
          {activeProject ? (
            <>
              <h3 className="mb-4 sm:mb-6 text-center text-2xl sm:text-3xl font-bold tracking-wide text-orange-600">
                {activeProject.name}
              </h3>
              <p className="mx-auto mb-8 sm:mb-12 max-w-3xl text-center text-gray-100 text-lg">
                {activeProject.description}
              </p>

              <h3 className="mb-4 sm:mb-6 text-center text-lg sm:text-xl font-bold text-orange-600">
                Tools Used
              </h3>
              <div className="flex flex-wrap justify-evenly gap-8 sm:gap-16">
                {(Array.isArray(activeProject.tools) ? activeProject.tools : [])
                  .length > 0 ? (
                  (Array.isArray(activeProject.tools)
                    ? activeProject.tools
                    : []
                  ).map((tool) => {
                    return (
                      <div
                        key={tool.id}
                        className="flex flex-col items-center gap-2 sm:gap-4 w-14"
                      >
                        <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gray-100">
                          {tool ? (
                            <Image
                              src={
                                tool.logo?.includes("https")
                                  ? tool.logo
                                  : `${cfUrl}${tool.logo}`
                              }
                              alt={tool.name || "Tool Logo"}
                              width={40} // w-10 = 2.5rem = 40px
                              height={40} // h-10 = 2.5rem = 40px
                              className="h-10 w-10 object-contain"
                              loading="lazy"
                            />
                          ) : (
                            <span className="text-gray-500">N/A</span>
                          )}
                        </div>
                        <span className="text-center text-[12px] sm:text-sm text-gray-100">
                          {tool ? tool.name : "N/A"}
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <p className="text-center text-gray-100">
                    No tools available.
                  </p>
                )}
              </div>
            </>
          ) : (
            <p className="text-center text-gray-100">
              No active project selected.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
