"use client"
import React from "react";

const PrivacyPolicy = () => {
   const content = [
    {
      // heading: "Important Terms",
      paragraph: `Your privacy is important to us.
`,
    },
    {
      heading: "1. Information We Collect",
      paragraph: `We may collect the following types of information:
● Personal Information: Name, email address, phone number, and other information you
voluntarily provide.
● Usage Data: IP address, browser type, operating system, referring URLs, pages
viewed, and the date/time of visits.
● Cookies and Tracking Technologies: We use cookies and similar technologies to
enhance your experience, analyze website usage, and deliver relevant content.
`,
    },
    {
      heading: "2. How We Use Your Information",
      paragraph: `We use the information we collect for purposes such as:
● Providing and improving our website and services
● Communicating with you, including responding to inquiries
● Sending updates, newsletters, or promotional materials (only if you opt-in)
● Ensuring the security and integrity of our website
● Complying with legal obligations
`,
    },
    {
      heading: "3. Sharing Your Information",
      paragraph: `We do not sell your personal information. We may share information with:
● Service Providers: To help operate our business and website (e.g., hosting, analytics,
marketing)

● Legal Authorities: If required to comply with the law or protect our rights
● Business Transfers: In the event of a merger, acquisition, or sale of assets
`,
    },
    {
      heading: "4. Cookies and Tracking",
      paragraph: `We use cookies and similar technologies to collect data and improve your browsing experience. You can control cookie preferences through your browser settings.
`,
    },
    {
      heading: "5. Data Security",
      paragraph: `We implement appropriate security measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction.
`,
    },
    {
      heading: "6. Your Rights",
      paragraph: `Depending on your location, you may have the right to:
● Access, correct, or delete your personal information
● Object to or restrict our use of your information
● Withdraw consent for data processing
● File a complaint with a data protection authority

To exercise your rights, contact us at [Insert Contact Email].
`,
    },
    {
      heading: "7. Third-Party Links",
      paragraph: `Our website may contain links to third-party sites. We are not responsible for the privacy practices of those sites.
`,
    },
    {
      heading: "8. Children’s Privacy",
      paragraph: `We do not knowingly collect personal information from children under 13 (or applicable age). If you believe we have collected such information, contact us immediately.
`,
    },
    {
      heading: "9. Changes to This Policy",
      paragraph: `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an update .
`,
    },
    {
      heading: "10. Contact Us",
      paragraph: `If you have any questions about this Privacy Policy or our data practices, please contact us at: support@sevenmentor.com
`,
    },
  ];
  return (
    <div className="privacy-policy-container bg-black text-white p-5 md:p-16 md:mt-5 mt-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-8 text-center">
          Privacy Policy
        </h1>
        {/* Separator */}
        <div className="flex items-center justify-center gap-4 my-10">
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          <span className="text-orange-500 font-bold md:text-md text-sm text-center">
            Your Privacy, Our Priority – Transparent, Secure, and Trustworthy.
          </span>
          <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
        </div>

        {/* Dynamic Content Rendering */}
        <div className="space-y-10">
          {content.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold text-orange-400 mb-4">
                {section.heading}
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: section.paragraph }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;