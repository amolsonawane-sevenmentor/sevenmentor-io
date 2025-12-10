"use client"; // Add this for client-side components in Next.js

import React from "react";
import CertificateBanner from "./CertificateBanner.jsx";
import OtherDemanding from "../Courses/CourseComponents/OtherDemanding/OtherDemanding";
import courses from "../Courses/CourseComponents/OtherDemanding/OtherDemandingData.js";

const CertificatePage = () => {
  return (
    <>
      <CertificateBanner />
      <div className="bg-black md:mt-24 mt-10 px-4">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-8 text-center">
          Certificate
        </h1>

        {/* Separator */}
        <div className="flex items-center justify-center gap-4 my-10">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          <span className="text-orange-500 font-bold md:text-md text-sm text-center">
            &quot;Unlock Your Achievement, Claim Your Certificate!&quot; 🚀
          </span>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        </div>

        {/* Google Form Embed */}
        <div className="flex justify-center mt-8">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeqgKDueJj0iMlQd95r1_lKsSTzs3G2ouCWS3gSlZvd4ebcUw/viewform?embedded=true"
            width="100%"
            height="2000"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            className="rounded-lg no-scrollbar pointer-events-auto relative z-10"
            title="Certificate Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
      <OtherDemanding data={courses} domain={"Certificate"} />
    </>
  );
};

export default CertificatePage;