import React from "react"
import About from "../../AboutUs/About.jsx"
import BlogPage from "../../Blogs/BlogPage.jsx"
import IndividualBlogPage from "../../Blogs/IndivisualBlogPage.jsx"
import Testimonial from "../../Testimonial/Testimonial.jsx"
import PrivacyPolicy from "../../Privacy/PrivacyPolicy.jsx"
import Franchise from "../../Franchise/FranchisePage.jsx"
import CertificatePage from "../../CertificatePage/CertificatePage.jsx"
import Career from "../../Career/Career.jsx"
import HiringPartner from "../../HiringPartner/HiringPartner.jsx"
import Fashion from "../CoursePages/NonITCourses/Fashion.jsx"
import FeedbackPage from "../../FeedbackPage/FeedbackPage.jsx"
import IndividualCareer from "../../Career/IndividualCareer.jsx"
import FreePaidCoursePage from "../../FreePaidCourses/FreePaidCoursePage.jsx"
import FreeIndividualMain from "../../FreePaidCourses/FreeIndividual/FreeIndividualMain.jsx"
import FreeCyberSecurity from "../../FreePaidCourses/FreeIndividual/FreeCourses/FreeCyberSecurity.jsx"
import FreeCLanguage from "../../FreePaidCourses/FreeIndividual/FreeCourses/FreeCLanguage.jsx"
import FreeWebDev from "../../FreePaidCourses/FreeIndividual/FreeCourses/FreeWebDev.jsx"
import FreeCoreJava from "../../FreePaidCourses/FreeIndividual/FreeCourses/FreeCoreJava.jsx"
// import FreeFigma from "../../FreePaidCourses/FreeIndividual/FreeCourses/FreeCCNA.jsx"

// import CorporateBanner from "../../CorporateTraining/CorporateBanner.jsx"
const DataScience = React.lazy(()=> import("../CoursePages/DataScience.jsx") )
const DataAnalytics = React.lazy(()=> import("../CoursePages/DataAnalytics.jsx"))
const InteriorDesign = React.lazy(()=>import("../CoursePages/NonITCourses/InteriorDesign.jsx"))
const CoursePageRouting = [
 
// -----------------------------New Courses--------------------------------------------

// IT Courses
  {
    path: "datascience",
    component: DataScience,
    // component: testingPage,
  },
  {
    path: "dataanalytics",
    component: DataAnalytics,
    // component: testingPage,
  },


  ///Non IT Courses
  {
    path: "interior-design-courses-in-pune.php",
    component: InteriorDesign,
  },
  {
    path: "fashion-designing-course-in-pune.php",
    component: Fashion,
  },


  // ---------------------------------------Common Pages----------------------------------------
  {
    path: "company",
    component: About,
  },
  {
    path: "blog",
    component: BlogPage,
  },
 
  {
    path: "testimonial",
    component: Testimonial,
  },
  {
    path: "privacy-policy",
    component: PrivacyPolicy,
  },
  {
    path: "certificate",
    component: CertificatePage,
  },
  {
    path:"feedback.php",
    component:FeedbackPage
  },
  {
    path: "franchise",
    component: Franchise,
  },
  {
    path: "careers",
    component: Career,
  },
  {
    path: "hiring-partners",
    component: HiringPartner,
  },


  // --------------free courses
  {
    path: "free-paid-courses",
    component: FreePaidCoursePage,
  },
  {
    path: "free-cyber-security",
    component: FreeCyberSecurity,
  },
  {
    path: "free-c-language",
    component: FreeCLanguage,
  },
  {
    path: "free-web-dev-course",
    component: FreeWebDev,
  },

   {
    path: "free-core-java",
    component: FreeCoreJava,
  },

  // {
  //   path: "free-figma-course",
  //   component: FreeFigma,
  // },


  // {
  //   path:"corporate-training",
  //   Component:CorporateBanner
  // }
  {
    path: "careers/:slug",
    component:IndividualCareer
  }
];

export default CoursePageRouting;