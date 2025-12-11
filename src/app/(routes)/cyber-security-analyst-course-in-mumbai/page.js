'use client';
import { useState } from 'react';
import {
  Shield, ShieldCheck, Lock, AlertTriangle, FileCheck, Search,
  Users, Clock, Award, Briefcase, Star, CheckCircle,
  ChevronDown, ChevronUp, BookOpen, Target, TrendingUp,
  Calendar, MapPin, Phone, Mail, Globe, Laptop,
  Code, Database, Network, Server, Eye, Bug, User,
  Building, GraduationCap, Zap, Terminal, X, MessageCircle,
  FileText, Activity, Layers, Key, RefreshCw, Settings,
  BarChart, Bell, Crosshair, FileSearch, Radio, Scan
} from 'lucide-react';
import EnrollForm from "../../../components/EnrollForm/EnrollForm.jsx"
export default function CyberSecurityAnalystCoursePage() {
  const [expandedModule, setExpandedModule] = useState(1);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: 'Cyber Security Analyst Program',
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
      course: 'Cyber Security Analyst Program',
      batchPreference: '',
      experience: '',
      message: ''
    });
  };

  const heroData = {
    title: 'Cyber Security Analyst Program',
    subtitle: 'Master Security Operations, Threat Detection & Incident Response',
    description: 'Become a professional cyber security analyst with comprehensive training in security monitoring, threat analysis, SIEM tools, incident response, and security operations. Learn from expert security analysts at SevenMentor and start your career protecting organizations from cyber threats',
    badges: [
      { icon: Clock, label: '120-150 Hours', color: 'bg-orange-600' },
      { icon: Users, label: '2000+ Learners', color: 'bg-blue-600' },
      { icon: Award, label: 'Industry Certified', color: 'bg-orange-600' },
      { icon: Briefcase, label: '100% Placement', color: 'bg-purple-600' }
    ]
  };

  const stats = [
    { value: '120-150', label: 'Hours Training', icon: Clock, color: 'orange' },
    { value: '2000+', label: 'Students Trained', icon: Users, color: 'orange' },
    { value: '105+', label: 'Batches Completed', icon: TrendingUp, color: 'orange' },
    { value: '15+ Years', label: 'Expert Trainers', icon: Award, color: 'orange' }
  ];

  const aboutCourse = {
    title: 'About Cyber Security Analyst Training',
    description: 'Cyber Security Analysts are the frontline defenders who monitor, detect, analyze, and respond to security threats in real-time. They work in Security Operations Centers (SOCs), analyzing security events, investigating incidents, implementing security controls, and protecting organizational assets from cyber attacks. The Cyber Security Analyst Program at SevenMentor provides comprehensive training in security monitoring, threat intelligence, SIEM platforms, incident response procedures, and security best practices, preparing you for a rewarding career in cybersecurity.',
    highlights: [
      'Certified Security Analysts with 15+ years SOC experience',
      'Hands-on Training with Industry-Standard SIEM Tools',
      'Live Security Monitoring and Threat Detection Labs',
      'Flexible Batches: Weekday, Weekend, and Fast Track',
      '100% Placement Assistance with SOC Teams and MNCs',
      'Real-World Incident Response Simulations'
    ],
    sections: [
      {
        heading: 'What is a Cyber Security Analyst?',
        content: 'A Cyber Security Analyst is a professional responsible for protecting an organization\'s computer networks and systems from security breaches. They continuously monitor security alerts, analyze potential threats, investigate security incidents, implement security measures, conduct vulnerability assessments, and respond to cyber attacks. Security Analysts work with advanced tools like SIEM platforms, IDS/IPS systems, threat intelligence platforms, and security orchestration tools to identify and mitigate security risks before they cause damage.'
      },
      {
        heading: 'Why is Cyber Security Analysis Important?',
        content: 'With cyber attacks increasing by 300% annually and the global cost of cybercrime expected to reach $10.5 trillion by 2025, organizations are investing heavily in security operations. Security analysts are critical for detecting threats early, responding to incidents quickly, maintaining security compliance, and protecting sensitive data. Every industry from finance to healthcare, retail to government requires skilled security analysts to defend against sophisticated cyber threats, ransomware, data breaches, and insider threats.'
      },
      {
        heading: 'What Does a Cyber Security Analyst Do?',
        content: 'Cyber Security Analysts perform continuous security monitoring of networks and systems, analyze security logs and alerts from SIEM platforms, investigate security incidents and suspicious activities, conduct threat hunting to proactively find threats, implement and manage security tools and technologies, perform vulnerability assessments and remediation, respond to security incidents following incident response procedures, create security reports and documentation, collaborate with IT teams for security improvements, and stay updated on latest threats and attack techniques.'
      },
      {
        heading: 'Why Choose SevenMentor for Security Analyst Training?',
        content: 'SevenMentor has successfully trained over 2000 cyber security analysts who are now working in leading organizations across Mumbai and globally. Our trainers are experienced SOC analysts who have handled real security incidents in enterprise environments. Students get hands-on experience with popular SIEM platforms, security monitoring tools, threat intelligence feeds, and incident response frameworks. We cover everything from security fundamentals to advanced threat detection, ensuring you are job-ready and confident to join any Security Operations Center.'
      }
    ]
  };

  const syllabus = {
    modules: [
      {
        id: 1,
        title: 'Introduction to Cyber Security',
        duration: '1 Week',
        topics: [
          'Cyber Security Fundamentals and Concepts',
          'CIA Triad - Confidentiality, Integrity, Availability',
          'Types of Cyber Threats and Attack Vectors',
          'Cyber Security Domains and Career Paths',
          'Security Analyst Role and Responsibilities',
          'Understanding the Threat Landscape',
          'Cyber Kill Chain and Attack Lifecycle',
          'Security Operations Center (SOC) Overview'
        ]
      },
      {
        id: 2,
        title: 'Networking Fundamentals for Security',
        duration: '2 Weeks',
        topics: [
          'OSI and TCP/IP Models',
          'IP Addressing and Subnetting',
          'Network Protocols (TCP, UDP, HTTP, DNS, DHCP)',
          'Routing and Switching Basics',
          'VLANs and Network Segmentation',
          'Wireless Networking and Security',
          'Network Topology and Architecture',
          'Common Network Ports and Services',
          'Network Traffic Analysis Basics',
          'Wireshark for Packet Analysis'
        ]
      },
      {
        id: 3,
        title: 'Operating Systems Security',
        duration: '2 Weeks',
        topics: [
          'Windows Operating System Security',
          'Windows Security Features and Tools',
          'Active Directory Fundamentals',
          'Group Policy and Security Policies',
          'Linux Operating System Security',
          'Linux File Permissions and Access Control',
          'User and Group Management',
          'System Logs and Log Analysis',
          'Hardening Windows and Linux Systems',
          'Patch Management Best Practices'
        ]
      },
      {
        id: 4,
        title: 'Security Threats and Attack Types',
        duration: '2 Weeks',
        topics: [
          'Malware Types (Viruses, Worms, Trojans, Ransomware)',
          'Phishing and Social Engineering Attacks',
          'DDoS and DoS Attacks',
          'Man-in-the-Middle (MITM) Attacks',
          'SQL Injection and Web Application Attacks',
          'Password Attacks (Brute Force, Dictionary)',
          'Privilege Escalation Attacks',
          'Zero-Day Exploits and Vulnerabilities',
          'Advanced Persistent Threats (APT)',
          'Insider Threats and Data Exfiltration'
        ]
      },
      {
        id: 5,
        title: 'Security Information and Event Management (SIEM)',
        duration: '4 Weeks',
        topics: [
          'Introduction to SIEM Technology',
          'SIEM Architecture and Components',
          'Log Collection and Aggregation',
          'Log Sources and Log Formats',
          'SIEM Deployment and Configuration',
          'Splunk SIEM Platform',
          'Splunk Search Processing Language (SPL)',
          'Creating Dashboards and Visualizations',
          'IBM QRadar SIEM',
          'ArcSight SIEM Overview',
          'Microsoft Sentinel (Azure SIEM)',
          'Correlation Rules and Use Cases',
          'Alert Creation and Management',
          'SIEM Reporting and Compliance',
          'SIEM Performance Tuning'
        ]
      },
      {
        id: 6,
        title: 'Log Analysis and Monitoring',
        duration: '3 Weeks',
        topics: [
          'Understanding Security Logs',
          'Windows Event Logs Analysis',
          'Linux System Logs (Syslog)',
          'Web Server Logs (Apache, IIS, Nginx)',
          'Firewall and IDS/IPS Logs',
          'Application Logs Analysis',
          'Database Logs and Audit Trails',
          'Network Device Logs',
          'Log Parsing and Normalization',
          'Log Correlation Techniques',
          'Identifying Anomalies in Logs',
          'Baseline Creation and Deviation Detection'
        ]
      },
      {
        id: 7,
        title: 'Threat Detection and Analysis',
        duration: '3 Weeks',
        topics: [
          'Threat Detection Methodologies',
          'Signature-Based vs Anomaly-Based Detection',
          'Behavioral Analysis and User Analytics',
          'Threat Intelligence Fundamentals',
          'Threat Intelligence Platforms (TIPs)',
          'Open Source Intelligence (OSINT)',
          'Indicators of Compromise (IoCs)',
          'MITRE ATT&CK Framework',
          'Threat Hunting Concepts',
          'Proactive Threat Hunting Techniques',
          'Hunting for APTs',
          'Threat Actor Profiling',
          'False Positive Reduction',
          'Alert Triage and Prioritization'
        ]
      },
      {
        id: 8,
        title: 'Incident Response and Handling',
        duration: '3 Weeks',
        topics: [
          'Incident Response Lifecycle',
          'Preparation Phase Activities',
          'Incident Detection and Analysis',
          'Incident Classification and Severity',
          'Containment Strategies',
          'Eradication and Recovery Procedures',
          'Post-Incident Activities and Lessons Learned',
          'Incident Response Team Roles',
          'Incident Response Plans and Playbooks',
          'Chain of Custody and Evidence Handling',
          'Incident Documentation and Reporting',
          'Communication During Incidents',
          'Ransomware Incident Response',
          'Data Breach Response',
          'NIST Incident Response Framework'
        ]
      },
      {
        id: 9,
        title: 'Intrusion Detection and Prevention Systems',
        duration: '2 Weeks',
        topics: [
          'IDS vs IPS Technologies',
          'Network-Based IDS/IPS (NIDS/NIPS)',
          'Host-Based IDS/IPS (HIDS/HIPS)',
          'Snort IDS Installation and Configuration',
          'Snort Rules Writing',
          'Suricata IDS/IPS',
          'IDS/IPS Deployment Modes',
          'Signature Management and Updates',
          'Tuning IDS/IPS for False Positives',
          'IDS/IPS Alert Analysis',
          'Integration with SIEM'
        ]
      },
      {
        id: 10,
        title: 'Firewall and Network Security',
        duration: '2 Weeks',
        topics: [
          'Firewall Fundamentals and Types',
          'Packet Filtering Firewalls',
          'Stateful Inspection Firewalls',
          'Next-Generation Firewalls (NGFW)',
          'Firewall Rule Configuration',
          'DMZ Architecture and Design',
          'Network Access Control (NAC)',
          'VPN Technologies (IPSec, SSL VPN)',
          'Web Application Firewalls (WAF)',
          'Firewall Log Analysis',
          'Firewall Policy Management'
        ]
      },
      {
        id: 11,
        title: 'Vulnerability Management',
        duration: '2 Weeks',
        topics: [
          'Vulnerability Assessment vs Penetration Testing',
          'Vulnerability Management Lifecycle',
          'Vulnerability Scanning Tools',
          'Nessus Vulnerability Scanner',
          'OpenVAS Vulnerability Assessment',
          'Qualys Vulnerability Management',
          'Scan Configuration and Scheduling',
          'Vulnerability Identification and Classification',
          'CVSS Scoring System',
          'Vulnerability Prioritization',
          'Remediation Planning and Tracking',
          'Patch Management Integration',
          'Vulnerability Reporting'
        ]
      },
      {
        id: 12,
        title: 'Endpoint Security and EDR',
        duration: '2 Weeks',
        topics: [
          'Endpoint Security Fundamentals',
          'Antivirus and Anti-Malware Solutions',
          'Endpoint Detection and Response (EDR)',
          'Host-Based Security Controls',
          'Application Whitelisting and Blacklisting',
          'Device Control and Data Loss Prevention',
          'Mobile Device Security',
          'Endpoint Security Agents',
          'CrowdStrike Falcon Overview',
          'Carbon Black EDR',
          'Microsoft Defender for Endpoint',
          'Endpoint Threat Hunting',
          'Malware Analysis Basics'
        ]
      },
      {
        id: 13,
        title: 'Cloud Security Fundamentals',
        duration: '2 Weeks',
        topics: [
          'Cloud Computing Models (IaaS, PaaS, SaaS)',
          'Cloud Deployment Models',
          'Shared Responsibility Model',
          'AWS Security Fundamentals',
          'AWS Security Services (CloudTrail, GuardDuty)',
          'Azure Security Center',
          'Cloud Security Monitoring',
          'Cloud Access Security Brokers (CASB)',
          'Container Security Basics',
          'Kubernetes Security Overview',
          'Cloud Compliance and Governance',
          'Cloud Security Best Practices'
        ]
      },
      {
        id: 14,
        title: 'Security Frameworks and Compliance',
        duration: '2 Weeks',
        topics: [
          'NIST Cybersecurity Framework',
          'ISO 27001/27002 Standards',
          'CIS Critical Security Controls',
          'PCI DSS Compliance Requirements',
          'HIPAA Security Requirements',
          'GDPR Data Protection',
          'SOC 2 Compliance',
          'Regulatory Compliance Overview',
          'Security Policy Development',
          'Security Auditing and Assessment',
          'Compliance Reporting',
          'Risk Management Frameworks'
        ]
      },
      {
        id: 15,
        title: 'Security Tools and Technologies',
        duration: '3 Weeks',
        topics: [
          'Security Tool Ecosystem Overview',
          'Nmap for Network Discovery',
          'Metasploit Framework Basics',
          'Wireshark Packet Analysis Advanced',
          'Tcpdump and Command-Line Analysis',
          'Security Automation with Python',
          'PowerShell for Security Administrators',
          'OSINT Tools and Techniques',
          'VirusTotal and Malware Analysis Platforms',
          'Threat Intelligence Feeds Integration',
          'Security Orchestration (SOAR) Basics',
          'TheHive Incident Response Platform',
          'ELK Stack for Security Monitoring'
        ]
      },
      {
        id: 16,
        title: 'Email Security and Analysis',
        duration: '1 Week',
        topics: [
          'Email Security Threats',
          'Phishing Detection Techniques',
          'Email Header Analysis',
          'SPF, DKIM, and DMARC',
          'Email Gateway Security',
          'Malicious Attachment Analysis',
          'URL Analysis and Sandboxing',
          'Email Incident Response',
          'User Awareness Training'
        ]
      },
      {
        id: 17,
        title: 'Web Application Security for Analysts',
        duration: '2 Weeks',
        topics: [
          'Web Application Architecture',
          'OWASP Top 10 Overview',
          'Identifying Web Application Attacks',
          'SQL Injection Detection in Logs',
          'XSS Attack Detection',
          'Authentication Attack Patterns',
          'Web Application Firewall (WAF) Logs',
          'API Security Monitoring',
          'Web Security Scanning Tools',
          'Web Application Attack Response'
        ]
      },
      {
        id: 18,
        title: 'Security Reporting and Communication',
        duration: '2 Weeks',
        topics: [
          'Security Metrics and KPIs',
          'Creating Security Dashboards',
          'Incident Reports Writing',
          'Executive Summary Preparation',
          'Technical Report Documentation',
          'Security Awareness Reporting',
          'Trend Analysis and Reporting',
          'Compliance Reporting',
          'Stakeholder Communication',
          'Presenting Security Findings',
          'Report Automation',
          'Visualization Best Practices'
        ]
      },
      {
        id: 19,
        title: 'Security Operations Best Practices',
        duration: '2 Weeks',
        topics: [
          'SOC Structure and Organization',
          'Tiered SOC Model (Tier 1, 2, 3)',
          'Shift Handover Procedures',
          'Standard Operating Procedures (SOPs)',
          'Security Metrics and Measurement',
          'Continuous Improvement in SOC',
          'Threat Intelligence Integration',
          'Security Tool Integration',
          'Automation and Orchestration',
          'SOC Team Collaboration',
          'Documentation Best Practices',
          'Career Growth in SOC'
        ]
      },
      {
        id: 20,
        title: 'Practical Labs and Real-World Scenarios',
        duration: '4 Weeks',
        topics: [
          'Setting Up Home Security Lab',
          'Security Monitoring Lab Exercises',
          'SIEM Lab - Log Analysis Scenarios',
          'Incident Response Simulations',
          'Malware Analysis Sandbox Labs',
          'Network Traffic Analysis Lab',
          'Threat Hunting Exercises',
          'Blue Team vs Red Team Scenarios',
          'Capture The Flag (CTF) - Defense',
          'Real Security Incident Case Studies',
          'SOC Analyst Job Interview Preparation',
          'Resume Building for Security Analysts',
          'Final Capstone Project - SOC Simulation'
        ]
      }
    ]
  };

  const features = [
    {
      icon: GraduationCap,
      title: 'Expert SOC Trainers',
      description: 'Learn from security analysts with 15+ years SOC experience in leading organizations',
      color: 'orange'
    },
    {
      icon: Laptop,
      title: 'SIEM Hands-On Training',
      description: 'Master Splunk, QRadar, Microsoft Sentinel, and other leading SIEM platforms',
      color: 'orange'
    },
    {
      icon: Award,
      title: 'Industry Certifications',
      description: 'Preparation for CompTIA Security+, CySA+, and SOC Analyst certifications',
      color: 'orange'
    },
    {
      icon: Briefcase,
      title: '100% Placement Support',
      description: 'Job assistance with SOC teams, MNCs, consulting firms, and security companies',
      color: 'orange'
    },
    {
      icon: Zap,
      title: 'Flexible Learning',
      description: 'Weekday evening, weekend, and intensive fast-track batches available',
      color: 'orange'
    },
    {
      icon: Building,
      title: 'Real SOC Environment',
      description: 'Practice in simulated Security Operations Center with real-world scenarios',
      color: 'orange'
    }
  ];

  const proficiencies = [
    'Security Monitoring and Threat Detection using SIEM',
    'Incident Response and Security Incident Handling',
    'Log Analysis and Security Event Correlation',
    'Vulnerability Assessment and Management',
    'Network Security Monitoring and Analysis',
    'Endpoint Security and EDR Tools',
    'Threat Intelligence and Threat Hunting',
    'Security Reporting and Compliance Documentation'
  ];

  const eligibility = [
    { label: 'IT Professionals and System Administrators', eligible: true },
    { label: 'Network Engineers and Support Engineers', eligible: true },
    { label: 'Fresh IT Graduates (B.Tech, MCA, BSc IT)', eligible: true },
    { label: 'Security Enthusiasts and Career Changers', eligible: true },
    { label: 'Help Desk and Technical Support Staff', eligible: true },
    { label: 'QA Testers interested in Security', eligible: true },
    { label: 'Anyone interested in Cybersecurity Career', eligible: true },
    { label: 'Students pursuing Security Certifications', eligible: true },
    { label: 'Working Professionals seeking Career Switch', eligible: true }
  ];

  const whyLearn = [
    {
      title: 'Massive Job Demand',
      description: '3.5 million unfilled cybersecurity positions globally - security analysts are in highest demand'
    },
    {
      title: 'Excellent Salary Growth',
      description: 'Security analysts earn competitive salaries with rapid career progression opportunities'
    },
    {
      title: 'Recession-Proof Career',
      description: 'Cybersecurity roles are essential and continue growing regardless of economic conditions'
    },
    {
      title: 'Multiple Career Paths',
      description: 'Progress from analyst to senior analyst, incident responder, threat hunter, or SOC manager'
    },
    {
      title: 'Make Real Impact',
      description: 'Protect organizations and people from cyber criminals - your work truly matters'
    },
    {
      title: 'Continuous Learning',
      description: 'Always evolving field with new threats and technologies keeps work exciting and challenging'
    }
  ];

  const batches = [
    {
      id: 'CSA-2025-01',
      startDate: '25/01/2025',
      mode: 'Online',
      timing: 'Weekday Evening (Mon-Fri)',
      schedule: '7:00 PM - 9:00 PM',
      duration: '120-150 Hours',
      location: 'Online Live',
      seats: 'Available'
    },
    {
      id: 'CSA-2025-02',
      startDate: '01/02/2025',
      mode: 'Offline',
      timing: 'Weekend (Sat-Sun)',
      schedule: '10:00 AM - 6:00 PM',
      duration: '120-150 Hours',
      location: 'Dadar, Mumbai',
      seats: 'Filling Fast'
    },
    {
      id: 'CSA-2025-03',
      startDate: '08/02/2025',
      mode: 'Hybrid',
      timing: 'Fast Track (Mon-Fri)',
      schedule: '9:00 AM - 5:00 PM',
      duration: '120-150 Hours',
      location: 'Mumbai + Online',
      seats: 'Available'
    },
    {
      id: 'CSA-2025-04',
      startDate: '15/02/2025',
      mode: 'Online',
      timing: 'Weekend (Sat-Sun)',
      schedule: '11:00 AM - 7:00 PM',
      duration: '120-150 Hours',
      location: 'Online Live',
      seats: 'Available'
    }
  ];

  const reviews = [
    {
      name: 'Rajesh Kumar',
      designation: 'Security Analyst at Infosys',
      rating: 5,
      avatar: 'RK',
      review: 'SevenMentor\'s Cyber Security Analyst program changed my life! I was working in IT support and wanted to move into security. The SIEM training with Splunk was exceptional. The instructors are actual SOC analysts who shared real incident scenarios. Within 1 month of completing the course, I got placed as a Security Analyst at Infosys with 70% salary increase. Best decision ever!'
    },
    {
      name: 'Pooja Patel',
      designation: 'SOC Analyst L2 at TCS',
      rating: 5,
      avatar: 'PP',
      review: 'Outstanding training! The course covers everything a security analyst needs - from basic networking to advanced threat hunting. The incident response simulations were incredibly realistic. I loved the hands-on labs with SIEM tools and log analysis. The trainers were always available for doubt clearing. Got my dream SOC job at TCS within 3 weeks. Thank you SevenMentor!'
    },
    {
      name: 'Vikram Singh',
      designation: 'Cyber Security Analyst at Wipro',
      rating: 5,
      avatar: 'VS',
      review: 'Being a fresher, I was worried about breaking into cybersecurity. SevenMentor made it possible! The course structure is perfect - starting from fundamentals and gradually moving to advanced topics. The practical labs and real-world scenarios gave me confidence. The placement team helped me prepare for interviews. Now working as a security analyst at Wipro. Highly recommended!'
    },
    {
      name: 'Sneha Deshmukh',
      designation: 'Security Operations Analyst at Cyberfort',
      rating: 5,
      avatar: 'SD',
      review: 'Best security training in Mumbai! I completed the weekend batch while working full-time. The flexibility was great. The content is comprehensive covering SIEM, incident response, threat intelligence, and so much more. The instructors are experienced and knowledgeable. The mock interview sessions prepared me well. Secured a security analyst position with 50% hike. Worth every penny!'
    }
  ];

  const faqs = [
    {
      id: 1,
      question: 'What is a Cyber Security Analyst?',
      answer: 'A Cyber Security Analyst is a professional who protects organizations from cyber threats by monitoring security systems, analyzing security alerts, investigating incidents, and implementing security measures. They work in Security Operations Centers (SOCs) using tools like SIEM platforms to detect, analyze, and respond to security threats in real-time. Security Analysts are the first line of defense against cyber attacks, ensuring networks and systems remain secure.'
    },
    {
      id: 2,
      question: 'What are the prerequisites for this course?',
      answer: 'Basic computer knowledge and familiarity with Windows/Linux operating systems is helpful. Understanding of networking concepts is beneficial but not mandatory. The course starts with fundamentals and gradually progresses to advanced topics. Any IT professional, graduate, or career changer with passion for cybersecurity can successfully complete this program. No prior security experience is required - we teach everything from scratch.'
    },
    {
      id: 3,
      question: 'What is the course duration and structure?',
      answer: 'The complete Cyber Security Analyst program is 120-150 hours covering all 20 modules comprehensively. This includes theoretical concepts, extensive hands-on labs with security tools, SIEM training, incident response simulations, and real-world scenarios. Duration varies by batch type: weekday evening (5-6 months), weekend (6-7 months), or intensive fast-track (3-4 months).'
    },
    {
      id: 4,
      question: 'Which security tools will I learn?',
      answer: 'You will gain hands-on expertise in industry-standard tools including Splunk (SIEM), IBM QRadar, Microsoft Sentinel, Snort/Suricata (IDS/IPS), Wireshark (packet analysis), Nmap (network scanning), Nessus (vulnerability scanning), Metasploit basics, ELK Stack, various EDR solutions, threat intelligence platforms, and security automation tools. We focus on practical skills with tools used in real SOCs.'
    },
    {
      id: 5,
      question: 'Will I get hands-on SIEM training?',
      answer: 'Absolutely! SIEM training is a core component of the program. You will get extensive hands-on training with Splunk including SPL (Search Processing Language), dashboard creation, alert configuration, and use case development. We also cover IBM QRadar and Microsoft Sentinel. You will work with real log data, create correlation rules, build security dashboards, and practice log analysis just like professional SOC analysts do daily.'
    },
    {
      id: 6,
      question: 'Do you teach incident response?',
      answer: 'Yes! Incident response is thoroughly covered with 3 weeks of dedicated training. You will learn the complete incident response lifecycle, incident detection and analysis, containment strategies, eradication procedures, recovery processes, and post-incident activities. We conduct realistic incident simulations covering ransomware attacks, data breaches, malware infections, and APT scenarios. You will practice incident response following industry frameworks like NIST.'
    },
    {
      id: 7,
      question: 'What job roles can I apply for after this course?',
      answer: 'After completing this program, you can pursue roles like Cyber Security Analyst, Security Operations Center (SOC) Analyst (L1/L2), Security Monitoring Analyst, Incident Response Analyst, Threat Detection Analyst, Security Engineer, Vulnerability Analyst, Information Security Analyst, and Security Specialist. Starting salaries range from 4-7 LPA for freshers and 7-15 LPA for experienced professionals, with higher packages for specialized roles.'
    },
    {
      id: 8,
      question: 'Is this course suitable for freshers?',
      answer: 'Yes, absolutely! The course is designed to accommodate both freshers and experienced IT professionals. We start with fundamentals including networking basics, operating systems, and security concepts before moving to advanced topics. Many of our successful students were fresh graduates who are now working as security analysts in leading companies. With dedication and consistent practice, freshers can build a strong foundation and launch their cybersecurity career.'
    },
    {
      id: 9,
      question: 'Will this course prepare me for certifications?',
      answer: 'Yes! The curriculum aligns with leading security certifications including CompTIA Security+, CompTIA CySA+ (Cybersecurity Analyst), and vendor-specific certifications like Splunk Core Certified User. While the course itself is focused on practical skills and job readiness, you will gain the knowledge needed to pursue these certifications. Many students take certification exams after completing our training with high success rates.'
    },
    {
      id: 10,
      question: 'What makes SOC Analyst different from Penetration Tester?',
      answer: 'SOC Analysts focus on defense - monitoring systems, detecting threats, and responding to incidents to protect organizations. Penetration Testers focus on offense - actively trying to break into systems to find vulnerabilities. SOC Analysts work continuously in shifts monitoring security, while pentesters conduct periodic assessments. Both are important cybersecurity roles but have different skill sets. This course focuses on defensive security and SOC operations. If you enjoy monitoring, analysis, and incident response, SOC Analyst role is perfect for you.'
    },
    {
      id: 11,
      question: 'Do you provide placement assistance?',
      answer: 'Yes, SevenMentor provides 100% placement assistance. Our comprehensive placement support includes resume building highlighting security skills, profile creation on job portals, interview preparation with mock interviews, company-specific preparation, direct referrals to hiring managers at IT companies and consulting firms, and ongoing support until placement. Our placement team has strong connections with organizations actively hiring security analysts. We support you throughout your job search journey.'
    },
    {
      id: 12,
      question: 'Why choose SevenMentor for Security Analyst training?',
      answer: 'SevenMentor stands out with experienced trainers who are active SOC analysts (not just certified instructors), comprehensive hands-on labs with real security tools, extensive SIEM training with Splunk, IBM QRadar, and Microsoft Sentinel, realistic incident response simulations, threat hunting and log analysis practice, flexible batch timings for working professionals, strong placement support with proven track record of 2000+ successful placements, industry-relevant curriculum updated with latest threats and tools, and lifetime access to course materials and lab environments.'
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
        <h1>Cyber Security Analyst Program Training Course in Mumbai | SevenMentor</h1>
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
          href="https://api.whatsapp.com/send?phone=+918421176876&text=Hi+I+am+looking+for+Cyber+Security+Analyst+Course+in+Mumbai+course"
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
                <p className="text-orange-100 text-sm">Start your cyber security analyst career today</p>
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

        {/* Why Learn Security Analysis */}
        <section className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-white p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Why Become a Cyber Security Analyst?</h2>
                <p className="text-sm text-gray-600">Benefits of pursuing security analyst career</p>
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
                <h2 className="text-3xl font-bold text-gray-900">Security Analyst Course Syllabus</h2>
                <p className="text-sm text-gray-600">Complete 20 modules covering all security operations topics</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                <div className="text-sm text-orange-600 font-medium">Total Duration</div>
                <div className="text-2xl font-bold text-orange-700">120-150 Hours</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 px-6 py-3 rounded-xl">
                <div className="text-sm text-blue-600 font-medium">Modules</div>
                <div className="text-2xl font-bold text-blue-700">{syllabus.modules.length}</div>
              </div>
              <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                <div className="text-sm text-orange-600 font-medium">Skill Level</div>
                <div className="text-2xl font-bold text-orange-700">Beginner to Advanced</div>
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
                course='Cyber Security Analyst Program'
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

        

        {/* FAQ Section */}
        <section id="faq" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-pink-50 to-white p-6 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-500 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                <p className="text-sm text-gray-600">Everything you need to know about Security Analyst training</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Become a Security Analyst?</h2>
                <p className="text-xl text-gray-300 mb-8">Join 2000+ students trained by SevenMentor and start your cyber security career in SOC teams</p>

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
                      href="https://api.whatsapp.com/send?phone=+918421176876&text=Hi+I+am+looking+for+Cyber+Security+Analyst+Course+in+Mumbai+course"
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
          <p className="text-gray-400">© 2025 SevenMentor - Cyber Security Analyst Training Institute Mumbai. All rights reserved.</p>
          <p className="text-sm text-gray-500 mt-2">Security Analyst Training | SOC Training | SIEM Training | Incident Response | Mumbai | SevenMentor</p>
        </div>
      </footer>
    </div>
  );
}
