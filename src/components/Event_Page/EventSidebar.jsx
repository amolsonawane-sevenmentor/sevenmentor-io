import CountdownTimer from "./CountdownTimer";
import EventForm from "../Forms/EventForm";

export const EventSidebar = ({ event }) => {
  return (
    <>
      {/* Show QR code only if event is not free */}
      {event?.price && !event.price.toLowerCase().includes("free") && (
        <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-750 px-6 py-3 border-b border-gray-700">
            <h3 className="text-lg font-semibold text-white">
              Scan The QR Code
            </h3>
          </div>
          <div className="p-6 flex justify-center">
            {/* Replace with your QR code image */}
            <img
              src="/assets/EventImages/datascience/event-qr.webp"
              alt="QR Code"
              className="w-full object-contain"
            />
          </div>
        </div>
      )}

      {/* Always show form */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden mt-6">
        <div className="bg-gray-750 px-6 py-3 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">
            Register Your Interest
          </h3>
        </div>
        <div className="p-6">
          <EventForm event={event} />
        </div>
      </div>
    </>
  );
};
