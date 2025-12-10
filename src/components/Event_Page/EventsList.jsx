"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Calendar } from "lucide-react";
import { WhyJoinCard } from "./WhyJoinCard";
import EventPopUpForm from "../Forms/EventPopUpForm.jsx";
import Image from "next/image";

// Helper function to parse date and time string properly
const parseEventDateTime = (dateStr, timeStr) => {
  // Convert date format from "18 October 2025" to "2025-10-18"
  const months = {
    "January": "01", "February": "02", "March": "03", "April": "04",
    "May": "05", "June": "06", "July": "07", "August": "08",
    "September": "09", "October": "10", "November": "11", "December": "12"
  };

  const dateParts = dateStr.split(" ");
  const day = dateParts[0].padStart(2, '0');
  const month = months[dateParts[1]];
  const year = dateParts[2];

  // Convert time format from "12:00 PM (IST)" to 24-hour format
  const timeMatch = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!timeMatch) return null;

  let hours = parseInt(timeMatch[1]);
  const minutes = parseInt(timeMatch[2]);
  const period = timeMatch[3].toUpperCase();

  if (period === 'PM' && hours !== 12) {
    hours += 12;
  } else if (period === 'AM' && hours === 12) {
    hours = 0;
  }

  // Create date string in format: YYYY-MM-DDTHH:mm:ss
  const dateTimeStr = `${year}-${month}-${day}T${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:00`;
  return new Date(dateTimeStr);
};

// Enhanced countdown hook with proper event status
const useEventCountdown = (dateStr, startTime, endTime) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });
  const [eventStatus, setEventStatus] = useState('upcoming'); // 'upcoming', 'live', 'ended'

  useEffect(() => {
    const calculateTimeLeft = () => {
      const startDateTime = parseEventDateTime(dateStr, startTime);
      const endDateTime = parseEventDateTime(dateStr, endTime);
      const now = new Date();

      if (!startDateTime || !endDateTime) {
        setEventStatus('ended');
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      // Check event status
      if (now >= endDateTime) {
        setEventStatus('ended');
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      } else if (now >= startDateTime && now < endDateTime) {
        setEventStatus('live');
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      } else {
        setEventStatus('upcoming');
        // Calculate time until start
        const difference = startDateTime - now;
        if (difference <= 0) {
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
    };

    const updateTimer = () => {
      setTimeLeft(calculateTimeLeft());
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [dateStr, startTime, endTime]);

  return { timeLeft, eventStatus };
};

// Enhanced small countdown component
const SmallCountdown = ({ dateStr, startTime, endTime }) => {
  const { timeLeft, eventStatus } = useEventCountdown(dateStr, startTime, endTime);

  if (eventStatus === 'ended') {
    return (
      <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full border border-red-500/30">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        <span className="text-xs text-red-400 font-medium">Webinar Ended</span>
      </div>
    );
  }

  if (eventStatus === 'live') {
    return (
      <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-green-500/20 to-green-600/20 rounded-full border border-green-500/30">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-xs text-green-400 font-medium">Webinar Live</span>
      </div>
    );
  }

  const formatValue = (value) => (value < 10 ? `0${value}` : value);

  return (
    <div className="flex items-center gap-1 text-xs">
      {/* Days */}
      <div className="relative group">
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white px-2 py-1 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 border border-orange-400/30">
          <div className="text-center">
            <div className="font-bold text-sm leading-tight">{formatValue(timeLeft.days)}</div>
            <div className="text-[8px] uppercase tracking-wide opacity-90">days</div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
      </div>
      <div className="text-orange-400 font-bold animate-pulse">:</div>

      {/* Hours */}
      <div className="relative group">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white px-2 py-1 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 border border-blue-400/30">
          <div className="text-center">
            <div className="font-bold text-sm leading-tight">{formatValue(timeLeft.hours)}</div>
            <div className="text-[8px] uppercase tracking-wide opacity-90">hrs</div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-lg blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
      </div>
      <div className="text-blue-400 font-bold animate-pulse">:</div>

      {/* Minutes */}
      <div className="relative group">
        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white px-2 py-1 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 border border-green-400/30">
          <div className="text-center">
            <div className="font-bold text-sm leading-tight">{formatValue(timeLeft.minutes)}</div>
            <div className="text-[8px] uppercase tracking-wide opacity-90">min</div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-500 rounded-lg blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
      </div>
      <div className="text-green-400 font-bold animate-pulse">:</div>

      {/* Seconds */}
      <div className="relative group">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white px-2 py-1 rounded-lg shadow-md group-hover:shadow-lg transition-all duration-300 border border-purple-400/30">
          <div className="text-center">
            <div className="font-bold text-sm leading-tight">{formatValue(timeLeft.seconds)}</div>
            <div className="text-[8px] uppercase tracking-wide opacity-90">sec</div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg blur-sm opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"></div>
      </div>
    </div>
  );
};

export const EventsList = ({ events }) => {
  const [showEventPopup, setShowEventPopup] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const router = useRouter();

  const truncateDescription = (description, wordLimit) => {
    const words = description.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return description;
  };

  // Helper function to get event status
  const getEventStatus = (dateStr, startTime, endTime) => {
    const startDateTime = parseEventDateTime(dateStr, startTime);
    const endDateTime = parseEventDateTime(dateStr, endTime);
    const now = new Date();

    if (!startDateTime || !endDateTime) return 'ended';
    if (now >= endDateTime) return 'ended';
    if (now >= startDateTime && now < endDateTime) return 'live';
    return 'upcoming';
  };

  // Function to categorize and sort events
  const categorizeEvents = (events) => {
    // Add status to each event and sort by start date/time
    const eventsWithStatus = events.map(event => ({
      ...event,
      status: getEventStatus(event.date, event.time, event.endTime),
      startDateTime: parseEventDateTime(event.date, event.time)
    })).filter(event => event.startDateTime); // Filter out events with invalid dates

    // Sort events within each category by start date
    const sortByStartDate = (a, b) => {
      return new Date(a.startDateTime) - new Date(b.startDateTime);
    };

    // Separate events by status
    const liveEvents = eventsWithStatus.filter(event => event.status === 'live').sort(sortByStartDate);
    const upcomingEvents = eventsWithStatus.filter(event => event.status === 'upcoming').sort(sortByStartDate);
    const endedEvents = eventsWithStatus.filter(event => event.status === 'ended').sort((a, b) => {
      // Sort ended events by start date in descending order (most recent first)
      return new Date(b.startDateTime) - new Date(a.startDateTime);
    });

    return { liveEvents, upcomingEvents, endedEvents };
  };

  const { liveEvents, upcomingEvents, endedEvents } = categorizeEvents(events);
  
  // Combine all events in order: live, upcoming, ended
  const sortedEvents = [...liveEvents, ...upcomingEvents, ...endedEvents];

  const handleEventCardClick = (event, e) => {
    e.preventDefault(); // Prevent Link navigation
    setSelectedEvent(event);
    setShowEventPopup(true);
  };

  const handleCloseEventPopup = () => {
    setShowEventPopup(false);
    setSelectedEvent(null);
  };

  const handleFormSuccess = () => {
    // This will be called from EventPopUpForm after successful submission
    setShowEventPopup(false);
    setSelectedEvent(null);
    router.push("/events");
  };

  // Component to render section header
  const SectionHeader = ({ title, count, bgColor, textColor }) => {
    if (count === 0) return null;
    
    return (
      <div className={`mb-6 ${bgColor} rounded-lg p-4 border-l-4 ${textColor === 'text-green-400' ? 'border-green-500' : textColor === 'text-blue-400' ? 'border-blue-500' : 'border-red-500'}`}>
        <h3 className={`text-lg font-semibold ${textColor} flex items-center gap-2`}>
          <div className={`w-3 h-3 rounded-full ${textColor === 'text-green-400' ? 'bg-green-500' : textColor === 'text-blue-400' ? 'bg-blue-500' : 'bg-red-500'} animate-pulse`}></div>
          {title} ({count})
        </h3>
      </div>
    );
  };

  // Component to render events for a specific section
  const EventSection = ({ events, isLiveSection = false, isUpcomingSection = false }) => {
    if (events.length === 0) return null;

    return (
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {events.map((event) => {
          const eventStatus = event.status;
          const isRegistrationDisabled = eventStatus === 'ended';

          return (
            <Link href={`/webinar/${event.slug}`} key={event.id}>
              <div className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-xl group transition duration-300 hover:shadow-orange-500/20 border border-gray-700 hover:border-orange-500/50 flex flex-col h-full cursor-pointer ${
                isLiveSection ? 'ring-2 ring-green-500/50 shadow-green-500/20' : 
                isUpcomingSection ? 'ring-1 ring-blue-500/30' : 
                'opacity-75'
              }`}
                onClick={(e) => handleEventCardClick(event, e)}
              >
                <div className="relative h-48">
                  <Image
                    fill
                    src={event.image_url || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-contain transition duration-500 group-hover:scale-105 group-hover:opacity-80"
                  />
                  <div className="absolute top-0 right-0 m-4 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded-full shadow">
                    {event?.type || "Webinar"}
                  </div>
                  <div className="absolute bottom-[-5px] left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-base sm:text-lg font-semibold text-white">
                      {event.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <p className="text-sm text-gray-300 mb-4">
                      {truncateDescription(event.description, 20)}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
                      <div>Start time: {event.time}</div>
                      <div>End time: {event.endTime}</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col gap-1">
                      <div className="text-orange-400 font-semibold flex items-center text-xs">
                        <Calendar className="h-3 w-3 text-orange-400 mr-1" />
                        <span>{event.date}</span>
                      </div>
                      <SmallCountdown
                        dateStr={event.date}
                        startTime={event.time}
                        endTime={event.endTime}
                      />
                    </div>
                    <button
                      className={`px-4 py-2 text-sm font-semibold rounded-lg transition flex items-center justify-center ${
                        isRegistrationDisabled
                          ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                          : 'bg-orange-500 text-white hover:bg-orange-600'
                      }`}
                      disabled={isRegistrationDisabled}
                    >
                      {eventStatus === 'ended' ? 'Webinar Ended' : eventStatus === 'live' ? 'Join Live' : 'Register Now'}
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  };

  if (sortedEvents.length === 0) {
    return (
      <div className="px-6 md:px-12 py-8 text-center">
        <h3 className="text-xl text-gray-300 mb-4">
          No upcoming webinar at the moment.
        </h3>
        <p className="text-gray-400">
          Check back soon for new events or subscribe to our newsletter!
        </p>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-12 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          {/* Live Events Section */}
          <SectionHeader 
            title="Live Events" 
            count={liveEvents.length} 
            bgColor="bg-gradient-to-r from-green-500/10 to-green-600/10" 
            textColor="text-green-400" 
          />
          <EventSection events={liveEvents} isLiveSection={true} />

          {/* Upcoming Events Section */}
          <SectionHeader 
            title="Upcoming Webinar" 
            count={upcomingEvents.length} 
            bgColor="bg-gradient-to-r from-blue-500/10 to-blue-600/10" 
            textColor="text-blue-400" 
          />
          <EventSection events={upcomingEvents} isUpcomingSection={true} />

          {/* Ended Events Section */}
          <SectionHeader 
            title="Past Webinar" 
            count={endedEvents.length} 
            bgColor="bg-gradient-to-r from-red-500/10 to-red-600/10" 
            textColor="text-red-400" 
          />
          <EventSection events={endedEvents} />
        </div>

        <div className="lg:w-1/4">
          <div className="sticky top-32">
            <WhyJoinCard />
          </div>
        </div>
      </div>

      {selectedEvent && (
        <EventPopUpForm
          isOpen={showEventPopup}
          onClose={handleCloseEventPopup}
          event={selectedEvent}
          mailId={selectedEvent?.mailId || "registration@sevenmentor.com"}
          onSuccess={handleFormSuccess}
        />
      )}
    </div>
  );
};
