"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, PieChart } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Growing Industry",
    description:
      "The Digital Industry is growing rapidly at a fantastic pace. India is the second-largest internet user base in the world. This is the right time to invest in the “Make in India” and “Digital India” campaigns.",
  },
  {
    icon: DollarSign,
    title: "Low Investment",
    description:
      "Our unique business model allows you to start your training institute with low investment and high returns. Since SevenMentor is widely recognized, minimal marketing is needed.",
  },
  {
    icon: PieChart,
    title: "Proven Business Model",
    description:
      "Our proven business model enables revenue generation from day one. With a low franchise fee, pay-per-student model, and transparent royalty system, success is within reach.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

export default function WhyFranchise() {
  return (
    <section className="pb-16 pt-2 bg-black relative">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-black to-black blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center"
        >
          {/* Title with Glowing Effect */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-4xl font-bold text-white relative z-10"
          >
            Why Own a SevenMentor Franchise?
            <div className="flex justify-center items-center mt-5">
              <div className="w-16 h-1 bg-orange-500 rounded"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full mx-2"></div>
              <div className="w-16 h-1 bg-orange-500 rounded"></div>
            </div>
          </motion.h2>

          {/* Animated Benefits Cards */}
          <div className="mt-12 grid md:grid-cols-3 gap-10">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group relative bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl shadow-2xl transition-transform duration-300"
                >
                  {/* Neon Border on Hover */}
                  <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-orange-500 transition-all duration-300"></div>

                  {/* Animated Icon with Glow */}
                  <div className="relative mx-auto w-20 h-20">
                    <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-pulse" />
                    <div className="relative flex items-center justify-center w-full h-full bg-orange-500 rounded-full shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <h3 className="mt-6 text-xl font-semibold text-orange-500">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mt-2">
                    {benefit.description}
                  </p>

                  {/* Glowing Hover Effect */}
                  <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-20 transition-all duration-300 blur-xl"></div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
