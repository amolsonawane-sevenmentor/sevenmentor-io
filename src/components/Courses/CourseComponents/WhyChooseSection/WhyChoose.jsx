"use client";

import React, { useState } from "react";
import Image from "next/image";
import "../../../Home/HomeBanner/HomeBanner.css";


export default function WhyChoose({ title }) {
  const [showAllMobile, setShowAllMobile] = useState(false);

  const leftColumnItems = [
    {
      imageSrc: "/assets/WhyChoose/specialized_pocket_friendly_programs_as_per_your_requirements.webp",
      text: "Specialized Pocket Friendly Programs as per your requirements",
    },
    { imageSrc: "/assets/WhyChoose/live_projects_with_hands_on_experience.webp", text: "Live Projects With Hands-on Experience " },
    {
      imageSrc: "/assets/WhyChoose/corporate_soft_skills_&_personality_building_sessions.webp",
      text: "Corporate Soft-skills & Personality Building Sessions",
    },
    {
      imageSrc: "/assets/WhyChoose/digital_online_classroom_hybrid_batches.webp",
      text: "Digital Online, Classroom, Hybrid Batches",
    },
    {
      imageSrc: "/assets/WhyChoose/interview_calls_assistance_and_mock_sessions.webp",
      text: "Interview Calls Assistance & Mock Sessions",
    },
    { imageSrc: "/assets/WhyChoose/1_1_mentorship_when_required.webp", text: "1:1 Mentorship when required" },
    { imageSrc: "/assets/WhyChoose/industry_experienced_trainers.webp", text: "Industry Experienced Trainers" },
    { imageSrc: "/assets/WhyChoose/class_recordings_for_missed_classes.webp", text: "Class Recordings for Missed Classes " },
    { imageSrc: "/assets/WhyChoose/1_year_free_repeat_option.webp", text: "1 Year FREE Repeat Option" },
    {
      imageSrc: "/assets/WhyChoose/presentation.webp",
      text: "Bonus Resources",
    },
    { imageSrc: "/assets/WhyChoose/fastest11doubt.webp", text: "Fastest 1:1 doubt support" },
  ];

  const middleColumnItems = [
    { imageSrc: "/assets/WhyChoose/flexible_emi_plans.webp", text: "Flexible EMI Plans" },
    { imageSrc: "/assets/WhyChoose/adaptive_lms.webp", text: "Adaptive LMS" },
    { imageSrc: "/assets/WhyChoose/free_wifi_facilities.webp", text: "Free Wifi Facilities" },
    { imageSrc: "/assets/WhyChoose/flexible_scheduling.webp", text: "Flexible Scheduling" },
    { imageSrc: "/assets/WhyChoose/ongoing_career_support.webp", text: "Ongoing Career Support " },
    { imageSrc: "/assets/WhyChoose/placement_drives.webp", text: "Placement Drives" },
    { imageSrc: "/assets/WhyChoose/github_project_implementations.webp", text: "GitHub Project Implementations" },
    {
      imageSrc: "/assets/WhyChoose/online-analytical.webp",
      text: "Real World Topics",
    },
    { imageSrc: "/assets/WhyChoose/55rating.webp", text: "5/5 rating for 99% doubt Solutions" },
  ];

  const rightColumnItems = [
    {
      imageSrc: "/assets/WhyChoose/be_different_with_master_certificate.webp",
      text: "Be Different With Master Certificate",
    },
    {
      imageSrc: "/assets/WhyChoose/latest_market_technology_and_practical_training.webp",
      text: "Latest Market Technology & Practical Training",
    },
    {
      imageSrc: "/assets/WhyChoose/resume_building_session_and_job_portals_training.webp",
      text: "Resume Building Session & Job Portals Training",
    },
    {
      imageSrc: "/assets/WhyChoose/enhanced_capstone_projects_for_learning.webp",
      text: "Enhanced Capstone Projects for learning",
    },
    {
      imageSrc: "/assets/WhyChoose/stand_out_with_an_impressive_certificate.webp",
      text: "Stand Out with an impressive Certificate",
    },
    { imageSrc: "/assets/WhyChoose/weekday_and_weekend_batches.webp", text: "Weekday and Weekend Batches" },
    { imageSrc: "/assets/WhyChoose/workshops_and_seminars_with_industry_experts.webp", text: "Workshops & Seminars with Industry Experts" },
    { imageSrc: "/assets/WhyChoose/unlimited_interview_calls.webp", text: "Unlimited Interview Calls" },
    { imageSrc: "/assets/WhyChoose/aws_cloud_project_deployments.webp", text: "AWS Cloud Project Deployments" },
    { imageSrc: "/assets/WhyChoose/coding.webp", text: "Live Quizzes" },
    {
      imageSrc: "/assets/WhyChoose/resolvedoubt.webp",
      text: "Resolve doubts any time through chat, voice notes, calling or meeting with instructors.",
    },
  ];

  const allMobileItems = [
    ...leftColumnItems,
    ...middleColumnItems,
    ...rightColumnItems,
  ];
  const visibleMobileItems = showAllMobile
    ? allMobileItems
    : allMobileItems.slice(0, 10);

  const cleanedTitle = title
    .replace(
      /\b(training|classes|Training|Classes|Course|course|in Pune)\b/gi,
      ""
    )
    .replace(/\s+/g, " ")
    .trim();

  return (
    <section className="bg-gradient-to-br from-black via-black/95 to-orange-500/20 py-8 sm:py-12 md:py-5 md:px-10 px-4">
      <div className="max-w-7xl mx-auto relative">
        {/* Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            Why Choose <span className="text-orange-500/90">SevenMentor </span>
            <span className="text-orange-500 !text-3xl sm:!text-3xl lg:!text-5xl animated-text-fill !tracking-tight">
              {cleanedTitle}
            </span>
          </h2>
          <p className="text-white max-w-5xl mx-auto text-xl sm:text-xl">
            Empowering Careers with Industry-Ready Skills.
          </p>
        </div>

        {/* Lightning Lines */}
        <div className="hidden lg:block absolute top-[5%] bottom-0 left-[33%] h-2/2 w-[2px] bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-lightning"></div>
        <div className="hidden lg:block absolute top-[5%] bottom-0 right-[35%] h-2/2 w-[2px] bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-lightning"></div>

        {/* Responsive Content */}
        <div className="flex flex-col md:flex-row justify-between md:gap-16 md:p-10 overflow-x-hidden">
          {/* Mobile */}
          <div className="block md:hidden h-[50vh] overflow-y-auto space-y-4 w-full p-8 ml-4 md:ml-0">
            {visibleMobileItems.map((item, index) => (
              <FeatureItem key={`mobile-${index}`} {...item} />
            ))}
            {!showAllMobile && (
              <button
                className="text-orange-500 underline mt-5 flex items-center justify-center mx-auto"
                onClick={() => setShowAllMobile(true)}
              >
                View More Features
              </button>
            )}
          </div>

          {/* Desktop */}
          <div className="hidden md:flex flex-col space-y-4 w-full md:flex-1 ml-2 md:ml-0">
            {leftColumnItems.map((item, index) => (
              <FeatureItem key={`left-${index}`} {...item} />
            ))}
          </div>
          <div className="hidden md:flex flex-col w-full md:flex-1 justify-center items-stretch space-y-4 md:mt-0 md:mb-0 md:ml-0">
            {middleColumnItems.map((item, index) => (
              <FeatureItem key={`middle-${index}`} {...item} />
            ))}
          </div>
          <div className="hidden md:flex flex-col space-y-4 w-full md:flex-1 ml-2 md:ml-0">
            {rightColumnItems.map((item, index) => (
              <FeatureItem key={`right-${index}`} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Memoized FeatureItem component
const FeatureItem = React.memo(({ imageSrc, text }) => (
  <div className="relative flex items-center gap-4 bg-gradient-to-br from-black via-black/95 to-orange-500/20 rounded-lg p-4 pl-12 border border-orange-500/60 border-l-transparent">
    <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-orange-500/10 p-2 rounded-lg">
      <div className="relative">
        <div className="absolute inset-0 rounded-lg -m-0 border-2 border-orange-500 animate-pulse-border"></div>
        <Image
          width={40}
          height={40}
          loading="lazy"
          aria-label="Feature Icon"
          src={imageSrc || "/placeholder.svg"}
          alt={text}
          className="relative z-10 w-10 h-10 object-contain"
        />
      </div>
    </div>
    <p className="text-white text-sm font-semibold sm:text-base md:text-lg">
      {text}
    </p>
  </div>
));
FeatureItem.displayName = "FeatureItem";
