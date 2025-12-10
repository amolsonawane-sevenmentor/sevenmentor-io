"use client";

import React from "react";
import dynamic from "next/dynamic";
import {
  Book,
  DollarSign,
  ClipboardCheck,
  Briefcase,
  MessageCircle,
  Award,
  NotebookPen,
  Wifi,
} from "lucide-react";

// Dynamic import of HomeBannerForm (SSR disabled)
const HomeBannerForm = dynamic(
  () => import("../../../Forms/HomeBannerForm.jsx"),
  { ssr: false }
);

export default function BannerSection({ mailId, contactNo, bannerTitle }) {
  const accordionData = [
    { title: "Course & Curriculum Details", icon: <Book size={32} /> },
    { title: "Flexible Learning Options", icon: <Wifi size={32} /> },
    { title: "Affordable Learning", icon: <DollarSign size={32} /> },
    { title: "Enrollment Process", icon: <ClipboardCheck size={32} /> },
    { title: "Career Guidance", icon: <Briefcase size={32} /> },
    { title: "Internship Opportunities", icon: <NotebookPen size={32} /> },
    { title: "General Communication", icon: <MessageCircle size={32} /> },
    { title: "Certification Benefits", icon: <Award size={32} /> },
  ];

  return (
    <section className="relative w-full flex items-center justify-evenly pb-6">
      <div className="relative flex flex-col-reverse lg:flex-row items-center justify-around w-full md:px-4 lg:pl-20">
        {/* Left Section - Points with Icons */}
        <div className="w-full flex justify-start items-center flex-col md:items-start mb-4 space-y-4 my-8 px-4 lg:mt-[-160px]">
          <h2 className="text-2xl font-bold text-orange-500 text-center mb-4 md:mb-10 lg:text-left sm:text-2xl lg:text-3xl xl:text-4xl">
            CONSULT WITH <br />
            <span className="!text-2xl !text-white sm:!text-4xl lg:!text-4xl xl:!text-4xl">
              OUR ADVISORS
            </span>
          </h2>
          <ul className="list-none gap-y-9 gap-x-2 grid grid-cols-2 sm:grid-cols-2">
            {accordionData.map((item, index) => (
              <li
                key={index}
                className="flex items-center md:text-xl text-sm text-white"
              >
                <div className="mr-3 text-orange-500">{item.icon}</div>
                <span className="md:text-xl text-sm">{item.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section - Form */}
        <div className="w-full flex justify-start flex-col">
          <HomeBannerForm
            mailId={mailId}
            contactNo={contactNo}
            bannerTitle={bannerTitle}
            id = "TopForm"
          />
        </div>
      </div>
    </section>
  );
}
