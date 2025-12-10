"use client"



import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import certificateImg from "../../../../../../../public/assets/course-certificates/certificate.webp";

const NonITCertificateSection = () => {
  return (
    <div className="bg-black text-white py-16 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image with animated gradient glow */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group flex-1"
        >
          {/* Glowing effect layer */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-500 via-black to-orange-600 blur-2xl opacity-40"
            animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
          <Image
            src={certificateImg}
            alt="Certificate"
            className="relative rounded-xl w-full max-w-[600px] shadow-xl z-10"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-600 text-transparent bg-clip-text"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Transform Your Future with Elite Certification
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            <FaLinkedin className="inline-block text-blue-500 mr-1" size={26} /> Add Our Training
            Certificate In Your LinkedIn Profile
          </motion.p>

          <motion.p
            className="text-base text-gray-400 mb-6 leading-relaxed"
            whileHover={{ scale: 1.01 }}
          >
            Our industry-relevant certification equips you with essential skills
            required to succeed in a highly dynamic job market.
          </motion.p>

          <motion.p
            className="text-orange-400 font-semibold text-lg"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-4xl inline-block">🎓</span> Join us and be part
            of over 50,000 successful certified graduates.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default NonITCertificateSection;
