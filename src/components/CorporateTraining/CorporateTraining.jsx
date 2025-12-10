"use client"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Loader2 } from "lucide-react"
import { useMediaQuery } from "react-responsive"
import dynamic from "next/dynamic"

// Critical: Normal imports
import MobileCorporateBanner from "./MobileCorporateBanner.jsx"
import DesktopCorporateBanner from "./DesktopCorporateBanner.jsx"
import { faqData } from "../../components/Courses/CourseComponents/FaqSection/FaqData.jsx"
import { corporateContentData } from "./corporate-content-data.js"

// Dynamic imports with `ssr: false`
const OnboardingComponent = dynamic(() => import("./OnboardingComponent"), { ssr: false, loading: () => <LoadingComponent /> })
const VideoSection = dynamic(() => import("./VideoSection"), { ssr: false, loading: () => <LoadingComponent /> })
const OurExperties = dynamic(() => import("./OurExperties"), { ssr: false, loading: () => <LoadingComponent /> })
const InfiniteScrollCorporate = dynamic(() => import("./InfiniteScrollCorporate"), { ssr: false, loading: () => <LoadingComponent /> })
const WhyChooseCorporate = dynamic(() => import("./WhyChooseCorporate"), { ssr: false, loading: () => <LoadingComponent /> })
const CorporateStats = dynamic(() => import("./CorporateStats"), { ssr: false, loading: () => <LoadingComponent /> })
const ContactCorporate = dynamic(() => import("./ContactCorporate"), { ssr: false, loading: () => <LoadingComponent /> })
const CourseContent = dynamic(() => import("../Courses/CourseComponents/CourseContent/CourseContent"), { ssr: false, loading: () => <LoadingComponent /> })
const CorporateFaq = dynamic(() => import("./CorporateFaq"), { ssr: false, loading: () => <LoadingComponent /> })
const StickyButton = dynamic(() => import("../StickyButton/StickyButton.jsx"), { ssr: false, loading: () => <LoadingComponent /> })
const FranchiseAboveFooter = dynamic(() => import("../Franchise/FranchiseAboveFooter.jsx"), { ssr: false, loading: () => <LoadingComponent /> })
const Contactlinks = dynamic(() => import("../Courses/CourseComponents/ContactLinks/ContactLinks.jsx"), { ssr: false, loading: () => <LoadingComponent /> })

const LoadingComponent = () => (
  <div className="flex justify-center items-center py-12">
    <Loader2 className="h-8 w-8 animate-spin text-primary" />
  </div>
)

export default function CorporateTraining() {
  const [mounted, setMounted] = useState(false)
  const [videoSectionRef, videoSectionInView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const isMobile = useMediaQuery({ maxWidth: 767 })

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0)
      document.documentElement.scrollTo(0, 0)
    }

    // Hydrate after mount to reduce blocking JS
    const timer = setTimeout(() => setMounted(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Priority: Banner */}
      {isMobile ? <MobileCorporateBanner /> : <DesktopCorporateBanner />}

      {/* Priority: Onboarding */}
      <OnboardingComponent />

      {/* Hydrate lazy parts only after main UI stabilizes */}
      {mounted && (
        <>
          <InfiniteScrollCorporate />

          <div ref={videoSectionRef}>
            {videoSectionInView && <VideoSection />}
          </div>

          <CourseContent CourseContentData={corporateContentData} title="About Our Program" />
          <OurExperties />
          <WhyChooseCorporate />
          <CorporateFaq faqData={faqData.corporate} mailId="Corporate@sevenmentor.com" />
          <CorporateStats />
          <ContactCorporate altText="Contact Banner" />
          <StickyButton />
          <Contactlinks whatsappno="7360000325" phoneno="7360000325" />
          <FranchiseAboveFooter
            mailId="corporate@sevenmentor.com"
            mailSubject="New Corporate Training Form Submission Received"
            userEmailSubject="Thank You For Your Submission."
            formTitle="Enquiry For Corporate Training"
            contactNo="7360000325"
            bannerTitle="Corporate Training"
            emailRoute="/corporate-form"
          />
        </>
      )}
    </>
  )
}







// =======================================================CMS CODE ==============================================




// "use client"

// import { useEffect, useState } from "react"
// import { useInView } from "react-intersection-observer"
// import { Loader2 } from "lucide-react"
// import { useMediaQuery } from "react-responsive"
// import dynamic from "next/dynamic"
// import { useParams } from "next/navigation"

// // Critical: Normal imports
// import MobileCorporateBanner from "./MobileCorporateBanner.jsx"
// import DesktopCorporateBanner from "./DesktopCorporateBanner.jsx"
// import { faqData } from "../../components/Courses/CourseComponents/FaqSection/FaqData.jsx"
// import { corporateContentData } from "./corporate-content-data.js"
// import Seo from "../Seo/Seo.jsx"

// // Dynamic imports with `ssr: false`
// const OnboardingComponent = dynamic(() => import("./OnboardingComponent"), {
//   ssr: false,
//   loading: () => <LoadingComponent />,
// })
// const VideoSection = dynamic(() => import("./VideoSection"), { ssr: false, loading: () => <LoadingComponent /> })
// const OurExperties = dynamic(() => import("./OurExperties"), { ssr: false, loading: () => <LoadingComponent /> })
// const InfiniteScrollCorporate = dynamic(() => import("./InfiniteScrollCorporate"), {
//   ssr: false,
//   loading: () => <LoadingComponent />,
// })
// const WhyChooseCorporate = dynamic(() => import("./WhyChooseCorporate"), {
//   ssr: false,
//   loading: () => <LoadingComponent />,
// })
// const CorporateStats = dynamic(() => import("./CorporateStats"), { ssr: false, loading: () => <LoadingComponent /> })
// const ContactCorporate = dynamic(() => import("./ContactCorporate"), {
//   ssr: false,
//   loading: () => <LoadingComponent />,
// })
// const CourseContent = dynamic(() => import("../Courses/CourseComponents/CourseContent/CourseContent"), {
//   ssr: false,
//   loading: () => <LoadingComponent />,
// })
// const CorporateFaq = dynamic(() => import("./CorporateFaq"), { ssr: false, loading: () => <LoadingComponent /> })
// const StickyButton = dynamic(() => import("../StickyButton/StickyButton.jsx"), {
//   ssr: false,
//   loading: () => <LoadingComponent />,
// })
// const FranchiseAboveFooter = dynamic(() => import("../Franchise/FranchiseAboveFooter.jsx"), {
//   ssr: false,
//   loading: () => <LoadingComponent />,
// })
// const Contactlinks = dynamic(() => import("../Courses/CourseComponents/ContactLinks/ContactLinks.jsx"), {
//   ssr: false,
//   loading: () => <LoadingComponent />,
// })

// const LoadingComponent = () => (
//   <div className="flex justify-center items-center py-12">
//     <Loader2 className="h-8 w-8 animate-spin text-primary" />
//   </div>
// )

// export default function CorporateTraining({ initialData }) {
//   const params = useParams()
//   const slug = params.slug

//   const [mounted, setMounted] = useState(false)
//   const [responseData, setResponseData] = useState(initialData || {})
//   const [videoSectionRef, videoSectionInView] = useInView({ triggerOnce: true, threshold: 0.1 })
//   const isMobile = useMediaQuery({ maxWidth: 767 })

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       window.scrollTo(0, 0)
//       document.documentElement.scrollTo(0, 0)
//     }

//     // Set responseData when initialData changes
//     if (initialData) {
//       setResponseData(initialData)
//       console.log("Corporate Training - Initial Data:", initialData)
//       console.log("Corporate Training - Response Data:", initialData)
//     }

//     // Hydrate after mount to reduce blocking JS
//     const timer = setTimeout(() => setMounted(true), 500)
//     return () => clearTimeout(timer)
//   }, [slug, initialData])


//   // Debug logging
//   useEffect(() => {
//     console.log("Corporate Training - Current responseData:", responseData)
//     console.log("Corporate Training - FAQs:", responseData?.faqs)
//     console.log("Corporate Training - Course Content:", responseData?.coursecontent)
//     console.log("Corporate Training - Meta:", responseData?.meta)
//   }, [responseData])

//   // Dynamic data or fallback to static data
//   const dynamicFaqData = responseData?.faqs || faqData.corporate
//   const dynamicCourseContent = responseData?.coursecontent
//     ? [{ content: responseData.coursecontent }]
//     : corporateContentData
//   const dynamicMeta = responseData?.meta?.[0]

//   const canonicalUrl = `https://www.sevenmentor.com/${slug}`
//   const contactEmail = responseData?.email || "corporate@sevenmentor.com"
//   const contactNo = responseData?.phoneno || "7360000325"
//   const whatsappNo = responseData?.whatsappno || "7360000325"
//   const pageTitle = responseData?.headtitle || "Corporate Training Program"

//   return (
//     <>
//       <Seo
//         title={dynamicMeta?.metaTitle || "Corporate Training Program - SevenMentor"}
//         description={
//           dynamicMeta?.metaDescription || "Transform your workforce with our comprehensive corporate training programs"
//         }
//         keywords={dynamicMeta?.focusKeyword || "corporate training, employee development, professional training"}
//         schema={dynamicMeta?.metaJsSchema || ""}
//         canonicalUrl={canonicalUrl}
//       />

//       {/* Priority: Banner */}
//       {isMobile ? <MobileCorporateBanner /> : <DesktopCorporateBanner />}

//       {/* Priority: Onboarding */}
//       <OnboardingComponent />

//       {/* Hydrate lazy parts only after main UI stabilizes */}
//       {mounted && (
//         <>
//           <InfiniteScrollCorporate />

//           <div ref={videoSectionRef}>{videoSectionInView && <VideoSection />}</div>

//           <CourseContent CourseContentData={responseData.coursecontent || []}title="About Our Program" />

//           <OurExperties />

//           <WhyChooseCorporate />

//           <CorporateFaq faqData={dynamicFaqData} mailId={contactEmail} />

//           <CorporateStats />

//           <ContactCorporate altText="Contact Banner" />

//           <StickyButton mailId={contactEmail} contactNo={contactNo} bannerTitle={pageTitle} />

//           <Contactlinks whatsappno={whatsappNo} phoneno={contactNo} />

//           <FranchiseAboveFooter
//             mailId={contactEmail}
//             mailSubject="New Corporate Training Form Submission Received"
//             userEmailSubject="Thank You For Your Submission."
//             formTitle="Enquiry For Corporate Training"
//             contactNo={contactNo}
//             bannerTitle={pageTitle}
//             emailRoute="/corporate-form"
//           />
//         </>
//       )}
//     </>
//   )
// }

