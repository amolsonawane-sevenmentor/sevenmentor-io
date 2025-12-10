import { useState, lazy, Suspense } from "react";
// Ensure to use the desired image path here.
import bgimg from "../../../../assets/StudentsProjects/projectbg.webp";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { MoveLeft, MoveRight } from "lucide-react";
import linkedin from "../../../../assets/linkedin.webp";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

export default function StudentsProjectSection({ studentProjects }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    slidesToScroll: 1,
  });

  const [hoveredProject, setHoveredProject] = useState(null);

  const handlePrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const handleNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const LazyImage = ({ src, alt, className }) => {
    return (
      <Image
        src={src || "/placeholder.svg"}
        alt={alt || "Image"}
        width={100} // Default/fallback width (adjust as needed)
        height={100} // Default/fallback height (adjust as needed)
        className={className}
      />
    );
  };
  const isMobile = useMediaQuery({ maxWidth: 600 });
  return (
    <section>
      <div className="relative w-full py-5 mt-[-40px] md:mt-[0px] overflow-hidden">
        {/* Conditional Background Rendering */}
        {isMobile ? (
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-orange-500/20" />
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bgimg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.3)",
              zIndex: 0,
            }}
          />
        )}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-lg" />
        <div
          className="container relative px-4 mx-auto mt-[-20px] md:mt-5"
          style={{ zIndex: 1 }}
        >
          <div className="flex flex-col md:flex-row justify-around items-center md:items-center ">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-white to-orange-500 bg-clip-text text-transparent mb-4 leading-tight mt-5">
              Students Projects
            </h2>
            <div className="backdrop-blur-xl bg-white/25 p-5 rounded-2xl">
              <p className="text-white max-w-md text-xl">
                &quot;Seven Mentor Institute presents innovative student
                projects, showcasing creativity, skills, and real-world learning
                in design and technology.&quot;
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex space-x-4">
                {studentProjects.map((project, index) => (
                  <div
                    key={index}
                    className="relative group mt-[-30px] md:mt-[-10px] flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/3"
                  >
                    <div className="relative rounded-3xl overflow-hidden p-8">
                      <div className="relative z-2 py-6 h-36 text-center">
                        <h3 className=" text-[25px] md:text-[30px] font-bold text-orange-500 pb-2 md:whitespace-nowrap">
                          {project.title}
                        </h3>
                        <div className="w-full h-[1px] bg-white" />
                      </div>
                      <div className="relative z-20 mt-5 md:mt-2">
                        <div className="absolute -top-6 left-4 right-4 bg-white/70 rounded-3xl transform h-16" />
                        <div className="absolute -top-10 left-9 right-9 bg-white/50 rounded-3xl transform h-20" />
                        <div className="relative rounded-3xl">
                          <div className="relative w-full h-[250px]">
                            <Suspense
                              fallback={
                                <div className="bg-gray-200 w-full h-full rounded-xl animate-pulse" />
                              }
                            >
                              <LazyImage
                                src={project.image}
                                alt={project.title}
                                className="object-cover w-full h-full rounded-xl"
                              />
                            </Suspense>
                          </div>
                          <div className="absolute bottom-4 right-[-10px] lg:bottom-4 lg:right-6 md:bottom-4 md:right-[-10px] z-10">
                            <motion.a
                              id={project.title}
                              href={project.link}
                              target="_blank"
                              className="relative flex items-center px-3 py-3 text-white text-lg font-semibold rounded-full shadow-lg gap-2 overflow-hidden bg-white border-2 border-orange-500"
                              whileHover={{
                                scale: 1.05,
                                borderColor: "rgba(249, 115, 22, 0.8)",
                                boxShadow: "0 0 15px rgba(249, 115, 22, 0.8)",
                              }}
                              whileTap={{ scale: 0.95 }}
                              onMouseEnter={() => setHoveredProject(index)}
                              onMouseLeave={() => setHoveredProject(null)}
                            >
                              <Image
                                src={linkedin || "/placeholder.svg"}
                                alt="Project Icon"
                                width={40} // w-10 = 2.5rem = 40px
                                height={40} // h-10 = 2.5rem = 40px
                                className="w-10 h-10 object-contain"
                              />
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-80"
                                initial={{ x: "-100%" }}
                                animate={{
                                  x: "100%",
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                }}
                              />
                              <div className="absolute inset-0 rounded-full border-[3px] border-orange-500/50 opacity-70 animate-pulse" />
                            </motion.a>
                            {/* Tooltip */}
                            {hoveredProject === index && (
                              <div className="absolute -top-9 left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-3 px-3 whitespace-nowrap rounded-lg">
                                View LinkedIn Project
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-6 gap-10">
              <button
                onClick={handlePrev}
                className="h-12 w-12 bg-orange-500 hover:bg-orange-400 rounded-full flex items-center justify-center"
                style={{
                  boxShadow: "-2.6px 2px 0 0 rgba(255, 255, 255, 1)",
                }}
              >
                <MoveLeft className="text-white font-bold w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="h-12 w-12 bg-orange-500 hover:bg-orange-400 rounded-full flex items-center justify-center"
                style={{
                  boxShadow: "2.6px 2px 0 0 rgba(255, 255, 255, 1)",
                }}
              >
                <MoveRight className="text-white font-bold w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
