"use client"

import { useState } from "react"

const SitemapDisplay = ({ initialData }) => {
  const [sitemapData] = useState(initialData || [])
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 50

  // Filter data based on search term
  const filteredData = sitemapData.filter((item) => item.loc.toLowerCase().includes(searchTerm.toLowerCase()))

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  return (
    <div className="p-6 mt-6 bg-black text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-orange-500 mb-4">Page Sitemap</h1>

      {/* Search and stats */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <p className="text-gray-400 mb-4 md:mb-0">
          This sitemap contains <strong className="text-orange-400">{sitemapData.length}</strong> URLs.
          {searchTerm && (
            <span>
              
              Showing <strong className="text-orange-400">{filteredData.length}</strong> results for {searchTerm}
            </span>
          )}
        </p>

        <div className="w-full md:w-auto">
          <input
            type="text"
            placeholder="Search URLs..."
            className="w-full md:w-64 px-4 py-2 bg-gray-800 border border-orange-500 rounded text-white"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setCurrentPage(1) // Reset to first page on search
            }}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border border-orange-500 text-white">
          <thead>
            <tr className="bg-orange-600 text-black">
              <th className="border border-orange-500 px-4 py-2 text-left">URL</th>
              <th className="border border-orange-500 px-4 py-2 text-center">Priority</th>
            
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <tr key={index} className="odd:bg-gray-800 even:bg-gray-900 hover:bg-gray-700">
                  <td className="border border-orange-500 px-4 py-2">
                    <a
                      href={item.loc}
                      className="text-orange-400 hover:text-orange-300 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.loc}
                    </a>
                  </td>
                  <td className="border border-orange-500 px-4 py-2 text-center">{item.priority}</td>
                  </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="border border-orange-500 px-4 py-8 text-center">
                  {searchTerm ? "No URLs matching your search" : "No sitemap data available"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-orange-600 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span className="text-gray-400">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-orange-600 text-white rounded disabled:opacity-50">
            Next
          </button>
        </div>
      )}
    </div>
  )
}

export default SitemapDisplay
