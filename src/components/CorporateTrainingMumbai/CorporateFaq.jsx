'use client';

import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import FranchiseForm from "../Forms/FranchiseForm.jsx";

export default function CorporateFaq({ faqData }) {
  const [showPopup, setShowPopup] = useState(false)

  const handleOpenPopup = useCallback(() => {
    setShowPopup(true)
  }, [])

  const handleClosePopup = useCallback(() => {
    setShowPopup(false)
  }, [])
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  const [showButtons, setShowButtons] = useState([]);
  

  const contentRefs = useRef([]);

  useEffect(() => {
    const observers = [];

    contentRefs.current.forEach((ref, i) => {
      if (ref) {
        const observer = new ResizeObserver(() => {
          const lineHeight = parseFloat(getComputedStyle(ref).lineHeight);
          const lines = ref.scrollHeight / lineHeight;
          setShowButtons((prev) => {
            const newShowButtons = [...prev];
            newShowButtons[i] = lines > 3;
            return newShowButtons;
          });
        });

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [faqData]);

  const toggleExpand = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };


  

  return (
    <section className="bg-black bg-[radial-gradient(circle_at_10%_20%,rgba(255,97,0,0.03)_0%,transparent_50%),radial-gradient(circle_at_90%_80%,rgba(255,97,0,0.03)_0%,transparent_50%)] text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-orange-500 bg-clip-text text-transparent mb-4 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-orange-400">Everything you need to know about our revolutionary job platform</p>
        </div>

        {/* FAQ Content */}
        <div className="flex flex-wrap gap-8">
          {faqData.map((faq, index) => {
            const isExpanded = expandedIndexes.includes(index);

            return (
              <motion.div
                key={index}
                className="w-full md:w-[48%] transition-all rounded-lg border border-orange-600/10 bg-white/5 p-6 hover:shadow-xl hover:border-orange-500 flex flex-col"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-semibold text-orange-500 bg-orange-500/10 py-1 px-3 rounded-md">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-orange-500">{faq.question}</h3>
                </div>
                <div className="text-gray-300">
                  <span className="text-orange-500 font-bold">Ans: </span>
                  <div className="relative">
                    <div
                      ref={(el) => (contentRefs.current[index] = el)}
                      className={`${isExpanded ? "" : "line-clamp-3"} transition-all`}
                    >
                      {faq.answer}
                    </div>

                    {showButtons[index] && (
                      <button
                        onClick={() => toggleExpand(index)}
                        className="text-orange-400 ml-1 font-medium underline cursor-pointer"
                      >
                        {isExpanded ? "Show Less" : "Show More"}
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="flex justify-center mt-12">
          <button
            aria-label="Request a Callback"
            onClick={handleOpenPopup}
            className="py-3 px-6 font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-all cursor-pointer"
          >
            Didn&apos;t find your query? Request a Callback
          </button>
        </div>

        {/* Popup Form */}
        {showPopup &&

          <FranchiseForm
            isOpen={showPopup}
            onClose={handleClosePopup}
            title="Request Callback"
            mailSubject={"New Callback Reqest Received"}
            userEmailSubject={"Thank You, Your Callback Request Has Been Received – SevenMentor"}
            contactNo={"7360000325"}
            bannerTitle={"Corporate Training Program"}
            emailRoute={"/corporate-form"}
            mailId={"corporate@sevenmentor.com"}
          />
        }
      </div>
    </section>
  );
}



// =================================================CMS CODE========================================



// "use client"

// import { useState, useCallback, useEffect, useRef } from "react"
// import { motion } from "framer-motion"
// import FranchiseForm from "../Forms/FranchiseForm.jsx"

// export default function CorporateFaq({ faqData, mailId = "corporate@sevenmentor.com" }) {
//   const [showPopup, setShowPopup] = useState(false)

//   const handleOpenPopup = useCallback(() => {
//     setShowPopup(true)
//   }, [])

//   const handleClosePopup = useCallback(() => {
//     setShowPopup(false)
//   }, [])

//   const [expandedIndexes, setExpandedIndexes] = useState([])
//   const [showButtons, setShowButtons] = useState([])

//   const contentRefs = useRef([])

//   useEffect(() => {
//     const observers = []
//     contentRefs.current.forEach((ref, i) => {
//       if (ref) {
//         const observer = new ResizeObserver(() => {
//           const lineHeight = Number.parseFloat(getComputedStyle(ref).lineHeight)
//           const lines = ref.scrollHeight / lineHeight
//           setShowButtons((prev) => {
//             const newShowButtons = [...prev]
//             newShowButtons[i] = lines > 3
//             return newShowButtons
//           })
//         })

//         observer.observe(ref)
//         observers.push(observer)
//       }
//     })

//     return () => {
//       observers.forEach((observer) => observer.disconnect())
//     }
//   }, [faqData])

//   const toggleExpand = (index) => {
//     setExpandedIndexes((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
//   }

//   // Handle both array of objects and array of strings
//   const processedFaqData = Array.isArray(faqData)
//     ? faqData.map((faq) => {
//         if (typeof faq === "object" && faq.question && faq.answer) {
//           return faq
//         } else if (typeof faq === "string") {
//           // If it's a string, try to parse it or create a default structure
//           return {
//             question: "Frequently Asked Question",
//             answer: faq,
//           }
//         }
//         return {
//           question: "Question",
//           answer: "Answer",
//         }
//       })
//     : []

//   if (!processedFaqData || processedFaqData.length === 0) {
//     return null
//   }

//   return (
//     <section className="bg-black bg-[radial-gradient(circle_at_10%_20%,rgba(255,97,0,0.03)_0%,transparent_50%),radial-gradient(circle_at_90%_80%,rgba(255,97,0,0.03)_0%,transparent_50%)] text-white py-16 px-4 md:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-orange-500 bg-clip-text text-transparent mb-4 leading-tight">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-lg text-orange-400">Everything you need to know about our revolutionary job platform</p>
//         </div>

//         {/* FAQ Content */}
//         <div className="flex flex-wrap gap-8">
//           {processedFaqData.map((faq, index) => {
//             const isExpanded = expandedIndexes.includes(index)
//             return (
//               <motion.div
//                 key={index}
//                 className="w-full md:w-[48%] transition-all rounded-lg border border-orange-600/10 bg-white/5 p-6 hover:shadow-xl hover:border-orange-500 flex flex-col"
//                 whileHover={{ scale: 1.02 }}
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <span className="text-sm font-semibold text-orange-500 bg-orange-500/10 py-1 px-3 rounded-md">
//                     {index + 1}
//                   </span>
//                   <h3 className="text-lg font-semibold text-orange-500">{faq.question}</h3>
//                 </div>

//                 <div className="text-gray-300">
//                   <span className="text-orange-500 font-bold">Ans: </span>
//                   <div className="relative">
//                     <div
//                       ref={(el) => (contentRefs.current[index] = el)}
//                       className={`${isExpanded ? "" : "line-clamp-3"} transition-all`}
//                       dangerouslySetInnerHTML={{ __html: faq.answer }}
//                     />
//                     {showButtons[index] && (
//                       <button
//                         onClick={() => toggleExpand(index)}
//                         className="text-orange-400 ml-1 font-medium underline cursor-pointer"
//                       >
//                         {isExpanded ? "Show Less" : "Show More"}
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               </motion.div>
//             )
//           })}
//         </div>

//         {/* Call to Action */}
//         <div className="flex justify-center mt-12">
//           <button
//             aria-label="Request a Callback"
//             onClick={handleOpenPopup}
//             className="py-3 px-6 font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-all cursor-pointer"
//           >
//             Didn&apos;t find your query? Request a Callback
//           </button>
//         </div>

//         {/* Popup Form */}
//         {showPopup && (
//           <FranchiseForm
//             isOpen={showPopup}
//             onClose={handleClosePopup}
//             title="Request Callback"
//             mailSubject={"New Callback Request Received"}
//             userEmailSubject={"Thank You, Your Callback Request Has Been Received – SevenMentor"}
//             contactNo={"7360000325"}
//             bannerTitle={"Corporate Training Program"}
//             emailRoute={"/corporate-form"}
//             mailId={mailId}
//           />
//         )}
//       </div>
//     </section>
//   )
// }

