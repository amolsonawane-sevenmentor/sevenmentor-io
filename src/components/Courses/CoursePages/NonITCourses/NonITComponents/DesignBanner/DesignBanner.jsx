import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import { AwardIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointUp, faPhone } from '@fortawesome/free-solid-svg-icons';

const DesignBanner = ({ imagePath, contactNo, altText }) => {
  return (
    <div className="relative w-full h-[220px] md:h-[350px] lg:h-[720px] overflow-hidden md:mb-7">
      <Image
        src={imagePath}
        alt={altText || "Banner-Image"}
        fill
        fetchPriority="high"
        priority
        sizes="100vw"
        className="!w-full !h-full object-contain md:object-cover"
      />
      <div className="absolute bottom-[10px] left-8  lg:bottom-[170px] lg:left-24 z-5">
        <div className="flex items-start justify-start w-full gap-4">
          {/* Placement Button */}
          <Link
            href="/100-percent-job-placement-institute-in-pune.php"
            className="order-1 !lg:order-none w-full max-w-[240px] justify-center"
          >
            <div className="relative w-full">
              <div className="absolute hidden md:block top-[70px] left-[75px] justify-center mt-2 z-50">
                <FontAwesomeIcon
                  icon={faHandPointUp}
                  className="text-orange-600 animate-bounce text-6xl animate-blink"
                  
                />
              </div>
              <motion.button
                id="placement-btn"
                aria-label="Placement Button"
                title="Placement Button"
                className="relative flex items-center w-full px-3 py-2 max-w-[250px] justify-center lg:px-4 lg:py-2 text-white text-lg font-semibold rounded-full shadow-lg gap-2 overflow-hidden bg-white border-[3px] border-orange-500"
                whileHover={{
                  scale: 1.05,
                  borderColor: 'rgba(249, 115, 22, 0.8)',
                  boxShadow: '0 0 15px rgba(249, 115, 22, 0.8)',
                }}
                whileTap={{ scale: 0.95 }}
              >
                <AwardIcon className="h-6 w-6 text-black" />
                <span className="text-black">Placement</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent md:block hidden via-orange-500 to-transparent opacity-70"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                />
                <div className="absolute inset-0 rounded-full border-[3px] border-orange-500/50 opacity-70 animate-pulse" />
              </motion.button>
            </div>
          </Link>

          {/* Phone Button */}
          <motion.a
            aria-label="Phone Button"
            title="Phone Button"
            id="Phone-btn"
            className="relative flex items-center w-full px-3 py-2 max-w-[250px] justify-center lg:px-4 lg:py-2 text-white text-lg font-semibold rounded-full shadow-lg gap-2 overflow-hidden bg-white border-[3px] border-orange-500 order-2 lg:order-none"
            href={`tel:${contactNo}`}
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              borderColor: 'rgba(249, 115, 22, 0.8)',
              boxShadow: '0 0 15px rgba(249, 115, 22, 0.8)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FontAwesomeIcon height={20} width={20} icon={faPhone} className="text-black text-xl" />
            <span className="text-black whitespace-nowrap">{contactNo}</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent md:block hidden via-orange-500 to-transparent opacity-70"
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            />
            <div className="absolute inset-0 rounded-full border-[3px] border-orange-500/50 opacity-70 animate-pulse" />
          </motion.a>
        </div>
      </div>

    </div>
  );
};

export default DesignBanner;
