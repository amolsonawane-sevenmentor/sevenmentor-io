"use client";
import React, { useCallback, useState } from "react";
import { ArrowRight } from "lucide-react";
import FranchiseForm from "../Forms/FranchiseForm";
import Image from "next/image";

import Link from 'next/link';

function BuyFranchise() {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = useCallback(() => {
    setShowPopup(true);
  }, []);

  const handleClosePopup = useCallback(() => {
    setShowPopup(false);
  }, []);

  return (
    <div className="mx-auto py-12 md:mt-24 max-w-7xl">
      <h1 className="text-3xl md:text-5xl font-bold text-orange-500 mb-8 text-center">
        Franchise Opportunities
      </h1>

      {/* Separator */}
      <div className="flex items-center justify-center gap-4 my-10">
        <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        <span className="text-orange-500 font-bold md:text-md text-sm text-center">
          &quot;Partner with Us, Grow with Us&quot;
        </span>
        <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-around">
        <div className="space-y-6 max-w-2xl p-3">
          <div className="flex items-center gap-4">
            <h2 className="md:text-3xl font-bold text-white text-xl text-nowrap">
              Want to be our franchise?
            </h2>
            <button
              className="inline-flex items-center px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
              onClick={handleOpenPopup}
            >
              Register Here
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>

          <p className="text-gray-100">
            Let&apos;s start together to enlighten young minds of the future Enquiry
            Here..
          </p>
          <Link
            href="mailto:franchise@sevenmentor.com"
            className="text-orange-500 hover:underline"
          >
            franchise@sevenmentor.com
          </Link>

          <p className="text-gray-100 text-lg">
            The franchise is the right to hold out a business under a selected
            operational method and a specific brand. It includes the proper use
            of trademarks, logos, a business system, operating procedures, and
            marketing techniques. If you have got the vision to mentor, it is
            the best opportunity. Training helps people to become as they need
            to be. Take up our franchise, to equip yourself with the proper
            tools and training to do your goals. SevenMentor Training franchise
            will be your own business. SevenMentor provides Franchise
            opportunities in Training Business. Your low-cost investment in our
            franchise can offer you an opportunity to earn extra money. Become
            our franchise and let us join hands to simplify our life. It will
            also fulfill your business and private goals. Training Franchise is
            a Business opportunity for Trainers, Investors, people who want to
            start their own business. We would like to add you as our business
            partner. You will be part of an ever-growing SevenMentor Training
            institute. It is helpful to expand our team. Our franchise will help
            you set up your own business with the help of one well-known brand
            training institute.
          </p>
        </div>

        <div className="relative w-[90vw]">
          <div className="bg-black/5 rounded-lg">
            <img
              src="/assets/Franchisee.webp"
              alt="Franchise Network Illustration"
              className="w-full md:h-[50vh] rounded-lg h-[25vh] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {showPopup && (
        <FranchiseForm
          isOpen={showPopup}
          onClose={handleClosePopup}
          title={"Franchise Registration"}
          mailId={"franchise@sevenmentor.com"}
          mailSubject={"Franchise Registration Received"}
          userEmailSubject={"Your Franchise Registration Has Been Received – SevenMentor"}
          contactNo={"7798058777"}
          bannerTitle={"Franchise Program"}
          emailRoute={"/franchise-form"}
        />
      )}
    </div>
  );
}

export default BuyFranchise;
