// "use client";

// import Image from "next/image";
// import "./HomeBanner.css";
// import { Suspense } from "react";

// export default function HomeBanner() {
//   return (
//     <Suspense fallback={<div></div>}>
//       <div className="relative h-auto md:h-[630px] w-full z-1">

//         {/* Desktop background image (absolute) */}
//         <div className="hidden md:block absolute inset-0 z-0">
//           <Image
//             src="/assets/HomeBanner.webp"
//             alt="SevenMentor Training Pvt Ltd"
//             fill
//             priority
//             className="object-cover object-center"
//             aria-label="SevenMentor Training Pvt Ltd Image"
//           />
//         </div>

//         {/* Main container */}
//         <div className="flex flex-col md:flex-row w-full h-full relative z-10">

//           {/* Text Section */}
//           <div className="lg:w-1/2 w-full flex flex-col justify-start items-start md:absolute top-14 md:ml-5 px-4 py-8 md:py-0 bg-black md:bg-transparent text-white">
//             <div>
//               <h1 className="text-3xl text-left md:text-5xl font-bold lg:mt-0">
//                 Your <span className="animate-charcter">Dream Job</span> Awaits{" "}
//                 <span className="hidden lg:inline"><br /></span>
//                 {" - Let's Make It Happen"}
//               </h1>
//               <div className="relative mt-5">
//                 <p className="text-[16px] max-w-[500px] text-left md:mb-4">
//                 &quot;SevenMentor, a leading educational institute, has transformed countless careers with its
// industry-focused courses. Now, it&apos;s your turn to take the leap. Unlock your potential and build the
// career you&apos;ve always dreamed of let&apos;s make it happen!&quot;

//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Mobile image - shown below content */}
//           <div className="block md:hidden w-full h-[200px] relative">
//             <Image
//               src="/assets/HomeBanner.webp"
//               alt="SevenMentor Training Pvt Ltd"
//               fill
//               priority
//               className="object-cover object-center"
//               aria-label="SevenMentor Training Pvt Ltd Mobile Image"
//             />
//           </div>
//         </div>
//       </div>
//     </Suspense>
//   );
// }

"use client"
import Image from "next/image"
import styles from './HomeBanner.module.css'
import { Suspense } from "react"

export default function HomeBanner() {
  return (
   <div>
     {/* First scrolling line - TOP */}
      {/* <div className="w-full bg-gradient-to-r md:mt-6 from-orange-500 via-orange-600 to-orange-500 text-white py-1 md:py-4 overflow-hidden relative">
        <div className="flex whitespace-nowrap">
          <div className={`${styles.scroll} flex items-center space-x-8 text-white font-semibold text-sm md:text-base`}>
            <span>🎓"Your Next Career Milestone Starts Here – Build a Career with Flat 50% Off on All Courses"</span>
            <span>🎓"Your Next Career Milestone Starts Here – Build a Career with Flat 50% Off on All Courses"</span>
            <span>🎓"Your Next Career Milestone Starts Here – Build a Career with Flat 50% Off on All Courses"</span>
            <span>🎓"Your Next Career Milestone Starts Here – Build a Career with Flat 50% Off on All Courses"</span>
          </div>
        </div>
      </div> */}
      <div className="relative h-auto md:h-[650px] w-full z-1">
        {/* Desktop background image (absolute) */}
        <div className="hidden md:block absolute inset-0 z-0">
          <Image
            src="/assets/homebannerdesktop.webp"
            alt="SevenMentor Training Pvt Ltd"
            fill
            priority
            className="object-cover object-center"
            aria-label="SevenMentor Training Pvt Ltd Image"
          />
        </div>

        {/* Main container */}
        <div className="flex flex-col md:flex-row w-full h-full relative z-10">

         <div className="lg:w-1/2 w-full flex flex-col justify-start items-start md:absolute top-8 md:ml-8 md:mt-5 px-4 py-8 md:py-0 bg-black md:bg-transparent text-white">
             <div>
              <h1 className="text-3xl text-left md:text-5xl font-bold lg:mt-0">
                 Your <span className="animate-charcter">Dream Job</span> Awaits{" "}
                 <span className="hidden lg:inline"><br /></span>
                 {" - Let's Make It Happen"}
               </h1>
               <div className="relative mt-5">
                 <p className="text-[16px] max-w-[500px] text-left md:mb-4">
                 &quot;SevenMentor, a leading educational institute, has transformed countless careers with its
 industry-focused courses. Now, it&apos;s your turn to take the leap. Unlock your potential and build the
 career you&apos;ve always dreamed of let&apos;s make it happen!&quot;

                 </p>
               </div>
             </div>
           </div>

          <div className="block md:hidden w-full h-[200px] relative">
            <Image
              src="/assets/homebannermob1.webp"
              alt="SevenMentor Training Pvt Ltd"
              fill
              priority
              className="object-contain object-center"
              aria-label="SevenMentor Training Pvt Ltd Mobile Image"
            />
          </div>
        </div>
      </div>

      {/* Scrolling Text Section */}
      <div className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 text-white py-1 md:py-2 overflow-hidden relative">
       

        {/* Second scrolling line with different speed */}
        <div className="flex whitespace-nowrap mt-2">
          <div className={`${styles.scrollSlow} flex items-center space-x-8 text-white font-medium text-xs md:text-sm opacity-90`}>
            <span>✨ Job-Ready Students, Job-Driven Training, Job-Assured Placements</span>
             <span>✨ Job-Ready Students, Job-Driven Training, Job-Assured Placements</span>
             <span>✨ Job-Ready Students, Job-Driven Training, Job-Assured Placements</span>
            <span>✨ Job-Ready Students, Job-Driven Training, Job-Assured Placements</span>
             <span>✨ Job-Ready Students, Job-Driven Training, Job-Assured Placements</span>
          </div>
        </div>
      </div>

      
    </div>
  )
}