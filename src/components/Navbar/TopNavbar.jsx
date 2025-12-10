import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

function NavLink({ href, children, className }) {
  return (
    <Link
      href={href}
      className={`hover:text-blue-700 ${className}`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {children}
    </Link>
  );
}

function NavDivider() {
  return <span className="text-gray-300">|</span>;
}

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Set mounted to true once component mounts to avoid hydration mismatch
    setMounted(true);

    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Standard mobile breakpoint
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Don't render anything until after client-side hydration
  // This prevents hydration mismatch errors and unnecessary mobile renders
  if (!mounted || isMobile) return null;

  return (
    <nav className="fixed left-0 top-0 bg-black w-full border-b py-2 z-50 flex justify-end pr-2">
      <div className="flex flex-wrap gap-2 text-blue-600 text-sm font-medium">
        <NavLink
          href="/certificate.php"
          className="group text-orange-500 hover:text-orange-600"
        >
          Certificate
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </NavLink>
        <NavDivider />
        <NavLink
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
        </NavLink>

        <NavDivider />
        <NavLink
          href="/corporate-training-in-pune.php"
          className="group text-orange-500 hover:text-orange-600"
        >
          Corporate Training
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </NavLink>
        <NavDivider />
        <NavLink
          href="/review"
          className="group text-orange-500 hover:text-orange-600"
        >
          Students Reviews
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </NavLink>
        <NavDivider />
        <NavLink
          href="/free-courses"
          className="group text-orange-500 hover:text-orange-600"
        >
          Free Courses
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </NavLink>
        <NavDivider />
        <NavLink
          href="/feedback.php"
          className="group text-orange-500 hover:text-orange-600"
        >
          Feedback
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </NavLink>
        <NavDivider />
        <NavLink
          href="/franchise"
          className="group text-orange-500 hover:text-orange-600"
        >
          Franchise Opportunities
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </NavLink>
        <NavDivider />
        <NavLink
          href="/careers"
          className="group text-orange-500 hover:text-orange-600"
        >
          Careers
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </NavLink>
        <NavDivider />
        <NavLink
          href="/hiring-partners"
          className="group text-orange-500 hover:text-orange-600"
        >
          Hiring Partners
          <div className="bg-amber-500 h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
        </NavLink>

        {/* Social Media Icons */}
        <div className="flex items-top gap-4 ml-4">
          <Link
            href="https://www.facebook.com/sevenmentor"
            target="blank"
            className="text-white hover:text-orange-500"
          >
            {/* <Image sizes="28px" aria-label="Facebook logo" src="/assets/facebook.webp" alt="Facebook" className="h-7 w-7" /> */}
            <Image
              sizes="24px"
              aria-label="Facebook logo"
              src="/assets/facebook.webp"
              alt="Facebook"
              className="h-6 w-6"
              width={24}
              height={24}
            />
          </Link>
          <Link
            href="https://twitter.com/SevenMentor"
            target="blank"
            className="text-white hover:text-orange-500"
          >
            <Image
              sizes="24px"
              aria-label="Twitter Logo"
              src="/assets/twitter.webp"
              alt="Twitter"
              className="h-6 w-6"
              width={24}
              height={24}
            />
          </Link>
          <Link
            href="https://www.instagram.com/sevenmentor_it_courses?igsh=dTh6NjhpemF3Mndl"
            target="blank"
            className="text-white hover:text-orange-500"
          >
            <Image
              sizes="24px"
              aria-label="Instagram Logo"
              src="/assets/insta.webp"
              alt="Instagram"
              className="h-6 w-6"
              width={24}
              height={24}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/sevenmentor"
            target="blank"
            className="text-white hover:text-orange-500"
          >
            <Image
              sizes="24px"
              aria-label="LinkedIn Logo"
              src="/assets/linkedin.webp"
              alt="LinkedIn"
              className="h-6 w-6"
              width={24}
              height={24}
            />
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
      </div>
    </nav>
  );
}
