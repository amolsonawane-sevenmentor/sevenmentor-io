import { motion, AnimatePresence } from "framer-motion";
import "./LearningJourney.css";
import Image from "next/image";

export default function LearningJourney() {
  const cards = [
    {
      img: "https://png.pngtree.com/thumb_back/fh260/background/20241128/pngtree-student-journey-through-e-learning-with-online-courses-and-quizzes-image_16698302.jpg",
      title: "Master Analytics",
      description:
        "Dive deep into the art of extracting valuable insights from raw data, honing your analytical skills to absolute perfection.",
    },
    {
      img: "https://img.freepik.com/free-photo/blockchain-technology-cartoon-illustration_23-2151572173.jpg?t=st=1734786635~exp=1734790235~hmac=047adcfcc2d6c39282f79eaa19afffaa61644bf8707c94b7875f7cbeb8c4dcf0&w=740",
      title: "Visualize Data",
      description:
        "Become a true master of advanced data visualization and turn complex information into captivating, impactful stories.",
    },
    {
      img: "https://media.istockphoto.com/id/1389238948/photo/hand-touching-global-networking-on-data-connection-science-big-data-internet-technology.jpg?s=612x612&w=0&k=20&c=yCNE-b7vr1kD9iRAIH4Qq6J3ZRBalj_mCZVrNVsev50=",
      title: "Industry Insights",
      description:
        " Gain insights into various industries, learning how Data Science impacts finance, healthcare, e-commerce, and more.",
    },
    {
      img: "https://img.freepik.com/free-photo/man-using-tablet-work-connect-with-others_23-2149369110.jpg?t=st=1734786529~exp=1734790129~hmac=d540b36043aa220fc2efaaebc0433195cbe084450d70483f96b148c24cdbc8b8&w=740",
      title: "Capstone Projects",
      description:
        "Showcase your skills by working on capstone projects, demonstrating your ability to tackle complex challenges.",
    },
    {
      img: "https://img.freepik.com/free-photo/futuristic-technology-hologram_23-2151917429.jpg?t=st=1734786597~exp=1734790197~hmac=faf9e1104772fde4218479e2460e9eb04ff8c87f064fe0fafec4e9dd1364ab86&w=826",
      title: "Get Certification",
      description:
        " Earn a prestigious certification that validates your proficiency and sets you apart in the competitive job market.",
    },
  ];

  return (
    <section className="w-full py-16 px-4">
      <div className="mx-4 md:mx-16">
        {/* Header Section */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 flex items-center">
            Our Learning{" "}
            <span className="relative ml-4">
              <span className="text-[#FF6B00]">Journey</span>
              <motion.svg
                width="100%"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-2 left-0"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                <path
                  d="M1 5.5C20 2.5 80 0.5 199 5.5"
                  stroke="#FF6B00"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>
          </h2>
          <p className="text-gray-200 max-w-4xl">
            Equip yourself with skills that transform industries, drive
            innovation, and elevate your career. Unlock opportunities, shape the
            future, and become a leader in a rapidly evolving world. Master the
            tools to stand out and succeed at every level.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative">
          {/* Timeline items container */}
          <AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-5 relative ">
              {/* Timeline items */}
              {cards.map((item, index) => (
                <div key={index} className="relative">
                  {/* Card */}
                  <div
                    className={`p-6 border-2 border-l-orange-500 border-r-transparent card-container
                ${
                  index % 2 === 0
                    ? "border-t-orange-500 border-b-transparent " // Top border only for even indexes
                    : "border-b-orange-500 border-t-transparent" // Bottom border only for odd indexes
                }
                ${index === 0 ? "first-div !border-l-transparent" : ""}
                ${index === 4 ? "last-div" : ""}`}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 0 20px rgba(255, 165, 0, 0.3)",
                      }}
                      transition={{ duration: 0.3 }}
                      className={` rounded-lg h-full bg-white  hover:cursor-pointer border-2 border-orange-500 hover:border hover:border-orange-500 
                    ${
                      index % 2 === 0
                      // ? "bg-[#242424] " // background for cards of  even indexes
                      // : "bg-[#3D3D3D]" // background for cards of odd indexes
                    }`}
                    >
                      <div className="mb-1 w-full h-1/2">
                        <Image
                          src={item.img || "/placeholder.svg"}
                          alt={item.title || "Item image"}
                          width={400} // Adjust based on expected container width
                          height={120} // Matches h-[120px]
                          className="w-full h-[120px] object-cover rounded-t-lg"
                        />
                      </div>
                      <div className="p-2">
                        <h3 className=" text-black text-xl font-semibold mb-2 text-center">
                          {item.title}
                        </h3>
                        <p className="text-black  text-md text-center">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Circle for the first card's left border */}
                  {index === 0 && (
                    <div className="absolute top-[49%] left-[-10px] w-6 h-6 bg-orange-500/80 rounded-full"></div>
                  )}

                  {/* Circle for the last card's right border */}
                  {index === 4 && (
                    <div className="absolute top-[49%] right-[-10px] w-6 h-6 bg-orange-500/90 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// import { motion, AnimatePresence } from "framer-motion";
// import "./LearningJourney.css";

// export default function LearningJourney() {
//   const cards = [
//     {
//       img: "https://png.pngtree.com/thumb_back/fh260/background/20241128/pngtree-student-journey-through-e-learning-with-online-courses-and-quizzes-image_16698302.jpg",
//       title: "Master Analytics",
//       description:
//         "Dive deep into the art of extracting valuable insights from raw data, honing your analytical skills to absolute perfection.",
//     },
//     {
//       img: "https://img.freepik.com/free-photo/blockchain-technology-cartoon-illustration_23-2151572173.jpg?t=st=1734786635~exp=1734790235~hmac=047adcfcc2d6c39282f79eaa19afffaa61644bf8707c94b7875f7cbeb8c4dcf0&w=740",
//       title: "Visualize Data",
//       description:
//         "Become a true master of advanced data visualization and turn complex information into captivating, impactful stories.",
//     },
//     {
//       img: "https://media.istockphoto.com/id/1389238948/photo/hand-touching-global-networking-on-data-connection-science-big-data-internet-technology.jpg?s=612x612&w=0&k=20&c=yCNE-b7vr1kD9iRAIH4Qq6J3ZRBalj_mCZVrNVsev50=",
//       title: "Industry Insights",
//       description:
//         " Gain insights into various industries, learning how Data Science impacts finance, healthcare, e-commerce, and more.",
//     },
//     {
//       img: "https://img.freepik.com/free-photo/man-using-tablet-work-connect-with-others_23-2149369110.jpg?t=st=1734786529~exp=1734790129~hmac=d540b36043aa220fc2efaaebc0433195cbe084450d70483f96b148c24cdbc8b8&w=740",
//       title: "Capstone Projects",
//       description:
//         "Showcase your skills by working on capstone projects, demonstrating your ability to tackle complex challenges.",
//     },
//     {
//       img: "https://img.freepik.com/free-photo/futuristic-technology-hologram_23-2151917429.jpg?t=st=1734786597~exp=1734790197~hmac=faf9e1104772fde4218479e2460e9eb04ff8c87f064fe0fafec4e9dd1364ab86&w=826",
//       title: "Get Certification",
//       description:
//         " Earn a prestigious certification that validates your proficiency and sets you apart in the competitive job market.",
//     },
//   ];

//   return (
//     <section className="w-full py-16 px-4">
//       <div className="mx-4 md:mx-16">
//         {/* Header Section */}
//         <div className="mb-8">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 flex items-center">
//             Our Learning{" "}
//             <span className="relative ml-4">
//               <span className="text-[#FF6B00]">Journey</span>
//               <motion.svg
//                 width="100%"
//                 height="8"
//                 viewBox="0 0 200 8"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="absolute -bottom-2 left-0"
//                 initial={{ pathLength: 0 }}
//                 animate={{ pathLength: 1 }}
//                 transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
//               >
//                 <path
//                   d="M1 5.5C20 2.5 80 0.5 199 5.5"
//                   stroke="#FF6B00"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                 />
//               </motion.svg>
//             </span>
//           </h2>
//           <p className="text-gray-200 max-w-4xl">
//           Equip yourself with skills that transform industries, drive innovation, and elevate your career. Unlock opportunities, shape the future, and become a leader in a rapidly evolving world. Master the tools to stand out and succeed at every level.
//           </p>
//         </div>

//         {/* Timeline Section */}
//         <div className="relative">
//           {/* Timeline items container */}
//           <AnimatePresence>
//             <div className="grid grid-cols-1 md:grid-cols-5 relative ">
//               {/* Timeline items */}
//               {cards.map((item, index) => (
//                 <div key={index} className="relative">
//                   {/* Card */}
//                   <div
//                     className={`p-6 border-2 border-l-orange-500 border-r-transparent card-container
//                 ${
//                   index % 2 === 0
//                     ? "border-t-orange-500 border-b-transparent " // Top border only for even indexes
//                     : "border-b-orange-500 border-t-transparent" // Bottom border only for odd indexes
//                 }
//                 ${index === 0 ? "first-div !border-l-transparent" : ""}
//                 ${index === 4 ? "last-div" : ""}`}
//                   >
//                     <motion.div
//                       whileHover={{
//                         scale: 1.05,
//                         boxShadow: "0 0 20px rgba(255, 165, 0, 0.3)",
//                       }}
//                       transition={{ duration: 0.3 }}
//                       className={` rounded-lg h-full  hover:cursor-pointer border-2 border-orange-500 hover:border hover:border-orange-500
//                     ${
//                       index % 2 === 0
//                       ? "bg-[#242424] " // background for cards of  even indexes
//                       : "bg-[#3D3D3D]" // background for cards of odd indexes
//                     }`}
//                     >
//                       <div className="mb-1 w-full h-1/2">
//                         <img
//                           src={item.img}
//                           alt={item.title}
//                           className="w-full h-[120px] object-cover rounded-t-lg"
//                         />
//                       </div>
//                       <div className="p-2">
//                         <h3 className=" text-orange-500 text-xl font-semibold mb-2 text-center">
//                           {item.title}
//                         </h3>
//                         <p className="text-white  text-md text-center">
//                           {item.description}
//                         </p>
//                       </div>
//                     </motion.div>
//                   </div>

//                   {/* Circle for the first card's left border */}
//                   {index === 0 && (
//                     <div className="absolute top-[49%] left-[-10px] w-6 h-6 bg-orange-500/80 rounded-full"></div>
//                   )}

//                   {/* Circle for the last card's right border */}
//                   {index === 4 && (
//                     <div className="absolute top-[49%] right-[-10px] w-6 h-6 bg-orange-500/90 rounded-full"></div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }
