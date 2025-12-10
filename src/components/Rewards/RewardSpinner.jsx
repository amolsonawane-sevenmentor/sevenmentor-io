

"use client"

import { motion } from "framer-motion"
import { Gift, Percent, ShoppingBag, DollarSign, BookOpen, Award, Star, Trophy } from "lucide-react"

export default function RewardSpinner({ isSpinning }) {
  const segments = [
    {
      text: "25% DISCOUNT",
      color: "bg-orange-500",
      bgColor: "#f97316",
      textColor: "text-black",
      icon: <Percent size={28} />,
    },
    {
      text: "LAPTOP BAG",
      color: "bg-black",
      bgColor: "#000000",
      textColor: "text-orange-400",
      icon: <ShoppingBag size={28} />,
    },
    {
      text: "CASH BACK",
      color: "bg-orange-500",
      bgColor: "#f97316",
      textColor: "text-black",
      icon: <DollarSign size={28} />,
    },
    {
      text: "500 RS",
      color: "bg-black",
      bgColor: "#000000",
      textColor: "text-orange-400",
      icon: <Award size={28} />,
    },
    {
      text: "FREE COURSE",
      color: "bg-orange-500",
      bgColor: "#f97316",
      textColor: "text-black",
      icon: <BookOpen size={28} />,
    },
    {
      text: "AMAZON VOUCHER",
      color: "bg-black",
      bgColor: "#000000",
      textColor: "text-orange-400",
      icon: <Gift size={28} />,
    },
    {
      text: "15% DISCOUNT",
      color: "bg-orange-500",
      bgColor: "#f97316",
      textColor: "text-black",
      icon: <Percent size={28} />,
    },
    {
      text: "SURPRISE GIFT",
      color: "bg-black",
      bgColor: "#000000",
      textColor: "text-orange-400",
      icon: <Star size={28} />,
    },
  ]

  const totalSegments = segments.length
  const segmentAngle = 360 / totalSegments

  return (
    <div className="relative w-[420px] h-[420px] mx-auto">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-600 via-orange-500 to-orange-400 p-1 shadow-[0_0_50px_rgba(249,115,22,0.5)]">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-900 to-black p-3">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-orange-400 rounded-full shadow-lg"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotate(${i * 15}deg) translateY(-200px)`,
              }}
            />
          ))}

          <motion.div
            className="relative w-full h-full rounded-full overflow-hidden shadow-2xl bg-white"
            animate={isSpinning ? { rotate: 1800 + Math.random() * 360 } : { rotate: 0 }}
            transition={{ duration: 4, ease: "easeOut" }}
          >
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 420">
              <defs>
                {segments.map((_, index) => {
                  const startAngle = index * segmentAngle - 90
                  const midAngle = startAngle + segmentAngle / 2
                  const textRadius = 140

                  return (
                    <path
                      key={index}
                      id={`textPath-${index}`}
                      d={`
                        M ${210 + textRadius * Math.cos(((midAngle - segmentAngle * 0.35) * Math.PI) / 180)} 
                          ${210 + textRadius * Math.sin(((midAngle - segmentAngle * 0.35) * Math.PI) / 180)} 
                          A ${textRadius} ${textRadius} 0 0 1 
                          ${210 + textRadius * Math.cos(((midAngle + segmentAngle * 0.35) * Math.PI) / 180)} 
                          ${210 + textRadius * Math.sin(((midAngle + segmentAngle * 0.35) * Math.PI) / 180)}
                      `}
                      fill="none"
                    />
                  )
                })}
              </defs>

              {segments.map((segment, index) => {
                const startAngle = index * segmentAngle - 90
                const endAngle = startAngle + segmentAngle
                const midAngle = startAngle + segmentAngle / 2

                const radius = 200
                const centerX = 210
                const centerY = 210

                const x1 = centerX + radius * Math.cos((startAngle * Math.PI) / 180)
                const y1 = centerY + radius * Math.sin((startAngle * Math.PI) / 180)
                const x2 = centerX + radius * Math.cos((endAngle * Math.PI) / 180)
                const y2 = centerY + radius * Math.sin((endAngle * Math.PI) / 180)

                const largeArcFlag = segmentAngle > 180 ? 1 : 0

                const iconX = centerX + 70 * Math.cos((midAngle * Math.PI) / 180)
                const iconY = centerY + 70 * Math.sin((midAngle * Math.PI) / 180)

                return (
                  <g key={index}>
                    <path
                      d={`M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                      fill={segment.bgColor}
                      stroke="#ffffff"
                      strokeWidth="2"
                    />
                    <text
                      className={`${segment.color === "bg-orange-500" ? "fill-black" : "fill-orange-400"} text-[8px] font-bold`}
                      textAnchor="middle"
                      style={{ fontFamily: "Arial, sans-serif", fontWeight: "800" }}
                    >
                      <textPath href={`#textPath-${index}`} startOffset="50%">
                        {segment.text}
                      </textPath>
                    </text>
                    <foreignObject
                      x={iconX - 16}
                      y={iconY - 16}
                      width="32"
                      height="32"
                      className={segment.color === "bg-orange-500" ? "text-black" : "text-orange-400"}
                    >
                      <div className="flex items-center justify-center w-full h-full font-bold">{segment.icon}</div>
                    </foreignObject>
                  </g>
                )
              })}
            </svg>

            <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full border-4 border-white shadow-2xl flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10">
              <Trophy size={36} className="text-black drop-shadow-lg" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-20">
        <div className="relative">
          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-xl border-2 border-white flex items-center justify-center">
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent border-t-black"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
