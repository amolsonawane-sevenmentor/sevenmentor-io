import React from 'react';

import Image from "next/image"
export default function DesktopCorporateBanner() {
  return (
    <div className="relative w-full min-h-[600px] h-auto md:mt-8 mt-8 overflow-hidden">
      <Image
        src="/assets/corporate/corporatemumbai/Corporate_banner_mumbai.webp"
        alt="Review Section"
        priority
        fill
        quality={80}
        sizes="(max-width: 768px) 100vw, 1920px"
        className="object-cover"
      />
    </div>
  );
}
