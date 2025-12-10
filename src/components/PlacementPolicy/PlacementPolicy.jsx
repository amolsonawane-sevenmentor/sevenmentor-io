"use client"
import React from "react";

const PlacementPolicy = () => {
   const content = [
   
    {
    //   heading: "1. Information We Collect",
      paragraph: `● Students must complete the placement registration process within the given deadline.

● 80 %Attendance is mandatory for placement process . 

● Attendance in all pre-placement talks ,mock interview, training, and briefing sessions is mandatory.

● Students must maintain discipline during interviews and interactions.

● Misconduct or unprofessional behaviour may lead to disqualification from the placement process.

● Once a student is selected  and Placed by a company, they will be considered placed and needs to pay Placement charges . 

● Students who withdraw after registering for a company without valid reason may be barred from further opportunities.

● Any misrepresentation of information academic/ personal, or professional) will lead to immediate cancellation of placement rights.

● Students must meet the specific eligibility criteria set by the recruiting company.


`,
    },
    
  ];
  return (
    <div className="privacy-policy-container bg-black text-white p-5 md:p-16 md:mt-5 mt-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-8 text-center">
          Placement Policy
        </h1>
        {/* Separator */}
        <div className="flex items-center justify-center gap-4 my-10">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          <span className="text-orange-500 font-bold md:text-md text-sm text-center">
Placement Success – Your Future, Our Focus.          </span>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        </div>

        {/* Dynamic Content Rendering */}
        <div className="space-y-10">
          {content.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-orange-400 mb-4">
                {section.heading}
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: section.paragraph }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlacementPolicy;