import img from "../../../../assets/StudentsProjects/img1.webp";
import finder from "../../../../assets/StudentsProjects/Finderaninnovativeplatform.webp";
import coffe from "../../../../assets/StudentsProjects/ProjectCoffeeShop.webp";
import dmart from "../../../../assets/StudentsProjects/ProjectDMartWebsite.webp";
import portfolio from "../../../../assets/StudentsProjects/StudentPortfolio.webp";

const StudentsProjectsData = {
    dataScience: [
      {
         title: "Fake news detection",
         image: img,
         link: "https://www.linkedin.com/feed/update/urn:li:activity:7266672021135126528/",
       },
       {
         title: "Customer churn prediction",
         image: img,
         link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7275424918089977857/",
       },
       {
         title: "Speech emotion recognition",
         image: img,
         link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7275426019841355778",
       },
       {
         title: "Data cleansing",
         image: img,
         link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7280000000000000000",
       },
       {
         title: "Sentiment analysis",
         image: img,
         link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7281111111111111111",
       },
    ],
    webdevelopment: [
      {
        title: "D-Mart Website",
        image: dmart,
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7265943396828020736/?actorCompanyId=10168096",
      },
      {
        title: "Finder - an innovative platform",
        image: finder,
        link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7275426019841355778",
      },
      {
        title: "Coffe Shop",
        image: coffe,
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7267883405806092289/?actorCompanyId=10168096",
      },
      {
        title: "Student Portfolio",
        image: portfolio,
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7268153790665543681/?actorCompanyId=10168096",
      },
    ],
    // Add more course-specific projects here...
  };
  
  export default StudentsProjectsData;
  