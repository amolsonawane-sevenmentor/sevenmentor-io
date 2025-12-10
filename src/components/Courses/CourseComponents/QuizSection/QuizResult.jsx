"use client";
import { motion } from "framer-motion";
import { X, Check, HelpCircle, RotateCcw, Phone } from "lucide-react";
import { useEffect } from "react";

import Image from "next/image"
import Link from "next/link"
export default function QuizResult({ results, onRestart }) {
  const { correct, incorrect, skipped, accuracy } = results;
  // Defensive: Ensure total is always a valid non-negative integer
  const total = Math.max(0, Number(correct) + Number(incorrect) + Number(skipped));
  const answered = Number(correct) + Number(incorrect);

  const correctPercentage = total > 0 ? Math.round((correct / total) * 100) : 0;
  const incorrectPercentage =
    total > 0 ? Math.round((incorrect / total) * 100) : 0;
  const skippedPercentage = total > 0 ? Math.round((skipped / total) * 100) : 0;

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  // date logic
  const date = new Date();
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = `Finished ${date.toLocaleDateString("en-US", options)}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 "
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="absolute 850px:top-[100px] w-[95%] 850px:w-full max-w-4xl rounded-lg border border-orange-500/20 bg-[#1A1A1A] p-6 pt-2"
      >
        <button
          onClick={onRestart}
          className="absolute top-1 right-1 md:right-4 md:top-4 rounded-md bg-white p-2 text-black transition hover:bg-red-700 hover:text-white cursor-pointer"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <h1 className="mb-4 text-center text-4xl font-bold">
          <p className="mb-4">
            <span className="text-orange-500">Your</span>{" "}
            <span className="text-white">Test Result</span>
          </p>
          {accuracy > 85 ? (
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center mb-4 space-x-4">
                {/* Left GIF */}
                <Image
                  className="w-32 h-32"
                  src="/assets/QuizSection//congratsGifFourth.gif"
                  alt="Congrats animation"
                  height={32}
                  width={32}
                />

                {/* Congratulations text */}
                <div className="text-lg font-semibold text-center">
                  <span className="text-orange-500 text-bold text-2xl">
                    Congratulations!!
                  </span>{" "}
                  Shortly you will receive your digital copy of your{" "}
                  <p className="text-white text-bold text-2xl">
                    Seven<span className="text-orange-500">Mentor</span>{" "}
                    certificate...
                  </p>{" "}
                  over email. If you have any questions or concerns, please feel
                  free to contact us at:
                  <div className="flex items-center justify-center mt-2">
                    <Link
                      className="text-orange-500 text-2xl flex items-center justify-center"
                      href="tel:020-71173143"
                    >
                      <Phone
                        size={24}
                        color="currentColor"
                        className="mr-2 mt-1"
                      />
                      <span>2071173143</span>
                    </Link>
                  </div>
                </div>

                {/* Right GIF */}
                <Image
                  className="w-32 h-32"
                  src="/assets/QuizSection//congratsGifFourth.gif"
                  alt="Congrats animation"
                  height={32}
                  width={32}
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center mb-4 space-x-4">
                {/* Left Sad GIF */}
                <Image
                  className="w-20 h-20"
                  src="/assets/QuizSection/sadGif.gif"
                  alt="Sad face animation"
                  height={20}
                  width={20}
                />

                {/* Better Luck Text */}
                <div className="text-lg font-semibold text-center">
                  <span className="text-orange-500 text-2xl">
                    Better luck next time!
                  </span>{" "}
                  Keep practicing and you&apos;ll improve.
                </div>

                {/* Right Sad GIF */}
                <Image
                  className="w-20 h-20"
                  src="/assets/QuizSection/sadGif.gif"
                  alt="Sad face animation"
                  height={20}
                  width={20}
                />
              </div>
            </div>
          )}
        </h1>

        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{formattedDate}</span>
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              {total} Questions
            </span>
          </div>
          <div className="flex gap-8 text-right">
            <div>
              <div className="text-sm text-gray-400">Accuracy</div>
              <div className="text-2xl font-bold text-white">{accuracy}%</div>
            </div>
            <div>
              <div className="text-sm text-gray-400">Answered</div>
              <div className="text-2xl font-bold text-white">
                {answered}/{total}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8 grid grid-cols-5 lg:grid-cols-10 gap-2">
          {Array.isArray([...Array(total)]) &&
            [...Array(total)].map((_, index) => {
              const isCorrect = index < correct;
              const isIncorrect = index >= correct && index < correct + incorrect;
              const isSkipped = index >= correct + incorrect;

              return (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="relative flex aspect-square items-center justify-center rounded-md border border-orange-500/30 bg-[#242424] text-xl font-semibold text-white"
                >
                  {index + 1}
                  {(isCorrect || isIncorrect || isSkipped) && (
                    <span
                      className={`absolute -right-1 -top-1 rounded-full p-1 ${isCorrect
                          ? "bg-[#29AC34]"
                          : isIncorrect
                            ? "bg-[#FF0000]"
                            : "bg-[#5E5E5E]"
                        }`}
                    >
                      {isCorrect ? (
                        <Check className="h-3 w-3" />
                      ) : isIncorrect ? (
                        <X className="h-3 w-3" />
                      ) : (
                        <HelpCircle className="h-3 w-3" />
                      )}
                    </span>
                  )}
                </motion.div>
              );
            })}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            id="restartQuiz"
            onClick={onRestart}
            className="flex items-center gap-2 rounded-lg bg-orange-500 px-6 py-2 font-medium text-white transition hover:bg-orange-600 cursor-pointer"
          >
            <RotateCcw className="h-5 w-5" />
            Restart Quiz
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
