import { courses } from "../../../data/courses";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const course = courses.find((c) => c.slug === slug);

    if (!course || !course.seo) {
        return {
            title: "Course Not Found",
        };
    }

    return {
        title: course.seo.title,
        description: course.seo.description,
        keywords: course.seo.keywords,
    };
}

export default function CourseLayout({ children }) {
    return <>{children}</>;
}
