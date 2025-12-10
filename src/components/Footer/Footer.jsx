"use client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const trendingCoursesColumn1 = [
    { name: "Python Course", url: "/python-course" },
    { name: "Django Course", url: "/django-course" },
    { name: "Machine Learning", url: "/machine-learning-course" },
    { name: "HR Training", url: "/hr-training" },
    { name: "Spoken English", url: "/spoken-english-classes" },
    {
      name: "Personality Development",
      url: "/personality-development-classes",
    },
    {
      name: "Full Stack Development",
      url: "/full-stack-developer-course",
    },
  ];

  const trendingCoursesColumn2 = [
    { name: "Software Testing", url: "/software-testing-course" },
    { name: "Data Science", url: "/data-science-course" },
    { name: "Data Analytics", url: "/data-analytics-course" },
    { name: "CCNA", url: "/ccna-course" },
    {
      name: "Ethical Hacking",
      url: "/ethical-hacking-course",
    },
    { name: "AWS", url: "/aws-course" },
    { name: "Linux", url: "/linux-course" },
  ];

  const branches = [
    {
      name: "Shivaji Nagar Head Branch",
      contact: "020-71173071",
    },
    {
      name: "Mumbai Branch",
      contact: "022-48904395",
    },
    {
      name: "Deccan Branch",
      contact: "020-48553951",
    },
    {
      name: "Pimpri Chinchwad Branch",
      contact: "020-71173125",
    },
    {
      name: "Hadapsar Branch",
      contact: "020-48556222",
    },
    {
      name: "Nanded Branch",
      contact: "020-48556262",
    },
    {
      name: "Akurdi Branch",
      contact: "020-71173125",
    },
  ];

  return (
    <footer className="bg-black/90 bg-gradient-to-tl from-orange-700/40 via-slate-950 to-black text-gray-300 overflow-visible">
      <div className="mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-4 justify-around">
          {/* Company Info Column 1 */}
          <div className="flex flex-col">
            <div>
              {/* Logo and Company Name */}
              <Link
                href="/"
                className="flex items-center justify-center md:justify-start"
                onClick={scrollToTop}
              >
                <div className="flex justify-center md:justify-start items-center">
                  <Image
                    src="/assets/sevenMLogo.webp"
                    alt="Seven Mentor Logo"
                    width={60}
                    height={60}
                  />
                  <span className="text-2xl font-bold text-white">
                    <span className="text-orange-500 animate-charcter">
                      Seven
                    </span>{" "}
                    Mentor
                  </span>
                </div>
              </Link>

              {/* Contact and Email */}
              <div className="mt-4 text-center md:text-left">
                <Link href="tel:020-71173125">
                  Contact: <span className="text-orange-400">020-71173071</span>
                </Link>
                <br />
                <Link href="mailto:support@sevenmentor.com">
                  Email:{" "}
                  <span className="text-orange-400">
                    support@sevenmentor.com
                  </span>
                </Link>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h3 className="font-semibold text-center md:text-left text-lg mb-4">
                Stay Connected
              </h3>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <Link
                  aria-label="Facebook"
                  href="https://www.facebook.com/sevenmentor"
                  target="blank"
                  className="text-white hover:text-orange-500"
                >
                  <Image
                    aria-label="Facebook"
                    src="/assets/facebook.webp"
                    alt="Facebook"
                    width={28}
                    height={28}
                  />
                </Link>
                <Link
                  aria-label="Twitter"
                  href="https://twitter.com/SevenMentor"
                  target="blank"
                  className="text-white hover:text-orange-500"
                >
                  <Image
                    aria-label="Twitter"
                    src="/assets/twitter.webp"
                    alt="Twitter"
                    width={28}
                    height={28}
                  />
                </Link>
                <Link
                  aria-label="Instagram"
                  href="https://www.instagram.com/sevenmentor_it_courses?igsh=dTh6NjhpemF3Mndl"
                  target="blank"
                  className="text-white hover:text-orange-500"
                >
                  <Image
                    aria-label="Instagram"
                    src="/assets/insta.webp"
                    alt="Instagram"
                    width={28}
                    height={28}
                  />
                </Link>
                <Link
                  aria-label="Linkedin"
                  href="https://www.linkedin.com/company/sevenmentor"
                  target="blank"
                  className="text-white hover:text-orange-500"
                >
                  <Image
                    aria-label="LinkedIn"
                    src="/assets/linkedin.webp"
                    alt="LinkedIn"
                    width={28}
                    height={28}
                  />
                </Link>
                <Link
                  href="https://www.youtube.com/@SevenMentor"
                  target="blank"
                  className="text-white hover:text-orange-500"
                >
                  <Image
                    aria-label="YouTube"
                    src="/assets/youtube.webp"
                    alt="YouTube"
                    width={28}
                    height={28}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* About Links Column 2 */}
          <div>
            <h3 className="underline decoration-orange-500 underline-offset-4 font-semibold text-lg mb-4">
              About Us
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/company"
                  className="hover:text-orange-500"
                  onClick={scrollToTop}
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/100-percent-job-placement-institute-in-pune.php"
                  className="hover:text-orange-500"
                  onClick={scrollToTop}
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-orange-500"
                  onClick={scrollToTop}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-orange-500"
                  onClick={scrollToTop}
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column 3 */}
          <div>
            <h3 className="underline decoration-orange-500 underline-offset-4 font-semibold text-lg mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/certificate"
                  className="hover:text-orange-500"
                  onClick={scrollToTop}
                >
                  Certificate
                </Link>
              </li>
              <li>
                <Link
                  href="/franchise"
                  className="hover:text-orange-500"
                  onClick={scrollToTop}
                >
                  Franchise Opportunities
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-orange-500"
                  onClick={scrollToTop}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/hiring-partners"
                  className="hover:text-orange-500"
                  onClick={scrollToTop}
                >
                  Hiring Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Trending Courses Column 4 */}
          <div>
            <h3 className="underline decoration-orange-500 underline-offset-4 font-semibold text-lg mb-4 md:text-center md:mr-10">
              Trending Courses
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
              {/* First Column of Courses */}
              <ul className="space-y-2">
                {trendingCoursesColumn1.map((course, index) => (
                  <li key={index}>
                    <Link
                      href={course.url}
                      className="hover:text-orange-500"
                      onClick={scrollToTop}
                    >
                      {course.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Second Column of Courses */}
              <ul className="space-y-2 mt-2 md:mt-0">
                {trendingCoursesColumn2.map((course, index) => (
                  <li key={index}>
                    <Link
                      href={course.url}
                      className="hover:text-orange-500"
                      onClick={scrollToTop}
                    >
                      {course.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Branch Information Section - Perfect as requested */}
        <div className="mt-6 pt-6 border-t border-gray-700">
          <h3 className="text-base font-semibold text-center mb-4 text-white">
            Our Branches
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3">
            {branches.map((branch, index) => (
              <div key={index} className="text-center">
                <h4 className="font-medium text-orange-400 mb-1 text-sm">
                  {branch.name}
                </h4>
                <span className="text-gray-300 text-xs">
                  Contact:{" "}
                  <Link
                    href={`tel:${branch.contact}`}
                    className="text-blue-600 hover:text-blue-800 lg:text-gray-300 lg:hover:text-orange-500 ">
                    {branch.contact}
                  </Link>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-sm flex flex-wrap justify-center lg:justify-between">
          <div className="flex gap-4 mb-2">
            <Link
              href="/terms-and-conditions"
              className="text-orange-400"
              onClick={scrollToTop}
            >
              *Terms And Conditions
            </Link>
            <Link
              href="/privacy-policy"
              className="text-orange-400"
              onClick={scrollToTop}
            >
              Privacy Policy
            </Link>
            <Link
              href="/web-policy"
              className="text-orange-400"
              onClick={scrollToTop}
            >
              Web Policy
            </Link>
            <Link
              href="/placement-policy"
              className="text-orange-400"
              onClick={scrollToTop}
            >
              Placement Policy
            </Link>
            <Link
              href="/sitemap_seven_mentor"
              className="text-orange-400"
              onClick={scrollToTop}
            >
              Sitemap
            </Link>
          </div>
          <p>© 2025 SevenMentor Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

// import { useEffect, useState } from "react";

// export default function Footer() {
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" })
//   }

//   const branches = [
//     {
//       name: "Shivaji Nagar Head Branch",
//       address: (
//         <>
//           45/A Wing, Shreenath Plaza,
//           <br />
//           1st floor, Dnyaneshwar Paduka Chowk, 1184/4 F.C Road,
//           <br />
//           Shivaji Nagar, Pune,
//           <br />
//           Maharashtra – 411005
//         </>
//       ),
//       mapLink: "https://maps.app.goo.gl/vRFoHraY2kSQyL22A",
//     },
//     {
//       name: "Pimpri Chinchwad Place Branch",
//       address: (
//         <>
//           Office number 38 wing A and B.
//           <br />
//           3rd Floor, KUNAL PLAZA off Mumbai
//           <br />
//           Pune Highway
//           <br />
//           Chinchwad, Maharashtra 411019
//         </>
//       ),
//       mapLink: "https://maps.app.goo.gl/DZf6w4vendh5RsSn7",
//     },
//     {
//       name: "Hadapsar Branch",
//       address: (
//         <>
//           Manisha Blitz,
//           <br />
//           Office 34-35, 3rd floor,
//           <br />
//           Near Shankarmath, Pune Solapur Hwy,
//           <br />
//           Hadapsar, Pune - 411013.
//         </>
//       ),
//       mapLink: "https://maps.app.goo.gl/MUVNzQ1WdmexkCQZ8",
//     },
//     {
//       name: "Deccan Branch",
//       address: (
//         <>
//           3rd Floor, Renuka Complex
//           <br />
//           D-2, Jangali Maharaj Rd,
//           <br />
//           opp. MC Donalds, Shivajinagar,
//           <br />
//           Pune, Maharashtra 411005
//         </>
//       ),
//       mapLink: "https://maps.app.goo.gl/Vb5f3eFKoWiC2pfB7",
//     },
//     {
//       name: "Nanded Branch",
//       address: (
//         <>
//           Saphalya building, 1-14-870,
//           <br />
//           Opp. Yogeshvara complex,
//           <br />
//           Near Raj mall,
//           <br />
//           Anandnagar, Nanded, 431605
//         </>
//       ),
//       mapLink: "https://maps.app.goo.gl/WkuYNtCj49tqX76z9",
//     },
//     {
//       name: "Mumbai Branch",
//       address: (
//         <>Office no. 101 & part office no.1, Civic Centre, MMGS Marg, Dadar East, Dadar, Mumbai, Maharashtra 400014</>
//       ),
//       mapLink: "https://maps.app.goo.gl/your-mumbai-map-link", // Placeholder for Mumbai map link
//     },
//     // {
//     //   name: "Akurdi Branch",
//     //   address: (
//     //     <>
//     //       Plot No.7/4, Sector No.29, 1st floor, Dharmraj Chowk, DY Patil College Rd, near Chaitanya Park, Gurudwara
//     //       Colony, Ravet, Pimpri-Chinchwad, Maharashtra 412101
//     //     </>
//     //   ),
//     //   mapLink: "https://maps.app.goo.gl/qQ8nwoUzjf3fNXtB8",
//     // },
//   ]

//   return (
//     <footer className="bg-black/90 bg-gradient-to-tl from-orange-700/40 via-slate-950 to-black text-gray-300 min-h-screen">
//       <div className="container mx-auto px-6 lg:px-8 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-[2.5fr_1fr_1fr_1fr] gap-8 justify-center">
//           {/* Company Info */}
//           <div className="flex-col">
//             <div>
//              {" "}
//             {/* Adjusted for centering and responsiveness */}
//             <Link href="/" className="flex items-center justify-center" onClick={scrollToTop}>
//               <div className="flex justify-center items-center">
//                 <Image src="/assets/sevenMLogo.webp" alt="Seven Mentor Logo" width={60} height={60} />
//                 <span className="text-2xl font-bold text-white">
//                   <span className="text-orange-500 animate-charcter">Seven</span> Mentor
//                 </span>
//               </div>
//             </Link>
//             {/* Contact and Email */}
//             <div className="mt-4 text-center ">
//               {" "}
//               {/* Centered on small, left on medium+ */}
//               <Link href="tel:020-71173125">
//                 Contact: <span className="text-orange-400">020-71173125</span>
//               </Link>
//               <br />
//               <Link href="mailto:support@sevenmentor.com">
//                 Email: <span className="text-orange-400">support@sevenmentor.com</span>
//               </Link>
//             </div>
//             <h3 className="underline decoration-orange-500 underline-offset-4 font-semibold text-lg mb-4 mt-6 text-center ">
//               Our Branches
//             </h3>
//           </div>
//           <div className="flex flex-col items-center">
//             {/* Branches Grid */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 w-full">
//               {branches.map((branch, index) => (
//                 <div key={index}>
//                   <span className="flex items-start">
//                     <Link
//                       name="Contact"
//                       aria-label="Location"
//                       href={branch.mapLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-block"
//                     >
//                       <FontAwesomeIcon icon={faMapMarkerAlt} className="text-orange-500 cursor-pointer" />
//                     </Link>
//                     <span className="ml-4">{branch.name}</span>
//                   </span>
//                   <p className="ml-6 mt-1">{branch.address}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           </div>
//           {/* About Links */}
//           <div>
//             <h3 className="underline decoration-orange-500 underline-offset-4 font-semibold text-lg mb-4">About Us</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/company" className="hover:text-orange-500" onClick={scrollToTop}>
//                   Our Story
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/100-percent-job-placement-institute-in-pune.php"
//                   className="hover:text-orange-500"
//                   onClick={scrollToTop}
//                 >
//                   Success Stories
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/blog" className="hover:text-orange-500" onClick={scrollToTop}>
//                   Blogs
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="hover:text-orange-500" onClick={scrollToTop}>
//                   Get in Touch
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           {/* Learning Resources */}
//           <div>
//             <h3 className="underline decoration-orange-500 underline-offset-4 font-semibold text-lg mb-4">Services</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/certificate" className="hover:text-orange-500" onClick={scrollToTop}>
//                   Certificate
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/franchise" className="hover:text-orange-500" onClick={scrollToTop}>
//                   Franchise Opportunities
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/careers" className="hover:text-orange-500" onClick={scrollToTop}>
//                   Careers
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/hiring-partners" className="hover:text-orange-500" onClick={scrollToTop}>
//                   Hiring Partners
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           {/* Trending Courses */}
//           <div>
//             <h3 className="underline decoration-orange-500 underline-offset-4 font-semibold text-lg mb-4">
//               Trending Courses
//             </h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/best-python-classes-in-pune.php" className="hover:text-orange-500" onClick={scrollToTop}>
//                   Python Course
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/django-training-course-in-pune.php"
//                   className="hover:text-orange-500"
//                   onClick={scrollToTop}
//                 >
//                   Django Course
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/machine-learning-course-in-pune.php"
//                   className="hover:text-orange-500"
//                   onClick={scrollToTop}
//                 >
//                   Machine Learning
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/hr-training-institute-in-pune.php" className="hover:text-orange-500" onClick={scrollToTop}>
//                   HR Training
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/spoken-engilsh-classes-in-pune.php"
//                   className="hover:text-orange-500"
//                   onClick={scrollToTop}
//                 >
//                   Spoken English
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/best-personality-development-and-soft-skills-training-courses-in-pune.php"
//                   className="hover:text-orange-500"
//                   onClick={scrollToTop}
//                 >
//                   Personality Development
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/full-stack-training-institute-in-pune.php"
//                   className="hover:text-orange-500"
//                   onClick={scrollToTop}
//                 >
//                   Full Stack Development
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/software-testing-course-in-pune.php"
//                   className="hover:text-orange-500"
//                   onClick={scrollToTop}
//                 >
//                   Software Testing
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/data-science-course-in-pune.php" className="hover:text-orange-500" onClick={scrollToTop}>
//                   Data Science
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/data-analytics-courses-in-pune.php"
//                   className="hover:text-orange-500"
//                   onClick={scrollToTop}
//                 >
//                   Data Analytics
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/ccna-course-in-pune-area.php" className="hover:text-orange-500" onClick={scrollToTop}>
//                   CCNA
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/ethical_hacking_training_institute_training_classes_in_pune_best_course_in_india.php"
//                   className="hover:text-orange-500"
//                   onClick={scrollToTop}
//                 >
//                   Ethical Hacking
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/amazon-web-services-training-institute-in-pune.php"
//                   className="hover:text-orange-500"
//                   onClick={scrollToTop}
//                 >
//                   AWS
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/linux-rhce-training-in-pune.php" className="hover:text-orange-500" onClick={scrollToTop}>
//                   Linux
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="flex flex-wrap justify-center lg:gap-16 lg:justify-between lg:mr-10">
//           {/* Social Media */}
//           <div className="mt-8">
//             <h3 className="font-semibold text-center text-lg mb-4">Stay Connected</h3>
//             {/* Social Media Icons */}
//             <div className="flex items-center gap-4">
//               <Link
//                 aria-label="Facebook"
//                 href="https://www.facebook.com/sevenmentor"
//                 target="blank"
//                 className="text-white hover:text-orange-500"
//               >
//                 <Image aria-label="Facebook" src="/assets/facebook.webp" alt="Facebook" width={28} height={28} />
//               </Link>
//               <Link
//                 aria-label="Twitter"
//                 href="https://twitter.com/SevenMentor"
//                 target="blank"
//                 className="text-white hover:text-orange-500"
//               >
//                 <Image aria-label="Twitter" src="/assets/twitter.webp" alt="Twitter" width={28} height={28} />
//               </Link>
//               <Link
//                 aria-label="Instagram"
//                 href="https://www.instagram.com/sevenmentor_it_courses?igsh=dTh6NjhpemF3Mndl"
//                 target="blank"
//                 className="text-white hover:text-orange-500"
//               >
//                 <Image aria-label="Instagram" src="/assets/insta.webp" alt="Instagram" width={28} height={28} />
//               </Link>
//               <Link
//                 aria-label="Linkedin"
//                 href="https://www.linkedin.com/company/sevenmentor"
//                 target="blank"
//                 className="text-white hover:text-orange-500"
//               >
//                 <Image aria-label="LinkedIn" src="/assets/linkedin.webp" alt="LinkedIn" width={28} height={28} />
//               </Link>
//               <Link
//                 href="https://www.youtube.com/@SevenMentor"
//                 target="blank"
//                 className="text-white hover:text-orange-500"
//               >
//                 <Image aria-label="YouTube" src="/assets/youtube.webp" alt="YouTube" width={28} height={28} />
//               </Link>
//             </div>
//           </div>
//         </div>
//         {/* Footer Links */}
//         <div className="mt-8 pt-8 border-t border-gray-700 text-sm flex flex-wrap justify-center lg:justify-between">
//           <div className="flex gap-4">
//             <Link href="/terms-and-conditions" className="text-orange-400" onClick={scrollToTop}>
//               *Terms And Conditions
//             </Link>
//             <Link href="/privacy-policy" className="text-orange-400" onClick={scrollToTop}>
//               Privacy Policy
//             </Link>
//             <Link href="/web-policy" className="text-orange-400" onClick={scrollToTop}>
//               Web Policy
//             </Link>
//             <Link href="/sitemap_seven_mentor" className="text-orange-400" onClick={scrollToTop}>
//               Sitemap
//             </Link>
//           </div>
//           <p>© 2025 SevenMentor Pvt. Ltd. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   )
// }
