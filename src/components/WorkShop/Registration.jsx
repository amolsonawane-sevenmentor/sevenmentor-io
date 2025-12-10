"use client"
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import { TypeAnimation } from "react-type-animation";
import { User, Phone, Mail, MessageCircle, Send } from "lucide-react";
import Image from "next/image"
import { useRouter } from "next/navigation.js"
const INDIA_DATA = {
  id: 101,
  name: "India",
  phonecode: "91",
  sortname: "IN",
  emoji: "🇮🇳",
};

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
};

const callbackSchema = Yup.object().shape({
  name: Yup.string().min(2, "Name is too short").max(50, "Name is too long").required("Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
});

const FormInitializer = () => {
  const { setFieldValue } = useFormikContext();
  useEffect(() => {
    setFieldValue("country", INDIA_DATA);
  }, [setFieldValue]);
  return null;
};

export default function Registration() {
  const [fieldStates, setFieldStates] = useState({
    name: false,
    email: false,
    phoneNumber: false,
  });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const formikRef = useRef(null);
  const [userIP, setUserIP] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [pageUrl, setPageUrl] = useState("");
  const router = useRouter() 
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href)
    }
  }, [])

  // WhatsApp contact number
  const whatsappNumber = "7709485755"; // Replace with your actual WhatsApp number

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        setUserIP(response.data.ip);
      } catch (error) {
        console.error("Failed to fetch IP address:", error);
      }
    };
    fetchIP();
  }, []);

  useEffect(() => {
    let timer;
    if (showPopup) {
      timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showPopup]);

  const handleFocus = (field) => setFieldStates((prev) => ({ ...prev, [field]: true }));
  const handleBlur = (field, value) => {
    if (!value.trim()) setFieldStates((prev) => ({ ...prev, [field]: false }));
  };

  const mailId = "kmahesh@sevenmentor.com"; // Replace with your email


  const resetFormCompletely = (resetForm) => {
    resetForm({ values: { ...initialValues, country: INDIA_DATA } });
    setFieldStates({ name: false, email: false, phoneNumber: false, query: false });
    setFormKey((prev) => prev + 1);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const formData = {
        Name: values.name,
        Email: values.email,
        PhoneNumber: `+${values.country?.phonecode} ${values.phoneNumber}`,
        PageUrl: pageUrl,
        IP_Address: userIP,
      };

      const response = await axios.post(
        "/api/main-form",
        {
          formData,
          to: mailId,
          mailSubject: "New Workshop Registration",
          userEmailSubject: "Thank You for Your Workshop Registration"
        },
        { timeout: 10000 }
      );

      if (response.status === 200) {
        // Instead of showing success popup, directly show payment section
        setFormSubmitted(true);
        router.push("/thank-you")
        resetFormCompletely(resetForm);
      } else {
        throw new Error("Failed to submit the form");
      }
    } catch (error) {
      setIsSuccess(false);
      setPopupMessage(
        error.code === "ECONNABORTED" ? "Request timed out. Please try again." : "An error occurred. Please try again."
      );
      setShowPopup(true);
    } finally {
      setSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello! I've registered for the Advanced Excel Workshop and made the payment. Here's my payment screenshot.");
    window.open(`https://wa.me/${whatsappNumber.replace(/\+/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-black text-white overflow-hidden sm:mt-32 sm:px-20 sm:pb-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Side: Content or Payment Instructions */}
          <div className="w-full md:w-[70%] space-y-6 fade-in-slide-right">
            {!formSubmitted ? (
              <>
                {/* Content before form submission */}
                <div className="inline-block px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full">
                  <span className="text-orange-400 text-sm font-medium">Limited Spots Available</span>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                  Register for <span className="text-orange-500">Advanced Excel</span> Workshop
                </h1>

                <p className="text-gray-300 text-lg max-w-2xl">
                  Fill out the form to secure your spot in our comprehensive hands-on Excel workshop designed to elevate your data analysis skills.
                </p>

                <div className="space-y-4">
                  {[
                    {
                      icon: <User className="text-orange-500" size={20} />,
                      title: "Expert Instructors",
                      info: "Learn from industry professionals",
                    },
                    {
                      icon: <Mail className="text-orange-500" size={20} />,
                      title: "Certificate Included",
                      info: "Receive a professional certificate",
                    },
                    {
                      icon: <Phone className="text-orange-500" size={20} />,
                      title: "Direct Support",
                      info: "Get your queries resolved instantly",
                    },
                  ].map((detail, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-orange-900/20 w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                        {detail.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{detail.title}</h3>
                        <p className="text-gray-400">{detail.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <>
                {/* Payment instructions after form submission */}
                <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                  <span className="text-green-400 text-sm font-medium">Registration Successful!</span>
                </div>

                <h2 className="text-3xl font-bold">
                  Complete Your <span className="text-orange-500">Payment</span>
                </h2>

                <p className="text-gray-300">
                  Thank you for registering! Please complete your payment by scanning the QR code and sending the screenshot on WhatsApp.
                </p>

                <ol className="list-decimal pl-5 space-y-3 text-gray-300">
                  <li>Scan the QR code using any UPI app (Google Pay, PhonePe, Paytm)</li>
                  <li>Pay ₹299 to complete your registration</li>
                  <li>Take a screenshot of the payment confirmation</li>
                  <li>Send the screenshot to our WhatsApp number</li>
                </ol>

                <button
                  onClick={openWhatsApp}
                  className="mt-6 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-full font-medium flex items-center group transition-all"
                >
                  <span>Open WhatsApp</span>
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </>
            )}
          </div>

          {/* Right Side: Form or QR Code */}
          <div className="w-full md:w-1/2 fade-in-slide-left">
            {!formSubmitted ? (
              <div className="bg-black/40 border border-orange-500/30 rounded-xl p-6 backdrop-blur-md">
                <h3 className="text-white font-bold mb-4 text-2xl text-center">
                  <span className="text-orange-500">Book Your Slot</span>
                </h3>

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
                              repeat={Infinity}
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
                              repeat={Infinity}
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
                              repeat={Infinity}
                            />
                          )}
                        </div>
                        {errors.phoneNumber && touched.phoneNumber && (
                          <div className="text-red-500 text-sm mt-1">{errors.phoneNumber}</div>
                        )}
                      </div>

                      <div className="text-center mt-6">
                        <button
                          type="submit"
                          className="w-full bg-gradient-to-r from-orange-700 to-orange-500 text-white font-bold py-3 px-4 rounded-full overflow-hidden hover:shadow-lg hover:shadow-orange-600/30 transition-all"
                          disabled={isSubmitting}
                        >
                          <span className="relative z-10">{isSubmitting ? "Submitting..." : "Submit"}</span>
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            ) : (
              <div className="bg-black/40 border border-orange-500/30 rounded-xl p-6 backdrop-blur-md flex flex-col items-center">
                <h3 className="text-white font-bold mb-4 text-2xl text-center">
                  <span className="text-orange-500">Scan & Pay</span>
                </h3>

                <div className="relative bg-white p-4 rounded-xl mb-4">
                  {/* Placeholder for QR code image */}
                  <Image
                    src="/assets/payment.jpg"
                    alt="Payment QR Code"
                    width={256} // 64 * 4 (Tailwind's w-64 = 256px)
                    height={256} // h-64 = 256px
                    className="object-contain rounded-md w-64 h-64"
                  />
                </div>

                <div className="text-center space-y-2">
                  <p className="font-bold text-lg">Amount: <span className="text-orange-500">₹299 only</span></p>
                  <p className="text-gray-300">UPI ID: payment@excellworkshop</p>
                  <p className="text-gray-300">WhatsApp: {whatsappNumber}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Popup notification */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-[999999] bg-black/40 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-80 h-80 flex flex-col items-center justify-center text-center relative">
            <div className={`w-14 h-14 ${isSuccess ? "bg-green-100" : "bg-red-100"} rounded-full flex items-center justify-center`}>
              {isSuccess ? (
                <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              ) : (
                <svg className="h-10 w-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                </svg>
              )}
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

      {/* CSS Animations */}
      <style jsx="true">{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInRight {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInLeft {
          from { transform: translateX(20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .fade-in-slide-right {
          animation: slideInRight 0.8s ease forwards;
        }

        .fade-in-slide-left {
          animation: slideInLeft 0.8s ease forwards;
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
}