
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SevenMentor",
  description:
    "Welcome to SevenMentor – Explore our top-rated courses and training programs.",
  keywords: [
    "SevenMentor",
    "training",
    "courses",
    "IT training",
    "certification",
  ],
  icons: {
    icon: "/favicon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">







      <body className={inter.className}>



        <Navbar />
        <main className="">{children}</main>
        <Footer />

























      </body>
    </html>
  );
}
