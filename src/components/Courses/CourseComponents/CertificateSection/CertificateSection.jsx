"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Users, Sparkles, ArrowRight, X, Linkedin } from "lucide-react";

import PopUpForm from "../../../Forms/PopUpForm/PopUpForm.jsx";

import Image from "next/image";
import Link from "next/link";

export default function CertificateSection({ mailId, contactNo, bannerTitle }) {
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const profiles = [
    "/assets/PlacementImages/TechnicalSupport.webp",
    "/assets/PlacementImages/Dataengine.webp",
    "/assets/PlacementImages/SapExecutive.webp",
    "/assets/PlacementImages/FullStackDeveloper.webp",
    "/assets/PlacementImages/SoftwareDeveloper.webp",
  ];

  // popup form logic
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // certificate preview logic
  const [showCertificatePreview, setShowCertificatePreview] = useState(false);

  const handleOpenCertificatePreview = () => {
    document.body.style.overflow = "hidden";
    setShowCertificatePreview(true);
  };

  const handleCloseCertificatePreview = () => {
    document.body.style.overflow = "";
    setShowCertificatePreview(false);
  };

  // Helper to get width/height without window
  const getClientWidth = () =>
    typeof document !== "undefined"
      ? document.documentElement.clientWidth
      : 1920;

  const getClientHeight = () =>
    typeof document !== "undefined"
      ? document.documentElement.clientHeight
      : 1080;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-20 pb-0 md:py-20">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,103,0,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,103,0,0.1),transparent_50%)]" />

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-orange-500/20"
            animate={{
              x: [
                Math.random() * getClientWidth(),
                Math.random() * getClientWidth(),
              ],
              y: [
                Math.random() * getClientHeight(),
                Math.random() * getClientHeight(),
              ],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container relative px-5 mx-auto md:px-20 mb-[75px] sm:mb-0">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-10">
          {/* Enhanced Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start max-w-2xl justify-center space-y-4"
          >
            <motion.div className="space-y-4" style={{ y }}>
              <h2 className="bg-gradient-to-r from-white via-orange-200 to-orange-500 bg-clip-text text-3xl lg:text-left text-center font-bold leading-tight text-transparent md:text-4xl lg:mb-8">
                Transform Your Future with Elite Certification
              </h2>
              <Link href="https://www.linkedin.com/" target="blank">
                <h3 className="bg-gradient-to-r flex items-center justify-start from-white via-orange-200 to-orange-500 bg-clip-text text-[1.1rem] lg:text-left text-center font-bold leading-tight text-transparent mt-3">
                  Add Our Training Certificate In Your LinkedIn Profile
                  <Image
                    aria-label="LinkedIn Logo"
                    alt="LinkedIn"
                    loading="lazy"
                    className="h-7 w-7 md:ml-2 animate-bounce"
                    height={7}
                    width={7}
                    src="/assets/linkedin.webp"
                  />
                </h3>
              </Link>
              <p className="text-lg text-center lg:text-left text-gray-400">
                Our industry-relevant certification equips you with essential
                skills required to succeed in a highly dynamic job market.
              </p>
              <p className="text-lg text-center lg:text-left text-gray-400 lg:mb-6">
                Join us and be part of over 50,000 successful certified
                graduates.
              </p>
            </motion.div>

            {/* Enhanced CTA Section */}
            <motion.div
              className="flex  gap-4 lg:mb-6"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
            >
              <button
                id="enroll-now-btn"
                aria-label="Enroll Now"
                size="lg"
                className="group relative overflow-hidden bg-orange-500 text-white transition-all hover:bg-orange-600 rounded-full"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <span
                  className="relative z-10 flex items-center gap-2 px-4 py-2 "
                  onClick={handleOpenPopup}
                >
                  Enroll Now <ArrowRight className="h-4 w-4" />
                </span>
                {showPopup && (
                  <PopUpForm
                    isOpen={showPopup}
                    onClose={handleClosePopup}
                    title={"Request Callback"}
                    mailId={mailId}
                    bannerTitle={bannerTitle}
                    contactNo={contactNo}
                    id = "CerftificatePopupSubmit"
                  />
                )}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500"
                  animate={{
                    scale: isHovered ? 1.5 : 1,
                    opacity: isHovered ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </button>
              <button
                aria-label="Learn More"
                variant="outline"
                size="lg"
                className="group border  border-orange-500/20 text-orange-500 transition-all hover:bg-orange-500/10 px-4 rounded-xl"
                onClick={handleOpenCertificatePreview}
              >
                <span className="relative flex items-center gap-2">
                  Preview Certificate
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Sparkles className="h-4 w-4" />
                  </motion.div>
                </span>
              </button>
            </motion.div>
            {showCertificatePreview && (
              <div className="fixed inset-0 z-50 !mt-[-50px] flex items-center justify-center bg-black/80">
                {/* Certificate Preview Container */}
                <div className="relative mt-[50px]  w-full sm:w-[500px] max-w-3xl rounded-xl border border-orange-500/20 bg-black/40 p-1 sm:p-4 shadow-lg">
                  {/* Close Button */}
                  <button
                    className="absolute right-[45%]  sm:top-2 sm:right-2 top-[-60px] z-50 rounded-full p-3 sm:p-2 text-white transition border border-white/80 bg-[#FF0000] hover:scale-105 duration-75 animate-bounce sm:animate-none lg:top-2 lg:right-2 lg:left-auto"
                    aria-label="Close"
                    onClick={handleCloseCertificatePreview}
                  >
                    <X className="h-6 w-6 sm:h-4 sm:w-4 !font-extrabold" />
                  </button>

                  {/* Certificate Content */}
                  <div className="w-full overflow-hidden rounded-lg">
                    <Image
                      loading="lazy"
                      aria-label="Certificate Preview"
                      src="/assets/course-certificates/certificate.webp"
                      alt="Certificate Preview"
                      className="h-auto w-full object-cover"
                      height={100}
                      width={100}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Social Proof */}
            <div className="flex items-center gap-2 min-w-full rounded-full border border-orange-500/20 bg-black/40 p-2 backdrop-blur-sm">
              <div className="flex -space-x-2">
                {(Array.isArray(profiles) ? profiles : []).map(
                  (item, index) => (
                    <div
                      key={index}
                      className="h-8 w-8 overflow-hidden border border-orange-500 rounded-full "
                    >
                      <Image
                        aria-label="Student Profile"
                        src={item}
                        alt={`Student ${index + 1}`}
                        className="h-full w-full object-cover"
                        width={8}
                        height={8}
                      />
                    </div>
                  )
                )}
              </div>
              <div className="flex items-center gap-2 pl-2 text-sm text-gray-400">
                <Users className="h-4 w-4 text-orange-500" />
                <span>Join 15,258 others learning today</span>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Certificate Preview */}
          <div className="rounded-xl flex items-center justify-center">
            <Image
              aria-label="Certificate Preview"
              src="/assets/course-certificates/certificate.webp"
              alt="Certificate Preview"
              height={550}
              width={330}
  
              className="md:w-[400px] w-[330px] h-auto md:h-[550px] rounded-lg object-cover scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
