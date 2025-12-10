"use client";

import Image from "next/image";
import Link from 'next/link';

const ContactFranchise = () => {
  return (
    <section className="relative bg-orange-500 text-white py-6">

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-around items-center max-w-5xl mx-auto px-6">
        {/* Text */}
        <h2 className="text-lg md:text-3xl font-semibold mb-4 md:mb-0">
          Connect with us on Social Media
        </h2>

        {/* Social Media Icons */}
        <div className="flex items-center gap-4">
          <Link
            href="https://www.facebook.com/sevenmentor"
            target="blank"
            className="text-white hover:text-orange-500"
          >
            <Image src="/assets/facebook.webp" alt="Facebook" className="h-9 w-9" height={36} width={36}   />
          </Link>
          <Link
            href="https://twitter.com/SevenMentor"
            target="blank"
            className="text-white hover:text-orange-500"
          >
            <Image src="/assets/twitter.webp" alt="Twitter" className="h-9 w-9" height={36} width={36}   />
          </Link>
          <Link
            href="https://www.instagram.com/sevenmentor_it_courses?igsh=dTh6NjhpemF3Mndl"
            target="blank"
            className="text-white hover:text-orange-500"
          >
            <Image src="/assets/insta.webp" alt="Instagram" className="h-9 w-9" height={36} width={36}  />
          </Link>
          <Link
            href="https://www.linkedin.com/company/sevenmentor"
            target="blank"
            className="text-white hover:text-orange-500"
          >
            <Image src="/assets/linkedin.webp" alt="LinkedIn" className="h-9 w-9" height={36} width={36}  />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactFranchise;
