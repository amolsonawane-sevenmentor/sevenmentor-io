import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle,
  XCircle,
  Download,
} from "lucide-react";
import axios from "axios";

const DownloadPopupForm = ({ mailTo, course, contactNumber, onClose }) => {
  // Define your PDF link - IMPORTANT: Add your actual PDF URL here
  const pdfLink = "https://sevenmentor-website.s3.eu-north-1.amazonaws.com/uploads/pdf/comp-new-HR-Audit_11zon-1762952119864.pdf";

  const initialValues = {
    Name: "",
    Email: "",
    PhoneNumber: "",
    Course: course || "",
    Message: "",
    PageUrl: typeof window !== "undefined" ? window.location.href : "",
  };

  const [popup, setPopup] = useState({
    show: false,
    type: "",
    message: "",
  });

  const [showForm, setShowForm] = useState(true);

  const validationSchema = Yup.object({
    Name: Yup.string()
      .trim()
      .min(3, "Name must be at least 3 characters")
      .required("Full Name is required"),
    Email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    PhoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
      .required("Phone Number is required"),
    Course: Yup.string().required("Please enter course"),
    Message: Yup.string(),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    console.log("Form submitted with values:", values);

    try {
      const payload = {
        formData: {
          ...values,
          PageUrl: window.location.href,
        },
        to: mailTo,
        Course: course,
        contactNo: contactNumber,
        bannerTitle: course,
        mailSubject: "New Course Enrollment",
        userEmailSubject: "Thanks for Enrolling",
      };

      console.log("Sending API request with payload:", payload);

      // Use relative path for API endpoint instead of localhost
      await axios.post("http://localhost:8080/api/main-form", payload);

      console.log("API call successful");

      // Download PDF AFTER successful form submission
      downloadPDF();

      // Show success popup
      setPopup({
        show: true,
        type: "success",
        message: "Form submitted successfully! PDF is downloading...",
      });

      resetForm();

      // Close modal after short delay
      setTimeout(() => {
        if (onClose) onClose();
      }, 2000);

    } catch (err) {
      console.error("Form submission error:", err);
      console.error("Error response:", err.response?.data);

      setPopup({
        show: true,
        type: "error",
        message: err.response?.data?.message || "Something went wrong! Please try again.",
      });

      // Auto-close error popup and form after 3 seconds
      setTimeout(() => {
        setPopup((prev) => ({ ...prev, show: false }));
        setShowForm(false);
        if (onClose) onClose();
      }, 3000);
    } finally {
      setSubmitting(false);
    }
  };

  const downloadPDF = () => {
    if (!pdfLink) {
      console.error("PDF link is not defined!");
      return;
    }

    try {
      const link = document.createElement("a");
      link.href = pdfLink;
      link.download = `Course-Brochure-${course || "SevenMentor"}.pdf`;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      // Append to body
      document.body.appendChild(link);

      // Trigger download
      link.click();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(link);
      }, 100);

      console.log("PDF download triggered");
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };

  // Success popup component
  const SuccessPopup = () => (
    <div className="fixed inset-0 flex items-center justify-center z-[60]">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => {
          setPopup({ ...popup, show: false });
          if (onClose) onClose();
        }}
      ></div>
      <div className="relative bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-2">
            Enrollment Successful! 🎉
          </h3>

          <p className="text-gray-600 mb-6">
            Thank you for enrolling in {course || "our course"}.
            Our team will contact you within 24 hours.
          </p>

          <p className="text-sm text-green-600 mb-6">
            ✅ PDF brochure download started
          </p>

          <button
            onClick={() => {
              setPopup({ ...popup, show: false });
              if (onClose) onClose();
            }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  // If success popup is shown, return it
  if (popup.show && popup.type === "success") {
    return <SuccessPopup />;
  }

  if (!showForm) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={() => {
          setShowForm(false);
          if (onClose) onClose();
        }}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl animate-fadeIn relative overflow-hidden max-h-[90vh]">
          {/* Close Button */}
          <button
            onClick={() => {
              setShowForm(false);
              if (onClose) onClose();
            }}
            className="absolute top-4 right-4 text-gray-600 hover:text-red-500 z-10 bg-white rounded-full p-1 shadow-md"
          >
            <XCircle className="w-7 h-7" />
          </button>

          {/* Header */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-6 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Enroll Now</h2>
                <p className="text-sm opacity-90">
                  Fill the form & get instant PDF download
                </p>
              </div>
            </div>

          </div>

          {/* Error Popup */}
          {popup.show && popup.type === "error" && (
            <div
              className={`absolute top-0 left-0 right-0 p-4 transition-all duration-500 transform ${popup.show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                }`}
            >
              <div className="mx-auto max-w-sm rounded-xl shadow-2xl overflow-hidden border bg-white border-red-100">
                <div className="h-1 w-full bg-red-500" />
                <div className="p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 bg-red-100">
                    <XCircle className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold mb-1 text-red-800">Error!</h4>
                    <p className="text-sm text-gray-600">{popup.message}</p>
                  </div>
                  <button
                    onClick={() => setPopup((prev) => ({ ...prev, show: false }))}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <XCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Form */}
          <div className="p-8 overflow-y-auto max-h-[60vh]">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              enableReinitialize
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Field
                          name="Name"
                          type="text"
                          className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <ErrorMessage
                        name="Name"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Field
                          name="Email"
                          type="email"
                          className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                          placeholder="Enter your email"
                        />
                      </div>
                      <ErrorMessage
                        name="Email"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Field
                          name="PhoneNumber"
                          type="tel"
                          className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                          placeholder="Enter 10-digit phone number"
                          maxLength="10"
                          onInput={(e) => {
                            e.target.value = e.target.value.replace(/[^0-9]/g, '');
                          }}
                        />
                      </div>
                      <ErrorMessage
                        name="PhoneNumber"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    {/* Course */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Course *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <Field
                          name="Course"
                          type="text"
                          className="w-full pl-12 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none bg-gray-50"
                          readOnly={!!course}
                        />
                      </div>
                      <ErrorMessage
                        name="Course"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Message (Optional)
                    </label>
                    <Field
                      as="textarea"
                      name="Message"
                      rows="3"
                      className="w-full px-4 py-3 border rounded-xl resize-none focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                      placeholder="Any specific requirements or questions?"
                    />
                  </div>

                  {/* Debug info (remove in production) */}

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-bold shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all text-lg ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-3">
                          <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Downloading Syllabus...
                        </span>
                      ) : (
                        "Submit & Download PDF Brochure"
                      )}
                    </button>

                    <p className="text-center text-sm text-gray-600 mt-4">
                      By submitting, you'll receive the course brochure instantly
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default DownloadPopupForm;