"use client"

import { useState, useEffect } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import axios from "axios"
import { User, Mail, Phone, FileText } from 'lucide-react'
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

const CareerForm = ({ jobTitle }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionMessage, setSubmissionMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  const [userIP, setUserIP] = useState("")

  // Fetch User's IP Address
  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json")
        setUserIP(response.data.ip)
      } catch (error) {
        console.error("Error fetching IP:", error)
      }
    }
    fetchIP()
  }, [])

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required").min(2, "Full name must be at least 2 characters"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^[0-9]+$/, "Phone number must be numeric")
      .min(10, "Phone number must be at least 10 digits")
      .max(13, "Phone number cannot exceed 13 digits"),
    coverLetter: Yup.string()
      .required("Cover letter is required")
      .min(10, "Cover letter must be at least 10 characters"),
    resume: Yup.mixed()
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
          ].includes(value.type),
      ),
  })

  const to = "careers@sevenmentor.com"

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      coverLetter: "",
      resume: null,
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        const formData = new FormData()
        // Ensure reCAPTCHA is ready
        const token = await window.grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          { action: "submit" }
        );

        const jsonFormData = {
          Name: values.fullName,
          Email: values.email,
          Phone: values.phone,
          CoverLetter: values.coverLetter,
          JobTitle: jobTitle,
          PageUrl: window.location.href,
          IP_Address: userIP,
        }

        formData.append("formData", JSON.stringify(jsonFormData))
        formData.append("file", values.resume)
        formData.append("to", to)
        formData.append("token", token)

        const response = await axios.post("/api/career-form", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          timeout: 10000,
        })

        setSubmissionMessage("Thank you! Your application was received, and we will get back to you shortly.")
        setIsSubmitted(true)
        setIsSuccess(true)

        resetForm()
      } catch (error) {
        console.error("Error submitting form:", error)
        setSubmissionMessage("Oops! Something went wrong. Please try submitting again.")
        setIsSubmitted(true)
        setIsSuccess(false)
      } finally {
        setSubmitting(false)
      }
    },
  })

  return (
    <div className="w-full max-w-md">
      <div
        className="p-6 backdrop-blur-md bg-[#0F0A07]/90 rounded-xl shadow-lg"
        style={{
          boxShadow: "0 0 100px 20px rgba(255, 165, 0, 0.2)",
        }}
      >
        <h3 className="text-2xl font-bold mb-6 text-center text-orange-500">Apply for this Position</h3>

        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
             {/* Full Name Field */}
             <div className="flex flex-col">
             <div className="relative">
               <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-orange-500"  />
               <input
                 type="text"
                 name="fullName"
                 aria-label="fullName"
                 placeholder="Enter Full Name"
                className="w-full bg-zinc-800 border border-orange-500/40 rounded-lg py-2 pl-10 pr-3 text-white focus:outline-none focus:border-orange-500"
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.fullName}
               />
               {formik.touched.fullName && formik.errors.fullName && (
                 <div className="text-red-700 mt-1">{formik.errors.fullName}</div>
               )}
             </div>
 
            </div>
             {/* Email Field */}
             <div className="flex flex-col">
             <div className="relative">
               <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-orange-500"  />
               <input
                 type="email"
                 name="email"
                 aria-label="Email"
                 placeholder="Enter Your Email"
                className="w-full bg-zinc-800 border border-orange-500/40 rounded-lg py-2 pl-10 pr-3 text-white focus:outline-none focus:border-orange-500"
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.email}
               />
               {formik.touched.email && formik.errors.email && (
                 <div className="text-red-700 mt-1">{formik.errors.email}</div>
               )}
             </div>
           </div>
           </div>

          {/* Phone Field */}
          <div className="mb-4 relative">
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-orange-500" />
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                className="w-full bg-zinc-800 border border-orange-500/40 rounded-lg py-2 pl-10 pr-3 text-white focus:outline-none focus:border-orange-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
            </div>
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.phone}</div>
            )}
          </div>

          {/* Cover Letter Field */}
          <div className="mb-1">
            <textarea
              name="coverLetter"
              placeholder="Write your cover letter"
              className="w-full bg-zinc-800 border border-orange-500/40 rounded-lg py-2 px-3 text-white focus:outline-none focus:border-orange-500 resize-none"
              rows="4"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.coverLetter}
            ></textarea>
            {formik.touched.coverLetter && formik.errors.coverLetter && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.coverLetter}</div>
            )}
          </div>

          {/* Resume Upload Field */}
          <div className="mb-6 relative">
            <label className="block text-orange-500 mb-1">Resume</label>
            <div className="relative">
              <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-orange-500" />
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                className="w-full bg-zinc-800 border border-orange-500/40 rounded-lg py-2 pl-10 pr-3 text-white focus:outline-none focus:border-orange-500"
                onChange={(event) => {
                  formik.setFieldValue("resume", event.currentTarget.files[0])
                }}
                onBlur={formik.handleBlur}
              />
            </div>
            {formik.touched.resume && formik.errors.resume && (
              <div className="text-red-500 text-sm mt-1">{formik.errors.resume}</div>
            )}
            <p className="text-sm text-gray-400 mt-1">Allowed: PDF, DOC, DOCX (Max: 5MB)</p>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="cursor-pointer relative w-full lg:w-[280px] bg-gradient-to-r from-orange-700 to-orange-500 text-white font-bold py-3 px-6 rounded-full overflow-hidden disabled:opacity-50"
            >
              <span className="relative z-10">{formik.isSubmitting ? "Submitting..." : "Submit Application"}</span>
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
      </div>

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
                  <div
                    className={`h-8 w-8 flex items-center justify-center ${
                      isSuccess ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {isSuccess ? "✓" : "✗"}
                  </div>
                </div>
                <h3 className={`text-2xl font-bold ${isSuccess ? "text-gray-800" : "text-red-600"}`}>
                  {isSuccess ? "Successful!" : "Failed!"}
                </h3>
                <p className={`text-center ${isSuccess ? "text-gray-600" : "text-red-500"}`}>{submissionMessage}</p>
                <button
                  onClick={() => setIsSubmitted(false)}
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
  )
}

export default CareerForm
