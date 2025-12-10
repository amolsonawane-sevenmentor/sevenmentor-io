// import React from "react";

// const FreePaidCourseTab = ({
//   domains,
//   selectedDomain,
//   onSelectDomain,
//   courseTypes,
//   selectedCourseType,
//   onSelectCourseType,
// }) => {
//   return (
//     <div className="w-full">
//       {/* Course Type Tabs */}
//       <div className="bg-black rounded-lg border border-gray-800 shadow-lg mb-6">
//         <div className="flex justify-center overflow-x-auto scrollbar-hide">
//           {courseTypes.map((type) => (
//             <button
//               key={type}
//               onClick={() => onSelectCourseType(type)}
//               className={`px-8 py-4 font-medium text-lg whitespace-nowrap transition-colors border-b-2 ${
//                 selectedCourseType === type
//                   ? "border-orange-500 text-orange-500 font-bold"
//                   : "border-transparent text-gray-300 hover:text-orange-300 hover:border-orange-300"
//               }`}
//             >
//               {type}
//             </button>
//           ))}
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default FreePaidCourseTab;

import React from "react";

const FreePaidCourseTab = ({
  domains,
  selectedDomain,
  onSelectDomain,
  courseTypes,
  selectedCourseType,
  onSelectCourseType,
}) => {
  return (
    <div className="w-full">
      {/* Minimal Course Tab */}
      <div className="mb-8">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-5 hover:bg-white/10 transition-all duration-300">
          <div className="flex items-center gap-4">
            
            {/* Icon */}
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253z" />
              </svg>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-1">Free Courses</h3>
              <p className="text-gray-400 text-sm">Explore our collection of premium learning resources</p>
            </div>

            {/* Arrow indicator */}
            <div className="text-orange-500 opacity-60">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FreePaidCourseTab;