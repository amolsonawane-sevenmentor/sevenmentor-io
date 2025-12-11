'use client';
import { useState } from 'react';
import {
    Shield, ShieldCheck, Lock, AlertTriangle, FileCheck, Search,
    Users, Clock, Award, Briefcase, Star, CheckCircle,
    ChevronDown, ChevronUp, BookOpen, Target, TrendingUp,
    Calendar, MapPin, Phone, Mail, Globe, Laptop,
    Code, Database, Network, Server, Eye, Bug, User,
    Building, GraduationCap, Zap, Terminal, X, MessageCircle,
    Activity, Bell, Radio, Crosshair, Monitor
} from 'lucide-react';
import EnrollForm from "../../../components/EnrollForm/EnrollForm.jsx"
export default function SOCTrainingCoursePage() {
    const [expandedModule, setExpandedModule] = useState(1);
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [showEnrollForm, setShowEnrollForm] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        course: 'Security Operations Center (SOC) Training',
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
            course: 'Security Operations Center (SOC) Training',
            batchPreference: '',
            experience: '',
            message: ''
        });
    };

    const heroData = {
        title: 'Security Operations Center (SOC) Training',
        subtitle: 'Master SOC Analysis, Threat Detection & Incident Response',
        description: 'Become a certified SOC Analyst with comprehensive training in SIEM, threat intelligence, security monitoring, and real-world incident response from industry experts at SevenMentor',
        badges: [
            { icon: Clock, label: '100-120 Hours', color: 'bg-orange-500' },
            { icon: Users, label: '1500+ Learners', color: 'bg-orange-600' },
            { icon: Award, label: 'SOC Certified', color: 'bg-orange-700' },
            { icon: Briefcase, label: '100% Placement', color: 'bg-orange-500' }
        ]
    };

    const stats = [
        { value: '100-120', label: 'Hours Training', icon: Clock, color: 'orange' },
        { value: '1500+', label: 'Students Trained', icon: Users, color: 'orange' },
        { value: '90+', label: 'Batches Completed', icon: TrendingUp, color: 'orange' },
        { value: '10+ Years', label: 'Expert Trainers', icon: Award, color: 'orange' }
    ];

    const aboutCourse = {
        title: 'About SOC Training',
        description: 'A Security Operations Center (SOC) is the heart of an organization\'s cybersecurity defense. SOC analysts are responsible for continuous monitoring, threat detection, incident response, and security event analysis. The SOC Training Course in Mumbai provided by SevenMentor will equip you with the skills to detect, analyze, respond to, and prevent cyber threats in real-time using industry-leading tools and methodologies.',
        highlights: [
            'Industry-Expert Trainers with 10+ years SOC experience',
            'Hands-on SIEM Tools Training (Splunk, QRadar, ArcSight)',
            'Real-world Threat Detection and Incident Response',
            'Flexible Learning: Weekday, Weekend, and Fast Track batches',
            '100% Placement Assistance with top SOC teams',
            'Industry-Recognized SOC Analyst Certification'
        ],
        sections: [
            {
                heading: 'What is a Security Operations Center (SOC)?',
                content: 'A Security Operations Center is a centralized unit that deals with security issues on an organizational and technical level. The SOC team consists of security analysts and engineers who monitor, detect, analyze, and respond to cybersecurity incidents using technology solutions and strong processes. SOC analysts work 24/7 to ensure continuous monitoring and rapid response to security threats.'
            },
            {
                heading: 'Why is SOC Training Important?',
                content: 'With cyber threats becoming more sophisticated, organizations need skilled SOC analysts who can identify and neutralize threats before they cause damage. SOC professionals are in high demand across industries including banking, healthcare, retail, government, and technology sectors. The global shortage of cybersecurity professionals makes SOC training one of the most valuable career investments.'
            },
            {
                heading: 'What Does a SOC Analyst Do?',
                content: 'SOC Analysts monitor security events from various sources including firewalls, IDS/IPS, endpoints, servers, and network devices. They analyze alerts from SIEM platforms, investigate suspicious activities, perform threat hunting, coordinate incident response, document security incidents, and work to improve security posture through continuous monitoring and analysis.'
            },
            {
                heading: 'Why Choose SevenMentor for SOC Training?',
                content: 'SevenMentor has established itself as Mumbai\'s leading SOC training provider with experienced instructors who have worked in enterprise SOC environments. Our practical approach includes hands-on labs with real SIEM tools, simulated cyber attacks, incident response exercises, and exposure to actual security scenarios that SOC analysts face daily.'
            }
        ]
    };

    const syllabus = {
        modules: [
            {
                id: 1,
                title: 'Introduction to SOC',
                duration: '1 Week',
                topics: [
                    'Security Operations Center Overview and Structure',
                    'SOC Team Roles: Tier 1, 2, and 3 Analysts',
                    'SOC Processes and Workflows',
                    'Key Performance Indicators (KPIs) for SOC',
                    'SOC Technologies and Tool Stack',
                    'Building and Operating a SOC'
                ]
            },
            {
                id: 2,
                title: 'Cybersecurity Fundamentals',
                duration: '1 Week',
                topics: [
                    'Information Security Principles (CIA Triad)',
                    'Common Cyber Threats and Attack Vectors',
                    'Network Security Basics',
                    'Operating System Security (Windows/Linux)',
                    'Security Frameworks (NIST, ISO 27001)',
                    'Compliance and Regulatory Requirements'
                ]
            },
            {
                id: 3,
                title: 'Network Fundamentals for SOC',
                duration: '2 Weeks',
                topics: [
                    'TCP/IP Protocol Suite Deep Dive',
                    'Network Architecture and Topologies',
                    'Routing and Switching Fundamentals',
                    'Network Protocols: HTTP, DNS, SMTP, FTP',
                    'Network Traffic Analysis',
                    'Packet Analysis with Wireshark'
                ]
            },
            {
                id: 4,
                title: 'Security Information and Event Management (SIEM)',
                duration: '3 Weeks',
                topics: [
                    'SIEM Architecture and Components',
                    'Log Collection and Aggregation',
                    'SIEM Deployment and Configuration',
                    'Splunk Enterprise - Complete Training',
                    'IBM QRadar SIEM Platform',
                    'ArcSight ESM and Logger',
                    'Creating Correlation Rules and Alerts',
                    'SIEM Use Cases and Dashboards'
                ]
            },
            {
                id: 5,
                title: 'Log Analysis and Management',
                duration: '2 Weeks',
                topics: [
                    'Log Sources: Firewalls, IDS/IPS, Endpoints',
                    'Windows Event Logs Analysis',
                    'Linux System Logs (Syslog)',
                    'Web Server and Application Logs',
                    'Database Audit Logs',
                    'Cloud Platform Logs (AWS, Azure)',
                    'Log Parsing and Normalization',
                    'Log Retention and Archiving'
                ]
            },
            {
                id: 6,
                title: 'Threat Intelligence',
                duration: '2 Weeks',
                topics: [
                    'Cyber Threat Intelligence Fundamentals',
                    'Threat Intelligence Lifecycle',
                    'Open Source Intelligence (OSINT)',
                    'Indicators of Compromise (IOCs)',
                    'Threat Feeds and Sharing Platforms',
                    'MITRE ATT&CK Framework',
                    'Threat Actor Analysis',
                    'Integrating Threat Intel with SIEM'
                ]
            },
            {
                id: 7,
                title: 'Intrusion Detection and Prevention',
                duration: '2 Weeks',
                topics: [
                    'IDS/IPS Fundamentals',
                    'Snort - Open Source IDS/IPS',
                    'Suricata IDS/IPS Engine',
                    'Signature-Based vs Anomaly-Based Detection',
                    'IDS/IPS Rule Writing',
                    'Alert Triage and Analysis',
                    'False Positive Reduction',
                    'Network Security Monitoring (NSM)'
                ]
            },
            {
                id: 8,
                title: 'Incident Detection and Analysis',
                duration: '3 Weeks',
                topics: [
                    'Security Event Monitoring',
                    'Alert Prioritization and Triage',
                    'Investigation Methodologies',
                    'Malware Detection Techniques',
                    'Network Traffic Anomalies',
                    'Endpoint Detection and Response (EDR)',
                    'User Behavior Analytics (UBA)',
                    'Security Alert Correlation',
                    'Root Cause Analysis'
                ]
            },
            {
                id: 9,
                title: 'Incident Response',
                duration: '3 Weeks',
                topics: [
                    'Incident Response Lifecycle (NIST)',
                    'Incident Response Team Structure',
                    'Incident Classification and Severity',
                    'Containment Strategies',
                    'Evidence Collection and Preservation',
                    'Digital Forensics Basics',
                    'Incident Documentation and Reporting',
                    'Post-Incident Review and Lessons Learned',
                    'Incident Response Playbooks'
                ]
            },
            {
                id: 10,
                title: 'Malware Analysis',
                duration: '2 Weeks',
                topics: [
                    'Malware Types and Classification',
                    'Static Malware Analysis',
                    'Dynamic Malware Analysis',
                    'Malware Analysis Tools and Sandboxes',
                    'Indicators of Compromise (IOCs) Extraction',
                    'Reverse Engineering Basics',
                    'Ransomware Analysis',
                    'Malware Reporting and Documentation'
                ]
            },
            {
                id: 11,
                title: 'Threat Hunting',
                duration: '2 Weeks',
                topics: [
                    'Proactive Threat Hunting Concepts',
                    'Threat Hunting Frameworks',
                    'Hypothesis-Driven Hunting',
                    'Hunting with SIEM and EDR Tools',
                    'Network Traffic Analysis for Hunting',
                    'Endpoint Artifact Analysis',
                    'Threat Hunting Methodologies',
                    'Documenting Hunt Results'
                ]
            },
            {
                id: 12,
                title: 'Vulnerability Management',
                duration: '2 Weeks',
                topics: [
                    'Vulnerability Management Lifecycle',
                    'Vulnerability Scanning Tools (Nessus, Qualys)',
                    'Vulnerability Assessment vs Penetration Testing',
                    'Risk Scoring and Prioritization (CVSS)',
                    'Patch Management Processes',
                    'Vulnerability Reporting',
                    'Remediation Verification',
                    'Continuous Vulnerability Monitoring'
                ]
            },
            {
                id: 13,
                title: 'Endpoint Security',
                duration: '2 Weeks',
                topics: [
                    'Endpoint Protection Platforms (EPP)',
                    'Endpoint Detection and Response (EDR)',
                    'Antivirus and Anti-Malware Solutions',
                    'Host-Based Intrusion Detection (HIDS)',
                    'Application Whitelisting',
                    'Endpoint Forensics',
                    'Mobile Device Security',
                    'Endpoint Security Best Practices'
                ]
            },
            {
                id: 14,
                title: 'Cloud Security Monitoring',
                duration: '2 Weeks',
                topics: [
                    'Cloud Security Fundamentals',
                    'AWS Security Services and Monitoring',
                    'Azure Security Center and Sentinel',
                    'Google Cloud Security Command Center',
                    'Cloud Access Security Brokers (CASB)',
                    'Container Security Monitoring',
                    'Cloud Configuration Monitoring',
                    'Cloud Incident Response'
                ]
            },
            {
                id: 15,
                title: 'Security Automation and Orchestration',
                duration: '2 Weeks',
                topics: [
                    'Security Orchestration, Automation and Response (SOAR)',
                    'Automation Use Cases in SOC',
                    'Playbook Development',
                    'SOAR Platforms (Splunk Phantom, Cortex XSOAR)',
                    'API Integration for Security Tools',
                    'Python Scripting for Security Automation',
                    'Automated Threat Intelligence Enrichment',
                    'Incident Response Automation'
                ]
            },
            {
                id: 16,
                title: 'Web Application Security',
                duration: '2 Weeks',
                topics: [
                    'Web Application Architecture',
                    'OWASP Top 10 Vulnerabilities',
                    'Web Application Firewall (WAF)',
                    'SQL Injection Detection',
                    'Cross-Site Scripting (XSS) Detection',
                    'API Security Monitoring',
                    'Web Application Attack Patterns',
                    'Web Security Event Analysis'
                ]
            },
            {
                id: 17,
                title: 'Network Forensics',
                duration: '2 Weeks',
                topics: [
                    'Network Forensics Fundamentals',
                    'Packet Capture and Analysis',
                    'Network Forensic Tools (NetworkMiner, Xplico)',
                    'Malicious Traffic Identification',
                    'Data Exfiltration Detection',
                    'Command and Control (C2) Traffic Analysis',
                    'Network Evidence Collection',
                    'Network Forensics Reporting'
                ]
            },
            {
                id: 18,
                title: 'Security Metrics and Reporting',
                duration: '1 Week',
                topics: [
                    'SOC Metrics and KPIs',
                    'Security Dashboard Creation',
                    'Executive Reporting',
                    'Incident Metrics and Trends',
                    'Mean Time to Detect (MTTD) and Respond (MTTR)',
                    'Security Posture Reporting',
                    'Compliance Reporting',
                    'Communicating Security to Business'
                ]
            },
            {
                id: 19,
                title: 'Advanced Persistent Threats (APT)',
                duration: '2 Weeks',
                topics: [
                    'APT Characteristics and Tactics',
                    'APT Lifecycle and Kill Chain',
                    'APT Detection Techniques',
                    'Lateral Movement Detection',
                    'Credential Theft Detection',
                    'Data Staging and Exfiltration',
                    'APT Case Studies',
                    'Defending Against APTs'
                ]
            },
            {
                id: 20,
                title: 'SOC Career Development',
                duration: '1 Week',
                topics: [
                    'SOC Analyst Career Path',
                    'Required Skills and Certifications',
                    'Resume Building for SOC Roles',
                    'Interview Preparation',
                    'Industry Certifications (CompTIA Security+, CySA+)',
                    'Continuous Learning and Skill Development',
                    'SOC Team Collaboration',
                    'Professional Networking in Cybersecurity'
                ]
            }
        ]
    };

    const features = [
        {
            icon: GraduationCap,
            title: 'Expert SOC Trainers',
            description: 'Learn from certified SOC professionals with 10+ years experience in enterprise environments',
            color: 'orange'
        },
        {
            icon: Laptop,
            title: 'Hands-on SIEM Labs',
            description: 'Practical training on Splunk, QRadar, ArcSight with real security scenarios',
            color: 'orange'
        },
        {
            icon: Award,
            title: 'SOC Analyst Certification',
            description: 'Industry-recognized certification upon successful course completion',
            color: 'orange'
        },
        {
            icon: Briefcase,
            title: '100% Placement Support',
            description: 'Job assistance with leading SOC teams and cybersecurity firms',
            color: 'orange'
        },
        {
            icon: Zap,
            title: 'Flexible Batch Timings',
            description: 'Weekday evening, weekend, and fast-track options available',
            color: 'orange'
        },
        {
            icon: Building,
            title: 'Corporate SOC Training',
            description: 'Customized SOC training programs for organizations',
            color: 'orange'
        }
    ];

    const proficiencies = [
        'SIEM Platform Administration and Management',
        'Real-time Security Event Monitoring',
        'Threat Detection and Analysis',
        'Incident Response and Coordination',
        'Log Analysis and Correlation',
        'Security Tool Integration',
        'Threat Intelligence Analysis',
        'Security Automation Implementation'
    ];

    const eligibility = [
        { label: 'IT Graduates interested in cybersecurity', eligible: true },
        { label: 'Network/System Administrators', eligible: true },
        { label: 'Information Security Professionals', eligible: true },
        { label: 'IT Support Engineers', eligible: true },
        { label: 'Cybersecurity Enthusiasts', eligible: true },
        { label: 'Fresh Graduates (Any Stream)', eligible: true },
        { label: 'Working IT Professionals', eligible: true },
        { label: 'Security Engineers', eligible: true },
        { label: 'Anyone wanting SOC career', eligible: true }
    ];

    const whyLearn = [
        {
            title: 'High Demand Career',
            description: 'SOC analysts are among the most sought-after cybersecurity professionals globally'
        },
        {
            title: 'Attractive Salaries',
            description: 'Competitive compensation packages with excellent growth opportunities'
        },
        {
            title: '24/7 Security Protection',
            description: 'Be part of teams that protect organizations from cyber threats round the clock'
        },
        {
            title: 'Diverse Industry Exposure',
            description: 'Work across banking, healthcare, retail, government, and technology sectors'
        },
        {
            title: 'Continuous Learning',
            description: 'Stay updated with latest threats, tools, and security technologies'
        },
        {
            title: 'Career Advancement',
            description: 'Clear progression path from Tier 1 to senior SOC roles and management'
        }
    ];

    const batches = [
        {
            id: 'SOC-2025-01',
            startDate: '25/01/2025',
            mode: 'Online',
            timing: 'Weekday Evening (Mon-Fri)',
            schedule: '7:00 PM - 9:00 PM',
            duration: '100-120 Hours',
            location: 'Online Live',
            seats: 'Available'
        },
        {
            id: 'SOC-2025-02',
            startDate: '01/02/2025',
            mode: 'Offline',
            timing: 'Weekend (Sat-Sun)',
            schedule: '10:00 AM - 6:00 PM',
            duration: '100-120 Hours',
            location: 'Dadar, Mumbai',
            seats: 'Filling Fast'
        },
        {
            id: 'SOC-2025-03',
            startDate: '08/02/2025',
            mode: 'Hybrid',
            timing: 'Fast Track (Mon-Fri)',
            schedule: '9:00 AM - 5:00 PM',
            duration: '100-120 Hours',
            location: 'Mumbai + Online',
            seats: 'Available'
        },
        {
            id: 'SOC-2025-04',
            startDate: '15/02/2025',
            mode: 'Online',
            timing: 'Weekend (Sat-Sun)',
            schedule: '11:00 AM - 7:00 PM',
            duration: '100-120 Hours',
            location: 'Online Live',
            seats: 'Available'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Sharma',
            designation: 'SOC Analyst Tier 2 at TCS',
            rating: 5,
            avatar: 'VS',
            review: 'SevenMentor\'s SOC training transformed my career! The hands-on Splunk training and real incident response scenarios prepared me perfectly for my SOC role. The trainers are actual SOC professionals with deep industry knowledge. Got placed within 2 weeks of course completion!'
        },
        {
            name: 'Priya Desai',
            designation: 'Security Analyst at Infosys',
            rating: 5,
            avatar: 'PD',
            review: 'Best SOC training in Mumbai! The course covers everything from SIEM basics to advanced threat hunting. The practical labs with QRadar and Splunk were excellent. The placement team connected me with top companies. Highly recommend for anyone serious about SOC career!'
        },
        {
            name: 'Amit Patel',
            designation: 'Cyber Security Analyst at Wipro',
            rating: 5,
            avatar: 'AP',
            review: 'Completed the weekend batch while working full-time. The flexible schedule and comprehensive curriculum made it easy. Learned SIEM, incident response, threat intelligence, and automation. Now working in a 24x7 SOC with 50% salary increase!'
        },
        {
            name: 'Sneha Kulkarni',
            designation: 'Incident Response Analyst at Accenture',
            rating: 5,
            avatar: 'SK',
            review: 'SevenMentor provides industry-best SOC training with experienced instructors. The course includes practical exercises with real attack scenarios, SIEM correlation rules, and incident handling. The certification helped me land a role in enterprise SOC team!'
        }
    ];

    const faqs = [
        {
            id: 1,
            question: 'What is SOC Analyst Training?',
            answer: 'SOC Analyst Training is a comprehensive program designed to teach you security monitoring, threat detection, incident response, and SIEM platform management. You will learn to work as a Security Operations Center analyst, monitoring and protecting organizations from cyber threats using industry-standard tools like Splunk, QRadar, and ArcSight.'
        },
        {
            id: 2,
            question: 'What are the prerequisites for SOC training?',
            answer: 'Basic knowledge of computer systems and networking is helpful but not mandatory. Anyone with interest in cybersecurity can join. We start from fundamentals and gradually progress to advanced SOC concepts. IT professionals, graduates, and career switchers are all welcome.'
        },
        {
            id: 3,
            question: 'What is the course duration?',
            answer: 'The complete SOC training duration is 100-120 hours covering all 20 modules. This includes theoretical sessions, hands-on SIEM labs, incident response exercises, and practical projects. Duration varies based on batch type - weekday evening, weekend, or fast-track.'
        },
        {
            id: 4,
            question: 'Which SIEM tools will I learn?',
            answer: 'You will get comprehensive hands-on training on industry-leading SIEM platforms including Splunk Enterprise, IBM QRadar, and ArcSight ESM. Additionally, you will learn supporting tools like Wireshark, Snort, Suricata, EDR platforms, SOAR tools, and threat intelligence platforms.'
        },
        {
            id: 5,
            question: 'Do you provide hands-on practical training?',
            answer: 'Yes! Practical learning is our core strength. Students get access to dedicated SOC labs with SIEM tools, security monitoring dashboards, and simulated attack scenarios. We conduct real-world incident response exercises, log analysis sessions, threat hunting activities, and security automation projects.'
        },
        {
            id: 6,
            question: 'What job roles can I apply for after SOC training?',
            answer: 'After completing SOC training, you can pursue roles like SOC Analyst (Tier 1/2/3), Security Analyst, Incident Response Analyst, Threat Intelligence Analyst, Security Monitoring Specialist, Cyber Defense Analyst, SIEM Engineer, Threat Hunter, and Security Operations Engineer.'
        },
        {
            id: 7,
            question: 'Do you provide placement assistance?',
            answer: 'Yes, SevenMentor provides 100% placement assistance. We help with resume building, interview preparation for SOC roles, mock interviews with SOC scenarios, and connect you with leading cybersecurity firms, MNCs, and enterprise SOC teams. Our placement team has strong industry connections.'
        },
        {
            id: 8,
            question: 'What is the salary range for SOC analysts?',
            answer: 'Entry-level SOC Analysts in India can expect salaries ranging from 3.5-6 LPA. With 2-3 years of experience, salaries can go up to 8-12 LPA. Senior SOC Analysts and Tier 3 analysts with 5+ years experience can earn 15-25 LPA depending on company size and location.'
        },
        {
            id: 9,
            question: 'Is online training as effective as classroom training?',
            answer: 'Yes! Our online SOC training provides the same quality as classroom training with live instructor-led sessions, hands-on SIEM labs, recorded videos for revision, real-time doubt clearing, and practical assignments. Interactive sessions with screen sharing ensure effective learning.'
        },
        {
            id: 10,
            question: 'What certifications are covered in the training?',
            answer: 'The training prepares you for industry certifications like CompTIA Security+, CompTIA CySA+ (Cybersecurity Analyst), Splunk Certified User, EC-Council CSA (Certified SOC Analyst), and GIAC Security Essentials (GSEC). You will receive SevenMentor certification upon course completion.'
        },
        {
            id: 11,
            question: 'Do you offer corporate SOC training?',
            answer: 'Yes, SevenMentor offers Corporate SOC Training for organizations looking to build or enhance their security operations capabilities. We provide customized training programs, SOC team development, tool-specific training (Splunk, QRadar), and security operations best practices workshops.'
        },
        {
            id: 12,
            question: 'What makes SevenMentor\'s SOC training unique?',
            answer: 'SevenMentor stands out with 10+ years experienced SOC trainers from enterprise backgrounds, hands-on training with multiple SIEM platforms, real-world incident response scenarios, updated curriculum matching industry standards, flexible batch timings, strong placement support, and proven track record of training 1500+ successful SOC professionals.'
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
                <h1>Security Operations Center (SOC) Training Course in Mumbai | SevenMentor</h1>
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
                    href="https://api.whatsapp.com/send?phone=+918421176876&text=Hi+I+am+looking+for+Security+Operations+Center+Course+in+Mumbai+course"
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
                        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6 rounded-t-2xl flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-bold">Enroll Now</h3>
                                <p className="text-blue-100 text-sm">Start your SOC analyst career today</p>
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
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
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
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
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                                    placeholder="Any questions or special requirements..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transform hover:scale-[1.02] transition-all duration-300"
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
                            <Monitor className="w-5 h-5 text-orange-300" />
                            <span className="text-sm font-semibold text-orange-200">Professional SOC Training by SevenMentor</span>
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

                {/* Why Learn SOC */}
                <section className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-green-50 to-white p-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-500 rounded-xl flex items-center justify-center">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Why Learn SOC?</h2>
                                <p className="text-sm text-gray-600">Benefits of pursuing SOC analyst career</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            {whyLearn.map((item, idx) => (
                                <div key={idx} className="p-6 bg-blue-50 border border-blue-100 rounded-xl hover:shadow-lg transition-all duration-300">
                                    <h3 className="font-bold text-gray-900 mb-2 text-lg flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-blue-600" />
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
                                <h2 className="text-3xl font-bold text-gray-900">SOC Training Course Syllabus</h2>
                                <p className="text-sm text-gray-600">Complete 20 modules covering all SOC topics</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                                <div className="text-sm text-orange-600 font-medium">Total Duration</div>
                                <div className="text-2xl font-bold text-orange-700">100-120 Hours</div>
                            </div>
                            <div className="bg-green-50 border border-green-200 px-6 py-3 rounded-xl">
                                <div className="text-sm text-green-600 font-medium">Modules</div>
                                <div className="text-2xl font-bold text-green-700">{syllabus.modules.length}</div>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 px-6 py-3 rounded-xl">
                                <div className="text-sm text-blue-600 font-medium">Skill Level</div>
                                <div className="text-2xl font-bold text-blue-700">All Levels</div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {syllabus.modules.map((module) => (
                                <div key={module.id} className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
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
                course='Security Operations Center (SOC) Training'
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
                                <div key={idx} className="flex items-start gap-3 p-4 bg-purple-50 border border-purple-100 rounded-xl">
                                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
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
                                <div key={idx} className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <span className="text-gray-800 font-medium text-sm">{req.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Batch Schedule */}
                <section id="schedule" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-50 to-white p-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center">
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
                                    <tr className="bg-blue-50">
                                        <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-blue-200">Batch ID</th>
                                        <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-blue-200">Start Date</th>
                                        <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-blue-200">Mode</th>
                                        <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-blue-200">Timing</th>
                                        <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-blue-200">Schedule</th>
                                        <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-blue-200">Location</th>
                                        <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-blue-200">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {batches.map((batch, idx) => (
                                        <tr key={idx} className="border-b border-gray-100 hover:bg-blue-50 transition-colors duration-200">
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
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${batch.mode === 'Online' ? 'bg-blue-100 text-blue-700' :
                                                    batch.mode === 'Offline' ? 'bg-green-100 text-green-700' :
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

              

                {/* FAQ Section */}
                <section id="faq" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-pink-50 to-white p-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-500 rounded-xl flex items-center justify-center">
                                <ShieldCheck className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                                <p className="text-sm text-gray-600">Everything you need to know about SOC training</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="space-y-4">
                            {faqs.map((faq) => (
                                <div key={faq.id} className="border border-gray-200 rounded-xl overflow-hidden hover:border-blue-400 transition-colors duration-300">
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
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Become a SOC Analyst?</h2>
                                <p className="text-xl text-gray-300 mb-8">Join 1500+ students trained by SevenMentor and start your cybersecurity career</p>

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
                                                    Dadar East, Dadar, Mumbai, ,<br />
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
                                            href="https://api.whatsapp.com/send?phone=+918421176876&text=Hi+I+am+looking+for+Security+Operations+Center+Course+in+Mumbai+course"
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
                    <p className="text-gray-400">© 2025 SevenMentor - Security Operations Center Training Institute Mumbai. All rights reserved.</p>
                    <p className="text-sm text-gray-500 mt-2">SOC Training | SIEM Course | Cyber Security Monitoring | Mumbai | SevenMentor</p>
                </div>
            </footer>
        </div>
    );
}
