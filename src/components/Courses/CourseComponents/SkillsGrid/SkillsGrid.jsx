import React, { useState, useEffect, useRef } from 'react';
import "./SkillsGrid.css";
import { cfUrl } from '../../../../services/AxiosInstance';
import Image from "next/image"

export default function SkillsGrid({ tools }) {
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Initialize false to avoid SSR error
  const topRef = useRef(null);

  const skillLimit = 6; // Limit for mobile screens

  useEffect(() => {
    // Set initial isMobile value safely on client side
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Guard tools: ensure it's an array before using length or map
  if (!Array.isArray(tools) || tools.length === 0) {
    return (
      <div className="text-white text-center">
        <p className="text-3xl font-bold mb-12">No skills data available for this course.</p>
      </div>
    );
  }

  // Determine the displayed skills based on screen size and toggle
  const displayedSkills = isMobile && !showAllSkills ? tools.slice(0, skillLimit) : tools;

  const handleButtonClick = () => {
    setShowAllSkills(!showAllSkills);
    if (showAllSkills && topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={topRef} className="bg-gradient-to-b from-[#070707] to-[#121212]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-2xl font-bold mb-8 text-center md:text-left">Skills & Tools You&apos;ll Learn -</h2>
        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 md:gap-8 justify-center">
          {(Array.isArray(displayedSkills) ? displayedSkills : []).map((skill, index) => (
            <div key={index} className="flip-card md:h-[108px] md:w-[110px]">
              <div className="flip-card-content">
                <Image
                  aria-label='Logo'
                  src={skill.logo && skill.logo.includes("https") ? skill.logo : cfUrl + (skill.logo || '')}
                  alt={`${skill.name} icon`}
                  width={48} // You can adjust this based on your design
                  height={48}
                  className='object-contain'
                />
                <span className="skill-name">{skill.name}</span>
                <span className="skill-description">{skill.description}</span>
              </div>
            </div>
          ))}
        </div>
        {(isMobile || !showAllSkills) && (
          <div className="text-center mt-8">
            <button
              aria-label="Show More Skills"
              onClick={handleButtonClick}
              className={`text-white bg-orange-500 px-4 py-2 rounded-full ${!isMobile ? 'hidden' : 'lg:block'}`}
            >
              {showAllSkills ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
