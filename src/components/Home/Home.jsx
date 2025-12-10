"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Search } from "lucide-react"

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTrendingSlide, setCurrentTrendingSlide] = useState(0)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    mode: "",
    course: "",
  })

  const courses = [
    { id: 1, name: "CCNA", image: "/ccna-logo.jpg" },
    { id: 2, name: "Linux", image: "/linux-penguin-logo.jpg" },
    { id: 3, name: "Python", image: "/python-logo.png" },
    { id: 4, name: "Salesforce", image: "/salesforce-logo.png" },
    { id: 5, name: "IPA", image: "/ipa-logo.jpg" },
    { id: 6, name: "Data Science", image: "/data-science-logo.png" },
    { id: 7, name: "Fullstack", image: "/fullstack-logo.jpg" },
    { id: 8, name: "Java", image: "/java-logo.png" },
    { id: 9, name: "AWS", image: "/aws-logo.png" },
    { id: 10, name: "AI", image: "/artificial-intelligence-logo.jpg" },
    { id: 11, name: "Machine Learning", image: "/machine-learning-logo.jpg" },
    { id: 12, name: "DevOps", image: "/devops-logo.jpg" },
  ]

  const trendingCourses = [
    {
      id: 1,
      title: "AutoCAD 2D & 3D",
      rating: 5,
      description:
        "What is AutoCAD? Computer-Aided Design (CAD) refers to using a computer application to assist draft designs and technical 2-dimensional or 3-dimensional drawings rather than having to draw detailed plans by...",
    },
    {
      id: 2,
      title: "Interior Designing",
      rating: 5,
      description:
        "Interior Designing is basically a CREATIVITY of designing ideas and inspiration to match your consumer design style in your proficient way of designing. In addition to that decorating spaces with...",
    },
    {
      id: 3,
      title: "Python",
      rating: 5,
      description:
        "Python could be a completely practical programming language that will do something virtually like the other language can do, at comparable speeds. Python is capable of threading and GPU processing just...",
    },
    {
      id: 4,
      title: "Data Science",
      rating: 5,
      description:
        "Data Science is the study of data to extract meaningful information for business use. It is a multidisciplinary approach that combines principles, practices, and techniques...",
    },
  ]

  const benefits = [
    {
      title: "Global Certification",
      description:
        "For the bright Future and job purpose, we have a facility for Global Certification Exams to ensure your job Guarantee for sure in MNCs and more.",
      icon: "📋",
    },
    {
      title: "Free Wi-Fi",
      description:
        "We understand how the internet is important for students, thus we have provided free internet service to students to learn confidently.",
      icon: "📡",
    },
    {
      title: "In-House Company",
      description: "The student will get direct benefits of on-going USA projects.",
      icon: "🏢",
    },
  ]

  const stats = [
    { number: "52 +", label: "Classroom" },
    { number: "72000 +", label: "Successful Career made" },
    { number: "75+", label: "Total Mentors" },
    { number: "200 +", label: "Online/Offline Courses" },
  ]

  const courseCategories = [
    { name: "Networking Courses", phone: "022-48904395" },
    { name: "Software Courses", phone: "022-48904395" },
    { name: "HR Training Courses", phone: "022-48904395" },
    { name: "Interior and Fashion Courses", phone: "022-48904395" },
    { name: "Python-Data Science", phone: "022-48904395" },
    { name: "Language Courses", phone: "022-48904395" },
    { name: "SAP Courses", phone: "022-48904395" },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % benefits.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + benefits.length) % benefits.length)
  }

  const nextTrendingSlide = () => {
    setCurrentTrendingSlide((prev) => (prev + 1) % (trendingCourses.length - 2))
  }

  const prevTrendingSlide = () => {
    setCurrentTrendingSlide((prev) => (prev - 1 + (trendingCourses.length - 2)) % (trendingCourses.length - 2))
  }

  return (
    <div className="min-h-screen bg-gray-50">
    

      {/* Navigation Header */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          {/* Top Nav */}
          <div className="flex items-center justify-between mb-3 text-xs">
            <div className="flex gap-6">
              <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                📊 Job Fair
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                📅 Events
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                👤 Teach With US
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                🏢 Corporate Training
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                🔗 Franchise Opportunities
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                ✓ Placement & CRM
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                👥 Careers
              </a>
            </div>
            <div className="flex gap-2 text-gray-500">
              <a href="#" className="hover:text-gray-700">
                f
              </a>
              <a href="#" className="hover:text-gray-700">
                ▶
              </a>
              <a href="#" className="hover:text-gray-700">
                in
              </a>
              <a href="#" className="hover:text-gray-700">
                @
              </a>
            </div>
          </div>

          {/* Main Nav */}
          <div className="flex items-center justify-between">
            <div className="font-bold text-2xl text-orange-500">SevenMentor</div>
            <nav className="flex gap-8 text-sm font-semibold">
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Data Science
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Cyber Security
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Software Development
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Cloud Computing
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900">
                Blogs
              </a>
            </nav>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-32 px-4"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/placeholder.svg)",
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12 flex justify-center">
            <div className="relative w-full max-w-2xl">
              <input type="text" placeholder="Search courses..." className="w-full px-6 py-3 text-gray-900 rounded-l bg-white" />
              <button className="absolute right-0 top-0 bg-orange-500 hover:bg-orange-700 text-white px-8 py-[0.85rem] rounded-r">
                <Search size={20} />
              </button>
            </div>
          </div>

          <h1 className="text-6xl font-bold mb-4 text-orange-500">SevenMentor & Training Pvt Ltd.</h1>
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2">
              <div className="h-1 w-16 bg-orange-500 rounded"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="h-1 w-16 bg-orange-500 rounded"></div>
            </div>
          </div>
          <p className="text-2xl text-white mb-16">A Step Ahead In Education</p>

          <div className="flex justify-center gap-16">
            <div className="text-center">
              <div className="text-4xl mb-2">💡</div>
              <p className="text-xs text-gray-200">Expert Training</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🎓</div>
              <p className="text-xs text-gray-200">Certification</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">👥</div>
              <p className="text-xs text-gray-200">Industry Mentors</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💻</div>
              <p className="text-xs text-gray-200">Hands-on Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🚀</div>
              <p className="text-xs text-gray-200">Career Growth</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">📊</div>
              <p className="text-xs text-gray-200">Job Placement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Behind Every Successful Career</h2>
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2">
                <div className="h-1 w-16 bg-orange-500 rounded"></div>
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <div className="h-1 w-16 bg-orange-500 rounded"></div>
              </div>
            </div>
            <p className="text-gray-200 max-w-3xl mx-auto">
              SevenMentor – A Renowned Brand For Quality Education And In- House Job Placement Services Since, Past
              Decades.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-orange-500 text-white p-12 rounded text-center hover:shadow-xl transition">
                <div className="text-5xl font-bold mb-4">{stat.number}</div>
                <div className="h-1 w-16 bg-blue-400 mx-auto mb-4"></div>
                <p className="font-semibold text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Courses</h2>
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2">
                <div className="h-1 w-16 bg-orange-500 rounded"></div>
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <div className="h-1 w-16 bg-orange-500 rounded"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white border-2 border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center hover:shadow-xl hover:border-gray-400 transition h-40"
              >
                <img src={course.image || "/placeholder.svg"} alt={course.name} className="h-16 mb-3 object-contain" />
                <p className="font-semibold text-gray-900 text-center text-sm">{course.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Courses Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Trending Courses</h2>
            <div className="flex justify-center mb-8">
              <div className="flex items-center gap-2">
                <div className="h-1 w-16 bg-orange-500 rounded"></div>
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <div className="h-1 w-16 bg-orange-500 rounded"></div>
              </div>
            </div>
            <p className="text-gray-600 max-w-4xl mx-auto text-base">
              Learn The Best And Most In-Demand Courses From SevenMentor To Get Industry-Relevant Training And A Highly
              Paid Job Profile.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={prevTrendingSlide} className="flex-shrink-0 p-2 hover:bg-white rounded-full transition">
              <ChevronLeft size={32} className="text-gray-600 hover:text-gray-900" />
            </button>

            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[0, 1, 2].map((offset) => {
                  const idx = (currentTrendingSlide + offset) % trendingCourses.length
                  const course = trendingCourses[idx]
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-lg border border-gray-300 overflow-hidden hover:shadow-lg transition flex flex-col h-full"
                    >
                      {/* Best Seller Badge */}
                      <div className="relative pt-4 px-4">
                        <div className="inline-block bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                          BEST SELLER
                        </div>
                      </div>

                      {/* Course Content */}
                      <div className="flex flex-col flex-1 px-6 pb-6 pt-4">
                        <h3 className="text-xl font-bold text-gray-900 text-center mb-4">{course.title}</h3>

                        {/* Star Rating */}
                        <div className="flex justify-center mb-6">
                          {[...Array(course.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-lg">
                              ★
                            </span>
                          ))}
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm leading-relaxed text-center mb-6 flex-grow">
                          {course.description}
                        </p>

                        {/* Explore Now Button */}
                        <div className="flex justify-center">
                          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded text-sm transition flex items-center gap-2">
                            Explore Now
                            <span>›</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <button onClick={nextTrendingSlide} className="flex-shrink-0 p-2 hover:bg-white rounded-full transition">
              <ChevronRight size={32} className="text-gray-600 hover:text-gray-900" />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why to Choose Us?</h2>
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2">
                <div className="h-1 w-16 bg-orange-500 rounded"></div>
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <div className="h-1 w-16 bg-orange-500 rounded"></div>
              </div>
            </div>
            <p className="text-gray-600">SevenMentor Offers Premier Benefits For The Students</p>
          </div>

          <div className="flex items-center gap-8">
            <button onClick={prevSlide} className="flex-shrink-0 p-2 hover:bg-gray-200 rounded-full transition">
              <ChevronLeft size={40} className="text-blue-600" />
            </button>

            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[0, 1, 2].map((offset) => {
                  const idx = (currentSlide + offset) % benefits.length
                  const benefit = benefits[idx]
                  return (
                    <div
                      key={idx}
                      className="bg-white p-8 rounded-lg border border-gray-300 hover:shadow-lg transition flex flex-col items-center"
                    >
                      <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                        <span className="text-5xl">{benefit.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 text-center mb-4">{benefit.title}</h3>
                      <p className="text-gray-600 text-center text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <button onClick={nextSlide} className="flex-shrink-0 p-2 hover:bg-gray-200 rounded-full transition">
              <ChevronRight size={40} className="text-blue-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Course Categories Section */}
      <section className="bg-orange-500 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-px border-l border-orange-400">
            {courseCategories.map((category, idx) => (
              <div
                key={idx}
                className="border-r border-orange-400 px-4 py-4 last:border-r-0 cursor-pointer hover:bg-orange-600 transition"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span>📞</span>
                  <h4 className="font-semibold text-sm">{category.name}</h4>
                </div>
                <p className="text-xs text-orange-100">{category.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome To SevenMentor</h2>
              <div className="flex mb-8">
                <div className="flex items-center gap-2">
                  <div className="h-1 w-12 bg-orange-500 rounded"></div>
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-600 text-justify leading-relaxed text-base">
                SevenMentor has improvised a tendency to cope with all International Standards within their courses, by
                engaging both ends of the industry for students, professionals, and individuals to corporate clients.
                The organization conjointly gives chance within their educational programs to meet the needs with
                projected desires of quick developing networking trade. SevenMentor education techniques allow honing
                the abilities of the Networking experts from Industries which allow them to be equipped with the updated
                technology and standards of their operating environment. The group is a center for technical excellence
                with the kingdom of the art lab centers and a properly exquisite curriculum which gives them exposure in
                advance and enables them to be specific inside the certification enterprise.
              </p>
            </div>

            <div className="bg-gray-900 rounded-lg border-4 border-orange-500 p-8 text-white h-fit">
              <h3 className="text-2xl font-bold mb-2 text-center">Request Call Back</h3>
              <p className="text-xs text-center mb-8 text-gray-400">Class Room & Online Training Quotation</p>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email*"
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded text-sm"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Contact No*"
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded text-sm"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 bg-white text-gray-900 rounded text-sm">
                    <option>—Please choose an option—</option>
                    <option>Online</option>
                    <option>Offline</option>
                    <option>Hybrid</option>
                  </select>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Your Enquiry *"
                    className="w-full px-4 py-3 bg-white text-gray-900 rounded text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold text-sm transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-600 py-8">
        <div className="max-w-7xl mx-auto px-4">
          {/* Title and decorative line */}
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold text-white mb-4">Request For Call Back</h2>
            <div className="flex justify-center items-center gap-2">
              <div className="h-1 w-8 bg-orange-500"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <div className="h-1 w-8 bg-orange-500"></div>
            </div>
          </div>

          {/* Subtitle badge */}
          <div className="text-center mb-10">
            <span className="bg-orange-500 text-white px-6 py-2 rounded-full inline-block text-sm font-medium">
              Class Room & Online Training Quotation | Free Career Counselling
            </span>
          </div>

          {/* Form container */}
          <div className="bg-gray-900 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              {/* Name field */}
              <div>
                <label className="text-white text-sm font-medium block mb-2">Your Name *</label>
                <input
                  type="text"
                  placeholder=""
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Email field */}
              <div>
                <label className="text-white text-sm font-medium block mb-2">Your Email *</label>
                <input
                  type="email"
                  placeholder=""
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Contact field */}
              <div>
                <label className="text-white text-sm font-medium block mb-2">Contact No. *</label>
                <input
                  type="tel"
                  placeholder=""
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Mode of Training dropdown */}
              <div>
                <label className="text-white text-sm font-medium block mb-2">Mode of Training*</label>
                <select
                  value={formData.mode}
                  onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                  className="w-full px-4 py-3 bg-white text-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">—Please choose an option—</option>
                  <option value="online">Online</option>
                  <option value="offline">Offline</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>

              {/* Course field and Send button in same row */}
              <div>
                <label className="text-white text-sm font-medium block mb-2">Enter Course Name *</label>
                <input
                  type="text"
                  placeholder=""
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* Send button - positioned below form on smaller screens, right-aligned on larger */}
            <div className="mt-6 flex justify-end">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded transition-colors">
                SEND
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="bg-orange-500 px-4 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">For More, Follow Us On Our Social Sites:</h3>
            <div className="flex gap-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition"
              >
                <span className="text-lg font-bold">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition"
              >
                <span className="text-lg font-bold">𝕏</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition"
              >
                <span className="text-lg font-bold">▶</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition"
              >
                <span className="text-lg font-bold">in</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition"
              >
                <span className="text-lg font-bold">📷</span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-950 px-4 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-6">
              {/* About SevenMentor */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6 pb-2 border-b-2 border-orange-500 inline-block">
                  About SevenMentor
                </h4>
                <ul className="space-y-3 mt-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> Enterprises Network Solution
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> HR Recruitment IT & Non-IT
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> Network Consulting Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> Top Corporate Training In Pune
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> Terms of Use
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> Training
                    </a>
                  </li>
                </ul>
              </div>

              {/* Networking Courses */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6 pb-2 border-b-2 border-orange-500 inline-block">
                  Networking Courses
                </h4>
                <ul className="space-y-3 mt-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> Amazon Web Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> Linux
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> Azure
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> Cyber Security
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> DevOps
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> Salesforce
                    </a>
                  </li>
                </ul>
              </div>

              {/* Software Courses */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6 pb-2 border-b-2 border-orange-500 inline-block">
                  Software Courses
                </h4>
                <ul className="space-y-3 mt-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> Artificial Intelligence
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> Full Stack Training
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> Java Certification
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> MERN Stack
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> Python
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> React JS
                    </a>
                  </li>
                </ul>
              </div>

              {/* Other Courses */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6 pb-2 border-b-2 border-orange-500 inline-block">
                  Other Courses
                </h4>
                <ul className="space-y-3 mt-4">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> SAP FICO
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> SAP MM
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> SAP SD
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> SAP ABAP
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> Spoken English
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> Train the Trainer (TTT)
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> HR
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                      <span className="text-orange-500">›</span> Personality Development
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Details */}
              <div>
                <h4 className="text-white font-bold text-lg mb-6 pb-2 border-b-2 border-orange-500 inline-block">
                  Contact Details
                </h4>
                <div className="mt-4">
                  <h5 className="text-white font-semibold mb-4 flex items-center gap-2">📍 Mumbai</h5>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Office no. 101 & part office no. 1, Civic Centre, MMGS Marg, Dadar East, Dadar, Mumbai, ,
                    Maharashtra 400014
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-950 px-4 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-6">
              <div>
                <h5 className="text-gray-500 text-sm font-semibold mb-2">Assistance</h5>
                <p className="text-white font-semibold flex items-center gap-2">
                  <span>📞</span> 022-48904395
                </p>
              </div>
              <div>
                <h5 className="text-gray-500 text-sm font-semibold mb-2">Sales</h5>
                <p className="text-white font-semibold">sales@sevenmentor.com</p>
              </div>
              <div>
                <h5 className="text-gray-500 text-sm font-semibold mb-2">Support</h5>
                <p className="text-white font-semibold">support@sevenmentor.com</p>
              </div>
              <div>
                <h5 className="text-gray-500 text-sm font-semibold mb-2">Jobs</h5>
                <p className="text-white font-semibold">careers@sevenmentor.com</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
