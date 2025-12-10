"use client";
import { useEffect, useState } from "react";
import styles from "./countdown.module.css";
import EventPopup from "../Forms/EventPopUpForm.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function CountdownTimer({ data }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [hasEnded, setHasEnded] = useState(false);
  const [showEventPopup, setShowEventPopup] = useState(false);

  const handleOpenEventPopup = () => setShowEventPopup(true);
  const handleCloseEventPopup = () => setShowEventPopup(false);

  // State for flip animations
  const [dayFlip, setDayFlip] = useState(false);
  const [hourFlip, setHourFlip] = useState(false);
  const [minuteFlip, setMinuteFlip] = useState(false);
  const [secondFlip, setSecondFlip] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const endDate = new Date(data.lastDay);
      const now = new Date();
      const difference = endDate - now;

      if (difference <= 0) {
        setHasEnded(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const updateTimer = () => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft((prev) => {
        // Trigger flip animations when values change
        if (newTimeLeft.days !== prev.days) setDayFlip(true);
        if (newTimeLeft.hours !== prev.hours) setHourFlip(true);
        if (newTimeLeft.minutes !== prev.minutes) setMinuteFlip(true);
        if (newTimeLeft.seconds !== prev.seconds) setSecondFlip(true);
        return newTimeLeft;
      });

      setTimeout(() => {
        setDayFlip(false);
        setHourFlip(false);
        setMinuteFlip(false);
        setSecondFlip(false);
      }, 500);
    };

    // Initial update
    updateTimer();

    // Set interval for updates
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, [data.lastDay]);

  const formatValue = (value) => {
    return value < 10 ? `0${value}` : value.toString();
  };

  if (hasEnded) {
    return (
      <div className={styles.background}>
        <div className={`${styles.container} ${styles.center}`}>
          <h1 className={styles.heading}>THIS WEBINAR HAS ENDED</h1>
          <p className="text-gray-300 mt-4">
            Check out our other upcoming webinar!
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <main className={styles.background}>
        <div className={`${styles.container} ${styles.center}`}>
          <h1 className={styles.heading}>REMAINING TIME</h1>

          <section className={styles.countdownTimer}>
            {/* Days */}
            <div className={styles.countdownInfo}>
              <div className={styles.timerBox}>
                <div
                  className={`${styles.sheet} ${dayFlip ? styles.flip : ""}`}
                ></div>
                <div className={styles.circleLeft}></div>
                <p id="days" className={styles.primary}>
                  {formatValue(timeLeft.days)}
                </p>
                <div className={styles.circleRight}></div>
              </div>
              <p className={styles.subHeading}>DAYS</p>
            </div>

            {/* Hours */}
            <div className={styles.countdownInfo}>
              <div className={styles.timerBox}>
                <div
                  className={`${styles.sheet} ${hourFlip ? styles.flip : ""}`}
                ></div>
                <div className={styles.circleLeft}></div>
                <p id="hours" className={styles.primary}>
                  {formatValue(timeLeft.hours)}
                </p>
                <div className={styles.circleRight}></div>
              </div>
              <p className={styles.subHeading}>HOURS</p>
            </div>

            {/* Minutes */}
            <div className={styles.countdownInfo}>
              <div className={styles.timerBox}>
                <div
                  className={`${styles.sheet} ${minuteFlip ? styles.flip : ""}`}
                ></div>
                <div className={styles.circleLeft}></div>
                <p id="minutes" className={styles.primary}>
                  {formatValue(timeLeft.minutes)}
                </p>
                <div className={styles.circleRight}></div>
              </div>
              <p className={styles.subHeading}>MINUTES</p>
            </div>

            {/* Seconds */}
            <div className={styles.countdownInfo}>
              <div className={styles.timerBox}>
                <div
                  className={`${styles.sheet} ${secondFlip ? styles.flip : ""}`}
                ></div>
                <div className={styles.circleLeft}></div>
                <p id="seconds" className={styles.primary}>
                  {formatValue(timeLeft.seconds)}
                </p>
                <div className={styles.circleRight}></div>
              </div>
              <p className={styles.subHeading}>SECONDS</p>
            </div>
          </section>
        </div>

        <div className={`${styles.buttonContainer} flex justify-center`}>
          {/* <button
            className="w-full md:w-auto px-6 py-2 mt-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition"
             onClick={handleOpenEventPopup}
          >
            REGISTER NOW
          </button> */}
          <a
            href={data?.whatsappGroupLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center justify-center gap-2 w-full md:w-auto px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md transition">
              <FontAwesomeIcon icon={faWhatsapp} className="w-8 h-8" />
              Join WhatsApp Group
            </button>
          </a>
        </div>
      </main>
      {/* Event Registration Popup */}
      <EventPopup
        isOpen={showEventPopup}
        onClose={handleCloseEventPopup}
        event={data}
        mailId="eventleads@sevenmentor.com"
      />
    </>
  );
}
