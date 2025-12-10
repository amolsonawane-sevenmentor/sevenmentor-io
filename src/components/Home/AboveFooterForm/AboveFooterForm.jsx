"use client";
import React, { useRef, forwardRef } from "react";

import "./AboveFooterForm.css";
import HomeBannerForm from "../../Forms/HomeBannerForm.jsx";
import Image from "next/image";

// Forward ref to target the form inside this component
const AboveFooterForm = forwardRef(
  ({ mailId, contactNo, bannerTitle }, ref) => {
    const formRef = ref; // Assign the forwarded ref

    const fadeIn = {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 },
    };

    const features = [
      {
        image: "/assets/WhyChoose/be_different_with_master_certificate.webp", // Replace with actual image path
        title: "Career Support:",
        description:
          "Beyond technical training, we provide comprehensive career assistance, including resume building, interview coaching, and job placement support.",
      },
      {
        image:
          "/assets/WhyChoose/stand_out_with_an_impressive_certificate.webp", // Replace with actual image path
        title: "Recognized Certification:",
        description:
          "Earn globally recognized certifications that validate your expertise and enhance your employability.",
      },
      {
        image: "/assets/WhyChoose/live_projects_with_hands_on_experience.webp", // Replace with actual image path
        title: "Company Tie-Ups:",
        description:
          "We collaborate with leading corporations, startups, and multinational companies to provide our students with exclusive job opportunities, internships, and industry exposure.",
      },
    ];

    return (
      <div id="above-footer-form">
        <section className="relative min-h-[600px] w-full overflow-hidden bg-gradient-to-br from-black via-black/95 to-orange-500/20 mt-3 ">
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.15),transparent_25%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(251,146,60,0.1),transparent_25%)]" />
          <div className="absolute inset-0 bg-grid-white/[0.02]" />

          <div className="container relative mx-auto grid h-full min-h-[600px] grid-cols-1 gap-12 lg:px-24 py-16 lg:grid-cols-2">
            <div
              initial="initial"
              animate="animate"
              className="flex flex-col justify-center space-y-8 px-4"
            >
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Invest In Your Future With{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent flex justify-start">
                    Skills That Matter.
                  </span>
                </h2>
                <p className="max-w-[600px] text-lg text-gray-400">
                  Investing in the right skills at the right place paves the way
                  for long-term career success and growth. SevenMentor Institute
                  equips you with industry-relevant expertise, ensuring you stay
                  ahead in an evolving job market.
                </p>
              </div>

              <div
                variants={{
                  initial: { opacity: 0 },
                  animate: { opacity: 1, transition: { staggerChildren: 0.1 } },
                }}
                initial="initial"
                animate="animate"
                className="grid gap-6"
              >
                {(Array.isArray(features) ? features : []).map(
                  (feature, index) => (
                    <div
                      key={index}
                      variants={fadeIn}
                      className="flex items-start space-x-4 rounded-xl border border-orange-500/10 bg-gradient-to-r from-orange-500/10 to-transparent p-4 backdrop-blur-sm transition-colors hover:border-orange-500/20"
                    >
                      <div className="rounded-lg  p-2">
                        {/* <Image
                      loading="lazy"
                      src={feature.image}
                      alt={feature.title}
                      className="h-10 w-10 object-contain"
                    /> */}
                        <Image
                          loading="lazy"
                          src={feature.image}
                          alt={feature.title}
                          width={40}
                          height={40}
                          className="h-10 w-10 object-contain"
                        />
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-white">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>

              <div
                {...fadeIn}
                className="flex items-center justify-center space-x-4"
              >
                <div className="h-[4px] rounded-xl w-24 bg-gradient-to-r from-orange-500 to-transparent" />
                <p className="text-sm font-medium text-orange-500 whitespace-nowrap">
                  Take the first step to fast-track your future!
                </p>
                <div className="h-[4px] rounded-xl w-24 bg-gradient-to-r from-transparent to-orange-500" />
              </div>
            </div>
            {/* 🔹 Assign the ref directly to the form */}
            <div ref={ref}>
              <HomeBannerForm
                mailId={mailId}
                contactNo={contactNo}
                bannerTitle={bannerTitle}
                id="FooterForm"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
);
AboveFooterForm.displayName = "AboveFooterForm";

export default AboveFooterForm;
