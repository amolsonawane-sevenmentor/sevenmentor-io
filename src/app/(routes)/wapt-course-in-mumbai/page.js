'use client';
import { useState } from 'react';
import {
    Shield, ShieldCheck, Lock, AlertTriangle, FileCheck, Search,
    Users, Clock, Award, Briefcase, Star, CheckCircle,
    ChevronDown, ChevronUp, BookOpen, Target, TrendingUp,
    Calendar, MapPin, Phone, Mail, Globe, Laptop,
    Code, Database, Network, Server, Eye, Bug, User,
    Building, GraduationCap, Zap, Terminal, X, MessageCircle,
    FileText, Activity, Layers, Key, RefreshCw, Settings
} from 'lucide-react';
import EnrollForm from "../../../components/EnrollForm/EnrollForm.jsx"
export default function WAPTCoursePage() {
    const [expandedModule, setExpandedModule] = useState(1);
    const [expandedFaq, setExpandedFaq] = useState(null);
    const [showEnrollForm, setShowEnrollForm] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        course: 'Web Application Penetration Testing (WAPT)',
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
            course: 'Web Application Penetration Testing (WAPT)',
            batchPreference: '',
            experience: '',
            message: ''
        });
    };

    const heroData = {
        title: 'Web Application Penetration Testing (WAPT)',
        subtitle: 'Master Web Security Testing, OWASP Top 10 & Advanced Exploitation',
        description: 'Become a professional web application security tester with comprehensive training in finding and exploiting web vulnerabilities, security testing methodologies, and industry-standard tools like Burp Suite, OWASP ZAP from expert penetration testers at SevenMentor',
        badges: [
            { icon: Clock, label: '100-120 Hours', color: 'bg-orange-600' },
            { icon: Users, label: '1500+ Learners', color: 'bg-blue-600' },
            { icon: Award, label: 'Industry Certified', color: 'bg-orange-600' },
            { icon: Briefcase, label: '100% Placement', color: 'bg-purple-600' }
        ]
    };

    const stats = [
        { value: '100-120', label: 'Hours Training', icon: Clock, color: 'orange' },
        { value: '1500+', label: 'Students Trained', icon: Users, color: 'orange' },
        { value: '92+', label: 'Batches Completed', icon: TrendingUp, color: 'orange' },
        { value: '15+ Years', label: 'Expert Trainers', icon: Award, color: 'orange' }
    ];

    const aboutCourse = {
        title: 'About WAPT Training',
        description: 'Web Application Penetration Testing (WAPT) is a systematic process of identifying security vulnerabilities in web applications before malicious attackers can exploit them. WAPT professionals use ethical hacking techniques to discover flaws in web application architecture, business logic, authentication mechanisms, and data handling. The WAPT Training Course in Mumbai provided by SevenMentor will equip you with hands-on skills to test modern web applications, APIs, and cloud-based systems using industry-standard tools and methodologies.',
        highlights: [
            'Certified Security Professionals with 15+ years experience',
            'Hands-on Labs with Real Vulnerable Web Applications',
            'Complete OWASP Top 10 Coverage with Live Exploitation',
            'Flexible Batches: Weekday, Weekend, and Fast Track',
            '100% Placement Assistance in Security Testing Teams',
            'Burp Suite Professional & OWASP ZAP Training'
        ],
        sections: [
            {
                heading: 'What is Web Application Penetration Testing?',
                content: 'Web Application Penetration Testing is a controlled and authorized security assessment where ethical hackers attempt to exploit vulnerabilities in web applications. Unlike vulnerability scanning, penetration testing involves manual testing, logical reasoning, and creative attack scenarios. WAPT professionals test for SQL injection, XSS, authentication bypass, business logic flaws, API vulnerabilities, and many other security weaknesses that could compromise sensitive data or system integrity.'
            },
            {
                heading: 'Why is WAPT Training Important?',
                content: 'With over 90% of organizations experiencing web application attacks annually, there is massive demand for skilled penetration testers who can identify security flaws before they are exploited. Web applications handle sensitive customer data, financial transactions, and critical business operations. A single vulnerability can lead to data breaches, financial losses, and regulatory penalties. WAPT professionals are crucial for protecting digital assets and maintaining customer trust.'
            },
            {
                heading: 'What Does a WAPT Professional Do?',
                content: 'WAPT professionals conduct comprehensive security assessments of web applications including reconnaissance and information gathering, vulnerability identification and validation, exploitation of security weaknesses, privilege escalation attempts, lateral movement testing, documentation of findings with proof-of-concepts, risk assessment and prioritization, detailed remediation recommendations, and post-remediation verification testing.'
            },
            {
                heading: 'Why Choose SevenMentor for WAPT Training?',
                content: 'SevenMentor has trained over 1500 successful web application security testers in Mumbai. Our trainers are active penetration testers with real-world experience securing enterprise applications. Students practice on deliberately vulnerable applications like DVWA, WebGoat, Juice Shop, and custom lab environments. We cover everything from basic security concepts to advanced exploitation techniques, ensuring you are job-ready upon course completion.'
            }
        ]
    };

    const syllabus = {
        modules: [
            {
                id: 1,
                title: 'Introduction to Web Application Security',
                duration: '1 Week',
                topics: [
                    'Web Application Security Fundamentals',
                    'Common Web Application Vulnerabilities',
                    'Security Testing vs Vulnerability Scanning',
                    'Ethical Hacking and Legal Considerations',
                    'Understanding the CIA Triad',
                    'OWASP Organization and Resources',
                    'Career Path in Web Security Testing'
                ]
            },
            {
                id: 2,
                title: 'Web Application Architecture',
                duration: '2 Weeks',
                topics: [
                    'HTTP Protocol Deep Dive',
                    'HTTPS and SSL/TLS',
                    'Client-Server Architecture',
                    'Frontend Technologies (HTML, CSS, JavaScript)',
                    'Backend Technologies (PHP, Python, Node.js, Java)',
                    'Databases and SQL Fundamentals',
                    'Web Servers (Apache, Nginx, IIS)',
                    'Application Servers and Middleware',
                    'RESTful APIs and Web Services',
                    'Cookie and Session Management',
                    'Same-Origin Policy and CORS'
                ]
            },
            {
                id: 3,
                title: 'Information Gathering and Reconnaissance',
                duration: '2 Weeks',
                topics: [
                    'Passive Information Gathering',
                    'Active Information Gathering',
                    'Google Dorking and Search Engine Techniques',
                    'WHOIS and DNS Enumeration',
                    'Subdomain Discovery',
                    'Technology Stack Identification',
                    'Directory and File Enumeration',
                    'Source Code Review from Public Repositories',
                    'Social Engineering Information Gathering',
                    'Tools: Nmap, Sublist3r, theHarvester, Maltego'
                ]
            },
            {
                id: 4,
                title: 'Burp Suite Professional Training',
                duration: '3 Weeks',
                topics: [
                    'Burp Suite Installation and Configuration',
                    'Proxy Configuration and Browser Setup',
                    'Intercepting and Modifying Requests',
                    'Repeater for Manual Testing',
                    'Intruder for Automated Attacks',
                    'Sequencer for Randomness Testing',
                    'Decoder and Comparer Tools',
                    'Extensions and Marketplace',
                    'Collaborator for Out-of-Band Testing',
                    'Scanner Features and Automation',
                    'Custom Wordlists and Payloads',
                    'Reporting Features'
                ]
            },
            {
                id: 5,
                title: 'OWASP Top 10 - Part 1',
                duration: '3 Weeks',
                topics: [
                    'A01:2021 - Broken Access Control',
                    'Horizontal and Vertical Privilege Escalation',
                    'Insecure Direct Object References (IDOR)',
                    'Path Traversal Attacks',
                    'A02:2021 - Cryptographic Failures',
                    'Sensitive Data Exposure',
                    'Weak Encryption and Hashing',
                    'A03:2021 - Injection Vulnerabilities',
                    'SQL Injection - Detection and Exploitation',
                    'Manual SQL Injection Techniques',
                    'SQLMap Automated Exploitation',
                    'Blind SQL Injection',
                    'Second-Order SQL Injection',
                    'NoSQL Injection',
                    'Command Injection',
                    'LDAP and XML Injection'
                ]
            },
            {
                id: 6,
                title: 'OWASP Top 10 - Part 2',
                duration: '3 Weeks',
                topics: [
                    'A04:2021 - Insecure Design',
                    'Business Logic Vulnerabilities',
                    'Race Conditions and Time-of-Check Issues',
                    'A05:2021 - Security Misconfiguration',
                    'Default Credentials and Accounts',
                    'Directory Listing and Information Disclosure',
                    'Error Message Analysis',
                    'A06:2021 - Vulnerable and Outdated Components',
                    'Identifying Outdated Libraries',
                    'Exploiting Known Vulnerabilities (CVE)',
                    'A07:2021 - Identification and Authentication Failures',
                    'Brute Force and Credential Stuffing',
                    'Session Management Flaws',
                    'Password Reset Vulnerabilities',
                    'Multi-Factor Authentication Bypass',
                    'Cookie Security Issues'
                ]
            },
            {
                id: 7,
                title: 'OWASP Top 10 - Part 3',
                duration: '2 Weeks',
                topics: [
                    'A08:2021 - Software and Data Integrity Failures',
                    'Insecure Deserialization',
                    'Supply Chain Attacks',
                    'A09:2021 - Security Logging and Monitoring Failures',
                    'Log Analysis and Forensics',
                    'Detecting Security Incidents',
                    'A10:2021 - Server-Side Request Forgery (SSRF)',
                    'SSRF Detection and Exploitation',
                    'Cloud Metadata Attacks',
                    'Internal Network Scanning via SSRF'
                ]
            },
            {
                id: 8,
                title: 'Cross-Site Scripting (XSS) Attacks',
                duration: '3 Weeks',
                topics: [
                    'Understanding XSS Vulnerabilities',
                    'Reflected XSS - Detection and Exploitation',
                    'Stored XSS - Persistent Attacks',
                    'DOM-Based XSS',
                    'XSS Payload Construction',
                    'Bypassing XSS Filters and WAF',
                    'BeEF Framework for Browser Exploitation',
                    'XSS in Modern JavaScript Frameworks',
                    'Content Security Policy (CSP) Bypass',
                    'XSS to Account Takeover',
                    'Cookie Stealing and Session Hijacking'
                ]
            },
            {
                id: 9,
                title: 'Cross-Site Request Forgery (CSRF)',
                duration: '1 Week',
                topics: [
                    'Understanding CSRF Attacks',
                    'CSRF Token Analysis',
                    'Bypassing CSRF Protection',
                    'CSRF with XSS Exploitation',
                    'Same-Site Cookie Attributes',
                    'Real-World CSRF Attack Scenarios'
                ]
            },
            {
                id: 10,
                title: 'File Upload Vulnerabilities',
                duration: '2 Weeks',
                topics: [
                    'File Upload Security Risks',
                    'Bypassing File Type Restrictions',
                    'Magic Byte Manipulation',
                    'Uploading Web Shells',
                    'Remote Code Execution via Upload',
                    'Path Traversal in Upload Functions',
                    'Image File Exploits',
                    'Polyglot Files',
                    'Malicious SVG Files'
                ]
            },
            {
                id: 11,
                title: 'Authentication and Authorization Testing',
                duration: '2 Weeks',
                topics: [
                    'Authentication Mechanisms Overview',
                    'Testing Login Functionality',
                    'Brute Force Attacks with Burp Intruder',
                    'Password Reset Flaws',
                    'Remember Me Functionality Issues',
                    'OAuth 2.0 Vulnerabilities',
                    'JWT (JSON Web Token) Security',
                    'JWT Tampering and Attacks',
                    'API Key Security',
                    'Authorization Bypass Techniques'
                ]
            },
            {
                id: 12,
                title: 'API Security Testing',
                duration: '3 Weeks',
                topics: [
                    'REST API Fundamentals',
                    'GraphQL API Security',
                    'SOAP Web Services Testing',
                    'API Authentication Testing',
                    'API Rate Limiting Bypass',
                    'Mass Assignment Vulnerabilities',
                    'API Parameter Tampering',
                    'API Versioning Issues',
                    'Postman and API Testing Tools',
                    'OWASP API Security Top 10',
                    'Broken Object Level Authorization',
                    'Excessive Data Exposure in APIs'
                ]
            },
            {
                id: 13,
                title: 'Advanced Web Attacks',
                duration: '2 Weeks',
                topics: [
                    'XML External Entity (XXE) Injection',
                    'Server-Side Template Injection (SSTI)',
                    'Remote File Inclusion (RFI)',
                    'Local File Inclusion (LFI)',
                    'HTTP Request Smuggling',
                    'HTTP Parameter Pollution',
                    'Clickjacking Attacks',
                    'WebSocket Security Testing',
                    'Host Header Injection',
                    'Open Redirect Vulnerabilities'
                ]
            },
            {
                id: 14,
                title: 'Client-Side Security Testing',
                duration: '2 Weeks',
                topics: [
                    'JavaScript Security Analysis',
                    'Browser Developer Tools for Security',
                    'Debugging JavaScript Code',
                    'Client-Side Validation Bypass',
                    'HTML5 Security Features',
                    'PostMessage Vulnerabilities',
                    'Web Storage Security (localStorage, sessionStorage)',
                    'CORS Misconfiguration',
                    'Content Security Policy Testing'
                ]
            },
            {
                id: 15,
                title: 'Mobile Web Application Testing',
                duration: '1 Week',
                topics: [
                    'Mobile Web vs Native Apps',
                    'Responsive Design Security',
                    'Mobile API Testing',
                    'Touch-Based Attack Vectors',
                    'Mobile Browser Security',
                    'Progressive Web Apps (PWA) Security'
                ]
            },
            {
                id: 16,
                title: 'Web Application Firewall (WAF) Bypass',
                duration: '2 Weeks',
                topics: [
                    'Understanding WAF Technology',
                    'Identifying WAF Solutions',
                    'Encoding and Obfuscation Techniques',
                    'Bypassing ModSecurity Rules',
                    'Cloudflare WAF Bypass Techniques',
                    'Alternative Payload Construction',
                    'Time-Based Bypass Methods',
                    'Using Null Bytes and Special Characters'
                ]
            },
            {
                id: 17,
                title: 'Automated Scanning Tools',
                duration: '2 Weeks',
                topics: [
                    'OWASP ZAP Installation and Configuration',
                    'Active and Passive Scanning',
                    'ZAP Scripting and Automation',
                    'Nikto Web Server Scanner',
                    'Acunetix Web Vulnerability Scanner',
                    'Nessus for Web Application Scanning',
                    'Integration with CI/CD Pipelines',
                    'False Positive Analysis'
                ]
            },
            {
                id: 18,
                title: 'Penetration Testing Methodology',
                duration: '2 Weeks',
                topics: [
                    'PTES (Penetration Testing Execution Standard)',
                    'OWASP Testing Guide',
                    'Pre-Engagement and Scoping',
                    'Rules of Engagement',
                    'Testing Checklist Creation',
                    'Time Management in Testing',
                    'Note-Taking and Documentation',
                    'Proof-of-Concept Development',
                    'Risk Rating and Prioritization (CVSS)',
                    'Communication with Development Teams'
                ]
            },
            {
                id: 19,
                title: 'Report Writing and Communication',
                duration: '2 Weeks',
                topics: [
                    'Executive Summary Writing',
                    'Technical Report Structure',
                    'Vulnerability Description Best Practices',
                    'Proof-of-Concept Documentation',
                    'Remediation Recommendations',
                    'CVSS Scoring and Risk Assessment',
                    'Visual Documentation (Screenshots, Videos)',
                    'Report Templates and Standards',
                    'Client Communication Skills',
                    'Presenting Findings to Stakeholders'
                ]
            },
            {
                id: 20,
                title: 'Real-World Practice Labs',
                duration: '3 Weeks',
                topics: [
                    'DVWA (Damn Vulnerable Web Application)',
                    'OWASP WebGoat',
                    'OWASP Juice Shop',
                    'HackTheBox Web Challenges',
                    'PortSwigger Web Security Academy Labs',
                    'bWAPP (Buggy Web Application)',
                    'PentesterLab Exercises',
                    'Custom Vulnerable Applications',
                    'Bug Bounty Platform Introduction',
                    'Final Capstone Project'
                ]
            }
        ]
    };

    const features = [
        {
            icon: GraduationCap,
            title: 'Expert Security Trainers',
            description: 'Learn from active penetration testers with 15+ years securing enterprise applications',
            color: 'orange'
        },
        {
            icon: Laptop,
            title: 'Burp Suite Pro Training',
            description: 'Complete hands-on training with industry-standard Burp Suite Professional',
            color: 'orange'
        },
        {
            icon: Award,
            title: 'OWASP Certification Ready',
            description: 'Comprehensive preparation for web security certifications',
            color: 'orange'
        },
        {
            icon: Briefcase,
            title: '100% Placement Support',
            description: 'Job assistance with security teams, consulting firms, and MNCs',
            color: 'orange'
        },
        {
            icon: Zap,
            title: 'Flexible Learning Options',
            description: 'Weekday evening, weekend, and fast-track batches available',
            color: 'orange'
        },
        {
            icon: Building,
            title: 'Real Vulnerable Apps',
            description: 'Practice on DVWA, Juice Shop, WebGoat, and custom lab environments',
            color: 'orange'
        }
    ];

    const proficiencies = [
        'OWASP Top 10 Vulnerability Identification and Exploitation',
        'Burp Suite Professional and OWASP ZAP Mastery',
        'SQL Injection, XSS, and CSRF Attack Techniques',
        'Authentication and Authorization Testing',
        'API Security Testing (REST, GraphQL, SOAP)',
        'Manual and Automated Security Testing',
        'WAF Bypass Techniques and Evasion',
        'Professional Penetration Testing Report Writing'
    ];

    const eligibility = [
        { label: 'Cybersecurity Professionals', eligible: true },
        { label: 'Ethical Hackers and Penetration Testers', eligible: true },
        { label: 'Web Developers and Programmers', eligible: true },
        { label: 'System Administrators', eligible: true },
        { label: 'IT Security Analysts', eligible: true },
        { label: 'QA Testers interested in Security', eligible: true },
        { label: 'IT Graduates and Post-Graduates', eligible: true },
        { label: 'Security Consultants', eligible: true },
        { label: 'Anyone interested in Web Security', eligible: true }
    ];

    const whyLearn = [
        {
            title: 'High Market Demand',
            description: 'Organizations worldwide are desperately seeking skilled web security professionals'
        },
        {
            title: 'Excellent Salary Potential',
            description: 'Web application penetration testers earn among the highest salaries in IT security'
        },
        {
            title: 'Critical Skill Set',
            description: 'Web vulnerabilities are the #1 attack vector - your skills protect businesses'
        },
        {
            title: 'Remote Work Friendly',
            description: 'Most security testing work can be performed remotely with flexible schedules'
        },
        {
            title: 'Bug Bounty Opportunities',
            description: 'Earn additional income through bug bounty programs from major companies'
        },
        {
            title: 'Continuous Learning',
            description: 'Technology evolves constantly - always new challenges and learning opportunities'
        }
    ];

    const batches = [
        {
            id: 'WAPT-2025-01',
            startDate: '28/01/2025',
            mode: 'Online',
            timing: 'Weekday Evening (Mon-Fri)',
            schedule: '7:00 PM - 9:00 PM',
            duration: '100-120 Hours',
            location: 'Online Live',
            seats: 'Available'
        },
        {
            id: 'WAPT-2025-02',
            startDate: '03/02/2025',
            mode: 'Offline',
            timing: 'Weekend (Sat-Sun)',
            schedule: '10:00 AM - 6:00 PM',
            duration: '100-120 Hours',
            location: 'Dadar, Mumbai',
            seats: 'Filling Fast'
        },
        {
            id: 'WAPT-2025-03',
            startDate: '10/02/2025',
            mode: 'Hybrid',
            timing: 'Fast Track (Mon-Fri)',
            schedule: '9:00 AM - 5:00 PM',
            duration: '100-120 Hours',
            location: 'Mumbai + Online',
            seats: 'Available'
        },
        {
            id: 'WAPT-2025-04',
            startDate: '17/02/2025',
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
            name: 'Amit Sharma',
            designation: 'Senior Security Consultant at Deloitte',
            rating: 5,
            avatar: 'AS',
            review: 'SevenMentor\'s WAPT training transformed my career! The hands-on labs with Burp Suite and real vulnerable applications gave me practical skills that I use daily. The trainers are actual pentesters who shared real-world attack scenarios. Within 2 months of completing the course, I landed a security consultant role at a Big 4 firm with 80% salary hike!'
        },
        {
            name: 'Priya Desai',
            designation: 'Web Application Security Tester at TCS',
            rating: 5,
            avatar: 'PD',
            review: 'Best web security training in Mumbai! The OWASP Top 10 coverage was exceptional with detailed exploitation techniques for each vulnerability. Loved the API security module and WAF bypass techniques. The report writing training helped me produce professional deliverables from day one. Highly recommend SevenMentor for aspiring security testers!'
        },
        {
            name: 'Rahul Verma',
            designation: 'Penetration Tester at Cyberfort',
            rating: 5,
            avatar: 'RV',
            review: 'Completed the weekend batch while working full-time. The course structure is perfect - theory followed by immediate hands-on practice. Learned SQLi, XSS, authentication bypass, and so many advanced techniques. The bug bounty guidance was a bonus - I\'ve already earned $3000 from HackerOne! Best investment in my security career!'
        },
        {
            name: 'Sneha Kulkarni',
            designation: 'Security Analyst at Infosys',
            rating: 5,
            avatar: 'SK',
            review: 'SevenMentor exceeded my expectations! Coming from a development background, I had basic security knowledge but this course made me a professional pentester. The trainers were patient, knowledgeable, and always available for doubt clearing. The placement support team helped me prepare for interviews and I secured a security analyst position within 3 weeks of course completion!'
        }
    ];

    const faqs = [
        {
            id: 1,
            question: 'What is Web Application Penetration Testing (WAPT)?',
            answer: 'Web Application Penetration Testing is the practice of testing web applications for security vulnerabilities by simulating real-world attacks in a controlled environment. WAPT professionals use ethical hacking techniques to find and exploit security flaws like SQL injection, XSS, broken authentication, and business logic errors before malicious hackers can discover them. This helps organizations secure their web applications and protect sensitive data.'
        },
        {
            id: 2,
            question: 'What are the prerequisites for this WAPT course?',
            answer: 'Basic understanding of web technologies (HTML, JavaScript), HTTP protocol, and general networking concepts is helpful but not mandatory. The course starts with web application architecture fundamentals. However, having some programming or development experience will help you understand vulnerabilities more deeply. Anyone with passion for cybersecurity and willingness to learn can successfully complete this course.'
        },
        {
            id: 3,
            question: 'What is the course duration and structure?',
            answer: 'The complete WAPT training is 100-120 hours covering all 20 modules comprehensively. This includes theoretical sessions, extensive hands-on labs with vulnerable applications, real penetration testing projects, tool training (Burp Suite, OWASP ZAP), and report writing practice. Duration varies based on batch type - weekday evening (4-5 months), weekend (5-6 months), or intensive fast-track (3 months).'
        },
        {
            id: 4,
            question: 'Which tools will I learn in this course?',
            answer: 'You will gain expertise in industry-standard tools including Burp Suite Professional (complete mastery), OWASP ZAP, SQLMap for SQL injection, Nmap for reconnaissance, Nikto web scanner, browser developer tools, Postman for API testing, BeEF framework for XSS exploitation, and various specialized tools for specific attack vectors. We focus heavily on manual testing skills alongside automated tools.'
        },
        {
            id: 5,
            question: 'Will I get hands-on practice with real applications?',
            answer: 'Absolutely! Practical hands-on training is the core of our WAPT course. You will practice on deliberately vulnerable applications like DVWA, OWASP Juice Shop, WebGoat, bWAPP, and custom lab environments. You will find and exploit real vulnerabilities, develop proof-of-concepts, and document findings just like professional penetration testers. Our labs simulate real-world scenarios you will encounter in the field.'
        },
        {
            id: 6,
            question: 'Does the course cover OWASP Top 10?',
            answer: 'Yes! We provide comprehensive coverage of the OWASP Top 10 2021, which includes Broken Access Control, Cryptographic Failures, Injection vulnerabilities, Insecure Design, Security Misconfiguration, Vulnerable Components, Authentication Failures, Data Integrity Failures, Logging/Monitoring Failures, and SSRF. Each vulnerability is taught with detection techniques, exploitation methods, bypass techniques, and remediation strategies.'
        },
        {
            id: 7,
            question: 'What career opportunities are available after WAPT training?',
            answer: 'After WAPT certification, you can pursue roles like Web Application Penetration Tester, Security Consultant, Vulnerability Assessment Analyst, Application Security Engineer, Bug Bounty Hunter, Security Auditor, Red Team Member, and DevSecOps Engineer. Organizations across all industries need web security professionals. Starting salaries range from 5-8 LPA, with experienced professionals earning 12-25 LPA or more.'
        },
        {
            id: 8,
            question: 'Can I participate in bug bounty programs after this course?',
            answer: 'Yes! The course prepares you for bug bounty hunting on platforms like HackerOne, Bugcrowd, and Synack. We cover bug bounty methodologies, target reconnaissance, finding unique vulnerabilities, report writing for bug bounties, and program selection strategies. Many of our students have successfully earned rewards from bug bounty programs. We also guide you on responsible disclosure and building your security researcher profile.'
        },
        {
            id: 9,
            question: 'Is Burp Suite Professional license included?',
            answer: 'During training, you will use Burp Suite Professional in our lab environment. We teach all Burp Suite Pro features comprehensively. After training, you can use the free Burp Suite Community Edition for practice, or invest in a professional license for advanced features. Many employers provide Burp Suite Pro licenses to their security testers. We also cover free alternatives like OWASP ZAP thoroughly.'
        },
        {
            id: 10,
            question: 'How is this different from CEH certification?',
            answer: 'CEH (Certified Ethical Hacker) is a broad certification covering various hacking domains including network, wireless, and web security. WAPT is specialized and goes much deeper into web application security. If you want to focus specifically on web application penetration testing with advanced exploitation techniques, hands-on skills, and practical experience, WAPT training is more suitable. Many professionals do WAPT training to specialize after completing CEH.'
        },
        {
            id: 11,
            question: 'Do you provide placement assistance?',
            answer: 'Yes, SevenMentor provides 100% placement assistance. Our services include resume building highlighting your security testing skills, interview preparation for security roles, mock technical interviews, company-specific preparation, direct connections with hiring managers at IT companies, consulting firms, and startups. Our placement team has strong relationships with organizations actively hiring security professionals. We support you until you secure a suitable position.'
        },
        {
            id: 12,
            question: 'What makes SevenMentor\'s WAPT training unique?',
            answer: 'SevenMentor stands out with trainers who are active penetration testers (not just certified instructors), comprehensive hands-on labs with real vulnerable applications, complete Burp Suite Professional training, OWASP Top 10 deep dive with exploitation, API security testing coverage, WAF bypass techniques, bug bounty preparation, professional report writing training, flexible batch timings for working professionals, and proven track record of placing 1500+ successful security testers.'
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
                <h1>Web Application Penetration Testing (WAPT) Training Course in Mumbai | SevenMentor</h1>
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
                    href="https://api.whatsapp.com/send?phone=+918421176876&text=Hi+I+am+looking+for+WAPT+Course+in+Mumbai+course"
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
                                <p className="text-orange-100 text-sm">Start your web security testing career today</p>
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
                            <Shield className="w-5 h-5 text-orange-300" />
                            <span className="text-sm font-semibold text-orange-200">OWASP Top 10 Certified Training by SevenMentor</span>
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

                {/* Why Learn WAPT */}
                <section className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-50 to-white p-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Why Learn Web Application Security?</h2>
                                <p className="text-sm text-gray-600">Benefits of pursuing web security testing career</p>
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
                                <h2 className="text-3xl font-bold text-gray-900">WAPT Course Syllabus</h2>
                                <p className="text-sm text-gray-600">Complete 20 modules covering all web security topics</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="flex flex-wrap gap-4 mb-8">
                            <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                                <div className="text-sm text-orange-600 font-medium">Total Duration</div>
                                <div className="text-2xl font-bold text-orange-700">100-120 Hours</div>
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
                mailTo="vivekmandiya178@gmail.com"
                course='Web Application Penetration Testing (WAPT)'
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
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${batch.mode === 'Online' ? 'bg-blue-100 text-blue-700' :
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

               

                {/* FAQ Section */}
                <section id="faq" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-pink-50 to-white p-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-500 rounded-xl flex items-center justify-center">
                                <ShieldCheck className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                                <p className="text-sm text-gray-600">Everything you need to know about WAPT training</p>
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
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Become a Web Security Expert?</h2>
                                <p className="text-xl text-gray-300 mb-8">Join 1500+ students trained by SevenMentor and start your web application security career</p>

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
                                            href="https://api.whatsapp.com/send?phone=+918421176876&text=Hi+I+am+looking+for+WAPT+Course+in+Mumbai+course"
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
                    <p className="text-gray-400">© 2025 SevenMentor - Web Application Penetration Testing Training Institute Mumbai. All rights reserved.</p>
                    <p className="text-sm text-gray-500 mt-2">WAPT Training | Web Security Course | OWASP Top 10 | Burp Suite Training | Mumbai | SevenMentor</p>
                </div>
            </footer>
        </div>
    );
}

