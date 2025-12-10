
"use client"

import { memo } from "react"
import Image from "next/image"

const OnboardingHeader = memo(() => (
  <div className="text-center mb-6">
    <h2 className="text-xl md:text-3xl font-bold text-gray-100 mb-4">
      Why do Organisations Need <span className="text-orange-500">Corporate Training</span>
    </h2>

    <div className="flex justify-center items-center my-5">
      <div className="w-12 h-0.5 bg-orange-500 rounded"></div>
      <div className="w-2 h-2 bg-orange-500 rounded-full mx-2"></div>
      <div className="w-12 h-0.5 bg-orange-500 rounded"></div>
    </div>

    <p className="text-gray-100 mb-4 px-2 text-sm md:text-base max-w-6xl mx-auto">
     Organizations need Corporate Training Services to build a skilled and adaptable workforce, driving business efficiency and effectiveness. Programs like Leadership Training equip employees with critical decision-making and strategic abilities, fostering stronger teams and innovation. Combined with persona-based onboarding, tailored training ensures role-specific skill development, faster integration, and readiness for technological shifts. By investing in continuous learning, companies boost productivity, engagement, and long-term competitiveness
    </p>
  </div>
))

OnboardingHeader.displayName = "OnboardingHeader"

const BenefitsList = memo(() => {
  const benefits = [
    {
      title: "Role Alignment:",
      description: "Tailors onboarding to specific job roles, ensuring new hires gain relevant skills and knowledge.",
    },
    {
      title: "Enhanced Efficiency:",
      description: "Speeds up the learning curve by focusing on the unique needs of different personas.",
    },
    {
      title: "Increased Engagement:",
      description: "Personalizes the experience, boosting motivation and retention among new employees.",
    },
    {
      title: "Future-Readiness:",
      description:
        "Prepares new hires for emerging technologies and future challenges, keeping the workforce competitive.",
    },
    {
      title: "Cost-Effectiveness:",
      description:
        "Optimizes training resources and reduces the time and cost associated with generalized onboarding programs.",
    },
    {
      title: "Improved Productivity:",
      description: "Accelerates the integration of new employees into their roles, enhancing overall team performance.",
    },
  ]

  return (
    <div className="md:w-1/2 text-left">
      <ul className="space-y-2 text-gray-700">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex flex-col sm:flex-row sm:items-start">
            <strong className="text-orange-500 flex-shrink-0 mb-1 sm:mb-0 sm:mr-2 text-sm md:text-base">
              {benefit.title}
            </strong>
            <span className="text-gray-100 leading-relaxed text-sm md:text-base">{benefit.description}</span>
          </li>
        ))}
      </ul>
    </div>
  )
})

BenefitsList.displayName = "BenefitsList"

const OnboardingImage = memo(() => (
  <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
    <div className="relative w-full max-w-md">
      <Image
        src="/assets/corporate/corporatemumbai/Why_choose_corporate.webp"
        alt="Corporate training onboarding illustration"
        width={400}
        height={300}
        className="w-full h-auto object-contain"
        loading="lazy"
        sizes="(max-width: 768px) 90vw, 400px"
        quality={75}
      />
    </div>
  </div>
))

OnboardingImage.displayName = "OnboardingImage"

const OnboardingComponent = memo(() => {
  return (
    <div className="p-4 md:p-8">
      <OnboardingHeader />
      <section className="flex flex-col md:flex-row items-center justify-between bg-black rounded-lg shadow-md p-4 md:p-6">
        <BenefitsList />
        <OnboardingImage />
      </section>
    </div>
  )
})

OnboardingComponent.displayName = "OnboardingComponent"

export default OnboardingComponent
