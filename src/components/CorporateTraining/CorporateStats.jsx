// "use client"

// import { useEffect, useRef, useState, useCallback, memo } from "react"
// import { BookOpen, FolderOpen, Star, Users } from "lucide-react"

// // Target values for the counters
// const targetStats = {
//   peopletrained: 150,
//   reviews: 4850,
//   projects: 2700,
//   courses: 420,
// }

// // Memoized StatCard component
// const StatCard = memo(({ icon, value, label, description }) => (
//   <div
//     className="relative bg-gradient-to-br from-gray-900 to-black pb-5 sm:p-4 md:p-6 rounded-xl w-full max-w-[150px] md:max-w-[250px] md:h-72 flex flex-col items-center text-center group overflow-hidden"
//     style={{
//       contain: "layout style paint",
//       transform: "translateZ(0)", // Force GPU acceleration
//       willChange: "transform",
//     }}
//   >
//     {/* Orange glow effect - optimized */}
//     <div
//       className="absolute -top-12 -right-12 w-24 h-24 bg-orange-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
//       style={{ willChange: "opacity" }}
//     />

//     {/* Diagonal accent line - simplified */}
//     <div className="absolute top-0 right-0 w-10 h-1 bg-orange-500 opacity-50" />

//     {/* Icon circle with gradient border */}
//     <div className="relative mb-3 md:mb-6 p-2 md:p-4 rounded-full bg-black border border-gray-800 group-hover:border-orange-500/50 transition-colors duration-300">
//       <div className="text-orange-500 group-hover:text-orange-400 transition-colors">{icon}</div>
//     </div>

//     {/* Value with animated counter */}
//     <div className="relative mb-1 md:mb-2">
//       <span className="text-2xl md:text-4xl font-bold text-white">{value.toLocaleString()}</span>
//       <span className="absolute -right-3 -top-1 md:-right-4 md:-top-2 text-orange-500 font-bold text-sm md:text-xl">
//         +
//       </span>
//     </div>

//     {/* Label */}
//     <div className="text-sm md:text-xl font-semibold text-orange-500 mb-1">{label}</div>

//     {/* Description */}
//     <p className="text-xs md:text-sm text-gray-400 mb-2 md:mb-4">{description}</p>
//   </div>
// ))

// StatCard.displayName = "StatCard"

// const CorporateStats = memo(() => {
//   const [stats, setStats] = useState({
//     peopletrained: 0,
//     reviews: 0,
//     projects: 0,
//     courses: 0,
//   })
//   const [hasAnimated, setHasAnimated] = useState(false)
//   const sectionRef = useRef(null)

//   // Optimized animation function
//   const animateStats = useCallback(() => {
//     if (hasAnimated) return

//     const duration = 2000
//     const startTime = performance.now()

//     const animate = (currentTime) => {
//       const elapsed = currentTime - startTime
//       const progress = Math.min(elapsed / duration, 1)
//       const easeOutProgress = 1 - Math.pow(1 - progress, 3)

//       setStats({
//         peopletrained: Math.floor(easeOutProgress * targetStats.peopletrained),
//         reviews: Math.floor(easeOutProgress * targetStats.reviews),
//         projects: Math.floor(easeOutProgress * targetStats.projects),
//         courses: Math.floor(easeOutProgress * targetStats.courses),
//       })

//       if (progress < 1) {
//         requestAnimationFrame(animate)
//       } else {
//         setHasAnimated(true)
//       }
//     }

//     requestAnimationFrame(animate)
//   }, [hasAnimated])

//   // Optimized intersection observer
//   useEffect(() => {
//     if (hasAnimated) return

//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting) {
//           animateStats()
//           observer.disconnect() // Disconnect after first trigger
//         }
//       },
//       {
//         threshold: 0.3,
//         rootMargin: "0px 0px -50px 0px", // Trigger slightly before element is fully visible
//       },
//     )

//     const currentRef = sectionRef.current
//     if (currentRef) {
//       observer.observe(currentRef)
//     }

//     return () => {
//       if (currentRef) {
//         observer.unobserve(currentRef)
//       }
//     }
//   }, [animateStats, hasAnimated])

//   return (
//     <section
//       ref={sectionRef}
//       className="bg-black my-5 md:my-10 px-4 relative overflow-hidden"
//       style={{
//         minHeight: "300px",
//         contain: "layout style paint",
//       }}
//     >
//       <div className="max-w-6xl mx-auto mb-12 text-center">
//         <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
//           "Empowering Teams, Elevating Success: Our Impact in <span className="text-orange-500">Numbers!</span>"
//         </h2>
//         <p className="text-gray-200 max-w-2xl mx-auto">"Transforming Workforces, One Success Story at a Time!" 💼</p>
//       </div>

//       {/* Grid layout: 2x2 on mobile, row on desktop */}
//       <div className="max-w-6xl mx-auto">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 justify-items-center">
//           <StatCard
//             icon={<Users size={24} />}
//             value={stats.peopletrained}
//             label="People Trained"
//             description="Industry leaders"
//           />

//           <StatCard
//             icon={<Star size={24} />}
//             value={stats.reviews}
//             label="5-Star Reviews"
//             description="From our students"
//           />

//           <StatCard
//             icon={<FolderOpen size={24} />}
//             value={stats.projects}
//             label="Real Projects"
//             description="Hands-on experience"
//           />

//           <StatCard
//             icon={<BookOpen size={24} />}
//             value={stats.courses}
//             label="Courses"
//             description="In-demand skills"
//           />
//         </div>
//       </div>
//     </section>
//   )
// })

// CorporateStats.displayName = "CorporateStats"

// export default CorporateStats















"use client"

import { useEffect, useRef, useState, useCallback, memo } from "react"
import { BookOpen, FolderOpen, Star, Users } from "lucide-react"

const targetStats = {
  peopletrained: 150,
  reviews: 4850,
  projects: 2700,
  courses: 420,
}

const StatCard = memo(({ icon, value, label, description }) => (
  <div className="relative bg-gradient-to-br from-gray-900 to-black p-3 md:p-6 rounded-xl w-full max-w-[140px] md:max-w-[200px] flex flex-col items-center text-center group">
    <div className="absolute top-0 right-0 w-8 h-0.5 bg-orange-500 opacity-50" />

    <div className="relative mb-2 md:mb-4 p-2 md:p-3 rounded-full bg-black border border-gray-800 group-hover:border-orange-500/50 transition-colors duration-300">
      <div className="text-orange-500 w-4 h-4 md:w-6 md:h-6">{icon}</div>
    </div>

    <div className="relative mb-1">
      <span className="text-xl md:text-3xl font-bold text-white">{value.toLocaleString()}</span>
      <span className="absolute -right-2 -top-1 text-orange-500 font-bold text-sm">+</span>
    </div>

    <div className="text-xs md:text-lg font-semibold text-orange-500 mb-1">{label}</div>
    <p className="text-xs md:text-sm text-gray-400">{description}</p>
  </div>
))

StatCard.displayName = "StatCard"

const CorporateStats = memo(() => {
  const [stats, setStats] = useState({
    peopletrained: 0,
    reviews: 0,
    projects: 0,
    courses: 0,
  })
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef(null)

  const animateStats = useCallback(() => {
    if (hasAnimated) return

    const duration = 1500
    const startTime = performance.now()

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOutProgress = 1 - Math.pow(1 - progress, 2)

      setStats({
        peopletrained: Math.floor(easeOutProgress * targetStats.peopletrained),
        reviews: Math.floor(easeOutProgress * targetStats.reviews),
        projects: Math.floor(easeOutProgress * targetStats.projects),
        courses: Math.floor(easeOutProgress * targetStats.courses),
      })

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setHasAnimated(true)
      }
    }

    requestAnimationFrame(animate)
  }, [hasAnimated])

  useEffect(() => {
    if (hasAnimated) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateStats()
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [animateStats, hasAnimated])

  return (
    <section ref={sectionRef} className="bg-black my-5 md:my-10 px-4">
      <div className="max-w-6xl mx-auto mb-8 text-center">
        <h2 className="text-xl md:text-3xl font-bold text-white mb-4">
          Empowering Teams, Elevating Success: Our Impact in <span className="text-orange-500">Numbers!</span>
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto text-sm md:text-base">
          Transforming Workforces, One Success Story at a Time! 💼
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 justify-items-center">
          <StatCard
            icon={<Users size={20} />}
            value={stats.peopletrained}
            label="People Trained"
            description="Industry leaders"
          />
          <StatCard
            icon={<Star size={20} />}
            value={stats.reviews}
            label="5-Star Reviews"
            description="From our students"
          />
          <StatCard
            icon={<FolderOpen size={20} />}
            value={stats.projects}
            label="Real Projects"
            description="Hands-on experience"
          />
          <StatCard
            icon={<BookOpen size={20} />}
            value={stats.courses}
            label="Courses"
            description="In-demand skills"
          />
        </div>
      </div>
    </section>
  )
})

CorporateStats.displayName = "CorporateStats"

export default CorporateStats
