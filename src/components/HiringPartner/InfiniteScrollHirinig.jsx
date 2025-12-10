"use client";

import React from "react";
import Image from "next/image";
import "../Home/HomeBanner/HomeBanner.css";

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
];

const Logo = ({ src, alt }) => (
  <div className="flex-shrink-0 w-[100px] h-auto sm:w-[120px] md:w-[140px] lg:w-[150px] p-2 grid place-items-center rounded-lg">
    <Image
         src={src || "/placeholder.svg"}
         alt={alt}
         width={170}
         height={80}
         className="w-full bg-white h-full sm:h-[60px] md:h-[80px] lg:w-[150px] object-contain"
         style={{
           boxShadow:
             "0 4px 6px -1px rgba(249, 115, 22, 0.3), 0 2px 4px -1px rgba(249, 115, 22, 0.2)",
         }}
       />
  </div>
);

const InfiniteScrollHiring = () => {
  return (
    <div className="overflow-hidden bg-black py-10">
      <h2 className="text-white text-center mb-5 text-2xl md:text-4xl font-bold">
        Academic Collaboration
      </h2>
      <div className="flex justify-center items-center my-5">
        <div className="w-16 h-1 bg-orange-500 rounded"></div>
        <div className="w-3 h-3 bg-orange-500 rounded-full mx-2"></div>
        <div className="w-16 h-1 bg-orange-500 rounded"></div>
      </div>
      <div className="flex w-full animate-scrollX">
        {[...brandLogos, ...brandLogos].map((logo, index) => (
          <Logo key={index} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrollHiring;
