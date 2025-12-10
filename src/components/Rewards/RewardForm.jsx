


// "use client"

// import { useEffect, useState } from "react"
// import axios from "axios"
// import { User, Mail, Phone, Sparkles, AlertCircle } from "lucide-react"

// export default function RewardForm({ isOpen, onClose, onSubmit }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//   })

//   const [userIP, setUserIP] = useState("")
//   const [pageUrl, setPageUrl] = useState("")
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [showError, setShowError] = useState(false)

//   useEffect(() => {
//     const fetchIP = async () => {
//       try {
//         const response = await axios.get("https://api.ipify.org?format=json")
//         setUserIP(response.data.ip)
//       } catch (error) {
//         console.error("Failed to fetch IP address:", error)
//       }
//     }

//     fetchIP()

//     if (typeof window !== "undefined") {
//       setPageUrl(window.location.href)
//     }
//   }, [])

//   useEffect(() => {
//     const handleEsc = (e) => {
//       if (e.key === "Escape") onClose()
//     }
//     document.addEventListener("keydown", handleEsc)
//     return () => document.removeEventListener("keydown", handleEsc)
//   }, [onClose])

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     const { name, email, phone } = formData
//     if (!name || !email) return

//     setIsSubmitting(true)

//     const dataToSend = {
//       Name: name,
//       Email: email,
//       PhoneNumber: phone,
//       PageUrl: pageUrl,
//       IP_Address: userIP,
//     }

//     try {
//       const response = await axios.post(
//         "/api/main-form",
//         {
//           formData: dataToSend,
//           to: "registration@sevenmentor.com",
//           contactNo: "7798058777",
//           mailSubject: "New Reward Form Submission",
//            userEmailSubject: "Thank You for Playing the Reward Spin at SevenMentor"
//         },
//         { timeout: 10000 }
//       )

//       if (response.status === 200) {
//         onSubmit(formData)
//         setFormData({ name: "", email: "", phone: "" })
//       } else {
//         throw new Error("Non-200 status")
//       }
//     } catch (error) {
//       console.error("Form submission error:", error)
//       setShowError(true)
//       setTimeout(() => {
//         setShowError(false)
//         onClose() // ✅ close the form instead of redirect
//       }, 3000)
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
//       <div className="relative w-full max-w-[450px] bg-gradient-to-br from-black via-gray-900 to-orange-900 border-2 border-orange-500 shadow-2xl rounded-xl p-6">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-4 text-orange-400 hover:text-orange-300 text-2xl"
//         >
//           ×
//         </button>

//         {/* Header */}
//         <div className="flex items-center justify-center mb-4">
//           <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
//             <Sparkles size={32} className="text-black" />
//           </div>
//         </div>
//         <h2 className="text-3xl font-bold text-center text-orange-400 mb-2">🎁 Enter Your Details</h2>
//         <p className="text-center text-gray-300 text-lg">
//           Fill in your information to spin the wheel and win amazing rewards!
//         </p>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="space-y-6 mt-6">
//           <div className="space-y-3">
//             <label htmlFor="name" className="text-sm font-semibold text-orange-400 flex items-center gap-2">
//               <User size={16} />
//               Full Name *
//             </label>
//             <input
//               id="name"
//               name="name"
//               type="text"
//               placeholder="Enter your full name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full bg-gray-800 border border-orange-500 text-white placeholder-gray-400 focus:border-orange-400 focus:ring-orange-400 h-12 text-lg rounded px-4"
//             />
//           </div>

//           <div className="space-y-3">
//             <label htmlFor="email" className="text-sm font-semibold text-orange-400 flex items-center gap-2">
//               <Mail size={16} />
//               Email Address *
//             </label>
//             <input
//               id="email"
//               name="email"
//               type="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full bg-gray-800 border border-orange-500 text-white placeholder-gray-400 focus:border-orange-400 focus:ring-orange-400 h-12 text-lg rounded px-4"
//             />
//           </div>

//           <div className="space-y-3">
//             <label htmlFor="phone" className="text-sm font-semibold text-orange-400 flex items-center gap-2">
//               <Phone size={16} />
//               Phone Number
//             </label>
//             <input
//               id="phone"
//               name="phone"
//               type="tel"
//               placeholder="Enter your phone number"
//               value={formData.phone}
//               onChange={handleChange}
//               className="w-full bg-gray-800 border border-orange-500 text-white placeholder-gray-400 focus:border-orange-400 focus:ring-orange-400 h-12 text-lg rounded px-4"
//             />
//           </div>

//           <div className="flex gap-4 pt-6">
//             <button
//               type="button"
//               onClick={onClose}
//               className="flex-1 bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700 hover:text-white h-12 text-lg font-semibold rounded"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold h-12 text-lg shadow-lg transform transition-all duration-200 rounded ${
//                 isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
//               }`}
//             >
//               🎲 {isSubmitting ? "Submitting..." : "SPIN NOW!"}
//             </button>
//           </div>
//         </form>

//         {/* ✅ Toast Message */}
//         {showError && (
//           <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-3 rounded shadow-lg flex items-center gap-2">
//             <AlertCircle size={20} />
//             <span>Failed to submit the form</span>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }





"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import { User, Mail, Phone, Sparkles, AlertCircle } from "lucide-react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

export default function RewardForm({ isOpen, onClose, onSubmit }) {
  const [userIP, setUserIP] = useState("")
  const [pageUrl, setPageUrl] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showError, setShowError] = useState(false)

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

    if (typeof window !== "undefined") {
      setPageUrl(window.location.href)
    }
  }, [])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEsc)
    return () => document.removeEventListener("keydown", handleEsc)
  }, [onClose])

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  })

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-[450px] bg-gradient-to-br from-black via-gray-900 to-orange-900 border-2 border-orange-500 shadow-2xl rounded-xl p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-orange-400 hover:text-orange-300 text-2xl"
        >
          ×
        </button>

        {/* Header */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
            <Sparkles size={32} className="text-black" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center text-orange-400 mb-2">🎁 Enter Your Details</h2>
        <p className="text-center text-gray-300 text-lg">
          Fill in your information to spin the wheel and win amazing rewards!
        </p>

        {/* Formik Form */}
        <Formik
          initialValues={{ name: "", email: "", phone: "" }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            setIsSubmitting(true)
            const dataToSend = {
              Name: values.name,
              Email: values.email,
              Phone: values.phone,
              PageUrl: pageUrl,
              IP_Address: userIP,
            }

            try {
              const response = await axios.post(
                "/api/main-form",
                {
                  formData: dataToSend,
                  to: "registration@sevenmentor.com",
                  contactNo: "7798058777",
                  mailSubject: "New Reward Form Submission",
                },
                { timeout: 10000 }
              )

              if (response.status === 200) {
                onSubmit(values)
                resetForm()
              } else {
                throw new Error("Non-200 status")
              }
            } catch (error) {
              console.error("Form submission error:", error)
              setShowError(true)
              setTimeout(() => {
                setShowError(false)
                onClose()
              }, 3000)
            } finally {
              setIsSubmitting(false)
            }
          }}
        >
          {({ isValid }) => (
            <Form className="space-y-6 mt-6">
              <div className="space-y-3">
                <label htmlFor="name" className="text-sm font-semibold text-orange-400 flex items-center gap-2">
                  <User size={16} />
                  Full Name *
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-gray-800 border border-orange-500 text-white placeholder-gray-400 focus:border-orange-400 focus:ring-orange-400 h-12 text-lg rounded px-4"
                />
                <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="space-y-3">
                <label htmlFor="email" className="text-sm font-semibold text-orange-400 flex items-center gap-2">
                  <Mail size={16} />
                  Email Address *
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-800 border border-orange-500 text-white placeholder-gray-400 focus:border-orange-400 focus:ring-orange-400 h-12 text-lg rounded px-4"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="space-y-3">
                <label htmlFor="phone" className="text-sm font-semibold text-orange-400 flex items-center gap-2">
                  <Phone size={16} />
                  Phone Number
                </label>
                <Field
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full bg-gray-800 border border-orange-500 text-white placeholder-gray-400 focus:border-orange-400 focus:ring-orange-400 h-12 text-lg rounded px-4"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
              </div>

              <div className="flex gap-4 pt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 bg-gray-800 text-gray-300 border border-gray-600 hover:bg-gray-700 hover:text-white h-12 text-lg font-semibold rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  className={`flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold h-12 text-lg shadow-lg transform transition-all duration-200 rounded ${
                    isSubmitting || !isValid ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
                  }`}
                >
                  🎲 {isSubmitting ? "Submitting..." : "SPIN NOW!"}
                </button>
              </div>
            </Form>
          )}
        </Formik>

        {/* ✅ Toast Message */}
        {showError && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-4 py-3 rounded shadow-lg flex items-center gap-2">
            <AlertCircle size={20} />
            <span>Failed to submit the form</span>
          </div>
        )}
      </div>
    </div>
  )
}
