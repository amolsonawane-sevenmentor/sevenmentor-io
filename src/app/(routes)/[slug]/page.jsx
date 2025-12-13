"use client";

import { useState, use } from "react";
import { notFound } from "next/navigation";
import { courses } from "../../../data/courses.js";
import moment from "moment";
import {
  Shield,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Target,
  TrendingUp,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Code,
  CheckCircle,
  Star,
  MessageCircle,
  User,
} from "lucide-react";
import EnrollForm from "../../../components/EnrollForm/EnrollForm.jsx";
import PoupFormEnroll from "../../../components/EnrollForm/PoupFormEnroll.jsx";

export default function CoursePage({ params }) {
  // Unwrap params using React.use()
  const unwrappedParams = use(params);
  const { slug } = unwrappedParams;
  const courseData = courses.find((c) => c.slug === slug);

  if (!courseData) {
    notFound();
  }

  const [expandedModule, setExpandedModule] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const {
    heroData,
    stats,
    aboutCourse,
    syllabus,
    features,
    eligibility,
    tools,
    batches,
    reviews,
    faqs,
    courseName,
    contactEmail,
    contactNumber,
    whatsappNumber,
    whatsappMessage,
  } = courseData;

  const generateBatchSchedule = () => {
    const batchSchedule = [];
    let regularBatches = 0;
    let weekendBatches = 0;
    let currentDate = moment().add(4, "days"); // Start from 4 days after the current date
    let lastRegularBatchDate = null; // To keep track of the last regular batch date

    // Loop until we get 2 regular and 2 weekend batches
    while (regularBatches < 2 || weekendBatches < 2) {
      const dayOfWeek = currentDate.day(); // Get the current day of the week (0 - Sunday, 6 - Saturday)
      let batchType = "";

      // Check if it's a weekend (Saturday or Sunday)
      if ((dayOfWeek === 6 || dayOfWeek === 0) && weekendBatches < 2) {
        batchType = "Weekend Batch";
        weekendBatches++;
      }
      // Check for regular weekday batch (Monday to Friday) with a 3-day gap
      else if (
        dayOfWeek >= 1 &&
        dayOfWeek <= 5 &&
        regularBatches < 2 &&
        (!lastRegularBatchDate || currentDate.diff(lastRegularBatchDate, "days") >= 3)
      ) {
        batchType = "Regular Batch";
        regularBatches++;
        lastRegularBatchDate = moment(currentDate); // Update last regular batch date
      }

      // If a batch type was assigned, add it to the schedule
      if (batchType) {
        batchSchedule.push({
          date: currentDate.format("DD/MM/YYYY"),
          batchType,
          schedule: batchType === "Weekend Batch" ? "Sat-Sun" : "Mon-Fri",
        });
      }

      // Move to the next day
      currentDate = currentDate.add(1, "days");
    }

    return batchSchedule;
  };

  // Generate the batch schedule
  const dynamicBatchSchedule = generateBatchSchedule();

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, idx) => (
      <Star
        key={idx}
        className={`w-4 h-4 ${
          idx < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const colorClasses = {
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-200",
    },
    blue: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO-friendly Header */}
      <header className="sr-only">
        <h1>{heroData.title}</h1>
      </header>

      {/* Floating Contact Buttons */}
      <div className="fixed left-6 bottom-6 z-50 flex flex-col gap-3">
        <a
          href={`tel:${contactNumber}`}
          className="w-14 h-14 bg-red-600 hover:bg-red-700 rounded-xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 group"
          aria-label="Call us"
        >
          <Phone className="w-7 h-7 text-white" />
        </a>
        <a
          href={`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-600 hover:bg-green-700 rounded-xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 group"
          aria-label="WhatsApp us"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </a>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC00Yy0xLjEgMC0yIC45LTIgMnY0YzAgMS4xLjkgMiAyIDJoNGMxLjEgMCAyLS45IDItMnYtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 px-4 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5 text-orange-300" />
              <span className="text-sm font-semibold text-orange-200">
                Certified Training Program
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              {heroData.title}
            </h1>
            <p className="text-xl md:text-2xl text-orange-200 mb-3 font-medium">
              {heroData.subtitle}
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              {heroData.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {heroData.badges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={idx}
                    className={`${badge.color} text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg`}
                  >
                    <Icon className="w-5 h-5" />
                    {badge.label}
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
                onClick={() => setShowForm((pre) => !pre)}
              >
                Enroll Now - Limited Seats
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-white shadow-lg -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              const colors = colorClasses[stat.color] || colorClasses.orange;
              return (
                <div key={idx} className="text-center">
                  <div
                    className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-3`}
                  >
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* Enrollment Form */}
        <EnrollForm
          mailTo={contactEmail}
          course={courseName}
          contactNumber={contactNumber}
        />

        {/* About Course Section */}
        <section
          id="about"
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {aboutCourse.title}
                </h2>
                <p className="text-sm text-gray-600">
                  Everything you need to know about our program
                </p>
              </div>
            </div>
          </div>
          <div className="p-8 space-y-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              {aboutCourse.description}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {aboutCourse.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-orange-50 border border-orange-100 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
            {aboutCourse.sections.map((section, idx) => (
              <div key={idx} className="border-l-4 border-orange-500 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-orange-600" />
                  {section.heading}
                </h3>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Course Syllabus */}
        <section
          id="syllabus"
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Course Syllabus
                </h2>
                <p className="text-sm text-gray-600">
                  Comprehensive curriculum designed by industry experts
                </p>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                <div className="text-sm text-orange-600 font-medium">
                  Total Duration
                </div>
                <div className="text-2xl font-bold text-orange-700">
                  {stats[0].value}
                </div>
              </div>
              <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                <div className="text-sm text-orange-600 font-medium">
                  Modules
                </div>
                <div className="text-2xl font-bold text-orange-700">
                  {syllabus.modules.length}
                </div>
              </div>
              <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                <div className="text-sm text-orange-600 font-medium">
                  Projects
                </div>
                <div className="text-2xl font-bold text-orange-700">20+</div>
              </div>
            </div>

            <div className="space-y-4">
              {syllabus.modules.map((module) => (
                <div
                  key={module.id}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 transition-all duration-300 hover:shadow-lg"
                >
                  <button
                    onClick={() =>
                      setExpandedModule(
                        expandedModule === module.id ? null : module.id
                      )
                    }
                    className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-orange-50 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                        {module.id}
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold text-gray-900">
                          {module.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">
                            {module.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    {expandedModule === module.id ? (
                      <ChevronUp className="w-5 h-5 text-orange-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {expandedModule === module.id && (
                    <div className="p-5 bg-white border-t border-gray-200">
                      <div className="space-y-2">
                        {module.topics.map((topic, idx) => (
                          <div key={idx} className="flex items-start gap-3 py-2">
                            <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowForm((pre) => !pre)}
                className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white px-12 py-4 rounded-2xl font-extrabold text-lg tracking-wide shadow-[0_30px_rgba(255,100,100,0.6)] hover:shadow-[0_45px_rgba(255,100,100,0.9)] transition-all duration-300 hover:scale-110 animate-pulse border border-white/30"
              >
                <span className="absolute inset-0 bg-white/20 blur-xl opacity-0 hover:opacity-100 transition duration-500"></span>
                <span className="relative z-10 flex items-center gap-2">
                  Download Syllabus <span className="animate-bounce">↓</span>
                </span>
              </button>
            </div> */}


<div className="flex justify-center mt-8">
  <button
    onClick={() => setShowForm((pre) => !pre)}
    className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-orange-400"
  >
    {/* Subtle shine effect */}
    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
    
    {/* Button content */}
    <span className="relative z-10 flex items-center gap-2">
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      Download Syllabus
    </span>
  </button>
</div>



          </div>
        </section>

        {/* Key Features */}
        <section
          id="features"
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Key Features
                </h2>
                <p className="text-sm text-gray-600">
                  What makes our course stand out
                </p>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                const colors = colorClasses[feature.color] || colorClasses.orange;
                return (
                  <div
                    key={idx}
                    className={`p-6 ${colors.bg} border ${colors.border} rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    <div
                      className={`w-12 h-12 bg-white border ${colors.border} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Tools & Technologies
                </h2>
                <p className="text-sm text-gray-600">
                  Master industry-standard security tools
                </p>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool, idx) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-orange-400 hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <Icon className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                    <h4 className="font-bold text-gray-900">{tool.name}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section
          id="eligibility"
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Course Eligibility
                </h2>
                <p className="text-sm text-gray-600">
                  Who can enroll in this course
                </p>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {eligibility.map((req, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-orange-50 border border-orange-200 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{req.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Batch Schedule */}
        <section
          id="schedule"
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Upcoming Batches
                </h2>
                <p className="text-sm text-gray-600">
                  Choose a batch that fits your schedule
                </p>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-orange-200">
                      Start Date
                    </th>
                    <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-orange-200">
                      Batch Type
                    </th>
                    <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-orange-200">
                      Schedule
                    </th>
                    <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-orange-200">
                      Location
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dynamicBatchSchedule.map((batch, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-gray-100 hover:bg-orange-50 transition-colors duration-200"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-700">{batch.date}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
                          {batch.batchType}
                        </span>
                      </td>
                      <td className="p-4 text-gray-700 text-sm">{batch.schedule}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-700">Mumbai</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm text-gray-600">
                  Got questions? We have got answers
                </p>
              </div>
            </div>
          </div>
          <div className="p-8">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:border-orange-400 transition-colors duration-300"
                >
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                    }
                    className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-orange-50 transition-colors duration-300 text-left"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    {expandedFaq === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === faq.id && (
                    <div className="p-5 bg-white border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 text-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Side - CTA Content */}
            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Become a Security Analyst?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 2000+ students trained by SevenMentor and start your cyber
                security career in SOC teams
              </p>
              <div>
                <button
                  onClick={() => setShowForm(true)}
                  className="inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300"
                >
                  <User className="w-5 h-5" />
                  Register Now
                </button>
              </div>
            </div>

            {/* Right Side - Contact Details */}
            <div className="bg-slate-900/50 p-12 border-l border-slate-700">
              <h3 className="text-2xl font-bold text-orange-500 mb-8 border-b-2 border-orange-500 inline-block pb-2">
                Contact Details
              </h3>

              {/* Mumbai Location */}
              <div className="mb-8">
                <div className="flex items-start gap-3 mb-3">
                  <div className="bg-orange-500/20 p-2 rounded-lg">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-orange-500 mb-2">
                      Mumbai
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      Office no. 101 & part office no.1,
                      <br />
                      Civic Centre, MMGS Marg,
                      <br />
                      Dadar East, Dadar, Mumbai,
                      <br />
                      <span className="text-orange-500 font-semibold">
                        Maharashtra 400014
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Call Us */}
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-red-500 p-3 rounded-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Call Us</p>
                    <a
                      href={`tel:${contactNumber}`}
                      className="text-xl font-bold hover:text-orange-500 transition-colors"
                    >
                      {contactNumber}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <div className="flex items-center gap-3">
                  <div className="bg-green-500 p-3 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">WhatsApp</p>
                    <a
                      href={`https://wa.me/${whatsappNumber.replace(/\+/g, "")}?text=${whatsappMessage}`}
                      className="text-xl font-bold hover:text-orange-500 transition-colors"
                    >
                      {whatsappNumber}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 {courseName} Training Institute Mumbai. All rights reserved.
          </p>
          <p>© 2025 SevenMentor Pvt. Ltd. All rights reserved.</p>
          <p className="text-sm text-gray-500 mt-2">
            Best {courseName} Course & Professional Training & Certification
            Mumbai
          </p>
        </div>
      </footer>

      {showForm && (
        <PoupFormEnroll
          mailTo={contactEmail}
          course={courseName}
          contactNumber={contactNumber}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}
