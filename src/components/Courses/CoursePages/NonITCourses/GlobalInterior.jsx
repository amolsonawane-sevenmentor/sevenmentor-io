import React from "react";
import DesignBanner from "./NonITComponents/DesignBanner/DesignBanner.jsx";
import CourseModuleAccordion from "./NonITComponents/CourseModuleAccordian/CourseModuleAccordian.jsx";
import StudentWork from "./NonITComponents/StudentWork/StudentWork.jsx";
import EventUpdates from "./NonITComponents/EventUpdates/EventUpdates.jsx";
import JobRoles from "./NonITComponents/JobRoles/JobRoles.jsx";
// import img from "/assets/InteriorModuleImages/interior.webp"
import courseModules from "./NonITComponents/CourseModuleAccordian/CourseModuleData.js";
import AboveFooterForm from "../../../Home/AboveFooterForm/AboveFooterForm.jsx";
import NonITFaqs from "./NonITComponents/NonITFaqs/NonITFaqs.jsx";
import { faqData } from "./NonITComponents/NonITFaqs/NonITFaqsData.js";
import NonITOtherDemandingCourses from "./NonITComponents/NonITOtherDemandingCourses.jsx/NonITOtherDemandingCourses.jsx";
import courses from "./NonITComponents/NonITOtherDemandingCourses.jsx/NonITOtherDemandingData.js";
import KeyFeatures from "./NonITComponents/KeyFeatures/KeyFeatures.jsx";
import NonITCertificateSection from "./NonITComponents/NonITCertificateSection/NonITCertificateSection.jsx";
import NonITWhyChoose from "./NonITComponents/NonITWhyChoose/NonITWhyChoose.jsx";
import NonITCourseContent from "./NonITComponents/NonITCourseContent/NonITCourseContent.jsx";
import StickyButton from "../../../StickyButton/StickyButton.jsx";
import TalkToAdvisor from "../../CourseComponents/TalkToAdvisor/TalkToAdvisor.jsx";
import AcademicCollaboration from "./NonITComponents/AcademicCollaboration/AcademicCollaboration.jsx";
import Contactlinks from "../../CourseComponents/ContactLinks/ContactLinks.jsx";

function GlobalInterior() {
  const selectedDomain = "interiorDesign";

  return (
    <>
      <DesignBanner
        imagePath={"/assets/bannerImages/interiorBanner.webp"}
        altText="Interior Design Banner"
        contactNo={"02071173070"}
      />
      <TalkToAdvisor mailId={"cad@sevenmentor.com"} contactNo={"02071173070"} bannerTitle={"Interior Design Course"} />
      <NonITWhyChoose courseName={selectedDomain} />
      <JobRoles type={"interior"} />
      <CourseModuleAccordion
        domain={selectedDomain}
        courseModules={courseModules[selectedDomain]}
      />
      <StudentWork type={"interior"} />
      <EventUpdates />
      <AcademicCollaboration />
      <KeyFeatures courseName={selectedDomain} img={'/assets/NonITCourseImages/Key_Features_Interior.webp'} />
      <NonITCertificateSection />
      <NonITCourseContent courseName={"globalInterior"} />
      <NonITFaqs faqData={faqData.globalInteriorDesign} />
      <NonITOtherDemandingCourses data={courses} domain={selectedDomain} />
      <AboveFooterForm />
      <Contactlinks courseName={"Interior Design"} whatsappno={"8793621390"} phoneno={"02071173070"} />

      <StickyButton mailId={"cad@sevenmentor.com"} contactNo={"02071173070"} bannerTitle={"Interior Design"} />
    </>
  );
}

export default GlobalInterior;
