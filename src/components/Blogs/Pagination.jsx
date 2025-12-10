"use client";
import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  // Scroll to the top of the page
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handlePageChange = (newPage) => {
    onPageChange(newPage); // Trigger the onPageChange callback
    scrollToTop(); // Scroll to the top after changing the page
  };

  // Calculate which page numbers to show (current page + one on each side)
  const getPageNumbers = () => {
    const result = [];

    // Start page (current - 1 or 1 if near the beginning)
    const startPage = Math.max(1, currentPage - 1);

    // End page (current + 1 or totalPages if near the end)
    const endPage = Math.min(totalPages, currentPage + 1);

    // Add ellipsis at start if needed
    if (startPage > 1) {
      result.push("ellipsis-start");
    }

    // Add the page numbers
    for (let i = startPage; i <= endPage; i++) {
      result.push(i);
    }

    // Add ellipsis at end if needed
    if (endPage < totalPages) {
      result.push("ellipsis-end");
    }

    return result;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mt-6 mb-4 px-2">
      {/* First page button */}
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className="cursor-pointer px-2 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed hidden md:block"
        aria-label="First page"
      >
        <span>First</span>
      </button>

      {/* Mobile first page button */}
      <button
        onClick={() => handlePageChange(1)}
        disabled={currentPage === 1}
        className="cursor-pointer px-2 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed md:hidden"
        aria-label="First page"
      >
        <span>«</span>
      </button>

      {/* Previous button */}
      {/* Previous button */}
      <button
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="cursor-pointer px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous page"
      >
        <span className="hidden md:inline">Previous</span>
        <span className="md:hidden">←</span>
      </button>

      {/* Page numbers */}
      <div className="flex items-center gap-1 md:gap-2">
        {pageNumbers.map((item, index) => {
          // Check if this is an ellipsis item
          if (String(item).includes("ellipsis")) {
            return (
              <span key={item} className="w-8 text-center text-gray-500">
                …
              </span>
            );
          }

          return (
            <button
              key={item}
              onClick={() => handlePageChange(item)}
              className={`  cursor-pointer min-w-8 h-8 px-3 py-1 rounded-md transition-colors ${
                currentPage === item
                  ? "bg-orange-500 text-white font-medium"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
              aria-current={currentPage === item ? "page" : undefined}
              aria-label={`Page ${item}`}
            >
              {item}
            </button>
          );
        })}
      </div>

      {/* Next button */}
      <button
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="cursor-pointer px-3 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next page"
      >
        <span className="hidden md:inline">Next</span>
        <span className="md:hidden">→</span>
      </button>

      {/* Last page button */}
      <button
        onClick={() => {
          handlePageChange(totalPages);
          scrollToTop();
        }}
        disabled={currentPage === totalPages}
        className="cursor-pointer px-2 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed hidden md:block"
        aria-label="Last page"
      >
        <span>Last</span>
      </button>

      {/* Mobile last page button */}
      <button
        onClick={() => handlePageChange(totalPages)}
        disabled={currentPage === totalPages}
        className="cursor-pointer px-2 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed md:hidden"
        aria-label="Last page"
      >
        <span>»</span>
      </button>
    </div>
  );
}
