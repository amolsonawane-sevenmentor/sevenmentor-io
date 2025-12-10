import React from 'react';
import { BookOpenIcon, UserCheckIcon, BriefcaseIcon, ClockIcon, GlobeIcon, AwardIcon, FileQuestion, NotebookPen, HouseIcon, Building, FileVideo2 } from "lucide-react";

export default function Features() {
  // Define common features directly in the component
  const features = [
    {
      title: "Expert Trainers",
      description: "Industry professionals with extensive experience to guide your learning journey.",
      icon: UserCheckIcon,
    },
    {
      title: "Comprehensive Curriculum",
      description: "In-depth courses designed to meet current industry standards and trends.",
      icon: BookOpenIcon,
    },
    {
      title: "Hands-on Training",
      description: "Real-world projects and practical sessions to enhance learning outcomes.",
      icon: AwardIcon,
    },
    {
      title: "Flexible Schedules",
      description: "Options for weekday, weekend, and online batches to suit your convenience.",
      icon: ClockIcon,
    },
    {
      title: "Industry-Recognized Certifications",
      description: "Globally accepted credentials to boost your career prospects.",
      icon: GlobeIcon,
    },
    {
      title: "State-of-the-Art Infrastructure",
      description: "Modern facilities and tools for an engaging learning experience.",
      icon: BriefcaseIcon,
    },
    {
      title: "100% Placement Assistance",
      description: "Dedicated support to help you secure your dream job.",
      icon: FileVideo2,
    },
    {
      title: "Affordable Fees",
      description: "Quality training at competitive prices with flexible payment options.",
      icon: HouseIcon,
    },
    {
      title: "Lifetime Access to Learning Materials",
      description: "Revisit course content anytime for continuous learning.",
      icon: Building,
    },
    {
      title: "Personalized Attention",
      description: "Small batch sizes for individualized mentoring and guidance.",
      icon: NotebookPen,
    },
    {
      title: "Diverse Course Offerings",
      description: "A wide range of programs in IT, business, design, and more.",
      icon: FileQuestion,
    },
  ];

  // Ensure features is an array before processing
  const safeFeatures = Array.isArray(features) ? features : [];

  const featureGroups = []; // Split features into groups of 3
  for (let i = 0; i < safeFeatures.length; i += 3) {
    featureGroups.push(safeFeatures.slice(i, i + 3));
  }

  return (
    <div
      className="py-10 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500 mb-2">
            KEY Features <span className='text-white text-3xl sm:text-4xl lg:text-4xl'>that Makes Us Better and Best FIT For You</span> 
          </h2>
        </div>
        {/* Cards Section */}
        <div className="space-y-4">
          {Array.isArray(featureGroups) && featureGroups.map((group, index) => (
            <div
              key={index}
              className={`flex flex-wrap justify-center ${
                group.length === 3 ? 'flex-grow gap-3' : 'gap-3'
              }`}
            >
              {Array.isArray(group) && group.map((feature, featureIndex) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={featureIndex}
                    className="relative group w-full max-w-[400px] rounded-2xl overflow-hidden backdrop-filter !backdrop-blur-4xl bg-gray-400/30 p-4 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/20 border border-white/20"
                  >
                    <div className="mb-3">
                      <Icon className="h-8 w-8 text-orange-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-4 text-base">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
