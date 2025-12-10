"use client"
import React from "react";
import HomeBannerForm from "../Forms/HomeBannerForm.jsx";

export default function AboutForm() {
  return (
    <section className="relative w-full flex flex-col lg:flex-row items-start lg:items-center justify-between py-2 md:px-10 bg-black space-y-8 lg:space-y-24 lg:space-x-8">
      {/* Left Section - About Content */}
      <div className="lg:w-3/5 w-full px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6">
          <span className="text-orange-500 !text-3xl sm:!text-3xl lg:!text-5xl animated-text-fill !tracking-tight">
            SevenMentor
          </span>{" "}
          - Way to Success
        </h2>
        <p className="text-lg text-gray-100 leading-relaxed mb-6">
          <strong>SevenMentor</strong> has established itself as a leader in
          training and consulting since its inception in <strong>2012</strong>,
          empowering individuals and organizations worldwide to achieve their
          professional goals. Committed to delivering excellence, we provide
          world-class classroom and online training programs tailored to meet
          diverse learning needs. Our innovative approach combines
          industry-relevant content with hands-on experience, ensuring our
          students and professionals stay ahead in competitive fields.
        </p>
        <p className="text-lg text-gray-100 leading-relaxed">
          Headquartered in Pune, India, with a global presence, SevenMentor has
          trained thousands in cutting-edge domains such as{" "}
          <strong>
            {" "}
            Data Science, Artificial Intelligence, Cloud Computing,{" "}
          </strong>{" "}
          and more. By fostering skill development and career advancement, we
          equip learners with the tools to thrive in today’s ever-evolving
          landscape, making us a trusted partner for personal and professional
          growth.
        </p>
        <br />
        <p className="text-lg text-gray-100 leading-relaxed">
          In addition to individual training,{" "}
          <strong>
            {" "}
            SevenMentor specializes in corporate training for both national and
            international clients,{" "}
          </strong>{" "}
          helping businesses upskill their workforce and stay competitive in
          rapidly changing markets. Our corporate programs are designed to meet
          specific organizational needs across various industries and
          technologies.
        </p>
        <br />
        <p className="text-lg text-gray-100 leading-relaxed">
          We are also a leading <strong> IT support company, </strong>{" "}
          delivering end-to-end technology solutions to{" "}
          <strong>clients across the United States. </strong> Our expert teams
          provide support across various platforms, ensuring seamless operations
          and innovation.
        </p>
        <br />
        <p className="text-lg text-gray-100 leading-relaxed">
          Moreover, <strong>SevenMentor offers HR services </strong> for both{" "}
          <strong>domestic and global clients, </strong> including talent
          acquisition, staffing solutions, and strategic workforce
          management—positioning us as a comprehensive partner in both
          technology and human capital development.
        </p>
      </div>

      {/* Right Section - Form */}
      <div className="lg:w-2/5 w-full bg-black shadow-lg rounded-lg md:p-6">
        <HomeBannerForm
          mailId={"registration@sevenmentor.com"}
          contactNo={"7798058777"}
          bannerTitle={"Individual Course At SevenMentor"}
          id="TopForm"
        />
      </div>
    </section>
  );
}
