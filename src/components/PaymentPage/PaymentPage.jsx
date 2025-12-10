

"use client"
import { useEffect, useState } from "react"
import { PaymentOptions } from "./Components/PaymentOptions"
import { IMPSForm } from "./Components/IMPSForm"
import { InstaMojo } from "./Components/InstaMojo"
import { GPayDetails } from "./Components/GPayDetails"
import { PhonePayDetails } from "./Components/PhonePayDetails"
import { UserPaymentDetailsForm } from "./Components/UserPaymentDetailsForm"
import { VerifyPaymentDetails } from "./Components/VerifyPaymentDetails"
import { User, CheckCircle, CreditCard, X, RefreshCw, ArrowLeft } from "lucide-react"
import StickyButton from "../StickyButton/StickyButton"
import axios from "axios"



// Confirmation Popup Component
const ConfirmationPopup = ({ onConfirm, onClose, captcha, generateCaptcha }) => {
  const [captchaInput, setCaptchaInput] = useState('')
  const [captchaError, setCaptchaError] = useState('')


  const handleConfirm = () => {
    if (!captchaInput || captchaInput !== captcha) {
      setCaptchaError('Captcha does not match')
      return
    }
    setCaptchaError('')
    onConfirm()
  }

  // Prevent copy/paste/cut/drag operations on captcha
  const preventCopyPaste = (e) => {
    e.preventDefault()
    return false
  }


  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl border border-orange-500/30 max-w-md w-full p-6 transform transition-all animate-fadeIn">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-orange-400">Payment Confirmation</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="mb-8 text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-orange-500/20 flex items-center justify-center">
            <CreditCard className="w-10 h-10 text-orange-400" />
          </div>
          <p className="text-xl font-medium text-white mb-2">Have you done with payment?</p>
          <p className="text-gray-400 text-sm">Please confirm that you&apos;ve completed your payment process.</p>
        </div>
        
        {/* Captcha Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-white mb-2">Captcha Verification</label>
          <div className="flex items-center mb-3">
            <div
              className="bg-gray-700 border border-gray-600 rounded-lg p-3 text-center text-white font-bold text-lg captcha-container"
              style={{ 
                letterSpacing: '0.3em', 
                fontFamily: 'monospace', 
                minWidth: '120px',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none',
                WebkitTouchCallout: 'none',
                WebkitUserDrag: 'none',
                KhtmlUserDrag: 'none',
                MozUserDrag: 'none',
                OUserDrag: 'none',
                userDrag: 'none'
              }}
              onCopy={preventCopyPaste}
              onCut={preventCopyPaste}
              onPaste={preventCopyPaste}
              onDrag={preventCopyPaste}
              onDragStart={preventCopyPaste}
              onSelect={preventCopyPaste}
              onSelectStart={preventCopyPaste}
              onContextMenu={preventCopyPaste}
            >
              {captcha}
            </div>
            <button
              onClick={generateCaptcha}
              className="ml-3 p-2 text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-700"
            >
              <RefreshCw className="w-5 h-5" />
            </button>
          </div>
          <input
            type="text"
            placeholder="Enter captcha"
            value={captchaInput}
            onChange={(e) => setCaptchaInput(e.target.value)}
            onPaste={preventCopyPaste}
            className={`w-full px-3 py-2 bg-gray-800 border ${captchaError ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500`}
          />
          {captchaError && (
            <p className="text-red-400 text-sm mt-1">{captchaError}</p>
          )}
        </div>


        <div className="flex justify-center">
          <button
            onClick={handleConfirm}
            className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-orange-600/30 transition-all transform hover:scale-105"
          >
            Yes, I&apos;ve Completed Payment
          </button>
        </div>
      </div>
    </div>
  )
}



// Notification Popup Component
const NotificationPopup = ({ type, message, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div
        className={`bg-gradient-to-br ${
          type === "success"
            ? "from-gray-900 to-gray-800 border-green-500/30"
            : "from-gray-900 to-gray-800 border-red-500/30"
        } rounded-2xl shadow-2xl border max-w-md w-full p-6 transform transition-all animate-fadeIn`}
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className={`text-2xl font-bold ${type === "success" ? "text-green-400" : "text-red-400"}`}>
            {type === "success" ? "Payment Successful" : "Payment Failed"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors p-1 rounded-full hover:bg-gray-700"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="mb-8 text-center">
          <div
            className={`w-20 h-20 mx-auto mb-4 rounded-full ${
              type === "success" ? "bg-green-500/20" : "bg-red-500/20"
            } flex items-center justify-center`}
          >
            {type === "success" ? (
              <CheckCircle className="w-10 h-10 text-green-400" />
            ) : (
              <X className="w-10 h-10 text-red-400" />
            )}
          </div>
          <p className={`text-xl font-medium ${type === "success" ? "text-green-400" : "text-red-400"} mb-2`}>
            {message}
          </p>
          <p className="text-gray-400 text-sm">
            {type === "success"
              ? "Thank you for your payment. Your transaction has been processed successfully."
              : "We encountered an issue processing your payment. Please try again or contact support."}
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className={`${
              type === "success"
                ? "bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 shadow-green-600/30"
                : "bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 shadow-red-600/30"
            }               text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105`}
          >
            {type === "success" ? "Continue" : "Try Again"}
          </button>
        </div>
      </div>
    </div>
  )
}



export default function PaymentPage() {
  const [selectedMethod, setSelectedMethod] = useState("IMPS")
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationType, setNotificationType] = useState("success")
  const [notificationMessage, setNotificationMessage] = useState("")
  const [captcha, setCaptcha] = useState('')



  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    state: "",
    city: "",
    degreee: "",
    courseName: "",
    collegeName: "",
    passingYear: "",
    modeOfClass: "",
    department: "",
    totalFees: "",
    paidAmount: "",
    remainingFees: "",
    feesDueDate: "",
    preferredBranch: "",
    documentType: "",
    documentNo: "",
    profession: "",
    preferredBatch: "",
    counsellorName: "",
    counselorNumber: "",
    counselorEmail: "",
    departmentIds: "",
    preferredBranchId: "",
    contactPersonIds: "",
    batchIds: "",
    isVerifiedbyCounsellor: false,
  })


  // Generate captcha function
  const generateCaptcha = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&?"
    let result = ""
    const length = 6 // Captcha length
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length))
    }
    setCaptcha(result)
  }


  // Generate captcha on component mount
  useEffect(() => {
    generateCaptcha()
  }, [])


  const handleUserDetailsSubmit = (values) => {
    console.log("User Details Submitted (PaymentPage):", values)
    try {
      setUserDetails({
        ...values,
        isVerifiedbyCounsellor: false,
      })
      setCurrentStep(2)
    } catch (error) {
      console.error("Error processing form submission (PaymentPage):", error)
    }
  }



  const handleVerifySubmit = () => {
    setCurrentStep(3)
  }



  const handlePaymentClick = () => {
    setShowConfirmation(true)
  }



  const handleConfirmPayment = async () => {
    setShowConfirmation(false)
    setIsSubmitting(true)



    console.log("User Details for API:", userDetails)



    try {
      // Prepare the data for the billing API (includes all fields)
      const apiData = {
        name: userDetails.name,
        email: userDetails.email,
        phone: userDetails.phone,
        gender: userDetails.gender,
        dateOfBirth: userDetails.dateOfBirth
          ? new Date(userDetails.dateOfBirth).toISOString()
          : new Date().toISOString(),
        state: userDetails.state,
        city: userDetails.city,
        degreee: userDetails.degreee,
        courseName: userDetails.courseName,
        collegeName: userDetails.collegeName,
        passingYear: userDetails.passingYear,
        modeOfClass: userDetails.modeOfClass,
        department: userDetails.department,
        totalFees: userDetails.totalFees,
        paidAmount: userDetails.paidAmount,
        remainingFees: userDetails.remainingFees,
        feesDueDate: userDetails.feesDueDate
          ? new Date(userDetails.feesDueDate).toISOString()
          : new Date().toISOString(),
        preferredBranch: userDetails.preferredBranch,
        documentType: userDetails.documentType,
        documentNo: userDetails.documentNo,
        profession: userDetails.profession,
        preferredBatch: userDetails.preferredBatch,
        counsellorName: userDetails.counsellorName,
        counselorNumber: userDetails.counselorNumber,
        counselorEmail: userDetails.counselorEmail,
        departmentIds: userDetails.departmentIds || "",
        preferredBranchId: userDetails.preferredBranchId || "",
        contactPersonIds: userDetails.contactPersonIds || "",
        batchIds: userDetails.batchIds || "",
        isVerifiedbyCounsellor: false,
      }

       const token = await window.grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          { action: "submit" }
        );



      // Prepare filtered data for email (excludes sensitive fields)
      const emailUserDetails = { ...userDetails }
      delete emailUserDetails.contactPersonIds
      delete emailUserDetails.preferredBranchId
      delete emailUserDetails.departmentIds
      delete emailUserDetails.batchIds



      // console.log("API Data being sent:", apiData)



      // const response = await axios.post("https://stage-billing-api.sevenmentor.io/api/v1/students/add", apiData)
      const response = await axios.post("https://billing-uat-api.sevenmentor.io/api/v1/students/add", apiData)



      const thankYouResponse = await axios.post("/api/payment-form", {
        userDetails: emailUserDetails, // Send filtered data for email
        paymentMethod: selectedMethod,
        to: "receipts@sevenmentor.com",
        token,
      })



      // console.log("Payment Details Submitted:", response.data)
      setIsSubmitting(false)
      setNotificationType("success")
      setNotificationMessage("Your payment details are received")
      setShowNotification(true)
    } catch (error) {
      console.error("Error submitting payment details:", error)
      console.error("Error response:", error.response?.data)
      console.error("Error status:", error.response?.status)
      console.error("Error message:", error.message)



      console.error("Error submitting payment details thank you message:", error)
      console.error("Error response thank you message:", error.thankYouResponse?.data)
      console.error("Error status thank you message:", error.thankYouResponse?.status)
      console.error("Error message thank you message:", error.message)



      setIsSubmitting(false)
      setNotificationType("error")
      setNotificationMessage("Payment submission failed. Please try again.")
      setShowNotification(true)
    }
  }



  const handleCloseNotification = () => {
    setShowNotification(false)
    if (notificationType === "success") {
      setCurrentStep(1)
      setUserDetails({
        name: "",
        email: "",
        phone: "",
        gender: "",
        dateOfBirth: "",
        state: "",
        city: "",
        degreee: "",
        courseName: "",
        collegeName: "",
        passingYear: "",
        modeOfClass: "",
        department: "",
        totalFees: "",
        paidAmount: "",
        remainingFees: "",
        feesDueDate: "",
        preferredBranch: "",
        documentType: "",
        documentNo: "",
        profession: "",
        preferredBatch: "",
        counsellorName: "",
        counselorNumber: "",
        counselorEmail: "",
        departmentIds: "",
        preferredBranchId: "",
        contactPersonIds: "",
        batchIds: "",
        isVerifiedbyCounsellor: false,
      })
      // Generate new captcha for next session
      generateCaptcha()
    }
  }



  const handleEditDetails = () => {
    setCurrentStep(1)
  }



  const handleCancel = () => {
    setCurrentStep(1)
  }

  // New function to handle back navigation
  const handleBackStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }



  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentStep])



  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-700 to-orange-500 py-6 shadow-lg">
        <div className="mt-20 md:mt-28 mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-4">Secure Payment Gateway</h1>
          <p className="text-center text-orange-100">Complete your payment in three simple steps</p>
        </div>
      </div>



      {/* Progress Steps */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="w-full flex items-center justify-center">
            <div className="flex w-full mx-40 items-center justify-between mb-8 relative">
              {/* Progress Line */}
              <div className="absolute h-1 bg-gray-700 top-1/2 left-0 right-0 -translate-y-1/2 z-0"></div>
              <div
                className={`absolute h-1 bg-gradient-to-r from-orange-600 to-orange-400 top-1/2 left-0 -translate-y-1/2 z-0 transition-all duration-500 ease-in-out ${
                  currentStep === 1 ? "w-0" : currentStep === 2 ? "w-1/2" : "w-full"
                }`}
              ></div>



              {/* Step 1: Details */}
              <div className={`relative z-10 flex flex-col items-center justify-around !top-3`}>
                <div
                  className={`w-16 h-16 mr-3 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentStep >= 1
                      ? "bg-gradient-to-r from-orange-600 to-orange-400 shadow-lg shadow-orange-600/30"
                      : "bg-gray-700"
                  }`}
                >
                  <User className="w-7 h-7 text-white" />
                </div>
                <span className="mt-2 text-sm font-medium">Details</span>
              </div>



              {/* Step 2: Verify Details */}
              <div className={`relative z-10 flex flex-col items-center !top-3`}>
                <div
                  className={`w-16 h-16 mr-3 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentStep >= 2
                      ? "bg-gradient-to-r from-orange-600 to-orange-400 shadow-lg shadow-orange-600/30"
                      : "bg-gray-700"
                  }`}
                >
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <span className="mt-2 text-sm font-medium">Verify Details</span>
              </div>



              {/* Step 3: Payment */}
              <div className={`relative z-10 flex flex-col items-center !top-3`}>
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    currentStep >= 3
                      ? "bg-gradient-to-r from-orange-600 to-orange-400 shadow-lg shadow-orange-600/30"
                      : "bg-gray-700"
                  }`}
                >
                  <CreditCard className="w-7 h-7 text-white" />
                </div>
                <span className="mt-2 text-sm font-medium">Payment</span>
              </div>
            </div>
          </div>



          <div className="bg-gray-900 rounded-xl shadow-2xl border border-gray-800 overflow-hidden transition-all duration-500">
            {/* Back Button for Step 2 and 3 */}
            {currentStep > 1 && (
              <div className="p-6 border-b border-gray-800">
                <button
                  onClick={handleBackStep}
                  className="flex items-center text-orange-400 hover:text-orange-300 transition-colors font-medium"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Previous Step
                </button>
              </div>
            )}

            {currentStep === 1 && (
              <UserPaymentDetailsForm onSubmit={handleUserDetailsSubmit} initialValues={userDetails} />
            )}



            {currentStep === 2 && (
              <VerifyPaymentDetails
                userDetails={userDetails}
                onProceed={handleVerifySubmit}
                onEdit={handleEditDetails}
                onCancel={handleCancel}
              />
            )}



            {currentStep === 3 && (
              <>
                <PaymentOptions selectedMethod={selectedMethod} onMethodSelect={setSelectedMethod} />
                <div className="p-6">
                  {selectedMethod === "IMPS" && <IMPSForm />}
                  {selectedMethod === "GPay" && <GPayDetails />}
                  {selectedMethod === "PhonePay" && <PhonePayDetails />}
                  {selectedMethod === "InstaMojo" && <InstaMojo />}
                </div>
                <div className="p-6 text-center">
                  <button
                    onClick={handlePaymentClick}
                    disabled={isSubmitting}
                    className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg shadow-orange-600/30 transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      "Confirm Payment"
                    )}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>



      {/* Confirmation Popup with Captcha */}
      {showConfirmation && (
        <ConfirmationPopup
          onConfirm={handleConfirmPayment}
          onClose={() => setShowConfirmation(false)}
          captcha={captcha}
          generateCaptcha={generateCaptcha}
        />
      )}



      {/* Notification Popup */}
      {showNotification && (
        <NotificationPopup type={notificationType} message={notificationMessage} onClose={handleCloseNotification} />
      )}



      <StickyButton
        mailId={"registration@sevenmentor.com"}
        contactNo={"7798058777"}
        bannerTitle={"Individual Course At SevenMentor"}
      />



      {/* Add animation styles */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .captcha-container {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-touch-callout: none;
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
          user-drag: none;
        }
      `}</style>
    </div>
  )
}
