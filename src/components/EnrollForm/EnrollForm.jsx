import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  User,
  Mail,
  Phone,
  Award,
  MessageSquare,
  CheckCircle,
  XCircle,
} from "lucide-react";
import axios from "axios";

const EnrollForm = ({ mailTo, course, contactNumber }) => {
  const [initialValues, setInitialValues] = useState({
    Name: "",
    Email: "",
    Course: "",
    Message: "",
    PageUrl: typeof window !== "undefined" ? window.location.href : "",
  });

  // Popup state
  const [popup, setPopup] = useState({
    show: false,
    type: "", // success | error
    message: "",
  });

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
    Course: Yup.string().required("Please select a course"),
    Message: Yup.string(),
  });

  const handleSubmit = async (values, { resetForm }) => {
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

      await axios.post("/api/main-form", payload);

      // Show success popup
      setPopup({
        show: true,
        type: "success",
        message: "Form submitted successfully!",
      });

      resetForm();
    } catch (err) {
      console.error(err);

      // Show error popup
      setPopup({
        show: true,
        type: "error",
        message: "Something went wrong!",
      });
    }

    // Auto-hide popup after 3 seconds
    setTimeout(() => {
      setPopup((prev) => ({ ...prev, show: false }));
    }, 3000);
  };

  return (
    <>
      {/* ---------------- Popup Modal ---------------- */}
      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-sm animate-fadeIn text-center">
            {popup.type === "success" ? (
              <CheckCircle className="text-green-600 w-14 h-14 mx-auto mb-3" />
            ) : (
              <XCircle className="text-red-600 w-14 h-14 mx-auto mb-3" />
            )}

            <h2 className="text-xl font-semibold text-gray-800">
              {popup.message}
            </h2>
          </div>
        </div>
      )}

      {/* ---------------- Form Section ---------------- */}
      <section
        id="enroll"
        className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
      >
        <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Enroll Now</h2>
              <p className="text-sm text-gray-600">
                Fill the form and our team will contact you
              </p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-6">
              {/* Row 1 */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Field
                      name="Name"
                      type="text"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Field
                      name="Email"
                      type="email"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Field
                      name="PhoneNumber"
                      type="tel"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
                      placeholder="Enter your phone number"
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Course *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Field
                      name="Course"
                      type="text"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none"
                      placeholder="Enter Course"
                    />
                  </div>
                  <ErrorMessage
                    name="Name"
                    component="p"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                {/* <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Course *</label>
                  <div className="relative">
                    <Award className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Field
                      as="select"
                      name="Course"
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl bg-white outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">Select a Course</option>
                      <option value="Cyber Security">Cyber Security</option>
                      <option value="Ethical Hacking">Ethical Hacking</option>
                      <option value="Network Security">Network Security</option>
                      <option value="CEH Certification">CEH Certification</option>
                    </Field>
                  </div>
                  <ErrorMessage name="Course" component="p" className="text-red-500 text-sm mt-1" />
                </div> */}
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <Field
                  as="textarea"
                  name="Message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none resize-none"
                  placeholder="Tell us about your background and goals..."
                />
              </div>

              {/* Submit */}
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:scale-105 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all"
                >
                  Submit Enrollment
                </button>
                <p className="text-sm text-gray-600">
                  Our team will contact you within 24 hours
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </section>
    </>
  );
};

export default EnrollForm;
