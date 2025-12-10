// "use client"

// import { memo, useMemo } from "react"
// import Image from "next/image"

// const brandLogos = [
//   { src: "/assets/images/brand/Acer.webp", alt: "Acer" },
//   { src: "/assets/images/brand/Adobe.webp", alt: "Adobe" },
//   { src: "/assets/images/brand/Amazon.webp", alt: "Amazon" },
//   { src: "/assets/images/brand/Arti.webp", alt: "Articulate" },
//   { src: "/assets/images/brand/assmlt.webp", alt: "Assimilate Technologies" },
//   { src: "/assets/images/brand/att.webp", alt: "ATT" },
//   { src: "/assets/images/brand/bajaj.webp", alt: "Bajaj Finserv" },
//   { src: "/assets/images/brand/comtron.webp", alt: "Comtron" },
//   { src: "/assets/images/brand/Dell.webp", alt: "Dell" },
//   { src: "/assets/images/brand/dimakh.webp", alt: "Dimakh Consultants" },
//   { src: "/assets/images/brand/EarthFast.webp", alt: "EarthFast" },
//   { src: "/assets/images/brand/Ebay.webp", alt: "Ebay" },
//   { src: "/assets/images/brand/FoxTech.webp", alt: "FoxTech" },
//   { src: "/assets/images/brand/HclTech.webp", alt: "HCL Tech" },
//   { src: "/assets/images/brand/Infosys.webp", alt: "Infosys" },
//   { src: "/assets/images/brand/itc.webp", alt: "ITC Limited" },
//   { src: "/assets/images/brand/knorex.webp", alt: "Knorex" },
//   { src: "/assets/images/brand/LG.webp", alt: "LG" },
//   { src: "/assets/images/brand/maven.webp", alt: "Maven" },
//   { src: "/assets/images/brand/MavenTech.webp", alt: "Maven Technology Services" },
//   { src: "/assets/images/brand/Mittal.webp", alt: "Mittal Solutions" },
//   { src: "/assets/images/brand/nimap.webp", alt: "Nimap Infotech" },
//   { src: "/assets/images/brand/Novolex.webp", alt: "Novolex" },
//   { src: "/assets/images/brand/omfys.webp", alt: "Omfys" },
//   { src: "/assets/images/brand/omfyss.webp", alt: "Omfys" },
//   { src: "/assets/images/brand/Pursho.webp", alt: "Pursho" },
//   { src: "/assets/images/brand/realizer.webp", alt: "Realizer Technologies" },
//   { src: "/assets/images/brand/Slack.webp", alt: "Slack" },
//   { src: "/assets/images/brand/TechMahindra.webp", alt: "Tech Mahindra" },
//   { src: "/assets/images/brand/vibs.webp", alt: "VIBS" },
//   { src: "/assets/images/brand/Wipro.webp", alt: "Wipro" },
//   { src: "/assets/images/brand/yashua.webp", alt: "Yashua" },
// ]

// // Memoized Logo component to prevent unnecessary re-renders
// const Logo = memo(({ src, alt, index }) => (
//   <div
//     className="flex-shrink-0 w-[100px] h-auto sm:w-[120px] md:w-[150px] lg:w-[190px] p-2 grid place-items-center rounded-lg"
//     style={{
//       contain: "layout style paint",
//     }}
//   >
//     <Image
//       src={src || "/placeholder.svg"}
//       alt={alt}
//       width={170}
//       height={80}
//       className="w-full bg-white h-full sm:h-[60px] md:h-[80px] lg:w-[170px] object-contain"
//       style={{
//         boxShadow: "0 4px 6px -1px rgba(249, 115, 22, 0.3), 0 2px 4px -1px rgba(249, 115, 22, 0.2)",
//       }}
//       loading={index < 6 ? "eager" : "lazy"} // Load first 6 images eagerly
//       sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, (max-width: 1024px) 150px, 190px"
//       decoding="async"
//     />
//   </div>
// ))

// Logo.displayName = "Logo"

// const InfiniteScrollCorporate = memo(() => {
//   // Memoize the doubled array to prevent recreation on every render
//   const doubledLogos = useMemo(() => [...brandLogos, ...brandLogos], [])

//   return (
//     <section
//       className="overflow-hidden bg-black pb-5 my-5"
//       style={{
//         minHeight: "200px",
//         contain: "layout style paint",
//       }}
//     >
//       <h2 className="text-gray-100 text-center mb-5 text-2xl md:text-4xl font-bold">
//         Our <span className="text-orange-500">Clients</span>
//       </h2>
//       <div className="flex justify-center items-center my-5">
//         <div className="w-16 h-1 bg-orange-500 rounded"></div>
//         <div className="w-3 h-3 bg-orange-500 rounded-full mx-2"></div>
//         <div className="w-16 h-1 bg-orange-500 rounded"></div>
//       </div>
//       <div
//         className="flex w-full"
//         style={{
//           animation: "scrollX 30s linear infinite",
//           willChange: "transform",
//         }}
//       >
//         {doubledLogos.map((logo, index) => (
//           <Logo key={`${logo.alt}-${index}`} src={logo.src} alt={logo.alt} index={index} />
//         ))}
//       </div>
//     </section>
//   )
// })

// InfiniteScrollCorporate.displayName = "InfiniteScrollCorporate"

// export default InfiniteScrollCorporate












"use client"

import { memo, useMemo } from "react"
import Image from "next/image"

// Reduced and optimized brand logos array
const brandLogos = [
  { src: "/assets/images/brand/Acer.webp", alt: "Acer" },
  { src: "/assets/images/brand/Adobe.webp", alt: "Adobe" },
  { src: "/assets/images/brand/Amazon.webp", alt: "Amazon" },
  { src: "/assets/images/brand/Arti.webp", alt: "Articulate" },
  { src: "/assets/images/brand/assmlt.webp", alt: "Assimilate Technologies" },
  { src: "/assets/images/brand/att.webp", alt: "ATT" },
  { src: "/assets/images/brand/bajaj.webp", alt: "Bajaj Finserv" },
  { src: "/assets/images/brand/comtron.webp", alt: "Comtron" },
  { src: "/assets/images/brand/Dell.webp", alt: "Dell" },
  { src: "/assets/images/brand/dimakh.webp", alt: "Dimakh Consultants" },
  { src: "/assets/images/brand/EarthFast.webp", alt: "EarthFast" },
  { src: "/assets/images/brand/Ebay.webp", alt: "Ebay" },
  { src: "/assets/images/brand/FoxTech.webp", alt: "FoxTech" },
  { src: "/assets/images/brand/HclTech.webp", alt: "HCL Tech" },
  { src: "/assets/images/brand/Infosys.webp", alt: "Infosys" },
  { src: "/assets/images/brand/itc.webp", alt: "ITC Limited" },
  { src: "/assets/images/brand/knorex.webp", alt: "Knorex" },
  { src: "/assets/images/brand/LG.webp", alt: "LG" },
  { src: "/assets/images/brand/maven.webp", alt: "Maven" },
  { src: "/assets/images/brand/MavenTech.webp", alt: "Maven Technology Services" },
  { src: "/assets/images/brand/Mittal.webp", alt: "Mittal Solutions" },
  { src: "/assets/images/brand/nimap.webp", alt: "Nimap Infotech" },
  { src: "/assets/images/brand/Novolex.webp", alt: "Novolex" },
  { src: "/assets/images/brand/omfys.webp", alt: "Omfys" },
  { src: "/assets/images/brand/omfyss.webp", alt: "Omfys" },
  { src: "/assets/images/brand/Pursho.webp", alt: "Pursho" },
  { src: "/assets/images/brand/realizer.webp", alt: "Realizer Technologies" },
  { src: "/assets/images/brand/Slack.webp", alt: "Slack" },
  { src: "/assets/images/brand/TechMahindra.webp", alt: "Tech Mahindra" },
  { src: "/assets/images/brand/vibs.webp", alt: "VIBS" },
  { src: "/assets/images/brand/Wipro.webp", alt: "Wipro" },
  { src: "/assets/images/brand/yashua.webp", alt: "Yashua" },
]

const Logo = memo(({ src, alt, index }) => (
  <div className="flex-shrink-0 w-[80px] sm:w-[100px] md:w-[120px] p-2 grid place-items-center">
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={100}
      height={60}
      className="w-full h-[40px] sm:h-[50px] md:h-[60px] object-contain bg-white rounded shadow-sm"
      loading={index < 4 ? "eager" : "lazy"}
      sizes="(max-width: 640px) 80px, (max-width: 768px) 100px, 120px"
      quality={70}
    />
  </div>
))

Logo.displayName = "Logo"

const InfiniteScrollCorporate = memo(() => {
  const doubledLogos = useMemo(() => [...brandLogos, ...brandLogos], [])

  return (
    <section className="overflow-hidden bg-black pb-5 my-5">
      {/* Inline animation style */}
      <style>
        {`
          @keyframes scroll-x {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll {
            display: flex;
            animation: scroll-x 150s linear infinite;
            width: fit-content;
          }
        `}
      </style>

      <h2 className="text-gray-100 text-center mb-5 text-xl md:text-3xl font-bold">
        Our <span className="text-orange-500">Clients</span>
      </h2>

      <div className="flex justify-center items-center my-5">
        <div className="w-12 h-0.5 bg-orange-500 rounded"></div>
        <div className="w-2 h-2 bg-orange-500 rounded-full mx-2"></div>
        <div className="w-12 h-0.5 bg-orange-500 rounded"></div>
      </div>

      <div className="overflow-hidden">
        <div className="animate-scroll">
          {doubledLogos.map((logo, index) => (
            <Logo key={`${logo.alt}-${index}`} src={logo.src} alt={logo.alt} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
})

InfiniteScrollCorporate.displayName = "InfiniteScrollCorporate"

export default InfiniteScrollCorporate
