"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarPaths from "./NavbarPaths.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
// import PopupForm from "../Forms/PopUpForm/PopUpForm.jsx";
import HomePopUpForm from "../HomeStickyButton/HomePopUpForm.jsx";

const MobileNavbar = () => {
  const [isLeftMenuOpen, setIsLeftMenuOpen] = useState(false);
  const [isRightMenuOpen, setIsRightMenuOpen] = useState(false);
  const [activeSubdomain, setActiveSubdomain] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeDomain, setActiveDomain] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const leftMenuRef = useRef(null);
  const rightMenuRef = useRef(null);
  const pathname = usePathname();

  const handleCategoryClick = (categoryId) => {
    setActiveCategory((prev) => (prev === categoryId ? null : categoryId));
    setActiveDomain(null);
  };

  const handleDomainClick = (domainId) => {
    setActiveDomain((prev) => (prev === domainId ? null : domainId));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLeftMenuToggle = () => {
    setIsLeftMenuOpen((prev) => !prev);
    if (isRightMenuOpen) setIsRightMenuOpen(false);
    setActiveDomain(null);
    setActiveSubdomain(null);
  };

  const handleRightMenuToggle = () => {
    setIsRightMenuOpen((prev) => !prev);
    if (isLeftMenuOpen) setIsLeftMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      leftMenuRef.current &&
      !leftMenuRef.current.contains(event.target) &&
      rightMenuRef.current &&
      !rightMenuRef.current.contains(event.target)
    ) {
      setIsLeftMenuOpen(false);
      setIsRightMenuOpen(false);
    }
  };

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const handleSubdomainClick = (subdomainId) => {
    setActiveSubdomain((prev) => (prev === subdomainId ? null : subdomainId));
  };

  useEffect(() => {
    setIsLeftMenuOpen(false);
    setIsRightMenuOpen(false);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [pathname]);

  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    if (isLeftMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isLeftMenuOpen]);

  const renderCourses = (courses) => (
    <AnimatePresence>
      {courses && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-2 grid grid-cols-1 gap-4"
        >
          {courses.map((course, index) => (
            <Link
              href={course.path}
              key={index}
              className={`mx-2 bg-[#1a1a1a] border-[2px] border-orange-500 rounded-lg shadow-lg p-2 flex items-center justify-between gap-6 px-4 transition-colors duration-200 active:bg-orange-600 active:border-orange-600 focus:bg-orange-600 focus:border-orange-600 ${
                index === 0 ? "mt-2" : ""
              }`}
              onClick={() => {
                scrollToTop();
              }}
            >
              <div className="w-10 h-10 relative flex-shrink-0">
                <Image
                  src={course.imgSrc || "/placeholder.svg"}
                  alt={course.name}
                  width={40}
                  height={40}
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <div className="flex w-full items-center justify-between">
                <h3 className="text-white text-md font-semibold text-center">
                  {course.name.toUpperCase()}
                </h3>
                {/* {course.duration && <span className="text-orange-400 text-sm font-medium">{course.duration}</span>} */}
              </div>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );

  const renderSubdomains = (subdomains) =>
    subdomains.map((subdomain, index) => (
      <div key={subdomain.id} className="mx-2">
        <AnimatePresence>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-2"
          >
            <button
              aria-label={`${subdomain.name} Subdomain Button`}
              onClick={() => handleSubdomainClick(subdomain.id)}
              className={`p-4 rounded-lg flex justify-between items-center cursor-pointer transition-all duration-300 ease-in-out w-full ${
                activeSubdomain === subdomain.id
                  ? "bg-orange-500 text-white border border-transparent"
                  : "bg-[#000000] text-gray-300 border border-white"
              } ${index === 0 ? "mt-4" : ""}`}
            >
              <div className="flex items-center">
                <FontAwesomeIcon icon={subdomain.icon} className="text-lg" />
                <span className="ml-6">{subdomain.name}</span>
              </div>
              {activeSubdomain === subdomain.id ? (
                <ChevronUp className="text-white" />
              ) : (
                <ChevronDown className="text-white" />
              )}
            </button>
            {activeSubdomain === subdomain.id &&
              renderCourses(subdomain.courses)}
          </motion.div>
        </AnimatePresence>
      </div>
    ));

  const renderDomains = () => {
    const categories = [
      {
        id: "joboriented",
        name: "Job Oriented Courses",
        courses: NavbarPaths.joborientedcourses, // Direct courses array
      },
      { id: "it", name: "IT Courses", domains: NavbarPaths.itdomains },
      {
        id: "nonit",
        name: "Non-IT Courses",
        domains: NavbarPaths.nonitdomains,
      },

      {
        id: "placement",
        name: "Placement & CRM",
      },
    ];

    return categories.map((category) =>
      category.id === "placement" ? (
        <div key={category.id} className="last:mb-10 last:pb-5">
          <Link
            href="/100-percent-job-placement-institute-in-pune.php"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="p-8 rounded-lg flex justify-between items-center cursor-pointer transition-all duration-300 ease-in-out w-full bg-[#1a1a1a] text-gray-300 hover:bg-orange-700 hover:text-white text-2xl"
          >
            <div className="flex items-center">
              <span className="ml-6">{category.name}</span>
            </div>
          </Link>
        </div>
      ) : category.id === "joboriented" ? (
        // Special handling for Job Oriented Courses (direct courses list)
        <div key={category.id} className="last:mb-10 last:pb-5">
          <button
            aria-label={`${category.name} Category Button`}
            onClick={() => handleCategoryClick(category.id)}
            className={`p-8 rounded-lg flex justify-between items-center cursor-pointer transition-all duration-300 ease-in-out w-full ${
              activeCategory === category.id
                ? "bg-orange-700 text-white text-2xl"
                : "bg-[#1a1a1a] text-gray-300 hover:bg-orange-700 hover:text-white text-2xl"
            }`}
          >
            <div className="flex items-center">
              <span className="ml-6">{category.name}</span>
            </div>
            {activeCategory === category.id ? (
              <ChevronUp className="text-white" />
            ) : (
              <ChevronDown className="text-white" />
            )}
          </button>
          <AnimatePresence>
            {activeCategory === category.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                exit={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-2"
              >
                {renderCourses(category.courses)}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ) : (
        // Regular handling for IT and Non-IT courses (with domains)
        <div key={category.id} className="last:mb-10 last:pb-5">
          <button
            aria-label={`${category.name} Category Button`}
            onClick={() => handleCategoryClick(category.id)}
            className={`p-8 rounded-lg flex justify-between items-center cursor-pointer transition-all duration-300 ease-in-out w-full ${
              activeCategory === category.id
                ? "bg-orange-700 text-white text-2xl"
                : "bg-[#1a1a1a] text-gray-300 hover:bg-orange-700 hover:text-white text-2xl"
            }`}
          >
            <div className="flex items-center">
              <span className="ml-6">{category.name}</span>
            </div>
            {activeCategory === category.id ? (
              <ChevronUp className="text-white" />
            ) : (
              <ChevronDown className="text-white" />
            )}
          </button>
          <AnimatePresence>
            {activeCategory === category.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                exit={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="mt-2"
              >
                {category.domains.map((domain) => (
                  <div key={domain.id}>
                    <button
                      aria-label={`${domain.name} Domain Button`}
                      onClick={() => handleDomainClick(domain.id)}
                      className={`p-4 rounded-lg flex justify-between items-center cursor-pointer transition-all duration-300 ease-in-out w-full mb-2 ${
                        activeDomain === domain.id
                          ? "bg-orange-500 text-white"
                          : "bg-[#1a1a1a] text-gray-300 hover:bg-orange-500 hover:text-white"
                      }`}
                    >
                      <div className="flex items-center">
                        <FontAwesomeIcon
                          icon={domain.icon}
                          className="text-lg"
                        />
                        <span className="ml-6">{domain.name}</span>
                      </div>
                      {activeDomain === domain.id ? (
                        <ChevronUp className="text-white" />
                      ) : (
                        <ChevronDown className="text-white" />
                      )}
                    </button>
                    <AnimatePresence>
                      {activeDomain === domain.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          exit={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="mt-2"
                        >
                          {domain.subdomains && domain.subdomains.length > 0
                            ? renderSubdomains(domain.subdomains)
                            : renderCourses(domain.courses || [])}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )
    );
  };

  const renderRightMenuLinks = () => (
    <>
      <button
        aria-label="Courses Button"
        title="Courses"
        onClick={handleLeftMenuToggle}
        className={`z-50 rounded p-2 ${
          isRightMenuOpen ? "text-orange-500" : "text-white"
        }`}
      >
        COURSES
      </button>
      <Link
        href="/corporate-training-in-pune.php"
        className="text-white hover:text-orange-500 whitespace-nowrap"
        onClick={() => {
          setIsRightMenuOpen(false);
          scrollToTop();
          handleClick();
        }}
      >
        CORPORATE TRAINING
      </Link>
      <Link
        href="/company"
        className="text-white hover:text-orange-500 whitespace-nowrap"
        onClick={() => {
          setIsRightMenuOpen(false);
          scrollToTop();
          handleClick();
        }}
      >
        ABOUT US
      </Link>
      <Link
        href="/blog"
        className="text-white hover:text-orange-500"
        onClick={() => {
          setIsRightMenuOpen(false);
          scrollToTop();
          handleClick();
        }}
      >
        BLOG
      </Link>
      <Link
        href="/review"
        className="text-white hover:text-orange-500"
        onClick={() => {
          setIsRightMenuOpen(false);
          scrollToTop();
          handleClick();
        }}
      >
        STUDENT REVIEWS
      </Link>
      <Link
        href="/free-courses"
        className="text-white hover:text-orange-500"
        onClick={() => {
          setIsRightMenuOpen(false);
          scrollToTop();
          handleClick();
        }}
      >
        FREE COURSES
      </Link>
      <Link
        href="/feedback.php"
        className="text-white hover:text-orange-500"
        onClick={() => {
          setIsRightMenuOpen(false);
          scrollToTop();
          handleClick();
        }}
      >
        FEEDBACK
      </Link>
      <Link
        href="/contact"
        className="text-white hover:text-orange-500"
        onClick={() => {
          setIsRightMenuOpen(false);
          scrollToTop();
          handleClick();
        }}
      >
        CONTACT
      </Link>
      <Link
        href="/webinar"
        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white hover:bg-orange-600 transition-all duration-300 shadow-md shadow-orange-400/40"
      >
        <span className="relative z-10">Webinar</span>
        <Image
          aria-label="Shimmer Animation"
          src="/assets/shimmer.webp"
          alt="shimmer animation"
          width={40}
          height={26}
          className="absolute top-0 left-0 w-[40px] h-[26px] shimmer-effect opacity-80"
          style={{
            objectFit: "cover",
            height: "100%",
          }}
        />
      </Link>
      <Link
        href="/certificate.php"
        className="text-white hover:text-orange-500"
        onClick={() => {
          setIsRightMenuOpen(false);
          scrollToTop();
          handleClick();
        }}
      >
        CERTIFICATE
      </Link>
      <Link
        href="/franchise"
        className="text-white hover:text-orange-500"
        onClick={() => {
          setIsRightMenuOpen(false);
          scrollToTop();
          handleClick();
        }}
      >
        FRANCHISE OPPORTUNITY
      </Link>
      <Link
        href="/careers"
        className="text-white hover:text-orange-500"
        onClick={() => {
          setIsRightMenuOpen(false);
          scrollToTop();
          handleClick();
        }}
      >
        CAREERS
      </Link>
      <Link
        href="/hiring-partners"
        className="text-white hover:text-orange-500"
        onClick={() => {
          setIsRightMenuOpen(false);
          scrollToTop();
          handleClick();
        }}
      >
        HIRING PARTNERS
      </Link>
      <div>
        <button
          aria-label="Request Callback Button"
          className="rounded-full relative overflow-hidden bg-orange-500 px-6 py-2 text-sm font-semibold text-white hover:bg-orange-600"
          onClick={() => {
            handleOpenPopup();
          }}
        >
          Request Callback
          <div className="w-11 h-12 absolute top-0 left-0">
            <Image
              src="/assets/shimmer.webp"
              alt="Shimmer Image"
              width={44}
              height={48}
              className="shimmer-effect object-cover h-full"
              sizes="44px"
            />
          </div>
        </button>
      </div>
      <div className="mt-4 flex gap-4">
        <Link
          href="https://www.facebook.com/sevenmentor"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-500"
        >
          <div className="w-7 h-7">
            <Image
              src="/assets/facebook.webp"
              alt="Facebook"
              width={28}
              height={28}
              sizes="28px"
            />
          </div>
        </Link>
        <Link
          href="https://twitter.com/SevenMentor"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-500"
        >
          <div className="w-7 h-7">
            <Image
              src="/assets/twitter.webp"
              alt="Twitter"
              width={28}
              height={28}
              sizes="28px"
            />
          </div>
        </Link>
        <Link
          href="https://www.instagram.com/sevenmentor_it_courses?igsh=dTh6NjhpemF3Mndl"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-500"
        >
          <div className="w-7 h-7">
            <Image
              src="/assets/insta.webp"
              alt="Instagram"
              width={28}
              height={28}
              sizes="28px"
            />
          </div>
        </Link>
        <Link
          href="https://www.linkedin.com/company/sevenmentor"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-orange-500"
        >
          <div className="w-7 h-7">
            <Image
              src="/assets/linkedin.webp"
              alt="LinkedIn"
              width={28}
              height={28}
              sizes="28px"
            />
          </div>
        </Link>
        <Link
          href="https://www.youtube.com/@SevenMentor"
          target="blank"
          className="text-white hover:text-orange-500"
        >
          <Image
            sizes="24px"
            aria-label="LinkedIn Logo"
            src="/assets/youtube.webp"
            alt="youtube"
            className="h-6 w-6"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </>
  );

  return (
    // Fixed navbar with consistent height to prevent layout shift
    <>
      <nav
        className="fixed top-0 left-0 w-full bg-black z-50"
        style={{ height: "80px" }}
      >
        <div className="flex items-center justify-between px-6 w-full h-full">
          <button
            aria-label="Menu Toggle Button"
            title="Menu Toggle"
            onClick={handleRightMenuToggle}
            className={`z-50 rounded p-2 ${
              isRightMenuOpen ? "text-orange-500" : "text-white"
            }`}
          >
            {isRightMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Logo with fixed dimensions */}
          <Link href="/" className="flex items-center">
            <div className="flex justify-center items-center">
              <div className="w-[60px] h-[60px] relative">
                <Image
                  src="/assets/sevenMLogo.webp"
                  alt="Seven Mentor Logo"
                  width={60}
                  height={60}
                  priority
                  sizes="60px"
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-bold text-white">
                <span className="text-orange-500 animate-charcter">Seven</span>
                Mentor
              </span>
            </div>
          </Link>

          {/* Courses Menu Toggle Button */}
          <button
            aria-label="Courses Menu Toggle"
            onClick={handleLeftMenuToggle}
            className={`z-50 rounded p-2 bg-orange-500 text-white`}
          >
            {isLeftMenuOpen ? <ChevronRight /> : <ChevronLeft />}
          </button>
        </div>

        {/* Right Menu (Main Navigation) */}
        <motion.div
          ref={rightMenuRef}
          className="absolute left-0 top-0 z-40 w-[75%] bg-black p-6 shadow-lg overflow-y-auto"
          style={{ height: "100vh" }}
          initial={{ x: "-100%" }}
          animate={{ x: isRightMenuOpen ? 0 : "-100%" }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="mt-20 flex flex-col gap-4 text-center items-center">
            {renderRightMenuLinks()}
          </div>
        </motion.div>

        {/* Left Menu (Courses) */}
        <motion.div
          ref={leftMenuRef}
          initial={{ x: "100%" }}
          animate={{ x: isLeftMenuOpen ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute top-[80px] right-0 w-full bg-black p-6 pt-2 overflow-y-auto"
          style={{ height: "calc(100vh - 80px)" }}
        >
          <div className="flex flex-col !gap-2 mb-2">{renderDomains()}</div>
        </motion.div>
      </nav>
      {showPopup && (
        <HomePopUpForm
          isOpen={showPopup}
          onClose={handleClosePopup}
          title={"Request Callback"}
          mailId="registration@sevenmentor.com"
          contactNo={"7798058777"}
          bannerTitle={"Individual Course At SevenMentor"}
          id="NavbarPopupSubmit"
        />
      )}
    </>
  );
};

export default MobileNavbar;
