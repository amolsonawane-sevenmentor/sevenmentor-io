import { useState } from "react"
import Image from "next/image"

// Custom components
const Card = ({ className = "", children }) => {
  return <div className={`w-full rounded-lg overflow-hidden shadow-xl ${className}`}>{children}</div>
}

const CardHeader = ({ className = "", children }) => {
  return <div className={`p-6 ${className}`}>{children}</div>
}

const CardContent = ({ className = "", children }) => {
  return <div className={`${className}`}>{children}</div>
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

export function VerifyPaymentDetails({ userDetails, onProceed, onEdit, onCancel }) {
  const [expandedSection, setExpandedSection] = useState("personal")

  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null)
    } else {
      setExpandedSection(section)
    }
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const sections = [
    {
      id: "personal",
      title: "Personal Information",
      icon: "🧑‍🎓",
      fields: [
        { label: "Name", value: userDetails.name },
        { label: "Email", value: userDetails.email },
        { label: "Gender", value: userDetails.gender },
        { label: "Phone", value: `${userDetails.phone}` },
        { label: "Profession", value: userDetails.profession },

      ],
    },
    {
      id: "course",
      title: "Course Details",
      icon: "📚",
      fields: [
        { label: "Course Name", value: Array.isArray(userDetails.courseName) ? userDetails.courseName.join(", ") : userDetails.courseName },
        { label: "Contact Person", value: userDetails.counsellorName },
        { label: "Mode of Class", value: userDetails.modeOfClass },
        { label: "Preferred Batch", value: userDetails.preferredBatch },
      ],
    },
    {
      id: "payment",
      title: "Payment Details",
      icon: "💰",
      fields: [
        { label: "Total Fees", value: `₹${userDetails.totalFees}` },
        { label: "Paid Fees", value: `₹${userDetails.paidAmount}` },
        { label: "Remaining Fees", value: `₹${userDetails.remainingFees}` },
        { label: "Due Date", value: formatDate(userDetails.feesDueDate) },
      ],
    },
  ]

  // Animation classes
  const fadeIn = "animate-fadeIn"
  const slideDown = "animate-slideDown"

  return (
    <Card className="w-full max-w-4xl mx-auto bg-gray-900 border-gray-800 shadow-2xl overflow-hidden">
      <CardHeader className="relative py-8 px-8 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-orange-400"></div>

        <div className="text-center">
          <h2
            className="text-3xl font-bold uppercase bg-gradient-to-r from-orange-500 to-orange-300 bg-clip-text text-transparent"
            style={{ animation: "fadeIn 0.5s ease-out" }}
          >
            VERIFY YOUR DETAILS
          </h2>
          <p className="text-gray-400 text-sm mt-2" style={{ animation: "fadeIn 0.5s ease-out 0.2s both" }}>
            Please review your information before proceeding
          </p>
        </div>

        {userDetails.photo && (
          <div
            className="absolute top-6 right-6 w-20 h-20 rounded-full overflow-hidden border-2 border-orange-500 shadow-lg shadow-orange-500/20"
            style={{ animation: "scaleIn 0.3s ease-out 0.4s both" }}
          >
            <Image
              src={userDetails.photo || "/placeholder.svg"}
              alt="User photo"
              width={200} // Replace with actual width
              height={200} // Replace with actual height
              className="w-full h-full object-cover"
            />

          </div>
        )}
      </CardHeader>

      <CardContent className="p-0">
        <div className="p-6 space-y-4">
          {sections.map((section, sectionIndex) => (
            <div
              key={section.id}
              className="rounded-lg overflow-hidden border border-gray-800 shadow-md"
              style={{ animation: `fadeIn 0.4s ease-out ${0.2 + sectionIndex * 0.1}s both` }}
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white hover:from-gray-700 hover:to-gray-800 transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xl">{section.icon}</span>
                  <h3 className="font-semibold text-lg">{section.title}</h3>
                </div>
                {expandedSection === section.id ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>

              {expandedSection === section.id && (
                <div className="divide-y divide-gray-800" style={{ animation: "slideDown 0.3s ease-out" }}>
                  {section.fields.map((field, index) => (
                    <div key={index} className="flex transition-all duration-300 hover:bg-gray-800/50">
                      <div className="w-1/2 p-4 font-medium text-gray-300">{field.label}</div>
                      <div className="w-1/2 p-4 text-white">{field.value}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div
            className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
            style={{ animation: "fadeIn 0.5s ease-out 0.6s both" }}
          >
            {/* <Button
              onClick={onEdit}
              className="text-orange-400 hover:text-orange-300 hover:bg-gray-800 font-medium transition-all duration-300 flex items-center p-2 rounded"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Edit Details
            </Button> */}

            <div className="flex gap-4 w-full sm:w-auto">
              <Button
                onClick={onCancel}
                className="border border-gray-700 hover:border-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                CANCEL
              </Button>

              <Button
                onClick={onProceed}
                className="bg-gradient-to-r from-orange-600 to-orange-400 hover:from-orange-500 hover:to-orange-300 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-orange-600/30 w-full sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                PROCEED
              </Button>
            </div>
          </div>
        </div>

        <div className="py-4 px-6 bg-gradient-to-br from-gray-800 to-gray-900 border-t border-gray-800">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2 items-center text-sm text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-orange-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>All information is secure and encrypted</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

