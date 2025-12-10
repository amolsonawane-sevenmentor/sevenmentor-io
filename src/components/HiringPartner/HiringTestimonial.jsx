// import { useCallback, useRef, useState, useEffect } from "react";

// const testimonials = [
//   {
//     id: 1,
//     company: "CRISIL",
//     text: `When we decided to hire trained data scientists, our first association was with Great Learning & we had continued success with them. Some of the recruits from GL have scaled up very well as Analysts & made huge differences to our projects & products. The resources who are hired from their campus, are indeed great additions to the system. They were able to fulfill our varieties of requirements within no time. `,
//     author: "Pallavi Thaker",
//     position: "Assistant Manager - Talent Acquisition",
//   },
//   {
//     id: 2,
//     company: "TheMathCompany",
//     text: `Journey with Great Learning has been enthralling and prolific for ZS. Quality of candidates is really good. We look forward to continuing working in close collaboration. I would want to take this opportunity to thank the GL team for always being proactive, responsive and having such great TATs. Been a pleasure working with Great Learning.`,
//     author: "Manjunath Hegde",
//     position: "Manager – Talent Acquisition",
//   },
//   {
//     id: 3,
//     company: "Infosys",
//     text: `It was our utmost pleasure to associate with the GL team. We are so happy with the prompt response & prompt action from sharing the profiles to scheduling each candidate. Also the pool for Data Science & Analytics was very great. We are so happy with all the hires we made through Great Lakes. Look forward to having such an association in future too.`,
//     author: "Rajesh Sharma",
//     position: "Senior HR Manager",
//   },
//   {
//     id: 4,
//     company: "TCS",
//     text: `I would like to convey on behalf of the panellists that we found most of the students very good at communication and their technical skills were also at par with what is expected based on the curriculum offered to them. All the students seemed to be focused about their career goals, had a pleasant attitude to interact with and were open to learning new things.`,
//     author: "Sonia Mehta",
//     position: "Talent Acquisition Lead",
//   },
// ];

// export default function HiringTestimonial() {
//   const emblaRef = useRef(null);
//   const [scrollIndex, setScrollIndex] = useState(0);
//   const itemsPerSlide = 1;
//   const totalSlides = testimonials.length/2;

//   useEffect(() => {
//     if (!emblaRef.current) return;
//     setScrollIndex(0);
//   }, []);

//   const scrollPrev = useCallback(() => {
//     setScrollIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
//   }, [totalSlides]);

//   const scrollNext = useCallback(() => {
//     setScrollIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
//   }, [totalSlides]);

//   return (
//     <div className="relative max-w-6xl mx-auto px-4 py-12">
//       <h2 className="text-3xl font-bold text-center mb-5 text-white">
//         Hiring Partners Testimonials
//       </h2>
//       <div className="flex justify-center items-center mb-10">
//         <div className="w-16 h-1 bg-orange-500 rounded"></div>
//         <div className="w-3 h-3 bg-orange-500 rounded-full mx-2"></div>
//         <div className="w-16 h-1 bg-orange-500 rounded"></div>
//       </div>

//       <div className="relative overflow-hidden">
//         <div
//           className="flex transition-transform duration-300"
//           ref={emblaRef}
//           style={{ transform: `translateX(-${scrollIndex * 100}%)` }}
//         >
//           {testimonials.map((testimonial) => (
//             <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_50%] min-w-0 px-4">
//               <div className="bg-white rounded-lg p-8 shadow-lg relative">
//                 {/* Quote Symbol */}
//                 <div className="absolute top-2 left-4 text-6xl text-gray-300 font-serif">
//                   &ldquo;
//                 </div>

//                 {/* Testimonial Text */}
//                 <p
//                   className="text-gray-600 mb-20 text-lg whitespace-pre-wrap"
//                   dangerouslySetInnerHTML={{ __html: testimonial.text }}
//                 ></p>

//                 {/* Author Info */}
//                 <p className="font-semibold">{testimonial.author}</p>
//                 <p className="text-gray-500">{testimonial.position}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Buttons */}
//         <button
//           onClick={scrollPrev}
//           className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition"
//           aria-label="Previous slide"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//         </button>

//         <button
//           onClick={scrollNext}
//           className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition"
//           aria-label="Next slide"
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M9 5l7 7-7 7"
//             />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// }

"use client";
import { useCallback, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";

// Image paths should be correctly referenced if using Next.js, otherwise use public paths.
const testimonials = [
  {
    id: 1,
    company: "CRISIL",
    logo: "/assets/images/brand/Ebay.webp",
    text: `When we decided to hire trained data scientists, our first association was with Great Learning & we had continued success with them. Some of the recruits from GL have scaled up very well as Analysts & made huge differences to our projects & products. The resources who are hired from their campus, are indeed great additions to the system. They were able to fulfill our varieties of requirements within no time.`,
    author: "Pallavi Thaker",
    position: "Assistant Manager - Talent Acquisition",
  },
  {
    id: 2,
    company: "TheMathCompany",
    logo: "/assets/images/brand/Wipro.webp",
    text: `Journey with Great Learning has been enthralling and prolific for ZS. Quality of candidates is really good. We look forward to continuing working in close collaboration. I would want to take this opportunity to thank the GL team for always being proactive, responsive and having such great TATs. Been a pleasure working with Great Learning.`,
    author: "Manjunath Hegde",
    position: "Manager – Talent Acquisition",
  },
  {
    id: 3,
    company: "Infosys",
    logo: "/assets/images/brand/LG.webp",
    text: `It was our utmost pleasure to associate with the GL team. We are so happy with the prompt response & prompt action from sharing the profiles to scheduling each candidate. Also the pool for Data Science & Analytics was very great. We are so happy with all the hires we made through Great Lakes. Look forward to having such an association in future too.`,
    author: "Rajesh Sharma",
    position: "Senior HR Manager",
  },
  {
    id: 4,
    company: "TCS",
    logo: "/assets/images/brand/Mittal.webp",
    text: `I would like to convey on behalf of the panellists that we found most of the students very good at communication and their technical skills were also at par with what is expected based on the curriculum offered to them. All the students seemed to be focused about their career goals, had a pleasant attitude to interact with and were open to learning new things.`,
    author: "Sonia Mehta",
    position: "Talent Acquisition Lead",
  },
];

export default function HiringTestimonial() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateScrollButtons);
    updateScrollButtons();
  }, [emblaApi, updateScrollButtons]);

  return (
    <div className="relative max-w-6xl mx-auto px-4 md:pt-28 py-5">
      <h2 className=" text-2xl md:text-3xl font-bold text-center mb-5 text-white">
        Hiring Partners Testimonials
      </h2>
      <div className="flex justify-center items-center mb-5">
        <div className="w-16 h-1 bg-orange-500 rounded"></div>
        <div className="w-3 h-3 bg-orange-500 rounded-full mx-2"></div>
        <div className="w-16 h-1 bg-orange-500 rounded"></div>
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-[0_0_100%] md:flex-[0_0_50%] px-4">
                <div className="bg-white rounded-lg p-8 shadow-lg relative">
                  <Image
                    src={testimonial.logo}
                    alt={testimonial.company}
                    width={100} // You can adjust this as needed
                    height={48} // Adjust to match h-12 (48px)
                    className="mb-4 h-12"
                  />
                  <div className="absolute top-2 left-4 text-6xl text-gray-300 font-serif">
                    &ldquo;
                  </div>
                  <p className="text-gray-900 mb-6 md:text-lg text-md">{testimonial.text}</p>
                  <p className="font-semibold pt-10">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
          className={`absolute md:left-[-30px] left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 shadow-lg p-2 rounded-full text-white transition ${!canScrollPrev ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          <MoveLeft size={18} />
        </button>

        <button
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
          className={`absolute md:right-[-30px] right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 shadow-lg p-2 rounded-full text-white transition ${!canScrollNext ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          <MoveRight size={18} />
        </button>
      </div>
    </div>
  );
}
