import type { MetadataRoute } from "next"
import axiosInstance from "../services/AxiosInstance"

const BASE_URL = "https://sevenmentor.com/"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Define static routes
  const staticRoutes = [
    "",
    "company",
    "contact",
    "blog",
    "100-percent-job-placement-institute-in-pune.php",
    "certificate.php",
    "franchise",
    "careers",
    "hiring-partners",
    "privacy-policy",
    "corporate-training-in-pune.php",
    "review",
    "feedback.php",
    "testimonial",
    "fashion-design-course",
    "interior-design-course",
    "interior-design-courses-in-pune.php",
    "fashion-designing-course-in-pune.php",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  // Fetch course routes
 let courses: any[] = []
  try {
    const courseRes = await axiosInstance.get("courses?limit=100000")
    courses = courseRes?.data?.data || []
  } catch (err) {
    console.error("Failed to fetch courses for sitemap:", err)
  }

  const courseRoutes = courses.map((course) => ({
    url: `${BASE_URL}${course.slug}`,
    lastModified: new Date(course.updatedAt || course.createdAt || new Date()),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  let blogs: any[] = []
  try {
    const blogRes = await axiosInstance.get("blogs?limit=100000")
    blogs = blogRes?.data?.data || []
  } catch (err) {
    console.error("Failed to fetch blogs for sitemap:", err)
  }

  const blogRoutes = blogs.map((blog) => ({
    url: `${BASE_URL}${blog.slug}`,
    lastModified: new Date(blog.updatedAt || blog.createdAt || new Date()),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))
  // Combine all routes into a single sitemap
  return [...staticRoutes, ...courseRoutes, ...blogRoutes]
}
