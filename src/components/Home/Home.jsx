"use client";
import TrustIndexReview from "../Courses/CourseComponents/TrustIndexReview/TrustIndexReview";
// import HomeStickyButton from "../HomeStickyButton/HomeStickyButton";
// import TrustIndexReview from "../Testimonial/TrustIndexReview";
import AwardsSection from "./AwardsSection/AwardsSection";
// import BlogSection from "./BlogSection/BlogSection";
import CourseCarousel from "./CourseCarousel/CourseCarousel";
import EducationStats from "./EducationStats/EducationStats";
import InfiniteScroll from "./HiringCompanies/HiringCompanies";
import HomeBanner from "./HomeBanner/HomeBanner";
import HomeCertifications from "./HomeCertifications/HomeCertifications";
import HomeAffiliation from "./HomeCertifications/HomeAffiliation"
import HomePageFooter from "./HomePageFooter/HomePageFooter";
import OrbitWrapper from "./Orbit/OrbitWrapper";
import UpskillNow from "./UpskillNow/UpskillNow";
import dynamic from "next/dynamic";
import Collaboration from "./Collaboration/Collaboration"
const BlogSection = dynamic(() => import("./BlogSection/BlogSection"), {
  ssr: false,
});
const HomeStickyButton = dynamic(
  () => import("../HomeStickyButton/HomeStickyButton"),
  { srr: false }
);
export default function HomeSection() {
  return (
    <>
      <HomeBanner
        mailId={"registration@sevenmentor.com"}
        contactNo={"7798058777"}
      />
      <EducationStats />
      <OrbitWrapper mailId={"registration@sevenmentor.com"} contactNo={"7798058777"} />
      <CourseCarousel  />
      <HomeAffiliation/>
      <HomeCertifications />
      <Collaboration/>
      <UpskillNow mailId={"registration@sevenmentor.com"} contactNo={"7798058777"} />
      <AwardsSection />
      {/* <HiringCompanie */}
      <InfiniteScroll />
      <TrustIndexReview />
      <BlogSection />
      <HomeStickyButton mailId={"registration@sevenmentor.com"} contactNo={"7798058777"} />
      <HomePageFooter mailId={"registration@sevenmentor.com"} contactNo={"7798058777"} />
    </>
  );
}
