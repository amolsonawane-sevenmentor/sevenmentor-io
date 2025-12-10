"use client"

import { useState, useEffect } from "react"
import "../forms.css"
import { useFormik } from "formik"
import * as Yup from "yup"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faEnvelope,
  faUser,
  faCity,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons"

import axios from "axios"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

const submitFormData = async (
  values,
  isSyllabusForm,
  courseType,
  accuracy,
  contactemail,
  contactNo,
  userIP,
  pageUrl,
  token,
) => {
  const submissionData = {
    formData: {
      Name: values.Name,
      Email: values.email,
      Phone: values.phone, // Just the phone number, no country code
      City: values.city,
      Percentage: accuracy,
      PageUrl: pageUrl,
      IP_Address: userIP, // Only IP address included
    },
    syllabusFormData: {
      Name: values.Name,
      Email: values.email,
      PhoneNumber: values.phone, // Just the phone number, no country code
      City: values.city,
      PageUrl: pageUrl,
      IP_Address: userIP, // Only IP address included
    },
    CourseName: courseType,
    To: contactemail,
    contactNo,
    token,
    trainerName: "Kuldeep Singh",
  }

  try {
    const response = isSyllabusForm
      ? await axios.post("/api/syllabus-popup", submissionData)
      : await axios.post("/api/quiz-email-popup", submissionData)

    return { success: true, data: response.data }
  } catch (error) {
    console.error("Error submitting form:", error)
    return { success: false, error: error.message }
  }
}

const QuizPopupForm = ({
  isOpen,
  onClose,
  onSubmit,
  onSubmitSuccess,
  onSubmitFailure,
  title,
  resultSummary,
  courseType,
  isSyllabusForm,
  contactemail,
  contactNo,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionMessage, setSubmissionMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  const [showStatusPopup, setShowStatusPopup] = useState(false)
  const [pageUrl, setPageUrl] = useState("")
  const [isLoadingIP, setIsLoadingIP] = useState(true)
  const [userIP, setUserIP] = useState("")

  const { accuracy } = resultSummary || {}

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href)
    }
  }, [])

  // Fetch ONLY User's IP Address - NO GEOLOCATION
  useEffect(() => {
    const fetchIPAddress = async () => {
      setIsLoadingIP(true)
      try {
        // Primary API - ipify (simple, fast, no geolocation)
        const response = await axios.get("https://api.ipify.org?format=json")
        
        if (response.data && response.data.ip) {
          setUserIP(response.data.ip)
        }
      } catch (error) {
        console.error("Failed to fetch IP address:", error)

        // Fallback API
        try {
          const fallbackResponse = await axios.get("https://api.ipify.org")
          setUserIP(fallbackResponse.data)
        } catch (fallbackError) {
          console.error("Fallback IP fetch also failed:", fallbackError)
          // Set empty string if all attempts fail
          setUserIP("")
        }
      } finally {
        setIsLoadingIP(false)
      }
    }

    fetchIPAddress()
  }, [])

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false)
      setSubmissionMessage("")
      setIsSuccess(false)
      setShowStatusPopup(false)
    }
  }, [isOpen])

  const validationSchema = Yup.object({
    Name: Yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
    city: Yup.string().required("Please enter your city"),
  })

  const formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      phone: "",
      city: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        // Ensure reCAPTCHA is ready
        const token = await window.grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          { action: "submit" }
        );
        
        // Simplified submission - NO country data needed
        const result = await submitFormData(
          values,
          isSyllabusForm,
          courseType,
          accuracy,
          contactemail,
          contactNo,
          userIP,
          pageUrl,
          token,
        )
        if (result.success) {
          if (isSyllabusForm) {
            // Trigger syllabus download
            await onSubmit(values)
          } else {
            // Handle quiz submission
            onSubmitSuccess(values)
          }
          setSubmissionMessage("Thank you! Your submission was received.")
          setIsSuccess(true)
          setIsSubmitted(true)
          setShowStatusPopup(true)
          resetForm()
        } else {
          throw new Error(result.error)
        }
      } catch (error) {
        console.error("Error submitting form:", error)
        setSubmissionMessage("Oops! Something went wrong. Please try again.")
        setIsSuccess(false)
        setIsSubmitted(true)
        setShowStatusPopup(true)
        if (isSyllabusForm) {
          onClose()
        } else {
          onSubmitFailure()
        }
      }
    },
  })

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-[99999]">
      <div
        className={`relative rounded-xl z-[99999] bg-white shadow-lg`}
        style={{ minHeight: "350px", width: "90%", maxWidth: "500px" }}
      >
        <button
          onClick={onClose}
          className="absolute text-sm top-2 right-2 text-white bg-orange-500 p-1 px-2 rounded-md hover:bg-red-700 font-bold transition-colors"
        >
          X
        </button>

        <h3 className="text-2xl font-bold pt-3 px-8 text-center mb-0 text-orange-600">{title}</h3>
        <form className="p-6" onSubmit={formik.handleSubmit}>
          {/* Loading indicator while detecting IP */}
          {isLoadingIP && (
            <div className="text-center text-sm text-gray-600 mb-3">Loading...</div>
          )}

          <div className="relative mb-4">
            <FontAwesomeIcon icon={faUser} className="absolute top-4 left-3 text-gray-600" />
            <input
              type="text"
              name="Name"
              aria-label="Name"
              placeholder="Enter Your Name"
              className="w-full !bg-white !pl-[35px] !text-black p-3 rounded-lg shadow-sm ring-1 ring-orange-500 focus:ring-orange-500 focus:border-orange-500 border-2 border-orange-500"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Name}
            />
            {formik.touched.Name && formik.errors.Name && <div className="text-red-700 text-sm mt-1">{formik.errors.Name}</div>}
          </div>

          <div className="relative mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="absolute top-4 left-3 text-gray-600" />
            <input
              type="email"
              name="email"
              aria-label="Email"
              placeholder="Enter Your Email"
              className="w-full !bg-white !pl-[35px] !text-black p-3 rounded-lg shadow-sm ring-1 ring-orange-500 focus:ring-orange-500 focus:border-orange-500 border-2 border-orange-500"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && <div className="text-red-700 text-sm mt-1">{formik.errors.email}</div>}
          </div>

          <div className="relative mb-4">
            <FontAwesomeIcon icon={faPhone} className="absolute top-4 left-3 text-gray-600" />
            <input
              type="tel"
              aria-label="Phone"
              name="phone"
              placeholder="Enter Your Phone Number"
              className="w-full !bg-white !pl-[35px] !text-black p-3 rounded-lg shadow-sm ring-1 ring-orange-500 focus:ring-orange-500 focus:border-orange-500 border-2 border-orange-500"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              maxLength={10}
            />
            {formik.touched.phone && formik.errors.phone && <div className="text-red-700 text-sm mt-1">{formik.errors.phone}</div>}
          </div>

          <div className="relative mb-4">
            <FontAwesomeIcon icon={faCity} className="absolute top-4 left-3 text-gray-600 z-10" />
            <input
              type="text"
              name="city"
              aria-label="City"
              placeholder="Enter Your City"
              className="w-full !bg-white !pl-[35px] !text-black p-3 rounded-lg shadow-sm ring-1 ring-orange-500 focus:ring-orange-500 focus:border-orange-500 border-2 border-orange-500"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.city}
            />
            {formik.touched.city && formik.errors.city && <div className="text-red-700 text-sm mt-1">{formik.errors.city}</div>}
          </div>

          <div className="flex items-center justify-center mt-5">
            <button
              disabled={formik.isSubmitting || isLoadingIP}
              type="submit"
              className="relative w-full lg:w-[250px] bg-gradient-to-r from-orange-700 to-orange-500 text-white font-bold py-3 px-4 rounded-full overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formik.isSubmitting ? "Submitting..." : isLoadingIP ? "Loading..." : "Submit"}
              <Image
                src="/assets/shimmer.webp"
                alt="shimmer animation"
                className="absolute top-0 left-0 w-[44px] h-[48px] shimmer-effect"
                height={48}
                width={44}
                style={{
                  objectFit: "cover",
                  height: "100%",
                }}
              />
            </button>
          </div>
        </form>
      </div>

      <AnimatePresence>
        {showStatusPopup && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-[999999] bg-black/40 backdrop-blur-sm"
          >
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full text-center relative">
              <div className="flex flex-col items-center justify-center space-y-3">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isSuccess ? "bg-green-100" : "bg-red-100"
                  }`}
                >
                  <FontAwesomeIcon
                    icon={isSuccess ? faCheckCircle : faTimesCircle}
                    className={`h-8 w-8 ${isSuccess ? "text-green-600" : "text-red-600"}`}
                  />
                </div>
                <h3 className={`text-xl font-bold ${isSuccess ? "text-gray-800" : "text-red-600"}`}>
                  {isSuccess ? "Successful!" : "Failed!"}
                </h3>
                <p className={`text-center text-lg font-semibold ${isSuccess ? "text-gray-600" : "text-red-500"}`}>
                  {isSuccess
                    ? "The form submitted successfully. Our Team will get back to you shortly!"
                    : "The form submission failed. Please try again later!"}
                </p>
                <button
                  onClick={() => {
                    setShowStatusPopup(false)
                    if (isSuccess) {
                      onClose()
                    }
                  }}
                  className={`mt-2 w-20 ${
                    isSuccess ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
                  } text-white font-medium py-2 px-4 rounded-md transition`}
                >
                  OK
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default QuizPopupForm
