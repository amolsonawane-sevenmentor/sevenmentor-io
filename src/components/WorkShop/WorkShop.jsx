"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  ChevronRight,
  BarChart2,
  Trophy,
  Calendar,
  MapPin,
  Clock,
  Users,
  Database,
  LineChart,
  PieChart,
  Layers,
  Zap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Workshop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div className="bg-black mt-12 sm:mt-16 text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative mx-1 sm:mx-16">
        {/* orange accent shapes instead of orange */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-orange-600 rounded-full blur-[120px] opacity-20 z-0"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-orange-500 rounded-full blur-[150px] opacity-10 z-0"></div>

        <div className="container mx-auto px-4 py-3 md:py-14 relative z-20">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div
              className="w-full md:w-1/2 space-y-6 fade-in-slide-right"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
              }}
            >
              <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full">
                <span className="text-orange-400 text-sm font-medium">Limited Spots Available</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                📊 6 Days. 1 Tool. <span className="text-orange-500">Unlimited Career Growth.</span>
              </h1>

              <p className="text-gray-300 text-lg md:text-xl">
                🔥 Join SevenMentor's Power BI Bootcamp | 23rd –28th June (Online)
              </p>

              <p className="text-gray-300 text-lg">
                In today's data-driven world, knowing Power BI isn't optional—it's essential.
              </p>
                   <Link href="https://forms.gle/jT6ZiKtUzTrEMrGX9" target="_blank" className="relative z-10">
            <motion.div
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="bg-orange-600 hover:bg-orange-700 inline-block rounded-xl px-8 py-4 cursor-pointer"
            >
              <div className="flex items-center justify-center text-white">
                <span className="text-xl font-semibold">👉 Click here to book your seat now</span>
                <ChevronRight className="ml-2" />
              </div>
            </motion.div>
          </Link>
            </div>

            <div
              className="w-full md:w-1/2 fade-in-slide-left sm:-mt-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(20px)",
                transition: "opacity 0.8s ease, transform 0.8s ease",
                transitionDelay: "0.2s",
              }}
            >
              <div className="relative z-10">
                {/* Portrait aspect ratio container: 9:16 */}
                <div className="w-full mx-auto aspect-[9/16] max-h-[590px] max-w-xs md:max-w-sm lg:max-w-[350px] flex items-center justify-center">
                  <video
                    autoPlay
                    muted
                    controls
                    loop
                    className="w-full h-full object-cover rounded-2xl border-2 border-orange-500"
                  >
                    <source src="/assets/power-bi-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    <track kind="captions" srcLang="en" src="/placeholder.svg" default />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  

      {/* Career Opportunities Section */}
      <div className="bg-gradient-to-b from-black to-orange-950/30 py-12 sm:mx-14 rounded-xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Power BI Opens <span className="text-orange-500">Career Doors</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Whether you're a student, working professional, or job seeker, mastering Power BI opens doors to roles in:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <BarChart2 className="text-orange-500" size={32} />, title: "Data Analysis" },
              { icon: <LineChart className="text-orange-500" size={32} />, title: "Business Intelligence" },
              { icon: <PieChart className="text-orange-500" size={32} />, title: "Reporting & Visualization" },
              { icon: <Zap className="text-orange-500" size={32} />, title: "Decision Making" },
            ].map((role, index) => (
              <div
                key={index}
                className="bg-black/40 border border-orange-900/30 rounded-xl p-6 text-center hover:border-orange-500/30 transition-all"
              >
                <div className="bg-orange-900/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  {role.icon}
                </div>
                <h3 className="text-xl font-bold">🔹 {role.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
               {/* // Registration bar */}
      <Link href="https://forms.gle/jT6ZiKtUzTrEMrGX9" target="_blank" className="relative z-10 flex flex-col items-center">
        <motion.div
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.03 }}
          className="bg-orange-500 rounded-xl container animate-pulse hover:animate-none md:max-w-5xl max-w-[380px] sm:mx-auto px-4 py-2 cursor-pointer"
        >
          <div className="flex items-center justify-center container mx-auto px-4 py-4 text-white">
            <span className="sm:text-2xl text-xl font-semibold text-center">
              Become A Certified Power BI Expert At Just Rs <span className="line-through text-black/50">14999/-</span> 7500/- Now!
              <br />
              <span>(Offer Valid Only For Today)</span>
            </span>
          </div>
        </motion.div>
      </Link>

      {/* Workshop Details */}
      <div className="bg-gradient-to-b from-black to-orange-950/30 py-16 sm:mx-14 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-[40%]">
              <div className="relative">
                <div className="relative flex justify-center items-center rounded-lg overflow-hidden">
                  <Image
                    src="/assets/power-bi-workshop.webp"
                    alt="Power BI Workshop"
                    width={400}
                    height={580}
                    className="w-full h-auto object-cover lg:h-[580px] lg:w-[400px] rounded-lg"
                  />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Workshop <span className="text-orange-500">Details</span>
              </h2>

              <div className="space-y-4">
                {[
                  {
                    icon: <Calendar className="text-orange-500" size={20} />,
                    title: "Dates",
                    info: "23rd - 28th June (6 days)",
                  },
                  {
                    icon: <Clock className="text-orange-500" size={20} />,
                    title: "Time",
                    info: "5pm to 7pm",
                  },
                  {
                    icon: <MapPin className="text-orange-500" size={20} />,
                    title: "Mode of Workshop",
                    info: "Online",
                  },
                ].map((detail, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-orange-900/20 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                      {detail.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{detail.title}</h3>
                      <p className="text-gray-400">{detail.info}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <p className="text-gray-300 text-lg font-semibold mt-2">
                  Includes <span className="text-orange-500">Certificate of Completion</span> aligned with IIT Bombay
                  curriculum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

               {/* // Registration bar */}
      <Link href="https://forms.gle/jT6ZiKtUzTrEMrGX9" target="_blank" className="relative z-10 flex flex-col items-center">
        <motion.div
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.03 }}
          className="bg-orange-500 rounded-xl container animate-pulse hover:animate-none md:max-w-5xl max-w-[380px] sm:mx-auto px-4 py-2 cursor-pointer"
        >
          <div className="flex items-center justify-center container mx-auto px-4 py-4 text-white">
            <span className="sm:text-2xl text-xl font-semibold text-center">
              Become A Certified Power BI Expert At Just Rs <span className="line-through text-black/50">14999/-</span> 7500/- Now!
              <br />
              <span>(Offer Valid Only For Today)</span>
            </span>
          </div>
        </motion.div>
      </Link>

      {/* Features Section */}
      <div id="details" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 What You'll <span className="text-orange-500">Learn</span> in 6 Power-Packed Days
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our comprehensive curriculum covers everything you need to master Power BI and transform how you work with
            data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Database className="text-orange-500" size={32} />,
              title: "Data transformation & cleaning",
              description:
                "Learn how to connect to various data sources, transform raw data, and prepare it for analysis with Power Query.",
            },
            {
              icon: <BarChart2 className="text-orange-500" size={32} />,
              title: "Stunning dashboards with real-time insights",
              description:
                "Create interactive, visually appealing dashboards that update in real-time and provide actionable business insights.",
            },
            {
              icon: <Layers className="text-orange-500" size={32} />,
              title: "DAX formulas & visualizations",
              description:
                "Master Data Analysis Expressions (DAX) to create powerful calculations and build compelling visualizations.",
            },
            {
              icon: <Trophy className="text-orange-500" size={32} />,
              title: "Hands-on projects guided by industry experts",
              description:
                "Apply your skills to real-world scenarios with projects that simulate actual business challenges.",
            },
            {
              icon: <Users className="text-orange-500" size={32} />,
              title: "Collaborative reporting",
              description:
                "Learn how to share reports, collaborate with team members, and publish dashboards to the Power BI service.",
            },
            {
              icon: <Zap className="text-orange-500" size={32} />,
              title: "Advanced analytics techniques",
              description:
                "Explore advanced features like AI visuals, forecasting, and integration with other Microsoft tools.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-black/40 border border-orange-900/30 rounded-xl p-6 hover:border-orange-500/30 transition-all hover:shadow-lg hover:shadow-orange-600/10 flex justify-center items-center flex-col"
            >
              <div className="bg-orange-900/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">✅ {feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

               {/* // Registration bar */}
      <Link href="https://forms.gle/jT6ZiKtUzTrEMrGX9" target="_blank" className="relative z-10 flex flex-col items-center">
        <motion.div
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.03 }}
          className="bg-orange-500 rounded-xl container animate-pulse hover:animate-none md:max-w-5xl max-w-[380px] sm:mx-auto px-4 py-2 cursor-pointer"
        >
          <div className="flex items-center justify-center container mx-auto px-4 py-4 text-white">
            <span className="sm:text-2xl text-xl font-semibold text-center">
              Become A Certified Power BI Expert At Just Rs <span className="line-through text-black/50">14999/-</span> 7500/- Now!
              <br />
              <span>(Offer Valid Only For Today)</span>
            </span>
          </div>
        </motion.div>
      </Link>

      {/* Why Power BI Section */}
      <div className="container mx-auto px-4 sm:px-24 py-16 bg-gradient-to-b from-black to-orange-950/30 rounded-xl border border-orange-700/30 shadow-lg mt-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            💼 Why <span className="text-orange-500">Power BI?</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Power BI is more than just a tool—it's a career accelerator that opens doors to opportunities across
            industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "In-demand skill by top MNCs",
              description:
                "Power BI skills are highly sought after by Fortune 500 companies and leading organizations worldwide.",
            },
            {
              title: "High-paying job opportunities",
              description:
                "Data visualization specialists with Power BI expertise command competitive salaries in the job market.",
            },
            {
              title: "No coding background needed",
              description: "Power BI's intuitive interface makes it accessible to professionals from all backgrounds.",
            },
            {
              title: "Future-proof your career in analytics",
              description:
                "As data continues to drive business decisions, Power BI skills will remain valuable for years to come.",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-black/40 border border-orange-900/30 rounded-xl p-6 hover:border-orange-500/30 transition-all"
            >
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <span className="bg-orange-900/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                  <svg width="20" height="20" fill="none" stroke="currentColor" className="text-orange-500">
                    <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {benefit.title}
              </h3>
              <p className="text-gray-400 ml-11">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

               {/* // Registration bar */}
      <Link href="https://forms.gle/jT6ZiKtUzTrEMrGX9" target="_blank" className="relative z-10 flex flex-col items-center">
        <motion.div
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.03 }}
          className="bg-orange-500 rounded-xl container animate-pulse hover:animate-none md:max-w-5xl max-w-[380px] sm:mx-auto px-4 py-2 cursor-pointer"
        >
          <div className="flex items-center justify-center container mx-auto px-4 py-4 text-white">
            <span className="sm:text-2xl text-xl font-semibold text-center">
              Become A Certified Power BI Expert At Just Rs <span className="line-through text-black/50">14999/-</span> 7500/- Now!
              <br />
              <span>(Offer Valid Only For Today)</span>
            </span>
          </div>
        </motion.div>
      </Link>

      {/* Certificate section */}
      <div className="bg-gradient-to-b from-black to-orange-950/30 py-16 sm:mx-14 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Certificate Content */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Receive Your <span className="text-orange-500">Certificate</span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl">
                Upon successful completion of the Power BI Bootcamp, you'll earn a professionally recognized certificate
                to showcase your expertise and boost your career prospects.
              </p>
              <p className="text-gray-300 text-lg">🎓 Designed for all backgrounds – No prior experience required!</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-orange-900/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                    <svg width="20" height="20" fill="none" stroke="currentColor" className="text-orange-500">
                      <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>IIT Bombay-aligned curriculum</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-orange-900/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                    <svg width="20" height="20" fill="none" stroke="currentColor" className="text-orange-500">
                      <circle cx="10" cy="10" r="9" strokeWidth="2" />
                      <path d="M7 10l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span>Recognized by top employers</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-orange-900/20 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                    <svg width="20" height="20" fill="none" stroke="currentColor" className="text-orange-500">
                      <path d="M12 8v4l3 3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    </svg>
                  </span>
                  <span>Perfect for LinkedIn & resumes</span>
                </li>
              </ul>
            </div>

            {/* Right: Certificate Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative bg-black border border-orange-500/20 rounded-lg overflow-hidden shadow-lg max-w-md w-full">
                <Image
                  src="/assets/workshop-certificate.webp"
                  alt="Power BI Certificate"
                  width={800}
                  height={600}
                  className="sm:w-full sm:h-auto w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

               {/* // Registration bar */}
      <Link href="https://forms.gle/jT6ZiKtUzTrEMrGX9" target="_blank" className="relative z-10 flex flex-col items-center">
        <motion.div
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.03 }}
          className="bg-orange-500  rounded-xl container animate-pulse hover:animate-none md:max-w-5xl max-w-[380px] sm:mx-auto px-4 py-2 cursor-pointer"
        >
          <div className="flex items-center justify-center container mx-auto px-4 py-4 text-white">
            <span className="sm:text-2xl text-xl font-semibold text-center">
              Become A Certified Power BI Expert At Just Rs <span className="line-through text-black/50">14999/-</span> 7500/- Now!
              <br />
              <span>(Offer Valid Only For Today)</span>
            </span>
          </div>
        </motion.div>
      </Link>

      {/* For Everyone Section */}
      <div className="bg-black py-16 sm:px-20 pb-1 sm:pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Designed for <span className="text-orange-500">Everyone</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              No prior experience required! Our bootcamp is structured to benefit participants from all backgrounds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Students",
                description: "Gain in-demand skills that will set you apart in the job market before you graduate.",
              },
              {
                title: "Working Professionals",
                description: "Enhance your data analysis capabilities and become more valuable to your organization.",
              },
              {
                title: "Job Seekers",
                description: "Add a powerful skill to your resume that employers are actively looking for.",
              },
            ].map((audience, index) => (
              <div
                key={index}
                className="bg-black/40 border border-orange-900/30 rounded-xl p-6 hover:border-orange-500/30 transition-all text-center"
              >
                <div className="bg-orange-900/20 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="text-orange-500" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">{audience.title}</h3>
                <p className="text-gray-400">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-950/30 via-black to-orange-950/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="text-orange-500">Transform</span> Your Career with Power BI?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">⚠️ Limited slots available. Registrations closing soon!</p>

          <Link href="https://forms.gle/jT6ZiKtUzTrEMrGX9" target="_blank" className="relative z-10">
            <motion.div
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              className="bg-orange-600 hover:bg-orange-700 inline-block rounded-xl px-8 py-4 cursor-pointer"
            >
              <div className="flex items-center justify-center text-white">
                <span className="text-xl font-semibold">👉 Click here to book your seat now</span>
                <ChevronRight className="ml-2" />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>

      {/* Add some basic animations via CSS */}
      <style jsx="true">{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .fade-in {
          animation: fadeIn 1s ease forwards;
        }

        @keyframes slideInRight {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .fade-in-slide-right {
          animation: slideInRight 0.8s ease forwards;
        }

        @keyframes slideInLeft {
          from {
            transform: translateX(20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .fade-in-slide-left {
          animation: slideInLeft 0.8s ease forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}
