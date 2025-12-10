import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const regularCertifications = [
  {
    id: 1,
    title: "ISO CERTIFICATION",
    description: "Validate your skills with an internationally recognized ISO certification.",
    logo: "/assets/certificate/logo/iso-logo.webp",
    certificate: "/assets/certificate/Iso-Certification.webp",
  },
  {
    id: 3,
    title: "IIT BOMBAY SPOKEN TUTORIAL CERTIFICATE",
    description: "Earn a prestigious certification from one of India's premier institutions.",
    logo: "/assets/certificate/logo/iit-logo.webp",
    certificate: "/assets/certificate/IIT-Certification.webp",
  },
  {
    id: 4,
    title: "QUIZ CERTIFICATE",
    description: "Earn a prestigious certification from one of India's premier institutions.",
    logo: "/assets/certificate/logo/sevenmentor-logo.webp",
    certificate: "/assets/certificate/Quiz-Certification.webp",
  },
];

const HomeCertifications = () => {
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
      <div>
        {/* Section Header with Decorative Elements */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-orange-500/20"></div>
          <div className="px-8 py-3 bg-gradient-to-r from-orange-500/10 to-orange-600/20 rounded-full border border-orange-500/30">
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent flex items-center gap-3">
              PROFESSIONAL CERTIFICATIONS   
            </h3>
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-orange-500/50 to-orange-500/20"></div>
        </div>

        {/* Certifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mx-auto md:px-18"
        >
          {regularCertifications.map((cert, index) => (
            <div
              key={cert.id}
              className="group relative bg-gradient-to-br from-black/80 to-black/60 rounded-2xl border border-orange-500/20 overflow-hidden hover:border-orange-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10"
            >

              {/* Header with Logo and Title */}
              <div className="p-4 lg:p-6 border-b border-orange-500/20 bg-gradient-to-r from-black/80 to-black/60">
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/30 border border-orange-500/30 flex items-center justify-center p-2 lg:p-3">
                    <Image
                      src={cert.logo || "/placeholder.svg"}
                      alt={`${cert.title} logo`}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm lg:text-base font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2 leading-tight">
                      {cert.title}
                    </h4>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      <span className="w-2 h-2 rounded-full bg-orange-400/70"></span>
                      <span className="w-2 h-2 rounded-full bg-orange-300/50"></span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Certificate Image */}
              <div className="p-4 lg:p-6 relative">
                <div className="relative bg-black/40 rounded-xl border border-orange-500/20 overflow-hidden group-hover:border-orange-500/40 transition-colors duration-300">
                  <Image
                    src={cert.certificate || "/placeholder.svg"}
                    alt={`${cert.title} certificate`}
                    width={400}
                    height={267}
                    className="w-full h-56 lg:h-72 object-contain p-3 lg:p-4"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3 lg:p-4">
                    <button 
                      className="px-3 py-2 lg:px-4 lg:py-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg text-white text-xs lg:text-sm font-medium hover:from-orange-600 hover:to-orange-700 transition-all shadow-md"
                      onClick={() => openPreview(cert)}
                    >
                      View Certificate
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <div className="p-4 lg:p-6 pt-0">
                <p className="text-white/80 text-xs lg:text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Certificate Preview Modal */}
      {previewCert && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center p-4"
          style={{ 
            position: 'fixed', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 9999
          }}
          onClick={closePreview}
        >
          <div 
            className="bg-gradient-to-br from-black/90 to-black/95 border border-orange-500/30 rounded-xl shadow-2xl max-w-5xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 border-b border-orange-500/20 flex justify-between items-center bg-black/60">
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                {previewCert.title}
              </h3>
              <button 
                onClick={closePreview}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Certificate Image */}
            <div className="p-6 flex items-center justify-center overflow-auto">
              <Image 
                src={previewCert.certificate}
                alt={`${previewCert.title} certificate`}
                width={1000}
                height={800}
                className="w-auto h-auto max-w-full sm:min-h-[60vh] object-contain rounded-lg border border-orange-500/30 shadow-lg"
              />
            </div>
            
            {/* Modal Footer */}
            <div className="p-4 border-t border-orange-500/20 flex justify-between items-center bg-black/60">
              <div className="flex items-center gap-3">
                <div className="w-16 h-10 rounded-full bg-gradient-to-br from-orange-500/10 to-orange-600/20 p-2 border border-orange-500/30 flex items-center justify-center">
                  <Image
                    src={previewCert.logo}
                    alt={`${previewCert.title} logo`}
                    width={64}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <button 
                onClick={closePreview}
                className="px-5 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-md text-white text-sm font-medium transition-all shadow-md"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeCertifications;