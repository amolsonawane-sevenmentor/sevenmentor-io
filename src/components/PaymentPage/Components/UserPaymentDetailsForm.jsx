"use client"
import { useState, useRef, useEffect, useCallback } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { format, startOfDay } from "date-fns"
import dynamic from "next/dynamic"
const AsyncSelect = dynamic(() => import("react-select/async"), { ssr: false })
import { getCoursesList, getContactPersonsList, getBranchesList } from "../../../services/CourseContactService.js"

const Input = ({
  id,
  type = "text",
  placeholder,
  className = "",
  value,
  onChange,
  onFocus,
  onBlur,
  readOnly = false,
  ...props
}) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={`w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 ${className}`}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      readOnly={readOnly}
      {...props}
    />
  )
}

const Label = ({ htmlFor, className = "", children }) => {
  return (
    <label htmlFor={htmlFor} className={`text-sm font-medium text-gray-300 ${className}`}>
      {children}
    </label>
  )
}

const Button = ({ type = "button", className = "", onClick, children }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-lg transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  )
}

const Select = ({ id, value, onChange, onFocus, onBlur, className = "", children, placeholder, name }) => {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      className={`w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 ${className}`}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {children}
    </select>
  )
}

const Option = ({ value, children }) => {
  return <option value={value}>{children}</option>
}

const Card = ({ className = "", children }) => {
  return <div className={`w-full rounded-lg overflow-hidden shadow-xl ${className}`}>{children}</div>
}

const CardHeader = ({ className = "", children }) => {
  return <div className={`p-6 ${className}`}>{children}</div>
}

const CardTitle = ({ className = "", children }) => {
  return <h2 className={`text-2xl font-bold ${className}`}>{children}</h2>
}

const CardDescription = ({ className = "", children }) => {
  return <p className={`text-sm ${className}`}>{children}</p>
}

const CardContent = ({ className = "", children }) => {
  return <div className={`p-6 ${className}`}>{children}</div>
}

const CardFooter = ({ className = "", children }) => {
  return <div className={`p-6 ${className}`}>{children}</div>
}

export function UserPaymentDetailsForm({ onSubmit, initialValues = {} }) {
  const [focused, setFocused] = useState(null)
  const [courseOptions, setCourseOptions] = useState([])
  const [contactPersonOptions, setContactPersonOptions] = useState([])
  const [branchOptions, setBranchOptions] = useState([])
  const [loadingCourses, setLoadingCourses] = useState(false)
  const [loadingContacts, setLoadingContacts] = useState(false)
  const [loadingBranches, setLoadingBranches] = useState(false)
  const [counsellorEmail, setCounsellorEmail] = useState(initialValues.counselorEmail || "")
  const [counselorNumber, setCounselorNumber] = useState(initialValues.counselorNumber || "")
  const [contactPersonIds, setContactPersonIds] = useState(initialValues.contactPersonIds || "")
  const [preferredBranchId, setPreferredBranchId] = useState(initialValues.preferredBranchId || "")

  // DatePicker component
  const DatePicker = ({ value, onChange, placeholder = "Select date", name, onBlur, minDate = new Date() }) => {
    const [selectedDate, setSelectedDate] = useState(value)
    const formattedMinDate = format(minDate, "yyyy-MM-dd")

    const handleDateChange = (e) => {
      const date = new Date(e.target.value)
      setSelectedDate(date)
      const formattedDate = format(date, "dd MMMM yyyy")
      onChange({ target: { name, value: formattedDate } })
    }

    return (
      <input
        type="date"
        name={name}
        min={formattedMinDate}
        value={selectedDate ? format(selectedDate, "yyyy-MM-dd") : ""}
        onChange={handleDateChange}
        onBlur={onBlur}
        className="w-full p-3 bg-gray-800 text-white rounded-lg border border-gray-700 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
      />
    )
  }

  const customStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: "#1f2937",
      border: "1px solid rgba(55, 65, 81, 0.5)",
      color: "white",
      borderRadius: "0.5rem",
      padding: "0.25rem",
      minHeight: "45px",
      ":hover": {
        borderColor: "rgba(249, 115, 22, 0.5)",
      },
      ":focus": {
        borderColor: "rgba(249, 115, 22, 1)",
        boxShadow: "0 0 0 2px rgba(249, 115, 22, 0.25)",
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: "white",
      display: "flex",
      alignItems: "center",
      gap: "8px",
    }),
    placeholder: (base) => ({
      ...base,
      color: "rgba(156, 163, 175, 0.7)",
    }),
    input: (base) => ({
      ...base,
      color: "white",
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: "#1f2937",
      color: "white",
      zIndex: 9999,
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused
        ? "rgba(249, 115, 22, 0.2)"
        : state.isSelected
          ? "rgba(249, 115, 22, 0.4)"
          : "transparent",
      color: "white",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      ":hover": {
        backgroundColor: "rgba(249, 115, 22, 0.2)",
      },
    }),
    valueContainer: (base) => ({
      ...base,
      padding: "2px 8px",
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "white",
    }),
  }

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Name must be at least 2 characters").required("Name is required"),
    email: Yup.string().email("Please enter a valid email address").required("Email is required"),
    phone: Yup.string()
      .matches(/^[0-9]+$/, "Phone number must contain only digits")
      .min(10, "Phone number must be at least 10 digits")
      .max(10, "Phone number must not exceed 10 digits")
      .required("Phone number is required"),
    gender: Yup.string().oneOf(["Male", "Female", "Other"], "Please select a gender").required("Gender is required"),
    dateOfBirth: Yup.date()
      .required("Date of birth is required")
      .max(new Date(), "Date of birth cannot be in the future"),
    state: Yup.string().required("State is required"),
    city: Yup.string().required("City is required"),
    degreee: Yup.string().required("Degree is required"),
    courseName: Yup.array()
      .min(1, "Please select at least one course")
      .of(Yup.string().required())
      .required("Course name is required"),
    collegeName: Yup.string().required("College name is required"),
    passingYear: Yup.string().required("Passing year is required"),
    modeOfClass: Yup.string().required("Mode of class is required"),
    preferredBranch: Yup.string().required("Preferred branch is required"),
    totalFees: Yup.string().required("Total fees amount is required"),
    paidAmount: Yup.string().required("Paid amount is required"),
    remainingFees: Yup.string().required("Remaining fees amount is required"),
    feesDueDate: Yup.date()
      .required("Fees due date is required")
      .min(startOfDay(new Date()), "Due date cannot be in the past"),

    documentType: Yup.string()
      .oneOf(["Aadhar", "PAN", "Passport"], "Please select a valid document type")
      .required("Document type is required"),
    documentNo: Yup.string()
      .required("Document number is required")
      .test("valid-document-number", function (value) {
        const docType = this.parent.documentType

        if (!docType) return true

        switch (docType) {
          case "Aadhar":
            if (!/^\d{12}$/.test(value)) {
              return this.createError({
                message: "Aadhar number must be exactly 12 digits",
              })
            }
            break
          case "PAN":
            if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)) {
              return this.createError({
                message: "PAN must be 10 characters (5 letters, 4 numbers, 1 letter)",
              })
            }
            break
          case "Passport":
            if (!/^[A-Z]{1}[0-9]{7}$/.test(value)) {
              return this.createError({
                message: "Passport must be 8 characters (1 letter followed by 7 digits)",
              })
            }
            break
        }
        return true
      }),
    profession: Yup.string()
      .oneOf(["Student", "Professional", "Freelancer", "Other"], "Please select a valid profession")
      .required("Profession is required"),
    preferredBatch: Yup.string()
      .oneOf(["Regular Training", "Weekend Training"], "Please select a valid batch")
      .required("Preferred batch is required"),
    counsellorName: Yup.string().required("Counsellor name is required"),
  })

  const formik = useFormik({
    initialValues: {
      name: initialValues.name || "",
      email: initialValues.email || "",
      phone: initialValues.phone || "",
      gender: initialValues.gender || "",
      dateOfBirth: initialValues.dateOfBirth || undefined,
      state: initialValues.state || "",
      city: initialValues.city || "",
      degreee: initialValues.degreee || "",
      courseName: initialValues.courseName
        ? Array.isArray(initialValues.courseName)
          ? initialValues.courseName
          : initialValues.courseName.split(",").map((c) => c.trim()).filter(Boolean)
        : [],
      collegeName: initialValues.collegeName || "",
      passingYear: initialValues.passingYear || "",
      modeOfClass: initialValues.modeOfClass || "",
      department: "NA",
      totalFees: initialValues.totalFees || "",
      paidAmount: initialValues.paidAmount || "",
      remainingFees: initialValues.remainingFees || "",
      feesDueDate: initialValues.feesDueDate || undefined,
      preferredBranch: initialValues.preferredBranch || "",
      documentType: initialValues.documentType || "",
      documentNo: initialValues.documentNo || "",
      profession: initialValues.profession || "",
      preferredBatch: initialValues.preferredBatch || "",
      counsellorName: initialValues.counsellorName || "",
      counselorNumber: initialValues.counselorNumber || "",
      counselorEmail: initialValues.counselorEmail || "",
      departmentIds: "NA",
      preferredBranchId: initialValues.preferredBranchId || "",
      contactPersonIds: initialValues.contactPersonIds || "",
      batchIds: "NA",
    },
    validationSchema,
    onSubmit: (values) => {
      onSubmit({
        ...values,
        counselorEmail: counsellorEmail,
        counselorNumber: counselorNumber,
        contactPersonIds: contactPersonIds,
        preferredBranchId: preferredBranchId,
        isVerifiedbyCounsellor: false,
      })
    },
    validateOnChange: false,
    validateOnBlur: true,
  })

  const calculateRemainingFees = useCallback((totalFees, paidAmount) => {
    const total = Number.parseFloat(totalFees || "0")
    const paid = Number.parseFloat(paidAmount || "0")
    const remaining = total - paid
    return remaining >= 0 ? remaining.toString() : "0"
  }, [])

  const shouldUpdateRemainingFees = useRef(false)

  useEffect(() => {
    if (shouldUpdateRemainingFees.current) {
      const remainingFees = calculateRemainingFees(formik.values.totalFees, formik.values.paidAmount)
      formik.setFieldValue("remainingFees", remainingFees)
      shouldUpdateRemainingFees.current = false
    }
  }, [formik.values.totalFees, formik.values.paidAmount, calculateRemainingFees, formik.setFieldValue])

  const handleFocus = useCallback((field) => {
    setFocused(field)
  }, [])

  const handleBlur = useCallback(
    (e) => {
      formik.handleBlur(e)
      setFocused(null)
    },
    [formik.handleBlur],
  )

  const handleDocumentNumberChange = (e) => {
    const { value } = e.target
    const docType = formik.values.documentType

    let filteredValue = value

    if (docType === "Aadhar") {
      filteredValue = value.replace(/[^0-9]/g, "")
    } else if (docType === "PAN" || docType === "Passport") {
      filteredValue = value.toUpperCase()
    }

    formik.setFieldValue("documentNo", filteredValue)
  }

  // Fetch courses, contact persons, and branches on mount
  useEffect(() => {
    setLoadingCourses(true)
    setLoadingContacts(true)
    setLoadingBranches(true)

    // Fetch courses
    getCoursesList()
      .then((courses) => {
        // console.log("Fetched courses:", courses) // Debug log
        const formattedCourses = courses.map((c) => ({
          value: c.name,
          label: c.name,
          id: c.id,
        }))
        // console.log("Formatted courses:", formattedCourses) // Debug log
        setCourseOptions(formattedCourses)
      })
      .catch((error) => {
        console.log("Error fetching courses:", error)
        setCourseOptions([]) // Set empty array on error
      })
      .finally(() => setLoadingCourses(false))

    // Fetch contacts
    getContactPersonsList()
      .then((contacts) => {
        setContactPersonOptions(
          contacts.map((c) => ({ value: c.name, label: c.name, id: c.id, email: c.email, phone: c.phone })),
        )
      })
      .catch((error) => {
        console.log("Error fetching contacts:", error)
        setContactPersonOptions([])
      })
      .finally(() => setLoadingContacts(false))

    // Fetch branches
    getBranchesList()
      .then((branches) => {
        // console.log("Fetched branches:", branches) // Debug log
        const formattedBranches = branches.map((b) => ({
          value: b.name,
          label: b.name,
          id: b.id,
        }))
        // console.log("Formatted branches:", formattedBranches) // Debug log
        setBranchOptions(formattedBranches)
      })
      .catch((error) => {
        console.log("Error fetching branches:", error)
        setBranchOptions([]) // Set empty array on error
      })
      .finally(() => setLoadingBranches(false))
  }, [])

  // Load course options for AsyncSelect - Fixed version
  const loadCourseOptions = async (inputValue) => {
    // console.log("loadCourseOptions called with:", inputValue) // Debug log
    // console.log("Available courseOptions:", courseOptions) // Debug log

    if (!inputValue || inputValue.trim() === "") {
      return courseOptions // Return all courses if no input
    }

    const filtered = courseOptions.filter((c) => c.label.toLowerCase().includes(inputValue.toLowerCase()))
    // console.log("Filtered courses:", filtered) // Debug log
    return filtered
  }

  // Handle course selection - Fixed version
  const handleCourseChange = (selectedOptions) => {
    // selectedOptions is array for isMulti
    const selectedLabels = selectedOptions ? selectedOptions.map((opt) => opt.label) : [];
    formik.setFieldValue("courseName", selectedLabels);
  }

  const loadContactPersonOptions = async (inputValue) => {
    if (!inputValue) return contactPersonOptions
    return contactPersonOptions.filter((c) => c.label.toLowerCase().includes(inputValue.toLowerCase()))
  }

  const handleContactPersonChange = (selectedOption) => {
    formik.setFieldValue("counsellorName", selectedOption ? selectedOption.label : "")
    setCounsellorEmail(selectedOption ? selectedOption.email : "")
    setCounselorNumber(selectedOption ? selectedOption.phone : "")
    setContactPersonIds(selectedOption ? selectedOption.id : "")
  }

  // Load branch options for AsyncSelect
  const loadBranchOptions = async (inputValue) => {
    // console.log("loadBranchOptions called with:", inputValue) // Debug log
    // console.log("Available branchOptions:", branchOptions) // Debug log

    if (!inputValue || inputValue.trim() === "") {
      return branchOptions // Return all branches if no input
    }

    const filtered = branchOptions.filter((b) => b.label.toLowerCase().includes(inputValue.toLowerCase()))
    // console.log("Filtered branches:", filtered) // Debug log
    return filtered
  }

  // Handle branch selection - Updated to store both name and ID
  const handleBranchChange = (selectedOption) => {
    // console.log("Branch selected:", selectedOption) // Debug log
    const branchName = selectedOption ? selectedOption.label : ""
    const branchId = selectedOption ? selectedOption.id : ""
    formik.setFieldValue("preferredBranch", branchName)
    setPreferredBranchId(branchId)
  }

  useEffect(() => {
    if (initialValues.counselorEmail) setCounsellorEmail(initialValues.counselorEmail)
    if (initialValues.counselorNumber) setCounselorNumber(initialValues.counselorNumber)
    if (initialValues.contactPersonIds) setContactPersonIds(initialValues.contactPersonIds)
    if (initialValues.preferredBranchId) setPreferredBranchId(initialValues.preferredBranchId)
  }, [initialValues.counselorEmail, initialValues.counselorNumber, initialValues.preferredBranchId])

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const touchedFields = {}
    Object.keys(formik.values).forEach((field) => {
      touchedFields[field] = true
    })

    formik.setTouched(touchedFields)

    const errors = await formik.validateForm()
    if (Object.keys(errors).length === 0) {
      // Convert courseName array to comma-separated string for API
      const submitData = {
        ...formik.values,
        courseName: formik.values.courseName.join(","),
        counselorEmail: counsellorEmail,
        counselorNumber: counselorNumber,
        contactPersonIds: contactPersonIds,
        preferredBranchId: preferredBranchId,
        isVerifiedbyCounsellor: false,
      }
      console.log("UserPaymentDetailsForm submitted data:", submitData)
      onSubmit(submitData)
    } else {
      console.log("Validation failed, form not submitted. Errors:", errors)
      const firstErrorField = Object.keys(errors)[0]
      document.getElementById(firstErrorField)?.scrollIntoView({ behavior: "smooth", block: "center" })
      document.getElementById(firstErrorField)?.focus()
    }
  }

  return (
    <Card className="w-full max-w-5xl mx-auto bg-gray-900 border border-gray-800 shadow-xl">
      <CardHeader className="text-center border-b border-gray-800 pb-6">
        <CardTitle className="text-2xl font-bold uppercase bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent">
          PLEASE ENTER YOUR DETAILS
        </CardTitle>
        <CardDescription className="text-gray-400 text-sm mt-2">
          Fill all form fields to proceed to the next step
        </CardDescription>
      </CardHeader>
      <form onSubmit={formik.handleSubmit}>
        <CardContent className="space-y-6">
          {/* Row 1: Name, Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name*</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your full name"
                className={focused === "name" ? "border-orange-500 shadow-lg shadow-orange-500/20" : ""}
                value={formik.values.name}
                onChange={formik.handleChange}
                onFocus={() => handleFocus("name")}
                onBlur={handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email*</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                className={focused === "email" ? "border-orange-500 shadow-lg shadow-orange-500/20" : ""}
                value={formik.values.email}
                onChange={formik.handleChange}
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
              )}
            </div>
          </div>

          {/* Row 2: Phone, Gender, Date of Birth */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number*</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                className={focused === "phone" ? "border-orange-500 shadow-lg shadow-orange-500/20" : ""}
                value={formik.values.phone}
                onChange={formik.handleChange}
                onFocus={() => handleFocus("phone")}
                onBlur={handleBlur}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender">Gender*</Label>
              <Select
                id="gender"
                name="gender"
                value={formik.values.gender}
                onChange={formik.handleChange}
                onFocus={() => handleFocus("gender")}
                onBlur={handleBlur}
                placeholder="Select Gender"
                className={focused === "gender" ? "border-orange-500 shadow-lg shadow-orange-500/20" : ""}
              >
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
                <Option value="Other">Other</Option>
              </Select>
              {formik.touched.gender && formik.errors.gender && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.gender}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="dateOfBirth">Date of Birth*</Label>
              <DatePicker
                name="dateOfBirth"
                value={formik.values.dateOfBirth}
                onChange={(e) => formik.setFieldValue("dateOfBirth", e.target.value)}
                onBlur={() => formik.setFieldTouched("dateOfBirth", true)}
                placeholder="Select date of birth"
                minDate={new Date("1900-01-01")}
              />
              {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.dateOfBirth}</p>
              )}
            </div>
          </div>

          {/* Row 3: State, City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="state">State*</Label>
              <Input
                id="state"
                name="state"
                value={formik.values.state}
                onChange={formik.handleChange}
                onFocus={() => handleFocus("state")}
                onBlur={handleBlur}
                placeholder="Enter state"
                className={focused === "state" ? "border-orange-500 shadow-lg shadow-orange-500/20" : ""}
              />
              {formik.touched.state && formik.errors.state && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.state}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City*</Label>
              <Input
                id="city"
                name="city"
                value={formik.values.city}
                onChange={formik.handleChange}
                onFocus={() => handleFocus("city")}
                onBlur={handleBlur}
                placeholder="Enter city"
                className={focused === "city" ? "border-orange-500 shadow-lg shadow-orange-500/20" : ""}
              />
              {formik.touched.city && formik.errors.city && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.city}</p>
              )}
            </div>
          </div>

          {/* Row 4: Degree, Course Name, College Name */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="degreee">Degree*</Label>
              <Input
                id="degreee"
                name="degreee"
                placeholder="Enter your degree"
                className={focused === "degreee" ? "border-orange-500 shadow-lg shadow-orange-500/20" : ""}
                value={formik.values.degreee}
                onChange={formik.handleChange}
                onFocus={() => handleFocus("degreee")}
                onBlur={handleBlur}
              />
              {formik.touched.degreee && formik.errors.degreee && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.degreee}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="courseName">Course Name*</Label>
              <AsyncSelect
                key={courseOptions.length} // Force re-render when options change
                cacheOptions
                defaultOptions={courseOptions.length > 0 ? courseOptions : true} // Show loading if empty
                loadOptions={loadCourseOptions}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
                value={courseOptions.filter((c) => formik.values.courseName.includes(c.label))}
                onChange={handleCourseChange}
                placeholder={loadingCourses ? "Loading courses..." : "Select or search course(s)"}
                isClearable
                isMulti
                isLoading={loadingCourses}
                noOptionsMessage={({ inputValue }) =>
                  inputValue ? `No courses found for "${inputValue}"` : "No courses available"
                }
                styles={{
                  ...customStyles,
                  menu: (base) => ({
                    ...base,
                    backgroundColor: "#1f2937",
                    color: "white",
                    zIndex: 9999,
                    maxHeight: 550,
                    overflowY: "auto",
                    overflowX: "hidden",
                    minWidth: "100%",
                    width: "100%",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }),
                  option: (base, state) => ({
                    ...base,
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                    fontSize: "0.95rem",
                    paddingTop: 10,
                    paddingBottom: 10,
                    backgroundColor: state.isFocused
                      ? "rgba(249, 115, 22, 0.2)"
                      : state.isSelected
                        ? "rgba(249, 115, 22, 0.4)"
                        : "transparent",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    ":hover": {
                      backgroundColor: "rgba(249, 115, 22, 0.2)",
                    },
                  }),
                  menuList: (base) => ({
                    ...base,
                    "::-webkit-scrollbar": {
                      display: "none",
                    },
                  }),
                }}
                className={`w-full ${
                  focused === "courseName" ? "border-orange-500 shadow-lg shadow-orange-500/20" : "border-gray-700"
                } focus:outline-none transition-all duration-300`}
                onFocus={() => handleFocus("courseName")}
                onBlur={handleBlur}
                isDisabled={loadingCourses}
              />
              {formik.touched.courseName && formik.errors.courseName && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.courseName}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="collegeName">College Name*</Label>
              <Input
                id="collegeName"
                name="collegeName"
                placeholder="Enter college name"
                className={focused === "collegeName" ? "border-orange-500 shadow-lg shadow-orange-500/20" : ""}
                value={formik.values.collegeName}
                onChange={formik.handleChange}
                onFocus={() => handleFocus("collegeName")}
                onBlur={handleBlur}
              />
              {formik.touched.collegeName && formik.errors.collegeName && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.collegeName}</p>
              )}
            </div>
          </div>

          {/* Row 5: Passing Year, Mode of Class, Preferred Branch */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="passingYear">Passing Year*</Label>
              <Input
                id="passingYear"
                name="passingYear"
                placeholder="Enter passing year"
                className={focused === "passingYear" ? "border-orange-500 shadow-lg shadow-orange-500/20" : ""}
                value={formik.values.passingYear}
                onChange={formik.handleChange}
                onFocus={() => handleFocus("passingYear")}
                onBlur={handleBlur}
              />
              {formik.touched.passingYear && formik.errors.passingYear && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.passingYear}</p>
              )}
            </div>

            {/* Mode of Class */}
            <div className="space-y-2">
              <Label htmlFor="modeOfClass">Mode of Class*</Label>
              <Select
                id="modeOfClass"
                name="modeOfClass"
                value={formik.values.modeOfClass}
                onChange={formik.handleChange}
                onFocus={() => handleFocus("modeOfClass")}
                onBlur={handleBlur}
                placeholder="Select training mode"
                className={focused === "modeOfClass" ? "border-orange-500 shadow-lg shadow-orange-500/20" : ""}
              >
                <Option value="Online Training">Online Training</Option>
                <Option value="Offline Training">Offline Training</Option>
              </Select>
              {formik.touched.modeOfClass && formik.errors.modeOfClass && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.modeOfClass}</p>
              )}
            </div>

            {/* Preferred Branch */}
            <div className="space-y-2">
              <Label htmlFor="preferredBranch">Preferred Branch*</Label>
              <AsyncSelect
                key={branchOptions.length} // Force re-render when options change
                cacheOptions
                defaultOptions={branchOptions.length > 0 ? branchOptions : true} // Show loading if empty
                loadOptions={loadBranchOptions}
                getOptionLabel={(option) => option.label}
                getOptionValue={(option) => option.value}
                value={branchOptions.find((b) => b.label === formik.values.preferredBranch) || null}
                onChange={handleBranchChange}
                placeholder={loadingBranches ? "Loading branches..." : "Select or search branch"}
                isClearable
                isLoading={loadingBranches}
                noOptionsMessage={({ inputValue }) =>
                  inputValue ? `No branches found for "${inputValue}"` : "No branches available"
                }
                styles={{
                  ...customStyles,
                  menu: (base) => ({
                    ...base,
                    backgroundColor: "#1f2937",
                    color: "white",
                    zIndex: 9999,
                    maxHeight: 550,
                    overflowY: "auto",
                    overflowX: "hidden",
                    minWidth: "100%",
                    width: "100%",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                  }),
                  option: (base, state) => ({
                    ...base,
                    whiteSpace: "normal",
                    wordBreak: "break-word",
                    fontSize: "0.95rem",
                    paddingTop: 10,
                    paddingBottom: 10,
                    backgroundColor: state.isFocused
                      ? "rgba(249, 115, 22, 0.2)"
                      : state.isSelected
                        ? "rgba(249, 115, 22, 0.4)"
                        : "transparent",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    ":hover": {
                      backgroundColor: "rgba(249, 115, 22, 0.2)",
                    },
                  }),
                  menuList: (base) => ({
                    ...base,
                    "::-webkit-scrollbar": {
                      display: "none",
                    },
                  }),
                }}
                className={`w-full ${
                  focused === "preferredBranch" ? "border-orange-500 shadow-lg shadow-orange-500/20" : "border-gray-700"
                } focus:outline-none transition-all duration-300`}
                onFocus={() => handleFocus("preferredBranch")}
                onBlur={handleBlur}
                isDisabled={loadingBranches}
              />
              {formik.touched.preferredBranch && formik.errors.preferredBranch && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.preferredBranch}</p>
              )}
            </div>
          </div>

          {/* Row 6: Total Fees, Paid Amount, Remaining Fees */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="totalFees">Total Fees*</Label>
              <Input
                id="totalFees"
                name="totalFees"
                placeholder="Enter total fees"
                className={focused === "totalFees" ? "border-orange-500 shadow-lg shadow-orange-500/20" : ""}
                value={formik.values.totalFees}
                onChange={formik.handleChange}
                onFocus={() => handleFocus("totalFees")}
                onBlur={handleBlur}
              />
              {formik.touched.totalFees && formik.errors.totalFees && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.totalFees}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="paidAmount">Paid Amount*</Label>
              <Input
                id="paidAmount"
                name="paidAmount"
                placeholder="Enter paid amount"
                className={focused === "paidAmount" ? "border-orange-500 shadow-lg shadow-orange-500/20" : ""}
                value={formik.values.paidAmount}
                onChange={(e) => {
                  const value = e.target.value
                  const totalFees = Number.parseFloat(formik.values.totalFees || "0")
                  const paidAmount = Number.parseFloat(value || "0")

                  if (paidAmount > totalFees) {
                    formik.setFieldValue("paidAmount", totalFees.toString())
                    formik.setFieldError("paidAmount", "Paid amount cannot exceed total fees.")
                  } else {
                    formik.setFieldValue("paidAmount", value)
                    formik.setFieldError("paidAmount", "")
                  }

                  shouldUpdateRemainingFees.current = true
                }}
                onFocus={() => handleFocus("paidAmount")}
                onBlur={handleBlur}
              />
              {formik.touched.paidAmount && formik.errors.paidAmount && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.paidAmount}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="remainingFees">Remaining Fees*</Label>
              <Input
                id="remainingFees"
                name="remainingFees"
                placeholder="Remaining fees"
                className={focused === "remainingFees" ? "border-orange-500 shadow-lg shadow-orange-500/20" : ""}
                value={formik.values.remainingFees}
                readOnly
                onFocus={() => handleFocus("remainingFees")}
                onBlur={handleBlur}
              />
              {formik.touched.remainingFees && formik.errors.remainingFees && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.remainingFees}</p>
              )}
            </div>
          </div>

          {/* Row 7: Fees Due Date, Preferred Batch */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="feesDueDate">Fees Due Date*</Label>
              <DatePicker
                name="feesDueDate"
                value={formik.values.feesDueDate}
                onChange={(e) => formik.setFieldValue("feesDueDate", e.target.value)}
                onBlur={() => formik.setFieldTouched("feesDueDate", true)}
                placeholder="Select due date"
                minDate={new Date()}
              />
              {formik.touched.feesDueDate && formik.errors.feesDueDate && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.feesDueDate}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="preferredBatch">Preferred Batch*</Label>
              <Select
                id="preferredBatch"
                name="preferredBatch"
                value={formik.values.preferredBatch}
                onChange={formik.handleChange}
                onFocus={() => handleFocus("preferredBatch")}
                onBlur={handleBlur}
                placeholder="Select preferred batch"
                className={focused === "preferredBatch" ? "border-orange-500 shadow-lg shadow-orange-500/20" : ""}
              >
                <Option value="Regular Training">Regular Training</Option>
                <Option value="Weekend Training">Weekend Training</Option>
              </Select>
              {formik.touched.preferredBatch && formik.errors.preferredBatch && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.preferredBatch}</p>
              )}
            </div>
          </div>

          {/* Row 8: Document Type, Document Number, Profession */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="documentType">Document Type*</Label>
              <Select
                id="documentType"
                name="documentType"
                value={formik.values.documentType}
                onChange={(e) => {
                  formik.setFieldValue("documentType", e.target.value)
                  formik.setFieldValue("documentNo", "")
                }}
                onFocus={() => handleFocus("documentType")}
                onBlur={handleBlur}
                placeholder="Select Document Type"
                className={focused === "documentType" ? "border-orange-500 shadow-lg shadow-orange-500/20" : ""}
              >
                <Option value="Aadhar">Aadhar</Option>
                <Option value="PAN">PAN</Option>
                <Option value="Passport">Passport</Option>
              </Select>
              {formik.touched.documentType && formik.errors.documentType && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.documentType}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="documentNo">Document Number*</Label>
              <Input
                id="documentNo"
                name="documentNo"
                placeholder="Document Number"
                className={focused === "documentNo" ? "border-orange-500 shadow-lg shadow-orange-500/20" : ""}
                value={formik.values.documentNo}
                onChange={handleDocumentNumberChange}
                onFocus={() => handleFocus("documentNo")}
                onBlur={handleBlur}
              />
              {formik.values.documentType && (
                <p className="text-xs text-gray-400 mt-1">
                  {formik.values.documentType === "Aadhar" && "Aadhar should be exactly 12 digits"}
                  {formik.values.documentType === "PAN" &&
                    "PAN should be 10 characters (5 letters, 4 numbers, 1 letter)"}
                  {formik.values.documentType === "Passport" &&
                    "Passport should be 8 characters (1 letter followed by 7 digits)"}
                </p>
              )}
              {formik.touched.documentNo && formik.errors.documentNo && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.documentNo}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="profession">Profession*</Label>
              <Select
                id="profession"
                name="profession"
                value={formik.values.profession}
                onChange={formik.handleChange}
                onFocus={() => handleFocus("profession")}
                onBlur={handleBlur}
                placeholder="Select your profession"
                className={focused === "profession" ? "border-orange-500 shadow-lg shadow-orange-500/20" : ""}
              >
                <Option value="Student">Student</Option>
                <Option value="Professional">Professional</Option>
                <Option value="Freelancer">Freelancer</Option>
                <Option value="Other">Other</Option>
              </Select>
              {formik.touched.profession && formik.errors.profession && (
                <p className="text-red-500 text-xs mt-1">{formik.errors.profession}</p>
              )}
            </div>
          </div>

          {/* Row 9: Counsellor Name */}
          <div className="space-y-2">
            <Label htmlFor="counsellorName">Counsellor Name*</Label>
            <AsyncSelect
              cacheOptions
              defaultOptions={contactPersonOptions}
              loadOptions={loadContactPersonOptions}
              getOptionLabel={(option) =>
                `${option.label} (${option.email || "No email"}, ${option.phone || "No phone"})`
              }
              getOptionValue={(option) => option.label}
              value={contactPersonOptions.find((c) => c.label === formik.values.counsellorName) || null}
              onChange={handleContactPersonChange}
              placeholder="Select or search counsellor"
              isClearable
              styles={{
                ...customStyles,
                menu: (base) => ({
                  ...base,
                  backgroundColor: "#1f2937",
                  color: "white",
                  zIndex: 9999,
                  maxHeight: 550,
                  overflowY: "auto",
                  overflowX: "hidden",
                  minWidth: "100%",
                  width: "100%",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }),
                option: (base, state) => ({
                  ...base,
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                  fontSize: "0.95rem",
                  paddingTop: 10,
                  paddingBottom: 10,
                  backgroundColor: state.isFocused
                    ? "rgba(249, 115, 22, 0.2)"
                    : state.isSelected
                      ? "rgba(249, 115, 22, 0.4)"
                      : "transparent",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  ":hover": {
                    backgroundColor: "rgba(249, 115, 22, 0.2)",
                  },
                }),
                menuList: (base) => ({
                  ...base,
                  "::-webkit-scrollbar": {
                    display: "none",
                  },
                }),
              }}
              className={`w-full ${
                focused === "counsellorName" ? "border-orange-500 shadow-lg shadow-orange-500/20" : "border-gray-700"
              } focus:outline-none transition-all duration-300`}
              onFocus={() => handleFocus("counsellorName")}
              onBlur={handleBlur}
              isDisabled={loadingContacts}
            />
            {formik.touched.counsellorName && formik.errors.counsellorName && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.counsellorName}</p>
            )}
          </div>

          {/* Row 10: Counsellor Email, Counsellor Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="counselorEmail">Counsellor Email</Label>
              <Input
                id="counselorEmail"
                name="counselorEmail"
                value={counsellorEmail}
                readOnly
                className="bg-gray-700 text-gray-400"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="counselorNumber">Counsellor Phone</Label>
              <Input
                id="counselorNumber"
                name="counselorNumber"
                value={counselorNumber}
                readOnly
                className="bg-gray-700 text-gray-400"
              />
            </div>
          </div>
        </CardContent>

        <CardFooter className="border-t border-gray-800 pt-6">
          <Button
            onClick={handleFormSubmit}
            className="w-full bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-500 hover:to-orange-300 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:-translate-y-1 shadow-lg shadow-shadow-600/30"
          >
            PROCEED
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
