'use client';

import React from "react";
import Image from "next/image";


import Link from 'next/link';

export default function BlogFooter({ post }) {
  return (
    <div className="max-w-6xl w-full bg-gradient-to-br from-orange-500/20 via-black/95 to-orange-500/20 p-6 mt-20 rounded-lg mx-auto ">
      <div className="text-center">
        <p className="italic text-white mt-2">
          Call the Trainer and Book your free demo Class..... Call now!!!
        </p>
        <p className="text-sm text-gray-100 mt-1">| SevenMentor Pvt Ltd.</p>
        <p className="text-sm text-gray-100 mt-2">
          © Copyright 2025 | SevenMentor Pvt Ltd.
        </p>

        {/* Social Media Sharing Icons */}
        <div className="flex justify-center mt-6 space-x-6">
          <Link
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(post.url)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
            className="hover:scale-110 transition-transform duration-200"
          >
            <Image
              src="/assets/facebook.webp"
              alt="Share on Facebook"
              className="h-8 w-8"
              width={32}
              height={32}
            />
          </Link>
          <Link
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(post.url)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Twitter"
            className="hover:scale-110 transition-transform duration-200"
          >
            <Image
              src="/assets/twitter.webp"
              alt="Share on Twitter"
              className="h-8 w-8"
              width={32}
              height={32}
            />
          </Link>
          <Link
            href="https://www.instagram.com/sevenmentor_it_courses?igsh=dTh6NjhpemF3Mndl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit our Instagram"
            className="hover:scale-110 transition-transform duration-200"
          >
            <Image
              src="/assets/insta.webp"
              alt="Visit Instagram"
              className="h-8 w-8"
              width={32}
              height={32}
            />
          </Link>
          <Link
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(post.url)}&title=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
            className="hover:scale-110 transition-transform duration-200"
          >
            <Image
              src="/assets/linkedin.webp"
              alt="Share on LinkedIn"
              className="h-8 w-8"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
