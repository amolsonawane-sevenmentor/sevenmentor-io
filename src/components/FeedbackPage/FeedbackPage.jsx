'use client';

import React from "react";
import BlogSection from "../Home/BlogSection/BlogSection.jsx";
import FeedbackForm from "./FeedbackForm.jsx";

const FeedbackPage = () => {
  return (
    <>
      <div className="bg-black md:mt-12 mt-10 px-4">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-8 text-center">
          Feedback
        </h1>

        {/* Separator */}
        <div className="flex items-center justify-center gap-4 my-10">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          <span className="text-orange-500 font-bold md:text-md text-sm text-center">
            &quot;Your Feedback Helps Us Grow!&quot; 🌟
          </span>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        </div>

        {/* Google Form Embed */}
        <div className="flex justify-center mt-8">
          <FeedbackForm />
        </div>
      </div>
      <BlogSection />
    </>
  );
};

export default FeedbackPage;
