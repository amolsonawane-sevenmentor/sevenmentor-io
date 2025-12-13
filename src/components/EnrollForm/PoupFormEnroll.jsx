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
} from "lucide-react";
import axios from "axios";

const PoupFormEnroll = ({ mailTo, course, contactNumber, onClose }) => {
  const [initialValues, setInitialValues] = useState({
    Name: "",
    Email: "",
    Course: course || "",
    Message: "",
    PageUrl: typeof window !== "undefined" ? window.location.href : "",
  });

  const [popup, setPopup] = useState({
    show: false,
    type: "",
    message: "",
  });

  const [showForm, setShowForm] = useState(true); // 🔥 popup state

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
    try {
      const payload = {
        formData: values,
        to: mailTo,
        Course: course,
        contactNo: contactNumber,
        bannerTitle: course,
        mailSubject: "New Course Enrollment",
        userEmailSubject: "Thanks for Enrolling",
      };

      await axios.post("http://localhost:8080/api/main-form", payload);

      setPopup({
        show: true,
        type: "success",
        message: "Form submitted successfully!",
      });

      resetForm();

      // Close form and clear popup after success
      setTimeout(() => {
        setPopup((prev) => ({ ...prev, show: false }));
        setShowForm(false);
        if (onClose) onClose();
      }, 2000);
    } catch (err) {
      setPopup({
        show: true,
        type: "error",
        message: "Something went wrong!",
      });

      // Hide popup and close form on error
      setTimeout(() => {
        setPopup((prev) => ({ ...prev, show: false }));
        setShowForm(false);
        if (onClose) onClose();
      }, 3000);
    } finally {
      setSubmitting(false);
    }
  };

  if (!showForm) return null; // 🔥 close popup

  return (
    <>
      {/* ---------------- Popup Overlay ---------------- */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"></div>

      {/* ---------------- Popup Container ---------------- */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl animate-fadeIn relative overflow-hidden">
          {/* Close Button */}
          <button
            onClick={() => {
              if (onClose) onClose();
              setShowForm(false);
            }}
            className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
          >
            <XCircle className="w-7 h-7" />
          </button>

          {/* ---------------- Header ---------------- */}
          <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white p-6 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Enroll Now</h2>
                <p className="text-sm opacity-80">
                  Fill the form and our team will contact you
                </p>
              </div>
            </div>
          </div>

          {/* ---------------- Success/Error Popup ---------------- */}
          {/* ---------------- Success/Error Popup ---------------- */}
          {popup.show && (
            <div
              className={`absolute top-0 left-0 right-0 p-4 transition-all duration-500 transform ${popup.show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
                }`}
            >
              <div
                className={`mx-auto max-w-sm rounded-xl shadow-2xl overflow-hidden border ${popup.type === "success"
                  ? "bg-white border-green-100"
                  : "bg-white border-red-100"
                  }`}
              >
                <div className={`h-1 w-full ${popup.type === "success" ? "bg-green-500" : "bg-red-500"}`} />
                <div className="p-4 flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${popup.type === "success" ? "bg-green-100" : "bg-red-100"
                      }`}
                  >
                    {popup.type === "success" ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4
                      className={`text-sm font-bold mb-1 ${popup.type === "success" ? "text-green-800" : "text-red-800"
                        }`}
                    >
                      {popup.type === "success" ? "Success!" : "Error!"}
                    </h4>
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

          {/* ---------------- Form ---------------- */}
          <div className="p-8 max-h-[80vh] overflow-y-auto">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  {/* Row 1 */}
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
                          className="w-full pl-12 pr-4 py-3 border rounded-xl"
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
                          className="w-full pl-12 pr-4 py-3 border rounded-xl"
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

                  {/* Row 2 */}
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
                          className="w-full pl-12 pr-4 py-3 border rounded-xl"
                          placeholder="Enter phone number"
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
                          className="w-full pl-12 pr-4 py-3 border rounded-xl"
                          placeholder="Enter course"
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
                      rows="4"
                      className="w-full px-4 py-3 border rounded-xl resize-none"
                      placeholder="Tell us about your goals..."
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex items-center justify-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-xl font-bold shadow-md flex items-center gap-2 ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Enrollment"
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
