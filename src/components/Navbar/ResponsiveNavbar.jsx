"use client"

import { useEffect, useState } from "react"
// import DesktopNavbar from "./TopNavbar"
import MobileNavbar from "./MobileNavbar"
import Navbar from "./TopNavbar"
import DesktopNavbar from "./DesktopNavbar"
// import Navbar from "./Navbar"

export default function ResponsiveNavbar() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  return (
    <>
      {isMobile ? (
        <MobileNavbar />
      ) : (
        <>
          <DesktopNavbar />
          <Navbar/>
          {/* <Navbar /> */}
        </>
      )}
    </>
  )
}