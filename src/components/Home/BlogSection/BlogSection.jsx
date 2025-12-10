"use client";
import { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { fetchBlogPosts } from "../../../services/BlogService.js";
import Image from "next/image";

export default function BlogSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    startIndex: 1,
    align: "center",
  });

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blogs from API
  useEffect(() => {
    const getBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetchBlogPosts();

        if (response && response.data) {
          // Sort blogs by date (newest first) and take top 5
          const sortedBlogs = [...response.data]
            .sort(
              (a, b) => new Date(b.scheduledDate) - new Date(a.scheduledDate)
            )
            .slice(0, 5);

          setBlogs(sortedBlogs);
        }
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    getBlogs();
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  if (loading) {
    return (
      <div className="relative bg-black py-12">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-10 tracking-wide px-6">
          Read Our <span className="text-orange-500"> Latest Blogs</span>
        </h2>
        <div className="flex justify-center items-center h-[400px]">
          <div className="animate-pulse text-orange-500 text-xl">
            Loading blogs...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative bg-black py-12">
        <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-10 tracking-wide px-6">
          Read Our <span className="text-orange-500"> Latest Blogs</span>
        </h2>
        <div className="flex justify-center items-center h-[400px]">
          <div className="text-red-500 text-xl">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-black py-6 pb-0 md:py-12 md:px-20 overflow-hidden">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-white mb-10 tracking-wide px-6">
        Read Our <span className="text-orange-500"> Latest Blogs</span>
      </h2>

      {blogs.length > 0 ? (
        <>
          <div className="" ref={emblaRef}>
            <div className="flex -ml-4">
              {blogs.map((blog, index) => (
                <div
                  key={blog.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4 cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link href={`/${blog.slug}`}>
                    <div
                      className={`relative h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden transform transition-all duration-500 mx-2 md:mx-0 ${
                        hoveredIndex === index
                          ? "shadow-[0_0_8px_2px_rgba(249,115,22,0.6)]"
                          : "shadow-none"
                      } border-[5px] border-white bg-white`}
                    >
                      <div className="relative w-full h-[400px]">
                        <Image
                          src={blog.image || "/placeholder.svg"}
                          alt={blog.imageAlt || blog.title}
                          fill
                          className={`object-cover object-left w-full h-full transform transition-transform duration-300 ${
                            hoveredIndex === index ? "scale-110" : "scale-100"
                          }`}
                        />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-8 md:p-10 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-white line-clamp-2">
                          {blog.title}
                        </h2>
                        <div
                          className="text-base md:text-lg text-gray-300 max-w-xl line-clamp-2"
                          dangerouslySetInnerHTML={{
                            __html: blog.content1
                              ? blog.content1.replace(/<\/?[^>]+(>|$)/g, "")
                              : "No description available",
                          }}
                        />
                        {hoveredIndex === index && (
                          <div>
                            <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-full hover:from-orange-700 hover:to-orange-600 transition-all duration-300">
                              View More
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex md:block justify-center items-center gap-16">
            <button
              className="block md:absolute md:left-4 md:top-1/2 md:-translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-lg mt-4 md:mt-0"
              onClick={scrollPrev}
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              className="block md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-600/50 mt-4 md:mt-0"
              onClick={scrollNext}
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/blog"
              className="px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-semibold rounded-full hover:from-orange-700 hover:to-orange-600 transition-all duration-300"
            >
              View All Blogs
            </Link>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-[400px]">
          <div className="text-white text-xl">
            No blogs available at the moment.
          </div>
        </div>
      )}
    </div>
  );
}
