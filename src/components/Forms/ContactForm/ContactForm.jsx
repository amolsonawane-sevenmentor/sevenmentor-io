"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { TypeAnimation } from "react-type-animation"
import { User, Mail, Phone, Pin, Map, ChevronDown, BookCopyIcon } from "lucide-react"
import "../../Home/HomeBanner/HomeBanner.css"

import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useRouter } from "next/navigation"

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  city: "",
  query: "",
  courseName: "",
  branch: "",
}

export default function ContactForm() {
  const callbackSchema = Yup.object().shape({
    name: Yup.string().min(2, "Name is too short").max(50, "Name is too long").required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    city: Yup.string().required("City is required"),
    query: Yup.string().required("Query is required"),
    courseName: Yup.string().required("Course Name is required"),
    branch: Yup.string().required("Branch is required"),
  })

  const [fieldStates, setFieldStates] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    city: false,
    courseName: false,
    query: false,
    branch: false,
  })

  const [showPopup, setShowPopup] = useState(false)
  const [popupMessage, setPopupMessage] = useState("")
  const [isLoadingIP, setIsLoadingIP] = useState(true)
  const [userIP, setUserIP] = useState("")
  const [pageUrl, setPageUrl] = useState("")
  const router = useRouter()

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

  const handleFocus = (field) => {
    setFieldStates((prev) => ({ ...prev, [field]: true }))
  }

  const handleBlur = (field, value) => {
    if (value === null || (typeof value === "string" && value.trim() === "")) {
      setFieldStates((prev) => ({ ...prev, [field]: false }))
    }
  }

  // backend integration
  const mailId = "support@sevenmentor.com"

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Ensure reCAPTCHA is ready
        const token = await window.grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          { action: "submit" }
        );

      // Simplified payload - NO country, NO country code, NO std code
      const response = await axios.post("/api/main-form", {
        formData: {
          Name: values.name,
          Email: values.email,
          PhoneNumber: values.phoneNumber, // Just the phone number, no country code
          City: values.city,
          Query: values.query,
          CourseName: values.courseName,
          Branch: values.branch,
          PageUrl: pageUrl,
          IP_Address: userIP, // Only IP address included
        },
        to:
          values.branch?.toLocaleLowerCase() === "classroom dadar, mumbai"
            ? "mumbaileads@sevenmentor.com"
            : mailId,
        token,    
        mailSubject: "New Form Submission Received From Contact Form",
        userEmailSubject: "Thanks for Contacting SevenMentor",
        contactNo: "7798058777",
      })

      if (response.status === 200) {
        router.push("/thank-you")
        resetForm()
        setFieldStates({
          name: false,
          email: false,
          phoneNumber: false,
          city: false,
          query: false,
          courseName: false,
          branch: false,
        })
      } else {
        setPopupMessage("Failed to submit the form. Please try again.")
        setShowPopup(true)
      }
    } catch (error) {
      console.error("Error submitting the form:", error)
      setPopupMessage("An error occurred while submitting the form. Please try again.")

      setShowPopup(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="p-4 flex items-center justify-center">
      <div className="w-full max-w-md text-center">
        <h3 className="text-orange-500 text-center font-semibold mb-6 text-2xl md:text-4xl">Request Call Back</h3>
        <div
          className="rounded-xl p-6 backdrop-blur-md bg-[#0F0A07]/90 shadow-lg"
          style={{
            boxShadow: "0 0 100px 20px rgba(255, 165, 0, 0.2)",
          }}
        >
          <Formik initialValues={initialValues} validationSchema={callbackSchema} onSubmit={handleSubmit}>
            {({ errors, touched, values, setFieldValue, isSubmitting }) => (
              <Form className="space-y-4">
                {/* Loading indicator while detecting IP */}
                {isLoadingIP && (
                  <div className="text-center text-sm text-white mb-3">Loading...</div>
                )}

                {/* Name Field */}
                <div className="relative pl-[40px]">
                  <User className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 text-orange-500" />
                  <div className="relative">
                    <Field
                      name="name"
                      aria-label="Name"
                      className="w-full bg-zinc-900/90 border border-orange-500/40 rounded-full py-3 px-4 text-white placeholder-transparent focus:outline-none focus:border-orange-500"
                      onFocus={() => handleFocus("name")}
                      onBlur={(e) => handleBlur("name", e.target.value)}
                    />
                    {!fieldStates.name && !values.name && (
                      <TypeAnimation
                        sequence={["YOUR NAME", 1000, ""]}
                        wrapper="span"
                        speed={20}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        repeat={Number.POSITIVE_INFINITY}
                      />
                    )}
                  </div>
                  {errors.name && touched.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                </div>

                {/* Email Field */}
                <div className="relative pl-[40px]">
                  <Mail className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 text-orange-500" />
                  <div className="relative">
                    <Field
                      name="email"
                      aria-label="Email"
                      type="email"
                      className="w-full bg-zinc-900/90 border border-orange-500/40 rounded-full py-3 px-4 text-white placeholder-transparent focus:outline-none focus:border-orange-500"
                      onFocus={() => handleFocus("email")}
                      onBlur={(e) => handleBlur("email", e.target.value)}
                    />
                    {!fieldStates.email && !values.email && (
                      <TypeAnimation
                        sequence={["YOUR EMAIL", 1000, ""]}
                        wrapper="span"
                        speed={20}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        repeat={Number.POSITIVE_INFINITY}
                      />
                    )}
                  </div>
                  {errors.email && touched.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                </div>

                {/* Phone Field - NO COUNTRY CODE */}
                <div className="relative pl-[40px]">
                  <Phone className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 text-orange-500" />
                  <div className="flex w-full bg-zinc-900/90 border border-orange-500/40 !rounded-full ">
                    <div className="relative w-full overflow-hidden rounded-full">
                      <Field
                        name="phoneNumber"
                        aria-label="PhoneNumber"
                        className="w-full bg-transparent text-white focus:outline-none px-4 py-3"
                        onFocus={() => handleFocus("phoneNumber")}
                        onBlur={(e) => handleBlur("phoneNumber", e.target.value)}
                        maxLength={10}
                      />
                      {!fieldStates.phoneNumber && !values.phoneNumber && (
                        <TypeAnimation
                          sequence={["PHONE NUMBER", 1000, ""]}
                          wrapper="span"
                          speed={20}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                          repeat={Number.POSITIVE_INFINITY}
                        />
                      )}
                    </div>
                  </div>
                  {errors.phoneNumber && touched.phoneNumber && (
                    <div className="text-red-500 text-sm mt-1">{errors.phoneNumber}</div>
                  )}
                </div>

                {/* City Field */}
                <div className="relative pl-[40px]">
                  <Pin className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 text-orange-500" />
                  <div className="relative">
                    <Field
                      name="city"
                      aria-label="City"
                      className="w-full bg-zinc-900/90 border border-orange-500/40 rounded-full py-3 px-4 text-white focus:outline-none focus:border-orange-500"
                      onFocus={() => handleFocus("city")}
                      onBlur={(e) => handleBlur("city", e.target.value)}
                    />
                    {!fieldStates.city && !values.city && (
                      <TypeAnimation
                        sequence={["ENTER CITY", 1000, ""]}
                        wrapper="span"
                        speed={20}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        repeat={Number.POSITIVE_INFINITY}
                      />
                    )}
                  </div>
                  {errors.city && touched.city && <div className="text-red-500 text-sm mt-1">{errors.city}</div>}
                </div>

                {/* Course Name Field */}
                <div className="relative pl-[40px]">
                  <BookCopyIcon className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 text-orange-500" />
                  <div className="relative">
                    <Field
                      name="courseName"
                      aria-label="Course Name"
                      className="w-full bg-zinc-900/90 border border-orange-500/40 rounded-full py-3 px-4 text-white focus:outline-none focus:border-orange-500"
                      onFocus={() => handleFocus("courseName")}
                      onBlur={(e) => handleBlur("courseName", e.target.value)}
                    />
                    {!fieldStates.courseName && !values.courseName && (
                      <TypeAnimation
                        sequence={["ENTER COURSE NAME", 1000, ""]}
                        wrapper="span"
                        speed={20}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        repeat={Number.POSITIVE_INFINITY}
                      />
                    )}
                  </div>
                  {errors.courseName && touched.courseName && (
                    <div className="text-red-500 text-sm mt-1">{errors.courseName}</div>
                  )}
                </div>

                {/* Query Field */}
                <div className="relative pl-[40px]">
                  <User className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 text-orange-500" />
                  <div className="relative">
                    <Field
                      as="textarea"
                      aria-label="Query"
                      name="query"
                      className="w-full bg-zinc-900/90 border border-orange-500/40 rounded-xl py-3 px-4 text-white placeholder-transparent focus:outline-none focus:border-orange-500 resize-none"
                      onFocus={() => handleFocus("query")}
                      onBlur={(e) => handleBlur("query", e.target.value)}
                    />
                    {!fieldStates.query && !values.query && (
                      <TypeAnimation
                        sequence={["ENTER YOUR QUERY", 1000, ""]}
                        wrapper="span"
                        speed={20}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        repeat={Number.POSITIVE_INFINITY}
                      />
                    )}
                  </div>
                  {errors.query && touched.query && <div className="text-red-500 text-sm mt-1">{errors.query}</div>}
                </div>

                {/* Choose Branch Dropdown */}
                <div className="relative pl-[40px]">
                  <Map className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 text-orange-500" />
                  <div className="relative">
                    <Field
                      as="select"
                      name="branch"
                      aria-label="Branch"
                      className="w-full bg-zinc-900/90 border border-orange-500/40 rounded-full py-3 px-4 text-white focus:outline-none focus:border-orange-500 appearance-none "
                      onFocus={() => handleFocus("branch")}
                      onBlur={(e) => handleBlur("branch", e.target.value)}
                    >
                      <option className="text-lg" value="" disabled></option>

                      <option className="text-lg" value="Classroom Shivaji Nagar. pune">
                        Classroom Shivaji Nagar, Pune
                      </option>
                      <option className="text-lg" value="Classroom Dadar, Mumbai">
                        Classroom Dadar, Mumbai
                      </option>
                      <option className="text-lg" value="Classroom Deccan. pune">
                        Classroom Deccan, Pune
                      </option>
                      <option className="text-lg" value="Classroom Chinchwad. Pune">
                        Classroom Chinchwad, Pune
                      </option>
                      <option className="text-lg" value="Classroom Hadapsar. Pune">
                        Classroom Hadapsar, Pune
                      </option>

                      <option className="text-lg" value="Classroom Akurdi, Pune">
                        Classroom Akurdi, Pune
                      </option>

                      <option className="text-lg" value="Classroom Anandnagar, Nanded">
                        Classroom Anandnagar, Nanded
                      </option>

                      <option className="text-lg" value="Classroom Nagpur">
                        Classroom Nagpur
                      </option>

                      <option className="text-lg" value="Online Training">
                        Online Training
                      </option>
                    </Field>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-orange-500 pointer-events-none" />
                    {!fieldStates.branch && !values.branch && (
                      <TypeAnimation
                        sequence={["SELECT BRANCH", 1000, ""]}
                        wrapper="span"
                        speed={20}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        repeat={Number.POSITIVE_INFINITY}
                      />
                    )}
                  </div>
                  {errors.branch && touched.branch && (
                    <div className="text-red-500 text-sm mt-1">{errors.branch}</div>
                  )}
                </div>

                {/* Submit Button */}
                <div className="lg:pl-[20px] pl-[33px]">
                  <button
                    type="submit"
                    aria-label="Submit"
                    className="relative w-full lg:w-[250px] bg-gradient-to-r from-orange-700 to-orange-500 text-white font-bold py-3 px-4 rounded-full overflow-hidden cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting || isLoadingIP}
                  >
                    <span className="relative z-10">
                      {isSubmitting ? "Submitting..." : isLoadingIP ? "Loading..." : "Submit"}
                    </span>

                    <Image
                      src="/assets/shimmer.webp"
                      alt="shimmer animation"
                      width={44}
                      height={48}
                      className="absolute top-0 left-0 shimmer-effect"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <AnimatePresence>
        {showPopup && (
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
                    popupMessage.includes("success") ? "bg-green-100" : "bg-red-100"
                  } rounded-full flex items-center justify-center`}
                >
                  <div
                    className={`h-8 w-8 flex items-center justify-center ${
                      popupMessage.includes("success") ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {popupMessage.includes("success") ? "✓" : "✗"}
                  </div>
                </div>
                <h3
                  className={`text-2xl font-bold ${
                    popupMessage.includes("success") ? "text-gray-800" : "text-red-600"
                  }`}
                >
                  {popupMessage.includes("success") ? "Successful!" : "Failed!"}
                </h3>
                <p className={`text-center ${popupMessage.includes("success") ? "text-gray-600" : "text-red-500"}`}>
                  {popupMessage}
                </p>
                <button
                  onClick={() => setShowPopup(false)}
                  className={` mt-2 ${
                    popupMessage.includes("success") ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
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
