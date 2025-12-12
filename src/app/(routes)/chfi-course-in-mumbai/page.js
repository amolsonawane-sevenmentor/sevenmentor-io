"use client";
import { useState } from "react";
import {
  Shield,
  ShieldCheck,
  Lock,
  AlertTriangle,
  FileCheck,
  Search,
  Users,
  Clock,
  Award,
  Briefcase,
  Star,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Target,
  TrendingUp,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Globe,
  Laptop,
  Code,
  Database,
  Network,
  Server,
  Eye,
  Bug,
  User,
  Building,
  GraduationCap,
  Zap,
  Terminal,
  X,
  MessageCircle,
  HardDrive,
  FileSearch,
  Fingerprint,
  Archive,
  Scale,
} from "lucide-react";
import EnrollForm from "../../../components/EnrollForm/EnrollForm";
import axios from "axios";

export default function CHFICoursePage() {
  const [expandedModule, setExpandedModule] = useState(1);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "Computer Hacking Forensic Investigator (CHFI)",
    batchPreference: "",
    experience: "",
    message: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const contactNo = "84211 76876";
      const bannerTitle = "CHFI Course Training";

      const payload = {
        formData,
        to: "mumbaileads@sevenmentor.com",
        Course: formData.course,
        contactNo,
        bannerTitle,
        mailSubject: "New Course Enrollment",
        userEmailSubject: "Thanks for Enrolling",
      };

      await axios.post("/api/main-form", payload);

      setPopup({
        show: true,
        type: "success",
        message: "Form submitted successfully!",
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        course: "Computer Hacking Forensic Investigator (CHFI)",
        batchPreference: "",
        experience: "",
        message: "",
      });
    } catch (err) {
      console.error(err);

      setPopup({
        show: true,
        type: "error",
        message: "Something went wrong!",
      });
    }

    setTimeout(() => {
      setPopup({ show: false, type: "", message: "" });
    }, 3000);
  };

  const heroData = {
    title: "Computer Hacking Forensic Investigator (CHFI)",
    subtitle:
      "Master Digital Forensics, Incident Investigation & Evidence Analysis",
    description:
      "Become a certified Computer Hacking Forensic Investigator with comprehensive training in digital forensics, cybercrime investigation, evidence handling, and expert witness testimony from industry professionals at SevenMentor",
    badges: [
      { icon: Clock, label: "110-130 Hours", color: "bg-orange-500" },
      { icon: Users, label: "1200+ Learners", color: "bg-orange-600" },
      { icon: Award, label: "CHFI Certified", color: "bg-orange-700" },
      { icon: Briefcase, label: "100% Placement", color: "bg-orange-500" },
    ],
  };

  const stats = [
    { value: "110-130", label: "Hours Training", icon: Clock, color: "orange" },
    { value: "1200+", label: "Students Trained", icon: Users, color: "orange" },
    {
      value: "85+",
      label: "Batches Completed",
      icon: TrendingUp,
      color: "orange",
    },
    {
      value: "12+ Years",
      label: "Expert Trainers",
      icon: Award,
      color: "orange",
    },
  ];

  const aboutCourse = {
    title: "About CHFI Training",
    description:
      "Computer Hacking Forensic Investigation (CHFI) is the process of detecting hacking attacks and properly extracting evidence to report the crime and conduct audits to prevent future attacks. CHFI professionals investigate computer systems, networks, and digital devices to uncover evidence of cybercrime. The CHFI Training Course in Mumbai provided by SevenMentor will equip you with the knowledge and skills to investigate cyber incidents, collect and preserve digital evidence, and present findings in court.",
    highlights: [
      "Certified Forensic Experts with 12+ years field experience",
      "Hands-on Labs with Forensic Tools and Software",
      "Real Cybercrime Investigation Case Studies",
      "Flexible Batches: Weekday, Weekend, and Fast Track",
      "100% Placement Assistance in Forensic Teams",
      "EC-Council CHFI Certification Preparation",
    ],
    sections: [
      {
        heading: "What is Computer Hacking Forensic Investigation?",
        content:
          "Computer Hacking Forensic Investigation is a specialized field that combines information security and law to investigate cybercrime. CHFI professionals use scientific methods and tools to identify, collect, preserve, analyze, and present digital evidence. They work closely with law enforcement, legal teams, and corporate security to investigate data breaches, insider threats, intellectual property theft, and various cybercrimes.",
      },
      {
        heading: "Why is CHFI Training Important?",
        content:
          "With the exponential growth in cybercrime, organizations and law enforcement agencies need skilled forensic investigators who can uncover digital evidence and bring criminals to justice. Digital forensics is crucial for incident response, legal proceedings, regulatory compliance, and understanding the scope of security breaches. CHFI professionals are in high demand across government agencies, law enforcement, corporate security teams, and consulting firms.",
      },
      {
        heading: "What Does a Forensic Investigator Do?",
        content:
          "Forensic investigators examine computers, mobile devices, networks, and digital storage to find evidence of criminal activity. They recover deleted files, analyze malware, trace hacker activities, examine email communications, investigate data breaches, prepare forensic reports, provide expert witness testimony in court, and help organizations understand how security incidents occurred and how to prevent them in the future.",
      },
      {
        heading: "Why Choose SevenMentor for CHFI Training?",
        content:
          "SevenMentor has established itself as Mumbai's premier digital forensics training provider with instructors who have real-world experience in cybercrime investigation and digital forensics. Our hands-on approach includes working with actual forensic tools like EnCase, FTK, Autopsy, and X-Ways, analyzing real case scenarios, and learning proper evidence handling procedures that comply with legal standards.",
      },
    ],
  };

  const syllabus = {
    modules: [
      {
        id: 1,
        title: "Computer Forensics in Today's World",
        duration: "1 Week",
        topics: [
          "Introduction to Computer Forensics",
          "Need for Computer Forensics",
          "Objectives of Computer Forensics",
          "Computer Forensics Investigation Process",
          "Role of a Computer Forensic Investigator",
          "Legal Aspects and Cyber Law",
        ],
      },
      {
        id: 2,
        title: "Computer Forensics Investigation Process",
        duration: "2 Weeks",
        topics: [
          "Forensic Investigation Methodology",
          "Pre-Investigation Phase",
          "Investigation Phase",
          "Post-Investigation Phase",
          "Evidence Collection Procedures",
          "Chain of Custody Management",
          "Forensic Readiness and Planning",
        ],
      },
      {
        id: 3,
        title: "Understanding Hard Disks and File Systems",
        duration: "2 Weeks",
        topics: [
          "Hard Disk Structure and Organization",
          "Disk Partitioning Schemes (MBR, GPT)",
          "File System Fundamentals",
          "Windows File Systems (FAT, NTFS, exFAT)",
          "Linux File Systems (ext2, ext3, ext4)",
          "Mac File Systems (HFS+, APFS)",
          "File System Analysis and Artifacts",
        ],
      },
      {
        id: 4,
        title: "Data Acquisition and Duplication",
        duration: "2 Weeks",
        topics: [
          "Types of Data Acquisition",
          "Forensic Imaging vs. Backup",
          "Live vs. Dead Acquisition",
          "Logical vs. Physical Acquisition",
          "Creating Forensic Images with Write Blockers",
          "Tools: FTK Imager, dd, EnCase",
          "Hash Verification (MD5, SHA)",
          "Documenting Acquisition Process",
        ],
      },
      {
        id: 5,
        title: "Defeating Anti-Forensics Techniques",
        duration: "2 Weeks",
        topics: [
          "Understanding Anti-Forensics",
          "Data Hiding Techniques",
          "Steganography Detection",
          "Encryption and Password Protection",
          "File Wiping and Secure Deletion",
          "Trail Obfuscation Methods",
          "Artifact Elimination Techniques",
          "Detecting and Defeating Anti-Forensics",
        ],
      },
      {
        id: 6,
        title: "Windows Forensics",
        duration: "3 Weeks",
        topics: [
          "Windows Operating System Architecture",
          "Windows Registry Analysis",
          "Windows Event Log Analysis",
          "Windows Memory Forensics",
          "Analyzing Windows Artifacts",
          "Browser History and Cache Analysis",
          "Recent Files and Jump Lists",
          "Windows Prefetch Analysis",
          "Shadow Copy Analysis",
          "Windows Password Recovery",
        ],
      },
      {
        id: 7,
        title: "Linux and Mac Forensics",
        duration: "2 Weeks",
        topics: [
          "Linux System Architecture",
          "Linux Log File Analysis",
          "Linux File System Forensics",
          "Linux Memory Forensics",
          "Mac OS X Architecture",
          "Mac Forensic Artifacts",
          "Mac File System Analysis",
          "Mac Application Analysis",
        ],
      },
      {
        id: 8,
        title: "Network Forensics",
        duration: "3 Weeks",
        topics: [
          "Network Forensics Fundamentals",
          "Network Traffic Analysis",
          "Packet Analysis with Wireshark",
          "Network Log Analysis",
          "Intrusion Detection Analysis",
          "Email Crime Investigation",
          "Web Attack Investigation",
          "Wireless Network Forensics",
          "VoIP Forensics",
        ],
      },
      {
        id: 9,
        title: "Investigating Web Attacks",
        duration: "2 Weeks",
        topics: [
          "Web Application Architecture",
          "Web Server Log Analysis",
          "Analyzing Web Attacks",
          "SQL Injection Investigation",
          "XSS Attack Investigation",
          "Web Shell Detection",
          "Web Application Firewall Logs",
          "IIS and Apache Log Analysis",
        ],
      },
      {
        id: 10,
        title: "Dark Web Forensics",
        duration: "2 Weeks",
        topics: [
          "Understanding the Dark Web",
          "Tor Network Investigation",
          "Dark Web Marketplaces",
          "Cryptocurrency Tracking",
          "Bitcoin Forensics",
          "Anonymous Communication Investigation",
          "Dark Web Evidence Collection",
          "Legal Considerations",
        ],
      },
      {
        id: 11,
        title: "Database Forensics",
        duration: "2 Weeks",
        topics: [
          "Database Fundamentals",
          "SQL Server Forensics",
          "MySQL Forensics",
          "Oracle Database Forensics",
          "Database Log Analysis",
          "Data Recovery from Databases",
          "Database Tampering Detection",
          "Database Security Audit",
        ],
      },
      {
        id: 12,
        title: "Cloud Forensics",
        duration: "2 Weeks",
        topics: [
          "Cloud Computing Fundamentals",
          "Cloud Forensic Challenges",
          "AWS Cloud Forensics",
          "Azure Cloud Forensics",
          "Google Cloud Forensics",
          "SaaS Application Forensics",
          "Cloud Storage Investigation",
          "Cloud Log Analysis",
        ],
      },
      {
        id: 13,
        title: "Investigating Email Crimes",
        duration: "2 Weeks",
        topics: [
          "Email System Architecture",
          "Email Header Analysis",
          "Tracing Email Origins",
          "Email Spoofing Investigation",
          "Phishing Email Analysis",
          "Email Client Forensics",
          "Webmail Investigation",
          "Email as Evidence",
        ],
      },
      {
        id: 14,
        title: "Malware Forensics",
        duration: "3 Weeks",
        topics: [
          "Malware Fundamentals",
          "Malware Analysis Techniques",
          "Static Malware Analysis",
          "Dynamic Malware Analysis",
          "Malware Forensics Tools",
          "Ransomware Investigation",
          "Trojan and Backdoor Analysis",
          "Advanced Persistent Threat (APT) Analysis",
          "Indicators of Compromise (IOC) Extraction",
        ],
      },
      {
        id: 15,
        title: "Mobile Forensics",
        duration: "3 Weeks",
        topics: [
          "Mobile Device Architecture",
          "iOS Forensics",
          "Android Forensics",
          "Mobile Data Acquisition Techniques",
          "SIM Card Forensics",
          "Mobile Application Analysis",
          "SMS and Call Log Analysis",
          "Social Media App Forensics",
          "Mobile Malware Investigation",
          "Mobile Forensic Tools (Cellebrite, Oxygen)",
        ],
      },
      {
        id: 16,
        title: "IoT Forensics",
        duration: "1 Week",
        topics: [
          "IoT Device Architecture",
          "IoT Security Challenges",
          "IoT Data Acquisition",
          "Smart Home Device Forensics",
          "Wearable Device Forensics",
          "IoT Network Traffic Analysis",
          "IoT Forensic Tools and Techniques",
        ],
      },
      {
        id: 17,
        title: "Memory Forensics",
        duration: "2 Weeks",
        topics: [
          "Memory Forensics Fundamentals",
          "Memory Acquisition Techniques",
          "Volatility Framework",
          "Analyzing Windows Memory Dumps",
          "Analyzing Linux Memory Dumps",
          "Malware Detection in Memory",
          "Process and DLL Analysis",
          "Network Connection Analysis from Memory",
        ],
      },
      {
        id: 18,
        title: "Forensic Report Writing and Legal Testimony",
        duration: "2 Weeks",
        topics: [
          "Forensic Report Structure",
          "Technical Report Writing",
          "Executive Summary Creation",
          "Evidence Documentation",
          "Chain of Custody Documentation",
          "Legal Considerations",
          "Expert Witness Testimony",
          "Courtroom Presentation Skills",
          "Cross-Examination Preparation",
        ],
      },
      {
        id: 19,
        title: "Forensic Tools and Technologies",
        duration: "2 Weeks",
        topics: [
          "EnCase Forensic Suite",
          "FTK (Forensic Toolkit)",
          "Autopsy - Open Source Platform",
          "X-Ways Forensics",
          "Sleuth Kit",
          "Bulk Extractor",
          "Registry Analysis Tools",
          "Password Recovery Tools",
          "Mobile Forensic Tools",
        ],
      },
      {
        id: 20,
        title: "CHFI Exam Preparation",
        duration: "1 Week",
        topics: [
          "CHFI Certification Overview",
          "Exam Format and Structure",
          "Practice Questions and Mock Tests",
          "Exam Tips and Strategies",
          "Review of Key Concepts",
          "Time Management Techniques",
          "Certification Requirements",
          "Career Path as CHFI Professional",
        ],
      },
    ],
  };

  const features = [
    {
      icon: GraduationCap,
      title: "Expert Forensic Trainers",
      description:
        "Learn from certified forensic investigators with 12+ years real-world experience",
      color: "orange",
    },
    {
      icon: Laptop,
      title: "Forensic Tool Mastery",
      description:
        "Hands-on training with EnCase, FTK, Autopsy, X-Ways, and Cellebrite",
      color: "orange",
    },
    {
      icon: Award,
      title: "EC-Council CHFI Certification",
      description: "Globally recognized certification preparation included",
      color: "orange",
    },
    {
      icon: Briefcase,
      title: "100% Placement Support",
      description:
        "Job assistance with forensic teams, law enforcement, and corporates",
      color: "orange",
    },
    {
      icon: Zap,
      title: "Flexible Learning Options",
      description: "Weekday evening, weekend, and fast-track batches available",
      color: "orange",
    },
    {
      icon: Building,
      title: "Corporate Training",
      description:
        "Customized forensic investigation training for organizations",
      color: "orange",
    },
  ];

  const proficiencies = [
    "Digital Evidence Collection and Preservation",
    "Forensic Imaging and Data Acquisition",
    "File System and Disk Analysis",
    "Windows, Linux, and Mac Forensics",
    "Mobile Device Forensic Investigation",
    "Network Traffic and Log Analysis",
    "Malware and Memory Forensics",
    "Expert Witness Testimony and Report Writing",
  ];

  const eligibility = [
    { label: "Law Enforcement Officers", eligible: true },
    { label: "Cybersecurity Professionals", eligible: true },
    { label: "System Administrators", eligible: true },
    { label: "IT Security Auditors", eligible: true },
    { label: "Legal Professionals", eligible: true },
    { label: "Incident Response Team Members", eligible: true },
    { label: "IT Graduates and Post-Graduates", eligible: true },
    { label: "Security Consultants", eligible: true },
    { label: "Anyone interested in Digital Forensics", eligible: true },
  ];

  const whyLearn = [
    {
      title: "High-Demand Expertise",
      description:
        "Forensic investigators are critically needed in law enforcement and corporate sectors",
    },
    {
      title: "Lucrative Career Path",
      description:
        "Competitive salaries with excellent growth opportunities and job security",
    },
    {
      title: "Fight Cybercrime",
      description:
        "Help bring cybercriminals to justice and protect organizations from threats",
    },
    {
      title: "Legal Recognition",
      description:
        "Serve as expert witness in court proceedings with professional credibility",
    },
    {
      title: "Diverse Industries",
      description:
        "Work across government, law enforcement, corporate, consulting, and legal sectors",
    },
    {
      title: "Continuous Innovation",
      description:
        "Stay at forefront of technology with evolving forensic tools and techniques",
    },
  ];

  const batches = [
    {
      id: "CHFI-2025-01",
      startDate: "28/01/2025",
      mode: "Online",
      timing: "Weekday Evening (Mon-Fri)",
      schedule: "7:00 PM - 9:00 PM",
      duration: "110-130 Hours",
      location: "Online Live",
      seats: "Available",
    },
    {
      id: "CHFI-2025-02",
      startDate: "03/02/2025",
      mode: "Offline",
      timing: "Weekend (Sat-Sun)",
      schedule: "10:00 AM - 6:00 PM",
      duration: "110-130 Hours",
      location: "Dadar, Mumbai",
      seats: "Filling Fast",
    },
    {
      id: "CHFI-2025-03",
      startDate: "10/02/2025",
      mode: "Hybrid",
      timing: "Fast Track (Mon-Fri)",
      schedule: "9:00 AM - 5:00 PM",
      duration: "110-130 Hours",
      location: "Mumbai + Online",
      seats: "Available",
    },
    {
      id: "CHFI-2025-04",
      startDate: "17/02/2025",
      mode: "Online",
      timing: "Weekend (Sat-Sun)",
      schedule: "11:00 AM - 7:00 PM",
      duration: "110-130 Hours",
      location: "Online Live",
      seats: "Available",
    },
  ];

  const reviews = [
    {
      name: "Rajesh Kumar",
      designation: "Digital Forensic Analyst at CBI",
      rating: 5,
      avatar: "RK",
      review:
        "SevenMentor's CHFI training is exceptional! The hands-on forensic labs with EnCase and FTK gave me real investigation experience. The trainers are actual forensic experts who have worked on major cybercrime cases. Cleared CHFI certification in first attempt and now working with CBI cyber division!",
    },
    {
      name: "Meera Iyer",
      designation: "Forensic Investigator at Deloitte",
      rating: 5,
      avatar: "MI",
      review:
        "Best digital forensics training in Mumbai! The course covers everything from disk imaging to mobile forensics and courtroom testimony. The real case study analysis and evidence handling procedures were invaluable. Got placed at Big 4 consulting firm immediately after certification!",
    },
    {
      name: "Arjun Deshmukh",
      designation: "Cyber Crime Investigator at Mumbai Police",
      rating: 5,
      avatar: "AD",
      review:
        "Completed the weekend batch while serving in police department. The training enhanced my investigation skills tremendously. Learned advanced techniques for recovering deleted data, analyzing malware, and preparing forensic reports. Now handling high-profile cybercrime investigations!",
    },
    {
      name: "Pooja Reddy",
      designation: "Security Consultant at KPMG",
      rating: 5,
      avatar: "PR",
      review:
        "SevenMentor provides industry-leading CHFI training with experienced forensic investigators. The practical sessions with Autopsy, Volatility, and mobile forensic tools were excellent. The placement support helped me transition into digital forensics consulting with 60% salary increase!",
    },
  ];

  const faqs = [
    {
      id: 1,
      question:
        "What is CHFI (Computer Hacking Forensic Investigator) certification?",
      answer:
        "CHFI is a globally recognized certification offered by EC-Council that validates your skills in detecting hacking attacks and properly extracting evidence. It demonstrates your expertise in computer forensics investigation, evidence handling, legal procedures, and using forensic tools. CHFI is highly valued by law enforcement agencies, corporate security teams, and legal organizations worldwide.",
    },
    {
      id: 2,
      question: "What are the prerequisites for CHFI training?",
      answer:
        "Basic understanding of computer systems, networking, and operating systems is helpful but not mandatory. Anyone with interest in digital forensics and cybercrime investigation can join. The course starts from fundamentals and progresses to advanced forensic techniques. IT professionals, law enforcement officers, and security analysts benefit most from this training.",
    },
    {
      id: 3,
      question: "What is the course duration and structure?",
      answer:
        "The complete CHFI training is 110-130 hours covering all 20 modules comprehensively. This includes theoretical sessions, extensive hands-on forensic labs, real case study analysis, tool training, and CHFI exam preparation. Duration varies based on batch type - weekday evening, weekend, or intensive fast-track schedule.",
    },
    {
      id: 4,
      question: "Which forensic tools will I learn?",
      answer:
        "You will get comprehensive hands-on training on industry-standard forensic tools including EnCase Forensic, FTK (Forensic Toolkit), Autopsy, X-Ways Forensics, Sleuth Kit, Volatility Framework for memory forensics, Cellebrite for mobile forensics, Wireshark for network forensics, and various password recovery and data carving tools.",
    },
    {
      id: 5,
      question: "Do you provide hands-on forensic investigation experience?",
      answer:
        "Yes! Practical forensic investigation is the core of our training. Students work in dedicated forensic labs with actual evidence scenarios, perform disk imaging, recover deleted files, analyze malware, investigate mobile devices, examine network traffic, and prepare forensic reports following proper legal procedures and chain of custody requirements.",
    },
    {
      id: 6,
      question: "What career opportunities are available after CHFI?",
      answer:
        "After CHFI certification, you can pursue roles like Digital Forensic Investigator, Computer Forensic Analyst, Cybercrime Investigator, Incident Response Analyst, Forensic Consultant, eDiscovery Specialist, Malware Analyst, Security Auditor, and Expert Witness. Opportunities exist in law enforcement, government agencies, corporate security teams, consulting firms, and legal organizations.",
    },
    {
      id: 7,
      question: "Is this training recognized by law enforcement?",
      answer:
        "Yes, CHFI is recognized and respected by law enforcement agencies worldwide including FBI, CBI, police cyber cells, and international law enforcement organizations. The certification follows internationally accepted forensic investigation standards and legal procedures, making CHFI professionals credible for expert witness testimony in court.",
    },
    {
      id: 8,
      question: "What is the salary range for forensic investigators?",
      answer:
        "Entry-level forensic investigators in India earn 4-7 LPA. With CHFI certification and 2-3 years experience, salaries range from 8-15 LPA. Senior forensic investigators and consultants with 5+ years experience can earn 18-30 LPA depending on organization, specialization, and location. Law enforcement positions have government pay scales with additional benefits.",
    },
    {
      id: 9,
      question: "Do you cover legal aspects and courtroom testimony?",
      answer:
        "Absolutely! The course includes comprehensive training on legal considerations, evidence admissibility, chain of custody, forensic report writing, and expert witness testimony. You will learn how to present technical findings in court, handle cross-examination, and communicate effectively with legal teams and judges.",
    },
    {
      id: 10,
      question: "Will I be prepared for the CHFI certification exam?",
      answer:
        "Yes! Our course is specifically designed to prepare you for the EC-Council CHFI certification exam. We cover all exam objectives, provide practice questions, mock tests, exam strategies, and tips. Our trainers guide you through the certification process and share their experience from conducting hundreds of forensic investigations.",
    },
    {
      id: 11,
      question: "Do you provide placement assistance?",
      answer:
        "Yes, SevenMentor provides 100% placement assistance. We help with resume building highlighting forensic skills, interview preparation focused on investigation scenarios, mock interviews, and connect you with law enforcement agencies, corporate forensic teams, consulting firms, and legal organizations. Our placement team has strong connections in the forensic investigation community.",
    },
    {
      id: 12,
      question: "What makes SevenMentor's CHFI training unique?",
      answer:
        "SevenMentor stands out with 12+ years experienced forensic investigators as trainers, hands-on labs with commercial forensic tools, real cybercrime case studies, proper evidence handling procedures, legal compliance training, courtroom testimony preparation, flexible batch timings, strong placement support, and proven track record of training 1200+ successful forensic investigators.",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, idx) => (
      <Star
        key={idx}
        className={`w-4 h-4 ${
          idx < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  const colorClasses = {
    orange: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-200",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sr-only">
        <h1>
          Computer Hacking Forensic Investigator (CHFI) Training Course in
          Mumbai | SevenMentor
        </h1>
      </header>

      {/* Floating Contact Buttons */}
      <div className="fixed left-6 bottom-6 z-50 flex flex-col gap-3">
        <a
          href="tel:022-48904395"
          className="w-14 h-14 bg-red-600 hover:bg-red-700 rounded-xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 group"
          aria-label="Call us"
        >
          <Phone className="w-7 h-7 text-white" />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=+918421176876&text=Hi+I+am+looking+for+CHFI+Course+in+Mumbai+course"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-600 hover:bg-green-700 rounded-xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300 group"
          aria-label="WhatsApp us"
        >
          <MessageCircle className="w-7 h-7 text-white" />
        </a>
      </div>

      {/* Enrollment Form Modal */}
      {showEnrollForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-orange-600 to-orange-500 text-white p-6 rounded-t-2xl flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">Enroll Now</h3>
                <p className="text-orange-100 text-sm">
                  Start your forensic investigation career today
                </p>
              </div>
              <button
                onClick={() => setShowEnrollForm(false)}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Course
                </label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  readOnly
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Batch Preference *
                  </label>
                  <select
                    name="batchPreference"
                    value={formData.batchPreference}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                  >
                    <option value="">Select batch type</option>
                    <option value="weekday-evening">Weekday Evening</option>
                    <option value="weekend">Weekend</option>
                    <option value="fast-track">Fast Track</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Experience Level
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                  >
                    <option value="">Select experience</option>
                    <option value="fresher">Fresher</option>
                    <option value="0-2-years">0-2 Years</option>
                    <option value="2-5-years">2-5 Years</option>
                    <option value="5+-years">5+ Years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none"
                  placeholder="Any questions or special requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transform hover:scale-[1.02] transition-all duration-300"
              >
                Submit Enrollment Request
              </button>

              <p className="text-sm text-gray-600 text-center">
                By submitting this form, you agree to our terms and privacy
                policy. Our team will contact you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC00Yy0xLjEgMC0yIC45LTIgMnY0YzAgMS4xLjkgMiAyIDJoNGMxLjEgMCAyLS45IDItMnYtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 px-4 py-2 rounded-full mb-6">
              <Fingerprint className="w-5 h-5 text-orange-300" />
              <span className="text-sm font-semibold text-orange-200">
                EC-Council CHFI Certified Training by SevenMentor
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              {heroData.title}
            </h1>
            <p className="text-xl md:text-2xl text-orange-200 mb-3 font-medium">
              {heroData.subtitle}
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              {heroData.description}
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {heroData.badges.map((badge, idx) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={idx}
                    className={`${badge.color} text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg`}
                  >
                    <Icon className="w-5 h-5" />
                    {badge.label}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setShowEnrollForm(true)}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Enroll Now - Limited Seats
              </button>
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300">
                Download Syllabus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 bg-white shadow-lg -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              const colors = colorClasses[stat.color];
              return (
                <div key={idx} className="text-center">
                  <div
                    className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-3`}
                  >
                    <Icon className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        {/* About Course Section */}
        <section
          id="about"
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {aboutCourse.title}
                </h2>
                <p className="text-sm text-gray-600">
                  Learn from industry experts at SevenMentor
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 space-y-8">
            <p className="text-gray-700 text-lg leading-relaxed">
              {aboutCourse.description}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {aboutCourse.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-green-50 border border-green-100 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {aboutCourse.sections.map((section, idx) => (
              <div key={idx} className="border-l-4 border-orange-500 pl-6 py-2">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-orange-600" />
                  {section.heading}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Learn CHFI */}
        <section className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-green-50 to-white p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Why Learn Digital Forensics?
                </h2>
                <p className="text-sm text-gray-600">
                  Benefits of pursuing forensic investigation career
                </p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {whyLearn.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-orange-50 border border-orange-100 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="font-bold text-gray-900 mb-2 text-lg flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-orange-600" />
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Syllabus */}
        <section
          id="syllabus"
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-50 to-white p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  CHFI Course Syllabus
                </h2>
                <p className="text-sm text-gray-600">
                  Complete 20 modules covering all forensic topics
                </p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                <div className="text-sm text-orange-600 font-medium">
                  Total Duration
                </div>
                <div className="text-2xl font-bold text-orange-700">
                  110-130 Hours
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 px-6 py-3 rounded-xl">
                <div className="text-sm text-green-600 font-medium">
                  Modules
                </div>
                <div className="text-2xl font-bold text-green-700">
                  {syllabus.modules.length}
                </div>
              </div>
              <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                <div className="text-sm text-orange-600 font-medium">
                  Skill Level
                </div>
                <div className="text-2xl font-bold text-orange-700">
                  All Levels
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {syllabus.modules.map((module) => (
                <div
                  key={module.id}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 transition-all duration-300 hover:shadow-lg"
                >
                  <button
                    onClick={() =>
                      setExpandedModule(
                        expandedModule === module.id ? null : module.id
                      )
                    }
                    className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                        {module.id}
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold text-gray-900">
                          {module.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">
                            {module.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                    {expandedModule === module.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>

                  {expandedModule === module.id && (
                    <div className="p-5 bg-white border-t border-gray-200">
                      <div className="space-y-2">
                        {module.topics.map((topic, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 py-2"
                          >
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <EnrollForm
          mailTo="mumbaileads@sevenmentor.com"
          course="Computer Hacking Forensic Investigator (CHFI)"
          contactNumber="022-48904395"
        />

        {/* Key Features */}
        <section
          id="features"
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Key Features
                </h2>
                <p className="text-sm text-gray-600">
                  What makes SevenMentor the best choice
                </p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                const colors = colorClasses[feature.color];
                return (
                  <div
                    key={idx}
                    className={`p-6 ${colors.bg} border ${colors.border} rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    <div
                      className={`w-12 h-12 ${colors.bg} border ${colors.border} rounded-lg flex items-center justify-center mb-4`}
                    >
                      <Icon className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Proficiency After Training */}
        <section className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-teal-50 to-white p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-600 to-teal-500 rounded-xl flex items-center justify-center">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Proficiency After Training
                </h2>
                <p className="text-sm text-gray-600">Skills you will master</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-4">
              {proficiencies.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-800 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility */}
        <section
          id="eligibility"
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-indigo-50 to-white p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Course Eligibility
                </h2>
                <p className="text-sm text-gray-600">
                  Who can enroll in this course
                </p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {eligibility.map((req, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-800 font-medium text-sm">
                    {req.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Batch Schedule */}
        <section
          id="schedule"
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Upcoming Batches
                </h2>
                <p className="text-sm text-gray-600">
                  Choose a batch that fits your schedule
                </p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-orange-200">
                      Batch ID
                    </th>
                    <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-orange-200">
                      Start Date
                    </th>
                    <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-orange-200">
                      Mode
                    </th>
                    <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-orange-200">
                      Timing
                    </th>
                    <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-orange-200">
                      Schedule
                    </th>
                    <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-orange-200">
                      Location
                    </th>
                    <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-orange-200">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {batches.map((batch, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-gray-100 hover:bg-orange-50 transition-colors duration-200"
                    >
                      <td className="p-4">
                        <span className="font-semibold text-gray-900">
                          {batch.id}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-700">
                            {batch.startDate}
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            batch.mode === "Online"
                              ? "bg-blue-100 text-blue-700"
                              : batch.mode === "Offline"
                              ? "bg-green-100 text-green-700"
                              : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          {batch.mode}
                        </span>
                      </td>
                      <td className="p-4 text-gray-700 text-sm">
                        {batch.timing}
                      </td>
                      <td className="p-4 text-gray-700 text-sm">
                        {batch.schedule}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-700">
                            {batch.location}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-pink-50 to-white p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-500 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Frequently Asked Questions
                </h2>
                <p className="text-sm text-gray-600">
                  Everything you need to know about CHFI training
                </p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="border border-gray-200 rounded-xl overflow-hidden hover:border-orange-400 transition-colors duration-300"
                >
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                    }
                    className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors duration-300 text-left"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    {expandedFaq === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>

                  {expandedFaq === faq.id && (
                    <div className="p-5 bg-white border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Details Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Become a Forensic Investigator?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join 1200+ students trained by SevenMentor and start your
                  digital forensics career
                </p>

                <div className="flex flex-col gap-4 mb-8">
                  <button
                    onClick={() => setShowEnrollForm(true)}
                    className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300"
                  >
                    <User className="w-5 h-5" />
                    Register Now
                  </button>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-6 text-orange-400 border-b-2 border-orange-400 pb-2 inline-block">
                  Contact Details
                </h3>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-xl mb-2 text-orange-400">
                          Mumbai
                        </h4>
                        <p className="text-gray-300 leading-relaxed">
                          Office no. 101 & part office no.1,
                          <br />
                          Civic Centre, MMGS Marg,
                          <br />
                          Dadar East, Dadar, Mumbai, ,<br />
                          <span className="text-orange-400 font-semibold">
                            Maharashtra 400014
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-700 pt-6 space-y-4">
                    <a
                      href="tel:022-48904395"
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                    >
                      <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center group-hover:bg-red-700 transition-colors">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">Call Us</div>
                        <div className="font-semibold text-lg">
                          022-48904395
                        </div>
                      </div>
                    </a>

                    <a
                      href="https://api.whatsapp.com/send?phone=+918421176876&text=Hi+I+am+looking+for+CHFI+Course+in+Mumbai+course"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                    >
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-700 transition-colors">
                        <MessageCircle className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">WhatsApp</div>
                        <div className="font-semibold text-lg">
                          +91 84211 76876
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2025 SevenMentor - Computer Hacking Forensic Investigator Training
            Institute Mumbai. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            CHFI Training | Digital Forensics Course | Cybercrime Investigation
            | Mumbai | SevenMentor
          </p>
        </div>
      </footer>
    </div>
  );
}
