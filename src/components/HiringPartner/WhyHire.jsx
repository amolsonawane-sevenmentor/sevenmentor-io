"use client"; // Only needed if this is used in a Server Component file

import Image from "next/image";
import React from "react";

// Import images using Next.js compatible imports
import whyhire1 from "../../../public/assets/HiringPartner/whyhire1.webp";
// import whyhire from "../../"
import whyhire2 from "../../../public/assets/HiringPartner/whyhire2.webp";
import vision from "../../../public/assets/About/vision.webp";

function WhyHire() {
  return (
    <div>
      <h2 className="text-white text-2xl md:text-4xl text-center md:mt-10 mt-2 font-bold">
        Why hire from{" "}
        <span className="text-orange-500 !text-3xl sm:!text-3xl lg:!text-5xl animated-text-fill !tracking-tight">
          SevenMentor
        </span>
      </h2>

      {/* Separator */}
      <div className="flex items-center justify-center gap-4 my-10">
        <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        <span className="text-orange-500 font-bold md:text-md text-sm text-center">
          Unlock Potential : Hire Top Talent Trained by SevenMentor!
        </span>
        <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      </div>

      {/* Section 1 */}
      <section className="w-full flex flex-col lg:flex-row items-center justify-between py-2 md:px-36 px-4 gap-10">
        <div className="lg:w-2/3 w-full flex flex-col justify-center max-w-2xl">
          <h3 className="text-3xl font-bold text-orange-500 mb-6 w-full">
            Immediately deployable candidates, all year round
          </h3>
          <p className="text-lg text-gray-100 leading-relaxed mb-4">
            Hiring from SevenMentor ensures that you get industry-ready
            candidates who can be immediately deployed into your workforce. Our
            students undergo rigorous training that bridges the gap between
            academic knowledge and real-world applications, equipping them with
            the latest skills and hands-on experience. Since we conduct training
            programs throughout the year, we maintain a steady pipeline of
            qualified professionals, allowing companies to hire skilled talent
            whenever the need arises without delays.
          </p>
        </div>

        <div className="lg:w-1/3 w-full flex justify-center items-center max-w-3xl">
          <Image
            src={whyhire1}
            alt="Immediately deployable candidates, all year round"
            className="md:w-[50vw] w-full md:h-[35vh] h-[25vh] object-cover"
          />
        </div>
      </section>

      <div className="flex justify-center items-center my-5">
        <div className="w-16 h-1 bg-orange-500 rounded"></div>
        <div className="w-3 h-3 bg-orange-500 rounded-full mx-2"></div>
        <div className="w-16 h-1 bg-orange-500 rounded"></div>
      </div>

      {/* Section 2 */}
      <section className="w-full flex flex-col lg:flex-row-reverse items-center justify-between py-2 md:px-36 px-4 gap-10">
        <div className="lg:w-2/3 w-full flex flex-col justify-center max-w-2xl">
          <h2 className="text-3xl font-bold text-orange-500 mb-6 w-full">
            A talent pool to meet all your needs
          </h2>
          <p className="text-lg text-gray-100 leading-relaxed mb-4">
            SevenMentor provides access to a diverse and skilled talent pool,
            covering various domains such as IT, software development,
            networking, data science, AI, and more. Whether you&apos;re looking for
            fresh graduates with solid foundational knowledge or professionals
            with advanced expertise, we can match you with candidates who meet
            your specific requirements. Our focus on practical training,
            problem-solving skills, and industry-aligned projects ensures that
            our graduates can seamlessly integrate into your company’s workflow.
          </p>
        </div>

        <div className="lg:w-1/3 w-full flex justify-center items-center p-2 max-w-2xl">
          <Image
            src={whyhire2}
            alt="A talent pool to meet all your needs"
            className="md:w-[40vw] w-full md:h-[35vh] h-[25vh] object-cover"
          />
        </div>
      </section>

      <div className="flex justify-center items-center my-5">
        <div className="w-16 h-1 bg-orange-500 rounded"></div>
        <div className="w-3 h-3 bg-orange-500 rounded-full mx-2"></div>
        <div className="w-16 h-1 bg-orange-500 rounded"></div>
      </div>

      {/* Section 3 */}
      <section className="w-full flex flex-col lg:flex-row items-center justify-between py-2 md:px-36 px-4 gap-10">
        <div className="lg:w-2/3 w-full flex flex-col justify-center max-w-2xl">
          <h3 className="text-3xl font-bold text-orange-500 mb-6 w-full">
            Customised Hiring Modes to meet your exact requirements
          </h3>
          <p className="text-lg text-gray-100 leading-relaxed mb-4">
            We understand that every organization has unique hiring needs, which
            is why SevenMentor offers customized recruitment solutions. Whether
            you require interns, full-time employees, project-based hires, or
            domain-specific experts, we tailor our hiring process to align with
            your business objectives. With flexible hiring models, on-demand
            talent sourcing, and an efficient selection process, we ensure that
            you get the right candidates with the right skill set without the
            hassle of prolonged hiring cycles.
          </p>
        </div>

        <div className="lg:w-1/3 w-full flex justify-center items-center max-w-2xl">
          <Image
            src={vision}
            alt="Customised Hiring Modes to meet your exact requirements"
            className="md:w-[40vw] w-full md:h-[35vh] h-[25vh] object-cover"
          />
        </div>
      </section>
    </div>
  );
}

export default WhyHire;
