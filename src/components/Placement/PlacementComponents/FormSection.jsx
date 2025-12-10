"use client"

import { motion } from "framer-motion"
import { ArrowRightIcon, BookOpenIcon, UsersIcon, BriefcaseIcon } from "lucide-react"
import Link from "next/link"
import HomeBannerForm from "../../Forms/HomeBannerForm"

const stats = [
  { icon: BookOpenIcon, title: "Courses Offered", value: "200+" },
  { icon: UsersIcon, title: "Students Trained", value: "50,000+" },
  { icon: BriefcaseIcon, title: "Hiring Partners", value: "100+" },
]

export default function FormSection() {
  return (
    <section className="bg-black text-white py-16 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center md:px-16 lg:items-stretch gap-12">
          {/* Left side: Institute Information */}
          <motion.div
            className="w-full lg:w-1/2 space-y-8 px-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="text-2xl md:text-5xl font-bold text-center md:text-left leading-tight"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Unlock Your Potential with{" "}
              <span className="animated-text-fill !text-4xl md:!text-5xl !tracking-tight">SevenMentor</span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Seven Mentor is your gateway to a successful career in technology. Our industry-leading courses and expert
              mentors prepare you for the challenges of tomorrow&apos;s tech landscape.
            </motion.p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-zinc-800 border border-orange-700/20 bg-opacity-50 rounded-lg p-4 text-center"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-orange-500" />
                  <h3 className="text-xl font-semibold">{stat.value}</h3>
                  <p className="text-sm text-gray-400">{stat.title}</p>
                </div>
              ))}
            </motion.div>
            <div className="flex items-center justify-center w-full lg:justify-start">
              <Link
                href="/home"
                className="flex items-center justify-center w-[70%] lg:w-auto whitespace-nowrap bg-orange-500 text-white px-3 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors duration-300"
              >
                Explore Our Courses
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </motion.div>

          {/* Right side: Placeholder for Form */}
          <div className="w-full lg:w-1/2 bg-black bg-opacity-50 rounded-lg md:p-8 mt-[-50px]">
            <HomeBannerForm />
          </div>
        </div>
      </div>
    </section>
  )
}