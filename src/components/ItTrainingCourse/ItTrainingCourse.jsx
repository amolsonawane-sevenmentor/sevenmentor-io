"use client"

import { useRef, useState, useEffect } from "react"
import { useParams } from "next/navigation"
import dynamic from "next/dynamic"

import CourseBanner from "../Courses/CourseComponents/CourseBanner/CourseBanner.jsx"
import TalkToAdvisor from "../Courses/CourseComponents/TalkToAdvisor/TalkToAdvisor.jsx"
import NavigationBar from "../Courses/CourseComponents/NavigationBar/NavigationBar.jsx"

// Dynamically import components
const CourseRole = dynamic(() => import("../Courses/CourseComponents/CourseRole/CourseRole.jsx"), { ssr: false })
const KeyFeatures = dynamic(() => import("../Courses/CourseComponents/KeyFeatures/KeyFeatures.jsx"), { ssr: false })
const TrustIndexReview = dynamic(() => import("../Courses/CourseComponents/TrustIndexReview/TrustIndexReview.jsx"), {
  ssr: false,
})
const Placement2 = dynamic(() => import("../Courses/CourseComponents/PlacementSection/Placement2.jsx"), { ssr: false })
const WhyChoose = dynamic(() => import("../Courses/CourseComponents/WhyChooseSection/WhyChoose.jsx"), { ssr: false })
const SyllabusSection = dynamic(() => import("../Courses/CourseComponents/SyllabusSection/SyllabusSection.jsx"), {
  ssr: false,
})
const CourseContent = dynamic(() => import("../Courses/CourseComponents/CourseContent/CourseContent.jsx"), {
  ssr: false,
})
const FaqSection = dynamic(() => import("../Courses/CourseComponents/FaqSection/FaqSection.jsx"), { ssr: false })
const AboveFooterForm = dynamic(() => import("../Home/AboveFooterForm/AboveFooterForm.jsx"), { ssr: false })
const CourseProject = dynamic(() => import("../Courses/CourseComponents/CourseProjectSection/CourseProject.jsx"), {
  ssr: false,
})
const CertificateSection = dynamic(
  () => import("../Courses/CourseComponents/CertificateSection/CertificateSection.jsx"),
  { ssr: false },
)
const LearningCurve = dynamic(() => import("../Courses/CourseComponents/LearningCurve/LearningCurve.jsx"), {
  ssr: false,
})

const OtherDemanding = dynamic(() => import("../Courses/CourseComponents/OtherDemanding/OtherDemanding.jsx"), {
  ssr: false,
})
const Contactlinks = dynamic(() => import("../Courses/CourseComponents/ContactLinks/ContactLinks.jsx"), { ssr: false })
const StickyButton = dynamic(() => import("../StickyButton/StickyButton.jsx"), { ssr: false })

import { cfUrl } from "../../services/AxiosInstance.js"
import Seo from "../Seo/Seo.jsx"

const ItTrainingCourse = ({ initialData }) => {
  // const slug = "best-it-training-institute-in-pune.php"
  const params = useParams()
  const slug = params.slug

  const bannerRef = useRef()
  const footerFormRef = useRef()
  const [responseData, setResponseData] = useState(initialData || {})
  const [showLazyComponents, setShowLazyComponents] = useState(false)

  const sections = {
    advisor: useRef(),
    quiz: useRef(),
    features: useRef(),
    skills: useRef(),
    placement: useRef(),
    project: useRef(),
    syllabus: useRef(),
    faq: useRef(),
    whychoose: useRef(),
    studentsprojects: useRef(),
    courseprojects: useRef(),
    trust: useRef(),
    footerform: footerFormRef,
  }

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.scrollTo(0, 0)
    }
    // After 1 second, show the lazy-loaded components
    const timer = setTimeout(() => {
      setShowLazyComponents(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [slug])

  const bannerTitle = responseData?.banner?.[0]?.title || "Best IT Training Institute"
  const whatsappNumber = responseData?.whatsappno || "NA"
  const phoneno = responseData?.phoneno || "NA"
  const contactemail = responseData?.email || "support@sevenmentor.com"
  const title = responseData?.headtitle || "Best IT Training Institute in Pune"
  const pdfUrlPath = responseData?.pdf?.includes("https")
    ? responseData.pdf
    : cfUrl + responseData.pdf || "https://uatapi.sevenmentor.com/uploads/pdf/dummy-1742297692609.pdf"

  const canonicalUrl = `https://www.sevenmentor.com/${slug}`


  return (
    <>

      <Seo
        title={responseData.meta?.[0]?.metaTitle || title}
        description={
          responseData.meta?.[0]?.metaDescription || "Best IT training institute in Pune with expert-led courses"
        }
        keywords={responseData.meta?.[0]?.focusKeyword || "IT training, Pune, programming"}
        schema={responseData.meta?.[0]?.metaJsSchema || ""}
        canonicalUrl={canonicalUrl}
      />

      {/* First three components rendered immediately */}
      <div ref={bannerRef}>
        <CourseBanner
          courseData={{
            title: responseData?.title || "Best IT Training Institute in Pune",
            path: responseData?.banner?.[0]?.path?.includes("https")
              ? responseData?.banner?.[0]?.path
              : cfUrl + responseData?.banner?.[0]?.path || "",
            bulletPath1: responseData?.banner?.[0]?.bulletPath1?.includes("https")
              ? responseData?.banner?.[0]?.bulletPath1
              : cfUrl + responseData?.banner?.[0]?.bulletPath1 || "",
            bulletPath2: responseData?.banner?.[0]?.bulletPath2?.includes("https")
              ? responseData?.banner?.[0]?.bulletPath2
              : cfUrl + responseData?.banner?.[0]?.bulletPath2 || "",
            bulletPath3: responseData?.banner?.[0]?.bulletPath3?.includes("https")
              ? responseData?.banner?.[0]?.bulletPath3
              : cfUrl + responseData?.banner?.[0]?.bulletPath3 || "",
            description1: responseData?.banner?.[0]?.description1 || "",
            description2: responseData?.banner?.[0]?.description2 || "",
            description3: responseData?.banner?.[0]?.description3 || "",
            whatsappnumber: whatsappNumber,
            mailId: contactemail,
            pdfUrlPath: pdfUrlPath,
          }}
          bannerTitle={bannerTitle}
          contactNo={phoneno}
          IsNonCoursePage={true}
        />
      </div>

      <div ref={sections.advisor}>
        <TalkToAdvisor mailId={contactemail} contactNo={phoneno} bannerTitle={bannerTitle} />
      </div>

      <NavigationBar sections={sections} isVisible={true} differentPage={true} />

      {/* Lazy loaded components rendered after 1 second */}
      {showLazyComponents && (
        <>
          <LearningCurve
            imagePath={
              responseData?.curveimage
                ? responseData?.curveimage?.includes("https")
                  ? responseData.curveimage
                  : cfUrl + responseData.curveimage
                : ""
            }
            title={title}
            IsNonCoursePage={true}
          />

          <CourseRole
            title={"Best IT Tr𝗮ining Institute"}
            courseData={responseData.subcoursetags || []}
            skillsRef={sections.skills}
            tools={responseData.tools || []}
          />

          <div ref={sections.placement}>
            <Placement2
              mailId={contactemail}
              contactNo={phoneno}
              bannerTitle={bannerTitle}
              videos={responseData?.ytvideos || []}
            />
          </div>

          <div ref={sections.whychoose}>
            <WhyChoose title={"Best IT Tr𝗮ining Institute"} />
          </div>

          {/* <div ref={sections.syllabus}>
            <SyllabusSection
              title={title}
              pdfUrlPath={pdfUrlPath}
              mailId={contactemail}
              bannerTitle={bannerTitle}
              contactNo={phoneno}
              curriculumData={responseData?.curriculums || []}
            />
          </div> */}

          {/* <CourseSchedule mailId={contactemail} contactNo={phoneno} bannerTitle={bannerTitle} courseName={title} /> */}

          <div ref={sections.courseprojects}>
            <CourseProject CourseProjectData={responseData?.projects || []} />
          </div>

          <CertificateSection mailId={contactemail} bannerTitle={bannerTitle} contactNo={phoneno} />

          <div ref={sections.features}>
            <KeyFeatures />
          </div>

          <CourseContent CourseContentData={responseData.coursecontent || []} />

          <div ref={sections.trust}>
            <TrustIndexReview />
          </div>

          <div ref={sections.faq}>
            <FaqSection
              mailId={contactemail}
              bannerTitle={bannerTitle}
              contactNo={phoneno}
              faqData={responseData?.faqs || []}
            />
          </div>

          {/* <div ref={sections.quiz}>
            <QuizSection
              courseType={responseData?.banner?.[0]?.title || bannerTitle}
              contactNo={phoneno}
              quizData={responseData?.quiz?.[0] || {}}
              contactemail={contactemail}
            />
          </div> */}

          <div>
            <OtherDemanding courses={responseData?.demandingcourses || []} />
          </div>

          <AboveFooterForm ref={footerFormRef} mailId={contactemail} contactNo={phoneno} />

          <Contactlinks courseName={responseData?.headtitle || title} whatsappno={whatsappNumber} phoneno={phoneno} />

          <StickyButton mailId={contactemail} contactNo={phoneno} bannerTitle={bannerTitle} />
        </>
      )}
    </>
  )
}

export default ItTrainingCourse