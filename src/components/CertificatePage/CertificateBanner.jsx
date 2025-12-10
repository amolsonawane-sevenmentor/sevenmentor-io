'use client';

import { motion, useScroll, useTransform } from "framer-motion";

import Image from "next/image";
import {
  Award,
  Sparkles,
  Circle,
  Star,
  FileCheck,
  ArrowRight,
  Zap,
  BadgeCheck,
} from "lucide-react";
import { useRef, useState } from "react";
import PopUpForm from "../Forms/PopUpForm/PopUpForm";


export default function CertificateBanner() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Floating animation for background elements
  const floatingElements = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    initialY: Math.random() * 100,
  }));

  // popup form logic
  const [showPopup, setShowPopup] = useState(false);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <motion.section
      ref={containerRef}
      className="relative w-full mt-2 bg-black overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,119,0,0.1),transparent_50%)]" />
      </div>

      {/* Floating background elements */}
      {floatingElements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute"
          initial={{
            x: `${el.initialX}vw`,
            y: `${el.initialY}vh`,
            opacity: 0.1,
          }}
          animate={{
            x: [
              `${el.initialX}vw`,
              `${el.initialX + 10}vw`,
              `${el.initialX}vw`,
            ],
            y: [
              `${el.initialY}vh`,
              `${el.initialY - 10}vh`,
              `${el.initialY}vh`,
            ],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {el.id % 3 === 0 ? (
            <Star className="w-3 h-3 text-orange-500/20" />
          ) : el.id % 3 === 1 ? (
            <Circle className="w-2 h-2 text-zinc-500/20" />
          ) : (
            <Sparkles className="w-4 h-4 text-orange-400/20" />
          )}
        </motion.div>
      ))}

      {/* Main content container */}
      <div className="container md:px-10 px-2 md:py-20 pt-12 relative z-10 w-full">
        <div className="flex flex-col md:flex-row gap-12 items-center justify-center !w-full">
          {/* Left content */}
          <motion.div style={{ y, opacity }} className="space-y-8 max-w-xl">
            {/* Animated badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-zinc-800/10 px-4 md:py-2 rounded-full border border-orange-500/20 ml-[105px] md:ml-0"
            >
              <FileCheck className="w-5 h-5 text-orange-500" />
              <span className="text-zinc-300 text-sm font-medium">
                Industry-Recognized Credentials
              </span>
            </motion.div>

            <div className="space-y-6 px-2 sm:px-0">
              <motion.h1
                className="text-3xl lg:text-5xl font-bold leading-tight text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="inline-block bg-gradient-to-r from-orange-500 via-orange-400 to-zinc-300 bg-clip-text text-transparent pb-2">
                  GO CONFIDENTLY TOWARD YOUR DREAMS
                </span>
                <br />
                <motion.span
                  className="inline-block text-zinc-100 relative text-xl md:text-2xl font-semibold mt-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  At SevenMentor, we believe:
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-1 bg-orange-500/50"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </motion.span>
                <br />
                {/* <motion.span
                  className="inline-block bg-gradient-to-r from-zinc-300 to-orange-500 bg-clip-text text-transparent mt-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  BOOST YOUR CAREER
                </motion.span> */}
              </motion.h1>

              <motion.p
                className="text-zinc-400 text-lg max-w-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                Your dreams deserve more than hesitation—they deserve action,
                courage, and the right guidance. The journey to success begins
                with a single step—and we&apos;re here to walk with you. At
                SevenMentor, your future starts now
              </motion.p>

              {/* Benefits list */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                {[
                  "Industry-recognized credentials",
                  "Enhanced employability",
                  "Verified skill validation",
                  "Career advancement",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <BadgeCheck className="w-5 h-5 text-orange-500" />
                    <span className="text-zinc-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* <motion.div
              className="flex items-start justify-center md:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-medium relative overflow-hidden shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-shadow"
                onClick={handleOpenPopup}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Get Certified
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </motion.div> */}
          </motion.div>

          {/* Right content - Certificate Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 1, type: "spring" }}
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Animated rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-lg border-2 border-orange-500/20"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}

              {/* Glowing background */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-tr from-orange-500/30 via-zinc-700/20 to-transparent"
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }}
              />

              <div className="absolute inset-4 rounded-lg backdrop-blur-sm bg-zinc-900/50" />

              {/* Certificate image */}
              <Image
                src="/assets/certificatebanner.webp"
                alt="Professional Certificate"
                width={1200}
                height={900}
                className="rounded-lg h-auto max-w-lg object-cover relative z-10 shadow-2xl shadow-orange-500/20"
              />

              {/* Decorative elements */}
              <motion.div
                className="absolute -right-4 top-10 bg-orange-500/20 p-3 rounded-lg backdrop-blur-sm"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="w-6 h-6 text-orange-500" />
              </motion.div>

              <motion.div
                className="absolute -left-4 bottom-10 bg-zinc-700/20 p-3 rounded-lg backdrop-blur-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Award className="w-6 h-6 text-zinc-300" />
              </motion.div>

              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-6 right-10 bg-gradient-to-br from-orange-600 to-orange-900 p-4 rounded-full shadow-lg z-20"
                animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <BadgeCheck className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {showPopup && (
        <PopUpForm
          isOpen={showPopup}
          onClose={handleClosePopup}
          title={"Request Certification Info"}
          mailId={"registration@sevenmentor.com"}
          contactNo={"7798058777"}
          bannerTitle={"Individual Course At SevenMentor"}
          mailSubject={"New Certification Enquiry Received"}
          userEmailSubject={"Thank You for Your Certification Enquiry at SevenMentor"}
        />
      )}
    </motion.section>
  );
}