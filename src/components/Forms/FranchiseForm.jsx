"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faUser,
  faUserTie,
  faCity,
  faCommentDots,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/navigation";

const FranchiseForm = ({
  isOpen,
  onClose,
  title,
  mailSubject,
  userEmailSubject,
  contactNo,
  bannerTitle,
  mailId,
  emailRoute,
}) => {
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

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false);
      setSubmissionMessage("");
      setIsSuccess(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        onClose();
      }, 2700);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted, onClose]);

  const formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      phoneNumber: "",
      designation: "",
      company: "",
      city: "",
      message: "",
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters"),
      email: Yup.string().required("Email is required").email("Invalid email"),
      phoneNumber: Yup.string()
        .matches(/^\d+$/, "Phone must contain only numbers")
        .test(
          "valid-length",
          "Phone number must be 10 digits",
          (value) => value?.length === 10
        )
        .required("Phone number is required"),
      designation: Yup.string().required("Designation is required"),
      company: Yup.string().required("Company name is required"),
      city: Yup.string().required("City is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      // Ensure reCAPTCHA is ready
      const token = await window.grecaptcha.execute(
        process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        { action: "submit" }
      );

      // Simplified payload - NO country, NO country code, NO std code
      const submissionData = {
        formData: {
          Name: values.Name,
          Email: values.email,
          PhoneNumber: values.phoneNumber, // Just the phone number, no country code
          Company_Name: values.company,
          City: values.city,
          Designation: values.designation,
          Message: values.message,
          PageUrl: pageUrl,
          IP_Address: userIP, // Only IP address included
        },
        to: mailId,
        mailSubject: mailSubject,
        userEmailSubject: userEmailSubject,
        contactNo: contactNo,
        bannerTitle: bannerTitle,
      };

      axios
        .post(
          `/api${emailRoute}`,
          { submissionData, token },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(() => {
          router.push("/thank-you");
          resetForm();
        })
        .catch(() => {
          setSubmissionMessage(
            "Oops! Something went wrong. Please try submitting the form again."
          );
          setIsSubmitted(true);
          setIsSuccess(false);
          resetForm();
        });
    },
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-[9999] p-4 overflow-y-auto">
      <div className="relative flex flex-col md:flex-row mx-auto bg-white rounded-lg shadow-lg w-full max-w-[30rem] max-h-[calc(100vh-2rem)] overflow-hidden my-auto">
        <div className="w-full flex flex-col relative overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white bg-orange-500 p-1 px-2 rounded-md hover:bg-red-700 font-bold transition-colors z-10"
          >
            X
          </button>

          <div className="flex-1 overflow-y-auto p-6">
            <h3 className="text-2xl font-bold mb-6 text-center text-orange-600">
              {title}
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col justify-center items-center h-[230px] text-center">
                <div
                  className={`text-2xl font-semibold ${
                    isSuccess ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {isSuccess ? "✔️" : "❌"} <br /> {submissionMessage}
                </div>
              </div>
            ) : (
              <form onSubmit={formik.handleSubmit}>
                {/* Loading indicator while detecting IP */}
                {isLoadingIP && (
                  <div className="text-center text-sm text-gray-600 mb-3">
                    Loading...
                  </div>
                )}

                <div className="flex flex-wrap -mx-2">
                  {/* Name */}
                  <div className="w-1/2 px-2">
                    <div className="relative mb-4">
                      <FontAwesomeIcon
                        icon={faUser}
                        className="absolute top-4 left-3 text-gray-600"
                      />
                      <input
                        type="text"
                        name="Name"
                        aria-label="Name"
                        placeholder="Enter Your Name"
                        className="w-full pl-[35px] text-black p-3 rounded-lg shadow-sm border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.Name}
                      />
                      {formik.touched.Name && formik.errors.Name && (
                        <div className="text-red-700 text-sm mt-1">
                          {formik.errors.Name}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="w-1/2 px-2">
                    <div className="relative mb-4">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className="absolute top-4 left-3 text-gray-600"
                      />
                      <input
                        type="email"
                        name="email"
                        aria-label="Email"
                        placeholder="Enter Your Email"
                        className="w-full pl-[35px] text-black p-3 rounded-lg shadow-sm border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <div className="text-red-700 text-sm mt-1">
                          {formik.errors.email}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Phone Number - NO COUNTRY CODE */}
                  <div className="w-1/2 px-2">
                    <div className="relative mb-4">
                      <FontAwesomeIcon
                        icon={faPhone}
                        className="absolute top-4 left-3 text-gray-600"
                      />
                      <input
                        type="text"
                        name="phoneNumber"
                        aria-label="Phone Number"
                        placeholder="Enter Phone Number"
                        className="w-full pl-[35px] text-black p-3 rounded-lg shadow-sm border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phoneNumber}
                        maxLength={10}
                      />
                      {formik.touched.phoneNumber &&
                        formik.errors.phoneNumber && (
                          <div className="text-red-700 text-sm mt-1">
                            {formik.errors.phoneNumber}
                          </div>
                        )}
                    </div>
                  </div>

                  {/* City */}
                  <div className="w-1/2 px-2">
                    <div className="relative mb-4">
                      <FontAwesomeIcon
                        icon={faCity}
                        className="absolute top-4 left-3 text-gray-600"
                      />
                      <input
                        type="text"
                        name="city"
                        aria-label="City"
                        placeholder="Enter Your City"
                        className="w-full pl-[35px] text-black p-3 rounded-lg shadow-sm border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.city}
                      />
                      {formik.touched.city && formik.errors.city && (
                        <div className="text-red-700 text-sm mt-1">
                          {formik.errors.city}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Company */}
                <div className="relative mb-4">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    className="absolute top-4 left-3 text-gray-600"
                  />
                  <input
                    type="text"
                    name="company"
                    aria-label="Company"
                    placeholder="Enter Your Company Name"
                    className="w-full pl-[35px] text-black p-3 rounded-lg shadow-sm border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.company}
                  />
                  {formik.touched.company && formik.errors.company && (
                    <div className="text-red-700 text-sm mt-1">
                      {formik.errors.company}
                    </div>
                  )}
                </div>

                {/* Designation */}
                <div className="relative mb-4">
                  <FontAwesomeIcon
                    icon={faUserTie}
                    className="absolute top-4 left-3 text-gray-600"
                  />
                  <textarea
                    name="designation"
                    aria-label="designation"
                    placeholder="Enter Your Designation"
                    className="w-full pl-[35px] text-black p-3 rounded-lg shadow-sm border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                    rows="2"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.designation}
                  ></textarea>
                  {formik.touched.designation && formik.errors.designation && (
                    <div className="text-red-700 text-sm mt-1">
                      {formik.errors.designation}
                    </div>
                  )}
                </div>

                {/* Message */}
                <div className="relative mb-4">
                  <FontAwesomeIcon
                    icon={faCommentDots}
                    className="absolute top-4 left-3 text-gray-600"
                  />
                  <textarea
                    name="message"
                    aria-label="message"
                    placeholder="Enter Your Message..."
                    className="w-full pl-[35px] text-black p-3 rounded-lg shadow-sm border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                    rows="2"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.message}
                  ></textarea>
                  {formik.touched.message && formik.errors.message && (
                    <div className="text-red-700 text-sm mt-1">
                      {formik.errors.message}
                    </div>
                  )}
                </div>

                <div className="lg:pl-[55px] pl-[10px] mb-4">
                  <button
                    type="submit"
                    disabled={formik.isSubmitting || isLoadingIP}
                    className="relative w-[300px] bg-gradient-to-r mt-2 from-orange-700 to-orange-500 text-white font-bold py-3 px-4 rounded-full overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="relative z-10">
                      {formik.isSubmitting
                        ? "Submitting..."
                        : isLoadingIP
                        ? "Loading..."
                        : "Submit"}
                    </span>
                    <Image
                      src="/assets/shimmer.webp"
                      alt="shimmer animation"
                      className="absolute top-0 left-0 w-[44px] h-[48px] shimmer-effect"
                      width={44}
                      height={48}
                      style={{
                        objectFit: "cover",
                        height: "100%",
                      }}
                    />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FranchiseForm;
