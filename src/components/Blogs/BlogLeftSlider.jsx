'use client';

import React from "react";

export default function BlogLeftSlider({ categories, onCategorySelect, selectedCategory, blogPosts }) {
  const getCategoryCount = (categoryId) => {
    if (categoryId === "all") {
      return blogPosts.length;
    } else {
      return blogPosts.filter((post) => post.category === categoryId).length;
    }
  };

  return (
    <div className="md:w-64 h-full border-r border-orange-500">
      <nav className="space-y-2 p-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.title)}
            className={`cursor-pointer w-full rounded-lg px-4 py-2 text-sm text-left text-white ${
              selectedCategory === category.title
                ? "bg-gray-200 font-medium !text-black"
                : "hover:bg-gray-100 hover:text-black"
            }`}
          >
            {category.title}
            <span className="ml-2 text-orange-500">
              ({getCategoryCount(category.id)})
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}
