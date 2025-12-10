import { useState, useEffect } from "react";
import {
  ChevronUp,
  MapPin,
  Calendar,
  User,
  Briefcase,
  FileText,
  X,
  ExternalLink
} from "lucide-react";

import DiShadows from "../../../../public/assets/certificate/DishadowsCorporation.webp"
import healthkatta from "../../../../public/assets/certificate/HealthKattaa.webp"
import Dossiefoyer from "../../../../public/assets/certificate/Dossiefoyer.webp"
import Cosentia from "../../../../public/assets/certificate/Cosentia.webp"
import Image from "next/image";


export default function Collaboration() {
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [animateCards, setAnimateCards] = useState(false);

  // Trigger animation after component mounts
  useEffect(() => {
    setAnimateCards(true);
  }, []);

  const collaborations = [
    {
      name: "DiShadows Corporation",
      location: "Pune",
      date: "26-04-2025",
      person: "DiShadows Corporation",
      role: "CEO",
      pdf: "/assets/certificate/MoU-DiShadows.pdf",
      logo: DiShadows,
    },
    {
      name: "Health Kattaa",
      location: "Pune",
      date: "26-04-2025",
      person: "Health Kattaa",
      role: "CEO",
      pdf: "/assets/certificate/MoU-Health-Kattaa.pdf",
      logo: healthkatta,
    },
    {
      name: "Dossiefoyer Pvt. Ltd.",
      location: "Pune",
      date: "23-04-2025",
      person: "Vijay Verma",
      role: "Founder & Head",
      pdf: "/assets/certificate/Dossiefoyer-Seven-Mentor-MoU.pdf",
      logo: Dossiefoyer,
    },
    {
     
      name: "Cosentia Solutions Pvt. Ltd.",
      location: "Pune",
      date: "23-01-2024",
      person: "Krutika Maran",
      role: "HR",
      pdf: "/assets/certificate/MoU-Cosentia.pdf",
      logo: Cosentia,
    },
  ];

  const openPdf = (pdf) => {
    window.open(pdf, "_blank");
  };

  const closePdf = () => {
    setSelectedPdf(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 mt-8">
      {/* Heading with animated underline */}
      <div className="text-center mb-10 relative">
        <h2 className="md:text-4xl text-2xl font-bold text-orange-500 mb-4">
          Our Collaboration
        </h2>
        <div className="w-32 h-1 bg-orange-500 mx-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-orange-300 animate-pulse"></div>
        </div>
      </div>

      {/* Collaboration Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-5 md:p-0">
        {collaborations.map((collab, index) => (
          <div 
            key={index} 
            className={`transform transition-all duration-700 ${
              animateCards 
                ? "translate-y-0 opacity-100" 
                : "translate-y-16 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="group overflow-hidden rounded-lg bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-orange-500 h-full flex flex-col">
              {/* Card Header with Logo */}
              <div className="p-6 bg-black bg-opacity-50 relative">
                <div className="mb-4 w-full bg-white bg-opacity-90 p-4 rounded-md transform transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={collab.logo}
                    alt={`${collab.name} logo`}
                    className="w-full h-auto object-contain"
                  />
                </div>

                <div className="bg-orange-500 h-1 w-0 group-hover:w-full transition-all duration-500 mb-4"></div>

                <h3 className="text-xl text-center mb-4 whitespace-nowrap text-white group-hover:text-orange-400 transition-colors duration-300">
                  {collab.name}
                </h3>

                <div className="flex items-center mb-2 text-gray-300 group-hover:text-orange-300 transition-colors duration-300">
                  <MapPin size={16} className="text-orange-500 mr-2" />
                  <span>{collab.location}</span>
                </div>
              </div>

              {/* Card Body with Details */}
              <div className="bg-gray-900 p-6 border-t border-gray-700 flex-grow">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Calendar size={16} className="text-orange-500 mr-2 mt-1" />
                    <div className="text-gray-300">
                      <span className="text-orange-400 font-medium">MOU: </span> 
                      {collab.date}
                    </div>
                  </div>

                  <div className="flex items-start">
                    <User size={16} className="text-orange-500 mr-2 mt-1" />
                    <div className="text-gray-300">
                      <span className="text-orange-400 text-sm whitespace-nowrap">Auth Person: </span> 
                      {collab.person}
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Briefcase size={16} className="text-orange-500 mr-2 mt-1" />
                    <div className="text-gray-300">
                      <span className="text-orange-400 font-medium">Role: </span> 
                      {collab.role}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 bg-black">
                <button
                  onClick={() => openPdf(collab.pdf)}
                  className="w-full bg-orange-600 hover:bg-orange-500 text-white py-3 px-4 rounded-md flex items-center justify-center transition-all duration-300 group-hover:shadow-lg transform group-hover:-translate-y-1"
                >
                  <span>View Details</span>
                  <ExternalLink size={16} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PDF Viewer Modal with animation */}
      {selectedPdf && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50 backdrop-blur-sm"
          onClick={closePdf}
        >
          <div 
            className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl transform transition-all duration-300 animate-modalFadeIn"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between bg-orange-600 text-white p-4 border-b border-orange-700">
              <h3 className="font-bold text-lg">Collaboration Document</h3>
              <button 
                onClick={closePdf}
                className="rounded-full p-1 hover:bg-orange-700 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-4 h-[75vh] bg-gray-800">
              <embed
                src={selectedPdf}
                type="application/pdf"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      )}


    </div>
  );
}