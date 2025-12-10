import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function RotatingHeading({ words }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Rotates every 3 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="relative flex flex-col justify-center items-center text-center  md:items-start">
      {/* Static "Redefining" Text */}
      <h1 className="text-3xl lg:text-6xl text-center md:text-left font-bold">Redefining</h1>

      {/* Rotating Words Below */}
      <div className="relative h-[40px] md:h-[90px] flex items-center justify-start overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.h1
            key={words[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-6xl text-center md:text-left  font-bold text-orange-500"
          >
            {words[index]}
          </motion.h1>
        </AnimatePresence>
      </div>
    </div>
  );
}
