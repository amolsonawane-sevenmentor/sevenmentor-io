// "use client";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   ArrowLeft,
//   Calendar,
//   Clock,
//   MapPin,
//   Users,
//   Star,
// } from "lucide-react";
// import { EventContent } from "./EventContent.jsx";
// import { EventSidebar } from "./EventSidebar.jsx";
// import EventPopup from "../Forms/EventPopUpForm.jsx";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

// export const EventDetail = ({ event, scrollPosition }) => {
//   const [showEventPopup, setShowEventPopup] = useState(false);

//   const handleOpenEventPopup = () => setShowEventPopup(true);
//   const handleCloseEventPopup = () => setShowEventPopup(false);

//   const backToEvents = () => {
//     window.scrollTo(0, scrollPosition);
//     window.history.back();
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
//       {/* Hero Section */}
//       <div className="relative overflow-hidden">
//         <div className="w-full h-[50vh] md:h-[60vh] mt-[-145px] md:mt-14 relative overflow-hidden">
//           <motion.img
//             src={event.image_url || "/placeholder.svg?height=600&width=1200"}
//             alt={event.title}
//             className="w-full h-full object-contain "
//             initial={{ scale: 1.1 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 1.5 }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
//         </div>

//         <div className="container mx-auto px-6 md:px-12 relative -mt-32 z-10">
//           <motion.div
//             className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 md:p-3 shadow-xl border border-gray-700"
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//           >
//             <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
//               <div className="space-y-4">
//                 <h1 className="text-3xl md:text-4xl font-bold text-white">
//                   {event.title}
//                 </h1>

//                 <div className="flex flex-wrap items-center text-gray-300 gap-y-3 gap-x-6">
//                   <div className="flex items-center">
//                     <Calendar className="h-5 w-5 mr-2 text-orange-500" />
//                     <span>{event.date}</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Clock className="h-5 w-5 mr-2 text-orange-500" />
//                     <span>{event.time}</span>
//                   </div>
//                   <div className="flex items-center">
//                     <MapPin className="h-5 w-5 mr-2 text-orange-500" />
//                     <span>{event.location}</span>
//                   </div>
//                   <div className="flex items-center">
//                     <Users className="h-5 w-5 mr-2 text-orange-500" />
//                     <span>{event.attendees || "250+"} Attendees</span>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <Star
//                       key={star}
//                       className="h-4 w-4 fill-orange-500 text-orange-500"
//                     />
//                   ))}
//                   <span className="text-gray-300 text-sm ml-1">
//                     ({event.reviews || "42"} reviews)
//                   </span>
//                 </div>
//               </div>

//               <div className="flex flex-col items-start md:items-end gap-3">
//                 <div className="text-right">
//                   <p className="text-gray-400 text-sm">Starting from</p>
//                   <p className="text-3xl font-bold text-white">{event.price}</p>
//                 </div>
//                 {/* <button
//                   className="w-full md:w-auto px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition"
//                   onClick={handleOpenEventPopup}
//                 >
//                   Join Now
//                 </button> */}
//                 <a
//                   href={event?.whatsappGroupLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <button className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition">
//                     <FontAwesomeIcon icon={faWhatsapp} className="w-8 h-8" />
//                     Join WhatsApp Group
//                   </button>
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="container mx-auto px-4 md:px-12 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-8">
//             <EventContent event={event} />
//             {/* Back Button */}
//             <div className="mx-auto flex justify-center items-center md:block pb-12 overflow-x-hidden">
//               <button
//                 onClick={backToEvents}
//                 className="flex items-center px-4 py-2 bg-orange-500 rounded-full text-white hover:bg-orange-600 transition"
//               >
//                 <ArrowLeft className="h-5 w-5 mr-2" />
//                 Back to Events
//               </button>
//             </div>
//           </div>

//           <div className="space-y-6">
//             <EventSidebar event={event} />
//           </div>
//         </div>
//       </div>

//       {/* Event Registration Popup */}
//       <EventPopup
//         isOpen={showEventPopup}
//         onClose={handleCloseEventPopup}
//         event={event}
//         mailId="eventleads@sevenmentor.com"
//       />
//     </div>
//   );
// };






"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  MapPin,
  Users,
  Star,
} from "lucide-react";
import { EventContent } from "./EventContent.jsx";
import { EventSidebar } from "./EventSidebar.jsx";
import EventPopup from "../Forms/EventPopUpForm.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export const EventDetail = ({ event, scrollPosition }) => {
  const [showEventPopup, setShowEventPopup] = useState(false);

  const handleOpenEventPopup = () => setShowEventPopup(true);
  const handleCloseEventPopup = () => setShowEventPopup(false);

  const backToEvents = () => {
    window.scrollTo(0, scrollPosition);
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="w-full h-[50vh] md:h-[60vh] mt-[-145px] md:mt-14 relative overflow-hidden">
          <motion.img
            src={event.image_url || "/placeholder.svg?height=600&width=1200"}
            alt={event.title}
            className="w-full h-full object-contain "
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative -mt-32 z-10">
          <motion.div
            className="bg-gray-800/90 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl border border-gray-700"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex flex-col gap-6">
              {/* Event Info Section */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="space-y-4 md:flex-1 md:pr-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    {event.title}
                  </h1>

                  <div className="flex flex-wrap items-center text-gray-300 gap-y-3 gap-x-6">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-orange-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-orange-500" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-orange-500" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-orange-500" />
                      <span>{event.attendees || "250+"} Attendees</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-4 w-4 fill-orange-500 text-orange-500"
                      />
                    ))}
                    <span className="text-gray-300 text-sm ml-1">
                      ({event.reviews || "42"} reviews)
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center md:items-end gap-3 md:min-w-[200px] md:pl-4">
                  <div className="text-center md:text-right">
                    <p className="text-gray-400 text-sm">Starting from</p>
                    <p className="text-3xl font-bold text-white">{event.price}</p>
                  </div>
                </div>
              </div>

              {/* Centered WhatsApp Button */}
              <div className="flex justify-center mt-4">
                <a
                  href={event?.whatsappGroupLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-sm"
                >
                  <button className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
                    Join WhatsApp Group
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 md:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <EventContent event={event} />
            {/* Back Button */}
            <div className="mx-auto flex justify-center items-center md:block pb-12 overflow-x-hidden">
              <button
                onClick={backToEvents}
                className="flex items-center px-4 py-2 bg-orange-500 rounded-full text-white hover:bg-orange-600 transition"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Webinar
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <EventSidebar event={event} />
          </div>
        </div>
      </div>

      {/* Event Registration Popup */}
      <EventPopup
        isOpen={showEventPopup}
        onClose={handleCloseEventPopup}
        event={event}
        mailId="eventleads@sevenmentor.com"
      />
    </div>
  );
};
