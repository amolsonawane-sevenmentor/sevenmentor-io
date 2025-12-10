"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"

// Critical components loaded immediately
import DesignBanner from "./NonITComponents/DesignBanner/DesignBanner.jsx"
import TalkToAdvisor from "../../CourseComponents/TalkToAdvisor/TalkToAdvisor.jsx"
import StickyButton from "../../../StickyButton/StickyButton.jsx"

// Dynamically import the rest with SSR disabled
const NonITWhyChoose = dynamic(() => import("./NonITComponents/NonITWhyChoose/NonITWhyChoose.jsx"), { ssr: false })
const JobRoles = dynamic(() => import("./NonITComponents/JobRoles/JobRoles.jsx"), { ssr: false })
const CourseModuleAccordion = dynamic(
  () => import("./NonITComponents/CourseModuleAccordian/CourseModuleAccordian.jsx"),
  { ssr: false },
)
const StudentWork = dynamic(() => import("./NonITComponents/StudentWork/StudentWork.jsx"), { ssr: false })
const EventUpdates = dynamic(() => import("./NonITComponents/EventUpdates/EventUpdates.jsx"), { ssr: false })
const AcademicCollaboration = dynamic(
  () => import("./NonITComponents/AcademicCollaboration/AcademicCollaboration.jsx"),
  { ssr: false },
)
const KeyFeatures = dynamic(() => import("./NonITComponents/KeyFeatures/KeyFeatures.jsx"), { ssr: false })
const NonITCertificateSection = dynamic(
  () => import("./NonITComponents/NonITCertificateSection/NonITCertificateSection.jsx"),
  { ssr: false },
)
const NonITCourseContent = dynamic(() => import("./NonITComponents/NonITCourseContent/NonITCourseContent.jsx"), {
  ssr: false,
})
const NonITFaqs = dynamic(() => import("./NonITComponents/NonITFaqs/NonITFaqs.jsx"), { ssr: false })
const NonITOtherDemandingCourses = dynamic(
  () => import("./NonITComponents/NonITOtherDemandingCourses.jsx/NonITOtherDemandingCourses.jsx"),
  { ssr: false },
)
const AboveFooterForm = dynamic(() => import("../../../Home/AboveFooterForm/AboveFooterForm.jsx"), { ssr: false })
const ContactLinks = dynamic(() => import("../../CourseComponents/ContactLinks/ContactLinks.jsx"), { ssr: false })

// Import data files
import courseModules from "./NonITComponents/CourseModuleAccordian/CourseModuleData.js"
import { faqData } from "./NonITComponents/NonITFaqs/NonITFaqsData.js"
import courses from "./NonITComponents/NonITOtherDemandingCourses.jsx/NonITOtherDemandingData.js"

function GlobalFashion() {
  const selectedDomain = "fashionDesign"
  const [showLazyComponents, setShowLazyComponents] = useState(false)

  useEffect(() => {
    // Scroll to top on component mount
    if (typeof document !== "undefined") {
      document.documentElement.scrollTo(0, 0)
    }

    // After 1 second, show the lazy-loaded components
    const timer = setTimeout(() => {
      setShowLazyComponents(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Critical components rendered immediately */}
      <DesignBanner imagePath={"/assets/bannerImages/fashionBanner.webp"} altText="Fashion Design Banner" 
      contactNo={"02071173070"} />

      {/* Lazy loaded components rendered after delay */}
      {showLazyComponents && (
        <>
          <TalkToAdvisor
            mailId={"cad@sevenmentor.com"}
            contactNo={"02071173070"}
            bannerTitle={"Fashion Design Course"}
            id="TopForm"
          />
          <NonITWhyChoose courseName={selectedDomain} />
          <JobRoles type={"fashion"} />
          <CourseModuleAccordion domain={selectedDomain} courseModules={courseModules[selectedDomain]} />
          <StudentWork type={"fashion"} />
          <EventUpdates />
          <AcademicCollaboration />
          <KeyFeatures courseName={selectedDomain} img={"/assets/NonITCourseImages/Key_Features_Fashion.webp"} />
          <NonITCertificateSection />
          <NonITCourseContent courseName={"globalFashion"} />
          <NonITFaqs faqData={faqData.globalFashionDesign} />
          <NonITOtherDemandingCourses data={courses} domain={selectedDomain} />
          <AboveFooterForm />
          <ContactLinks courseName={"Fashion Design Course"} whatsappno={"8793621390"} phoneno={"02071173070"} />

          <StickyButton mailId={"cad@sevenmentor.com"} contactNo={"02071173025"} bannerTitle={"Fashion Design Course"} />
        </>
      )}
    </>
  )
}

export default GlobalFashion
