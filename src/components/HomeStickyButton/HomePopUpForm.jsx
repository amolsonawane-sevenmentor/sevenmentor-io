"use client";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faGraduationCap,
  faEnvelope,
  faUser,
  faCity,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomePopUpForm = ({
  isOpen,
  onClose,
  title,
  mailId,
  contactNo,
  bannerTitle,
  mailSubject,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [userIP, setUserIP] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const [isLoadingIP, setIsLoadingIP] = useState(true);
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

  const formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      phoneNumber: "",
      city: "",
      CourseName: "",
      branch: "",
    },
    validationSchema: Yup.object({
      Name: Yup.string()
        .required("Name is required")
        .min(2, "Name must be at least 2 characters"),
      email: Yup.string().required("Email is required").email("Invalid email"),
      phoneNumber: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
        .required("Phone number is required"),
      city: Yup.string().required("City is required"),
      CourseName: Yup.string().required("Course Name is required"),
      branch: Yup.string().required("Please select a branch"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        // Ensure reCAPTCHA is ready
        const token = await window.grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          { action: "submit" }
        );

        // Simplified payload - NO country, NO country code, NO std code
        const formData = {
          Name: values.Name,
          Email: values.email,
          PhoneNumber: values.phoneNumber, // Just the phone number, no country code
          City: values.city,
          Branch: values.branch,
          CourseName: values.CourseName,
          PageUrl: pageUrl,
          IP_Address: userIP, // Only IP address included
        };

        const response = await axios.post(
          "/api/req-popup-form",
          {
            formData,
            token,
            to:
              formData.Branch.toLocaleLowerCase() === "classroom dadar, mumbai"
                ? "mumbaileads@sevenmentor.com"
                : mailId,
            contactNo,
            bannerTitle,
            mailSubject,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            timeout: 10000,
            withCredentials: true,
          }
        );

        if (response.status === 200) {
          router.push("/thank-you");
          resetForm();
        }
      } catch (error) {
        console.error(
          "API Error:",
          error.message,
          error.response?.status,
          error.response?.data
        );
        let errorMessage =
          "Oops! Something went wrong. Please try submitting the form again.";

        if (error.response && error.response.status === 403) {
          errorMessage =
            "CORS error: The server is not allowing this request. Please contact the administrator.";
        } else if (error.code === "ECONNABORTED") {
          errorMessage =
            "The request timed out. Please check your internet connection and try again.";
        } else if (error.code === "ERR_NETWORK") {
          errorMessage =
            "Network error occurred. Please check your internet connection and try again.";
        } else if (error.response) {
          errorMessage =
            error.response.data?.message ||
            "Server error occurred. Please try again later.";
        }
        setSubmissionMessage(errorMessage);
        setIsSubmitted(true);
        setIsSuccess(false);
      } finally {
        setSubmitting(false);
      }
    },
  });

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

  if (!isOpen) return null;

  const inputClassName =
    "w-full pl-[35px] text-black p-3 rounded-lg shadow-sm border focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500";

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-[9999]">
      <div className="relative flex flex-col md:flex-row mx-5 lg:mx-0 bg-white rounded-lg shadow-lg w-full max-w-[60rem] max-h-[95vh] overflow-y-scroll">
        <div className="hidden md:block w-full md:w-1/2 rounded-l-lg overflow-hidden">
          <Image
            src="/assets/formImgDesktop.webp"
            alt="Form Image"
            className="w-full h-full"
            width={500}
            height={800}
          />
        </div>

        <div className="w-full md:w-1/2 p-6 relative max-h-[80vh] md:max-h-none overflow-y-auto md:overflow-visible">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white bg-orange-500 p-1 px-2 rounded-md hover:bg-red-700 font-bold transition-colors"
          >
            X
          </button>

          <div className="md:hidden w-full mb-4 flex justify-center">
            <Image
              src="/assets/formImgMobile.webp"
              alt="Form Image Mobile"
              className="w-[300px] h-[350px] object-cover rounded-lg"
              width={300}
              height={350}
            />
          </div>

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
            <form onSubmit={formik.handleSubmit} className="space-y-4">
              {/* Loading indicator while detecting IP */}
              {isLoadingIP && (
                <div className="text-center text-sm text-gray-600 mb-3">
                  Loading...
                </div>
              )}

              {/* Name Field */}
              <div className="relative">
                <FontAwesomeIcon
                  icon={faUser}
                  className="absolute top-4 left-3 text-gray-600 z-10"
                />
                <input
                  type="text"
                  name="Name"
                  aria-label="Name"
                  placeholder="Enter Your Name"
                  className={`${inputClassName} placeholder-black placeholder-opacity-75`}
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

              {/* Email Field */}
              <div className="relative">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="absolute top-4 left-3 text-gray-600 z-10"
                />
                <input
                  type="email"
                  name="email"
                  aria-label="Email"
                  placeholder="Enter Your Email"
                  className={`${inputClassName} placeholder-black placeholder-opacity-75`}
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

              {/* Phone Number Field - NO COUNTRY CODE */}
              <div className="relative">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="absolute top-4 left-3 text-gray-600 z-10"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  aria-label="Phone Number"
                  placeholder="Enter Your Phone Number"
                  className={`${inputClassName} placeholder-black placeholder-opacity-75`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  maxLength={10}
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                  <div className="text-red-700 text-sm mt-1">
                    {formik.errors.phoneNumber}
                  </div>
                )}
              </div>

              {/* City Field */}
              <div className="relative">
                <FontAwesomeIcon
                  icon={faCity}
                  className="absolute top-4 left-3 text-gray-600 z-10"
                />
                <input
                  type="text"
                  name="city"
                  aria-label="City"
                  placeholder="Enter Your City"
                  className={`${inputClassName} placeholder-black placeholder-opacity-75`}
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

              {/* Course Name Field */}
              <div className="relative">
                <FontAwesomeIcon
                  icon={faBook}
                  className="absolute top-4 left-3 text-gray-600 z-10"
                />
                <input
                  type="text"
                  name="CourseName"
                  aria-label="Course Name"
                  placeholder="Enter Course Name"
                  className={`${inputClassName} placeholder-black placeholder-opacity-75`}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.CourseName}
                />
                {formik.touched.CourseName && formik.errors.CourseName && (
                  <div className="text-red-700 text-sm mt-1">
                    {formik.errors.CourseName}
                  </div>
                )}
              </div>

              {/* Branch Field */}
              <div className="relative">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="absolute top-4 left-3 text-gray-600 z-10"
                />
                <div className="relative">
                  <select
                    name="branch"
                    className={`${inputClassName} appearance-none`}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.branch}
                    aria-label="Branch"
                  >
                    <option className="text-lg" value="" disabled>
                      Choose Branch
                    </option>
                    <option
                      className="text-lg"
                      value="Classroom Shivaji Nagar, pune"
                    >
                      Classroom Shivaji Nagar, Pune
                    </option>
                    <option
                      className="text-lg"
                      value="Classroom Dadar, Mumbai"
                    >
                      Classroom Dadar, Mumbai
                    </option>
                    <option className="text-lg" value="Classroom Deccan, pune">
                      Classroom Deccan, Pune
                    </option>
                    <option
                      className="text-lg"
                      value="Classroom Chinchwad, Pune"
                    >
                      Classroom Chinchwad, Pune
                    </option>
                    <option
                      className="text-lg"
                      value="Classroom Hadapsar, Pune"
                    >
                      Classroom Hadapsar, Pune
                    </option>
                    <option className="text-lg" value="Classroom Akurdi, Pune">
                      Classroom Akurdi, Pune
                    </option>
                    <option
                      className="text-lg"
                      value="Classroom Anandnagar, Nanded"
                    >
                      Classroom Anandnagar, Nanded
                    </option>
                    <option className="text-lg" value="Classroom Nagpur">
                      Classroom Nagpur
                    </option>
                    <option className="text-lg" value="Online Training">
                      Online Training
                    </option>
                  </select>
                  <ChevronDown className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-600 pointer-events-none" />
                </div>
                {formik.touched.branch && formik.errors.branch && (
                  <div className="text-red-700 text-sm mt-1">
                    {formik.errors.branch}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="lg:pl-[55px] pl-[33px]">
                <button
                  type="submit"
                  aria-label="Submit"
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
  );
};

export default HomePopUpForm;
