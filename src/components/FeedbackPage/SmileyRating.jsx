"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const SmileyRating = ({ onChange }) => {
  const [selectedRating, setSelectedRating] = useState(null);
  const [hoveredRating, setHoveredRating] = useState(null);
  const smileys = [
    { emoji: "😠", label: "Terrible" },
    { emoji: "😞", label: "Very Bad" },
    { emoji: "😕", label: "Bad" },
    { emoji: "😐", label: "Poor" },
    { emoji: "🙂", label: "Okay" },
    { emoji: "😊", label: "Good" },
    { emoji: "😄", label: "Very Good" },
    { emoji: "😁", label: "Great" },
    { emoji: "🤩", label: "Excellent" },
    { emoji: "😍", label: "Amazing" },
  ];

  // Function to get color based on rating index
  const getColor = (index) => {
    // Color gradient from red to green
    const colors = [
      "#FF0000", "#FF3300", "#FF6600", "#FF9900", "#FFCC00",
      "#CCFF00", "#99FF00", "#66FF00", "#33FF00", "#00FF00"
    ];
    return colors[index];
  };

  const handleSelect = (index, label) => {
    setSelectedRating(index + 1);
    onChange(label); // Pass the label instead of the numeric rating
  };

  return (
    <div className="w-full mb-6">
      <p className="text-orange-500 font-semibold mb-3 text-center">How would you rate your experience?</p>
      <div className="flex justify-center items-center gap-1 md:gap-2 flex-wrap">
        {smileys.map((smiley, index) => {
          const rating = index + 1
          const isSelected = selectedRating === rating
          const isHovered = hoveredRating === rating || hoveredRating === null

          return (
            <motion.div
              key={index}
              className="relative cursor-pointer flex flex-col items-center"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setHoveredRating(rating)}
              onMouseLeave={() => setHoveredRating(null)}
              onClick={() => handleSelect(index, smiley.label)}
            >
              <div
                className={`text-4xl md:text-4xl py-2 transition-transform duration-200 ${isSelected ? "scale-[1.5]" : ""}`}
                style={{
                  color: isSelected
                    ? getColor(index)
                    : hoveredRating && hoveredRating >= rating
                      ? getColor(index)
                      : "#888888",
                  filter: isSelected ? "drop-shadow(0 0 3px rgba(255,255,255,0.5))" : "none",
                  opacity: isSelected ? 1 : hoveredRating && hoveredRating < rating ? 0.5 : 0.8,
                }}
              >
                {smiley.emoji}
              </div>
              {isSelected && (
                <div
                  className="absolute -bottom-6 whitespace-nowrap text-xs font-medium"
                  style={{ color: getColor(index) }}
                >
                  {smiley.label}
                </div>
              )}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default SmileyRating
