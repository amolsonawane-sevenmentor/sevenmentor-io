import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
const CoursePage = dynamic(()=> import("../../../components/Courses/CoursePage.jsx"));
const IndividualBlogPage = dynamic(()=> import("../../../components/Blogs/IndivisualBlogPage.jsx"));
const ItTrainingCourse = dynamic(()=> import("../../../components/ItTrainingCourse/ItTrainingCourse.jsx"))
import { baseUrl } from "../../../services/AxiosInstance.js";

// Helper to check if it's an image slug
function isInvalidSlug(slug) {
  return /\.(webp|jpg|jpeg|png|gif|ico)$/i.test(slug);
}

// Fetch course by slug
async function getCourseData(slug) {
  if (isInvalidSlug(slug)) return null;
  try {
    const res = await fetch(`${baseUrl}/api/v1/courses/${slug}`, {
      next: { revalidate: 120 }, // ⬅️ ISR applied here (120 seconds)
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.data || null;
  } catch (e) {
    console.error("Error fetching course:", e);
    return null;
  }
}

// Fetch blog by slug
async function getBlogData(slug) {
  if (isInvalidSlug(slug)) return null;
  try {
    const res = await fetch(`${baseUrl}/api/v1/blogs/${slug}`, {
      next: { revalidate: 120 }, 
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.data || null;
  } catch (e) {
    console.error("Error fetching blog:", e);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params; // Await params to get slug
  const courseData = await getCourseData(slug);
  const blogData = !courseData ? await getBlogData(slug) : null;

  const meta = courseData?.meta?.[0] || blogData?.meta?.[0];

  return {
    title: meta?.metaTitle || "SevenMentor",
    description: meta?.metaDescription || "Explore our wide range of training courses and blogs.",
    keywords: meta?.focusKeyword || "",
    alternates: {
      canonical: `https://www.sevenmentor.com/${slug}`,
    },
  };
}

export default async function SlugPage({ params }) {
  const { slug } = await params; // Await params to get slug
  const courseData = await getCourseData(slug);

  if(slug.includes("best-it-training-institute")){
    return <ItTrainingCourse initialData={courseData} />
  }

  if (courseData) {
    return <CoursePage initialData={courseData} />;
  }

  const blogData = await getBlogData(slug);

  if (blogData) {
    return <IndividualBlogPage initialData={blogData} />;
  }

  // Not a course or a blog
  notFound();
}





// ======================================================CMS CODE ==================================================




// import { notFound } from "next/navigation"
// import dynamic from "next/dynamic"

// const CoursePage = dynamic(() => import("../../../components/Courses/CoursePage.jsx"))
// const IndividualBlogPage = dynamic(() => import("../../../components/Blogs/IndivisualBlogPage.jsx"))
// const ItTrainingCourse = dynamic(() => import("../../../components/ItTrainingCourse/ItTrainingCourse.jsx"))
// const CorporateTraining = dynamic(() => import("../../../components/CorporateTraining/CorporateTraining.jsx"))

// import { baseUrl } from "../../../services/AxiosInstance.js"

// // Helper to check if it's an image slug
// function isInvalidSlug(slug) {
//   return /\.(webp|jpg|jpeg|png|gif|ico)$/i.test(slug)
// }

// // Fetch course by slug
// async function getCourseData(slug) {
//   if (isInvalidSlug(slug)) return null

//   try {
//     const res = await fetch(`${baseUrl}/api/v1/courses/${slug}`, {
//       next: { revalidate: 120 }, // ISR applied here (120 seconds)
//     })

//     if (!res.ok) return null

//     const data = await res.json()
//     return data.data || null
//   } catch (e) {
//     console.error("Error fetching course:", e)
//     return null
//   }
// }

// // Fetch blog by slug
// async function getBlogData(slug) {
//   if (isInvalidSlug(slug)) return null

//   try {
//     const res = await fetch(`${baseUrl}/api/v1/blogs/${slug}`, {
//       next: { revalidate: 120 },
//     })

//     if (!res.ok) return null

//     const data = await res.json()
//     return data.data || null
//   } catch (e) {
//     console.error("Error fetching blog:", e)
//     return null
//   }
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params

//   const courseData = await getCourseData(slug)
//   const blogData = !courseData ? await getBlogData(slug) : null

//   const meta = courseData?.meta?.[0] || blogData?.meta?.[0]

//   return {
//     title: meta?.metaTitle || "SevenMentor",
//     description: meta?.metaDescription || "Explore our wide range of training courses and blogs.",
//     keywords: meta?.focusKeyword || "",
//     alternates: {
//       canonical: `https://www.sevenmentor.com/${slug}`,
//     },
//   }
// }

// export default async function SlugPage({ params }) {
//   const { slug } = await params

//   const courseData = await getCourseData(slug)

//   if (slug.includes("best-it-training-institute")) {
//     return <ItTrainingCourse initialData={courseData} />
//   }

//   if (slug.includes("corporate-training")) {
//     return <CorporateTraining initialData={courseData} />
//   }

//   if (courseData) {
//     return <CoursePage initialData={courseData} />
//   }

//   const blogData = await getBlogData(slug)

//   if (blogData) {
//     return <IndividualBlogPage initialData={blogData} />
//   }

//   // Not a course or a blog
//   notFound()
// }
