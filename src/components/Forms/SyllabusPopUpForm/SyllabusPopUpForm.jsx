"use client";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faUser,
  faCity,
  faCheckCircle,
  faTimesCircle,
  faBuilding,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useRouter } from "next/navigation";

// Create a Portal Component to render modals
const Portal = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Create a div for our portal if it doesn't exist
  useEffect(() => {
    if (!document.getElementById("syllabus-portal-root")) {
      const portalRoot = document.createElement("div");
      portalRoot.id = "syllabus-portal-root";
      portalRoot.style.position = "fixed";
      portalRoot.style.top = "0";
      portalRoot.style.left = "0";
      portalRoot.style.width = "100%";
      portalRoot.style.height = "100%";
      portalRoot.style.zIndex = "999999999"; // Extremely high z-index
      portalRoot.style.pointerEvents = "none"; // Let clicks pass through by default
      document.body.appendChild(portalRoot);
    }
  }, []);

  // SSR check
  if (!mounted) return null;

  const portalRoot = document.getElementById("syllabus-portal-root");
  if (!portalRoot) return null;

  return createPortal(children, portalRoot);
};

const SyllabusPopupForm = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  courseType,
  mailId,
  pdfUrl,
  contactNo,
  bannerTitle,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showStatusPopup, setShowStatusPopup] = useState(false);
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
      setIsLoading(false);
      setShowStatusPopup(false);
    }
  }, [isOpen]);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling of the main page when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      // Clean up when component unmounts or modal closes
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const validationSchema = Yup.object({
    Name: Yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
    email: Yup.string().required("Email is required").email("Invalid email"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
    city: Yup.string().required("Please select a city"),
    branch: Yup.string().required("Please select a branch"),
  });

  // Function to handle PDF download
  const downloadPdf = async () => {
    try {
      if (!pdfUrl) {
        console.error("PDF URL is missing");
        return;
      }

      // Fetch the PDF as a Blob
      const response = await fetch(pdfUrl);
      if (!response.ok) throw new Error("Failed to fetch PDF");

      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      // Create a download link
      const downloadLink = document.createElement("a");
      downloadLink.href = blobUrl;
      downloadLink.download = pdfUrl.split("/").pop() || "syllabus.pdf"; // Set filename
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      // Revoke blob URL after download
      setTimeout(() => URL.revokeObjectURL(blobUrl), 100);

      console.log("PDF download initiated:", pdfUrl);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  const formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      phone: "",
      city: "",
      branch: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      setIsLoading(true);
      let success = false;
      let message = "";

      try {
        // Ensure reCAPTCHA is ready
        const token = await window.grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          { action: "submit" }
        );
        // Simplified payload - NO country, NO country code, NO std code
        const submissionData = {
          syllabusFormData: {
            Name: values.Name,
            Email: values.email,
            PhoneNumber: values.phone, // Just the phone number, no country code
            City: values.city,
            Branch: values.branch,
            CourseName: bannerTitle || courseType || "Not Specified",
            PageUrl: pageUrl,
            IP_Address: userIP, // Only IP address included
          },
          CourseName: courseType,
          To: mailId,
          token,
          contactNo,
          bannerTitle,
          trainerName: "Kuldeep Singh",
        };

        const response = await axios.post("/api/syllabus-popup", submissionData, {
          timeout: 30000,
        });

        if (response.status === 200) {
          message = "Your request has been Submitted successfully. Our team will get back to you shortly !";
          success = true;

          // Auto close popup after 3 seconds and trigger download
          router.push("/thank-you");
          setTimeout(() => {
            // Trigger the PDF download
            downloadPdf();
          }, 3000);

          // Reset form
          resetForm();
        } else {
          console.error("Form submission failed:", response.data);
          message = response.data.message || "An error occurred while submitting the form.";
          success = false;
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        if (error.code === "ECONNABORTED") {
          message = "Request timed out. Please try again.";
        } else {
          message = "An unexpected error occurred. Please try again.";
        }
        success = false;
      } finally {
        setIsSuccess(success);
        setSubmissionMessage(message);
        setIsSubmitted(true);
        setSubmitting(false);
        setIsLoading(false);

        if (!success) {
          setShowStatusPopup(true);
          // Auto close error popup after 3 seconds
          setTimeout(() => {
            setShowStatusPopup(false);
          }, 3000);
        }
      }
    },
  });

  if (!isOpen) return null;

  return (
    <Portal>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          pointerEvents: "auto",
        }}
      />

      {/* Modal container */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          padding: "1rem",
          overflowY: "auto",
        }}
      >
        {/* Actual form */}
        <div
          className="relative rounded-xl bg-white shadow-lg"
          style={{
            minHeight: "350px",
            width: "90%",
            maxWidth: "500px",
            maxHeight: "calc(100vh - 2rem)",
            pointerEvents: "auto",
            overflowY: "auto",
            margin: "auto",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute text-sm top-2 right-2 text-white bg-orange-500 p-1 px-2 rounded-md hover:bg-red-700 font-bold transition-colors z-10"
          >
            X
          </button>

          <h3 className="text-2xl font-bold pt-3 px-8 text-center mb-0 text-orange-600">{title}</h3>

          <form className="p-6" onSubmit={formik.handleSubmit}>
            {/* Loading indicator while detecting IP */}
            {isLoadingIP && (
              <div className="text-center text-sm text-gray-600 mb-3">Loading...</div>
            )}

            <div className="relative mb-4">
              <FontAwesomeIcon
                icon={faUser}
                className="absolute top-4 left-3 text-gray-600"
                style={{ zIndex: 10 }}
              />
              <input
                type="text"
                name="Name"
                aria-label="Name"
                placeholder="Enter Your Name"
                className="w-full !bg-white !pl-[35px] !text-black p-3 rounded-lg shadow-sm ring-1 ring-orange-500 focus:ring-orange-500 focus:border-orange-500 border-2 border-transparent border-orange-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Name}
              />
              {formik.touched.Name && formik.errors.Name && (
                <div className="text-red-700 text-sm mt-1">{formik.errors.Name}</div>
              )}
            </div>

            <div className="relative mb-4">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="absolute top-4 left-3 text-gray-600"
                style={{ zIndex: 10 }}
              />
              <input
                type="email"
                name="email"
                aria-label="Email"
                placeholder="Enter Your Email"
                className="w-full !bg-white !pl-[35px] !text-black p-3 rounded-lg shadow-sm ring-1 ring-orange-500 focus:ring-orange-500 focus:border-orange-500 border-2 border-transparent border-orange-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="text-red-700 text-sm mt-1">{formik.errors.email}</div>
              )}
            </div>

            <div className="relative mb-4">
              <FontAwesomeIcon
                icon={faPhone}
                className="absolute top-4 left-3 text-gray-600"
                style={{ zIndex: 10 }}
              />
              <input
                type="tel"
                name="phone"
                aria-label="Phone"
                placeholder="Enter Your Phone Number"
                className="w-full !bg-white !pl-[35px] !text-black p-3 rounded-lg shadow-sm ring-1 ring-orange-500 focus:ring-orange-500 focus:border-orange-500 border-2 border-transparent border-orange-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
                maxLength={10}
              />
              {formik.touched.phone && formik.errors.phone && (
                <div className="text-red-700 text-sm mt-1">{formik.errors.phone}</div>
              )}
            </div>

            <div className="relative mb-4">
              <FontAwesomeIcon
                icon={faCity}
                className="absolute top-4 left-3 text-gray-600"
                style={{ zIndex: 10 }}
              />
              <input
                type="text"
                name="city"
                aria-label="City"
                placeholder="Enter Your City"
                className="w-full !bg-white !pl-[35px] !text-black p-3 rounded-lg shadow-sm ring-1 ring-orange-500 focus:ring-orange-500 focus:border-orange-500 border-2 border-transparent border-orange-500"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city}
              />
              {formik.touched.city && formik.errors.city && (
                <div className="text-red-700 text-sm mt-1">{formik.errors.city}</div>
              )}
            </div>

            <div className="relative mb-4">
              <FontAwesomeIcon
                icon={faBuilding}
                className="absolute top-4 left-3 text-gray-600"
                style={{ zIndex: 10 }}
              />
              <FontAwesomeIcon
                icon={faChevronDown}
                className="absolute top-4 right-3 text-gray-600 pointer-events-none"
                style={{ zIndex: 10 }}
              />
              <select
                name="branch"
                className="w-full !bg-white !pl-[35px] !pr-[35px] !text-black p-3 rounded-lg shadow-sm ring-1 ring-orange-500 focus:ring-orange-500 focus:border-orange-500 border-2 border-transparent border-orange-500 appearance-none"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.branch}
                aria-label="Branch"
              >
                <option className="text-lg" value="" disabled>
                  Choose Branch
                </option>
                <option className="text-lg" value="Classroom Shivaji Nagar, pune">
                  Classroom Shivaji Nagar, Pune
                </option>
                <option className="text-lg" value="Classroom Dadar, Mumbai">
                  Classroom Dadar, Mumbai
                </option>
                <option className="text-lg" value="Classroom Deccan, pune">
                  Classroom Deccan, Pune
                </option>
                <option className="text-lg" value="Classroom Chinchwad, pune">
                  Classroom Chinchwad, Pune
                </option>
                <option className="text-lg" value="Classroom Hadapsar, pune">
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
              </select>
              {formik.touched.branch && formik.errors.branch && (
                <div className="text-red-700 text-sm mt-1">{formik.errors.branch}</div>
              )}
            </div>

            <div className="flex items-center justify-center mt-5">
              <button
                disabled={formik.isSubmitting || isLoading || isLoadingIP}
                type="submit"
                className="relative w-full lg:w-[250px] bg-gradient-to-r from-orange-700 to-orange-500 text-white font-bold py-3 px-4 rounded-full overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading
                  ? "Submitting..."
                  : isLoadingIP
                  ? "Loading..."
                  : "Download Syllabus"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Status popup */}
      {showStatusPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(4px)",
            pointerEvents: "auto",
          }}
        >
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full text-center relative">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div
                className={`w-12 h-12 ${
                  isSuccess ? "bg-green-100" : "bg-red-100"
                } rounded-full flex items-center justify-center`}
              >
                <FontAwesomeIcon
                  icon={isSuccess ? faCheckCircle : faTimesCircle}
                  className={`h-8 w-8 ${isSuccess ? "text-green-600" : "text-red-600"}`}
                />
              </div>
              <h3 className={`text-2xl font-bold ${isSuccess ? "text-gray-800" : "text-red-600"}`}>
                {isSuccess ? "Successful!" : "Failed!"}
              </h3>
              <p className={`text-center ${isSuccess ? "text-gray-600" : "text-red-500"}`}>
                {submissionMessage}
              </p>

              {isSuccess && <p className="text-sm text-green-600 mt-2">Your syllabus is downloading automatically...</p>}

              <button
                onClick={() => {
                  setShowStatusPopup(false);
                  if (isSuccess) {
                    // Ensure download happens if user closes popup manually
                    downloadPdf();
                  }
                }}
                className={`mt-2 ${
                  isSuccess ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"
                } text-white font-medium py-2 px-8 rounded-md transition`}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </Portal>
  );
};

export default SyllabusPopupForm;
