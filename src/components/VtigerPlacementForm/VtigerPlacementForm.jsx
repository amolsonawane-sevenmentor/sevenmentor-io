"use client"

import { useState, useEffect } from "react"

const VtigerPlacementForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [notification, setNotification] = useState(null)

  const [formData, setFormData] = useState({
    publicid: "205bc381dcbb0e45fca0d0a038bee2c0",
    urlencodeenable: "1",
    name: "Placement",
    __vtCurrency: "1",
    fld_vtcmstudentname: "",
    fld_studentemail: "",
    fld_department_2375: "",
    cf_vtcmstudent_studentphonenumber: "",
    cf_vtcmstudent_technologieswhichyouhavelearned: "",
    cf_vtcmstudent_addresswithpincode: "",
    cf_2494: "",
    cf_2496: "",
    cf_vtcmstudent_workexperienceifany: "",
    cf_vtcmstudent_course1: "",
    cf_vtcmstudent_course3: "",
    cf_vtcmstudent_onetimeplacementfee: "",
    cf_vtcmstudent_studentresume: "",
    cf_vtcmstudent_selectlocation: "",
    cf_2498: "",
    cf_2500: "",
    fld_course_2377: "",
    file_1_1: null,
  })

  // Auto-hide notification after 5 seconds
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [notification])

  // Show notification function
  const showNotification = (message, type = "success") => {
    setNotification({ message, type })
  }

  // Form field options
  const departmentOptions = [
    { value: "Networking", label: "Networking" },
    { value: "Software Development", label: "Software Development" },
    { value: "Data Science", label: "Data Science" },
    { value: "Digital Marketing", label: "Digital Marketing" },
    { value: "Testing", label: "Testing" },
  ]

  const courseOptions = [
    { value: "Web Based (MERN)", label: "Web Based (MERN)" },
    { value: "Java Full Stack", label: "Java Full Stack" },
    { value: "Java Full Stack with Spring Boot", label: "Java Full Stack with Spring Boot" },
    { value: ".Net Full Stack", label: ".Net Full Stack" },
    { value: "Python Full Stack", label: "Python Full Stack" },
    { value: "Software Development", label: "Software Development" },
    { value: "Software Testing", label: "Software Testing" },
    { value: "Software Testing(UI)", label: "Software Testing(UI)" },
    { value: "Graphics Design", label: "Graphics Design" },
    {
      value: "Java Full Stack with microservices program (AWS)",
      label: "Java Full Stack with microservices program (AWS)",
    },
    {
      value: "Java Full Stack with microservices program (GCP)",
      label: "Java Full Stack with microservices program (GCP)",
    },
    {
      value: "Python Full Stack with microservices program (AWS)",
      label: "Python Full Stack with microservices program (AWS)",
    },
    {
      value: "Python Full Stack with microservices program (GCP)",
      label: "Python Full Stack with microservices program (GCP)",
    },
    {
      value: "Mobile App Development - Android & iOS (Ionic)",
      label: "Mobile App Development - Android & iOS (Ionic)",
    },
    { value: "Data Science", label: "Data Science" },
    { value: "Data Analytics", label: "Data Analytics" },
    { value: "AI/ML", label: "AI/ML" },
    { value: "Selenium", label: "Selenium" },
    { value: "Postman", label: "Postman" },
    { value: "Business Analyst", label: "Business Analyst" },
    { value: "Digital Marketing", label: "Digital Marketing" },
    { value: "Web Designing", label: "Web Designing" },
    { value: "SEO", label: "SEO" },
    { value: "SEM", label: "SEM" },
    { value: "PHP", label: "PHP" },
    { value: "Core Java", label: "Core Java" },
    { value: "R Programming", label: "R Programming" },
    { value: "Machine learning", label: "Machine learning" },
    { value: "Artificial Intelligence Deep learning", label: "Artificial Intelligence Deep learning" },
    { value: "Linux/Unix Admin", label: "Linux/Unix Admin" },
    { value: "DevOps", label: "DevOps" },
    { value: ".NET Developer (UI Testing)", label: ".NET Developer (UI Testing)" },
    { value: ".NET Developer (API Testing)", label: ".NET Developer (API Testing)" },
    { value: "Sales Development (SDR)", label: "Sales Development (SDR)" },
    { value: "CCNA", label: "CCNA" },
    { value: "CCNP", label: "CCNP" },
    { value: "AWS", label: "AWS" },
    { value: "Azure", label: "Azure" },
    { value: "GCP", label: "GCP" },
    { value: "Devops", label: "Devops" },
    { value: "Selenium & Jmeter", label: "Selenium & Jmeter" },
    { value: "Software Ethical Hacker", label: "Software Ethical Hacker" },
    { value: "Web Application Penetration Testing", label: "Web Application Penetration Testing" },
    { value: "SOC Security Operation analyst", label: "SOC Security Operation analyst" },
    { value: "Vulnerability Assessment", label: "Vulnerability Assessment" },
    { value: "Cloud Security", label: "Cloud Security" },
    { value: "Software Testing 1", label: "Software Testing 1" },
    { value: "Software Web Development", label: "Software Web Development" },
    { value: "Cyber Security and Ethical Hacking", label: "Cyber Security and Ethical Hacking" },
    { value: "Cyber Security and Social Program (AWS)", label: "Cyber Security and Social Program (AWS)" },
    { value: "Cyber Security Analyst (AWS)", label: "Cyber Security Analyst (AWS)" },
    { value: "Cyber Security and Social Program (GCP)", label: "Cyber Security and Social Program (GCP)" },
    { value: ".Net 2", label: ".Net 2" },
    { value: "Ethical Hacking", label: "Ethical Hacking" },
    { value: "Salesforce", label: "Salesforce" },
    { value: "Salesforce LWC (Oriented)", label: "Salesforce LWC (Oriented)" },
    { value: "Workday", label: "Workday" },
    { value: "ServiceNow", label: "ServiceNow" },
    { value: "PeopleSoft", label: "PeopleSoft" },
    { value: "SAP HANA", label: "SAP HANA" },
    { value: "SAP ABAP", label: "SAP ABAP" },
    { value: "SAP MM", label: "SAP MM" },
    { value: "SAP SD", label: "SAP SD" },
    { value: "SAP FICO", label: "SAP FICO" },
    { value: "SAP PM", label: "SAP PM" },
    { value: "Master Oracle", label: "Master Oracle" },
    { value: "Oracle DBA", label: "Oracle DBA" },
    { value: "German language", label: "German language" },
    { value: "French language", label: "French language" },
    { value: "IELTS", label: "IELTS" },
    { value: "Spoken English", label: "Spoken English" },
    { value: "HR Analytics", label: "HR Analytics" },
    { value: "HR", label: "HR" },
    { value: "Payroll", label: "Payroll" },
    { value: "SAP HCM", label: "SAP HCM" },
    { value: "SPSS", label: "SPSS" },
    { value: "SAS", label: "SAS" },
    { value: "Stata", label: "Stata" },
    { value: "PTE", label: "PTE" },
    { value: "OET", label: "OET" },
    { value: "Interior Designing", label: "Interior Designing" },
    { value: "AutoCAD", label: "AutoCAD" },
    { value: "Catia", label: "Catia" },
    { value: "SolidWorks", label: "SolidWorks" },
    { value: "Inventor", label: "Inventor" },
    { value: "3ds Max", label: "3ds Max" },
    { value: "Maya Max", label: "Maya Max" },
    { value: "Video Editing", label: "Video Editing" },
    { value: "VFX", label: "VFX" },
    { value: "Salesforce Lightning", label: "Salesforce Lightning" },
    { value: "LTI Testing Salesforce", label: "LTI Testing Salesforce" },
    { value: "Performance Testing", label: "Performance Testing" },
    { value: "Jira Work", label: "Jira Work" },
    { value: "Agile Testing", label: "Agile Testing" },
    { value: "Manual Testing", label: "Manual Testing" },
    { value: "API Testing", label: "API Testing" },
    {
      value: "2 months Sales Course in Abroad and direct Placements",
      label: "2 months Sales Course in Abroad and direct Placements",
    },
    {
      value: "3 months Sales Course in Abroad and direct Placements",
      label: "3 months Sales Course in Abroad and direct Placements",
    },
    { value: "PHP Training", label: "PHP Training" },
    { value: "Android Development", label: "Android Development" },
    { value: "Java Core 1", label: "Java Core 1" },
    { value: "Java Swing", label: "Java Swing" },
    { value: "Advance Java", label: "Advance Java" },
    { value: "Front End web", label: "Front End web" },
    { value: "Angular", label: "Angular" },
    { value: "React", label: "React" },
    { value: "Front end", label: "Front end" },
    { value: "Back End", label: "Back End" },
    { value: "Full Stack Java", label: "Full Stack Java" },
    { value: "English Medium", label: "English Medium" },
    { value: "Hindi", label: "Hindi" },
    { value: "Marathi", label: "Marathi" },
    { value: "Data Analyst", label: "Data Analyst" },
    { value: "Power BI", label: "Power BI" },
    { value: "Tableau", label: "Tableau" },
    { value: "LINUX DEVOPS", label: "LINUX DEVOPS" },
    { value: "Salesforce CPQ", label: "Salesforce CPQ" },
    { value: "Mulesoft", label: "Mulesoft" },
    { value: "Sales CVs", label: "Sales CVs" },
  ]

  const placementFeeOptions = [
    { value: "Yes - Will Pay", label: "Yes - Will Pay" },
    { value: "No - Wont Pay", label: "No - Wont Pay" },
  ]

  const locationOptions = [
    { value: "Shivaji Nagar", label: "Shivaji Nagar" },
    { value: "Chinchwad", label: "Chinchwad" },
    { value: "Deccan IEC", label: "Deccan IEC" },
    { value: "Hadapsar", label: "Hadapsar" },
  ]

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fld_vtcmstudentname.trim()) {
      newErrors.fld_vtcmstudentname = "Student Name is required"
    }

    if (!formData.fld_studentemail.trim()) {
      newErrors.fld_studentemail = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.fld_studentemail)) {
      newErrors.fld_studentemail = "Invalid email format"
    }

    if (!formData.fld_department_2375) {
      newErrors.fld_department_2375 = "Department is required"
    }

    if (!formData.cf_vtcmstudent_studentphonenumber.trim()) {
      newErrors.cf_vtcmstudent_studentphonenumber = "Phone number is required"
    } else if (!/^[0-9]{10,15}$/.test(formData.cf_vtcmstudent_studentphonenumber)) {
      newErrors.cf_vtcmstudent_studentphonenumber = "Phone number must be 10-15 digits"
    }

    if (!formData.cf_vtcmstudent_addresswithpincode.trim()) {
      newErrors.cf_vtcmstudent_addresswithpincode = "Address is required"
    }

    if (!formData.cf_2494.trim()) {
      newErrors.cf_2494 = "10th details are required"
    }

    if (!formData.cf_2496.trim()) {
      newErrors.cf_2496 = "12th details are required"
    }

    if (!formData.cf_vtcmstudent_workexperienceifany.trim()) {
      newErrors.cf_vtcmstudent_workexperienceifany = "Work experience is required"
    }

    if (!formData.cf_vtcmstudent_course1) {
      newErrors.cf_vtcmstudent_course1 = "Course is required"
    }

    if (!formData.cf_vtcmstudent_onetimeplacementfee) {
      newErrors.cf_vtcmstudent_onetimeplacementfee = "Placement fee option is required"
    }

    if (!formData.cf_vtcmstudent_selectlocation) {
      newErrors.cf_vtcmstudent_selectlocation = "Location is required"
    }

    if (!formData.cf_2498.trim()) {
      newErrors.cf_2498 = "Graduation details are required"
    }

    if (!formData.fld_course_2377) {
      newErrors.fld_course_2377 = "Course is required"
    }

    if (!formData.file_1_1) {
      newErrors.file_1_1 = "CV is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleFileChange = (event) => {
    const file = event.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, file_1_1: file }))
    if (errors.file_1_1) {
      setErrors((prev) => ({ ...prev, file_1_1: "" }))
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!validateForm()) {
      showNotification("Please fill in all required fields correctly.", "error")
      return
    }

    setIsSubmitting(true)

    try {
      const submitData = new FormData()

      // Append all form values to FormData
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "file_1_1" && value instanceof File) {
          submitData.append(key, value)
        } else if (key !== "file_1_1") {
          submitData.append(key, String(value))
        }
      })

      // Submit to your Next.js API proxy route
      const response = await fetch("/api/vtiger-proxy", {
        method: "POST",
        body: submitData,
      })

      const result = await response.json() // Parse the JSON response from your proxy

      if (result.success) {
        // Check the 'success' property from your proxy's response
        showNotification("🎉 Form submitted successfully to Vtiger! Thank you for your submission.", "success")
        // Reset form
        setFormData({
          publicid: "205bc381dcbb0e45fca0d0a038bee2c0",
          urlencodeenable: "1",
          name: "Placement",
          __vtCurrency: "1",
          fld_vtcmstudentname: "",
          fld_studentemail: "",
          fld_department_2375: "",
          cf_vtcmstudent_studentphonenumber: "",
          cf_vtcmstudent_technologieswhichyouhavelearned: "",
          cf_vtcmstudent_addresswithpincode: "",
          cf_2494: "",
          cf_2496: "",
          cf_vtcmstudent_workexperienceifany: "",
          cf_vtcmstudent_course1: "",
          cf_vtcmstudent_course3: "",
          cf_vtcmstudent_onetimeplacementfee: "",
          cf_vtcmstudent_studentresume: "",
          cf_vtcmstudent_selectlocation: "",
          cf_2498: "",
          cf_2500: "",
          fld_course_2377: "",
          file_1_1: null,
        })
        // Reset file input
        const fileInput = document.getElementById("cvFile")
        if (fileInput) fileInput.value = ""
      } else {
        // If proxy indicates failure, show its error message
        throw new Error(result.error || "Failed to submit form via proxy.")
      }
    } catch (error) {
      console.error("Error submitting form via proxy:", error)
      showNotification(`❌ Error submitting form: ${error.message}. Please try again.`, "error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      {/* Notification Bar */}
      {notification && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full mx-4 px-6 py-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
            notification.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {notification.type === "success" ? (
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              ) : (
                <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              )}
              <p className="text-sm font-medium">{notification.message}</p>
            </div>
            <button
              onClick={() => setNotification(null)}
              className="ml-4 text-white hover:text-gray-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          {/* Progress bar */}
          <div className="mt-2 w-full bg-white bg-opacity-30 rounded-full h-1">
            <div
              className="bg-white h-1 rounded-full transition-all duration-5000 ease-linear"
              style={{
                animation: "progress 5s linear forwards",
                width: "0%",
              }}
            ></div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 text-white px-6 py-4">
            <h1 className="text-2xl font-bold text-center">Placement Form</h1>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Student Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">
                    Student Name *
                  </label>
                  <input
                    id="studentName"
                    type="text"
                    placeholder="Enter student name"
                    value={formData.fld_vtcmstudentname}
                    onChange={(e) => handleInputChange("fld_vtcmstudentname", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.fld_vtcmstudentname && <p className="text-sm text-red-500">{errors.fld_vtcmstudentname}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="studentEmail" className="block text-sm font-medium text-gray-700">
                    Student Email *
                  </label>
                  <input
                    id="studentEmail"
                    type="email"
                    placeholder="Enter email"
                    value={formData.fld_studentemail}
                    onChange={(e) => handleInputChange("fld_studentemail", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.fld_studentemail && <p className="text-sm text-red-500">{errors.fld_studentemail}</p>}
                </div>
              </div>

              {/* Department and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Department *</label>
                  <select
                    value={formData.fld_department_2375}
                    onChange={(e) => handleInputChange("fld_department_2375", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select department</option>
                    {departmentOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.fld_department_2375 && <p className="text-sm text-red-500">{errors.fld_department_2375}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                    Student Phone Number *
                  </label>
                  <input
                    id="phoneNumber"
                    type="text"
                    placeholder="Enter phone number"
                    value={formData.cf_vtcmstudent_studentphonenumber}
                    onChange={(e) => handleInputChange("cf_vtcmstudent_studentphonenumber", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.cf_vtcmstudent_studentphonenumber && (
                    <p className="text-sm text-red-500">{errors.cf_vtcmstudent_studentphonenumber}</p>
                  )}
                </div>
              </div>

              {/* Technologies */}
              <div className="space-y-2">
                <label htmlFor="technologies" className="block text-sm font-medium text-gray-700">
                  Technologies which you have learned
                </label>
                <input
                  id="technologies"
                  type="text"
                  placeholder="Enter technologies"
                  value={formData.cf_vtcmstudent_technologieswhichyouhavelearned}
                  onChange={(e) => handleInputChange("cf_vtcmstudent_technologieswhichyouhavelearned", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Address */}
              <div className="space-y-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address with Pin Code *
                </label>
                <textarea
                  id="address"
                  placeholder="Enter address with pin code"
                  rows={3}
                  value={formData.cf_vtcmstudent_addresswithpincode}
                  onChange={(e) => handleInputChange("cf_vtcmstudent_addresswithpincode", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.cf_vtcmstudent_addresswithpincode && (
                  <p className="text-sm text-red-500">{errors.cf_vtcmstudent_addresswithpincode}</p>
                )}
              </div>

              {/* Education Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="tenth" className="block text-sm font-medium text-gray-700">
                    10th Details *
                  </label>
                  <input
                    id="tenth"
                    type="text"
                    placeholder="Enter 10th details"
                    value={formData.cf_2494}
                    onChange={(e) => handleInputChange("cf_2494", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.cf_2494 && <p className="text-sm text-red-500">{errors.cf_2494}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="twelfth" className="block text-sm font-medium text-gray-700">
                    12th Details *
                  </label>
                  <input
                    id="twelfth"
                    type="text"
                    placeholder="Enter 12th details"
                    value={formData.cf_2496}
                    onChange={(e) => handleInputChange("cf_2496", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.cf_2496 && <p className="text-sm text-red-500">{errors.cf_2496}</p>}
                </div>
              </div>

              {/* Graduation Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="graduation" className="block text-sm font-medium text-gray-700">
                    Graduation Details *
                  </label>
                  <input
                    id="graduation"
                    type="text"
                    placeholder="Enter graduation details"
                    value={formData.cf_2498}
                    onChange={(e) => handleInputChange("cf_2498", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  {errors.cf_2498 && <p className="text-sm text-red-500">{errors.cf_2498}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="postGraduation" className="block text-sm font-medium text-gray-700">
                    Post Graduation Details
                  </label>
                  <input
                    id="postGraduation"
                    type="text"
                    placeholder="Enter post graduation details"
                    value={formData.cf_2500}
                    onChange={(e) => handleInputChange("cf_2500", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Work Experience */}
              <div className="space-y-2">
                <label htmlFor="workExperience" className="block text-sm font-medium text-gray-700">
                  Work Experience (if any) *
                </label>
                <textarea
                  id="workExperience"
                  placeholder="Enter work experience"
                  rows={3}
                  value={formData.cf_vtcmstudent_workexperienceifany}
                  onChange={(e) => handleInputChange("cf_vtcmstudent_workexperienceifany", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.cf_vtcmstudent_workexperienceifany && (
                  <p className="text-sm text-red-500">{errors.cf_vtcmstudent_workexperienceifany}</p>
                )}
              </div>

              {/* Course Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Course 1 *</label>
                  <select
                    value={formData.cf_vtcmstudent_course1}
                    onChange={(e) => handleInputChange("cf_vtcmstudent_course1", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 max-h-40 overflow-y-auto"
                  >
                    <option value="">Select course</option>
                    {courseOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.cf_vtcmstudent_course1 && (
                    <p className="text-sm text-red-500">{errors.cf_vtcmstudent_course1}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Course 2</label>
                  <select
                    value={formData.cf_vtcmstudent_course3}
                    onChange={(e) => handleInputChange("cf_vtcmstudent_course3", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 max-h-40 overflow-y-auto"
                  >
                    <option value="">Select course</option>
                    {courseOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Additional Course Field */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Course *</label>
                <select
                  value={formData.fld_course_2377}
                  onChange={(e) => handleInputChange("fld_course_2377", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 max-h-40 overflow-y-auto"
                >
                  <option value="">Select course</option>
                  {courseOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.fld_course_2377 && <p className="text-sm text-red-500">{errors.fld_course_2377}</p>}
              </div>

              {/* Placement Fee and Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">One Time Placement Fee *</label>
                  <select
                    value={formData.cf_vtcmstudent_onetimeplacementfee}
                    onChange={(e) => handleInputChange("cf_vtcmstudent_onetimeplacementfee", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select option</option>
                    {placementFeeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.cf_vtcmstudent_onetimeplacementfee && (
                    <p className="text-sm text-red-500">{errors.cf_vtcmstudent_onetimeplacementfee}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Select Location *</label>
                  <select
                    value={formData.cf_vtcmstudent_selectlocation}
                    onChange={(e) => handleInputChange("cf_vtcmstudent_selectlocation", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select location</option>
                    {locationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.cf_vtcmstudent_selectlocation && (
                    <p className="text-sm text-red-500">{errors.cf_vtcmstudent_selectlocation}</p>
                  )}
                </div>
              </div>

              {/* Student Resume URL */}
              <div className="space-y-2">
                <label htmlFor="resumeUrl" className="block text-sm font-medium text-gray-700">
                  Student Resume URL
                </label>
                <input
                  id="resumeUrl"
                  type="url"
                  placeholder="Enter resume URL"
                  value={formData.cf_vtcmstudent_studentresume}
                  onChange={(e) => handleInputChange("cf_vtcmstudent_studentresume", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* CV Upload */}
              <div className="space-y-2">
                <label htmlFor="cvFile" className="block text-sm font-medium text-gray-700">
                  CV *
                </label>
                <input
                  id="cvFile"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.file_1_1 && <p className="text-sm text-red-500">{errors.file_1_1}</p>}
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-2 px-8 rounded-md transition duration-200 flex items-center justify-center mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* CSS for progress bar animation */}
      <style jsx>{`
          @keyframes progress {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }
        `}</style>
    </div>
  )
}

export default VtigerPlacementForm
