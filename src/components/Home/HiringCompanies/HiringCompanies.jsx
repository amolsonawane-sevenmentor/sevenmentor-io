"use client"
import React from "react";
import { brandLogosRows } from "./BrandLogos.jsx";
import "./HiringCompanies.css";
import Image from "next/image";
// Reusable Row Component for rendering each row of logos
const LogoRow = ({ logos, animationClass, width }) => (
  <div className={`flex w-[90%] lg:w-full overflow-hidden mt-2 mb-1 ${width}`}>
    <div className={`flex ${animationClass}`}>
      {logos.concat(logos).map(
        (
          logo,
          index // Duplicate the logos for seamless scrolling
        ) => (
          <div
            key={`logo-${index}`}
            className="flex-shrink-0  w-[100px] h-full sm:w-[120px] md:w-[150px] lg:w-[190px] p-2 grid place-items-center rounded-lg "
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={170} // Matches lg:w-[170px]
              height={80} // Matches md:h-[80px]
              className="w-full bg-white h-full sm:h-[60px] md:h-[80px] lg:w-[170px] object-contain rounded-lg border-l-[6px] border-r-[6px] border-orange-500"
              style={{
                boxShadow:
                  "0 4px 6px -1px rgba(249, 115, 22, 0.3), 0 2px 4px -1px rgba(249, 115, 22, 0.2)",
              }}
            />
          </div>
        )
      )}
    </div>
  </div>
);

function InfiniteScroll() {
  const quarterPoint = Math.ceil(brandLogosRows.length / 4);
  const row1 = brandLogosRows.slice(0, quarterPoint);
  const row2 = brandLogosRows.slice(quarterPoint, quarterPoint * 2);
  const row3 = brandLogosRows.slice(quarterPoint * 2, quarterPoint * 3);
  const row4 = brandLogosRows.slice(quarterPoint * 3);

  return (
    <div
      className="flex flex-col items-center justify-center overflow-hidden text-black"
      style={{
        background:
          "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(64,43,33,1) 0%, rgba(0,0,0,1) 50%)",
      }}
    >
      <div className="w-full md:w-[90%] flex flex-col items-center">
        {/* Title Section */}
        <div className="text-center mt-5 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-md border border-blue-200">
          <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#02203c] leading-tight tracking-tight mb-2">
            Our Alumni <span className="text-orange-500">Works At</span>
          </div>
        </div>

        {/* Rows */}
        <LogoRow logos={row1} animationClass="animate-scrollX" width={"md:!w-full"} />
        <LogoRow logos={row2} animationClass="animate-scrollX-reverse" width={"md:!w-[80%]"} />
        <LogoRow logos={row3} animationClass="animate-scrollX" width={"md:!w-[70%]"} />
        <LogoRow logos={row4} animationClass="animate-scrollX-reverse" width={"md:!w-[60%]"} />
      </div>
    </div>
  );
}

export default InfiniteScroll;
