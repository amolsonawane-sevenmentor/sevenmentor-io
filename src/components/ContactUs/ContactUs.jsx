"use client";
import React, { useCallback, useState } from "react";
import ContactForm from "../Forms/ContactForm/ContactForm";
import { Phone, Repeat, Mail, Pin } from "lucide-react";
// import PopUpForm from "../Forms/HomePopUpForm/PopUpForm";
import HomePopUpForm from "../../components/Home/HomeStickyButton/HomePopUpForm.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from "@fortawesome/free-regular-svg-icons"; // Import Hand Point Up icon
import StickyButton from "../StickyButton/StickyButton";
import Link from "next/link";

const ContactUs = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = useCallback(() => {
    setShowPopup(true);
  }, []);

  const handleClosePopup = useCallback(() => {
    setShowPopup(false);
  }, []);

  return (
    <>
      <div className="bg-black text-orange-500 flex flex-col items-center justify-between">
        <div className="max-w-7xl mx-auto md:p-6 md:flex">
          {/* Left Side: Contact Options */}
          <div className="flex flex-col justify-center space-y-6 p-4 w-full md:w-2/3">
            <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left">
              Contact Us
            </h2>
            <p className="text-xl md:text-3xl text-white text-center md:text-left">
              We&apos;re Here to Help!
            </p>
            <p className="text-lg md:text-xl text-white">
              Have questions? The quickest way to get in touch with us is using
              the contact information below.
            </p>

            {/* Button Container */}
            <div className="flex space-x-4 relative">
              <Link href="tel:+917798058777">
                <button className="flex items-center whitespace-nowrap bg-orange-500 text-white font-semibold py-2 px-3 rounded-full text-sm hover:bg-orange-600 transition cursor-pointer">
                  <Phone className="mr-2 text-white" /> +91 77980 58777
                </button>
              </Link>
              <div className="relative">
                <button
                  className="flex items-center whitespace-nowrap bg-orange-500 text-white font-semibold py-2 px-3 rounded-full text-sm hover:bg-orange-600 transition cursor-pointer"
                  onClick={handleOpenPopup}
                >
                  <Repeat className="mr-2 text-white" /> Schedule Free Demo
                </button>
                {/* Hand Point Up Icon */}
                <div className="absolute hidden md:block top-[70px] left-[75px] justify-center mt-2">
                  <FontAwesomeIcon
                    icon={faHandPointUp}
                    className="text-orange-500/80 animate-bounce text-6xl animate-blink"
                  />
                </div>
              </div>
              {/* Popup Form */}
              {showPopup && (
                <HomePopUpForm
                  isOpen={showPopup}
                  onClose={handleClosePopup}
                  title={"Request Callback"}
                  mailId={"support@sevenmentor.com"}
                  contactNo={"7798058777"}
                  bannerTitle={"Contact at the SevenMentor"}
                />
              )}
            </div>

            <div className="mt-6 mb-8 flex flex-col justify-center items-center md:items-start">
              <h3 className="text-lg font-semibold flex items-center text-white">
                <Mail className="mr-2 text-orange-500" /> Email
              </h3>
              <Link href="mailto:support@sevenmentor.com">
                <p className="text-sm text-gray-400 flex items-center">
                  support@sevenmentor.com
                </p>
              </Link>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full md:w-2/3 md:p-8 md:ml-10">
            <ContactForm />
          </div>
        </div>
        <div className="w-full max-w-7xl bg-black mt-6 p-6">
          <h3 className="text-2xl md:text-5xl font-bold text-center text-orange-500 mb-6">
            Our Locations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <h4 className="text-lg font-semibold">
                Shivaji Nagar Head Branch
              </h4>
              <p className="text-sm text-gray-400">
                45/A Wing, Shreenath Plaza, 1st floor, Dnyaneshwar Paduka Chowk,
                1184/4 F.C Road, Shivaji Nagar, Pune, Maharashtra – 411005
              </p>
              <p className="text-sm text-orange-500 mt-1">
                Call us at:{" "}
                <a href="tel:02071173071" className="hover:text-blue-600">
                  020 7117 3071
                </a>
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <h4 className="text-lg font-semibold">Pimpri Chinchwad Branch</h4>
              <p className="text-sm text-gray-400">
                Office number 38 wing A and B, 3rd Floor, KUNAL PLAZA off Mumbai
                Pune Highway, Chinchwad, Maharashtra – 411019
              </p>
              <p className="text-sm text-orange-500 mt-1">
                Call us at:{" "}
                <a href="tel:02071173125" className="hover:text-blue-600">
                  020 7117 3125
                </a>
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <h4 className="text-lg font-semibold">Hadapsar Branch</h4>
              <p className="text-sm text-gray-400">
                Manisha Blitz, Office 34-35, 3rd floor, Near Shankarmath, Pune
                Solapur Hwy, Hadapsar, Pune - 411013
              </p>
              <p className="text-sm text-orange-500 mt-1">
                Call us at:{" "}
                <a href="tel:02048556222" className="hover:text-blue-600">
                  020 4855 6222
                </a>
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <h4 className="text-lg font-semibold">Deccan Branch</h4>
              <p className="text-sm text-gray-400">
                3rd Floor, Renuka Complex, D-2, Jangali Maharaj Rd, opp. MC
                Donalds, Shivajinagar, Pune, Maharashtra 411005
              </p>
              <p className="text-sm text-orange-500 mt-1">
                Call us at:{" "}
                <a href="tel:02048553951" className="hover:text-blue-600">
                  020 4855 3951
                </a>
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <h4 className="text-lg font-semibold">Nanded Branch</h4>
              <p className="text-sm text-gray-400">
                Saphalya building, 1-14-870, Opp. Yogeshvara complex, Near Raj
                mall, Anandnagar, Nanded, 431605
              </p>
              <p className="text-sm text-orange-500 mt-1">
                Call us at:{" "}
                <a href="tel:02048556262" className="hover:text-blue-600">
                  020 4855 6262
                </a>
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <h4 className="text-lg font-semibold">Mumbai Branch</h4>
              <p className="text-sm text-gray-400">
                Office no. 101 & part office no.1, Civic Centre, MMGS Marg,
                Dadar East, Dadar, Mumbai, Maharashtra 400014
              </p>
              <p className="text-sm text-orange-500 mt-1">
                Call us at:{" "}
                <a
                  href="tel:02248904395"
                  className="hover:text-blue-600"
                >
                  022 4890 4395
                </a>
              </p>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-white">
              <h4 className="text-lg font-semibold">Akurdi Branch</h4>
              <p className="text-sm text-gray-400">
                Plot No.7/4, Sector No.29, 1st floor, Dharmraj Chowk, DY Patil
                College Rd, near Chaitanya Park, Gurudwara Colony, Ravet,
                Pimpri-Chinchwad, Maharashtra 412101
              </p>
              <p className="text-sm text-orange-500 mt-1">
                Call us at:{" "}
                <a href="tel:02071173125" className="hover:text-blue-600">
                  020 7117 3125
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* New Section: Query Boxes */}
        <div className="max-w-7xl mx-auto p-6 mt-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {/* Crm Queries Box */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-gray-900 border-2 border-orange-500/80 opacity-30"></div>
              <div className="relative z-10 p-6 border border-transparent rounded-lg flex items-center justify-center flex-col">
                <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-white/80 bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                  For CRM Queries
                </span>
                <Link
                  href="tel:+91 77980 58777"
                  className="flex items-center mt-4"
                >
                  <Phone className="mr-2 w-6 h-6 text-orange-500" /> 02048553350
                </Link>
                <Link
                  href="mailto:crm@sevenmentor.com"
                  className="flex items-center mt-1"
                >
                  <Mail className="mr-2 w-6 h-6 text-orange-500" />{" "}
                  crm@sevenmentor.com
                </Link>
              </div>
            </div>

            {/* Enrollment Queries Box */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-gray-900 border-2 border-orange-500/80 opacity-30"></div>
              <div className="relative z-10 p-6 border border-transparent rounded-lg flex items-center justify-center flex-col">
                <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-white/80 bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                  For Enrollment Queries
                </span>
                <Link
                  href="tel:+91 77980 58777"
                  className="flex items-center mt-4"
                >
                  <Phone className="mr-2 w-6 h-6 text-orange-500" /> +91 77980
                  58777
                </Link>
                <Link
                  href="mailto:registration@sevenmentor.com"
                  className="flex items-center mt-1"
                >
                  <Mail className="mr-2 w-6 h-6 text-orange-500" />{" "}
                  registration@sevenmentor.com
                </Link>
              </div>
            </div>

            {/* Job Queries Box */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-gray-900 border-2 border-orange-500/80 opacity-30"></div>
              <div className="relative z-10 p-6 border border-transparent rounded-lg flex items-center justify-center flex-col">
                <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-white/80 bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                  For Job Queries
                </span>
                <Link
                  href="tel:+91 8329014018"
                  className="flex items-center mt-4"
                >
                  <Phone className="mr-2 w-6 h-6 text-orange-500" /> +91
                  8329014018
                </Link>
                <Link
                  href="mailto:careers@sevenmentor.com"
                  className="flex items-center mt-1"
                >
                  <Mail className="mr-2 w-6 h-6 text-orange-500" />{" "}
                  careers@sevenmentor.com
                </Link>
              </div>
            </div>

            {/* Placement Queries Box */}
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-gray-900 border-2 border-orange-500/80 opacity-30"></div>
              <div className="relative z-10 p-6 border border-transparent rounded-lg flex items-center justify-center flex-col">
                <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-white/80 bg-clip-text text-center text-2xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                  For Placement Queries
                </span>
                <Link href="tel:02048556661" className="flex items-center mt-4">
                  <Phone className="mr-2 w-6 h-6 text-orange-500" /> 02048556661
                </Link>
                <Link
                  href="mailto:placement@sevenmentor.com"
                  className="flex items-center mt-1"
                >
                  <Mail className="mr-2 w-6 h-6 text-orange-500" />{" "}
                  placement@sevenmentor.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StickyButton
        mailId={"support@sevenmentor.com"}
        contactNo={"7798058777"}
        bannerTitle={"Individual Course At SevenMentor"}
      />
    </>
  );
};

export default ContactUs;
