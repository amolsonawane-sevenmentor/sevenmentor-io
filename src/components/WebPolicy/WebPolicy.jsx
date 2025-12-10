"use client"

const TermsAndConditions = () => {
  const content = [
    {
      heading: "1. Acceptance of Terms",
      paragraph: `● By accessing or using our website, enrolling in a course, or using our services, you agree to be bound by these Terms and Conditions and our Privacy Policy.

● If you do not agree with any part of these terms, you must not use our website or services.`,
    },
    {
      heading: "2. Enrollment Requirements",
      paragraph: `● Proof of prior educational qualifications may be required for certain advanced-level IT courses.

● Enrollment is confirmed only upon full or initial payment (as per payment plan) and completion of the registration form.`,
    },
    {
      heading: "3. Course Fees and Payment",
      paragraph: `● All course fees must be paid in full before the course start date unless a payment plan has been agreed upon.

● Fees may include tuition, course materials, and access to learning platforms unless stated otherwise.

● Non-payment may result in suspension or cancellation of enrollment.`,
    },
    {
      heading: "4. Cancellation and Refund Policy",
      paragraph: `<span style="color: #fb923c; font-weight: 600; font-size: 1.1em;">Policy Overview:</span>
At SevenMentor and Training Pvt Ltd, we strive to provide quality education and training. To ensure fairness and consistency in financial matters, the following <strong>Non-Refundable Fee Policy</strong> applies to all payments made for admission, tuition, registration, and other related services.

<span style="color: #fb923c; font-weight: 600; font-size: 1.1em;">Non-Refundable Payments:</span>
All of the following fees are strictly non-refundable:
● Registration Fees
● Admission/Enrolment Fees
● Tuition Fees
● Exam Fees

<span style="color: #fb923c; font-weight: 600; font-size: 1.1em;">No Refunds in These Situations:</span>
Fees will not be refunded under any of the following circumstances:
● Withdrawal from the course or program after enrolment
● Absence or non-attendance
● Expulsion or dismissal due to misconduct or violation of institute policies
● Request for refund due to change in personal circumstances

<span style="color: #fb923c; font-weight: 600; font-size: 1.1em;">Student Acknowledgement:</span>
By enrolling at SevenMentor and Training Pvt Ltd, students and/or their guardians acknowledge and agree to this Non-Refundable Policy. It is the responsibility of the student to understand the terms before making any payment.

<span style="color: #fb923c; font-weight: 600; font-size: 1.1em;">Exceptions (if applicable):</span>
Refunds may only be issued under the following conditions:
● Duplicate payments made in error
● Unauthorised transactions that are proven and reported within a specific timeframe

<span style="color: #fb923c; font-weight: 600; font-size: 1.1em;">Replacement Policy:</span>
● In case a student wants to cancel enrollment he/she needs to provide their own reference for replacement under management approval
● Cancelation with Replacement policy Only applicable within 48 Hours after admission`,
    },
    {
      heading: "5. Attendance and Participation",
      paragraph: `● Students are expected to attend all sessions and complete assignments on time.

● Instructors must be notified in advance of any absences.

● Lack of participation or prolonged absenteeism may result in course failure or withdrawal.`,
    },
    {
      heading: "6. Course Changes and Cancellations",
      paragraph: `● The institution reserves the right to reschedule or cancel courses due to insufficient enrollment, instructor unavailability, or unforeseen circumstances.

● In such cases, enrolled students may choose a refund or transfer to another course.`,
    },
    {
      heading: "7. Course Access and Attendance",
      paragraph: `● Access to online or in-person training is granted only upon successful enrollment and payment.

● Students are expected to attend sessions regularly and complete all course requirements.

● Course access may be limited to a specific time period as stated in the course description.`,
    },
    {
      heading: "8. Placement Assistance",
      paragraph: `● Students must have successfully completed the required academic and practical coursework, Mock interviews.

● A minimum attendance of 80% is required in all training sessions.

● Students must not have any outstanding dues or disciplinary issues with the institute.`,
    },
    {
      heading: "9. Code of Conduct",
      paragraph: `● Students must behave respectfully toward instructors, staff, and fellow students.

● Disruptive behavior, cheating, or plagiarism may lead to disciplinary action or dismissal without refund.`,
    },
    {
      heading: "10. Certification",
      paragraph: `● A certificate of completion will be awarded only upon fulfilling all academic requirements, including attendance and assessments.

● Certificates will be issued digitally unless otherwise specified.`,
    },
    {
      heading: "11. Privacy and Data Use",
      paragraph: `● Student personal data will be handled in accordance with data protection laws and will not be shared with third parties without consent.

● Course performance data may be used internally for academic and service improvement purposes.`,
    },
    {
      heading: "12. Intellectual Property",
      paragraph: `All course materials, content, and recordings are the intellectual property of SevenMentor Training and Pvt. Ltd and are provided for personal educational use only. Reproduction, distribution, or resale without permission is strictly prohibited.`,
    },
    {
      heading: "13. Modifications to Terms",
      paragraph: `We reserve the right to modify these Terms and Conditions at any time. Changes will be posted on this page, and your continued use of our services constitutes acceptance of those changes.`,
    },
    {
      heading: "14. Liability",
      paragraph: `● The institution is not liable for any personal loss, injury, or damage sustained during participation in the course, except where required by law.

● Students are responsible for securing their own equipment and data when participating in online or on-campus courses.

● We do not guarantee employment. Our liability is limited to the course fee paid. We are not responsible for any indirect, incidental, or consequential damages.`,
    },
  ]

  return (
    <div className="terms-conditions-container bg-black text-white p-5 md:p-16 md:mt-5 mt-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-8 text-center">Terms and Conditions</h1>
        <p className="text-center text-lg md:text-xl mb-8 text-gray-300">Student Enrollment – IT and NOT IT Courses</p>

        {/* Separator */}
        <div className="flex items-center justify-center gap-4 my-10">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          <span className="text-orange-500 font-bold md:text-md text-sm text-center">
            Clear Guidelines for a Successful Learning Journey
          </span>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        </div>

        {/* Dynamic Content Rendering */}
        <div className="space-y-10">
          {content.map((section, index) => (
            <div key={index} className="border-l-4 border-orange-500 pl-6 py-4">
              <h2 className="text-2xl font-semibold text-orange-400 mb-4">{section.heading}</h2>
              <p
                className="text-base md:text-lg leading-relaxed whitespace-pre-wrap text-gray-200"
                dangerouslySetInnerHTML={{ __html: section.paragraph }}
              ></p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 p-6 bg-gray-900 rounded-lg border border-orange-500/20">
          <p className="text-center text-gray-300 text-sm md:text-base">
            <span className="text-orange-400 font-semibold">Important:</span> By enrolling in our courses, you
            acknowledge that you have read, understood, and agree to comply with all the terms and conditions outlined
            above.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TermsAndConditions
