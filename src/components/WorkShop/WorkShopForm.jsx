"use client"
import { useState, useEffect, useRef } from "react"
import axios from "axios"
import { Formik, Form, Field, useFormikContext } from "formik"
import * as Yup from "yup"
import { TypeAnimation } from "react-type-animation"
import { User, Phone, X, Mail, CheckCircle, AlertCircle, MessageCircle } from "lucide-react"
import shimmer from "../../assets/shimmer.webp"
import "../Home/HomeBanner/HomeBanner.css"
import Image from "next/image"
const INDIA_DATA = {
  id: 101,
  name: "India",
  phonecode: "91",
  sortname: "IN",
  emoji: "🇮🇳",
}

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  query: "",
}

const callbackSchema = Yup.object().shape({
  name: Yup.string().min(2, "Name is too short").max(50, "Name is too long").required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  query: Yup.string().min(5, "Query is too short").max(500, "Query is too long").required("Query is required"),
})

const FormInitializer = () => {
  const { setFieldValue } = useFormikContext()
  useEffect(() => {
    setFieldValue("country", INDIA_DATA)
  }, [setFieldValue])
  return null
}

export default function WorkShopForm(email) {
  const [fieldStates, setFieldStates] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    query: false,
  })
  const [showPopup, setShowPopup] = useState(false)
  const [popupMessage, setPopupMessage] = useState("")
  const [isSuccess, setIsSuccess] = useState(false)
  const [formKey, setFormKey] = useState(0)
  const formikRef = useRef(null)
  const [userIP, setUserIP] = useState("")
  const [pageUrl, setPageUrl] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href)
    }
  },[])

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json")
        setUserIP(response.data.ip)
      } catch (error) {
        console.error("Failed to fetch IP address:", error)
      }
    }
    fetchIP()
  }, [])

  useEffect(() => {
    let timer
    if (showPopup) {
      timer = setTimeout(() => {
        setShowPopup(false)
      }, 3000)
    }
    return () => clearTimeout(timer)
  }, [showPopup])

  const handleFocus = (field) => setFieldStates((prev) => ({ ...prev, [field]: true }))
  const handleBlur = (field, value) => {
    if (!value.trim()) setFieldStates((prev) => ({ ...prev, [field]: false }))
  }

  const mailId = email.email

  const resetFormCompletely = (resetForm) => {
    resetForm({ values: { ...initialValues, country: INDIA_DATA } })
    setFieldStates({ name: false, email: false, phoneNumber: false, query: false })
    setFormKey((prev) => prev + 1)
  }

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const formData = {
        Name: values.name,
        Email: values.email,
        PhoneNumber: `+${values.country?.phonecode} ${values.phoneNumber}`,
        Query: values.query,
        PageUrl: pageUrl,
        IP_Address: userIP,
      }

      const response = await axios.post(
        "/api/main-form",
        {
          formData, to: mailId,
          mailSubject: "New Query Form Submission",
          userEmailSubject: "Thank You for Your Query"
        },
        { timeout: 10000 },
      )

      if (response.status === 200) {
        setIsSuccess(true)
        setPopupMessage("Form submitted successfully!")
        setShowPopup(true)
        resetFormCompletely(resetForm)
      } else {
        throw new Error("Failed to submit the form")
      }
    } catch (error) {
      setIsSuccess(false)
      setPopupMessage(
        error.code === "ECONNABORTED" ? "Request timed out. Please try again." : "An error occurred. Please try again.",
      )
      setShowPopup(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="p-4 pb-0 flex items-center justify-center rounded-xl">
      <div className="w-full max-w-md text-center">
        <h3 className="text-white font-bold mb-3 text-2xl md:text-3xl">
          <span className="animated-text-fill !text-3xl !tracking-tight">  Book Your Slot</span>
        </h3>

        <div className="rounded-xl p-6 backdrop-blur-md">
          <Formik
            innerRef={formikRef}
            key={formKey}
            initialValues={initialValues}
            validationSchema={callbackSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {({ errors, touched, values, isSubmitting }) => (
              <Form className="space-y-4">
                <FormInitializer />
                {/* Name Field */}
                <div className="relative pl-[40px]">
                  <User className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 text-orange-500" />
                  <div className="relative">
                    <Field
                      name="name"
                      aria-label="Name"
                      className="w-full border border-orange-500/40 rounded-full py-2 px-4 text-black placeholder-black focus:outline-none focus:border-orange-500"
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
                      className="w-full border border-orange-500/40 rounded-full py-2 px-4 text-black placeholder-black focus:outline-none focus:border-orange-500"
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

                {/* Phone Field */}
                <div className="relative pl-[40px]">
                  <Phone className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 text-orange-500" />
                  <div className="relative w-full overflow-hidden rounded-full">
                    <Field
                      name="phoneNumber"
                      aria-label="Phone Number"
                      className="w-full text-black focus:outline-none px-4 py-2 bg-white border border-orange-500/40 rounded-full"
                      onFocus={() => handleFocus("phoneNumber")}
                      onBlur={(e) => handleBlur("phoneNumber", e.target.value)}
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
                  {errors.phoneNumber && touched.phoneNumber && (
                    <div className="text-red-500 text-sm mt-1">{errors.phoneNumber}</div>
                  )}
                </div>

                {/* Query Field */}
                <div className="relative pl-[40px]">
                  <MessageCircle className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-8 text-orange-500" />
                  <div className="relative">
                    <Field
                      as="textarea"
                      name="query"
                      aria-label="Query"
                      rows={3}
                      className="w-full border border-orange-500/40 rounded-2xl py-2 px-4 text-black placeholder-black focus:outline-none focus:border-orange-500 resize-none"
                      onFocus={() => handleFocus("query")}
                      onBlur={(e) => handleBlur("query", e.target.value)}
                    />
                    {!fieldStates.query && !values.query && (
                      <TypeAnimation
                        sequence={["YOUR QUERY", 1000, ""]}
                        wrapper="span"
                        speed={20}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        repeat={Number.POSITIVE_INFINITY}
                      />
                    )}
                  </div>
                  {errors.query && touched.query && (
                    <div className="text-red-500 text-sm mt-1">{errors.query}</div>
                  )}
                </div>

                <div className="lg:pl-[20px] pl-[33px]">
                  <button
                    type="submit"
                    className="relative w-full mt-2 lg:w-[250px] bg-gradient-to-r from-orange-700 to-orange-500 text-white font-bold py-3 px-4 rounded-full overflow-hidden"
                    disabled={isSubmitting}
                  >
                    <span className="relative z-10">{isSubmitting ? "Submitting..." : "Submit"}</span>
                    <Image
                      src={shimmer || "/placeholder.svg"}
                      alt="shimmer animation"
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

      {/* Enhanced Attractive Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[999999] bg-black/40 backdrop-blur-sm"
        >
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-80 h-80 flex flex-col items-center justify-center text-center relative">
            <div
              className={`w-14 h-14 ${isSuccess ? "bg-green-100" : "bg-red-100"} rounded-full flex items-center justify-center`}
            >
              <div className={`h-10 w-10 flex items-center justify-center ${isSuccess ? "text-green-600" : "text-red-600"}`}>
                {isSuccess ? (
                  <CheckCircle className="h-10 w-10 text-green-600" />
                ) : (
                  <AlertCircle className="h-10 w-10 text-red-600" />
                )}
              </div>
            </div>

            <h3 className={`text-2xl font-bold ${isSuccess ? "text-gray-800" : "text-red-600"} mt-3`}>
              {isSuccess ? "Success!" : "Notification"}
            </h3>
            <p className={`text-center ${isSuccess ? "text-gray-600" : "text-red-500"} px-6 mt-2`}>
              {popupMessage}
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className={`mt-4 ${isSuccess ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"} 
            text-white font-medium py-2 px-8 rounded-md transition`}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
