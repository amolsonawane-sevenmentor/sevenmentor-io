"use client";

import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Mail, X, CheckCircle } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HiringPartnerForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoadingIP, setIsLoadingIP] = useState(true);
  const [userIP, setUserIP] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
  }, []);

  // Fetch ONLY User's IP Address - NO GEOLOCATION
  useEffect(() => {
    const fetchIPAddress = async () => {
      setIsLoadingIP(true);
      try {
        // Primary API - ipify (simple, fast, no geolocation)
        const response = await axios.get("https://api.ipify.org?format=json");
        
        if (response.data && response.data.ip) {
          setUserIP(response.data.ip);
        }
      } catch (error) {
        console.error("Failed to fetch IP address:", error);

        // Fallback API
        try {
          const fallbackResponse = await axios.get("https://api.ipify.org");
          setUserIP(fallbackResponse.data);
        } catch (fallbackError) {
          console.error("Fallback IP fetch also failed:", fallbackError);
          // Set empty string if all attempts fail
          setUserIP("");
        }
      } finally {
        setIsLoadingIP(false);
      }
    };

    fetchIPAddress();
  }, []);

  const mailId = "support@sevenmentor.com";

  const formik = useFormik({
    initialValues: {
      fullName: "",
      mobileNumber: "",
      companyName: "",
      companyEmail: "",
      designation: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Full Name is required"),
      mobileNumber: Yup.string()
        .matches(/^\d{10}$/, "Mobile number must be 10 digits")
        .required("Mobile Number is required"),
      companyName: Yup.string().required("Company Name is required"),
      companyEmail: Yup.string()
        .email("Invalid email address")
        .required("Company Email is required"),
      designation: Yup.string().required("Designation is required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      // Ensure reCAPTCHA is ready
        const token = await window.grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          { action: "submit" }
        );
      // Simplified payload - NO country, NO country code, NO std code
      const submissionData = {
        formData: {
          Name: values.fullName,
          Email: values.companyEmail,
          PhoneNumber: values.mobileNumber, // Just the phone number, no country code
          CompanyName: values.companyName,
          Designation: values.designation,
          PageUrl: pageUrl,
          IP_Address: userIP, // Only IP address included
        },
        token,
        to: mailId,
        mailSubject: "Hiring Partner Form Submission Received",
        userEmailSubject: "Thank You for Reaching Out",
        contactNo: "7798058777",
        bannerTitle: "HIRING PARTNER",
      };

      try {
        const response = await axios.post("/api/hiring-partner-form", submissionData, {
          headers: { "Content-Type": "application/json" },
          timeout: 10000,
        });

        if (response.data?.message === "Emails sent successfully!") {
          router.push("/thank-you");
          resetForm();
        }
      } catch (error) {
        console.error("API Error:", error.message);
        setSubmissionMessage("Something went wrong. Please try again.");
        setIsSubmitted(true);
        setIsSuccess(false);
      } finally {
        setSubmitting(false);
      }
    },
  });

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setSubmissionMessage("");
        setIsSubmitted(false);
        setIsSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const closeMessage = () => {
    setSubmissionMessage("");
    setIsSubmitted(false);
    setIsSuccess(false);
  };

  return (
    <div
      className="max-w-7xl mx-auto p-6 md:p-12 rounded-lg shadow-lg mb-5 relative"
      style={{
        backgroundColor: "#1a1a1a",
        boxShadow: "rgba(255, 165, 0, 0.5) 0px 10px 18px, rgba(0, 0, 0, 0.7) 0px 15px 15px",
      }}
    >
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
                    {isSuccess ? (
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    ) : (
                      <X className="h-8 w-8 text-red-600" />
                    )}
                  </div>
                </div>
                <h3 className={`text-2xl font-bold ${isSuccess ? "text-gray-800" : "text-red-600"}`}>
                  {isSuccess ? "Successful!" : "Failed!"}
                </h3>
                <p className={`text-center ${isSuccess ? "text-gray-600" : "text-red-500"}`}>
                  {submissionMessage}
                </p>
                <button
                  onClick={closeMessage}
                  className={`mt-2 ${
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col justify-start">
          <h2 className="text-3xl font-bold mb-4 text-white">Contact Us</h2>
          <p className="text-gray-100">
            For any queries please share your contact details and the team will reach out to you soon.
          </p>
          <Link
            href="mailto:support@sevenmentor.com"
            className="text-blue-400 mt-2 hover:underline flex items-center"
          >
            <Mail className="w-5 h-5 mr-2" /> support@sevenmentor.com
          </Link>
        </div>

        <div>
          <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Loading indicator while detecting IP */}
            {isLoadingIP && (
              <div className="md:col-span-2 text-center text-sm text-gray-300 mb-2">
                Loading...
              </div>
            )}

            <div>
              <label className="block font-semibold text-orange-500">Full Name :</label>
              <input
                type="text"
                name="fullName"
                aria-label="Full Name"
                className="w-full p-2 border rounded text-white bg-transparent"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
              />
              {formik.touched.fullName && formik.errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.fullName}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold text-orange-500">Mobile No :</label>
              <input
                type="text"
                name="mobileNumber"
                aria-label="Mobile Number"
                className="w-full p-2 border rounded text-white bg-transparent"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.mobileNumber}
                maxLength={10}
              />
              {formik.touched.mobileNumber && formik.errors.mobileNumber && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.mobileNumber}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold text-orange-500">Company Name :</label>
              <input
                type="text"
                name="companyName"
                aria-label="Company Name"
                className="w-full p-2 border rounded text-white bg-transparent"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.companyName}
              />
              {formik.touched.companyName && formik.errors.companyName && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.companyName}</p>
              )}
            </div>

            <div>
              <label className="block font-semibold text-orange-500">Company Email :</label>
              <input
                type="email"
                name="companyEmail"
                aria-label="Company Email"
                className="w-full p-2 border rounded text-white bg-transparent"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.companyEmail}
              />
              {formik.touched.companyEmail && formik.errors.companyEmail && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.companyEmail}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <label className="block font-semibold text-orange-500">Designation :</label>
              <input
                type="text"
                name="designation"
                aria-label="Designation"
                className="w-full p-2 border rounded text-white bg-transparent"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.designation}
              />
              {formik.touched.designation && formik.errors.designation && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.designation}</p>
              )}
            </div>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-orange-500 text-white font-bold py-2 px-24 rounded-full hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={formik.isSubmitting || isLoadingIP}
              >
                {formik.isSubmitting ? "Submitting..." : isLoadingIP ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HiringPartnerForm;
