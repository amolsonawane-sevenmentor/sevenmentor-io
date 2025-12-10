'use client';

import { useState, memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AwardIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointUp, faDownload, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useMediaQuery } from 'react-responsive';
import SyllabusPopUpForm from '../../../Forms/SyllabusPopUpForm/SyllabusPopUpForm.jsx';
import googleReview from "../../../../../public/assets/CourseBannerImages/reviewGoogle.webp";
import facebookreview from "../../../../../public/assets/CourseBannerImages/reviewFacebook.webp";
import linkedinreview from "../../../../../public/assets/CourseBannerImages/reviewlinkedin.webp";
import styles from '../../../Home/HomeBanner/HomeBanner.module.css'; // <-- import module CSS

const FeatureItem = memo(function FeatureItem({ icon, text, alt = 'feature-icon' }) {
  return (
    <div className="flex w-full items-center justify-left">
      {/* Use Next.js Image for feature icons */}
      <Image
        src={icon || '/placeholder.svg'}
        alt={alt}
        width={40}
        height={40}
        className="rounded-full w-[40px] h-[40px] lg:w-[50px] lg:h-[50px]"
        loading="lazy"
        priority={false}
      />
      <span className="text-[13px] lg:text-lg text-white ml-3 text-left max-w-[315px] overflow-hidden sm:max-w-none">
        {text}
      </span>
    </div>
  );
});

export default function CourseBanner({ courseData, bannerTitle, contactNo, IsNonCoursePage }) {
  const {
    title,
    path,
    bulletPath1,
    bulletPath2,
    bulletPath3,
    description1,
    description2,
    description3,
    whatsappnumber,
    mailId,
    pdfUrlPath,
  } = courseData;

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [showPopup, setShowPopup] = useState(false);

  const handleDownload = async () => {
    try {
      const response = await fetch(pdfUrlPath, { method: 'GET' });
      if (!response.ok) throw new Error('Network response was not ok');
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'syllabus.pdf';
      link.click();
      URL.revokeObjectURL(link.href);
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  };

  const handleFormSubmit = async (formData) => {
    await handleDownload();
    setShowPopup(false);
  };

  return (
    <>
      {/* Top scrolling line (always visible) */}
      {/* <div className="w-full bg-gradient-to-r mt-20 from-orange-500 via-orange-600 to-orange-500 text-white py-1 md:py-4 overflow-hidden relative">
        <div className="flex whitespace-nowrap">
          <div className={`${styles.scroll} flex items-center space-x-8 text-white font-semibold text-sm md:text-base`}>
            <span>✨ Job-Ready Students, Job-Driven Training, Job-Assured Placements</span>
            <span>✨ Job-Ready Students, Job-Driven Training, Job-Assured Placements</span>
            <span>✨ Job-Ready Students, Job-Driven Training, Job-Assured Placements</span>
            <span>✨ Job-Ready Students, Job-Driven Training, Job-Assured Placements</span>
          </div>
        </div>
      </div> */}

      <section className="relative w-full md:h-[650px] bg-cover bg-center md:bg-black md:mt-10 md:py-14 flex items-center justify-center md:px-20 inset-0 md:bg-gradient-to-br from-orange-500/70 via-black to-orange-500/70 z-0">
        {/* Overlay for background opacity */}
        <div className="absolute hidden md:block inset-0 bg-black opacity-80 z-1"></div>
        {/* Gradient background for mobile */}
        {isMobile && (
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-black to-black z-0" />
        )}
        <div className="relative z-10 flex h-full w-full flex-col items-center md:px-4 py-12 pb-0 lg:flex-row lg:gap-0 lg:justify-between md:mx-6">
          {/* Left Column - Content */}
          <div className="flex flex-1 flex-col items-center lg:items-start text-center lg:text-left gap-6 md:mt-[-30px] pt-12 md:pt-0">
            <h1 className="text-xl font-bold capitalize tracking-tight text-white lg:text-4xl mb-3 max-w-[300px] md:max-w-max">
              {title}
            </h1>
            <div className="features md:mt-6 space-y-8 px-4 gap-8 md:gap-4 mb-8 md:mb-0">
              <FeatureItem icon={bulletPath1} text={description1} />
              <FeatureItem icon={bulletPath2} text={description2} />
              <FeatureItem icon={bulletPath3} text={description3} />
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-left w-full gap-8">
              {/* Placement Button */}
              <Link href="/100-percent-job-placement-institute-in-pune.php" className="order-1 !lg:order-none flex-1 w-full max-w-[240px] justify-center">
                <div className="relative w-full">
                  <div className="absolute hidden md:block top-[70px] left-[75px] justify-center mt-2 z-50">
                    <FontAwesomeIcon icon={faHandPointUp} className="text-orange-500/80 animate-bounce text-6xl animate-blink" />
                  </div>
                  <motion.button
                    id="placement-btn"
                    aria-label="Placement Button"
                    title='Placement Button'
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
                title='Phone Button'
                id="Phone-btn"
                className="relative flex items-center w-full px-3 py-2 max-w-[250px] justify-center lg:px-4 lg:py-2 text-white text-lg font-semibold rounded-full shadow-lg gap-2 overflow-hidden bg-white border-[3px] border-orange-500 order-2 lg:order-none flex-1"
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
              {/* Download Syllabus Button */}
              {!IsNonCoursePage &&

                <motion.button
                  aria-label="Download Syllabus Button"
                  title='Download Syllabus Button'
                  id="syllabus-btn"
                  className="relative flex items-center w-full px-3 py-2 max-w-[250px] justify-center lg:px-4 lg:py-2 text-black text-lg font-semibold rounded-full shadow-lg gap-1 overflow-hidden bg-white/90 border-2 border-orange-500 order-3 lg:order-none flex-1"
                  whileHover={{
                    scale: 1.05,
                    borderColor: 'rgba(249, 115, 22, 0.8)',
                    boxShadow: '0 0 15px rgba(249, 115, 22, 0.8)',
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowPopup(true)}
                >
                  <FontAwesomeIcon icon={faDownload} className="text-black h-5 w-4 text-xl" />
                  <span className="text-black font-semibold whitespace-nowrap">Download Syllabus</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent md:block hidden via-orange-500 to-transparent opacity-80"
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                  />
                  <div className="absolute inset-0 rounded-full border-[3px] border-orange-500/50 opacity-70 animate-pulse" />
                </motion.button>
              }
            </div>
          </div>
          {/* Right Column - Banner Image */}
          <div className="flex flex-1 justify-center hidden lg:inline md:h-[420px]">
            <div className="md:h-[315px] md:w-[550px]">
              <Image
                src={path || '/placeholder.svg'}
                alt={title}
                width={550}
                height={315}
                className="rounded-3xl object-cover bannerImg sm:h-[315px] sm:w-[550px] lg:ml-[70px] h-auto"
                style={{
                  boxShadow: '0 0 8px 2px rgba(249, 115, 22, 0.6)',
                }}
                loading="eager"
                priority={true}
              />

              <div className="flex items-center justify-around w-full mt-6 lg:ml-[30px]">
                <Image
                  aria-label="Facebook Reviews"
                  src={facebookreview}
                  alt="FacebookReviews"
                  fetchPriority="low"
                  className="lg:w-[300px] sm:w-[100px] xs:w-[100px] xs:h-[45px] rounded-xl lg:h-[80px] lg:ml-[0px]"
                  width="100"
                  height="45"
                />
                <Image
                  aria-label="Google Reviews"
                  src={googleReview}
                  alt="GoogleReviews"
                  fetchPriority="low"
                  className="lg:w-[300px] sm:w-[100px] xs:w-[100px] xs:h-[45px] rounded-xl lg:h-[80px] absolute"
                  width="100"
                  height="45"
                />
                <Image
                  aria-label="LinkedIn Reviews"
                  src={linkedinreview}
                  alt="LinkedInReviews"
                  fetchPriority="low"
                  className="lg:w-[300px] sm:w-[100px] xs:w-[100px] xs:h-[45px] rounded-xl lg:h-[80px]"
                  width="100"
                  height="45"
                />
              </div>

            </div>
          </div>
          

          {/* Mobile-specific section */}
          {isMobile && (
            <div className="flex items-center justify-center space-x-4 mt-20">
              <div className="h-[4px] rounded-xl w-24 bg-gradient-to-r from-orange-500 to-transparent" />
              <p className="text-sm font-medium text-orange-500 whitespace-nowrap">Start Today!</p>
              <div className="h-[4px] rounded-xl w-24 bg-gradient-to-r from-transparent to-orange-500" />
            </div>
          )}
        </div>
        {/* Form Modal */}
        {showPopup && (
          <SyllabusPopUpForm
            isOpen={showPopup}
            onClose={() => setShowPopup(false)}
            onSubmit={handleFormSubmit}
            title="Fill Form To Download Syllabus"
            mailId={mailId}
            bannerTitle={bannerTitle}
            contactNo={contactNo}
            pdfUrl={pdfUrlPath}
          />
        )}
      </section>

      {/* Bottom scrolling line (always visible) */}
      <div className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white py-1 md:py-4 overflow-hidden relative">
        <div className="flex whitespace-nowrap">
          <div className={`${styles.scrollSlow} flex items-center space-x-8 text-white font-medium text-xs md:text-sm opacity-90`}>
            <span>✨ Job-Ready Students, Job-Driven Training, Job-Assured Placements</span>
            <span>✨ Job-Ready Students, Job-Driven Training, Job-Assured Placements</span>
            <span>✨ Job-Ready Students, Job-Driven Training, Job-Assured Placements</span>
            <span>✨ Job-Ready Students, Job-Driven Training, Job-Assured Placements</span>
          </div>
        </div>
      </div>
    </>
  );
}