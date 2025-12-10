"use client";
import { useState, useEffect, useRef } from "react";
import PopupForm from "../Forms/PopUpForm/PopUpForm";
// import PopupForm from "./PopUpForm"

export default function PopupFormClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [openedManually, setOpenedManually] = useState(false);
  const timerRef = useRef(null);

  // Timer logic: open every 30s if not already open
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIsOpen((prev) => {
        // Only open if not already open and not opened manually
        if (!prev && !openedManually) {
          return true;
        }
        return prev;
      });
    }, 40000);
    return () => clearInterval(timerRef.current);
  }, [openedManually]);

  // When closed, allow auto open again after a short delay
  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setOpenedManually(false), 500);
  };

  // Manual open disables auto open until closed
  const handleManualOpen = () => {
    setIsOpen(true);
    setOpenedManually(true);
  };

  return (
    <>
      <PopupForm
        isOpen={isOpen}
        onClose={handleClose}
        title={"Request Callback"}
        mailId={"registration@sevenmentor.com"}
        contactNo={"7798058777"}
        bannerTitle={"Individual Course At SevenMentor"}
        mailSubject={"New Callback Request Received"}
        userEmailSubject={
          "Thank You for Requesting a Callback from SevenMentor"
        }
      />
    </>
  );
}
