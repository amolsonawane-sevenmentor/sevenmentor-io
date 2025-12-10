import React, { useState } from "react";
import { motion } from "framer-motion";
import affiliationimg from "../../../../public/assets/certificate/affiliation.webp";
import Image from "next/image";

const affiliations = [
  {
    id: 2,
    title: "NASSCOM CERTIFICATION",
    description:
      "Get industry-recognized certification backed by NASSCOM's excellence.",
    logo: "/assets/certificate/logo/nasscom-logo.webp",
    certificate: "/assets/certificate/Nasscom-Certifiction.webp",
    isAffiliation: true,
    affiliationText:
      "NASSCOM is India's premier industry association for IT and business process management. Our partnership with NASSCOM ensures that our curriculum meets industry standards and provides students with credentials recognized by top employers nationwide. This affiliation validates the quality and relevance of our training programs in the ever-evolving tech landscape.",
  },
];

const HomeAffiliation = () => {
  const [previewCert, setPreviewCert] = useState(null);

  // Open certificate preview modal
  const openPreview = (cert) => {
    setPreviewCert(cert);
  };

  // Close certificate preview modal
  const closePreview = () => {
    setPreviewCert(null);
  };

  return (
    <>
      <div className="mt-5">
        {/* Section Header with Decorative Elements */}
        <div className="flex items-center justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-orange-500/20"></div>
          <div className="px-8 py-3 bg-gradient-to-r from-orange-500/10 to-orange-600/20 rounded-full border border-orange-500/30">
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent flex items-center gap-3">
              INDUSTRY AFFILIATIONS
            </h3>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-orange-500/50 to-orange-500/20"></div>
        </div>

        {/* Affiliations Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {affiliations.map((affiliation) => (
            <div
              key={affiliation.id}
              className="bg-gradient-to-br from-black/80 to-black/60 rounded-2xl p-6 lg:p-8 mb-8 shadow-2xl"
            >
              <div className="flex flex-col items-start justify-items-start lg:flex-row gap-6 lg:gap-8">
                {/* Left side - Affiliation Image */}
                <div className="w-full lg:w-1/2 mt-[-25px]">
                  <div className="relative bg-gradient-to-br from-black/60 to-black/80 rounded-xl p-4 lg:p-6 h-full">
                    <Image
                      src={affiliationimg}
                      alt={`${affiliation.title} affiliation`}
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain rounded-lg mt-6 lg:mt-8"
                    />
                  </div>
                </div>

                {/* Right side - Certificate and Details */}
                <div className="w-full lg:w-1/2 gap-4">
                  {/* Certificate Preview */}
                  <div className="flex-shrink-0 h-full">
                    <div className="relative bg-gradient-to-br from-black/60 to-black/80 rounded-xl p-4 lg:p-6  overflow-hidden flex items-center justify-center">
                      <Image
                        src={affiliation.certificate}
                        alt={`${affiliation.title} certificate`}
                        width={800}
                        height={400}
                        className="w-full h-full object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* Affiliation Details */}
              <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-xl p-4 lg:p-6 flex-grow">
                <div className="flex items-center gap-3 lg:gap-4 mb-3 lg:mb-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center flex-shrink-0">
                    <Image
                      src={affiliation.logo}
                      alt={`${affiliation.title} logo`}
                      width={60}
                      height={60}
                      className="w-10 h-10 lg:w-12 lg:h-12 object-contain"
                    />
                  </div>
                  <h4 className="text-base lg:text-lg font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                    {affiliation.title}
                  </h4>
                </div>
                <p className="text-white/90 leading-relaxed text-sm mb-4">
                  {affiliation.description}
                </p>
                {affiliation.affiliationText && (
                  <div className="bg-black/40 rounded-lg p-3 lg:p-4 border border-orange-500/10">
                    <h5 className="text-sm font-semibold text-orange-400 mb-2 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                      About This Partnership
                    </h5>
                    <p className="text-white/80 text-xs lg:text-sm leading-relaxed">
                      {affiliation.affiliationText}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default HomeAffiliation;
