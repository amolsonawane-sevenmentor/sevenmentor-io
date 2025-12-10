"use client";

import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const BlogCarousel = ({ blogs }) => {
  const router = useRouter();
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateScrollButtons);
    updateScrollButtons();
  }, [emblaApi, updateScrollButtons]);

  // Function to truncate excerpt to 10-15 words
  const truncateExcerpt = (text, wordLimit = 15) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  const handleNavigation = (slug) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    router.push(`/${slug}`);
  };

  // console.log("All blogs data in carousel", blogs);
  return (
    <div className="relative max-w-6xl mx-auto md:mt-20 mt-8">
      <h2 className="text-3xl font-bold mb-5 text-center md:text-left">
        Suggested <span className="text-orange-500">Blogs</span>
      </h2>

      {blogs.length > 0 ? (
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex space-x-4 md:py-5 py-5">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="flex-none w-[300px] bg-gradient-to-br from-orange-500/20 via-black/95 to-orange-500/20 shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform transform hover:scale-[1.00]"
                onClick={() => handleNavigation(blog.slug)}
              >
                <div className="bg-white text-black p-4 rounded-lg shadow-md hover:scale-[1.03] transform transition-transform flex flex-col h-full cursor-pointer">
                  <div className="relative w-full h-40">
                   <Image
  src={blog.image}
  alt={blog.imageAlt || "Blog Post"}
  width={400} // You can adjust this value
  height={250} // You can adjust this value
  className="object-cover rounded-lg"
  sizes="(max-width: 768px) 100vw, 33vw"
/>

                  </div>

                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-[16px] font-bold line-clamp-2">
                      {blog.title}
                    </h3>
                    <p
                      className="text-sm opacity-90 mt-2 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: blog.content1 }}
                    ></p>

                    <div className="mt-2 flex items-center justify-between gap-2">
                      <div className="flex items-center whitespace-nowrap gap-2">
                        <span className="text-sm">By :</span>
                        <span className="text-sm">{blog.authorName}</span>
                      </div>

                      <button
                        className="cursor-pointer w-full py-[8px] rounded-full text-[11px] font-semibold bg-orange-600 text-white hover:bg-orange-500"
                        style={{ boxShadow: "4px 4px 0 0 #4f4f4f" }}
                      >
                        <span className="flex justify-center items-center">
                          VIEW MORE
                          <MoveRight className="text-white font-bold w-4 h-3" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-white text-center">No related blogs found.</p>
      )}

      <button
        onClick={() => emblaApi?.scrollPrev()}
        disabled={!canScrollPrev}
        className="cursor-pointer absolute md:left-[-50px] left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 shadow-lg p-2 rounded-full text-white"
      >
        <MoveLeft size={18} />
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        disabled={!canScrollNext}
        className="cursor-pointer absolute md:right-[-50px] right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 shadow-lg p-2 rounded-full text-white"
      >
        <MoveRight size={18} />
      </button>

      {/* Explore More Button */}
      <div className="flex justify-center mt-5">
        <Link
          href="/blog"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <button className="cursor-pointer bg-orange-500 text-white px-6 py-2 rounded-lg flex items-center gap-2">
            Explore all <MoveRight size={18} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BlogCarousel;
