import fashionDesign from "../../../../../../../public/assets/CourseModuleImages/FashionModuleImages/fashionBanner.webp";
import blouseDesign from "../../../../../../../public/assets/NonITCourseImages/blouseDesign.webp";
import dressDesign from "../../../../../../../public/assets/NonITCourseImages/dressDesign.webp";
import gownDesign from "../../../../../../../public/assets/NonITCourseImages/gownDesign.webp";
import embroidery from "../../../../../../../public/assets/NonITCourseImages/embroidery.webp";
import kidsWear from "../../../../../../../public/assets/NonITCourseImages/kidsWear.webp";
import aariWork from "../../../../../../../public/assets/NonITCourseImages/aariWork.webp";
import interiorDesign from "../../../../../../../public/assets/NonITCourseImages/interiorDesign.webp";
import homeStyling from "../../../../../../../public/assets/NonITCourseImages/homeStyling.webp";
import commercialDesign from "../../../../../../../public/assets/NonITCourseImages/commercialDesign.webp";
import lumionDesign from "../../../../../../../public/assets/NonITCourseImages/lumion.webp";
import vastuShastra from "../../../../../../../public/assets/NonITCourseImages/vastuShastra.webp";
import landscapeDesign from "../../../../../../../public/assets/NonITCourseImages/landscapeDesign.webp";
import modularKitchen from "../../../../../../../public/assets/NonITCourseImages/modularKitchen.webp";


const courses = {
fashionDesign: [
    {
      Fashion_Design: {
        path: "/fashion-design",
        imgSrc: fashionDesign,
        title: "Fashion Design",
        description: "Explore the art of fashion design, from sketching to garment construction."
      },
      Blouse_Design: {
        path: "/blouse-design",
        imgSrc: blouseDesign,
        title: "Blouse Design",
        description: "Master the art of creating stylish and perfectly fitting blouses."
      },
      Dress_Design: {
        path: "/dress-design",
        imgSrc: dressDesign,
        title: "Dress Design",
        description: "Learn to design stunning dresses for various occasions."
      },
      Gown_Design: {
        path: "/gown-design",
        imgSrc: gownDesign,
        title: "Gown Design",
        description: "Delve into the intricacies of gown design and create breathtaking pieces."
      },
      Embroidery: {
        path: "/embroidery",
        imgSrc: embroidery,
        title: "Embroidery Techniques",
        description: "Learn various embroidery techniques to enhance your fashion creations."
      },
      Kids_Wear: {
        path: "/kids-wear",
        imgSrc: kidsWear,
        title: "Kids Wear Design",
        description: "Design fashionable and comfortable clothing for children."
      },
      Aari_Work: {
        path: "/aari-work",
        imgSrc: aariWork,
        title: "Aari Work",
        description: "Master the traditional art of Aari embroidery."
      }
    }
  ],
  interiorDesign: [
    {
      Interior_Design: {
        path: "/interior-design",
        imgSrc: interiorDesign,
        title: "Interior Design",
        description: "Learn the principles of interior design and create beautiful spaces."
      },
      Home_Styling: {
        path: "/home-styling",
        imgSrc: homeStyling,
        title: "Home Styling",
        description: "Transform your home into a stylish and functional space."
      },
      Lumion:{
        path:"/lumion-design",
        imgSrc: lumionDesign,
        title: "Lumion Design",
        description: "Using Lumion, a computer program, you may quickly and merely visualize your architectural ideas."
      },
      Commercial_Design: {
        path: "/commercial-design",
        imgSrc: commercialDesign,
        title: "Commercial Design",
        description: "Design functional and aesthetic commercial spaces."
      },
      Vastu_Shasta: {
        path: "/vastu-shastra",
        imgSrc: vastuShastra,
        title: "Vastu Shastra",
        description: "Learn how to design spaces according to Vastu principles."
      },
      Landscape_Design: {
        path: "/landscape-design",
        imgSrc: landscapeDesign,
        title: "Landscape Design",
        description: "Create beautiful outdoor spaces with effective landscape design."
      },
      Modular_Kitchen: {
        path: "/modular-kitchen",
        imgSrc: modularKitchen,
        title: "Modular Kitchen Design",
        description: "Design functional and stylish modular kitchens."
      }
    }
  ]
};

export default courses;