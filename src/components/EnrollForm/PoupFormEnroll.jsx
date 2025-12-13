import React, { useEffect, useState } from "react";
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

const PoupFormEnroll = ({ mailTo, course, contactNumber, onClose }) => {
  const [initialValues, setInitialValues] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
    Course: course || "",
    Message: "",
    PageUrl: typeof window !== "undefined" ? window.location.href : "",
  });

  const [popup, setPopup] = useState({
    show: false,
    type: "",
    message: "",
  });

  const [showForm, setShowForm] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pdfDownloaded, setPdfDownloaded] = useState(false);

  // PDF URL - ADD YOUR ACTUAL PDF LINK HERE
  const pdfLink = "https://sevenmentor-website.s3.eu-north-1.amazonaws.com/uploads/pdf/comp-new-HRBP-1762950886279.pdf";

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

  // WORKING SOLUTION: Create a hidden iframe to download PDF
  const downloadPDF = () => {
    console.log("Starting PDF download from:", pdfLink);
    
    try {
      // Method 1: Create invisible iframe (Most reliable)
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.style.visibility = 'hidden';
      iframe.style.position = 'absolute';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.border = 'none';
      iframe.src = pdfLink;
      
      document.body.appendChild(iframe);
      
      // Clean up after some time
      setTimeout(() => {
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
      }, 5000);
      
      // Also trigger a click event (backup method)
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = pdfLink;
        link.download = `Course-Brochure-${course || "SevenMentor"}.pdf`;
        
        // This is crucial for iOS
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        
        // Create and dispatch click event
        const clickEvent = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true
        });
        
        link.dispatchEvent(clickEvent);
      }, 100);
      
      setPdfDownloaded(true);
      return true;
    } catch (error) {
      console.error("Download error:", error);
      return false;
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);
    setPdfDownloaded(false);
    
    try {
      const formData = {
        ...values,
        PageUrl: window.location.href,
      };

      const payload = {
        formData: formData,
        to: mailTo,
        Course: course,
        contactNo: contactNumber,
        bannerTitle: course,
        mailSubject: "New Course Enrollment",
        userEmailSubject: "Thanks for Enrolling",
      };

      // Send form data to backend
      await axios.post("http://localhost:8080/api/main-form", payload);

      // Show success message
      setPopup({
        show: true,
        type: "success",
        message: "Form submitted successfully!",
      });

      // Reset form
      resetForm();

      // CRITICAL: Download PDF IMMEDIATELY after form submission
      // This must be done in the same synchronous flow
      setTimeout(() => {
        const downloadSuccess = downloadPDF();
        
        if (downloadSuccess) {
          setPopup({
            show: true,
            type: "success",
            message: "📥 PDF download started! Check your downloads folder.",
          });
        } else {
          // Fallback: Open in new tab if download fails
          window.open(pdfLink, '_blank');
          setPopup({
            show: true,
            type: "info",
            message: "PDF opened in new tab. Please save it manually.",
          });
        }
      }, 500);

      // Don't close immediately - give time for download
      setTimeout(() => {
        if (!pdfDownloaded) {
          // If not downloaded, keep form open with download button
          setPopup({
            show: true,
            type: "info",
            message: "Click the button below to download PDF",
          });
        }
      }, 2000);

    } catch (err) {
      console.error("Form submission error:", err);
      setPopup({
        show: true,
        type: "error",
        message: "Something went wrong! Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success popup component
  const SuccessPopup = () => (
    <div className="fixed inset-0 flex items-center justify-center z-[60]">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setPopup({ ...popup, show: false })}
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
          
        
        </div>
      </div>
    </div>
  );

  // If success popup is shown, don't show the form
  if (popup.show && popup.type === "success") {
    return <SuccessPopup />;
  }

  if (!showForm) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={() => {
          setShowForm(false);
          if (onClose) onClose();
        }}
      ></div>

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
            <div className="absolute top-3 right-3 bg-white p-4 rounded-xl shadow-lg border min-w-[300px] z-50">
              <div className="flex items-center gap-3">
                <XCircle className="text-red-600 w-8 h-8" />
                <div>
                  <p className="font-medium text-gray-700">{popup.message}</p>
                </div>
              </div>
            </div>
          )}

          {/* Info Popup */}
          {popup.show && popup.type === "info" && (
            <div className="absolute top-3 right-3 bg-white p-4 rounded-xl shadow-lg border min-w-[300px] z-50">
              <div className="flex items-center gap-3">
                <Download className="text-blue-600 w-8 h-8" />
                <div>
                  <p className="font-medium text-gray-700">{popup.message}</p>
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
              {({ values, setFieldValue, isSubmitting: formikSubmitting }) => (
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
                          value={course || values.Course}
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

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || formikSubmitting}
                      className={`w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-bold shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all text-lg ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-3">
                          <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing Enrollment...
                        </span>
                      ) : (
                        "Submit & Download PDF Brochure"
                      )}
                    </button>
                    
                   
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

export default PoupFormEnroll;