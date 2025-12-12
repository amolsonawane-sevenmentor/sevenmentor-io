import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="bg-orange-500 px-4 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h3 className="text-xl font-semibold text-white text-center md:text-left">
            For More, Follow Us On Our Social Sites:
          </h3>
          <div className="flex gap-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition"
            >
              <span className="text-lg font-bold">f</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition"
            >
              <span className="text-lg font-bold">𝕏</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition"
            >
              <span className="text-lg font-bold">▶</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition"
            >
              <span className="text-lg font-bold">in</span>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-orange-500 transition"
            >
              <span className="text-lg font-bold">📷</span>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-950 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-6">
            {/* About SevenMentor */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 pb-2 border-b-2 border-orange-500 inline-block">
                About SevenMentor
              </h4>
              <ul className="space-y-3 mt-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> Enterprises
                    Network Solution
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> HR Recruitment IT
                    & Non-IT
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> Network
                    Consulting Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> Top Corporate
                    Training In Pune
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> Terms of Use
                  </a>
                </li>
              </ul>
            </div>

            {/* Networking Courses */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 pb-2 border-b-2 border-orange-500 inline-block">
                Networking Courses
              </h4>
              <ul className="space-y-3 mt-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> Amazon Web
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> Linux
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> Azure
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> Cyber Security
                  </a>
                </li>
              </ul>
            </div>

            {/* Software Courses */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 pb-2 border-b-2 border-orange-500 inline-block">
                Software Courses
              </h4>
              <ul className="space-y-3 mt-4">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> Artificial
                    Intelligence
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> Full Stack
                    Training
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> Java
                    Certification
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition flex items-center gap-2"
                  >
                    <span className="text-orange-500">›</span> MERN Stack
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact/Other */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6 pb-2 border-b-2 border-orange-500 inline-block">
                Contact Us
              </h4>
              <ul className="space-y-3 mt-4 text-gray-400 text-sm">
                <li>Office no. 101 & part office no.1, Civic Centre</li>
                <li>
                  MMGS Marg, Dadar East, Dadar, Mumbai, Maharashtra 400014
                </li>
                <li>Phone: 022-48904395</li>
                <li>Email: mumbaileads@sevenmentor.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>
              © {new Date().getFullYear()} SevenMentor & Training Pvt Ltd. All
              Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
