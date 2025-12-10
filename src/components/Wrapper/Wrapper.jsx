import React from "react";
import Footer from "../Footer/Footer";
import { useMediaQuery } from "react-responsive";
import DesktopNavbar from "../Navbar/DesktopNavbar";
import MobileNavbar from "../Navbar/MobileNavbar";

const Wrapper = ({ children }) => {
  const isDesktop = useMediaQuery({ query: "(min-width: 849px)" });
  return (
    <>
      {isDesktop ? <DesktopNavbar /> : <MobileNavbar />}
      <main className="overflow-hidden bg-black">{children}</main>
      <Footer />
    </>
  );
};

export default Wrapper;
