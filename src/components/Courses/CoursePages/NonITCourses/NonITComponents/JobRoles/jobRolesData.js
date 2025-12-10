import interiordesigner from "../../../../../../../public/assets/InteriorJobRoles/interiordesigner.webp";
import architect from "../../../../../../../public/assets/InteriorJobRoles/architect.webp";
import furnituredesigner from "../../../../../../../public/assets/InteriorJobRoles/furnituredesigner.webp";
import lightingspecialist from "../../../../../../../public/assets/InteriorJobRoles/lightingspecialist.webp";
import spaceplanner from "../../../../../../../public/assets/InteriorJobRoles/spaceplanner.webp";

import fashiondesigner from "../../../../../../../public/assets/FashionJobRoles/fashionDesigner.webp";
import stylist from "../../../../../../../public/assets/FashionJobRoles/stylist.webp";
import fashionillustrator from "../../../../../../../public/assets/FashionJobRoles/fashionIllustrator.webp";
import merchandiser from "../../../../../../../public/assets/FashionJobRoles/merchandiser.webp";
import fashionmarketer from "../../../../../../../public/assets/FashionJobRoles/fashionMarketer.webp";

const jobRolesData = {
  interior: [
    {
      role: "Interior Designer",
      image: interiordesigner,
      description: "Creates functional and aesthetically pleasing indoor spaces by selecting color schemes, furniture, lighting, and decor to enhance the overall ambiance and usability of the environment."
    },
    {
      role: "Architect",
      image: architect,
      description: "Designs and plans buildings and structures with a focus on aesthetics, safety, and functionality, ensuring a balance between form and practicality in both residential and commercial projects."
    },
    {
      role: "Furniture Designer",
      image: furnituredesigner,
      description: "Specializes in designing stylish and functional furniture pieces that complement interior spaces, combining creativity with ergonomics to create visually appealing and comfortable designs."
    },
    {
      role: "Lighting Specialist",
      image: lightingspecialist,
      description: "Enhances spaces through expert lighting solutions by selecting the right fixtures, intensities, and placements to create ambiance, improve functionality, and highlight key architectural features."
    },
    {
      role: "Space Planner",
      image: spaceplanner,
      description: "Optimizes interior spaces for functionality and flow by analyzing layouts, improving traffic patterns, and ensuring efficient use of available areas while maintaining a stylish aesthetic."
    }
  ],
  fashion: [
    {
      role: "Fashion Designer",
      image: fashiondesigner,
      description: "Creates clothing, accessories, and footwear, focusing on aesthetics, functionality, and market trends to develop unique and appealing designs."
    },
    {
      role: "Stylist",
      image: stylist,
      description: "Works with clients to create looks for photoshoots, events, or personal style, selecting clothing and accessories that enhance the client's appearance."
    },
    {
      role: "Fashion Illustrator",
      image: fashionillustrator,
      description: "Creates visual representations of fashion designs, using artistic skills to communicate ideas and concepts through sketches and illustrations."
    },
    {
      role: "Merchandiser",
      image: merchandiser,
      description: "Plans and manages the presentation of products in retail environments, ensuring that displays are visually appealing and aligned with brand strategies."
    },
    {
      role: "Fashion Marketer",
      image: fashionmarketer,
      description: "Develops marketing strategies to promote fashion brands and products, utilizing market research and consumer insights to drive sales and brand awareness."
    }
  ]
};

export default jobRolesData;