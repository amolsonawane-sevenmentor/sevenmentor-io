"use client";

import dynamic from "next/dynamic";

// Only runs on client
const ResponsiveNavbar = dynamic(() => import("../components/Navbar/ResponsiveNavbar"), {
  ssr: false,
  loading: () => <div>Loading navbar...</div>,
});

const Footer = dynamic(() => import("../components/Footer/Footer"), {
  ssr: false,
  loading: () => <div>Loading footer...</div>,
});

export default function ClientLayoutWrapper({ children }) {
  return (
    <>
      <ResponsiveNavbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  );
}
