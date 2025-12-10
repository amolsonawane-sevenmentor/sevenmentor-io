import homeStyling from "../../../../../../../public/assets/CourseModuleImages/InteriorModuleImages/Home_Styling.webp";
import commercialDesign from "../../../../../../../public/assets/CourseModuleImages/InteriorModuleImages/Commercial_Desiging.webp";
import vastu from "../../../../../../../public/assets/CourseModuleImages/InteriorModuleImages/Vastu_Shastra.webp";
import lumion from "../../../../../../../public/assets/CourseModuleImages/InteriorModuleImages/Lumion.webp";
import modularKitchen from "../../../../../../../public/assets/CourseModuleImages/InteriorModuleImages/Modular_Kitchen.webp";
import landscape from "../../../../../../../public/assets/CourseModuleImages/InteriorModuleImages/Landscape_Design.webp";
import autocad from "../../../../../../../public/assets/CourseModuleImages/InteriorModuleImages/AutoCad.webp";
import fashionBasics from "../../../../../../../public/assets/CourseModuleImages/FashionModuleImages/fashionDesign.webp";
import blouse from "../../../../../../../public/assets/CourseModuleImages/FashionModuleImages/blouseDesign.webp";
import dress from "../../../../../../../public/assets/CourseModuleImages/FashionModuleImages/dressDesign.webp";
import gown from "../../../../../../../public/assets/CourseModuleImages/FashionModuleImages/gownDesign.webp";
import embroidery from "../../../../../../../public/assets/CourseModuleImages/FashionModuleImages/embroidery.webp";
import kidsWear from "../../../../../../../public/assets/CourseModuleImages/FashionModuleImages/kidsWear.webp";
import aariWork from "../../../../../../../public/assets/CourseModuleImages/FashionModuleImages/aariWork.webp";

const courseModules = {
  interiorDesign: [
    {
      title: "Home Styling",
      image: homeStyling,
      content: {
        description:
          "Learn how to enhance home interiors with creative styling techniques.",
        fullDescription:
          "This module focuses on home styling trends, furniture arrangement, and decor selection to create aesthetically appealing and functional living spaces.",
        keyPoints: [
          "Color Schemes & Textures",
          "Furniture Arrangement",
          "Decor & Accessories",
          "Lighting Techniques",
          "Theme-Based Styling",
        ],
        eligibility: "Open to all design enthusiasts and professionals.",
      },
    },
    {
      title: "Commercial Designing",
      image: commercialDesign,
      content: {
        description:
          "Understand the principles of designing commercial spaces like offices, retail stores, and cafes.",
        fullDescription:
          "This module covers space planning, branding integration, and efficient layouts to create engaging commercial environments.",
        keyPoints: [
          "Office & Retail Space Planning",
          "Brand Identity in Interiors",
          "Furniture & Fixture Selection",
          "Lighting & Ambience",
          "Sustainability in Commercial Design",
        ],
        eligibility: "Ideal for students focusing on commercial projects.",
      },
    },
    {
      title: "Vastu Shastra",
      image: vastu,
      content: {
        description:
          "Discover the ancient science of Vastu and its application in modern interior design.",
        fullDescription:
          "This module explores how Vastu principles influence spatial arrangements and energy flow to create harmonious living and working environments.",
        keyPoints: [
          "Fundamentals of Vastu",
          "Directional Alignments",
          "Space Energy Balancing",
          "Vastu for Homes & Offices",
          "Remedial Measures",
        ],
        eligibility: "Open to all interested in holistic design approaches.",
      },
    },
    {
      title: "Lumion",
      image: lumion,
      content: {
        description:
          "Master Lumion for high-quality architectural visualization and 3D rendering.",
        fullDescription:
          "This module teaches students how to create realistic interior and exterior renders using Lumion, covering lighting, materials, and animations.",
        keyPoints: [
          "Lumion Interface & Navigation",
          "Rendering Techniques",
          "Material & Texture Application",
          "Lighting & Environment Setup",
          "Walkthrough Animations",
        ],
        eligibility: "Recommended for students interested in visualization.",
      },
    },
    {
      title: "Modular Kitchen",
      image: modularKitchen,
      content: {
        description:
          "Learn to design modern and functional modular kitchen layouts.",
        fullDescription:
          "This module covers kitchen ergonomics, storage solutions, and material selection for efficient and aesthetic modular kitchens.",
        keyPoints: [
          "Kitchen Ergonomics",
          "Storage & Organization",
          "Material Selection",
          "Lighting & Ventilation",
          "3D Kitchen Layout Designing",
        ],
        eligibility:
          "Ideal for students specializing in kitchen and interior spaces.",
      },
    },
    {
      title: "Landscape Design",
      image: landscape,
      content: {
        description:
          "Understand the principles of landscape design for outdoor spaces.",
        fullDescription:
          "This module focuses on designing gardens, terraces, and outdoor areas using plants, lighting, and water features for aesthetic and functional landscapes.",
        keyPoints: [
          "Outdoor Space Planning",
          "Plant Selection & Arrangements",
          "Water Features & Hardscapes",
          "Lighting for Landscapes",
          "Sustainable Landscaping",
        ],
        eligibility: "Open to students interested in exterior design.",
      },
    },
    {
      title: "AutoCAD for Interior Design",
      image: autocad,
      content: {
        description:
          "Master AutoCAD for creating precise 2D and 3D drawings used in interior design projects.",
        fullDescription:
          "This module provides in-depth training on AutoCAD, focusing on drafting floor plans, elevations, sections, and detailed working drawings. Students will learn industry standards and best practices for technical documentation.",
        keyPoints: [
          "Introduction to AutoCAD Interface",
          "2D Drafting Techniques",
          "3D Modeling & Rendering",
          "Working Drawings & Blueprints",
          "Industry Standards & Documentation",
        ],
        eligibility:
          "Ideal for students specializing in technical design and architectural drafting.",
      },
    },
  ],
  fashionDesign: [
    {
      title: "Fashion Design Basics",
      image: fashionBasics,
      content: {
        description: "Learn the fundamentals of fashion design, including garment construction and textile selection.",
        fullDescription: "This module covers the basics of fashion design, including sketching, draping, and pattern-making.",
        keyPoints: [
          "Introduction to Fashion Design",
          "Garment Construction Techniques",
          "Textile Selection & Properties",
          "Fashion Illustration",
          "Trend Analysis",
        ],
        eligibility: "Open to all aspiring fashion designers.",
      },
    },
    {
      title: "Blouse Design",
      image: blouse,
      content: {
        description: "Master the art of creating exquisite blouse designs.",
        fullDescription: "This course focuses on the techniques and skills needed to design and create stylish blouses.",
        keyPoints: [
          "Pattern Drafting",
          "Sewing Techniques",
          "Fabric Selection",
          "Designing for Different Body Types",
          "Finishing Techniques",
        ],
        eligibility: "Recommended for students interested in women's wear.",
      },
    },
    {
      title: "Dress Design",
      image: dress,
      content: {
        description: "Learn to design and create stunning dresses for various occasions.",
        fullDescription: "This module covers everything from sketching to sewing techniques for dressmaking.",
        keyPoints: [
          "Draping Techniques",
          "Pattern Making",
          "Sewing Techniques",
          "Designing for Different Occasions",
          "Fashion Illustration",
        ],
        eligibility: "Ideal for students looking to specialize in dress design.",
      },
    },
    {
      title: "Gown Design",
      image: gown,
      content: {
        description: "Delve into the intricacies of gown design.",
        fullDescription: "This course focuses on creating beautiful gowns for special occasions.",
        keyPoints: [
          "Silhouette Design",
          "Fabric Selection",
          "Draping Techniques",
          "Sewing Techniques",
          "Finishing Techniques",
        ],
        eligibility: "Recommended for students interested in formal wear.",
      },
    },
    {
      title: "Embroidery",
      image: embroidery,
      content: {
        description: "Transform your admiration of embroidery into exquisite artistry.",
        fullDescription: "Learn various embroidery techniques and how to incorporate them into fashion design.",
        keyPoints: [
          "Basic and Advanced Embroidery Techniques",
          "Incorporating Embroidery into Fashion",
          "Designing Unique Patterns",
          "Fabric Selection for Embroidery",
          "Finishing Techniques",
        ],
        eligibility: "Open to all students interested in embroidery.",
      },
    },
    {
      title: "Kids Wear",
      image: kidsWear,
      content: {
        description: "Learn to design and create fashionable clothing for children.",
        fullDescription: "This module covers the unique aspects of designing for kids, including comfort and style.",
        keyPoints: [
          "Understanding Children's Fashion",
          "Pattern Making for Kids",
          "Sewing Techniques for Kids Wear",
          "Fabric Selection for Comfort",
          "Trendy Designs for Children",
        ],
        eligibility: "Ideal for students interested in children's fashion.",
      },
    },
    {
      title: "Aari Work",
      image: aariWork,
      content: {
        description: "Discover the intricate art of Aari embroidery.",
        fullDescription: "Learn the techniques of Aari work and how to apply them in fashion design.",
        keyPoints: [
          "Basic Aari Techniques",
          "Designing with Aari Work",
          "Incorporating Aari into Garments",
          "Choosing the Right Fabrics",
          "Finishing Techniques",
        ],
        eligibility: "Open to all students interested in embroidery.",
      },
    },
  ],
};

export default courseModules;