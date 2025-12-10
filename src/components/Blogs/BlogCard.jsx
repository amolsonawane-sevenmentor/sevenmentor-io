import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ post, categories }) {
  const { title, image, imageAlt, content1, scheduledDate, slug, authorName, category } = post;

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  // Find category title from category ID
  const matchedCategory = categories.find(cat => cat.id === category);
  const categoryTitle = matchedCategory ? matchedCategory.title : "Uncategorized";

  return (
    <Link href={`/${slug}`} passHref>
      <article 
        className="group relative flex flex-col space-y-4 bg-gradient-to-br from-orange-500/20 via-black/95 to-orange-500/20 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        onClick={scrollToTop}
      >
        <div className="relative overflow-hidden rounded-lg bg-gray-500">
          {image ? (
            <Image
              src={image}
              alt={imageAlt || "Blog Post"}
              width={500}
              height={300}
              className="object-cover w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <Image
              src="/placeholder.svg"
              alt="Placeholder"
              width={500}
              height={300}
              className="object-cover w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
          )}
          <div className="absolute top-0 left-0 bg-orange-500 text-black text-sm font-semibold px-2 py-1 rounded-br-lg">
            {categoryTitle}
          </div>
        </div>
        <div className="space-y-3 text-white">
          <h2 className="text-2xl font-bold leading-tight group-hover:text-orange-400 transition-colors duration-300">
            {title}
          </h2>
          <p 
            className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300 line-clamp-2" 
            dangerouslySetInnerHTML={{ __html: content1 }}
          ></p>
          <div className="flex items-center gap-2 text-sm text-gray-100">
            <span className="text-white">By {authorName}</span>
            <span>•</span>
            <span>{new Date(scheduledDate).toLocaleDateString()}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}