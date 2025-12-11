'use client';
import { useState } from 'react';
import {
    Shield, ShieldCheck, Lock, Key, AlertTriangle, FileCheck,
    Users, Clock, Award, Briefcase, Star, CheckCircle,
    ChevronDown, ChevronUp, BookOpen, Target, TrendingUp,
    Calendar, MapPin, Phone, Mail, Globe, Laptop,
    Code, Database, Network, Server, Eye, Bug, User,
    Building, GraduationCap, Zap, Terminal, X, MessageCircle,
    MessageSquare
} from 'lucide-react';
import EnrollForm from "../../../components/EnrollForm/EnrollForm"
export default function EthicalHackingCoursePage() {
    const [expandedModule, setExpandedModule] = useState(1);
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [showEnrollForm, setShowEnrollForm] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        course: 'Certified Ethical Hacking V12',
        batchPreference: '',
        experience: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your interest! Our team will contact you shortly.');
        setShowEnrollForm(false);
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            course: 'Certified Ethical Hacking V12',
            batchPreference: '',
            experience: '',
            message: ''
        });
    };

    const heroData = {
        title: 'Certified Ethical Hacking V12 Course',
        subtitle: 'Master the Art of Ethical Hacking & Penetration Testing',
        description: 'Become a Certified Ethical Hacker (CEH) with hands-on training in network security, vulnerability assessment, and real-world hacking techniques from industry experts at SevenMentor',
        badges: [
            { icon: Clock, label: '90-110 Hours', color: 'bg-orange-600' },
            { icon: Users, label: '2000+ Learners', color: 'bg-blue-600' },
            { icon: Award, label: 'CEH V12 Certified', color: 'bg-orange-600' },
            { icon: Briefcase, label: '100% Placement', color: 'bg-purple-600' }
        ]
    };

    const stats = [
        { value: '90-110', label: 'Hours Training', icon: Clock, color: 'orange' },
        { value: '2000+', label: 'Students Trained', icon: Users, color: 'orange' },
        { value: '100+', label: 'Batches Completed', icon: TrendingUp, color: 'orange' },
        { value: '8+ Years', label: 'Expert Trainers', icon: Award, color: 'orange' }
    ];

    const aboutCourse = {
        title: 'About Ethical Hacking Training',
        description: 'Ethical hacking is a legal and controlled method of identifying security flaws in networks, computer systems as well and applications. Ethical hackers use the same tools and methods as malicious hackers, however, with permission and to strengthen security protections. The Ethical Hacking Course in Mumbai provided by SevenMentor will equip students with the knowledge and skills to think like a hacker - legally and ethically.',
        highlights: [
            'Industry-Credentialed Trainers with 8+ years experience',
            'Practical Learning Environment with real hacking simulations',
            'Updated Curriculum following global cybersecurity standards',
            'Flexible Learning Options: Weekday, Weekend, and Fast Track batches',
            'Placement Assistance connecting you with top organizations',
            'Industry-Recognized Certification upon completion'
        ],
        sections: [
            {
                heading: 'What is Ethical Hacking?',
                content: 'Ethical Hacking has emerged as one of the fastest-growing and highly acknowledged career options in the technological field. SevenMentor is the leading institution in Mumbai that offers practical, work-oriented Ethical Hacking Education, enabling users to securely protect online platforms with confidence. Technology is advancing across all industries, and businesses require experts who are able to spot security holes before they can be discovered.'
            },
            {
                heading: 'Why is Ethical Hacking Training Important?',
                content: 'In the digital age, all businesses and multinational corporations depend on cybersecurity for safeguarding important data. A security breach could lead to financial loss and destruction of business trust among consumers. With the rise of online transactions and data storage, cybercrime rates have sharply risen, making cybersecurity expertise essential for business continuity and data protection.'
            },
            {
                heading: 'What is Penetration Testing?',
                content: 'Penetration testing, also shortened as pen-testing, is one of the basic ingredients of ethical hacking. This involves a cyber-attack simulation of a network, system, and web-based application to look for vulnerable points before malicious hackers get a chance to exploit the vulnerability. SevenMentor provides extensive knowledge and experience related to penetration tests that are performed similarly to real hacking attacks.'
            },
            {
                heading: 'Why Choose SevenMentor?',
                content: 'SevenMentor has shown itself to be a leading educational provider in the field of technology and cybersecurity. Train with industry experts and learn tricks and trade of the hacking world. The practical sessions, simulation of hacking, and lab sessions help achieve good understanding. The training program follows updated trends and standards of the global cybersecurity world.'
            }
        ]
    };

    const syllabus = {
        modules: [
            {
                id: 1,
                title: 'Introduction to Ethical Hacking',
                duration: '1 Week',
                topics: [
                    'Information Security Overview and Fundamentals',
                    'Cyber Security Basics and CIA Triad',
                    'Types of Hackers: White Hat, Black Hat, Grey Hat',
                    'Cyber Kill Chain Methodology',
                    'Hacking Concepts, Types, and Phases',
                    'Information Security Laws and Regulations'
                ]
            },
            {
                id: 2,
                title: 'Footprinting and Reconnaissance',
                duration: '1 Week',
                topics: [
                    'Footprinting Concepts and Methodology',
                    'Search Engine Footprinting Techniques',
                    'Website and Email Footprinting',
                    'Whois Lookup and DNS Interrogation',
                    'Network Footprinting using Traceroute',
                    'Social Media and People Search Footprinting'
                ]
            },
            {
                id: 3,
                title: 'Scanning Networks',
                duration: '2 Weeks',
                topics: [
                    'Network Scanning Concepts and Techniques',
                    'Host Discovery and Port Scanning',
                    'Nmap - Network Mapper Tool Mastery',
                    'OS Fingerprinting and Banner Grabbing',
                    'Vulnerability Scanning with Nessus and OpenVAS',
                    'Network Scanning Countermeasures'
                ]
            },
            {
                id: 4,
                title: 'Enumeration',
                duration: '1 Week',
                topics: [
                    'Enumeration Concepts and Techniques',
                    'NetBIOS and SNMP Enumeration',
                    'LDAP and NTP Enumeration',
                    'SMTP and DNS Enumeration',
                    'SMB and RPC Enumeration',
                    'Enumeration Countermeasures'
                ]
            },
            {
                id: 5,
                title: 'Vulnerability Analysis',
                duration: '2 Weeks',
                topics: [
                    'Vulnerability Assessment Concepts',
                    'Vulnerability Classification and Scoring (CVSS)',
                    'Vulnerability Assessment Tools and Solutions',
                    'Vulnerability Scanning with Nessus',
                    'OpenVAS and Qualys Vulnerability Management',
                    'Vulnerability Assessment Reports'
                ]
            },
            {
                id: 6,
                title: 'System Hacking',
                duration: '3 Weeks',
                topics: [
                    'Password Cracking Techniques',
                    'Microsoft Authentication and Password Hashes',
                    'Privilege Escalation Techniques',
                    'Executing Applications and Keyloggers',
                    'Hiding Files using NTFS Streams',
                    'Covering Tracks and Clearing Logs',
                    'Rootkits and Steganography'
                ]
            },
            {
                id: 7,
                title: 'Malware Threats',
                duration: '2 Weeks',
                topics: [
                    'Malware Concepts and Classification',
                    'Trojans, Viruses, and Worms',
                    'Malware Analysis Techniques',
                    'System File Infection and Payload',
                    'Anti-Malware Software and Tools',
                    'Daily Malware Analysis Best Practices'
                ]
            },
            {
                id: 8,
                title: 'Sniffing and Packet Analysis',
                duration: '2 Weeks',
                topics: [
                    'Packet Sniffing Concepts',
                    'Wireshark - Protocol Analyzer Mastery',
                    'MAC Flooding and ARP Poisoning',
                    'DHCP Starvation Attacks',
                    'DNS and HTTP Packet Analysis',
                    'Detecting Sniffing and Countermeasures'
                ]
            },
            {
                id: 9,
                title: 'Social Engineering',
                duration: '1 Week',
                topics: [
                    'Social Engineering Concepts',
                    'Social Engineering Techniques',
                    'Phishing and Spear Phishing',
                    'Identity Theft and Pretexting',
                    'Social Engineering Tools',
                    'Insider Threats and Countermeasures'
                ]
            },
            {
                id: 10,
                title: 'Denial of Service (DoS/DDoS)',
                duration: '1 Week',
                topics: [
                    'DoS and DDoS Attack Concepts',
                    'DoS Attack Techniques',
                    'DDoS Attack Tools',
                    'Botnets and Amplification Attacks',
                    'DoS/DDoS Attack Detection',
                    'DoS/DDoS Countermeasures and Protection'
                ]
            },
            {
                id: 11,
                title: 'Session Hijacking',
                duration: '1 Week',
                topics: [
                    'Session Hijacking Concepts',
                    'Session Hijacking Techniques',
                    'Application Level Session Hijacking',
                    'Session Fixation Attacks',
                    'Cross-Site Scripting (XSS) for Session Hijacking',
                    'Session Hijacking Detection and Prevention'
                ]
            },
            {
                id: 12,
                title: 'Evading IDS, Firewalls, and Honeypots',
                duration: '1 Week',
                topics: [
                    'Intrusion Detection Systems (IDS) Concepts',
                    'Firewall Technologies and Types',
                    'IDS/IPS Evasion Techniques',
                    'Firewall Evasion Tools',
                    'Honeypot Concepts and Detection',
                    'IDS/Firewall Evasion Countermeasures'
                ]
            },
            {
                id: 13,
                title: 'Hacking Web Servers',
                duration: '2 Weeks',
                topics: [
                    'Web Server Concepts and Architecture',
                    'Web Server Attacks and Vulnerabilities',
                    'Web Server Attack Methodology',
                    'Web Server Attack Tools',
                    'Web Server Security and Hardening',
                    'Patch Management and Web Server Logs'
                ]
            },
            {
                id: 14,
                title: 'Hacking Web Applications',
                duration: '3 Weeks',
                topics: [
                    'Web Application Concepts and Architecture',
                    'OWASP Top 10 Vulnerabilities 2021',
                    'SQL Injection Attacks',
                    'Cross-Site Scripting (XSS) Attacks',
                    'Cross-Site Request Forgery (CSRF)',
                    'Command Injection and File Inclusion',
                    'Web Application Security Testing with Burp Suite',
                    'OWASP ZAP Security Scanner'
                ]
            },
            {
                id: 15,
                title: 'SQL Injection',
                duration: '1 Week',
                topics: [
                    'SQL Injection Concepts',
                    'Types of SQL Injection Attacks',
                    'SQL Injection Methodology',
                    'SQL Injection Tools: SQLmap, Havij',
                    'Blind SQL Injection Techniques',
                    'SQL Injection Detection and Prevention'
                ]
            },
            {
                id: 16,
                title: 'Hacking Wireless Networks',
                duration: '2 Weeks',
                topics: [
                    'Wireless Network Concepts',
                    'Wireless Encryption: WEP, WPA, WPA2, WPA3',
                    'Wireless Hacking Methodology',
                    'Wireless Hacking Tools: Aircrack-ng',
                    'Bluetooth Hacking',
                    'Wireless Security Best Practices'
                ]
            },
            {
                id: 17,
                title: 'Hacking Mobile Platforms',
                duration: '1 Week',
                topics: [
                    'Mobile Platform Security Concepts',
                    'Android Security Architecture',
                    'iOS Security Architecture',
                    'Mobile Attack Vectors and Vulnerabilities',
                    'Mobile Device Management (MDM)',
                    'Mobile Security Tools and Best Practices'
                ]
            },
            {
                id: 18,
                title: 'IoT and OT Hacking',
                duration: '1 Week',
                topics: [
                    'IoT Architecture and Protocols',
                    'IoT Security Challenges',
                    'IoT Attack Surface and Vulnerabilities',
                    'OT (Operational Technology) Security',
                    'IoT/OT Hacking Tools',
                    'IoT Security Best Practices'
                ]
            },
            {
                id: 19,
                title: 'Cloud Computing Security',
                duration: '2 Weeks',
                topics: [
                    'Cloud Computing Concepts',
                    'Cloud Service Models: IaaS, PaaS, SaaS',
                    'Cloud Security Challenges',
                    'Cloud Attack Vectors',
                    'Container Security',
                    'Cloud Security Best Practices and Tools'
                ]
            },
            {
                id: 20,
                title: 'Cryptography',
                duration: '2 Weeks',
                topics: [
                    'Cryptography Fundamentals',
                    'Encryption Algorithms: AES, DES, RSA',
                    'Public Key Infrastructure (PKI)',
                    'Digital Signatures and Certificates',
                    'Cryptanalysis Techniques',
                    'Cryptography Tools and Applications'
                ]
            }
        ]
    };

    const features = [
        {
            icon: GraduationCap,
            title: 'Expert Trainers',
            description: 'Certified professionals with 8+ years experience trained 2000+ students',
            color: 'orange'
        },
        {
            icon: Laptop,
            title: 'Practical Sessions',
            description: 'Real-world hacking simulations and hands-on lab environment',
            color: 'orange'
        },
        {
            icon: Award,
            title: 'CEH V12 Certification',
            description: 'Globally recognized certification preparation included',
            color: 'orange'
        },
        {
            icon: Briefcase,
            title: 'Placement Support',
            description: '100% job assistance with leading MNCs and cybersecurity firms',
            color: 'orange'
        },
        {
            icon: Zap,
            title: 'Flexible Batches',
            description: 'Weekday, weekend, and fast-track batch options available',
            color: 'orange'
        },
        {
            icon: Building,
            title: 'Corporate Training',
            description: 'Customized training programs for organizations',
            color: 'orange'
        }
    ];

    const proficiencies = [
        'Daily Malware Analysis and Protocol Analysis',
        'Reverse Engineering to secure networks',
        'Debugging security issues and vulnerabilities',
        'Application Security Testing',
        'Computer Security Hardening',
        'Network Penetration Testing'
    ];

    const eligibility = [
        { label: 'Freshers with interest in cybersecurity', eligible: true },
        { label: 'BE/BSc/Any Engineering Graduate', eligible: true },
        { label: 'Any Graduate or Post-Graduate', eligible: true },
        { label: 'Working IT Professionals', eligible: true },
        { label: 'Network Administrators', eligible: true },
        { label: 'Network Security Engineers', eligible: true },
        { label: 'Information Security Professionals', eligible: true },
        { label: 'Technical Support Engineers', eligible: true },
        { label: 'System Administrators', eligible: true }
    ];

    const whyLearn = [
        {
            title: 'Comprehensive Understanding',
            description: 'Complete understanding of system security and ways to enhance it'
        },
        {
            title: 'Real World Relevance',
            description: 'Deals with real-time cyber issues and practical digital threats'
        },
        {
            title: 'Problem Solving Power',
            description: 'Analyze, recognize dangers, and develop security strategies'
        },
        {
            title: 'High Demand Career',
            description: 'Ethical hackers are rare IT professionals in high demand'
        },
        {
            title: 'Ethical Responsibility',
            description: 'Protect organizations from cybercrime and impact cybersecurity'
        },
        {
            title: 'Career Advancement',
            description: 'Opens scope for various cyber domains and leading positions'
        }
    ];

    const batches = [
        {
            id: 'CEH-2025-01',
            startDate: '20/01/2025',
            mode: 'Online',
            timing: 'Weekday Evening (Mon-Fri)',
            schedule: '7:00 PM - 9:00 PM',
            duration: '90-110 Hours',
            location: 'Online Live',
            seats: 'Available'
        },
        {
            id: 'CEH-2025-02',
            startDate: '27/01/2025',
            mode: 'Offline',
            timing: 'Weekend (Sat-Sun)',
            schedule: '10:00 AM - 6:00 PM',
            duration: '90-110 Hours',
            location: 'Dadar, Mumbai',
            seats: 'Filling Fast'
        },
        {
            id: 'CEH-2025-03',
            startDate: '03/02/2025',
            mode: 'Hybrid',
            timing: 'Fast Track (Mon-Fri)',
            schedule: '9:00 AM - 5:00 PM',
            duration: '90-110 Hours',
            location: 'Mumbai + Online',
            seats: 'Available'
        },
        {
            id: 'CEH-2025-04',
            startDate: '10/02/2025',
            mode: 'Online',
            timing: 'Weekend (Sat-Sun)',
            schedule: '11:00 AM - 7:00 PM',
            duration: '90-110 Hours',
            location: 'Online Live',
            seats: 'Available'
        }
    ];

    const reviews = [
        {
            name: 'Aditya Kulkarni',
            designation: 'Security Analyst at Infosys',
            rating: 5,
            avatar: 'AK',
            review: 'SevenMentor provided excellent CEH training with hands-on labs and real hacking scenarios. The trainers are industry experts who explain complex concepts simply. Got placed as Security Analyst right after certification!'
        },
        {
            name: 'Sneha Patil',
            designation: 'Penetration Tester at TCS',
            rating: 5,
            avatar: 'SP',
            review: 'Best ethical hacking institute in Mumbai! The practical sessions with Kali Linux and Metasploit were amazing. The course structure follows CEH V12 perfectly. Highly recommend for anyone serious about cybersecurity.'
        },
        {
            name: 'Rahul Deshmukh',
            designation: 'Network Security Engineer at Wipro',
            rating: 5,
            avatar: 'RD',
            review: 'Completed the weekend batch while working full-time. The flexible timings and expert guidance made it easy to learn. The placement team helped me transition to cybersecurity role with 40% salary hike!'
        },
        {
            name: 'Priyanka Joshi',
            designation: 'Information Security Specialist at Accenture',
            rating: 5,
            avatar: 'PJ',
            review: 'SevenMentor trainers have deep knowledge and real-world experience. The course covered everything from basics to advanced penetration testing. The certification preparation was thorough and I cleared CEH exam in first attempt!'
        }
    ];

    const faqs = [
        {
            id: 1,
            question: 'What is the Certified Ethical Hacker (CEH) V12 certification?',
            answer: 'CEH V12 is the latest version of the globally recognized Certified Ethical Hacker certification offered by EC-Council. It validates your knowledge and skills in ethical hacking, penetration testing, and vulnerability assessment. This certification is highly valued by employers worldwide and demonstrates your ability to think like a hacker to better protect organizations.'
        },
        {
            id: 2,
            question: 'What are the prerequisites for this course?',
            answer: 'There are no strict prerequisites for the Ethical Hacking course. Basic knowledge of computer systems and networking is helpful but not mandatory. Anyone curious about the hacking world with interest in cybersecurity can join. We start from fundamentals and gradually move to advanced concepts.'
        },
        {
            id: 3,
            question: 'What is the course duration and training hours?',
            answer: 'The complete course duration is 90-110 hours covering all 20 modules of CEH V12. Training includes theoretical sessions, practical lab work, and real-world project implementations. Duration may vary based on batch type - weekday evening, weekend, or fast-track.'
        },
        {
            id: 4,
            question: 'Do you provide hands-on practical training?',
            answer: 'Yes! Practical learning is our core strength. Students get access to dedicated hacking labs with tools like Kali Linux, Metasploit, Wireshark, Nmap, Burp Suite, and more. We conduct live hacking simulations, penetration testing exercises, and vulnerability assessment projects.'
        },
        {
            id: 5,
            question: 'What tools and software will I learn in this course?',
            answer: 'You will learn industry-standard tools including Kali Linux, Metasploit Framework, Wireshark, Nmap, Burp Suite, OWASP ZAP, Nessus, SQLmap, Aircrack-ng, John the Ripper, Hashcat, and many more security testing tools used by professional ethical hackers.'
        },
        {
            id: 6,
            question: 'Will I be prepared for the CEH certification exam?',
            answer: 'Absolutely! Our course is specifically designed to prepare you for the CEH V12 certification exam. We cover all exam objectives, provide mock tests, practice questions, and exam strategies. Our trainers guide you through the certification process and exam preparation.'
        },
        {
            id: 7,
            question: 'Do you provide placement assistance?',
            answer: 'Yes, SevenMentor provides 100% placement assistance. We help with resume building, interview preparation, mock interviews, and connect you with leading cybersecurity firms and MNCs. Our placement team has strong industry connections and helps students secure positions in top organizations.'
        },
        {
            id: 8,
            question: 'What are the career opportunities after this course?',
            answer: 'After completing the CEH course, you can pursue roles like Ethical Hacker, Penetration Tester, Security Analyst, Network Security Engineer, Information Security Specialist, Vulnerability Assessment Analyst, Security Consultant, SOC Analyst, and Cyber Security Engineer with attractive salary packages.'
        },
        {
            id: 9,
            question: 'Do you offer online training options?',
            answer: 'Yes! We offer high-quality online training with live sessions, recorded videos, and practical work. The Online Ethical Hacking Course provides the same standard as classroom training with flexibility for working professionals and remote learners. Interactive sessions ensure effective learning.'
        },
        {
            id: 10,
            question: 'Do you provide corporate training for organizations?',
            answer: 'Yes, SevenMentor offers Corporate Ethical Hacking Training for organizations looking to strengthen their cybersecurity workforce. We provide customized workshops, simulation programs, and expert sessions to train company staff on vulnerability awareness and cyber threat mitigation.'
        },
        {
            id: 11,
            question: 'What certification will I receive after course completion?',
            answer: 'Upon successful completion of theoretical and practical sessions, you will receive a SevenMentor certification that is globally recognized and accredited by major companies. This certification increases your resume value and helps you attain leading job positions in MNCs worldwide.'
        },
        {
            id: 12,
            question: 'What makes SevenMentor different from other institutes?',
            answer: 'SevenMentor stands out with 8+ years experienced trainers, 100+ completed batches, practical learning environment, updated curriculum following global standards, flexible batch timings, industry-recognized certification, strong placement support, and proven track record of training 2000+ successful cybersecurity professionals.'
        }
    ];

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, idx) => (
            <Star
                key={idx}
                className={`w-4 h-4 ${idx < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
        ));
    };

    const colorClasses = {
        orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <header className="sr-only">
                <h1>Certified Ethical Hacking V12 Course in Mumbai - CEH Certification Training | SevenMentor</h1>
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
                    href="https://api.whatsapp.com/send?phone=+918421176876&text=Hi+I+am+looking+for+Cyber+Security+Course+in+Mumbai+course"
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
                                <p className="text-orange-100 text-sm">Start your ethical hacking journey today</p>
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
                                By submitting this form, you agree to our terms and privacy policy.
                                Our team will contact you within 24 hours.
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
                            <ShieldCheck className="w-5 h-5 text-orange-300" />
                            <span className="text-sm font-semibold text-orange-200">CEH V12 Certified Training by SevenMentor</span>
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
                                    <div key={idx} className={`${badge.color} text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg`}>
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
                                    <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-3`}>
                                        <Icon className={`w-8 h-8 ${colors.text}`} />
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                                    <div className="text-sm text-gray-600">{stat.label}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

                {/* About Course Section */}
                <section id="about" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">{aboutCourse.title}</h2>
                                <p className="text-sm text-gray-600">Learn from industry experts at SevenMentor</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 space-y-8">
                        <p className="text-gray-700 text-lg leading-relaxed">{aboutCourse.description}</p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {aboutCourse.highlights.map((highlight, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-4 bg-orange-50 border border-orange-100 rounded-xl">
                                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
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
                                <p className="text-gray-700 leading-relaxed">{section.content}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Why Learn Ethical Hacking */}
                <section className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-50 to-white p-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Why Learn Ethical Hacking?</h2>
                                <p className="text-sm text-gray-600">Benefits of pursuing ethical hacking career</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            {whyLearn.map((item, idx) => (
                                <div key={idx} className="p-6 bg-orange-50 border border-orange-100 rounded-xl hover:shadow-lg transition-all duration-300">
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
                <section id="syllabus" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
                                <FileCheck className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">CEH V12 Course Syllabus</h2>
                                <p className="text-sm text-gray-600">Complete 20 modules covering all CEH topics</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                                <div className="text-sm text-orange-600 font-medium">Total Duration</div>
                                <div className="text-2xl font-bold text-orange-700">90-110 Hours</div>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 px-6 py-3 rounded-xl">
                                <div className="text-sm text-blue-600 font-medium">Modules</div>
                                <div className="text-2xl font-bold text-blue-700">{syllabus.modules.length}</div>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                                <div className="text-sm text-orange-600 font-medium">Skill Level</div>
                                <div className="text-2xl font-bold text-orange-700">All Levels</div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {syllabus.modules.map((module) => (
                                <div key={module.id} className="border border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
                                    <button
                                        onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                                        className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-gradient-to-br from-orange-600 to-orange-500 rounded-lg flex items-center justify-center text-white font-bold">
                                                {module.id}
                                            </div>
                                            <div className="text-left">
                                                <h3 className="font-bold text-gray-900">{module.title}</h3>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <Clock className="w-4 h-4 text-gray-500" />
                                                    <span className="text-sm text-gray-600">{module.duration}</span>
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
                                                    <div key={idx} className="flex items-start gap-3 py-2">
                                                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
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
                course='Security Operations Center (SOC) Training'
                contactNumber="022-48904395"
                />
                {/* Key Features */}
                <section id="features" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-purple-50 to-white p-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-xl flex items-center justify-center">
                                <Star className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
                                <p className="text-sm text-gray-600">What makes SevenMentor the best choice</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature, idx) => {
                                const Icon = feature.icon;
                                const colors = colorClasses[feature.color];
                                return (
                                    <div key={idx} className={`p-6 ${colors.bg} border ${colors.border} rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                                        <div className={`w-12 h-12 ${colors.bg} border ${colors.border} rounded-lg flex items-center justify-center mb-4`}>
                                            <Icon className={`w-6 h-6 ${colors.text}`} />
                                        </div>
                                        <h3 className="font-bold text-gray-900 mb-2 text-lg">{feature.title}</h3>
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
                                <h2 className="text-3xl font-bold text-gray-900">Proficiency After Training</h2>
                                <p className="text-sm text-gray-600">Skills you will master</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-4">
                            {proficiencies.map((skill, idx) => (
                                <div key={idx} className="flex items-start gap-3 p-4 bg-orange-50 border border-orange-100 rounded-xl">
                                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-800 font-medium">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Eligibility */}
                <section id="eligibility" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-50 to-white p-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-500 rounded-xl flex items-center justify-center">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Course Eligibility</h2>
                                <p className="text-sm text-gray-600">Who can enroll in this course</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {eligibility.map((req, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 bg-orange-50 border border-orange-200 rounded-xl">
                                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                                    <span className="text-gray-800 font-medium text-sm">{req.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Batch Schedule */}
                <section id="schedule" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
                                <Calendar className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Upcoming Batches</h2>
                                <p className="text-sm text-gray-600">Choose a batch that fits your schedule</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-orange-50">
                                        <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-orange-200">Batch ID</th>
                                        <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-orange-200">Start Date</th>
                                        <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-orange-200">Mode</th>
                                        <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-orange-200">Timing</th>
                                        <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-orange-200">Schedule</th>
                                        <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-orange-200">Location</th>
                                        <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-orange-200">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {batches.map((batch, idx) => (
                                        <tr key={idx} className="border-b border-gray-100 hover:bg-orange-50 transition-colors duration-200">
                                            <td className="p-4">
                                                <span className="font-semibold text-gray-900">{batch.id}</span>
                                            </td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4 text-gray-500" />
                                                    <span className="text-gray-700">{batch.startDate}</span>
                                                </div>
                                            </td>
                                            <td className="p-4">
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                    batch.mode === 'Online' ? 'bg-blue-100 text-blue-700' :
                                                    batch.mode === 'Offline' ? 'bg-orange-100 text-orange-700' :
                                                    'bg-purple-100 text-purple-700'
                                                }`}>
                                                    {batch.mode}
                                                </span>
                                            </td>
                                            <td className="p-4 text-gray-700 text-sm">{batch.timing}</td>
                                            <td className="p-4 text-gray-700 text-sm">{batch.schedule}</td>
                                            <td className="p-4">
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4 text-gray-500" />
                                                    <span className="text-gray-700">{batch.location}</span>
                                                </div>
                                            </td>
                                           
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Student Reviews */}
                <section id="reviews" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-yellow-50 to-white p-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-xl flex items-center justify-center">
                                <Star className="w-6 h-6 text-white fill-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Student Reviews</h2>
                                <p className="text-sm text-gray-600">Hear from our successful students</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="text-center mb-8">
                            <div className="flex items-center justify-center gap-2 mb-2">
                                <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
                                <span className="text-4xl font-bold text-gray-900">4.9</span>
                            </div>
                            <p className="text-gray-600">Based on 580+ reviews from SevenMentor students</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {reviews.map((review, idx) => (
                                <div key={idx} className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                            {review.avatar}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <h4 className="font-bold text-gray-900">{review.name}</h4>
                                                <CheckCircle className="w-4 h-4 text-orange-500 fill-orange-500" />
                                            </div>
                                            <p className="text-sm text-gray-600 mb-2">{review.designation}</p>
                                            <div className="flex gap-0.5">{renderStars(review.rating)}</div>
                                        </div>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{review.review}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-pink-50 to-white p-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-500 rounded-xl flex items-center justify-center">
                                <ShieldCheck className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                                <p className="text-sm text-gray-600">Everything you need to know about CEH V12</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="space-y-4">
                            {faqs.map((faq) => (
                                <div key={faq.id} className="border border-gray-200 rounded-xl overflow-hidden hover:border-orange-400 transition-colors duration-300">
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                                        className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors duration-300 text-left"
                                    >
                                        <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                                        {expandedFaq === faq.id ? (
                                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                        )}
                                    </button>

                                    {expandedFaq === faq.id && (
                                        <div className="p-5 bg-white border-t border-gray-200">
                                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
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
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Become a Certified Ethical Hacker?</h2>
                                <p className="text-xl text-gray-300 mb-8">Join 2000+ students trained by SevenMentor and start your cybersecurity career</p>

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
                                                <h4 className="font-bold text-xl mb-2 text-orange-400">Mumbai</h4>
                                                <p className="text-gray-300 leading-relaxed">
                                                    Office no. 101 & part office no.1,<br />
                                                    Civic Centre, MMGS Marg,<br />
                                                    Dadar East, Dadar, Mumbai,<br />
                                                    <span className="text-orange-400 font-semibold">Maharashtra 400014</span>
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
                                                <div className="font-semibold text-lg">022-48904395</div>
                                            </div>
                                        </a>

                                        <a
                                            href="https://api.whatsapp.com/send?phone=+918421176876&text=Hi+I+am+looking+for+Cyber+Security+Course+in+Mumbai+course"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                                        >
                                            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center group-hover:bg-green-700 transition-colors">
                                                <MessageCircle className="w-5 h-5 text-white" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-gray-400">WhatsApp</div>
                                                <div className="font-semibold text-lg">+91 84211 76876</div>
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
                    <p className="text-gray-400">© 2025 SevenMentor - Certified Ethical Hacking Training Institute Mumbai. All rights reserved.</p>
                    <p className="text-sm text-gray-500 mt-2">CEH V12 Course | Ethical Hacking Training | Penetration Testing | Mumbai | SevenMentor</p>
                </div>
            </footer>
        </div>
    );
}
