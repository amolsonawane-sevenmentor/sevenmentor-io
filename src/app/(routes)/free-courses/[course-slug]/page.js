import { notFound } from "next/navigation"
import FreeCourseBanner from "../../../../components/FreePaidCourses/FreePaidCourses/FreeIndividual/FreeCourseBanner/FreeCourseBanner.jsx"
import { getCourseBySlug, getAllCourseSlugs } from "../../../../lib/free-course-data.js"

export async function generateStaticParams() {
  const slugs = getAllCourseSlugs()
  return slugs.map((slug) => ({
    "course-slug": slug,
  }))
}



export async function generateMetadata({ params }) {

  const newParam = await params

  const course = getCourseBySlug(newParam["course-slug"])

  if (!course) {
    return {
      title: "Course Not Found",
      description: "The requested course could not be found.",
    }
  }

  return {
    title: `${course.title} | Free Course | SevenMentor`,
    description: course.metaDescription || course.description,
    keywords: course.keywords || [course.title, "free course", "online learning", "SevenMentor"],
    // openGraph: {
    //   title: course.title,
    //   description: course.metaDescription || course.description,
    //   images: [
    //     {
    //       url: course.image,
    //       width: 1200,
    //       height: 630,
    //       alt: course.title,
    //     },
    //   ],
    //   type: "website",
    // },
    alternates: {
      canonical: `/free-courses/${newParam["course-slug"]}`,
    },
  }
}

export  default async function FreeCoursePage({ params }) {

  const newParam  = await params

  const course = getCourseBySlug(newParam["course-slug"])

  if (!course) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <main>
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto">
            <FreeCourseBanner courseInfo={course} />
          </div>
        </section>
      </main>
    </div>
  )
}
