// import pyton from "../../../public"



// Available domains/categories
export const domains = [
  "TRENDING COURSES",
 
]

// Course types
export const courseTypes = ["ALL COURSES", "FREE COURSES", "PAID COURSES"]

// Free courses data organized by domain
export const freeCourses = {
 
 
  "TRENDING COURSES": [
    // ---------------------------------Cloud computing


    
      {
        id: "7",
        title: "Free Cyber Security",
        description: "Gain essential skills to protect systems, detect threats, and secure networks against cyber attacks.",
        image:"/assets/CarouselImages/cloudcomputing/cybersecurity.webp",
        rating: 4.9,
        reviews: 41,
        link: "/free-cyber-security",
        courseType: "free",
      },


      {
        id: "7",
        title: "Free Core Java",
        description: "Learn robust programming techniques to build scalable, secure, and object-oriented applications using Core Java.",
        image:"/assets/CarouselImages/development/java.webp",
        rating: 4.9,
        reviews: 41,
        link: "/free-core-java",
        courseType: "free",
      },
     

    {
      id: "tr5",
      title: "Free CCNA Course",
     description: "Develop strong networking skills to configure, manage, and troubleshoot Cisco-based networks effectively.",
      image: "/assets/CarouselImages/cloudcomputing/ccna.webp",
      rating: 4.9,
      reviews: 72,
      link: "/free-ccna-course",
      courseType: "free",
    },
    {
      id: "tr1",
      title: "Free Python Course",
     description: "Advance Your Career with SevenMentor’s Industry-Focused Python Training and Projects",
      image: "/assets/CarouselImages/datascience/python.webp",
      rating: 4.9,
      reviews: 72,
      link: "/free-python-course",
      courseType: "free",
    },

     {
        id: "9",
        title: "Web Development",
        description: "Learn To Build Scalable Web Applications at SevenMentor Institute’s Full Stack Training",
        image: "/assets/CarouselImages/development/reactjs.webp",
        rating: 4.9,
        reviews: 36,
        link: "/free-web-dev-course",
        courseType: "free",
      },

      {
        id: "6",
        title: "Free C Programming Course",
        description: "Unlock Your Programming Potential with Expert C Coaching",
        image: "/assets/CarouselImages/development/fullstack.webp",
        rating: 4.9,
        reviews: 45,
        link: "/free-c-language",
        courseType: "free",
      },

   
  ],
  
}

const freePaidCourseData = { freeCourses, domains, courseTypes }
export default freePaidCourseData;