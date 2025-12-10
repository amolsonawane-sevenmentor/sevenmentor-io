import eventData from "./EventData.js";
import Image from "next/image.js";

const EventUpdates = () => {
  return (
    <section className="bg-black py-8 pb-16">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-orange-500 mb-10">
          SevenMentor <span className="text-white">Visits and Workshops</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {eventData.map((event, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-orange-500 to-black rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 shadow-orange-500/30 min-h-[24rem] flex flex-col"
            >
              <Image
                src={event.image}
                alt={event.title}
                className="w-full h-48 object-cover border-white border-4 rounded-xl"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                <p className="text-gray-300 mt-2 flex-grow">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventUpdates;
