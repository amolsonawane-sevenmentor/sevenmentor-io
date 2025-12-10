import {
  faNetworkWired,
  faShieldAlt,
  faCode,
  faDatabase,
  faBullhorn,
  faSearch,
  faCloud,
  faUserShield,
  faUserLock,
  faMobileAlt,
  faRocket,
  faWallet,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faPython } from "@fortawesome/free-brands-svg-icons";

const NavbarPaths = {
  itdomains: [
    {
      id: "datascience",
      name: "DATA SCIENCE",
      icon: faNetworkWired,
      courses: [
        {
          name: "DATA SCIENCE",
          path: "/data-science-course",
          imgSrc:
            "/assets/dropdownmenu/Hadoop/dataanalytics/Data_Science_Course_webp.webp",
          duration: "6 Months",
          icon: faCloud,
        },
        {
          name: "DATA ANALYTICS",
          path: "/data-analytics-course",
          imgSrc:
            "/assets/dropdownmenu/Hadoop/dataanalytics/Data_Analytics_webp.webp",
          duration: "6 Months",
          icon: faCloud,
        },
        {
          name: "ADVANCED GENERATIVE AI",
          path: "/generative-ai-course",
          imgSrc: "/assets/dropdownmenu/GEN_AI.webp",
          duration: "6 Months",
          icon: faCloud,
        },
        {
          name: "AGENTIC AI",
          path: "/agentic-ai-course",
          imgSrc: "/assets/dropdownmenu/Machine_Learning.webp",
          duration: "6 Months",
          icon: faCloud,
        },

        {
          name: "FINANCIAL ANALYST",
          path: "/financial-analyst-course",
          imgSrc:
            "/assets/dropdownmenu/SAP/SAP_Financial_Accounting_and_Controlling01.webp",
          duration: "6 Months",
          icon: faCloud,
        },
        {
          name: "Pyspark",
          path: "/pyspark-course",
          imgSrc: "/assets/dropdownmenu/Databricks.webp",
          duration: "6 Months",
          icon: faRocket,
        },
        {
          name: "DATA SCIENCE WITH AI",
          path: "/data-science-and-ai-course",
          imgSrc:
            "/assets/dropdownmenu/Hadoop/dataanalytics/Data_Science_with_Python_webp.webp",
          duration: "6 Months",
          icon: faCloud,
        },
        {
          name: "Databricks",
          path: "/databricks-course",
          imgSrc: "/assets/dropdownmenu/Databricks.webp",
          duration: "6 months",
          icon: faMobileAlt, // Mobile icon for mobile hacking
        },

        {
          name: "PYTHON",
          path: "/python-course",
          imgSrc: "/assets/dropdownmenu/Python.webp",
          duration: "6 months",
          icon: faMobileAlt, // Mobile icon for mobile hacking
        },

        {
          name: "MACHINE LEARNING",
          path: "/machine-learning-course",
          imgSrc: "/assets/dropdownmenu/Machine_Learning.webp",
          duration: "6 Months",
          icon: faCloud,
        },
        // {
        //   name: "DATA ANALYTICS",
        //   path: "/dataanalytics",
        //   imgSrc: dataanalytics,
        //   duration: "6 Months",
        //   icon: faCloud,
        // },
        {
          name: "BUSINESS ANALYST",
          path: "/business-analyst-course",
          imgSrc: "/assets/dropdownmenu/HR/Business_Analyst.webp",
          duration: "4 months",
          icon: faWallet,
        },
        // {
        //   name: "ARTIFICIAL INTELLIGENCE (DEEP LEARNING)",
        //   path: "/artificial-intelligence-training-courses-in-pune.php",
        //   imgSrc:
        //     "/assets/dropdownmenu/Hadoop/dataanalytics/Artificial_Intelligence_webp.webp",
        //   duration: "6 Months",
        //   icon: faCloud,
        // },
        // {
        //   name: "PROMPT ENGINEERING",
        //   path: "/data-science/prompt-engineering",
        //   imgSrc: boy,
        //   duration: "6 Months",
        //   icon: faCloud,
        // },
        {
          name: "DATA ENGINEERING",
          path: "/data-engineering-course",
          imgSrc:
            "/assets/dropdownmenu/Hadoop/dataanalytics/Data_Engineering_webp.webp",
          duration: "6 Months",
          icon: faCloud,
        },
        {
          name: "FULL STACK WITH PYTHON COURSE",
          path: "/full-stack-python-course",
          imgSrc:
            "/assets/dropdownmenu/Hadoop/dataanalytics/Full_Stack_With_Python_webp.webp",
          duration: "6 Months",
          icon: faCloud,
        },
        {
          name: "R PROGRAMMING",
          path: "/r-programming-course",
          imgSrc:
            "/assets/dropdownmenu/Hadoop/dataanalytics/R_Programming_webp.webp",
          duration: "6 Months",
          icon: faCloud,
        },
        {
          name: "DJANGO",
          path: "/django-course",
          imgSrc: "/assets/dropdownmenu/Django.webp",
          duration: "6 Months",
          icon: faCloud,
        },
        // {
        //   name: "DSA",
        //   path: "/data-science/dsa",
        //   imgSrc: ds,
        //   duration: "6 Months",
        //   icon: faCloud,
        // },
        {
          name: "POWER BI",
          path: "/power-bi-course",
          imgSrc:
            "/assets/dropdownmenu/Hadoop/dataanalytics/Power_BI_webp.webp",
          duration: "6 Months",
          icon: faCloud,
        },
        {
          name: "TABLEAU",
          path: "/tableau-course",
          imgSrc: "/assets/dropdownmenu/tableau.webp",
          duration: "6 Months",
          icon: faCloud,
        },
        {
          name: "SQL",
          path: "/sql-course",
          imgSrc: "/assets/dropdownmenu/SQL.webp",
          duration: "6 Months",
          icon: faCloud,
        },
        {
          name: "RPA COURSE",
          path: "/rpa-course",
          imgSrc:
            "/assets/dropdownmenu/Hadoop/dataanalytics/R_Programming_webp.webp",
          duration: "6 Months",
          icon: faCloud,
        },
        // {
        //   name: "RPA-BLUE PRISM",
        //   path: "/rpa-blue-prism",
        //   imgSrc: boy,
        //   duration: "6 Months",
        //   icon: faCloud,
        // },
        // {
        //   name: "ETL",
        //   path: "/data-science/etl",
        //   imgSrc: boy,
        //   duration: "6 Months",
        //   icon: faCloud,
        // },
        {
          name: "PL-SQL",
          path: "/plsql-course",
          imgSrc: "/assets/dropdownmenu/PL_SQL.webp",
          duration: "6 Months",
          icon: faCloud,
        },
        {
          name: "Advanced Excel",
          path: "/advanced-excel-course",
          imgSrc:
            "/assets/dropdownmenu/Hadoop/jobguaranteepackages/Advanced_Excel_webp.webp",
          icon: faCloud,
        },
        {
          name: "AI Course",
          path: "/ai-course",
          imgSrc: "/assets/dropdownmenu/Machine_Learning.webp",
          duration: "6 Months",
          icon: faCloud,
        },
      ],
    },
    {
      id: "softwaredevelopment",
      name: "SOFTWARE DEVELOPMENT",
      icon: faCode,
      subdomains: [
        {
          id: "fullstackdevelopment",
          name: "FULLSTACK DEVELOPMENT",
          icon: faNetworkWired,
          courses: [
            {
              name: "WEB FULL STACK DEVELOPMENT",
              path: "/full-stack-developer-course",
              imgSrc:
                "/assets/dropdownmenu/fsdevelopment/FullStack_with_web_development.webp",
              duration: "6 Months",
              icon: faCloud,
            },
            {
              name: "MOBILE APP DEVELOPMENT",
              path: "/mobile-app-development-course",
              imgSrc:
                "/assets/dropdownmenu/Hadoop/dataanalytics/Artificial_Intelligence_webp.webp",
              duration: "6 Months",
              icon: faCloud,
            },
            {
              name: "FULL STACK JAVA",
              path: "/full-stack-java-course",
              imgSrc:
                "/assets/dropdownmenu/fsdevelopment/FullStack_With_Java.webp",
              duration: "6 Months",
              icon: faCloud,
            },
            //     {
            //       name: "PYTHON FULL STACK DEVELOPMENT",
            //       path: "/networking/cloud-computing/devops",
            //       imgSrc: pythonfullstack,
            //       duration: "6 Months",
            //       icon: faCloud,
            //     },
            // {
            //   name: "FULL STACK DEVELOPMENT",
            //   path: "/full-stack-training-institute-in-pune.php",
            //   imgSrc: qafullstack,
            //   duration: "6 Months",
            //   icon: faCloud,
            // },
            {
              name: "DOT NET FULL STACK DEVELOPMENT",
              path: "/dot-net-full-stack-course",
              imgSrc:
                "/assets/dropdownmenu/fsdevelopment/Dot_Net_Fu_Stack_Course.webp",
              duration: "6 Months",
              icon: faCloud,
            },
            //     {
            //       name: "DATA STRUCTURE AND ALGORITHM WITH FULL STACK ",
            //       path: "/networking/cloud-computing/datastructureandalgorithmwithfullstackdevelopment",
            //       imgSrc: dswithfullstack,
            //       duration: "6 Months",
            //       icon: faCloud,
            //     },
            //     {
            //       name: "DATA STRUCTURE AND ALGORITHM WITH JAVA",
            //       path: "/networking/cloud-computing/datastructureandalgorithmwithjava",
            //       imgSrc: dswithjava,
            //       duration: "6 Months",
            //       icon: faCloud,
            //     },
            {
              name: "MEAN STACK",
              path: "/mean-stack-course",
              imgSrc: "/assets/dropdownmenu/fsdevelopment/Mean_Stack.webp",
              duration: "6 Months",
              icon: faCloud,
            },
            {
              name: "MERN STACK",
              path: "/mern-stack-course",
              imgSrc: "/assets/dropdownmenu/fsdevelopment/Mern_Stack.webp",
              duration: "6 Months",
              icon: faCloud,
            },
          ],
        },
        {
          id: "frontenddevelopment",
          name: "FRONT END DEVELOPMENT",
          icon: faNetworkWired,
          courses: [
            {
              name: "WEB DEVELOPMENT",
              path: "/web-development-course",
              imgSrc: "/assets/dropdownmenu/Web_Development.webp",
              duration: "6 Months",
              icon: faCloud,
            },
            {
              name: "FRONTEND DEVELOPMENT",
              path: "/front-end-development-course",
              imgSrc: "/assets/dropdownmenu/UI_UX_Training.webp",
              duration: "6 Months",
              icon: faCloud,
            },
            {
              name: "REACT JS",
              path: "/react-js-course",
              imgSrc: "/assets/dropdownmenu/fsdevelopment/React_JS.webp",
              duration: "6 Months",
              icon: faCloud,
            },
            {
              name: "ANGULAR JS",
              path: "/angular-16-course",
              imgSrc: "/assets/dropdownmenu/Angular_16.webp",
              duration: "6 Months",
              icon: faCloud,
            },
          ],
        },
        {
          id: "backenddevelopment",
          name: "BACK END DEVELOPMENT",
          icon: faShieldAlt,
          courses: [
            {
              name: "C & C++",
              path: "/c-and-c-course",
              imgSrc: "/assets/dropdownmenu/C_&_C++.webp",
              duration: "6 months",
              icon: faUserShield, // Shield icon representing security
            },
            {
              name: "JAVA PROGRAMMING",
              path: "/java-course",
              imgSrc: "/assets/dropdownmenu/Java_Classes.webp",
              duration: "6 months",
              icon: faUserLock, // Lock and user icon representing ethical hacking
            },
            //     {
            //       name: "JAVA WITH SQL",
            //       path: "/java-with-sql",
            //       imgSrc: boy,
            //       duration: "6 months",
            //       icon: faMobileAlt, // Mobile icon for mobile hacking
            //     },
            //     {
            //       name: "JAVA FRAMEWORKS",
            //       path: "/java-frameworks",
            //       imgSrc: javaframework,
            //       duration: "6 months",
            //       icon: faMobileAlt, // Mobile icon for mobile hacking
            //     },
            //     {
            //       name: "C# & .NET TECHNOLOGIES",
            //       path: "/csharp-dotnet-technologies",
            //       imgSrc: dotnetfs,
            //       duration: "6 months",
            //       icon: faMobileAlt, // Mobile icon for mobile hacking
            //     },

            //     {
            //       name: "DJAANGO TRAINING",
            //       path: "/djaango-training",
            //       imgSrc: django,
            //       duration: "6 months",
            //       icon: faMobileAlt, // Mobile icon for mobile hacking
            //     },
            //     {
            //       name: "NODE JS & EXPRESS JS",
            //       path: "/node-js-express-js",
            //       imgSrc: boy,
            //       duration: "6 months",
            //       icon: faMobileAlt, // Mobile icon for mobile hacking
            //     },
          ],
        },
        {
          id: "softwaretesting",
          name: "SOFTWARE TESTING",
          icon: faDatabase,
          courses: [
            {
              name: "SOFTWARE TESTING",
              path: "/software-testing-course",
              imgSrc: "/assets/dropdownmenu/Software_Testing.webp",
              duration: "6 months",
              icon: faPython, // Python logo for Python-based data analytics
            },
            // {
            //   name: "JIRA",
            //   path: "/jira",
            //   imgSrc: boy,
            //   duration: "6 months",
            //   icon: faBrain,
            // },
            // {
            //   name: "AUTOMATION TESTING",
            //   path: "/automation-testing",
            //   imgSrc: boy,
            //   duration: "6 months",
            //   icon: faBrain,
            // },
            // {
            //   name: "SELENIUM WITH CORE JAVA",
            //   path: "/selenium-with-core-java",
            //   imgSrc: seleniumwithjava,
            //   duration: "6 months",
            //   icon: faBrain,
            // },
            // {
            //   name: "API TESTING (POSTMAN)",
            //   path: "/api-testing-postman",
            //   imgSrc: boy,
            //   duration: "6 months",
            //   icon: faBrain,
            // },
          ],
        },
        {
          id: "datastructure",
          name: "DATA STRUCTURE",
          icon: faBullhorn,
          courses: [
            // {
            //   name: "DATA STRUCTURE WITH C & C++",
            //   path: "/data-structures-with-c--c-course",
            //   imgSrc:
            //     "/assets/dropdownmenu/Data_Structure_and_algorithum_with_C_and_C++.webp",
            //   duration: "6 months",
            //   icon: faBullhorn, // Bullhorn icon for digital marketing campaigns
            // },
            {
              name: "DATA STRUCTURE AND ALGORITHM",
              path: "/data-structures-algorithms-course",
              imgSrc:
                "/assets/dropdownmenu/Data_Structure_and_algorithum_with_fullstack.webp",
              duration: "6 months",
              icon: faSearch,
            },
          ],
        },
        {
          id: "designing",
          name: "DESIGNING",
          icon: faBullhorn,
          courses: [
            {
              name: "UI/UX TRAINING",
              path: "/uiux-design-course",
              imgSrc: "/assets/dropdownmenu/UI_UX_Training.webp",
              duration: "6 months",
              icon: faBullhorn, // Bullhorn icon for digital marketing campaigns
            },
            // {
            //   name: "WEB DESIGN",
            //   path: "/web-design",
            //   imgSrc: boy,
            //   duration: "6 months",
            //   icon: faBullhorn, // Bullhorn icon for digital marketing campaigns
            // },
            // {
            //   name: "GRAPHICS DESIGN",
            //   path: "/graphics-design",
            //   imgSrc: boy,
            //   duration: "6 months",
            //   icon: faBullhorn, // Bullhorn icon for digital marketing campaigns
            // },
          ],
        },
      ],
    },
    {
      id: "cybersecurity",
      name: "CYBER SECURITY",
      icon: faNetworkWired,
      courses: [
        // {
        //   name: "CYBER SECURITY JOB READY PROGRAM",
        //   path: "/networking/cyber-security/job-ready-program",
        //   imgSrc: cybersecurity,
        //   duration: "6 months",
        //   icon: faBullhorn, // Bullhorn icon for digital marketing campaigns
        // },
        {
          name: "CYBER SECURITY",
          path: "/cyber-security-course",
          imgSrc:
            "/assets/dropdownmenu/Networking/Cyber_Security_Job_Guarantee_Program.webp",
          duration: "6 months",
          icon: faSearch,
        },
        {
          name: "CERTIFIED ETHICAL HACKING V12 COURSE",
          path: "/ethical-hacking-course",
          imgSrc:
            "/assets/dropdownmenu/Networking/Certified_Ethical_Hacking_V12_Course.webp",
          duration: "6 months",
          icon: faSearch,
        },
        {
          name: "SOC Training",
          path: "/security-operations-center-course",
          imgSrc: "/assets/dropdownmenu/Soc.webp",
          duration: "6 months",
          icon: faBullhorn, // Bullhorn icon for digital marketing campaigns
        },
        {
          name: "HACKING FORENSIC INVESTIGATOR ",
          path: "/chfi-course",
          imgSrc:
            "/assets/dropdownmenu/Networking/Hacking_Forensic_Investigator.webp",
          duration: "6 months",
          icon: faFacebookF,
        },
        {
          name: "WEB APPLICATION PENETRATION TESTING",
          path: "wapt-course",
          imgSrc:
            "/assets/dropdownmenu/Networking/Web_Application_Penetration_Testing.webp",
          duration: "6 months",
          icon: faDollarSign, // Dollar sign icon for Pay Per Click advertising
        },
        {
          name: "Cyber Security Analyst Program",
          path: "/cyber-security-analyst-course",
          imgSrc:
            "/assets/dropdownmenu/Networking/Cyber_Security_Job_Guarantee_Program.webp",
          duration: "6 months",
          icon: faDollarSign,
        },
      ],
    },
    {
      id: "cloudcomputing",
      name: "CLOUD COMPUTING",
      icon: faNetworkWired,
      courses: [
        {
          name: "Amazon Web Services (AWS)",
          path: "/aws-course",
          imgSrc: "/assets/dropdownmenu/Networking/Amezon_Web_Services.webp",
          duration: "6 Months",
          icon: faCloud,
        },
        {
          name: "Azure",
          path: "/azure-course",
          imgSrc: "/assets/dropdownmenu/Networking/Azure.webp",
          duration: "6 Months",
          icon: faCloud,
        },
        {
          name: "Google Cloud Platform",
          path: "/google-cloud-platform-course",
          imgSrc: "/assets/dropdownmenu/Networking/Google_Cloud_Platform.webp",
          duration: "6 Months",
          icon: faCloud,
        },
        // {
        //   name: "Devops",
        //   path: "/networking/cloud-computing/devops",
        //   imgSrc: devops,
        //   duration: "6 Months",
        //   icon: faCloud,
        // },
        {
          name: "CLOUD COMPUTING",
          path: "/cloud-computing-course",
          imgSrc: "/assets/dropdownmenu/Networking/Devops.webp",
          duration: "6 Months",
          icon: faCloud,
        },
        {
          name: "CCNA",
          path: "/ccna-course",
          imgSrc:
            "/assets/dropdownmenu/Networking/Cyber_Security_Job_Guarantee_Program.webp",
          duration: "6 months",
          icon: faBullhorn, // Bullhorn icon for digital marketing campaigns
        },
        {
          name: "CCNP R&S",
          path: "/ccnp-course",
          imgSrc: "/assets/dropdownmenu/C_&_C++.webp",
          duration: "6 months",
          icon: faBullhorn, // Bullhorn icon for digital marketing campaigns
        },
        {
          name: "DEVOPS TRAINING",
          path: "/devops-course",
          imgSrc: "/assets/dropdownmenu/Networking/Devops.webp",
          duration: "6 months",
          icon: faBullhorn, // Bullhorn icon for digital marketing campaigns
        },
        {
          name: "LINUX TRAINING",
          path: "/linux-course",
          imgSrc: "/assets/dropdownmenu/Networking/Linux_Training.webp",
          duration: "6 months",
          icon: faBullhorn, // Bullhorn icon for digital marketing campaigns
        },

        {
          name: "SALESFORCE",
          path: "/salesforce-course",
          imgSrc:
            "/assets/dropdownmenu/Networking/Cyber_Security_Job_Guarantee_Program.webp",
          duration: "6 months",
          icon: faBullhorn, // Bullhorn icon for digital marketing campaigns
        },
      ],
    },
    {
      id: "sap-courses",
      name: "SAP COURSES",
      icon: faBullhorn,
      courses: [
        {
          name: "SAP",
          path: "/sap-course",
          imgSrc: "/assets/dropdownmenu/SAP/SAP_Master_Data_Governance.webp",
          duration: "4 months",
          icon: faWallet,
        },
        {
          name: "SAP FICO",
          path: "/sap-fico-course",
          imgSrc:
            "/assets/dropdownmenu/SAP/SAP_Financial_Accounting_and_Controlling01.webp",
          duration: "4 months",
          icon: faWallet,
        },
        {
          name: "SAP MATERIAL MANAGEMENT",
          path: "/sap-mm-course",
          imgSrc: "/assets/dropdownmenu/SAP/SAP_Material_Management.webp",
          duration: "4 months",
          icon: faWallet,
        },
        {
          name: "SAP ABAP",
          path: "/sap-abap-course",
          imgSrc:
            "/assets/dropdownmenu/SAP/SAP_Advanced_Business_Application_Programming.webp",
          duration: "4 months",
          icon: faWallet,
        },
        // {
        //   name: "SAP SALES AND DISTRIBUTION",
        //   path: "/sap-training/sap-sales-and-distribution",
        //   imgSrc: boy,
        //   duration: "4 months",
        //   icon: faWallet,
        // },
        // {
        //   name: "SAP S/4 HANA",
        //   path: "/sap-training/sap-s4-hana",
        //   imgSrc: boy,
        //   duration: "4 months",
        //   icon: faWallet,
        // },
        {
          name: "SAP PP",
          path: "/sap-pp-course",
          imgSrc: "/assets/dropdownmenu/SAP/SAP_Production_Planning.webp",
          duration: "4 months",
          icon: faWallet,
        },
        {
          name: "SAP BASIS",
          path: "/sap-basis-course",
          imgSrc:
            "/assets/dropdownmenu/SAP/SAP_Business_Application_Software_Integrated_Solution.webp",
          duration: "4 months",
          icon: faWallet,
        },

        {
          name: "SAP Success Factor",
          path: "/sap-success-factor-course",
          imgSrc:
            "/assets/dropdownmenu/SAP/SAP_Financial_Accounting_and_Controlling01.webp",
          duration: "4 months",
          icon: faWallet,
        },
      ],
    },
    // {
    //   id: "animation",
    //   name: "ANIMATION",
    //   icon: faBullhorn,
    //   courses: [
    //     {
    //       name: "ADVANCE GAME DESIGN",
    //       path: "/animation/advance-game-design",
    //       imgSrc: boy,
    //       duration: "6 Months",
    //       icon: faCloud,
    //     },
    //     {
    //       name: "VFX PRO",
    //       path: "/animation/vfx-pro",
    //       imgSrc: boy,
    //       duration: "6 Months",
    //       icon: faCloud,
    //     },
    //     {
    //       name: "MOTION GRAPHICS",
    //       path: "/animation/motion-graphics",
    //       imgSrc: boy,
    //       duration: "6 Months",
    //       icon: faCloud,
    //     },
    //   ],
    // },
    {
      id: "digital-marketing-training",
      name: "DIGITAL MARKETING TRAINING",
      icon: faBullhorn,
      courses: [
        {
          name: "Advance Digital Marketing",
          path: "/digital-marketing-course",
          imgSrc:
            "/assets/dropdownmenu/Hadoop/digitalmarketing/Digital_Marketing_webp.webp",
          duration: "6 Months",
          icon: faCloud,
        },
        //     {
        //       name: "Pay Per Click",
        //       path: "/digital-marketing-training/pay-per-click",
        //       imgSrc: boy,
        //       duration: "6 Months",
        //       icon: faCloud,
        //     },
        //     {
        //       name: "SEARCH ENGINE OPTIMIZATION",
        //       path: "/digital-marketing-training/search-engine-optimization",
        //       imgSrc: websearchengineoptimization,
        //       duration: "6 Months",
        //       icon: faCloud,
        //     },
        //     {
        //       name: "SOCIAL MEDIA MARKETING",
        //       path: "/digital-marketing-training/social-media-marketing",
        //       imgSrc: socialmediamarketing,
        //       duration: "6 Months",
        //       icon: faCloud,
        //     },
        //     {
        //       name: "ADVANCE ANALYTICS TRAINING",
        //       path: "/digital-marketing-training/advance-analytics-training",
        //       imgSrc: advanceanalytics,
        //       duration: "6 Months",
        //       icon: faCloud,
        //     },
      ],
    },
  ],
  nonitdomains: [
    {
      id: "hr",
      name: "HR",
      icon: faCode,
      courses: [
        {
          name: "HRBP",
          path: "/hrbp-course",
          imgSrc: "/assets/dropdownmenu/HR/HRBP.webp",
          duration: "4 months",
          icon: faWallet,
        },
        {
          name: "SAP HR",
          path: "/sap-hr-course",
          imgSrc: "/assets/dropdownmenu/HR/HR_SAP.webp",
          duration: "4 months",
          icon: faWallet,
        },
        {
          name: "HR TRAINING",
          path: "/hr-training",
          imgSrc: "/assets/dropdownmenu/HR/HR_Training.webp",
          duration: "4 months",
          icon: faWallet,
        },
        {
          name: "HR ANALYTICS",
          path: "/hr-analytics-course",
          imgSrc: "/assets/dropdownmenu/HR/HR_Analytics.webp",
          duration: "4 months",
          icon: faWallet,
        },
        {
          name: "HR AUDIT",
          path: "/hr-audit-course",
          imgSrc: "/assets/dropdownmenu/HR/HR_Audit.webp",
          duration: "4 months",
          icon: faWallet,
        },

        {
          name: "CERTIFICATION IN HR TRAINING",
          path: "/hr-certification-course",
          imgSrc: "/assets/dropdownmenu/HR/Certification_in_HR_Training.webp",
          duration: "4 months",
          icon: faWallet,
        },
        {
          name: "Workday Training",
          path: "/workday-course",
          imgSrc: "/assets/dropdownmenu/workdaytraining.webp",
          duration: "4 months",
          icon: faWallet,
        },
      ],
    },
    {
      id: "language",
      name: "LANGUAGE",
      icon: faCode,
      courses: [
        {
          name: "SPOKEN ENGLISH",
          path: "/spoken-english-classes",
          imgSrc: "/assets/dropdownmenu/Languages/Spoken_English.webp",
          duration: "4 months",
          icon: faWallet,
        },
        {
          name: "PERSONALITY DEVELOPMENT",
          path: "/personality-development-classes",
          imgSrc: "/assets/dropdownmenu/Languages/personality_development.webp",
          duration: "4 months",
          icon: faWallet,
        },
        {
          name: "GERMAN LANGUAGE",
          path: "/german-language-course",
          imgSrc: "/assets/dropdownmenu/Languages/German_language.webp",
          duration: "4 months",
          icon: faWallet,
        },
        {
          name: "FRENCH LANGUAGE",
          path: "/french-language-classes",
          imgSrc: "/assets/dropdownmenu/Languages/French_Language.webp",
          duration: "4 months",
          icon: faWallet,
        },
        {
          name: "IELTS",
          path: "/ielts-course",
          imgSrc: "/assets/dropdownmenu/Languages/IELTS.webp",
          duration: "4 months",
          icon: faWallet,
        },
        // {
        //   name: "VOICE AND ACCENT",
        //   path: "/language/voice-and-accent",
        //   imgSrc: voiceandaccents,
        //   duration: "4 months",
        //   icon: faWallet,
        // },
        {
          name: "TRAIN THE TRAINER",
          path: "/train-the-trainer-course",
          imgSrc: "/assets/dropdownmenu/Languages/Train_the_Trainer.webp",
          duration: "4 months",
          icon: faWallet,
        },
        {
          name: "TOEFL",
          path: "/toefl-course",
          imgSrc: "/assets/dropdownmenu/Languages/TOEFL.webp",
          duration: "4 months",
          icon: faWallet,
        },
        {
          name: "OET",
          path: "/oet-course",
          imgSrc: "/assets/dropdownmenu/Languages/OEP.webp",
          duration: "4 months",
          icon: faWallet,
        },
        // {
        //   name: "GRE",
        //   path: "/language/gre",
        //   imgSrc: gre,
        //   duration: "4 months",
        //   icon: faWallet,
        // },
      ],
    },
    {
      id: "fashion-and-interior-design",
      name: "FASHION DESIGN",
      icon: faNetworkWired,
      courses: [
        {
          name: "FASHION DESIGN COURSE",
          path: "/fashion-design-course",
          imgSrc: "/assets/dropdownmenu/fashionandinterior/Fashion.webp",
          duration: "6 Months",
          icon: faCloud,
        },
      ],
    },
    {
      id: "interior-design",
      name: "INTERIOR DESIGN",
      icon: faNetworkWired,
      courses: [
        {
          name: "INTERIOR DESIGN COURSE",
          path: "/interior-design-course",
          imgSrc:
            "/assets/dropdownmenu/fashionandinterior/Interior_Design_Course.webp",
          duration: "6 Months",
          icon: faCloud,
        },
        //         {
        //           name: "HOME STYLING",
        //           path: "/fashion-and-interior-design/home-styling",
        //           imgSrc: homestyling,
        //           duration: "6 Months",
        //           icon: faCloud,
        //         },
        //         {
        //           name: "COMMERCIAL DESIGNING",
        //           path: "/fashion-and-interior-design/commercial-designing",
        //           imgSrc: commdesign,
        //           duration: "6 Months",
        //           icon: faCloud,
        //         },
        //         {
        //           name: "VASTU SHASTRA",
        //           path: "/fashion-and-interior-design/vastu-shastra",
        //           imgSrc: vastushastra,
        //           duration: "6 Months",
        //           icon: faCloud,
        //         },
        //         {
        //           name: "LUMION",
        //           path: "/fashion-and-interior-design/lumion",
        //           imgSrc: lumion,
        //           duration: "6 Months",
        //           icon: faCloud,
        //         },
        //         {
        //           name: "MODULAR KITCHEN DESIGN",
        //           path: "/fashion-and-interior-design/modular-kitchen-design",
        //           imgSrc: modularkitchen,
        //           duration: "6 Months",
        //           icon: faCloud,
        //         },
        {
          name: "LANDSCAPE DESIGN",
          path: "/landscape-design-course",
          imgSrc:
            "/assets/dropdownmenu/fashionandinterior/Landscape_design.webp",
          duration: "6 Months",
          icon: faCloud,
        },
      ],
    },
    {
      id: "autocad",
      name: "AUTOCAD",
      icon: faShieldAlt,
      courses: [
        // {
        //   name: "AUTOCAD 2D AND 3D",
        //   path: "/fashion-and-interior-design/autocad-2d-3d",
        //   imgSrc: autocad,
        //   duration: "6 months",
        //   icon: faUserShield, // Shield icon representing security
        // },
        {
          name: "AUTOCAD CIVIL",
          path: "/autocad-civil-course",
          imgSrc: "/assets/dropdownmenu/fashionandinterior/Autocad_Civil.webp",
          duration: "6 months",
          icon: faUserLock, // Lock and user icon representing ethical hacking
        },
        {
          name: "AUTOCAD MECHANICAL",
          path: "/mechanical-cad-course",
          imgSrc:
            "/assets/dropdownmenu/fashionandinterior/Autocad_Mechanical.webp",
          duration: "6 months",
          icon: faMobileAlt, // Mobile icon for mobile hacking
        },
        // {
        //   name: "AUTOCAD ELECTRICAL",
        //   path: "/fashion-and-interior-design/autocad-electrical",
        //   imgSrc: autocadelectrical,
        //   duration: "6 months",
        //   icon: faMobileAlt, // Mobile icon for mobile hacking
        // },
      ],
    },
    {
      id: "bim",
      name: "BIM",
      icon: faDatabase,
      courses: [
        {
          name: "BIM",
          path: "/bim-course",
          imgSrc: "/assets/dropdownmenu/fashionandinterior/BIM.webp",
          duration: "6 months",
          icon: faPython, // Python logo for Python-based data analytics
        },
      ],
    },
    //     {
    //       id: "revit-architecture",
    //       name: "REVIT ARCHITECTURE",
    //       icon: faBullhorn,
    //       courses: [
    //         {
    //           name: "REVIT ARCHITECTURE",
    //           path: "/fashion-and-interior-design/revit-architecture",
    //           imgSrc: revitarch,
    //           duration: "6 months",
    //           icon: faBullhorn, // Bullhorn icon for digital marketing campaigns
    //         },
    //       ],
    //     },
    //     {
    //       id: "revit-mep",
    //       name: "REVIT MEP",
    //       icon: faBullhorn,
    //       courses: [
    //         {
    //           name: "REVIT MEP",
    //           path: "/fashion-and-interior-design/revit-mep",
    //           imgSrc: revitmep,
    //           duration: "6 months",
    //           icon: faBullhorn, // Bullhorn icon for digital marketing campaigns
    //         },
    //       ],
    //     },
    {
      id: "3ds-max",
      name: "3DS MAX",
      icon: faBullhorn,
      courses: [
        {
          name: "3DS MAX",
          path: "/3ds-max-course",
          imgSrc: "/assets/dropdownmenu/fashionandinterior/3D_MAX.webp",
          duration: "6 months",
          icon: faBullhorn, // Bullhorn icon for digital marketing campaigns
        },
      ],
    },
    //     {
    //       id: "google-sketchup",
    //       name: "GOOGLE SKETCHUP",
    //       icon: faBullhorn,
    //       courses: [
    //         {
    //           name: "GOOGLE SKETCHUP",
    //           path: "/fashion-and-interior-design/google-sketchup",
    //           imgSrc: googleskethup,
    //           duration: "6 months",
    //           icon: faBullhorn, // Bullhorn icon for digital marketing campaigns
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
  // Job Oriented Courses - Direct list without domains or subdomains
  joborientedcourses: [
    // new job oriented courses
    {
      name: "Job Oriented Business Analyst Course",
      path: "/job-oriented-business-analyst-courses",
      imgSrc: "/assets/dropdownmenu/HR/Business_Analyst.webp",
      duration: "6 Months",
      icon: faRocket,
    },
    {
      name: "Job Oriented Web Full Stack Course",
      path: "/job-oriented-web-fullstack-course",
      imgSrc:
        "/assets/dropdownmenu/fsdevelopment/FullStack_with_web_development.webp",
      duration: "6 Months",
      icon: faRocket,
    },
    {
      name: "Job Oriented Java Fullstack course",
      path: "/job-oriented-java-fullstack-course",
      imgSrc: "/assets/dropdownmenu/Java_Classes.webp",
      duration: "6 Months",
      icon: faRocket,
    },
    {
      name: "Job Oriented Data Engineering",
      path: "/job-oriented-data-engineering-course",
      imgSrc:
        "/assets/dropdownmenu/Hadoop/dataanalytics/Data_Engineering_webp.webp",
      duration: "6 Months",
      icon: faRocket,
    },
    {
      name: "Job Oriented Data Analytics",
      path: "/job-oriented-data-analytics-course-in",
      imgSrc:
        "/assets/dropdownmenu/Hadoop/dataanalytics/Data_Analytics_webp.webp",
      duration: "6 Months",
      icon: faRocket,
    },
    {
      name: "Job Oriented Data Science AI with Data Analytics",
      path: "/job-oriented-data-science-ai-with-data-analytics-course",
      imgSrc:
        "/assets/dropdownmenu/Hadoop/dataanalytics/Data_Science_with_Python_webp.webp",
      duration: "6 Months",
      icon: faRocket,
    },
    {
      name: "Web Full Stack Software Development with Data structures & algorithms Course",
      path: "/web-full-stack-software-development-dsa-course",
      imgSrc:
        "/assets/dropdownmenu/fsdevelopment/FullStack_with_web_development.webp",
      duration: "6 Months",
      icon: faRocket,
    },
    {
      name: "Python Full Stack Software Development with Data structures & algorithms Course",
      path: "/python-full-stack-software-development-dsa-course",
      imgSrc:
        "/assets/dropdownmenu/Hadoop/dataanalytics/Full_Stack_With_Python_webp.webp",
      duration: "6 Months",
      icon: faRocket,
    },
    {
      name: "Java Full Stack Software Development with Data Structures and Algorithms Course",
      path: "/java-full-stack-software-development-dsa-course",
      imgSrc:
        "/assets/dropdownmenu/Data_Structure_and_algorithum_with_fullstack.webp",
      duration: "6 Months",
      icon: faRocket,
    },
    {
      name: "Dot Net Full Stack Software Development with Data structures & algorithms Course",
      path: "/dotnet-full-stack-software-development-dsa-course",
      imgSrc: "/assets/dropdownmenu/fsdevelopment/Dot_Net_Fu_Stack_Course.webp",
      duration: "6 Months",
      icon: faRocket,
    },
  ],
};

export default NavbarPaths;
