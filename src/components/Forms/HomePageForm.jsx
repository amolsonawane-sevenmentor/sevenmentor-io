"use client"
import { useState, useEffect } from "react"
import axios from "axios"
import { Formik, Form, Field } from "formik"
import * as Yup from "yup"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"

import { User, Mail, Phone, Pin, Map, ChevronDown, BookCopyIcon, X, CheckCircle } from "lucide-react"
import { useRouter } from "next/navigation"

export default function HomePageForm({
  mailId = "registration@sevenmentor.com",
  contactNo = "7798058777",
  bannerTitle = "Individual Course At SevenMentor",
}) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(2, "Name is too short").max(50, "Name is too long").required("Name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
      .required("Phone number is required"),
    city: Yup.string().required("City is required"),
    CourseName: Yup.string().required("Course name is required"),
    branch: Yup.string().required("Branch is required"),
  })

  const [isLoadingIP, setIsLoadingIP] = useState(true)
  const [showPopup, setShowPopup] = useState(false)
  const [popupMessage, setPopupMessage] = useState("")
  const [userIP, setUserIP] = useState("")
  const [pageUrl, setPageUrl] = useState("")
  const router = useRouter()

  const [fieldStates, setFieldStates] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    city: false,
    CourseName: false,
    branch: false,
  })

  const initialValues = {
    name: "",
    email: "",
    phoneNumber: "",
    city: "",
    CourseName: "",
    branch: "",
  }

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

  const resetFormCompletely = (resetForm) => {
    // Reset Formik form state
    resetForm()

    // Reset field states
    setFieldStates({
      name: false,
      email: false,
      phoneNumber: false,
      city: false,
      CourseName: false,
      branch: false,
    })
  }

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Ensure reCAPTCHA is ready
        const token = await window.grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          { action: "submit" }
        );

      // Simplified payload - NO country, NO country code, NO std code
      const formData = {
        Name: values.name,
        Email: values.email,
        PhoneNumber: values.phoneNumber, // Just the phone number, no country code
        City: values.city,
        CourseName: values.CourseName,
        Branch: values.branch,
        PageUrl: pageUrl,
        IP_Address: userIP, // Only IP address included
      }

      const response = await axios.post(
        "/api/main-form",
        {
          formData,
          token,
          to:
            formData.Branch.toLocaleLowerCase() === "classroom dadar, mumbai"
              ? "mumbaileads@sevenmentor.com"
              : "registration@sevenmentor.com",
          mailSubject: "New CallBack Request Received From Main Form",
          userEmailSubject: "Thank You for Requesting a Course Details",
          contactNo: "7798058777",
          bannerTitle: "Individual Course At SevenMentor",
        },
        {
          timeout: 10000,
        }
      )

      if (response.status === 200) {
        // Use the complete reset function
        router.push("/thank-you")
        resetFormCompletely(resetForm)
      } else {
        throw new Error("Failed to submit the form")
      }
    } catch (error) {
      console.error("Error submitting the form:", error)
      if (error.code === "ECONNABORTED") {
        setPopupMessage("Request timed out. Please try again.")
      } else {
        setPopupMessage("An error occurred while submitting the form. Please try again.")
      }
      setShowPopup(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="p-4 flex items-center justify-center">
      <div className="w-full max-w-md text-center">
        <h2 className="text-orange-500 text-center font-semibold mb-6 text-2xl md:text-4xl">Request Call Back</h2>

        <div
          className="rounded-xl p-6 backdrop-blur-md bg-[#0F0A07]/90 shadow-lg"
          style={{
            boxShadow: "0 0 100px 20px rgba(255, 165, 0, 0.2)",
          }}
        >
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
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
                      aria-label="name"
                      label="Name"
                      name="name"
                      className="w-full bg-zinc-900/90 border border-orange-500/40 rounded-full py-3 px-4 text-white placeholder-transparent focus:outline-none focus:border-orange-500"
                      onFocus={() => handleFocus("name")}
                      onBlur={(e) => handleBlur("name", e.target.value)}
                      value={values.name}
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
                      aria-label="email"
                      label="Email"
                      name="email"
                      type="email"
                      className="w-full bg-zinc-900/90 border border-orange-500/40 rounded-full py-3 px-4 text-white placeholder-transparent focus:outline-none focus:border-orange-500"
                      onFocus={() => handleFocus("email")}
                      onBlur={(e) => handleBlur("email", e.target.value)}
                      value={values.email}
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
                  <div className="flex w-full bg-zinc-900/90 border border-orange-500/40 !rounded-full">
                    <div className="relative w-full overflow-hidden rounded-full">
                      <Field
                        aria-label="phone"
                        label="Phone"
                        name="phoneNumber"
                        className="w-full bg-transparent text-white focus:outline-none px-4 py-3"
                        onFocus={() => handleFocus("phoneNumber")}
                        onBlur={(e) => handleBlur("phoneNumber", e.target.value)}
                        value={values.phoneNumber}
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
                      aria-label="city"
                      label="City"
                      name="city"
                      className="w-full bg-zinc-900/90 border border-orange-500/40 rounded-full py-3 px-4 text-white focus:outline-none focus:border-orange-500"
                      onFocus={() => handleFocus("city")}
                      onBlur={(e) => handleBlur("city", e.target.value)}
                      value={values.city}
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

                {/* Course Field */}
                <div className="relative pl-[40px]">
                  <BookCopyIcon className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 text-orange-500" />
                  <div className="relative">
                    <Field
                      aria-label="course name"
                      label="Course Name"
                      name="CourseName"
                      className="w-full bg-zinc-900/90 border border-orange-500/40 rounded-full py-3 px-4 text-white focus:outline-none focus:border-orange-500"
                      onFocus={() => handleFocus("CourseName")}
                      onBlur={(e) => handleBlur("CourseName", e.target.value)}
                      value={values.CourseName}
                    />
                    {!fieldStates.CourseName && !values.CourseName && (
                      <TypeAnimation
                        sequence={["ENTER COURSE", 1000, ""]}
                        wrapper="span"
                        speed={20}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        repeat={Number.POSITIVE_INFINITY}
                      />
                    )}
                  </div>
                  {errors.CourseName && touched.CourseName && (
                    <div className="text-red-500 text-sm mt-1">{errors.CourseName}</div>
                  )}
                </div>

                {/* Choose Branch Dropdown */}
                <div className="relative pl-[40px]">
                  <Map className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 text-orange-500" />
                  <div className="relative">
                    <Field
                      aria-label="branch"
                      label="Choose Branch"
                      as="select"
                      name="branch"
                      className="w-full bg-zinc-900/90 border border-orange-500/40 rounded-full py-3 px-4 text-white focus:outline-none focus:border-orange-500 appearance-none"
                      onFocus={() => handleFocus("branch")}
                      onBlur={(e) => handleBlur("branch", e.target.value)}
                      value={values.branch}
                    >
                      <option className="text-lg" value="" disabled></option>

                      <option className="text-lg" value="Classroom Shivaji Nagar, pune">
                        Classroom Shivaji Nagar, Pune
                      </option>
                      <option className="text-lg" value="Classroom Dadar, Mumbai">
                        Classroom Dadar, Mumbai
                      </option>
                      <option className="text-lg" value="Classroom Deccan, pune">
                        Classroom Deccan, Pune
                      </option>
                      <option className="text-lg" value="Classroom Chinchwad, Pune">
                        Classroom Chinchwad, Pune
                      </option>
                      <option className="text-lg" value="Classroom Hadapsar, Pune">
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
                  {errors.branch && touched.branch && <div className="text-red-500 text-sm mt-1">{errors.branch}</div>}
                </div>

                {/* Submit Button */}
                <div className="lg:pl-[20px] pl-[33px]">
                  <button
                    id="HomePageFormBottom"
                    aria-label="Submit"
                    type="submit"
                    className="relative w-full lg:w-[250px] bg-gradient-to-r from-orange-700 to-orange-500 text-white font-bold py-3 px-4 rounded-full overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
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
                      className="absolute top-0 left-0 w-[44px] h-[48px] shimmer-effect"
                      style={{
                        objectFit: "cover",
                        height: "100%",
                      }}
                    />
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center relative">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div
                className={`w-12 h-12 ${
                  popupMessage.includes("received") ? "bg-green-100" : "bg-red-100"
                } rounded-full flex items-center justify-center`}
              >
                {popupMessage.includes("received") ? (
                  <CheckCircle className="h-8 w-8 text-green-600" />
                ) : (
                  <X className="h-8 w-8 text-red-600" />
                )}
              </div>
              <h3
                className={`text-2xl font-bold ${
                  popupMessage.includes("received") ? "text-gray-800" : "text-red-600"
                }`}
              >
                {popupMessage.includes("received") ? "Successful!" : "Failed!"}
              </h3>
              <p className={`text-center ${popupMessage.includes("received") ? "text-gray-600" : "text-red-500"}`}>
                {popupMessage.includes("received")
                  ? "The form has been submitted successfully. Our team will get back to you shortly!"
                  : popupMessage}
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className={`mt-2 ${
                  popupMessage.includes("received") ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
                } text-white font-medium py-2 px-8 rounded-md transition`}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
