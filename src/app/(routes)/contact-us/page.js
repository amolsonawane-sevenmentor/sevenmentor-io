"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Send,
  User,
  Award,
  CheckCircle,
  XCircle,
  MessageCircle,
  Building,
  Globe,
  Briefcase,
  Users,
  Target,
  Shield,
} from "lucide-react";
import axios from "axios";

export default function ContactUsPage() {
  const [popup, setPopup] = useState({
    show: false,
    type: "",
    message: "",
  });

  const initialValues = {
    Name: "",
    Email: "",
    PhoneNumber: "",
    Course: "",
    Message: "",
    PageUrl: typeof window !== "undefined" ? window.location.href : "",
  };

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

  const handleSubmit = async (values) => {
    try {
      const payload = {
        formData: values,
        to: "contact@sevenmentor.com",
        Course: values.Course,
        contactNo: "+91 84211 76876",
        bannerTitle: "Contact Us Form",
        mailSubject: "New Contact Form Submission",
        userEmailSubject: "Thanks for Contacting Us",
      };

      await axios.post("http://localhost:8080/api/main-form", payload);

      setPopup({
        show: true,
        type: "success",
        message: "Form submitted successfully! We will contact you soon.",
      });
    } catch (err) {
      console.error(err);

      setPopup({
        show: true,
        type: "error",
        message: "Something went wrong! Please try again.",
      });
    }

    setTimeout(() => {
      setPopup((prev) => ({ ...prev, show: false }));
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {popup.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 animate-fadeIn">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-md animate-slideUp text-center">
            {popup.type === "success" ? (
              <CheckCircle className="text-green-600 w-16 h-16 mx-auto mb-4" />
            ) : (
              <XCircle className="text-red-600 w-16 h-16 mx-auto mb-4" />
            )}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {popup.message}
            </h2>
          </div>
        </div>
      )}

      <div className="relative bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 px-5 py-2 rounded-full mb-6">
              <MessageSquare className="w-5 h-5 text-orange-400" />
              <span className="text-sm font-semibold text-orange-300">
                Get In Touch
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Contact Us
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Have questions about our cyber security training programs? We're
              here to help you start your journey to becoming a security
              professional.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Office no. 101 & part office no.1,
              <br />
              Civic Centre, MMGS Marg,
              <br />
              Dadar East, Dadar, Mumbai,
              <br />
              <span className="text-orange-600 font-semibold">
                Maharashtra 400014
              </span>
            </p>
            {/* <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors"
            >
              <Globe className="w-4 h-4" />
              Get Directions
            </a> */}
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Call Us</h3>
            <p className="text-gray-700 mb-4">
              Speak with our admission counselors and get all your questions
              answered.
            </p>
            <a
              href="tel:02248904395"
              className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors block mb-2"
            >
             022-48904395
            </a>
            
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              WhatsApp Us
            </h3>
            <p className="text-gray-700 mb-4">
              Quick response on WhatsApp for instant queries and course details.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=+918421176876&text=Hi+I+am+looking+for+Training"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors block mb-2"
            >
              +91 8421176876
            </a>
           
          </div>
        </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <section className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Send us a Message
                  </h2>
                  <p className="text-sm text-gray-600">
                    Fill the form and our team will contact you within 24 hours
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
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Field
                        name="Name"
                        type="text"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <ErrorMessage
                      name="Name"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>


                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Field
                          name="Email"
                          type="email"
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <ErrorMessage
                        name="Email"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>


                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Field
                          name="PhoneNumber"
                          type="tel"
                          className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                          placeholder="10-digit number"
                        />
                      </div>
                      <ErrorMessage
                        name="PhoneNumber"
                        component="p"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>


                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Course of Interest *
                    </label>
                    <div className="relative">
                      <Award className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Field
                        as="select"
                        name="Course"
                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl bg-white outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all appearance-none"
                      >
                        <option value="">Select a Course</option>
                        <option value="Cyber Security Analyst">
                          Cyber Security Analyst
                        </option>
                        <option value="Ethical Hacking">
                          Ethical Hacking (CEH)
                        </option>
                        <option value="WAPT">
                          Web Application Penetration Testing
                        </option>
                        <option value="SOC Training">SOC Training</option>
                        <option value="CHFI">Computer Hacking Forensics</option>
                        <option value="Network Security">
                          Network Security
                        </option>
                      </Field>
                    </div>
                    <ErrorMessage
                      name="Course"
                      component="p"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>


                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message (Optional)
                    </label>
                    <Field
                      as="textarea"
                      name="Message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none transition-all"
                      placeholder="Tell us about your background and goals..."
                    />
                  </div>


                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </Form>
              </Formik>
            </div>
          </section>


          <div className="flex flex-col gap-8">
            <section className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 rounded-2xl shadow-2xl p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">
                    Why Choose SevenMentor?
                  </h3>
                </div>

                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">Expert Trainers</h4>
                        <p className="text-orange-50 leading-relaxed">
                          Learn from industry professionals with 8+ years of
                          experience in cybersecurity and IT training
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">
                          100% Placement Support
                        </h4>
                        <p className="text-orange-50 leading-relaxed">
                          Dedicated placement team with resume building, interview prep, and job assistance
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">
                          Hands-on Training
                        </h4>
                        <p className="text-orange-50 leading-relaxed">
                          Practice with real tools, live labs, and security platforms used by industry leaders
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-xl mb-2">
                          2000+ Students Trained
                        </h4>
                        <p className="text-orange-50 leading-relaxed">
                          Join our thriving community of successful security professionals across India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>



        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl shadow-xl overflow-hidden p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 2000+ students who have successfully launched their careers with SevenMentor
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:02248904395"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=+918421176876&text=Hi+I+am+looking+for+Training"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 SevenMentor - Training Institute
            Mumbai. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
