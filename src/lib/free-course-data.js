// import {
//     ShieldCheck,
//     Code2,
//     Network,
//     Brain,
//     Globe,
//     Coffee,
//   } from "lucide-react"

//   export const coursesData = [
//     {
//       id: "free-cyber-security",
//       slug: "malware-in-cyber-security",
//       title: "Malware and its types | Virus, Worms, Trojan, Ransomware Explained | SevenMentor",
//       description: "Gain essential skills to protect systems, detect threats, and secure networks against cyber attacks.",
//       metaDescription:
//         "Learn cybersecurity fundamentals with our free course. Master ethical hacking, network security, and threat detection with hands-on experience.",
//       keywords: ["malware in cyber security", "what is malware", "types of malware", "virus worm trojan ransomware"," malware explained", "cybersecurity tutorial", "trojan horse malware", "ransomware attacks", "malware protection tips", "virus vs worm", "cyber threats"],

//       points: [
//         "Understand Core Cyber Security Principles and Threat Landscapes.",
//         "Learn Ethical Hacking, Network Security, and Risk Management.",
//         "Gain Hands-on Experience with Real-world Security Tools and Simulations.",
//       ],
//       image: "/assets/CourseBannerImages/Ethical_Hacking.webp",
//       videoUrl: "https://youtu.be/bKdrCFJ6370?si=6OW9xYYlvIqy97Kc",
//       icon: <ShieldCheck className="w-5 h-5 text-orange-400" />,
//       rating: 4.9,
//       reviews: 41,
//       courseType: "free",
//       duration: "6 Months",
//       sessions: "12 Sessions",
//       certification: true,
//     },
//     {
//       id: "free-c-language",
//       slug: "learn-c-programming-from-scratch",
//       title: "Learn C Programming from Scratch | Full Beginner-Friendly Tutorial in 2025 | SevenMentor ",
//       description: "Unlock Your Programming Potential with Expert C Coaching",
//       metaDescription:
//         "Master C programming from basics to advanced concepts. Learn memory management, pointers, and data structures with practical projects.",
//       keywords: ["Learn C Programming", "C Programming Tutorial"],
//       points: [
//         "Master C Programming Fundamentals with Practical Examples.",
//         "Understand Memory Management, Pointers, and Data Structures.",
//         "Build Console-based Projects to Strengthen Your Programming Skills.",
//       ],
//       image: "/assets/CourseBannerImages/Full_Stack_Header_Back.webp",
//       videoUrl: "https://youtu.be/JeBgF_ksPEU?si=GDEkkKOiWkdEeofB",
//       icon: <Code2 className="w-5 h-5 text-orange-400" />,
//       rating: 4.9,
//       reviews: 45,
//       courseType: "free",
//       duration: "4 Months",
//       sessions: "10 Sessions",
//       certification: true,
//     },
//     {
//       id: "free-ccna",
//       slug: "the-complete-networking-tutorial",
//       title: "Learn CCNA From Scratch | The Complete Networking Tutorial - SevenMentor",
//       description:
//         "Develop strong networking skills to configure, manage, and troubleshoot Cisco-based networks effectively.",
//       metaDescription:
//         "Prepare for CCNA certification with our comprehensive free course. Learn networking fundamentals, routing, switching, and network security.",
//       keywords: ["Learn CCNA", "Learn CCNA From Scratch", "Complete Networking Tutorial fro free"],
//       points: [
//         "Learn Networking Fundamentals including IPv4/IPv6 and Subnetting.",
//         "Gain Practical Skills in Routing, Switching, and Network Security.",
//         "Prepare for the CCNA Certification with Real-world Lab Simulations.",
//       ],
//       image: "/assets/CourseBannerImages/Machine_Learning_Header.webp",
//       videoUrl: "https://youtu.be/AjxLacAGd8I?si=Qk8fwVgC2ZqgCf0m",
//       icon: <Network className="w-5 h-5 text-orange-400" />,
//       rating: 4.9,
//       reviews: 72,
//       courseType: "free",
//       duration: "5 Months",
//       sessions: "15 Sessions",
//       certification: true,
//     },
//     {
//       id: "free-python",
//       slug: "/python-vs-c-java",
//       title: "Python vs C, C++, Java – Which Language Should You Learn First? - SevenMentor",
//       description: "Advance Your Career with SevenMentor's Industry-Focused Python Training and Projects",
//       metaDescription:
//         "Learn Python programming from scratch. Master data structures, web development with Django/Flask, and build real-world projects.",
//       keywords: ["Python Basics", "Python vs Java", "Python begineers guide", "Java begineers"],
//       points: [
//         "Learn Python fundamentals including variables, loops, and functions.",
//         "Work with popular libraries like NumPy, Pandas, and Matplotlib.",
//         "Build real-world projects including web apps using Django or Flask.",
//       ],
//       image: "/assets/CourseBannerImages/Python_Header.webp",
//       videoUrl: "https://youtu.be/IA41gVyVM2c?si=eOCOja8Mk50792Cc",
//       icon: <Brain className="w-5 h-5 text-orange-400" />,
//       rating: 4.9,
//       reviews: 72,
//       courseType: "free",
//       duration: "6 Months",
//       sessions: "18 Sessions",
//       certification: true,
//     },
//     {
//       id: "web-development",
//       slug: "form-validation-in-javascript",
//       title: "Create Dynamic Web Pages with JavaScript | Form Validation Tutorial for Beginners | SevenMentor",
//       description: "Learn To Build Scalable Web Applications at SevenMentor Institute's Full Stack Training",
//       metaDescription:
//         "Master full-stack web development with HTML5, CSS3, JavaScript, React, and Node.js. Build and deploy complete web applications.",
//       keywords: ["Dynamic Web Pages", "validation Java Script", "𝐈𝐧𝐭𝐫𝐨𝐝𝐮𝐜𝐭𝐢𝐨𝐧 𝐭𝐨 𝐉𝐚𝐯𝐚𝐬𝐜𝐫𝐢𝐩𝐭"],
//       points: [
//         "Create Responsive Websites with HTML5, CSS3, and JavaScript.",
//         "Master Frontend Frameworks like React and Backend with Node.js.",
//         "Deploy Full-Stack Applications to the Cloud.",
//       ],
//       image: "/assets/CourseBannerImages/Full_Stack_Header_Back.webp",
//       videoUrl: "https://youtu.be/lsQ5sRbw8qo?si=Ero1DzviGlWKz5Zn",
//       icon: <Globe className="w-5 h-5 text-orange-400" />,
//       rating: 4.9,
//       reviews: 36,
//       courseType: "free",
//       duration: "8 Months",
//       sessions: "20 Sessions",
//       certification: true,
//     },
//     {
//       id: "free-core-java",
//       slug: "complete-java-programming-course",
//       title: "Complete Java Programming Course 2025 | Java Tutorials for Beginners | SevenMentor",
//       description:
//         "Learn robust programming techniques to build scalable, secure, and object-oriented applications using Core Java.",
//       metaDescription:
//         "Master Core Java programming with OOPs concepts, collections, exception handling, and multithreading. Build enterprise-level applications.",
//       keywords: ["Learn Core Java", "Learn Java From Scratch", "Complete Java Programming Course"],
//       points: [
//         "Master Core Java Concepts like OOPs, Collections, and Exception Handling.",
//         "Learn File Handling, Multithreading, and JDBC with Practical Examples.",
//         "Build Console and GUI-based Projects to Strengthen Your Java Skills.",
//       ],
//       image: "/assets/CourseBannerImages/Full_Stack_Header_Back.webp",
//       videoUrl: "https://youtu.be/WyfdFWSKwl4?si=c1xJ8AYWoDX-TA9h",
//       icon: <Coffee className="w-5 h-5 text-orange-400" />,
//       rating: 4.9,
//       reviews: 41,
//       courseType: "free",
//       duration: "7 Months",
//       sessions: "16 Sessions",
//       certification: true,
//     },
//   ]

//   export function getCourseBySlug(slug) {
//     return coursesData.find((course) => course.slug === slug) || null
//   }

//   export function getAllCourseSlugs() {
//     return coursesData.map((course) => course.slug)
//   }

//   export function getAllCourses() {
//     return coursesData
//   }

//   export function getCourseById(id) {
//     return coursesData.find((course) => course.id === id) || null
//   }







import {
  ShieldCheck,
  Code2,
  Network,
  Brain,
  Globe,
  Coffee,
} from "lucide-react"

export const coursesData = [
  {
    id: "free-cyber-security",
    slug: "malware-in-cyber-security",
    metaTitle: "Malware and its types | Virus, Worms, Trojan, Ransomware Explained | SevenMentor",
    title: " Malware in Cyber Security",
    description: "Gain essential skills to protect systems, detect threats, and secure networks against cyber attacks.",
    metaDescription:
      "Explore Malware and its types including Virus, Worms, Trojan, and Ransomware in this detailed guide by SevenMentor. Learn threats and prevention techniques",
    keywords: ["malware in cyber security", "what is malware", "types of malware", "virus worm trojan ransomware", " malware explained", "cybersecurity tutorial", "trojan horse malware", "ransomware attacks", "malware protection tips", "virus vs worm", "cyber threats"],

    points: [
      "Understand Core Cyber Security Principles and Threat Landscapes.",
      "Learn Ethical Hacking, Network Security, and Risk Management.",
      "Gain Hands-on Experience with Real-world Security Tools and Simulations.",
    ],
    image: "/assets/CourseBannerImages/Ethical_Hacking.webp",
    videoUrl: "https://youtu.be/bKdrCFJ6370?si=6OW9xYYlvIqy97Kc",
    icon: <ShieldCheck className="w-5 h-5 text-orange-400" />,
    rating: 4.9,
    reviews: 41,
    courseType: "free",
    duration: "6 Months",
    sessions: "12 Sessions",
    certification: true,
    mailId: "networking@sevenmentor.com",
    contactNo: "8793910966"
  },
  {
    id: "free-c-language",
    slug: "learn-c-programming-from-scratch",
    metaTitle: "Learn C Programming from Scratch | Full Beginner-Friendly Tutorial in 2025 | SevenMentor",
    title: "Learn C Programming from Scratch",
    description: "Unlock Your Programming Potential with Expert C Coaching",
    metaDescription:
      "Learn C Programming from Scratch in this Full Beginner-Friendly Tutorial by SevenMentor in 2025. Master C basics, syntax, & logic with hands-on coding practice",
    keywords: ["Learn C Programming", "C Programming Tutorial"],
    points: [
      "Master C Programming Fundamentals with Practical Examples.",
      "Understand Memory Management, Pointers, and Data Structures.",
      "Build Console-based Projects to Strengthen Your Programming Skills.",
    ],
    image: "/assets/CourseBannerImages/Full_Stack_Header_Back.webp",
    videoUrl: "https://youtu.be/JeBgF_ksPEU?si=GDEkkKOiWkdEeofB",
    icon: <Code2 className="w-5 h-5 text-orange-400" />,
    rating: 4.9,
    reviews: 45,
    courseType: "free",
    duration: "4 Months",
    sessions: "10 Sessions",
    certification: true,
    mailId: "softwaredevelopment@sevenmentor.com",
    contactNo: "7558330384"
  },
  {
    id: "free-ccna",
    slug: "the-complete-networking-tutorial",
    metaTitle: "Learn CCNA From Scratch | The Complete Networking Tutorial - SevenMentor",
    title: "The Complete Networking Tutorial",
    description:
      "Develop strong networking skills to configure, manage, and troubleshoot Cisco-based networks effectively.",
    metaDescription:
      "Learn CCNA from Scratch with SevenMentor's Complete Networking Tutorial. Understand networking basics, routing, switching, and get ready for CCNA certification",
    keywords: ["Learn CCNA", "Learn CCNA From Scratch", "Complete Networking Tutorial fro free"],
    points: [
      "Learn Networking Fundamentals including IPv4/IPv6 and Subnetting.",
      "Gain Practical Skills in Routing, Switching, and Network Security.",
      "Prepare for the CCNA Certification with Real-world Lab Simulations.",
    ],
    image: "/assets/CourseBannerImages/Machine_Learning_Header.webp",
    videoUrl: "https://youtu.be/AjxLacAGd8I?si=Qk8fwVgC2ZqgCf0m",
    icon: <Network className="w-5 h-5 text-orange-400" />,
    rating: 4.9,
    reviews: 72,
    courseType: "free",
    duration: "5 Months",
    sessions: "15 Sessions",
    certification: true,
    mailId: "networking@sevenmentor.com",
    contactNo: "8793910966"
  },
  {
    id: "free-python",
    slug: "python-vs-c-java",
    metaTitle: "Python vs C, C++, Java – Which Language Should You Learn First? - SevenMentor",
    title: "Python vs C, C++, Java ",
    description: "Advance Your Career with SevenMentor's Industry-Focused Python Training and Projects",
    metaDescription:
      "Python vs C, C++, Java – Which Language Should You Learn First? SevenMentor helps beginners compare features and choose the right language to start coding.",
    keywords: ["Python Basics", "Python vs Java", "Python begineers guide", "Java begineers"],
    points: [
      "Learn Python fundamentals including variables, loops, and functions.",
      "Work with popular libraries like NumPy, Pandas, and Matplotlib.",
      "Build real-world projects including web apps using Django or Flask.",
    ],
    image: "/assets/CourseBannerImages/Python_Header.webp",
    videoUrl: "https://youtu.be/IA41gVyVM2c?si=eOCOja8Mk50792Cc",
    icon: <Brain className="w-5 h-5 text-orange-400" />,
    rating: 4.9,
    reviews: 72,
    courseType: "free",
    duration: "6 Months",
    sessions: "18 Sessions",
    certification: true,
    mailId: "softwaredevelopment@sevenmentor.com",
    contactNo: "7558330384"
  },
  {
    id: "web-development",
    slug: "form-validation-in-javascript",
    metaTitle: "Create Dynamic Web Pages with JavaScript | Form Validation Tutorial for Beginners | SevenMentor",
    title: "𝐈𝐧𝐭𝐫𝐨𝐝𝐮𝐜𝐭𝐢𝐨𝐧 𝐭𝐨 𝐉𝐚𝐯𝐚𝐬𝐜𝐫𝐢𝐩𝐭",
    description: "Learn To Build Scalable Web Applications at SevenMentor Institute's Full Stack Training",
    metaDescription:
      "Master client-side scripting in this Form Validation Tutorial for Beginners by SevenMentor. Learn to create dynamic web pages with JavaScript step by step.",
    keywords: ["Dynamic Web Pages", "validation Java Script", "𝐈𝐧𝐭𝐫𝐨𝐝𝐮𝐜𝐭𝐢𝐨𝐧 𝐭𝐨 𝐉𝐚𝐯𝐚𝐬𝐜𝐫𝐢𝐩𝐭"],
    points: [
      "Create Responsive Websites with HTML5, CSS3, and JavaScript.",
      "Master Frontend Frameworks like React and Backend with Node.js.",
      "Deploy Full-Stack Applications to the Cloud.",
    ],
    image: "/assets/CourseBannerImages/dr.webp",
    videoUrl: "https://youtu.be/lsQ5sRbw8qo?si=Ero1DzviGlWKz5Zn",
    icon: <Globe className="w-5 h-5 text-orange-400" />,
    rating: 4.9,
    reviews: 36,
    courseType: "free",
    duration: "8 Months",
    sessions: "20 Sessions",
    certification: true,
    mailId: "softwaredevelopment@sevenmentor.com",
    contactNo: "7558330384"
  },
  {
    id: "free-core-java",
    slug: "complete-java-programming-course",
    metaTitle: "Complete Java Programming Course 2025 | Java Tutorials for Beginners | SevenMentor",
    title: "Complete Java Programming Course",
    description:
      "Learn robust programming techniques to build scalable, secure, and object-oriented applications using Core Java.",
    metaDescription:
      "Join SevenMentor’s Complete Java Programming Course 2025. Perfect for beginners, this tutorial covers core Java concepts, syntax, OOP, and hands-on coding.",
    keywords: ["Learn Core Java", "Learn Java From Scratch", "Complete Java Programming Course"],
    points: [
      "Master Core Java Concepts like OOPs, Collections, and Exception Handling.",
      "Learn File Handling, Multithreading, and JDBC with Practical Examples.",
      "Build Console and GUI-based Projects to Strengthen Your Java Skills.",
    ],
    image: "/assets/CourseBannerImages/Djaongo_Header.webp",
    videoUrl: "https://youtu.be/WyfdFWSKwl4?si=c1xJ8AYWoDX-TA9h",
    icon: <Coffee className="w-5 h-5 text-orange-400" />,
    rating: 4.9,
    reviews: 41,
    courseType: "free",
    duration: "7 Months",
    sessions: "16 Sessions",
    certification: true,
    mailId: "softwaredevelopment@sevenmentor.com",
    contactNo: "7558330384"
  },
  {
    id: "power-of-probability-data-science",
    slug: "the-secret-power-of-probability-in-data-science",
    metaTitle: "Power of Probability in Data Science | SevenMentor",
    title: "The Secret Power of Probability in Data Science",
    description:
      "Discover how probability shapes every decision in data science! Learn to predict trends, model uncertainty, and make data-driven choices with confidence. Master the tools that transform randomness into reliable insights.",
    metaDescription:
      "Explore the Power of Probability in Data Science with SevenMentor. Learn how probability enhances data-driven decisions and predictive modeling.",
    keywords: [
      "probability in data science",
      "role of probability in data science",
      "probability concepts for data science",
      "probability and statistics in data science",
      "importance of probability in data science",
      "data science probability examples",
      "probability applications in data science",
      "data science probability tutorial",
      "probability for machine learning",
      "SevenMentor data science course",
    ],
    points: [
      "Understand Probability Fundamentals and Their Impact on Data Modeling.",
      "Learn Real-world Applications in Machine Learning and Predictive Analytics.",
      "Gain Practical Skills through Hands-on Projects and Data Simulations.",
    ],
    image: "/assets/freecourses/probability_in_data_science.webp",
    videoUrl: "https://youtu.be/GqixoKRhi_M?si=UVyyhyCzZfdg17qe",
    icon: <ShieldCheck className="w-5 h-5 text-orange-400" />,
    rating: 4.9,
    reviews: 41,
    courseType: "free",
    duration: "1 Months",
    sessions: "6 Sessions",
    certification: true,
    mailId: "hadoop@sevenmentor.com",
    contactNo: "020-71171500",
  },
  {
    id: "hidden-power-of-statistics-in-data-science",
    slug: "hidden-power-of-statistics-in-data-science",
    metaTitle: "Power of Statistics in Data Science | SevenMentor",
    title: "Hidden Power of Statistics in Data Science",
    description:
      "Uncover how statistics power data science! Learn key concepts like probability, hypothesis testing, and data interpretation to turn raw data into smart, evidence-based insights.",
    metaDescription:
      "Learn the Power of Statistics in Data Science with SevenMentor. Master data analysis, predictive modeling, and decision-making using real insights.",
    keywords: [
      "power of statistics in data science",
      "importance of statistics in data science",
      "role of statistics in data science",
      "statistics for data science",
      "statistical analysis in data science",
      "data science statistics tutorial",
      "descriptive statistics in data science",
      "inferential statistics in data science",
      "statistics concepts for data science",
      "SevenMentor data science course",
    ],
    points: [
      "Understand Core Statistical Concepts and Their Role in Data Science.",
      "Learn Probability, Hypothesis Testing, and Predictive Modeling Techniques.",
      "Gain Hands-on Experience with Real-world Datasets and Statistical Tools.",
    ],
    image:
      "/assets/freecourses/Hidden_Power_of_Statistics_in_Data_Science.webp",
    videoUrl: "https://youtu.be/Bag_gNnqqWQ?si=_P3_X7PS8RbldMTo",
    icon: <Code2 className="w-5 h-5 text-orange-400" />,
    rating: 4.9,
    reviews: 48,
    courseType: "free",
    duration: "1 Months",
    sessions: "10 Sessions",
    certification: true,
    mailId: "hadoop@sevenmentor.com",
    contactNo: "020-71171500",
  },
]

export function getCourseBySlug(slug) {
  return coursesData.find((course) => course.slug === slug) || null
}

export function getAllCourseSlugs() {
  return coursesData.map((course) => course.slug)
}

export function getAllCourses() {
  return coursesData
}

export function getCourseById(id) {
  return coursesData.find((course) => course.id === id) || null
}