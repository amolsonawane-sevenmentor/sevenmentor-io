"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import QuizResult from "./QuizResult.jsx"
import QuizPopupForm from "../../../Forms/QuizPopUpForm/QuizPopUpForm.jsx"
import { ChevronLeft, ChevronRightIcon } from "lucide-react"

export default function QuizSection({ quizData, courseType, contactemail, contactNo = { phoneno } }) {
  const [questions, setQuestions] = useState((quizData && Array.isArray(quizData.mcqs)) ? quizData.mcqs : [])
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [timeRemaining, setTimeRemaining] = useState(600)
  const [isComplete, setIsComplete] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [resultSummary, setResultSummary] = useState(null)
  const [showPopup, setShowPopup] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [submissionSuccess, setSubmissionSuccess] = useState(false)

  const startQuiz = () => {
    const mcqsArray = (quizData && Array.isArray(quizData.mcqs)) ? quizData.mcqs : []
    const shuffledQuestions = [...mcqsArray].sort(() => Math.random() - 0.5)
    const selectedQuestions = shuffledQuestions.slice(0, 20)

    setQuestions(selectedQuestions)
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setTimeRemaining(600)
    setQuizStarted(true)
    setIsComplete(false)
    setShowResult(false)
    setResultSummary(null)
    setFormSubmitted(false)
    setSubmissionSuccess(false)
  }

  const resetQuiz = () => {
    const mcqsArray = (quizData && Array.isArray(quizData.mcqs)) ? quizData.mcqs : []
    const shuffledQuestions = [...mcqsArray].sort(() => Math.random() - 0.5)
    const selectedQuestions = shuffledQuestions.slice(0, 20)

    setQuestions(selectedQuestions)
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setTimeRemaining(600)
    setQuizStarted(false)
    setIsComplete(false)
    setShowResult(false)
    setResultSummary(null)
    setFormSubmitted(false)
    setSubmissionSuccess(false)
  }

  useEffect(() => {
    if (!quizStarted) return
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 0) {
          clearInterval(timer)
          handleSubmit()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [quizStarted])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleAnswer = (questionIndex, answerIndex) => {
    if (!quizStarted) return

    // Get the actual option text based on the answerIndex
    const question = questions[questionIndex]
    const selectedOptionText =
      answerIndex === 0
        ? question.option1
        : answerIndex === 1
          ? question.option2
          : answerIndex === 2
            ? question.option3
            : question.option4
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: {
        index: answerIndex,
        text: selectedOptionText,
      },
    }))
  }

  const handleSubmit = () => {
    if (!quizStarted) {
      setQuizStarted(true)
      return
    }

    const quizResults = Array.isArray(questions)
      ? questions.map((question, index) => {
        const selectedAnswer = selectedAnswers[index]
        if (selectedAnswer === undefined) {
          return { status: "skipped" }
        }

        // Compare the selected answer text with the correct answer text
        return selectedAnswer.text === question.answer ? { status: "correct" } : { status: "incorrect" }
      })
      : []

    const correct = quizResults.filter((r) => r.status === "correct").length
    const incorrect = quizResults.filter((r) => r.status === "incorrect").length
    const skipped = quizResults.filter((r) => r.status === "skipped").length
    const accuracy = Array.isArray(questions) && questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0

    setResultSummary({
      correct,
      incorrect,
      skipped,
      accuracy,
      total: Array.isArray(questions) ? questions.length : 0,
      details: quizResults,
    })
    setIsComplete(true)
    setShowPopup(true)
  }

  const handleClosePopup = () => {
    setShowPopup(false)
    if (formSubmitted) {
      // If form was submitted successfully, show results
      setShowResult(true)
    } else {
      // If form was not submitted or failed, reset quiz
      resetQuiz()
    }
  }

  const handleFormSubmitSuccess = (values) => {
    // Mark as submitted but don't close the popup yet
    setFormSubmitted(true)
    setSubmissionSuccess(true)
    // Don't close the popup immediately - let QuizPopupForm show its status popup
  }

  const handleFormSubmitFailure = () => {
    setFormSubmitted(false)
    setSubmissionSuccess(false)
    // Don't close the popup immediately - let QuizPopupForm show its status popup
  }

  const handleCloseResult = () => {
    setShowResult(false)
    resetQuiz()
  }

  return (
    <div className="mb-2 bg-black text-white p-4 sm:p-6 flex flex-col items-center bg-gradient-to-b from-[#121212] to-black">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-6 sm:!mb-8 lg:!mb-12 text-center text-white flex flex-wrap items-center justify-center gap-x-2">
  <span className="text-orange-500/90">PLAY QUIZ ! WIN !</span>
  <span>GRAB</span>
  <h3 className="!text-5xl lg:!text-6xl animated-text-fill !tracking-tight">SevenMentor</h3>
  <span>CERTIFICATE !!</span>
</div>


      <div
        className="w-full max-w-6xl mx-auto bg-transperent backdrop-blur-7xl rounded-xl p-4 sm:p-6 md:p-8 relative border border-orange-500/20"
        style={{
          boxShadow: "0 0 12px 4px rgba(249, 115, 22, 0.6)",
        }}
      >
        {!isComplete ? (
          <>
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <span className="text-orange-500 text-lg sm:text-xl md:text-2xl">
                {/* Questions {currentQuestion + 1}/{questions.length} */}
                Questions {currentQuestion + 1}/20
              </span>
              <span className="text-orange-500 text-lg sm:text-xl md:text-2xl">
                {quizStarted ? formatTime(timeRemaining) : "10:00"}
              </span>
            </div>

            <div className="flex justify-left lg:justify-center items-center mb-6 sm:mb-8 flex-wrap pb-2">
              {quizStarted &&
                (Array.isArray(questions) ? questions : []).map((_, index) => (
                  <div key={index} className="flex items-center flex-shrink-0">
                    <motion.div
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base mb-2 ${index === currentQuestion
                        ? "bg-orange-500 text-white bg-gradient-to-br from-orange-500/20 to-black drop-shadow-orange-500"
                        : "border border-orange-500"
                        }`}
                      initial={false}
                      animate={{ scale: index === currentQuestion ? 1.2 : 1 }}
                    >
                      {index + 1}
                    </motion.div>
                    {index < (Array.isArray(questions) ? questions.length : 0) - 1 && (
                      <div className="flex w-16 sm:w-10 h-full items-center justify-between">
                        {Array.from({ length: 4 }).map((_, dotIndex) => (
                          <div key={dotIndex} className="w-1 h-1 bg-white rounded-full mx-0.5" />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mb-6 sm:mb-8"
              >
                <h2 className="text-xl sm:text-4xl md:text-4xl mb-4 sm:mb-6 text-orange-500 text-center">
                  {quizStarted
                    ? (Array.isArray(questions) && questions[currentQuestion]?.question)
                    : "Get ready for the quiz! Here's a sample question:"}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mx-4">
                  {(quizStarted
                    ? [
                      Array.isArray(questions) && questions[currentQuestion]?.option1,
                      Array.isArray(questions) && questions[currentQuestion]?.option2,
                      Array.isArray(questions) && questions[currentQuestion]?.option3,
                      Array.isArray(questions) && questions[currentQuestion]?.option4,
                    ]
                    : ["Option A (Blurred)", "Option B (Blurred)", "Option C (Blurred)", "Option D (Blurred)"]
                  ).map((option, idx) => (
                    <motion.div
                      key={idx}
                      onClick={() => quizStarted && handleAnswer(currentQuestion, idx)}
                      className={`flex items-start space-x-4 rounded-xl border p-4 backdrop-blur-sm transition-colors hover:cursor-pointer ${quizStarted && selectedAnswers[currentQuestion]?.index === idx
                        ? "border-2 border-orange-500 bg-gradient-to-r from-black to-orange-500/60 text-white"
                        : "border-orange-500/10 bg-gradient-to-r from-orange-500/10 to-transparent hover:border-orange-500/50 text-white"
                        }`}
                    >
                      <div className="rounded-lg bg-orange-500/20 p-2">
                        <span className="h-6 w-6 text-orange-500 font-bold">
                          {String.fromCharCode(97 + idx).toUpperCase()}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <span className={`font-semibold text-xl ${!quizStarted ? "blur-[5px]" : ""}`}>{option}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <div
              className={`flex flex-wrap !mt-16 sm:flex-nowrap gap-2 ${quizStarted ? "justify-between" : "justify-center"
                }`}
            >
              <motion.button
                aria-label="Previous Question"
                id="quizPrevious"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`!cursor-pointer  px-4 sm:px-8 md:px-12 text-base sm:text-lg md:text-xl py-2 rounded-xl border border-[#FF8C00] text-[rgb(255,140,0)] hover:bg-[rgba(255,140,0,0.12)] w-[calc(50%-0.25rem)] sm:w-auto flex items-center !justify-between whitespace-nowrap ${quizStarted ? "inline" : "hidden"
                  }
                ${currentQuestion === 0 ? "invisible" : "visible"}
                `}
                onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
                disabled={currentQuestion === 0 || !quizStarted}
              >
                <span className="flex items-center !justify-between"><ChevronLeft size={20} />
                  <span>Previous</span></span>
              </motion.button>

              <motion.button
                aria-label="Next Question"
                id="quizNext"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`!cursor-pointer px-4 sm:px-8 md:px-12 text-base sm:text-lg md:text-xl py-2 rounded-xl border border-[#FF8C00] text-[rgb(255,140,0)] hover:bg-[rgba(255,140,0,0.12)] w-[calc(50%-0.25rem)] order-none sm:order-last sm:w-auto whitespace-nowrap ${quizStarted ? "inline" : "hidden"
                  } 
                ${currentQuestion === (Array.isArray(questions) ? questions.length : 0) - 1 ? "invisible" : "visible"}
                `}
                onClick={() => setCurrentQuestion((prev) => Math.min((Array.isArray(questions) ? questions.length : 0) - 1, prev + 1))}
                disabled={currentQuestion === (Array.isArray(questions) ? questions.length : 0) - 1 || !quizStarted}
              >
                <div className="flex items-center justify-cente">
                  Next
                  <ChevronRightIcon size={20} />
                </div>
              </motion.button>
              <motion.button
                aria-label="Start Quiz"
                id={`${!quizStarted ? "quizSubmit" : "quizStart"}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="!cursor-pointer px-4 sm:px-8 md:px-12 text-base sm:text-lg md:text-xl py-2 rounded-xl bg-orange-500 text-white w-full sm:w-auto order-last sm:order-none mb-2 sm:mb-0"
                onClick={quizStarted ? handleSubmit : startQuiz}
              >
                {quizStarted ? "Submit" : "Start Now"}
              </motion.button>
            </div>
          </>
        ) : null}
      </div>
      <AnimatePresence>
        {showPopup && (
          <QuizPopupForm
            isOpen={showPopup}
            onClose={handleClosePopup}
            onSubmitSuccess={handleFormSubmitSuccess}
            onSubmitFailure={handleFormSubmitFailure}
            title={"Fill Form To View Result"}
            resultSummary={resultSummary}
            courseType={courseType}
            isSyllabus={false}
            contactemail={contactemail}
            contactNo={contactNo}
          />
        )}
        {showResult && resultSummary && <QuizResult results={resultSummary} onRestart={resetQuiz} />}
      </AnimatePresence>
    </div>
  )
}
