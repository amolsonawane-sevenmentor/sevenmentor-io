"use client";
// import FormSection from './PlacementComponents/FormSection.jsx';
import PlacementBanner from './PlacementComponents/PlacementBanner.jsx';
import HiringCompanies from "../Home/HiringCompanies/HiringCompanies.jsx"
import PlacedStudents from './PlacementComponents/PlacedStudents.jsx';
import AboveFooterForm from "../Home/AboveFooterForm/AboveFooterForm.jsx"
import PlacementGlory from './PlacementComponents/PlacementGlory.jsx';
// import PlacementGaurantee from './PlacementComponents/PlacementGaurantee.jsx';
import ContactTeam from './PlacementComponents/ContactTeam.jsx';
import PlacementAccordion from './PlacementComponents/PlacementAccordian.jsx';
import TrustIndexReview from "../Courses/CourseComponents/TrustIndexReview/TrustIndexReview.jsx"
// import IndustrySection2 from "../Home/IndustrySection/IndustrySection2.jsx"
import FaqSection from '../Courses/CourseComponents/FaqSection/FaqSection.jsx';
import { faqData } from "../../components/Courses/CourseComponents/FaqSection/FaqData.jsx";
import StickyButton from '../StickyButton/StickyButton.jsx';
export default function PlacementPage() {
  return (
    <div>
      <PlacementBanner />
      <PlacedStudents/>
      <PlacementAccordion/>
      <PlacementGlory/>
      
      <ContactTeam/>
      <HiringCompanies />
      <TrustIndexReview/>
      {/* <IndustrySection2/> */}
      <FaqSection faqData={faqData.placement} />
      {/* <PlacementGaurantee/> */}
      <AboveFooterForm mailId={"registration@sevenmentor.com"} contactNo={"7798058777"} bannerTitle={"Individual Course At SevenMentor"} />
      <StickyButton mailId={"registration@sevenmentor.com"} contactNo={"7798058777"} bannerTitle={"Individual Course At SevenMentor"}/>
      {/* <FormSection /> */}
    </div>
  );
}
