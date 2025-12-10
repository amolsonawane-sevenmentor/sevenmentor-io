"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarPaths from "./NavbarPaths";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import PopUpForm from "../Forms/PopUpForm/PopUpForm.jsx";
import HomePopUpForm from "../HomeStickyButton/HomePopUpForm";
import TopNavbar from "./TopNavbar.jsx";
import Image from "next/image";

export default function DesktopNavbar() {
  const pathname = usePathname();
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [clickedITDomain, setClickedITDomain] = useState(null);
  const [clickedITSubdomain, setClickedITSubdomain] = useState(null);
  const [clickedNonITDomain, setClickedNonITDomain] = useState(null);
  const [clickedNonITSubdomain, setClickedNonITSubdomain] = useState(null);
  const [showITMenu, setShowITMenu] = useState(false);
  const [showNonITMenu, setShowNonITMenu] = useState(false);
  const [showJobOrientedMenu, setShowJobOrientedMenu] = useState(false);

  // Function to check if current page is an IT course
  const isITCoursePage = () => {
    if (!NavbarPaths?.itdomains) return false;

    return NavbarPaths.itdomains.some((domain) => {
      // Check direct domain courses
      if (domain.courses?.some((course) => course.path === pathname)) {
        return true;
      }

      // Check subdomain courses
      if (domain.subdomains) {
        return domain.subdomains.some((subdomain) =>
          subdomain.courses?.some((course) => course.path === pathname)
        );
      }

      return false;
    });
  };

  // Function to check if current page is a Non-IT course
  const isNonITCoursePage = () => {
    if (!NavbarPaths?.nonitdomains) return false;

    return NavbarPaths.nonitdomains.some((domain) => {
      // Check direct domain courses
      if (domain.courses?.some((course) => course.path === pathname)) {
        return true;
      }

      // Check subdomain courses
      if (domain.subdomains) {
        return domain.subdomains.some((subdomain) =>
          subdomain.courses?.some((course) => course.path === pathname)
        );
      }

      return false;
    });
  };

  // Function to check if current page is a Job Oriented course
  const isJobOrientedCoursePage = () => {
    if (!NavbarPaths?.joborientedcourses) return false;

    return NavbarPaths.joborientedcourses.some(
      (course) => course.path === pathname
    );
  };

  // Function to get nav link classes
  const getNavLinkClasses = (path) => {
    const baseClasses = "whitespace-nowrap transition-colors duration-200";
    const isActive = pathname === path;

    return `${baseClasses} ${
      isActive ? "text-orange-500" : "text-white hover:text-orange-500"
    }`;
  };

  // Function to get IT courses link classes
  const getITCoursesClasses = () => {
    const baseClasses =
      "whitespace-nowrap cursor-pointer transition-colors duration-200";
    const isActive = isITCoursePage();

    return `${baseClasses} ${
      isActive ? "text-orange-500" : "text-white hover:text-orange-500"
    }`;
  };

  // Function to get Non-IT courses link classes
  const getNonITCoursesClasses = () => {
    const baseClasses =
      "whitespace-nowrap cursor-pointer transition-colors duration-200";
    const isActive = isNonITCoursePage();

    return `${baseClasses} ${
      isActive ? "text-orange-500" : "text-white hover:text-orange-500"
    }`;
  };

  // Function to get Job Oriented courses link classes
  const getJobOrientedCoursesClasses = () => {
    const baseClasses =
      "whitespace-nowrap cursor-pointer transition-colors duration-200";
    const isActive = isJobOrientedCoursePage();

    return `${baseClasses} ${
      isActive ? "text-orange-500" : "text-white hover:text-orange-500"
    }`;
  };

  const resetITClickState = () => {
    setShowITMenu(false);
    setClickedITDomain(null);
    setClickedITSubdomain(null);
    document.body.style.overflow = "";
  };

  const resetNonITClickState = () => {
    setShowNonITMenu(false);
    setClickedNonITDomain(null);
    setClickedNonITSubdomain(null);
    // document.body.style.overflow = ""
  };

  const resetJobOrientedClickState = () => {
    setShowJobOrientedMenu(false);
    // document.body.style.overflow = ""
  };

  const [showPopup, setShowPopup] = useState(false);
  const handleOpenPopup = () => {
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the IT, Non-IT, and Job Oriented menus
      const itMenu = document.getElementById("it-menu");
      const nonItMenu = document.getElementById("non-it-menu");
      const jobOrientedMenu = document.getElementById("job-oriented-menu");
      const itButton = document.getElementById("it-button");
      const nonItButton = document.getElementById("non-it-button");
      const jobOrientedButton = document.getElementById("job-oriented-button");

      if (
        showITMenu &&
        itMenu &&
        !itMenu.contains(event.target) &&
        !itButton.contains(event.target)
      ) {
        resetITClickState();
      }
      if (
        showNonITMenu &&
        nonItMenu &&
        !nonItMenu.contains(event.target) &&
        !nonItButton.contains(event.target)
      ) {
        resetNonITClickState();
      }
      if (
        showJobOrientedMenu &&
        jobOrientedMenu &&
        !jobOrientedMenu.contains(event.target) &&
        !jobOrientedButton.contains(event.target)
      ) {
        resetJobOrientedClickState();
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showITMenu, showNonITMenu, showJobOrientedMenu]);

  return (
    <>
      <TopNavbar />
      <nav
        className="fixed left-0 top-0 z-50 w-full bg-black mt-8 md:py-4 px-2 shadow-[0_2px_4px_0_rgba(249,115,22,0.5)] "
        // Removed onMouseLeave as we're using click events now
      >
        <div className="flex w-full items-center justify-between px-6 md:px-12 ">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            onClick={() => {
              scrollToTop();
              handleClick();
            }}
          >
            <div className="flex justify-center items-center">
              {/* <Image  aria-label="SevenMentor Logo"  src="/assets/sevenMLogo.webp"  alt="Seven Mentor Logo"  className="w-[60px]"/> */}
              <Image
                aria-label="SevenMentor Logo"
                src="/assets/sevenMLogo.webp"
                alt="Seven Mentor Logo"
                width={60}
                height={60}
              />
              <span className="text-2xl font-bold text-white">
                <span className="text-orange-500 animate-charcter">Seven</span>
                Mentor
              </span>
            </div>
          </Link>

          {/* Navigation Links - FIXED: Removed 'hidden' class and changed custom breakpoint to standard Tailwind */}
          <div className="items-center gap-4 md:flex px-6 lg:!pl-12">
            <div className="flex items-center justify-center gap-4">
              {/* Job Oriented Courses */}
              <div
                className="relative flex items-center justify-center gap-8"
                onMouseEnter={() => {
                  // Close other menus if open
                  resetITClickState();
                  resetNonITClickState();
                  // Open Job Oriented menu
                  setShowJobOrientedMenu(true);
                }}
                onMouseLeave={() => {
                  resetJobOrientedClickState();
                }}
              >
                <Link
                  id="job-oriented-button"
                  href="#"
                  className={getJobOrientedCoursesClasses()}
                >
                  JOB ORIENTED COURSES
                </Link>
                {showJobOrientedMenu && (
                  <div
                    id="job-oriented-menu"
                    className="absolute left-1/2 top-full w-[500px] -translate-x-1/2 transform rounded-lg bg-white shadow-xl"
                  >
                    <div className="p-6">
                      {/* Courses */}
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-black text-center">
                          Job Oriented Courses
                        </h3>
                        <div className="h-90 overflow-y-auto custom-scrollbar">
                          {NavbarPaths.joborientedcourses?.map((course) => (
                            <Link
                              key={course.path}
                              href={course.path}
                              className={`block rounded-lg p-3 py-2 mt-2 shadow-md border border-gray-200 transition-colors duration-200 ${
                                pathname === course.path
                                  ? "bg-orange-50 text-orange-600 border-orange-200"
                                  : "bg-white text-black hover:text-orange-500"
                              }`}
                              onClick={() => {
                                resetJobOrientedClickState();
                                scrollToTop();
                                handleClick();
                              }}
                            >
                              <div className="flex items-center">
                                <Image
                                  src={
                                    course.imgSrc ||
                                    "/images/default-course.jpg" ||
                                    "/placeholder.svg"
                                  }
                                  alt={course.name}
                                  width={60}
                                  height={60}
                                  className="rounded-md"
                                />
                                <div className="flex items-center gap-5 justify-between ml-2 w-full">
                                  <span className="text-sm font-semibold">
                                    {course.name.toUpperCase()}
                                  </span>
                                  {/* <span className="whitespace-nowrap text-sm font-bold">{course.duration || ""}</span> */}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* IT Courses */}
              <div
                className="relative flex items-center justify-center gap-8"
                onMouseEnter={() => {
                  // Close other menus if open
                  resetNonITClickState();
                  resetJobOrientedClickState();
                  // Open IT menu and set first domain/subdomain
                  setShowITMenu(true);
                  setClickedITDomain(NavbarPaths.itdomains[0]?.id);
                  setClickedITSubdomain(
                    NavbarPaths.itdomains[0]?.subdomains?.[0]?.id
                  );
                }}
                onMouseLeave={() => {
                  resetITClickState();
                }}
              >
                <Link id="it-button" href="#" className={getITCoursesClasses()}>
                  IT COURSES
                </Link>
                {showITMenu && clickedITDomain && (
                  <div
                    id="it-menu"
                    className={`absolute left-60 top-full ${
                      clickedITSubdomain ? "w-[1000px]" : "w-[800px]"
                    } -translate-x-1/2 transform rounded-lg bg-white shadow-xl`}
                  >
                    <div
                      className={`grid ${
                        clickedITSubdomain ? "grid-cols-3" : "grid-cols-2"
                      } gap-4 p-6`}
                    >
                      {/* Domains */}
                      <div className="space-y-3 ">
                        <h3 className="text-lg font-semibold text-black text-center">
                          Domains
                        </h3>
                        <div className="h-[70vh] overflow-y-auto custom-scrollbar space-y-3 ">
                          {NavbarPaths.itdomains.map((domain) => (
                            <div
                              key={domain.id}
                              onClick={() => {
                                setClickedITDomain(domain.id);
                                setClickedITSubdomain(
                                  domain.subdomains?.[0]?.id || null
                                ); // Set first subdomain if present
                              }}
                              className={`cursor-pointer rounded-lg px-3 py-3  ${
                                clickedITDomain === domain.id
                                  ? "bg-gradient-to-tl from-black via-orange-900 to-orange-500 text-white"
                                  : "bg-[#021a36] text-white"
                              } hover:bg-gradient-to-tl from-black via-orange-900 to-orange-500 hover:text-white`}
                            >
                              <div className="flex items-center justify-left w-full">
                                <FontAwesomeIcon
                                  icon={domain.icon}
                                  className="text-lg"
                                />
                                <span className="ml-6">{domain.name}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* .find((domain) => domain.id === hoveredITDomain) */}
                      {/* Subdomains */}
                      {clickedITSubdomain && (
                        <div className="space-y-3 h-[70vh] overflow-y-auto custom-scrollbar">
                          <h3 className="text-lg font-semibold text-black text-center">
                            Subdomains
                          </h3>
                          {NavbarPaths.itdomains
                            .find((domain) => domain.id === clickedITDomain)
                            ?.subdomains?.map((subdomain) => (
                              <div
                                key={subdomain.id}
                                onClick={() =>
                                  setClickedITSubdomain(subdomain.id)
                                }
                                className={`cursor-pointer rounded-lg px-3 py-3 ${
                                  clickedITSubdomain === subdomain.id
                                    ? "bg-gradient-to-tl from-black via-orange-900 to-orange-500 text-white"
                                    : "bg-[#021a36] text-white"
                                } hover:bg-gradient-to-tl from-black via-orange-900 to-orange-500 hover:text-white`}
                              >
                                <div className="flex items-center justify-left w-full">
                                  <FontAwesomeIcon
                                    icon={subdomain.icon}
                                    className="text-lg"
                                  />
                                  <span className="ml-6">{subdomain.name}</span>
                                </div>
                              </div>
                            ))}
                        </div>
                      )}
                      {/* Courses */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-black text-center">
                          Courses
                        </h3>
                        <div className="h-[70vh] overflow-y-auto custom-scrollbar">
                          {NavbarPaths.itdomains
                            ?.flatMap((domain) =>
                              domain.subdomains?.length
                                ? domain.subdomains.flatMap((subdomain) =>
                                    subdomain.id === clickedITSubdomain
                                      ? subdomain.courses || []
                                      : []
                                  )
                                : domain.id === clickedITDomain
                                ? domain.courses || []
                                : []
                            )
                            ?.filter((course) => course && course.path) // Ensure course and path exist
                            .map((course) => (
                              <Link
                                key={course.path}
                                href={course.path}
                                className={`block rounded-lg p-3 py-2 mt-2 shadow-md border border-gray-200 transition-colors duration-200 ${
                                  pathname === course.path
                                    ? "bg-orange-50 text-orange-600 border-orange-200"
                                    : "bg-white text-black hover:text-orange-500"
                                }`}
                                onClick={() => {
                                  resetITClickState();
                                  scrollToTop();
                                  handleClick();
                                }}
                              >
                                <div className="flex items-center ">
                                  <Image
                                    src={
                                      course.imgSrc ||
                                      "/images/default-course.jpg" ||
                                      "/placeholder.svg"
                                    }
                                    alt={course.name}
                                    width={70}
                                    height={70}
                                    className="rounded-md"
                                  />
                                  <div className="flex items-center gap-5 justify-between ml-2 w-full">
                                    <span className="text-sm font-semibold">
                                      {course.name.toUpperCase()}
                                    </span>
                                    {/* <span className="whitespace-nowrap text-sm font-bold">{course.duration || ""}</span> */}
                                  </div>
                                </div>
                              </Link>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Non IT Courses */}
              <div
                className="relative flex items-center justify-center gap-8"
                onMouseEnter={() => {
                  // Close other menus if open
                  resetITClickState();
                  resetJobOrientedClickState();
                  // Open Non-IT menu and set first domain/subdomain
                  setShowNonITMenu(true);
                  setClickedNonITDomain(NavbarPaths.nonitdomains[0]?.id);
                  setClickedNonITSubdomain(
                    NavbarPaths.nonitdomains[0]?.subdomains?.[0]?.id
                  );
                }}
                onMouseLeave={() => {
                  resetNonITClickState();
                }}
              >
                <Link
                  id="non-it-button"
                  href="#"
                  className={getNonITCoursesClasses()}
                >
                  NON IT COURSES
                </Link>
                {showNonITMenu && clickedNonITDomain && (
                  <div
                    id="non-it-menu"
                    className={`absolute left-1/2 top-full ${
                      clickedNonITSubdomain ? "w-[1000px]" : "w-[800px]"
                    } -translate-x-1/2 transform rounded-lg bg-white shadow-xl`}
                  >
                    <div
                      className={`grid ${
                        clickedNonITSubdomain ? "grid-cols-3" : "grid-cols-2"
                      } gap-4 p-6`}
                    >
                      {/* Domains */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-black text-center ">
                          Domains
                        </h3>
                        {NavbarPaths.nonitdomains.map((domain) => (
                          <div
                            key={domain.id}
                            onClick={() => {
                              setClickedNonITDomain(domain.id);
                              setClickedNonITSubdomain(
                                domain.subdomains?.[0]?.id || null
                              ); // Set first subdomain if present
                            }}
                            className={`cursor-pointer rounded-lg px-3 py-3 ${
                              clickedNonITDomain === domain.id
                                ? "bg-gradient-to-tl from-black via-orange-900 to-orange-500 text-white"
                                : "bg-[#021a36] text-white"
                            } hover:bg-gradient-to-tl from-black via-orange-900 to-orange-500 hover:text-white`}
                          >
                            <div className="flex items-center justify-left w-full">
                              <FontAwesomeIcon
                                icon={domain.icon}
                                className="text-lg"
                              />
                              <span className="ml-6">{domain.name}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Subdomains */}
                      {clickedNonITSubdomain && (
                        <div className="space-y-3 h-[70vh] overflow-y-auto custom-scrollbar">
                          <h3 className="text-lg font-semibold text-black">
                            Subdomains
                          </h3>
                          {NavbarPaths.nonitdomains
                            .find((domain) => domain.id === clickedNonITDomain)
                            ?.subdomains?.map((subdomain) => (
                              <div
                                key={subdomain.id}
                                onClick={() =>
                                  setClickedNonITSubdomain(subdomain.id)
                                }
                                className={`cursor-pointer rounded-lg px-3 py-3 ${
                                  clickedNonITSubdomain === subdomain.id
                                    ? "bg-gradient-to-tl from-black via-orange-900 to-orange-500 text-white"
                                    : "bg-[#021a36] text-white"
                                } hover:bg-gradient-to-tl from-black via-orange-900 to-orange-500 hover:text-white`}
                              >
                                <div className="flex items-center justify-left w-full">
                                  <FontAwesomeIcon
                                    icon={subdomain.icon}
                                    className="text-lg"
                                  />
                                  <span className="ml-6">{subdomain.name}</span>
                                </div>
                              </div>
                            ))}
                        </div>
                      )}
                      {/* Courses */}
                      <div className="space-y-4 ">
                        <h3 className="text-lg font-semibold text-black text-center">
                          Courses
                        </h3>
                        <div className="h-80 overflow-y-auto custom-scrollbar">
                          {NavbarPaths.nonitdomains
                            ?.flatMap((domain) =>
                              domain.subdomains?.length
                                ? domain.subdomains.flatMap((subdomain) =>
                                    subdomain.id === clickedNonITSubdomain
                                      ? subdomain.courses || []
                                      : []
                                  )
                                : domain.id === clickedNonITDomain
                                ? domain.courses || []
                                : []
                            )
                            ?.filter((course) => course && course.path) // Ensure course and path exist
                            .map((course) => (
                              <Link
                                key={course.path}
                                href={course.path}
                                className={`block rounded-lg p-3 py-2 mt-2 shadow-md border border-gray-200 transition-colors duration-200 ${
                                  pathname === course.path
                                    ? "bg-orange-50 text-orange-600 border-orange-200"
                                    : "bg-white text-black hover:text-orange-500"
                                }`}
                                onClick={() => {
                                  resetNonITClickState();
                                  scrollToTop();
                                  handleClick();
                                }}
                              >
                                <div className="flex items-center ">
                                  <Image
                                    src={
                                      course.imgSrc ||
                                      "/images/default-course.jpg" ||
                                      "/placeholder.svg"
                                    }
                                    alt={course.name}
                                    width={50}
                                    height={50}
                                    className="rounded-md"
                                  />
                                  <div className="flex items-center gap-5 justify-between ml-2 w-full">
                                    <span className="text-sm font-semibold">
                                      {course.name}
                                    </span>
                                    {/* <span className="whitespace-nowrap text-sm font-bold">{course.duration || ""}</span> */}
                                  </div>
                                </div>
                              </Link>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <Link
              href="/company"
              className={getNavLinkClasses("/company")}
              onClick={() => {
                scrollToTop();
                handleClick();
              }}
            >
              ABOUT US
            </Link>
            <Link
              href="/blog"
              className={getNavLinkClasses("/blog")}
              onClick={() => {
                scrollToTop();
                handleClick();
              }}
            >
              BLOG
            </Link>
            <Link
              href="/100-percent-job-placement-institute-in-pune.php"
              className={getNavLinkClasses(
                "/100-percent-job-placement-institute-in-pune.php"
              )}
              onClick={() => {
                scrollToTop();
                handleClick();
              }}
            >
              PLACEMENT
            </Link>
            <Link
              href="/contact"
              className={getNavLinkClasses("/contact")}
              onClick={() => {
                scrollToTop();
                handleClick();
              }}
            >
              CONTACT
            </Link>
          </div>
          <div>
            <button
              id="request-callback-btn"
              aria-label="Request Callback"
              className="rounded-full whitespace-nowrap relative overflow-hidden bg-orange-500 px-3 py-2 text-sm font-semibold text-white hover:bg-orange-600"
              onClick={handleOpenPopup}
              suppressHydrationWarning={true}
            >
              Request Callback
              <Image
                aria-label="Shimmer Animation"
                src="/assets/shimmer.webp"
                alt="shimmer animation"
                width={44}
                height={48}
                className="absolute top-0 left-0 w-[44px] h-[48px] shimmer-effect"
                style={{
                  objectFit: "cover",
                  height: "100%",
                }}
              />
            </button>
          </div>
        </div>
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
}
