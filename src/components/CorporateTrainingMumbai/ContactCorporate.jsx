


"use client"

import Image from "next/image"
import { memo } from "react"

const ContactCorporate = memo(({ altText = "Corporate Contact Banner" }) => {
  return (
    <section
      className="w-full px-4 md:px-10 mt-2 mb-2"
      style={{
        minHeight: "200px",
        contain: "layout style paint",
      }}
    >
      <div className="relative w-full aspect-[21/8] md:aspect-[2/1] lg:aspect-[5/2]">
        <Image
          src="/assets/corporate/corporatemumbai/footer_corporate_mumbai.webp"
          alt={altText}
          fill
          className="object-cover rounded-lg"
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 90vw, 80vw"
          priority={false}
          loading="lazy"
          decoding="async"
          quality={85}
        />
      </div>
    </section>
  )
})

ContactCorporate.displayName = "ContactCorporate"

export default ContactCorporate