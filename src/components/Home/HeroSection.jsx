"use client";
import {
  GraduationCap,
  Search,
  Play,
  CheckCircle,
  TrendingUp,
  Award,
  Users,
  Star,
  BookOpen,
  Target,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { courses } from "./CourseCardData";

export default function HeroSection() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    const query = searchQuery.toLowerCase();
    const foundCourse = courses.find(
      (course) =>
        course.title.toLowerCase().includes(query) ||
        course.category.toLowerCase().includes(query)
    );

    if (foundCourse && foundCourse.link) {
      router.push(foundCourse.link);
      setShowSuggestions(false);
    }
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length > 0) {
      const filtered = courses
        .filter(
          (course) =>
            course.title.toLowerCase().includes(query.toLowerCase()) ||
            course.category.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 5); // Limit to 5 suggestions
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (link) => {
    router.push(link);
    setShowSuggestions(false);
  };

  return (
    <div
      className="relative bg-gradient-to-br from-orange-50 via-white to-orange-50"
      onClick={() => setShowSuggestions(false)} // Close dropdown when clicking outside
    >
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft gradient orbs */}
        <div className="absolute top-10 right-20 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-amber-200/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-orange-100/10 rounded-full blur-2xl"></div>

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
            linear-gradient(to right, #ff6b35 1px, transparent 1px),
            linear-gradient(to bottom, #ff6b35 1px, transparent 1px)
          `,
            backgroundSize: "4rem 4rem",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-400 text-white px-5 py-2.5 rounded-full shadow-lg shadow-orange-200/50">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-semibold">
                Rated #1 Training Institute
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-5">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Transform Your</span>
                <span className="block bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
                  Career Journey
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Join thousands of successful professionals who transformed their
                careers with expert-led training programs
              </p>
            </div>

            {/* Trust Indicators - Redesigned */}
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-xl mb-2">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <div className="font-bold text-3xl text-gray-900">5K+</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mb-2">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div className="font-bold text-3xl text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Placement</div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-xl mb-2">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div className="font-bold text-3xl text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Experts</div>
              </div>
            </div>

            {/* Search Bar - Cleaner Design */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2 flex flex-col sm:flex-row items-center gap-2 hover:shadow-2xl transition-shadow duration-300 relative z-50">
                <div className="flex items-center flex-1 w-full">
                  <div className="pl-4 pr-2">
                    <Search className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search courses: Java, Python, AWS, Data Science..."
                    className="flex-1 px-2 py-4 outline-none text-gray-700 placeholder:text-gray-400 min-w-0"
                    value={searchQuery}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => {
                      if (searchQuery.trim().length > 0) setShowSuggestions(true);
                    }}
                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking input
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-orange-200/50 whitespace-nowrap"
                >
                  Search
                </button>
              </div>

              {/* Dropdown Suggestions */}
              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-[100] max-h-80 overflow-y-auto">
                  {suggestions.map((course) => (
                    <button
                      key={course.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSuggestionClick(course.link);
                      }}
                      className="w-full text-left px-6 py-4 hover:bg-orange-50 border-b border-gray-50 last:border-0 transition-colors duration-200 flex items-center gap-3 group"
                    >
                      <div className="bg-orange-100 p-2 rounded-lg group-hover:bg-orange-200 transition-colors">
                        <BookOpen className="w-4 h-4 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">
                          {course.title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {course.category}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Buttons */}
            {/* <div className="flex flex-wrap gap-4">
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg transform hover:scale-105 flex items-center gap-2">
                Explore All Courses
                <Play className="w-5 h-5" />
              </button>
            </div> */}
          </div>

          {/* Right Content - Completely Redesigned Cards */}
          <div className="hidden lg:block relative h-[600px]">
            {/* Main Stats Card - Modern Design */}
            <div className="absolute top-0 left-0 w-72 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transform hover:scale-110 transition-all duration-500 ease-out z-10 hover:z-50 hover:shadow-3xl">
              <div className="bg-gradient-to-br from-orange-500 to-orange-400 p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm opacity-90">Success Rate</div>
                    <div className="text-4xl font-bold">95%</div>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">
                  Over 4,750+ students successfully placed in top companies this
                  year
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-green-50 p-3 rounded-xl text-center">
                    <div className="text-2xl font-bold text-green-700">
                      150+
                    </div>
                    <div className="text-xs text-green-600">This Month</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-xl text-center">
                    <div className="text-2xl font-bold text-blue-700">4.9</div>
                    <div className="text-xs text-blue-600">Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Card - New Layout */}
            <div className="absolute top-24 right-0 w-80 bg-white rounded-3xl shadow-2xl p-6 border border-gray-100 transform hover:scale-110 transition-all duration-500 ease-out z-20 hover:z-50 hover:shadow-3xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-200/50">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    Premium Training
                  </h3>
                  <p className="text-sm text-gray-500">Industry Standards</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-green-50 border border-green-100">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800 text-sm">
                      Live Sessions
                    </div>
                    <div className="text-xs text-gray-600">
                      Interactive learning
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-blue-50 border border-blue-100">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800 text-sm">
                      Real Projects
                    </div>
                    <div className="text-xs text-gray-600">
                      Hands-on experience
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-xl bg-orange-50 border border-orange-100">
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800 text-sm">
                      Certification
                    </div>
                    <div className="text-xs text-gray-600">
                      Industry recognized
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us Card - Refined */}
            <div className="absolute bottom-0 left-8 w-96 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-2xl p-6 text-white transform hover:scale-110 transition-all duration-500 ease-out z-30 hover:z-50 hover:shadow-3xl">
              <h3 className="font-bold text-xl mb-5">Why Choose Us</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Certified Programs</div>
                    <div className="text-sm text-gray-300">
                      Industry recognized credentials
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Job Guarantee</div>
                    <div className="text-sm text-gray-300">
                      100% placement assistance
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-400 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Lifetime Access</div>
                    <div className="text-sm text-gray-300">
                      Learn at your own pace
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute top-48 left-12 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-300 rounded-2xl transform rotate-12 opacity-20"></div>
            <div className="absolute bottom-32 right-16 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-300 rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
