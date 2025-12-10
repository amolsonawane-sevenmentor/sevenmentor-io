// "use client";

// import { useState } from "react";
// import dynamic from "next/dynamic";

// const CareerPopupForm = dynamic(
//   () => import("../../../../components/Career/CareerPopupForm.jsx"),
//   { ssr: false }
// );
// const Perks = dynamic(() => import("../../../../components/Career/Perks.jsx"), {
//   ssr: false,
// });
// const AboveFooterForm = dynamic(
//   () =>
//     import("../../../../components/Home/AboveFooterForm/AboveFooterForm.jsx"),
//   {
//     ssr: false,
//   }
// );
// const ContactFranchise = dynamic(
//   () => import("../../../../components/Franchise/ContactFranchise.jsx"),
//   { ssr: false }
// );

// import { Calendar, MapPin, Briefcase, DollarSign, Clock } from "lucide-react";

// export default function IndividualCareer({ career }) {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const getOverview = (text, wordLimit = 200) => {
//     if (!text) return "";
//     const words = text.split(/\s+/).slice(0, wordLimit);
//     return words.join(" ") + (words.length === wordLimit ? "..." : "");
//   };

//   const handlePopupOpen = () => {
//     setIsPopupOpen(true);
//   };

//   const handlePopupClose = () => {
//     setIsPopupOpen(false);
//   };
//   const formatDate = (dateString) => {
//     if (!dateString) return "Recently";
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-GB", {
//       day: "2-digit",
//       month: "2-digit",
//       year: "numeric",
//     });
//   };

//   // Enhanced function to properly handle HTML and control characters
//   function stripHTMLAndDecodeEntities(html) {
//     if (!html) return "";

//     try {
//       // First, handle common HTML entities
//       let text = html
//         .replace(/&nbsp;/g, " ")
//         .replace(/&amp;/g, "&")
//         .replace(/&lt;/g, "<")
//         .replace(/&gt;/g, ">")
//         .replace(/&quot;/g, '"')
//         .replace(/&#39;/g, "'")
//         .replace(/&apos;/g, "'");

//       // Remove HTML tags
//       text = text.replace(/<[^>]*>/g, "");

//       // Remove or replace control characters that cause JSON parsing issues
//       text = text
//         .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "") // Remove control characters
//         .replace(/\r\n/g, " ") // Replace CRLF with space
//         .replace(/\n/g, " ") // Replace LF with space
//         .replace(/\r/g, " ") // Replace CR with space
//         .replace(/\t/g, " ") // Replace tabs with space
//         .replace(/\s+/g, " ") // Replace multiple spaces with single space
//         .trim();

//       return text;
//     } catch (error) {
//       console.error("Error processing HTML content:", error);
//       return "";
//     }
//   }

//   // Safely process the career content
//   const processedContent = career?.content
//     ? stripHTMLAndDecodeEntities(career.content)
//     : "";
//   const overviewText = getOverview(processedContent, 50);

//   // Function to safely render HTML content
//   const createSafeHTML = (htmlContent) => {
//     if (!htmlContent) return { __html: "" };

//     try {
//       // Clean the HTML content to remove problematic characters
//       const cleanedHTML = htmlContent
//         .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "") // Remove control characters
//         .replace(/\r\n/g, "<br>") // Replace CRLF with <br>
//         .replace(/\n/g, "<br>") // Replace LF with <br>
//         .replace(/\r/g, "<br>"); // Replace CR with <br>

//       return { __html: cleanedHTML };
//     } catch (error) {
//       console.error("Error creating safe HTML:", error);
//       return { __html: "Content unavailable" };
//     }
//   };

//   return (
//     <>
//       {/* Job Title Centered at Top */}
//       <section className="bg-black pt-14 md:pt-20 mb-4 md:mb-12 mt-12 md:mt-24">
//         <div className="mx-auto px-4 md:px-6 flex sm:flex-row flex-col justify-center items-center">
//           <h1 className="text-3xl md:text-6xl font-bold text-orange-500 text-center">
//             {career?.title || "Job Title"}
//           </h1>
//           <button
//             onClick={handlePopupOpen}
//             className="cursor-pointer bg-orange-500 text-white py-3 px-4 rounded-full font-semibold uppercase hover:bg-orange-600 transition-all shadow-md sm:ml-12 my-6 md:my-0 text-sm"
//           >
//             Apply for this Job
//           </button>
//         </div>
//       </section>

//       {/* Main Content: Left info and Right cards */}
//       <section className="bg-black pb-16">
//         <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row gap-12 md:gap-24">
//           {/* Left Side - Career Info */}
//           <div className="md:w-1/2 flex flex-col justify-center text-white space-y-6">
//             <div className="flex items-center">
//               <Briefcase className="w-6 h-6 mr-3 text-orange-500" />
//               <span className="text-lg">
//                 <strong className="text-orange-500">Job Type:</strong>{" "}
//                 {career?.type || "Not specified"}
//               </span>
//             </div>
//             <div className="flex items-center">
//               <MapPin className="w-7 h-7 mr-3 text-orange-500" />
//               <span className="text-lg">
//                 <strong className="text-orange-500">Location:</strong>{" "}
//                 {career?.location || "Not specified"}
//               </span>
//             </div>
//             <div className="flex items-center">
//               <Calendar className="w-6 h-6 mr-3 text-orange-500" />
//               <span className="text-lg">
//                 <strong className="text-orange-500">Posted:</strong>{" "}
//                 {formatDate(career?.postedDate)}
//               </span>
//             </div>
//             <div className="flex items-left justify-start">
//               <span className="text-lg">
//                 <strong className="text-orange-500">Overview:</strong>{" "}
//                 {overviewText || "No overview available"}
//               </span>
//             </div>
//           </div>

//           {/* Right Side - Cards of Details */}
//           <div className="md:w-1/2 grid grid-cols-1 gap-6">
//             <div className="bg-gray-900 p-6 rounded-xl shadow-md">
//               <h3 className="text-lg font-semibold text-orange-500 mb-2 flex items-center">
//                 <Briefcase className="w-5 h-5 mr-2" />
//                 Work Mode
//               </h3>
//               <p className="text-white">
//                 {career?.workMode || "Not specified"}
//               </p>
//             </div>
//             <div className="bg-gray-900 p-6 rounded-xl shadow-md">
//               <h3 className="text-lg font-semibold text-orange-500 mb-2 flex items-center">
//                 <Clock className="w-5 h-5 mr-2" />
//                 Experience
//               </h3>
//               <p className="text-white">
//                 {career?.experience || "Not specified"}
//               </p>
//             </div>
//             <div className="bg-gray-900 p-6 rounded-xl shadow-md">
//               <h3 className="text-lg font-semibent text-orange-500 mb-2 flex items-center">
//                 <DollarSign className="w-5 h-5 mr-2" />
//                 Salary
//               </h3>
//               <p className="text-white">{career?.salary || "Not specified"}</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Job Description Section */}
//       <section className="bg-black pb-8 pt-0 sm:py-16 sm:pb-0">
//         <div className="max-w-7xl mx-auto px-4 md:px-6">
//           <div className="bg-gray-900 p-8 rounded-xl shadow-md text-white">
//             <h2 className="text-2xl font-bold text-orange-500 mb-6">
//               Job Description
//             </h2>
//             <div
//               className="prose max-w-none text-white prose-headings:text-white prose-p:text-white prose-li:text-white prose-strong:text-orange-400"
//               dangerouslySetInnerHTML={createSafeHTML(career?.content)}
//             />
//             {/* Apply Button */}
//             <div className="mt-8 text-center">
//               <button
//                 onClick={handlePopupOpen}
//                 className="cursor-pointer bg-orange-500 text-white py-3 px-8 rounded-full font-semibold uppercase hover:bg-orange-600 transition-all shadow-md"
//               >
//                 Apply for this Job
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Popup Form */}
//       <CareerPopupForm
//         isOpen={isPopupOpen}
//         onClose={handlePopupClose}
//         jobTitle={career?.title || ""}
//         jobType={career?.type || ""}
//         jobLocation={career?.location || ""}
//       />

//       {/* Additional Components */}
//       <Perks />
//       <ContactFranchise />
//       <AboveFooterForm mailId="careers@sevenmentor.com" />
//     </>
//   );
// }

"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const CareerPopupForm = dynamic(
  () => import("../../../../components/Career/CareerPopupForm.jsx"),
  { ssr: false }
);
const Perks = dynamic(() => import("../../../../components/Career/Perks.jsx"), {
  ssr: false,
});
const AboveFooterForm = dynamic(
  () =>
    import("../../../../components/Home/AboveFooterForm/AboveFooterForm.jsx"),
  {
    ssr: false,
  }
);
const ContactFranchise = dynamic(
  () => import("../../../../components/Franchise/ContactFranchise.jsx"),
  { ssr: false }
);

import { Calendar, MapPin, Briefcase, DollarSign, Clock } from "lucide-react";

export default function IndividualCareer({ career, slug }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const getOverview = (text, wordLimit = 200) => {
    if (!text) return "";
    const words = text.split(/\s+/).slice(0, wordLimit);
    return words.join(" ") + (words.length === wordLimit ? "..." : "");
  };

  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };
  
  const formatDate = (dateString) => {
    if (!dateString) return "Recently";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  // Enhanced function to properly handle HTML and control characters
  function stripHTMLAndDecodeEntities(html) {
    if (!html) return "";

    try {
      // First, handle common HTML entities
      let text = html
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&apos;/g, "'");

      // Remove HTML tags
      text = text.replace(/<[^>]*>/g, "");

      // Remove or replace control characters that cause JSON parsing issues
      text = text
        .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "") // Remove control characters
        .replace(/\r\n/g, " ") // Replace CRLF with space
        .replace(/\n/g, " ") // Replace LF with space
        .replace(/\r/g, " ") // Replace CR with space
        .replace(/\t/g, " ") // Replace tabs with space
        .replace(/\s+/g, " ") // Replace multiple spaces with single space
        .trim();

      return text;
    } catch (error) {
      console.error("Error processing HTML content:", error);
      return "";
    }
  }

  // Safely process the career content
  const processedContent = career?.content
    ? stripHTMLAndDecodeEntities(career.content)
    : "";
  const overviewText = getOverview(processedContent, 50);

  // Function to safely render HTML content
  const createSafeHTML = (htmlContent) => {
    if (!htmlContent) return { __html: "" };

    try {
      // Clean the HTML content to remove problematic characters
      const cleanedHTML = htmlContent
        .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "") // Remove control characters
        .replace(/\r\n/g, "<br>") // Replace CRLF with <br>
        .replace(/\n/g, "<br>") // Replace LF with <br>
        .replace(/\r/g, "<br>"); // Replace CR with <br>

      return { __html: cleanedHTML };
    } catch (error) {
      console.error("Error creating safe HTML:", error);
      return { __html: "Content unavailable" };
    }
  };

  return (
    <>
      {/* Job Title Centered at Top */}
      <section className="bg-black pt-14 md:pt-20 mb-4 md:mb-12 mt-12 md:mt-24">
        <div className="mx-auto px-4 md:px-6 flex sm:flex-row flex-col justify-center items-center">
          <h1 className="text-3xl md:text-6xl font-bold text-orange-500 text-center">
            {career?.title || "Job Title"}
          </h1>
          <button
            onClick={handlePopupOpen}
            className="cursor-pointer bg-orange-500 text-white py-3 px-4 rounded-full font-semibold uppercase hover:bg-orange-600 transition-all shadow-md sm:ml-12 my-6 md:my-0 text-sm"
          >
            Apply for this Job
          </button>
        </div>
      </section>

      {/* Main Content: Left info and Right cards */}
      <section className="bg-black pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row gap-12 md:gap-24">
          {/* Left Side - Career Info */}
          <div className="md:w-1/2 flex flex-col justify-center text-white space-y-6">
            <div className="flex items-center">
              <Briefcase className="w-6 h-6 mr-3 text-orange-500" />
              <span className="text-lg">
                <strong className="text-orange-500">Job Type:</strong>{" "}
                {career?.type || "Not specified"}
              </span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-7 h-7 mr-3 text-orange-500" />
              <span className="text-lg">
                <strong className="text-orange-500">Location:</strong>{" "}
                {career?.location || "Not specified"}
              </span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-6 h-6 mr-3 text-orange-500" />
              <span className="text-lg">
                <strong className="text-orange-500">Posted:</strong>{" "}
                {formatDate(career?.postedDate)}
              </span>
            </div>
            <div className="flex items-left justify-start">
              <span className="text-lg">
                <strong className="text-orange-500">Overview:</strong>{" "}
                {overviewText || "No overview available"}
              </span>
            </div>
          </div>

          {/* Right Side - Cards of Details */}
          <div className="md:w-1/2 grid grid-cols-1 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-orange-500 mb-2 flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                Work Mode
              </h3>
              <p className="text-white">
                {career?.workMode || "Not specified"}
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-orange-500 mb-2 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                Experience
              </h3>
              <p className="text-white">
                {career?.experience || "Not specified"}
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-orange-500 mb-2 flex items-center">
                <DollarSign className="w-5 h-5 mr-2" />
                Salary
              </h3>
              <p className="text-white">{career?.salary || "Not specified"}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Description Section */}
      <section className="bg-black pb-8 pt-0 sm:py-16 sm:pb-0">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-gray-900 p-8 rounded-xl shadow-md text-white">
            <h2 className="text-2xl font-bold text-orange-500 mb-6">
              Job Description
            </h2>
            <div
              className="prose max-w-none text-white prose-headings:text-white prose-p:text-white prose-li:text-white prose-strong:text-orange-400"
              dangerouslySetInnerHTML={createSafeHTML(career?.content)}
            />
            {/* Apply Button */}
            <div className="mt-8 text-center">
              <button
                onClick={handlePopupOpen}
                className="cursor-pointer bg-orange-500 text-white py-3 px-8 rounded-full font-semibold uppercase hover:bg-orange-600 transition-all shadow-md"
              >
                Apply for this Job
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popup Form */}
      <CareerPopupForm
        isOpen={isPopupOpen}
        onClose={handlePopupClose}
        jobTitle={career?.title || ""}
        jobType={career?.type || ""}
        jobLocation={career?.location || ""}
        jobSlug={slug}
      />

      {/* Additional Components */}
      <Perks />
      <ContactFranchise />
      <AboveFooterForm mailId="careers@sevenmentor.com" />
    </>
  );
}
