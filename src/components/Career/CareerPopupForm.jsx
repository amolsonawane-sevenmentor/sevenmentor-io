"use client"

import { useState, useEffect } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { User, Mail, Phone, CheckCircle, XCircle, Briefcase } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"

const CareerPopupForm = ({ isOpen, onClose, jobTitle, jobType, jobLocation }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionMessage, setSubmissionMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  const [isLoadingIP, setIsLoadingIP] = useState(true)
  const [userIP, setUserIP] = useState("")
  const [pageUrl, setPageUrl] = useState("")

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
    }
  }, [isOpen])

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        onClose()
      }, 2700)
      return () => clearTimeout(timer)
    }
  }, [isSubmitted, onClose])

  const validationSchema = Yup.object({
    FullName: Yup.string().required("Full name is required").min(2, "Full name must be at least 2 characters"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number must be numeric")
      .min(10, "Phone number must be at least 10 digits")
      .max(13, "Phone number cannot exceed 13 digits"),
    CoverLetter: Yup.string()
      .required("Cover letter is required")
      .min(10, "Cover letter must be at least 10 characters"),
    file: Yup.mixed()
      .required("Resume is required")
      .test("fileSize", "File size cannot exceed 5MB", (value) => value && value.size <= 5 * 1024 * 1024)
      .test(
        "fileFormat",
        "Unsupported file format. Only PDF, DOC, and DOCX are allowed.",
        (value) =>
          value &&
          [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ].includes(value.type)
      ),
  })

  const to = "careers@sevenmentor.com"

  const formik = useFormik({
    initialValues: {
      FullName: "",
      email: "",
      phone: "",
      CoverLetter: "",
      file: null,
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Ensure reCAPTCHA is ready
        const token = await window.grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          { action: "submit" }
        );

        // Create FormData object
        const formData = new FormData()

        // Prepare JSON data - NO country, NO country code, NO std code
        const jsonFormData = {
          Name: values.FullName,
          Email: values.email,
          Phone: values.phone, // Just the phone number, no country code
          CoverLetter: values.CoverLetter,
          JobTitle: jobTitle,
          JobType: jobType,
          JobLocation: jobLocation,
          PageUrl: pageUrl,
          IP_Address: userIP, // Only IP address included
        }

        // Append data to FormData
        formData.append("formData", JSON.stringify(jsonFormData))
        formData.append("file", values.file)
        formData.append("to", to)
        formData.append("token", token)

        const response = await axios.post("/api/career-form", formData, {
          headers: {
            // Let axios set Content-Type automatically for FormData
          },
          timeout: 60000, // Increased timeout to 60 seconds
          maxContentLength: Infinity,
          maxBodyLength: Infinity,
          transformRequest: [
            (data) => data, // Don't transform the data
          ],
        })

        if (response.status === 200) {
          setSubmissionMessage("Thank you! Your submission was received, and we will get back to you shortly.")
          setIsSuccess(true)
          setIsSubmitted(true)
          resetForm()
        } else {
          throw new Error("Submission failed")
        }
      } catch (error) {
        console.error("Error submitting form:", error)

        // More detailed error handling
        let errorMessage = "Oops! Something went wrong. Please try submitting again."

        if (error.response) {
          // Server responded with error status
          errorMessage = error.response.data?.error || `Server error: ${error.response.status}`
          console.error("Server error response:", error.response.data)
        } else if (error.request) {
          // Request was made but no response received
          errorMessage = "Network error. Please check your connection and try again."
          console.error("Network error:", error.request)
        } else if (error.code === "ECONNABORTED") {
          // Timeout error
          errorMessage = "Request timed out. Please try again with a smaller file."
        } else {
          // Something else happened
          errorMessage = error.message || errorMessage
          console.error("General error:", error.message)
        }

        setSubmissionMessage(errorMessage)
        setIsSuccess(false)
        setIsSubmitted(true)
      } finally {
        setSubmitting(false)
      }
    },
  })

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-[99999]">
      <div
        className="relative rounded-xl bg-white shadow-lg"
        style={{ minHeight: "600px", width: "90%", maxWidth: "500px" }}
      >
        <button
          onClick={onClose}
          className="cursor-pointer absolute text-sm top-2 right-2 text-white bg-red-700 p-1 px-2 rounded-md hover:bg-red-500 font-bold transition-colors"
        >
          X
        </button>

        <h3 className="text-2xl font-bold pt-3 text-center !text-orange-500">Apply for this Position</h3>

        <form className="p-6 pb-0" onSubmit={formik.handleSubmit}>
          {/* Loading indicator while detecting IP */}
          {isLoadingIP && (
            <div className="text-center text-sm text-gray-600 mb-3">Loading...</div>
          )}

          {/* Job Title (Disabled) */}
          <div className="mb-4 relative">
            <Briefcase className="absolute top-4 left-3 text-gray-600 w-5 h-5" />
            <input
              type="text"
              value={jobTitle}
              disabled
              className="w-full pl-[35px] text-black bg-gray-100 p-3 rounded-lg shadow-sm border focus:outline-none resize-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {/* Full Name Field */}
            <div className="relative">
              <User className="absolute top-4 left-3 text-gray-600 w-5 h-5" />
              <input
                type="text"
                name="FullName"
                aria-label="FullName"
                placeholder="Enter Full Name"
                className="placeholder-black placeholder-opacity-75 w-full pl-[35px] text-black p-3 rounded-lg shadow-sm border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.FullName}
              />
              {formik.touched.FullName && formik.errors.FullName && (
                <div className="text-red-700 text-sm mt-1">{formik.errors.FullName}</div>
              )}
            </div>

            {/* Email Field */}
            <div className="relative">
              <Mail className="absolute top-4 left-3 text-gray-600 w-5 h-5" />
              <input
                type="email"
                name="email"
                aria-label="Email"
                placeholder="Enter Your Email"
                className="placeholder-black placeholder-opacity-75 w-full pl-[35px] text-black p-3 rounded-lg shadow-sm border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-700 text-sm mt-1">{formik.errors.email}</div>
              )}
            </div>
          </div>

          {/* Phone Number Field - NO COUNTRY CODE */}
          <div className="relative mb-4">
            <Phone className="absolute top-4 left-3 text-gray-600 w-5 h-5" />
            <input
              type="tel"
              name="phone"
              aria-label="Phone"
              placeholder="Enter Your Phone Number"
              className="placeholder-black placeholder-opacity-75 w-full pl-[35px] text-black p-3 rounded-lg shadow-sm border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              maxLength={13}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-700 text-sm mt-1">{formik.errors.phone}</div>
            )}
          </div>

          <div className="relative mb-4">
            <textarea
              name="CoverLetter"
              aria-label="CoverLetter"
              placeholder="Write your cover letter"
              className="placeholder-black placeholder-opacity-75 w-full text-black p-3 rounded-lg shadow-sm border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
              rows="2"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.CoverLetter}
            ></textarea>
            {formik.touched.CoverLetter && formik.errors.CoverLetter && (
              <div className="text-red-700 text-sm mt-1">{formik.errors.CoverLetter}</div>
            )}
          </div>

          <div className="relative mb-4">
            <input
              type="file"
              name="file"
              aria-label="File"
              accept=".pdf,.doc,.docx"
              className="w-full text-black p-3 rounded-lg shadow-sm border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
              onChange={(event) => {
                const file = event.currentTarget.files[0]
                formik.setFieldValue("file", file)
              }}
              onBlur={formik.handleBlur}
            />
            {formik.touched.file && formik.errors.file && (
              <div className="text-red-700 text-sm mt-1">{formik.errors.file}</div>
            )}
            <p className="text-sm text-gray-600 mt-2">Allowed Type(s): .pdf, .doc, .docx</p>
          </div>

          <div className="md:pl-[70px] pl-[10px]">
            <button
              type="submit"
              disabled={formik.isSubmitting || isLoadingIP}
              className="cursor-pointer relative w-[300px] bg-gradient-to-r mt-2 from-orange-700 to-orange-500 text-white font-bold py-3 px-4 rounded-full overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed mb-2"
            >
              <span className="relative z-10">
                {formik.isSubmitting ? "Submitting..." : isLoadingIP ? "Loading..." : "Submit"}
              </span>
              <div
                className="absolute top-0 left-0 w-[44px] h-[48px] shimmer-effect"
                style={{
                  objectFit: "cover",
                  height: "100%",
                }}
              />
            </button>
          </div>
        </form>

        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex items-center justify-center z-[999999] bg-black/40 backdrop-blur-sm"
            >
              <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center relative">
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div
                    className={`w-12 h-12 ${
                      isSuccess ? "bg-green-100" : "bg-red-100"
                    } rounded-full flex items-center justify-center`}
                  >
                    {isSuccess ? (
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    ) : (
                      <XCircle className="h-8 w-8 text-red-600" />
                    )}
                  </div>
                  <h3 className={`text-2xl font-bold ${isSuccess ? "text-gray-800" : "text-red-600"}`}>
                    {isSuccess ? "Successful!" : "Failed!"}
                  </h3>
                  <p className={`text-center ${isSuccess ? "text-gray-600" : "text-red-500"}`}>{submissionMessage}</p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      if (isSuccess) onClose()
                    }}
                    className={`cursor-pointer mt-2 ${
                      isSuccess ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
                    } text-white font-medium py-2 px-8 rounded-md transition`}
                  >
                    OK
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default CareerPopupForm
