import React from "react"
import { motion } from "framer-motion"
import { RocketIcon, Target, TrendingUp, ChevronRight } from 'lucide-react'
import HomeBannerForm from "../../../Forms/HomeBannerForm"

const features = [
  {
    icon: RocketIcon,
    title: "Personalized Learning",
    description: "Tailored lessons to match your career aspirations and learning pace.",
  },
  {
    icon: Target,
    title: "Industry-Relevant Curriculum",
    description: "Stay ahead with training aligned to the latest market trends.",
  },
  {
    icon: TrendingUp,
    title: "Networking Opportunities",
    description: "Connect with peers and mentors to expand your professional circle.",
  },
]

export default function CourseFormSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 py-20">
      <div className="absolute inset-0 bg-center" />
      
      <div className="container relative mx-auto px-4">
        <div className="mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Achieve Excellence Through{" "}
            <span className="bg-gradient-to-r from-orange-400 to-pink-600 bg-clip-text text-transparent">
              Expert Education
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto max-w-2xl text-xl text-gray-300"
          >
            Develop skills, gain confidence, and reach your professional goals with our expert-guided training.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="group overflow-hidden bg-gray-800/50 transition-all duration-300 hover:bg-gray-800/80">
                <div className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/10 text-orange-400 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <button size="lg" className="bg-orange-500 text-white hover:bg-orange-600">
            Start Your Journey
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </motion.div>

        <div className="mt-20">
          <div className="overflow-hidden bg-gray-800/50">
            <div className="p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-white">Take the First Step</h3>
                  <p className="mb-6 text-gray-300">
                    Ready to fast-track your future? Fill out the form and join our community of ambitious learners today!
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="h-1 w-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-600" />
                    <p className="text-sm font-medium text-orange-400">Your success story starts here</p>
                  </div>
                </div>
                <div>
                  <HomeBannerForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

