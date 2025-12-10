"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft } from "lucide-react";
import BlogPartOne from "./BlogContent/BlogPartOne";
import BlogPartTwo from "./BlogContent/BlogPartTwo";
import BlogFooter from "./BlogFooter";
import BlogForm from "../Forms/BlogForm";
import BlogCarousel from "./BlogCarousel";
import BlogRelatedCourse from "./BlogRelatedCourse";
import PopupForm from "../Forms/PopUpForm/PopUpForm";

// Import all services
import {
  fetchBlogsByCategory,
  fetchBlogPosts,
  fetchBlogPromotion,
  fetchBlogPost,
} from "../../services/BlogService";
import axiosInstance from "../../services/AxiosInstance"; // Import axiosInstance directly
import Seo from "../Seo/Seo";
import StickyButton from "../StickyButton/StickyButton.jsx";
import ContactLinks from "../Courses/CourseComponents/ContactLinks/ContactLinks.jsx";
import Image from "next/image";

export default function IndividualBlogPage({ id, initialData }) {
  const router = useRouter();
  const params = useParams();

  // If id is not provided via props, try to get it from URL params
  const blogId = id || params?.id;

  const [formPosition, setFormPosition] = useState("static"); // "static", "fixed", or "absolute"
  const [formTopPosition, setFormTopPosition] = useState(0);
  const [formWidth, setFormWidth] = useState("100%");
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to control popup visibility

  // State for API data
  const [blogData, setBlogData] = useState(initialData || ""); // Changed from post to blogData
  const [categoryData, setCategoryData] = useState(null);
  const [promotionData, setPromotionData] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [domains, setDomains] = useState([]); // State for domains data
  const [loading, setLoading] = useState(true);
  const [responseData, setResponseData] = useState({}); // Add state for meta data (named to match CoursePage)

  const currentUrl = typeof window !== "undefined" ? window.location.href : "";
  const slug = blogData?.slug || blogId; // Use slug from blogData if available, otherwise use id

  // Create canonical URL
  const canonicalUrl = `https://www.sevenmentor.com/${slug}`;

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // References for the form, images container, and footer
  const formRef = useRef(null);
  const formWrapperRef = useRef(null);
  const imagesContainerRef = useRef(null);
  const footerRef = useRef(null);
  const rightSidebarRef = useRef(null);

  // Function to open the popup form
  const openPopupForm = () => {
    setIsPopupOpen(true);
  };

  // Function to close the popup form
  const closePopupForm = () => {
    setIsPopupOpen(false);
  };

  // Fetch blog if we don't have initialData
  useEffect(() => {
    if (initialData) {
      setBlogData(initialData);
      setLoading(false);
      return;
    }

    const fetchBlog = async () => {
      try {
        setLoading(true);
        const response = await fetchBlogPost(blogId);

        if (response) {
          setBlogData(response.data);

          // Fetch meta data after getting blog data
          if (response.data && response.data.slug) {
            fetchMetaData(response.data.slug);
          }
        } else {
          setBlogData(null);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    if (blogId) {
      fetchBlog();
    }
  }, [blogId, initialData]);

  // Replace the existing meta data fetch useEffect with this:
  useEffect(() => {
    const fetchMetaData = async (metaId) => {
      try {
        const response = await axiosInstance.get(`/metas/${metaId}`);

        if (true) {
          setResponseData(response.data.data);
        } else {
          setResponseData({});
        }
      } catch (error) {
        console.error("Error fetching meta data:", error);
        setResponseData({});
      }
    };

    // Only attempt to fetch if we have meta data
    if (blogData && blogData.meta && blogData.meta.length > 0) {
      fetchMetaData(blogData.meta[0].id);
    }
  }, [blogData]);

  useEffect(() => {
    const fetchPromotions = async () => {
      try {
        const response = await fetchBlogPromotion();
        // console.log("Fetching promotional data...", response);

        if (
          response &&
          response.data.length > 0 &&
          blogData?.category?.length > 0
        ) {
          // Extract the blog category title
          const blogCategoryTitle = blogData.category[0].title
            .toLowerCase()
            .trim();

          // Find a promotion that matches the blog's category
          const matchingPromotion = response.data.find(
            (promo) =>
              promo.blogCategory?.toLowerCase().trim() === blogCategoryTitle
          );

          if (matchingPromotion) {
            const { image1, imageAlt1, image2, imageAlt2 } = matchingPromotion;
            setPromotionData({ image1, imageAlt1, image2, imageAlt2 });
          } else {
            setPromotionData(null);
          }
        } else {
          setPromotionData(null);
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (blogData?.category) {
      fetchPromotions();
    }
  }, [blogId, blogData]);

  // Fetch related blogs based on category
  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        if (!blogData || !blogData.category || blogData.category.length === 0) {
          return;
        }

        const currentCategoryId =
          blogData.category[0].id || blogData.category[0]; // supporting both object and ID form
        const currentBlogId = blogData.id;

        // console.log("Current blog ID:", currentBlogId);
        // console.log("Looking for blogs with category ID:", currentCategoryId);

        const response = await fetchBlogPosts(10000);

        if (response && response.data) {
          // console.log("Sample blog structure:", response.data[0]);

          const filteredBlogs = response.data.filter((blog) => {
            if (blog.id === currentBlogId) return false;

            const blogCategory = blog.category;

            if (Array.isArray(blogCategory)) {
              return blogCategory.some(
                (cat) =>
                  cat?.id === currentCategoryId || cat === currentCategoryId
              );
            } else if (
              typeof blogCategory === "object" &&
              blogCategory !== null
            ) {
              return blogCategory.id === currentCategoryId;
            } else {
              return blogCategory === currentCategoryId;
            }
          });

          // console.log(
          //   `Found ${filteredBlogs.length} blogs with matching category`
          // );

          setRelatedBlogs(filteredBlogs);
          // console.log(
          //   "Related blogs prepared for display:",
          //   filteredBlogs.slice(0, 3)
          // );
        } else {
          console.log("No blogs found or invalid response format");
          setRelatedBlogs([]);
        }
      } catch (error) {
        console.error("Error fetching related blogs:", error);
        setRelatedBlogs([]);
      }
    };

    fetchRelatedBlogs();
  }, [blogData]);

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === "undefined") return;

    // Initial setup - measure the form wrapper width
    if (rightSidebarRef.current) {
      setFormWidth(rightSidebarRef.current.offsetWidth + "px");
    }

    const handleScroll = () => {
      if (
        formRef.current &&
        formWrapperRef.current &&
        footerRef.current &&
        imagesContainerRef.current &&
        rightSidebarRef.current
      ) {
        const form = formRef.current;
        const formWrapper = formWrapperRef.current;
        const footer = footerRef.current;
        const imagesContainer = imagesContainerRef.current;
        const rightSidebar = rightSidebarRef.current;

        const formHeight = form.offsetHeight;
        const imagesBottom = imagesContainer.getBoundingClientRect().bottom;
        const footerTop = footer.getBoundingClientRect().top;
        const rightSidebarTop = rightSidebar.offsetTop;

        // Update form width based on sidebar width
        const currentWidth = rightSidebar.offsetWidth + "px";
        if (formWidth !== currentWidth) {
          setFormWidth(currentWidth);
        }

        // Buffer space before footer
        const bufferSpace = 100;

        // Check if we've scrolled past the images
        if (imagesBottom <= 120) {
          // Check if footer is approaching - hide form completely when footer section starts
          if (footerTop <= window.innerHeight) {
            // Hide form when footer section becomes visible
            setFormPosition("static");
            setFormTopPosition(0);
          } else if (footerTop - 120 - formHeight - bufferSpace <= 0) {
            // Calculate the absolute position to stop the form before footer
            const stopPosition =
              footer.offsetTop - formHeight - rightSidebarTop - bufferSpace;
            setFormPosition("absolute");
            setFormTopPosition(stopPosition);
          } else {
            // Fix the form in place
            setFormPosition("fixed");
            setFormTopPosition(120);
          }
        } else {
          // Reset to normal flow when above the images
          setFormPosition("static");
          setFormTopPosition(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [formWidth]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
        <h1 className="text-2xl font-bold mb-4">Loading blog...</h1>
      </div>
    );
  }

  if (!blogData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-6">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Blog Not Found</h1>
        <button
          className="cursor-pointer mb-8 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center gap-2"
          onClick={() => router.push("/blog")}
        >
          <ArrowLeft size={20} className="inline" />
          Blog List
        </button>
      </div>
    );
  }

  // Split blogData content into parts for the different blog sections
  const content1 = blogData.content1;
  const content2 = blogData.content2;

  // Default image URLs for fallback
  const defaultBannerImage1 = "/images/default-banner1.webp";
  const defaultBannerImage2 = "/images/default-banner2.webp";

  return (
    <>
      <Seo
        title={responseData.metaTitle || blogData.title || "Blog Post"}
        description={
          responseData.metaDescription ||
          `Read about ${blogData.title}` ||
          "Blog Post Description"
        }
        keywords={responseData.focusKeyword || "blog, sevenmentor"}
        schema={responseData.metaJsSchema || ""}
        canonicalUrl={canonicalUrl}
      />
      <div className="min-h-screen bg-black text-white p-3 md:p-6 md:mt-20 mt-6">
        <button
          className="cursor-pointer mb-8 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center gap-2"
          onClick={() => router.push("/blog")}
        >
          <ArrowLeft size={20} className="inline" />
          Blog List
        </button>

        <div className="relative flex flex-col md:mx-10 mx-2">
          {/* Main Content Section */}
          <div className="flex flex-col lg:flex-row gap-14">
            {/* Left Section: Blog Content */}
            <div className="max-w-6xl w-full lg:w-2/3 bg-gradient-to-br from-orange-500/20 via-black/95 to-orange-500/20 rounded-lg shadow-lg">
              <Image
                src={blogData.image || "/placeholder.svg"}
                alt={blogData.imageAlt || blogData.title}
                width={800} // Adjust this width as needed
                height={500} // Adjust this height as needed
                className="md:w-full w-full h-auto object-cover"
              />
              <div className="md:p-6 p-2 space-y-4">
                <h1 className="md:text-4xl text-2xl font-bold text-[#f97316]">
                  {blogData.title}
                </h1>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <span className="text-white text-lg">
                    By - {blogData.authorName}
                  </span>
                  <span className="text-white text-lg">•</span>
                  <span className="text-white text-lg">
                    {new Date(blogData.scheduledDate).toLocaleDateString()}
                  </span>
                </div>

                {/* Render different parts of the blog content */}
                <BlogPartOne content={content1} />
                <BlogRelatedCourse
                  data={domains}
                  domain={blogData.category}
                  courses={blogData?.demandingcourses}
                />
                <BlogPartTwo content={content2} />
              </div>
            </div>

            {/* Right Section: Images and Form - Only visible on desktop */}
            <div
              ref={rightSidebarRef}
              className="hidden lg:block w-1/3 relative items-center"
            >
              {/* Images Container */}
              <div ref={imagesContainerRef} className="space-y-8 mb-6">
                {/* First banner - clickable to open popup */}
                <div
                  className="rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                  onClick={openPopupForm}
                >
                  <Image
                    src={promotionData?.image1 || "/placeholder.svg"}
                    alt={promotionData?.imageAlt1 || "Promotional banner 1"}
                    width={400} // Adjust based on 25vw of your typical screen size
                    height={300} // Adjust based on the actual image ratio
                    className="w-[25vw] h-auto object-cover"
                  />
                </div>

                {/* Second banner - clickable to open popup */}
                <div
                  className="rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                  onClick={() => {
                    scrollToTop();
                    router.push(
                      "/100-percent-job-placement-institute-in-pune.php"
                    );
                  }}
                >
                  <Image
                    src={promotionData?.image2 || "/placeholder.svg"}
                    alt={promotionData?.imageAlt2 || "Promotional banner 2"}
                    width={400} // Approximate value for 25vw on a 1600px screen
                    height={300} // Adjust based on the image’s aspect ratio
                    className="w-[25vw] h-auto object-cover"
                  />
                </div>
              </div>

              {/* Form Wrapper - maintains space in the document flow */}
              <div ref={formWrapperRef} className="relative">
                {/* Form Container - this will be positioned */}
                <div
                  ref={formRef}
                  style={{
                    position: formPosition,
                    top:
                      formPosition === "fixed" || formPosition === "absolute"
                        ? `${formTopPosition}px`
                        : "auto",
                    width: formPosition === "fixed" ? formWidth : "100%",
                    zIndex: formPosition === "fixed" ? 10 : "auto",
                    transition: "none", // Remove transition to prevent visual glitches
                    visibility:
                      formPosition === "static" &&
                      footerRef.current &&
                      footerRef.current.getBoundingClientRect().top <=
                        window.innerHeight
                        ? "hidden"
                        : "visible",
                  }}
                >
                  <BlogForm email={blogData.category[0].email} />
                </div>

                {/* Spacer div to maintain document flow when form is fixed */}
                {formPosition === "fixed" && (
                  <div
                    style={{
                      height: formRef.current
                        ? formRef.current.offsetHeight + "px"
                        : "auto",
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Mobile View: Right Section Content displayed below main content */}
          <div className="lg:hidden mt-8 space-y-8">
            {/* Mobile Promotions */}
            <div className="space-y-6">
              {/* First banner - clickable to open popup */}
              {promotionData?.image1 && (
                <div
                  className="rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                  onClick={openPopupForm}
                >
                  <Image
                    src={promotionData?.image1 || "/placeholder.svg"}
                    alt={promotionData?.imageAlt1 || "Promotional banner 1"}
                    width={1200} // Approximate full-width, adjust as needed
                    height={500} // Adjust to maintain proper aspect ratio
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              {/* Second banner - clickable to navigate */}
              {promotionData?.image2 && (
                <div
                  className="rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform hover:scale-105"
                  onClick={() => {
                    scrollToTop();
                    router.push(
                      "/100-percent-job-placement-institute-in-pune.php"
                    );
                  }}
                >
                  <Image
                    src={promotionData?.image2 || "/placeholder.svg"}
                    alt={promotionData?.imageAlt2 || "Promotional banner 2"}
                    width={1200} // Adjust this value to your expected full width
                    height={500} // Adjust based on your desired aspect ratio
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>

            {/* Mobile Form */}
            <div className="w-full">
              <BlogForm email={blogData.category[0].email} />
            </div>
          </div>
        </div>

        {/* Blog Footer Section */}
        <div ref={footerRef}>
          <BlogFooter
            post={{
              ...blogData,
              url: currentUrl,
              author: { name: blogData.authorName }, // Adapt to match expected structure
            }}
          />
          <BlogCarousel blogs={relatedBlogs} />
        </div>

        {/* Popup Form Component */}
        <PopupForm
          isOpen={isPopupOpen}
          onClose={closePopupForm}
          title="Get in Touch With Us"
          mailId={blogData?.category[0].email || "registration@sevenmentor.com"}
          contactNo={blogData?.category[0].whatsappNumber || "7798058777"}
          bannerTitle={blogData.title}
          mailSubject={`Enquiry for ${blogData.title}`}
        />
      </div>
      <StickyButton
        mailId={blogData?.category[0].email || "registration@sevenmentor.com"}
        contactNo={blogData?.category[0].whatsappNumber || "7798058777"}
        bannerTitle={blogData.title}
      />
      <ContactLinks
        whatsappno={blogData?.category[0].whatsappNumber || "7798058777"}
        phoneno={blogData?.category[0].telephoneNumber}
      />
    </>
  );
}
