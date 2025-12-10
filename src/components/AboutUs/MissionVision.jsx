// ===============================================================================================
"use client"
import React, { useEffect, useRef, useState } from "react";

import Image from "next/image";

export default function MissionVision() {
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const [isMissionVisible, setIsMissionVisible] = useState(false);
  const [isVisionVisible, setIsVisionVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null, // Observe within the viewport
      threshold: 0.3, // Trigger when 30% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === missionRef.current) {
            setIsMissionVisible(true);
          } else if (entry.target === visionRef.current) {
            setIsVisionVisible(true);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );
     const missionElement = missionRef.current;
  const visionElement = visionRef.current;

    if (missionElement) observer.observe(missionElement);
    if (visionElement) observer.observe(visionElement);

    return () => {
      if (missionElement) observer.unobserve(missionElement);
      if (visionElement) observer.unobserve(visionElement);
    };
  }, []);

  return (
    <>
      {/* Mission Section */}
      <div className="bg-gradient-to-br from-orange-500/20 via-black/95 to-orange-500/20 overflow-hidden">
        <section
          ref={missionRef}
          className={`relative w-full flex flex-col lg:flex-row items-center justify-between py-5 md:px-24 px-4 gap-1 transition-all duration-1000 transform ${
            isMissionVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-20"
          }`}
        >
          <div className="lg:w-2/3 w-full flex flex-col justify-center max-w-3xl">
            <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">Mission</h2>
            <p className="text-lg text-gray-100 leading-relaxed mb-4">
              At SevenMentor Training Institute, our mission is to empower
              individuals with the knowledge and skills required to excel in
              their chosen fields. We are dedicated to providing high-quality,
              practical, and industry-relevant training programs that cater to
              diverse learning needs. By combining expert guidance, innovative
              teaching methodologies, and real-world applications, we aim to
              bridge the gap between education and professional excellence,
              inspiring lifelong learning and growth.
            </p>
            {/* Icons Section */}
            <div className="flex justify-center mt-6">
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/About/innovation.webp"
                  alt="Techies and Non-Techies"
                  width={12}
                  height={12}
                  className="w-12 h-12 mb-2"
                />
                <p className="text-sm text-gray-100 text-center w-[70%]">
                  Empower Diverse Minds, Unite in Innovation
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/About/journey.webp"
                  alt="Personalized Learning"
                  className="w-12 h-12 mb-2"
                   width={12}
                  height={12}
                />
                <p className="text-sm text-gray-100 text-center w-[70%]">
                  Transforming Learning, One Unique Journey at a Time
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 w-full flex justify-center items-center rounded-[100%_0%_100%_0%_/43%_57%_43%_57%] border-2 max-w-2xl">
            <Image
              src="/assets/About/Missionnew.webp"
              alt="SevenMentor"
              className="max-w-full md:h-[50vh] h-[25vh] rounded-[100%_0%_100%_0%_/43%_57%_43%_57%] shadow-[4px_4px_8px_0_rgba(249,115,22,0.5)]"
               width={600}
  height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>

        {/* Separator */}
        <div className="flex items-center justify-center gap-2 my-10 px-4 min-w-0">
          <div className="flex-shrink h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent min-w-4 w-8" />
          <span className="text-orange-500 font-bold md:text-md text-sm text-center flex-shrink md:px-2">
          Kickstart your journey to success today – your future begins here!
          </span>
          <div className="flex-shrink h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent min-w-4 w-8" />
        </div>

        {/* Vision Section */}
        <section
          ref={visionRef}
          className={`relative w-full flex flex-col lg:flex-row-reverse items-center justify-between py-5 md:px-24 px-4 gap-7 transition-all duration-1000 transform ${
            isVisionVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
          }`}
        >
          <div className="lg:w-2/3 w-full flex flex-col justify-center max-w-2xl">
            <h2 className="text-4xl font-bold text-orange-500 mb-6 text-center">Vision</h2>
            <p className="text-lg text-gray-100 leading-relaxed mb-4">
              Our vision is to be a global leader in education and professional
              development, fostering a community of skilled and empowered
              professionals. We envision a future where learning is accessible,
              engaging, and transformative, enabling individuals to adapt to the
              ever-evolving demands of the global workforce. By nurturing talent
              and promoting innovation, we strive to create opportunities for
              success and make a positive impact on industries worldwide.
            </p>
            {/* Icons Section */}
            <div className="flex justify-center mt-6">
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/About/scope.webp"
                  alt="Techies and Non-Techies"
                  className="w-12 h-12 mb-2"
                  width={12}
                  height={12}
                />
                <p className="text-sm text-gray-100 text-center w-[70%]">
                  Provide scopes to techies & non-techies all alike.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src="/assets/About/training.webp"
                  alt="Personalized Learning"
                  className="w-12 h-12 mb-2"
                  width={12}
                  height={12}
                />
                <p className="text-sm text-gray-100 text-center w-[70%]">
                  Ensure an extremely personalized learning experience.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 w-full flex justify-center items-center rounded-[0%_100%_0%_100%_/59%_41%_59%_41%] p-2 max-w-2xl">
            <Image
              src="/assets/About/visionnew.webp"
              alt="Vision"
              className="max-w-full md:h-[50vh] h-[25vh] rounded-[0%_100%_0%_100%_/59%_41%_59%_41%] shadow-[4px_4px_8px_0_rgba(249,115,22,0.5)]"
              width={600}
  height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
        </section>
      </div>
    </>
  );
}