'use client';
import { useState } from 'react';
import {
    Shield, ShieldCheck, Lock, Key, AlertTriangle, FileCheck,
    Users, Clock, Award, Briefcase, Star, CheckCircle,
    ChevronDown, ChevronUp, BookOpen, Target, TrendingUp,
    Calendar, MapPin, Phone, Mail, Globe, Laptop,
    Code, Database, Network, Server, Eye, Bug, User, MessageSquare, MessageCircle
} from 'lucide-react';
import EnrollForm from "../../../components/EnrollForm/EnrollForm.jsx"

export default function CyberSecurityCoursePage() {
    const [expandedModule, setExpandedModule] = useState(null);
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: 'Cyber Security',
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
        alert('Thank you for your interest! Our team will contact you soon.');
        setFormData({ name: '', email: '', phone: '', course: 'Cyber Security', message: '' });
    };

    // Course Hero Data
    const heroData = {
        title: 'Cyber Security Course in Mumbai',
        subtitle: 'Master Ethical Hacking, Network Security & Information Security',
        description: 'Become a certified Cyber Security professional with hands-on training in ethical hacking, penetration testing, network security, and threat analysis',
        badges: [
            { icon: Clock, label: '24 Weeks', color: 'bg-orange-500' },
            { icon: Users, label: '3500+ Students', color: 'bg-orange-600' },
            { icon: Award, label: 'Certified Program', color: 'bg-orange-700' },
            { icon: Briefcase, label: '100% Job Support', color: 'bg-orange-500' }
        ]
    };

    // Statistics
    const stats = [
        { value: '24 Weeks', label: 'Course Duration', icon: Clock, color: 'orange' },
        { value: '3500+', label: 'Students Trained', icon: Users, color: 'orange' },
        { value: '95%', label: 'Placement Rate', icon: TrendingUp, color: 'orange' },
        { value: '20+', label: 'Industry Projects', icon: Briefcase, color: 'orange' }
    ];

    // About Course
    const aboutCourse = {
        title: 'About Cyber Security Course',
        description: 'Cyber Security is one of the most critical and fastest-growing fields in IT. With cyber threats increasing globally, organizations need skilled professionals to protect their digital assets. Our comprehensive Cyber Security course covers everything from network security fundamentals to advanced ethical hacking techniques.',
        highlights: [
            'Learn from certified ethical hackers and security experts',
            'Hands-on training with real-world security scenarios',
            'Master tools like Kali Linux, Metasploit, Wireshark, Nmap',
            'Get certified in CEH, CompTIA Security+, and more',
            'Work on live penetration testing projects',
            'Understand compliance standards like ISO 27001, GDPR'
        ],
        sections: [
            {
                heading: 'What is Cyber Security?',
                content: 'Cyber Security refers to the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information, extorting money from users, or interrupting normal business processes. Implementing effective cybersecurity measures is particularly challenging today because there are more devices than people, and attackers are becoming more innovative.'
            },
            {
                heading: 'Why Choose Cyber Security as a Career?',
                content: 'The demand for cyber security professionals has grown exponentially. With data breaches costing companies millions, organizations are investing heavily in security. According to industry reports, there will be 3.5 million unfilled cyber security jobs by 2025. This course prepares you for high-paying roles like Security Analyst, Ethical Hacker, Penetration Tester, Security Consultant, and Chief Information Security Officer (CISO).'
            },
            {
                heading: 'Best Cyber Security Training in Mumbai',
                content: 'Our Cyber Security training institute in Mumbai offers industry-leading curriculum designed by experts with over 15 years of experience. We provide hands-on labs, live project experience, and certification preparation for CEH (Certified Ethical Hacker), CISSP, CompTIA Security+, and more. Students get access to dedicated lab infrastructure with latest security tools and technologies.'
            }
        ]
    };

    // Syllabus
    const syllabus = {
        modules: [
            {
                id: 1,
                title: 'Introduction to Cyber Security',
                duration: '1 Week',
                topics: [
                    'Overview of Cyber Security and Information Security',
                    'Types of Cyber Attacks and Threats',
                    'CIA Triad: Confidentiality, Integrity, Availability',
                    'Security Principles and Best Practices',
                    'Career Paths in Cyber Security',
                    'Industry Standards and Compliance (ISO 27001, GDPR, PCI-DSS)'
                ]
            },
            {
                id: 2,
                title: 'Networking Fundamentals for Security',
                duration: '3 Weeks',
                topics: [
                    'TCP/IP Protocol Suite and OSI Model',
                    'Network Devices: Routers, Switches, Firewalls',
                    'IP Addressing and Subnetting',
                    'Network Protocols: HTTP, HTTPS, DNS, FTP, SSH',
                    'Wireless Networking and Security',
                    'VPN and Secure Remote Access'
                ]
            },
            {
                id: 3,
                title: 'Operating System Security',
                duration: '2 Weeks',
                topics: [
                    'Windows Security Configuration and Hardening',
                    'Linux Security and Administration',
                    'User Access Control and Authentication',
                    'Security Policies and Group Policy Management',
                    'Log Management and Monitoring',
                    'Patch Management and Updates'
                ]
            },
            {
                id: 4,
                title: 'Ethical Hacking & Penetration Testing',
                duration: '5 Weeks',
                topics: [
                    'Introduction to Ethical Hacking and Penetration Testing',
                    'Reconnaissance and Information Gathering',
                    'Scanning Networks with Nmap, Nessus, OpenVAS',
                    'Vulnerability Assessment and Analysis',
                    'Exploitation using Metasploit Framework',
                    'Post-Exploitation and Maintaining Access',
                    'Social Engineering Attacks',
                    'Web Application Penetration Testing'
                ]
            },
            {
                id: 5,
                title: 'Network Security & Firewall',
                duration: '3 Weeks',
                topics: [
                    'Firewall Types and Configuration',
                    'Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS)',
                    'Network Segmentation and DMZ',
                    'VPN Technologies: IPSec, SSL/TLS',
                    'Security Information and Event Management (SIEM)',
                    'Network Traffic Analysis with Wireshark',
                    'DDoS Attacks and Mitigation Techniques'
                ]
            },
            {
                id: 6,
                title: 'Web Application Security',
                duration: '3 Weeks',
                topics: [
                    'OWASP Top 10 Vulnerabilities',
                    'SQL Injection Attacks and Prevention',
                    'Cross-Site Scripting (XSS) and CSRF',
                    'Authentication and Session Management',
                    'Security Misconfigurations',
                    'Web Application Firewalls (WAF)',
                    'Burp Suite and ZAP for Security Testing',
                    'Secure Coding Practices'
                ]
            },
            {
                id: 7,
                title: 'Cryptography & Data Security',
                duration: '2 Weeks',
                topics: [
                    'Fundamentals of Cryptography',
                    'Symmetric and Asymmetric Encryption',
                    'Hashing Algorithms: MD5, SHA, bcrypt',
                    'Digital Signatures and Certificates',
                    'Public Key Infrastructure (PKI)',
                    'SSL/TLS and HTTPS',
                    'Data Encryption and Protection'
                ]
            },
            {
                id: 8,
                title: 'Cloud Security',
                duration: '2 Weeks',
                topics: [
                    'Cloud Computing Security Fundamentals',
                    'AWS, Azure, GCP Security Best Practices',
                    'Identity and Access Management (IAM)',
                    'Cloud Storage Security',
                    'Container Security (Docker, Kubernetes)',
                    'Cloud Compliance and Governance'
                ]
            },
            {
                id: 9,
                title: 'Incident Response & Forensics',
                duration: '2 Weeks',
                topics: [
                    'Incident Response Process and Planning',
                    'Malware Analysis and Reverse Engineering',
                    'Digital Forensics Tools and Techniques',
                    'Evidence Collection and Preservation',
                    'Log Analysis and Investigation',
                    'Threat Hunting and Intelligence'
                ]
            },
            {
                id: 10,
                title: 'Security Certifications Preparation',
                duration: '1 Week',
                topics: [
                    'CEH (Certified Ethical Hacker) Exam Preparation',
                    'CompTIA Security+ Certification Overview',
                    'CISSP Fundamentals',
                    'Mock Tests and Practice Questions',
                    'Exam Tips and Strategies'
                ]
            }
        ]
    };

    // Key Features
    const features = [
        {
            icon: Shield,
            title: 'Expert Training',
            description: 'Learn from certified ethical hackers with 15+ years of real-world experience',
            color: 'orange'
        },
        {
            icon: Laptop,
            title: 'Hands-on Labs',
            description: 'Access to dedicated lab infrastructure with latest security tools',
            color: 'orange'
        },
        {
            icon: Award,
            title: 'Certification Support',
            description: 'Preparation for CEH, Security+, CISSP certifications',
            color: 'orange'
        },
        {
            icon: Briefcase,
            title: 'Job Assistance',
            description: '100% placement support with interview preparation and referrals',
            color: 'orange'
        },
        {
            icon: Code,
            title: 'Live Projects',
            description: 'Work on 20+ real-world security projects and case studies',
            color: 'orange'
        },
        {
            icon: Users,
            title: 'Small Batches',
            description: 'Limited batch size for personalized attention and mentorship',
            color: 'orange'
        }
    ];

    // Eligibility
    const eligibility = [
        { label: 'BE/B.Tech in Computer Science or IT', eligible: true },
        { label: 'BCA/MCA Students', eligible: true },
        { label: 'Any Graduate with IT Background', eligible: true },
        { label: 'IT Professionals wanting to upskill', eligible: true },
        { label: 'Network Administrators', eligible: true },
        { label: 'System Administrators', eligible: true }
    ];

    // Tools Covered
    const tools = [
        { name: 'Kali Linux', icon: Server },
        { name: 'Metasploit', icon: Bug },
        { name: 'Wireshark', icon: Network },
        { name: 'Nmap', icon: Globe },
        { name: 'Burp Suite', icon: Eye },
        { name: 'Nessus', icon: AlertTriangle },
        { name: 'OWASP ZAP', icon: Lock },
        { name: 'Splunk', icon: Database }
    ];

    // Batch Schedule
    const batches = [
        {
            id: 'CS-2025-01',
            startDate: '18/01/2025',
            mode: 'Online',
            timing: 'Weekday Evening (Mon-Fri)',
            schedule: '6:30 PM - 8:30 PM',
            location: 'Mumbai',
            seats: 'Available'
        },
        {
            id: 'CS-2025-02',
            startDate: '25/01/2025',
            mode: 'Offline',
            timing: 'Weekend (Sat-Sun)',
            schedule: '10:00 AM - 5:00 PM',
            location: 'Mumbai',
            seats: 'Filling Fast'
        },
        {
            id: 'CS-2025-03',
            startDate: '01/02/2025',
            mode: 'Hybrid',
            timing: 'Fast Track (Mon-Fri)',
            schedule: '9:00 AM - 5:00 PM',
            location: 'Mumbai',
            seats: 'Available'
        },
        {
            id: 'CS-2025-04',
            startDate: '08/02/2025',
            mode: 'Online',
            timing: 'Weekend (Sat-Sun)',
            schedule: '11:00 AM - 6:00 PM',
            location: 'Mumbai',
            seats: 'Available'
        }
    ];

    // Reviews
    const reviews = [
        {
            name: 'Rajesh Kumar',
            designation: 'Security Analyst at TCS',
            rating: 5,
            avatar: 'RK',
            review: 'Excellent training program! The hands-on approach with real-world scenarios helped me understand practical security concepts. Got placed as a Security Analyst within 2 months of course completion. Highly recommended!'
        },
        {
            name: 'Priya Sharma',
            designation: 'Ethical Hacker at Wipro',
            rating: 5,
            avatar: 'PS',
            review: 'Best cyber security training in Mumbai. The instructors are industry experts who share real-world experiences. The lab setup is amazing with all latest tools. Worth every penny!'
        },
        {
            name: 'Amit Patil',
            designation: 'Penetration Tester at Infosys',
            rating: 5,
            avatar: 'AP',
            review: 'The course content is comprehensive and up-to-date. Loved the CEH preparation module. The placement team helped me crack interviews at top companies. Thank you for changing my career!'
        },
        {
            name: 'Sneha Desai',
            designation: 'Security Consultant at Accenture',
            rating: 5,
            avatar: 'SD',
            review: 'Great learning experience! From basic networking to advanced penetration testing, everything was covered in detail. The project work gave me confidence to handle real security assessments.'
        }
    ];

    // FAQs
    const faqs = [
        {
            id: 1,
            question: 'What are the prerequisites for the Cyber Security course?',
            answer: 'Basic knowledge of computers and networking is helpful but not mandatory. We start from fundamentals and gradually move to advanced topics. Any graduate or IT professional can join.'
        },
        {
            id: 2,
            question: 'What is the duration of the Cyber Security course?',
            answer: 'The complete course duration is 24 weeks (approximately 6 months). This includes theoretical sessions, hands-on labs, live projects, and certification preparation.'
        },
        {
            id: 3,
            question: 'Which certifications will I be prepared for?',
            answer: 'Our course prepares you for industry-recognized certifications including CEH (Certified Ethical Hacker), CompTIA Security+, CISSP fundamentals, and other vendor-specific certifications.'
        },
        {
            id: 4,
            question: 'Do you provide hands-on lab access?',
            answer: 'Yes! We provide dedicated lab infrastructure with latest security tools including Kali Linux, Metasploit, Wireshark, Nmap, Burp Suite, and more. Students get 24/7 remote access to labs.'
        },
        {
            id: 5,
            question: 'What is the fee structure?',
            answer: 'Our course fee is competitive with flexible payment options including EMI. Please contact our admissions team for detailed fee structure and available discounts for early enrollment.'
        },
        {
            id: 6,
            question: 'Do you provide job placement assistance?',
            answer: 'Yes, we provide 100% job placement assistance including resume building, mock interviews, technical interview preparation, and direct referrals to our 200+ hiring partners including top IT companies.'
        },
        {
            id: 7,
            question: 'What job roles can I apply for after this course?',
            answer: 'After completing this course, you can apply for roles like Security Analyst, Ethical Hacker, Penetration Tester, Security Consultant, SOC Analyst, Incident Responder, and Security Architect.'
        },
        {
            id: 8,
            question: 'Is the course suitable for working professionals?',
            answer: 'Absolutely! We offer flexible batch timings including weekday evenings and weekend batches specifically designed for working professionals. Online and hybrid options are also available.'
        },
        {
            id: 9,
            question: 'Will I get a certificate after completing the course?',
            answer: 'Yes, you will receive an industry-recognized course completion certificate from our institute. Additionally, we prepare you for global certifications like CEH and CompTIA Security+.'
        },
        {
            id: 10,
            question: 'What tools and software will I learn?',
            answer: 'You will learn industry-standard tools including Kali Linux, Metasploit Framework, Wireshark, Nmap, Burp Suite, OWASP ZAP, Nessus, Splunk, and many more security tools used by professionals worldwide.'
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
            {/* SEO-friendly Header */}
            <header className="sr-only">
                <h1>Cyber Security Course in Mumbai - Best Ethical Hacking Training Institute</h1>
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

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC00Yy0xLjEgMC0yIC45LTIgMnY0YzAgMS4xLjkgMiAyIDJoNGMxLjEgMCAyLS45IDItMnYtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/30 px-4 py-2 rounded-full mb-6">
                            <Shield className="w-5 h-5 text-orange-300" />
                            <span className="text-sm font-semibold text-orange-200">Certified Training Program</span>
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
                            <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transform hover:scale-105 transition-all duration-300">
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
                                <p className="text-sm text-gray-600">Everything you need to know about our program</p>
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

                {/* Course Syllabus */}
                <section id="syllabus" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
                                <FileCheck className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Course Syllabus</h2>
                                <p className="text-sm text-gray-600">Comprehensive curriculum designed by industry experts</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                                <div className="text-sm text-orange-600 font-medium">Total Duration</div>
                                <div className="text-2xl font-bold text-orange-700">24 Weeks</div>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                                <div className="text-sm text-orange-600 font-medium">Modules</div>
                                <div className="text-2xl font-bold text-orange-700">{syllabus.modules.length}</div>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                                <div className="text-sm text-orange-600 font-medium">Projects</div>
                                <div className="text-2xl font-bold text-orange-700">20+</div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {syllabus.modules.map((module) => (
                                <div key={module.id} className="border border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 transition-all duration-300 hover:shadow-lg">
                                    <button
                                        onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                                        className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-orange-50 transition-colors duration-300"
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
                                            <ChevronUp className="w-5 h-5 text-orange-500" />
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

                {/* Enrollment Form */}
                <EnrollForm
                mailTo="mumbaileads@sevenmentor.com"
                course='Cyber Security'
                contactNumber="022-48904395"
                />
                

                {/* Key Features */}
                <section id="features" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
                                <Star className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
                                <p className="text-sm text-gray-600">What makes our course stand out</p>
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
                                        <div className={`w-12 h-12 bg-white border ${colors.border} rounded-lg flex items-center justify-center mb-4`}>
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

                {/* Tools & Technologies */}
                <section className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
                                <Code className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Tools & Technologies</h2>
                                <p className="text-sm text-gray-600">Master industry-standard security tools</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {tools.map((tool, idx) => {
                                const Icon = tool.icon;
                                return (
                                    <div key={idx} className="p-6 bg-gray-50 border border-gray-200 rounded-xl hover:border-orange-400 hover:shadow-lg transition-all duration-300 text-center">
                                        <Icon className="w-10 h-10 text-orange-600 mx-auto mb-3" />
                                        <h4 className="font-bold text-gray-900">{tool.name}</h4>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Eligibility */}
                <section id="eligibility" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Course Eligibility</h2>
                                <p className="text-sm text-gray-600">Who can enroll in this course</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-4">
                            {eligibility.map((req, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-4 bg-orange-50 border border-orange-200 rounded-xl">
                                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                                    <span className="text-gray-800 font-medium">{req.label}</span>
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
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${batch.mode === 'Online' ? 'bg-orange-100 text-orange-700' :
                                                    batch.mode === 'Offline' ? 'bg-orange-100 text-orange-700' :
                                                        'bg-orange-100 text-orange-700'
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

               

                {/* FAQ Section */}
                <section id="faq" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
                                <ShieldCheck className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                                <p className="text-sm text-gray-600">Got questions? We have got answers</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="space-y-4">
                            {faqs.map((faq) => (
                                <div key={faq.id} className="border border-gray-200 rounded-xl overflow-hidden hover:border-orange-400 transition-colors duration-300">
                                    <button
                                        onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                                        className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-orange-50 transition-colors duration-300 text-left"
                                    >
                                        <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                                        {expandedFaq === faq.id ? (
                                            <ChevronUp className="w-5 h-5 text-orange-500 flex-shrink-0" />
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

                {/* Contact CTA Section */}
                <section className="bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900 text-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="p-12 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Cyber Security Career?</h2>
                        <p className="text-xl text-orange-200 mb-8">Join 3500+ students and become a certified security professional</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <a href="tel:+919876543210" className="flex items-center justify-center gap-2 bg-white text-orange-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300">
                                <Phone className="w-5 h-5" />
                                022-48904395
                            </a>
                            <a href="mailto:info@cybersecurity-mumbai.com" className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300">
                                <Mail className="w-5 h-5" />
                                Get Course Details
                            </a>
                        </div>

                        <div className="text-orange-200">
                            <p className="mb-2">Visit us at our Mumbai training center</p>
                            <p className="font-semibold">Andheri East, Mumbai - 400069</p>
                        </div>
                    </div>
                </section>

            </div>

            {/* Footer Schema */}
            <footer className="bg-gray-900 text-white py-8 mt-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-400">© 2025 Cyber Security Training Institute Mumbai. All rights reserved.</p>
                    <p className="text-sm text-gray-500 mt-2">Best Cyber Security Course | Ethical Hacking Training | CEH Certification | Mumbai</p>
                </div>
            </footer>
        </div>
    );
}
