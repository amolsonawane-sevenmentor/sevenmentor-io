"use client";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Formik, Form, Field, useFormikContext } from "formik";
import * as Yup from "yup";
import { TypeAnimation } from "react-type-animation";
import {
  User,
  Phone,
  X,
  Mail,
  CheckCircle,
  AlertCircle,
  MapPin,
  Briefcase,
} from "lucide-react";
import { useRouter } from "next/navigation";

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
  city: "",
  profession: "",
};

const eventSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  city: Yup.string().required("City is required"),
  profession: Yup.string().required("Profession is required"),
});

const FormInitializer = () => {
  const { setFieldValue } = useFormikContext();
  useEffect(() => {
    setFieldValue("country", INDIA_DATA);
  }, [setFieldValue]);
  return null;
};

export default function EventPopUpForm({
  isOpen,
  onClose,
  event,
  mailId,
  onSuccess,
}) {
  const [fieldStates, setFieldStates] = useState({
    name: false,
    email: false,
    phoneNumber: false,
    city: false,
    profession: false,
    event: false,
  });
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const formikRef = useRef(null);
  const [userIP, setUserIP] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const router = useRouter();

  // Function to get Google Sheets URL based on event category
  const getGoogleSheetsUrl = (category) => {
    const categoryUrlMap = {
      'Software Development': 'https://script.google.com/macros/s/AKfycbyyd76WGrVAJ0bMOxscJJfkONe2-bd2tlfR8DRQHS2ujCEclcUETSq6T3hkkrC7x-X07w/exec',
      'Data Science, AI/ML': 'https://script.google.com/macros/s/AKfycbyDrWbG4OJu7PvsVKYfvM74Gu5Kr_t7oS5fVcmz1zOJOE7zqgdxYKmTpz4mzry3uGLD/exec',
      'Devops': 'https://script.google.com/macros/s/AKfycbyfQIIdGY3y0HYDZHQVFCiUGMn92iDKNOaB1GIBResOXvZ8l6dDoshFofOVMhUGcWoz/exec',
      'Fashion Designing': 'https://script.google.com/macros/s/AKfycbwaoKfzbUlR5HR0ZHXSZvJiYdkO2DnoAOI29HkheGjEXG7G5dBVg0aynyHKEnKeDFvN/exec',
      'Networking & Cybersecurity': 'https://script.google.com/macros/s/AKfycbyfQIIdGY3y0HYDZHQVFCiUGMn92iDKNOaB1GIBResOXvZ8l6dDoshFofOVMhUGcWoz/exec',
      'Interior Designing': 'https://script.google.com/macros/s/AKfycbwaoKfzbUlR5HR0ZHXSZvJiYdkO2DnoAOI29HkheGjEXG7G5dBVg0aynyHKEnKeDFvN/exec',
      'General': 'https://script.google.com/macros/s/AKfycbwaoKfzbUlR5HR0ZHXSZvJiYdkO2DnoAOI29HkheGjEXG7G5dBVg0aynyHKEnKeDFvN/exec',
    };
    
    return categoryUrlMap[category] || categoryUrlMap['General'];
  };

  // Fetch User's IP Address
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
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
  }, []);

  // Auto-hide popup after 3 seconds and trigger navigation
  useEffect(() => {
    let timer;
    if (showPopup) {
      timer = setTimeout(() => {
        setShowPopup(false);
        if (isSuccess) {
          router.push(`/webinar/${event.slug}`);
        } else {
          onClose();
        }
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showPopup, isSuccess, onClose, router, event.slug]);

  // Reset states when popup closes
  useEffect(() => {
    if (!isOpen) {
      setShowPopup(false);
      setIsSuccess(false);
      setPopupMessage("");
    }
  }, [isOpen]);

  const handleFocus = (field) =>
    setFieldStates((prev) => ({ ...prev, [field]: true }));

  const handleBlur = (field, value) => {
    if (!value.trim()) setFieldStates((prev) => ({ ...prev, [field]: false }));
  };

  const resetFormCompletely = (resetForm) => {
    resetForm({ values: { ...initialValues, country: INDIA_DATA } });
    setFieldStates({
      name: false,
      email: false,
      phoneNumber: false,
      city: false,
      profession: false,
    });
    setFormKey((prev) => prev + 1);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Get the appropriate Google Sheets URL based on event category
      const googleSheetsUrl = getGoogleSheetsUrl(event.category);

      // Send to Google Spreadsheet using fetch (to avoid CORS issues)
      const googleSheetData = new FormData();
      googleSheetData.append('Name', values.name);
      googleSheetData.append('Email', values.email);
      googleSheetData.append('PhoneNumber', `+${INDIA_DATA.phonecode} ${values.phoneNumber}`);
      googleSheetData.append('City', values.city);
      googleSheetData.append('Profession', values.profession);
      googleSheetData.append('EventTitle', event.title);
      googleSheetData.append('EventCategory', event.category);
      googleSheetData.append('EventDate', event.date);
      googleSheetData.append('EventTime', event.time);
      googleSheetData.append('EventLocation', event.location);
      googleSheetData.append('PageUrl', pageUrl);
      googleSheetData.append('IP_Address', userIP);

      const googleSheetResponse = await fetch(
        googleSheetsUrl,
        {
          method: 'POST',
          mode: 'no-cors',
          body: googleSheetData
        }
      );

      // Since we're using no-cors mode, we can't check the response status
      // We'll assume success if no error is thrown
      setIsSuccess(true);
      setPopupMessage(
        "Registration successful! We'll send you event details shortly."
      );
      setShowPopup(true);
      router.push(`/webinar/${event.slug}`);
      resetFormCompletely(resetForm);

    } catch (error) {
      setIsSuccess(false);
      setPopupMessage(
        "An error occurred. Please try again."
      );
      setShowPopup(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-[9999]">
      <div className="relative bg-gray-900 rounded-xl shadow-2xl w-full max-w-md mx-4 max-h-[90vh] overflow-y-auto scroll-smooth scrollbar-hide">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 p-6 rounded-t-xl">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <h2 className="text-2xl font-bold text-white mb-2">
            Register for Webinar
          </h2>
          <h3 className="text-lg text-orange-100 font-medium">{event.title}</h3>
          <div className="text-sm text-orange-100 mt-2">
            <p>
              {event.date} • {event.time}
            </p>
            <p>{event.location}</p>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <Formik
            innerRef={formikRef}
            key={formKey}
            initialValues={initialValues}
            validationSchema={eventSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {({ errors, touched, values, isSubmitting }) => (
              <Form className="space-y-4">
                <FormInitializer />

                {/* Name Field */}
                <div className="relative">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-orange-500" />
                    <Field
                      name="name"
                      aria-label="Name"
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      onFocus={() => handleFocus("name")}
                      onBlur={(e) => handleBlur("name", e.target.value)}
                      placeholder={
                        !fieldStates.name && !values.name ? "" : "Your Name"
                      }
                    />
                    {!fieldStates.name && !values.name && (
                      <TypeAnimation
                        sequence={["YOUR NAME", 1000, ""]}
                        wrapper="span"
                        speed={20}
                        className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        repeat={Number.POSITIVE_INFINITY}
                      />
                    )}
                  </div>
                  {errors.name && touched.name && (
                    <div className="text-red-400 text-sm mt-1">
                      {errors.name}
                    </div>
                  )}
                </div>

                {/* Email Field */}
                <div className="relative">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-orange-500" />
                    <Field
                      name="email"
                      aria-label="Email"
                      type="email"
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      onFocus={() => handleFocus("email")}
                      onBlur={(e) => handleBlur("email", e.target.value)}
                      placeholder={
                        !fieldStates.email && !values.email ? "" : "Your Email"
                      }
                    />
                    {!fieldStates.email && !values.email && (
                      <TypeAnimation
                        sequence={["YOUR EMAIL", 1000, ""]}
                        wrapper="span"
                        speed={20}
                        className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        repeat={Number.POSITIVE_INFINITY}
                      />
                    )}
                  </div>
                  {errors.email && touched.email && (
                    <div className="text-red-400 text-sm mt-1">
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Phone Field */}
                <div className="relative">
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-orange-500" />
                    <Field
                      name="phoneNumber"
                      aria-label="Phone Number"
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      onFocus={() => handleFocus("phoneNumber")}
                      onBlur={(e) => handleBlur("phoneNumber", e.target.value)}
                      placeholder={
                        !fieldStates.phoneNumber && !values.phoneNumber
                          ? ""
                          : "Phone Number"
                      }
                    />
                    {!fieldStates.phoneNumber && !values.phoneNumber && (
                      <TypeAnimation
                        sequence={["PHONE NUMBER", 1000, ""]}
                        wrapper="span"
                        speed={20}
                        className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        repeat={Number.POSITIVE_INFINITY}
                      />
                    )}
                  </div>
                  {errors.phoneNumber && touched.phoneNumber && (
                    <div className="text-red-400 text-sm mt-1">
                      {errors.phoneNumber}
                    </div>
                  )}
                </div>

                {/* City Field */}
                <div className="relative">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-orange-500" />
                    <Field
                      name="city"
                      aria-label="City"
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      onFocus={() => handleFocus("city")}
                      onBlur={(e) => handleBlur("city", e.target.value)}
                      placeholder={
                        !fieldStates.city && !values.city ? "" : "Your City"
                      }
                    />
                    {!fieldStates.city && !values.city && (
                      <TypeAnimation
                        sequence={["YOUR CITY", 1000, ""]}
                        wrapper="span"
                        speed={20}
                        className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        repeat={Number.POSITIVE_INFINITY}
                      />
                    )}
                  </div>
                  {errors.city && touched.city && (
                    <div className="text-red-400 text-sm mt-1">
                      {errors.city}
                    </div>
                  )}
                </div>

                {/* Profession Field */}
                <div className="relative">
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-orange-500" />
                    <Field
                      name="profession"
                      aria-label="Profession"
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      onFocus={() => handleFocus("profession")}
                      onBlur={(e) => handleBlur("profession", e.target.value)}
                      placeholder={
                        !fieldStates.profession && !values.profession
                          ? ""
                          : "Your Profession"
                      }
                    />
                    {!fieldStates.profession && !values.profession && (
                      <TypeAnimation
                        sequence={["YOUR PROFESSION", 1000, ""]}
                        wrapper="span"
                        speed={20}
                        className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                        repeat={Number.POSITIVE_INFINITY}
                      />
                    )}
                  </div>
                  {errors.profession && touched.profession && (
                    <div className="text-red-400 text-sm mt-1">
                      {errors.profession}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold py-3 px-4 rounded-lg hover:from-orange-700 hover:to-orange-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Registering..." : "Register for Webinar"}
                </button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Success/Error Popup */}
        {showPopup && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm mx-4 text-center">
              <div
                className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  isSuccess ? "bg-green-100" : "bg-red-100"
                }`}
              >
                {isSuccess ? (
                  <CheckCircle className="h-8 w-8 text-green-600" />
                ) : (
                  <AlertCircle className="h-8 w-8 text-red-600" />
                )}
              </div>
              <h3
                className={`text-lg font-bold mb-2 ${
                  isSuccess ? "text-green-800" : "text-red-800"
                }`}
              >
                {isSuccess ? "Registration Successful!" : "Registration Failed"}
              </h3>
              <p
                className={`text-sm ${
                  isSuccess ? "text-green-600" : "text-red-600"
                }`}
              >
                {popupMessage}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
