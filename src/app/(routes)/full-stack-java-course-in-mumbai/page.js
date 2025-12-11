'use client';
import { useState } from 'react';
import {
    Code, Server, Database, Layout, Boxes, Globe,
    Users, Clock, Award, Briefcase, Star, CheckCircle,
    ChevronDown, ChevronUp, BookOpen, Target, Layers,
    Calendar, MapPin, Phone, Mail, Laptop, Zap,
    MessageCircle, FileCheck, ShieldCheck, GitBranch, Package, Cloud,
    TrendingUp
} from 'lucide-react';
import EnrollForm from "../../../components/EnrollForm/EnrollForm.jsx"

export default function FullStackJavaCoursePage() {
    const [expandedModule, setExpandedModule] = useState(null);
    const [expandedFaq, setExpandedFaq] = useState(null);

    // Course Hero Data
    const heroData = {
        title: 'Full Stack Java Developer Course in Mumbai',
        subtitle: 'Master Java, Spring Boot, React, Microservices & DevOps',
        description: 'Become a certified Full Stack Java Developer with comprehensive training in Core Java, Advanced Java, Spring Framework, React.js, Microservices, and cloud deployment',
        badges: [
            { icon: Clock, label: '24 Weeks', color: 'bg-orange-500' },
            { icon: Users, label: '5500+ Students', color: 'bg-orange-600' },
            { icon: Award, label: 'Certified Program', color: 'bg-orange-700' },
            { icon: Briefcase, label: '100% Job Support', color: 'bg-orange-500' }
        ]
    };

    // Statistics
    const stats = [
        { value: '24 Weeks', label: 'Course Duration', icon: Clock, color: 'orange' },
        { value: '5500+', label: 'Students Trained', icon: Users, color: 'orange' },
        { value: '98%', label: 'Placement Rate', icon: TrendingUp, color: 'orange' },
        { value: '35+', label: 'Industry Projects', icon: Briefcase, color: 'orange' }
    ];

    // About Course
    const aboutCourse = {
        title: 'About Full Stack Java Developer Course',
        description: 'Full Stack Java Development is one of the most sought-after skills in the IT industry. Our comprehensive Full Stack Java course in Mumbai covers the complete technology stack - from Core Java fundamentals to advanced backend development with Spring Boot, frontend development with React.js, microservices architecture, database management, RESTful APIs, and cloud deployment. This course transforms you into an industry-ready full stack developer.',
        highlights: [
            'Learn from Java experts with 12+ years at top tech companies',
            'Master Core Java, Spring Boot, Hibernate, React.js, Microservices',
            'Hands-on training with 35+ real-world full stack projects',
            'Work on e-commerce, banking, and enterprise applications',
            'Get certified in Java SE, Spring Framework, and React',
            'Learn DevOps: Docker, Kubernetes, Jenkins, AWS deployment'
        ],
        sections: [
            {
                heading: 'What is Full Stack Java Development?',
                content: 'Full Stack Java Development involves building complete web applications using Java technologies for backend and modern JavaScript frameworks for frontend. Backend development includes Java, Spring Boot, Spring MVC, Hibernate ORM, RESTful APIs, and database management. Frontend development covers HTML5, CSS3, JavaScript ES6+, React.js, and Redux. Full stack developers also work with microservices architecture, cloud platforms, version control (Git), and DevOps tools for complete application lifecycle management.'
            },
            {
                heading: 'Why Choose Full Stack Java as a Career?',
                content: 'Java remains the #1 enterprise programming language with massive demand in Mumbai\'s IT sector. Full Stack Java Developers are highly valued because they can handle both frontend and backend, reducing dependency on multiple specialists. Companies like TCS, Infosys, Wipro, Accenture, Capgemini, and startups actively hire full stack Java developers. Average salaries range from ₹5-14 LPA for freshers and ₹18-50 LPA for experienced professionals in roles like Full Stack Developer, Java Developer, Backend Engineer, and Solution Architect.'
            },
            {
                heading: 'Best Full Stack Java Training in Mumbai',
                content: 'Our Full Stack Java training institute in Mumbai offers industry-aligned curriculum designed by senior developers from product companies. Located in Andheri East with excellent transport connectivity, we provide modern coding labs with IntelliJ IDEA, VS Code, MySQL, MongoDB, and cloud access. Students build complete applications from scratch - from database design to deployment - gaining practical experience that matches real-world development environments in Mumbai\'s top IT companies.'
            }
        ]
    };

    // Syllabus
    const syllabus = {
        modules: [
            {
                id: 1,
                title: 'Core Java Fundamentals',
                duration: '4 Weeks',
                topics: [
                    'Introduction to Java: History, Features, JDK Installation',
                    'Java Basics: Variables, Data Types, Operators',
                    'Control Flow: If-Else, Switch, Loops (For, While, Do-While)',
                    'Arrays: Single and Multi-dimensional Arrays',
                    'Object-Oriented Programming: Classes, Objects, Constructors',
                    'OOP Principles: Encapsulation, Inheritance, Polymorphism, Abstraction',
                    'Interfaces and Abstract Classes',
                    'Packages and Access Modifiers',
                    'Exception Handling: try, catch, finally, throw, throws',
                    'String Handling and StringBuilder',
                    'Collections Framework: List, Set, Map, Queue',
                    'Generics and Lambda Expressions',
                    'File I/O Operations',
                    'Multithreading and Concurrency'
                ]
            },
            {
                id: 2,
                title: 'Advanced Java & JDBC',
                duration: '2 Weeks',
                topics: [
                    'JDBC (Java Database Connectivity) Architecture',
                    'Connecting Java with MySQL/PostgreSQL',
                    'CRUD Operations using JDBC',
                    'Prepared Statements and Callable Statements',
                    'Transaction Management in JDBC',
                    'Connection Pooling',
                    'DAO (Data Access Object) Pattern',
                    'Java Servlets: Request, Response, Session',
                    'JSP (JavaServer Pages) Basics',
                    'MVC Architecture Pattern',
                    'Building Web Applications with Servlets and JSP'
                ]
            },
            {
                id: 3,
                title: 'Spring Framework & Spring Boot',
                duration: '4 Weeks',
                topics: [
                    'Introduction to Spring Framework: IoC and DI',
                    'Spring Core: Beans, ApplicationContext, BeanFactory',
                    'Dependency Injection: Constructor and Setter Injection',
                    'Spring Annotations: @Component, @Autowired, @Configuration',
                    'Introduction to Spring Boot: Auto-configuration',
                    'Creating Spring Boot Applications with Spring Initializr',
                    'Spring Boot Project Structure and Best Practices',
                    'Spring MVC: Controllers, RequestMapping, ModelAndView',
                    'RESTful Web Services with Spring Boot',
                    'HTTP Methods: GET, POST, PUT, DELETE, PATCH',
                    'Request and Response Body Handling',
                    '@RestController, @RequestBody, @PathVariable, @RequestParam',
                    'Exception Handling in Spring Boot: @ExceptionHandler',
                    'Validation with Bean Validation API',
                    'Spring Boot Configuration: application.properties, YAML'
                ]
            },
            {
                id: 4,
                title: 'Hibernate & Spring Data JPA',
                duration: '2 Weeks',
                topics: [
                    'Introduction to ORM (Object-Relational Mapping)',
                    'Hibernate Architecture and Configuration',
                    'Entity Classes and Annotations: @Entity, @Table, @Id',
                    'Hibernate Mapping: One-to-One, One-to-Many, Many-to-Many',
                    'CRUD Operations with Hibernate',
                    'HQL (Hibernate Query Language)',
                    'Criteria API for Dynamic Queries',
                    'Introduction to Spring Data JPA',
                    'JPA Repositories: CrudRepository, JpaRepository',
                    'Custom Query Methods and @Query Annotation',
                    'Pagination and Sorting with Spring Data JPA',
                    'Transaction Management with @Transactional'
                ]
            },
            {
                id: 5,
                title: 'Frontend Development - HTML, CSS, JavaScript',
                duration: '2 Weeks',
                topics: [
                    'HTML5: Semantic Tags, Forms, Multimedia',
                    'CSS3: Selectors, Box Model, Flexbox, Grid',
                    'Responsive Web Design with Media Queries',
                    'CSS Frameworks: Bootstrap 5',
                    'JavaScript ES6+: Variables (let, const), Arrow Functions',
                    'DOM Manipulation: Selecting, Modifying Elements',
                    'Event Handling in JavaScript',
                    'Asynchronous JavaScript: Callbacks, Promises, Async/Await',
                    'Fetch API for HTTP Requests',
                    'JSON: Parsing and Stringifying',
                    'Local Storage and Session Storage'
                ]
            },
            {
                id: 6,
                title: 'React.js for Frontend',
                duration: '4 Weeks',
                topics: [
                    'Introduction to React.js: Components, JSX',
                    'React Environment Setup: Node.js, npm, create-react-app',
                    'Functional Components and Class Components',
                    'Props: Passing Data between Components',
                    'State Management with useState Hook',
                    'Event Handling in React',
                    'Conditional Rendering',
                    'Lists and Keys in React',
                    'Forms and Controlled Components',
                    'React Hooks: useEffect, useContext, useReducer',
                    'React Router: Navigation and Routing',
                    'API Integration with Axios',
                    'Redux: State Management Library',
                    'Redux Toolkit for Modern Redux',
                    'Connecting React with Spring Boot REST APIs',
                    'Building Complete Frontend for E-commerce/Banking App'
                ]
            },
            {
                id: 7,
                title: 'Microservices Architecture',
                duration: '3 Weeks',
                topics: [
                    'Introduction to Microservices: Monolith vs Microservices',
                    'Microservices Design Patterns',
                    'Building Microservices with Spring Boot',
                    'Service Discovery with Eureka Server',
                    'API Gateway with Spring Cloud Gateway',
                    'Load Balancing with Netflix Ribbon',
                    'Circuit Breaker Pattern with Resilience4j',
                    'Distributed Configuration with Spring Cloud Config',
                    'Inter-Service Communication: REST and Feign Client',
                    'Event-Driven Architecture with Kafka',
                    'Microservices Security with JWT',
                    'Containerization with Docker',
                    'Orchestration with Kubernetes Basics',
                    'Building Complete Microservices Project'
                ]
            },
            {
                id: 8,
                title: 'Database Management',
                duration: '1 Week',
                topics: [
                    'Relational Databases: MySQL/PostgreSQL',
                    'Database Design and Normalization',
                    'SQL Queries: Joins, Subqueries, Aggregate Functions',
                    'Indexes and Performance Optimization',
                    'NoSQL Databases: MongoDB Basics',
                    'MongoDB CRUD Operations',
                    'Connecting Spring Boot with MongoDB',
                    'When to use SQL vs NoSQL',
                    'Database Migration with Flyway/Liquibase'
                ]
            },
            {
                id: 9,
                title: 'DevOps & Cloud Deployment',
                duration: '2 Weeks',
                topics: [
                    'Version Control with Git and GitHub',
                    'Git Commands: clone, commit, push, pull, merge',
                    'Branching Strategies and Pull Requests',
                    'Introduction to DevOps and CI/CD',
                    'Continuous Integration with Jenkins',
                    'Building and Testing with Maven/Gradle',
                    'Docker: Containerization Fundamentals',
                    'Creating Docker Images and Containers',
                    'Docker Compose for Multi-container Applications',
                    'Introduction to Kubernetes',
                    'AWS Cloud Basics: EC2, S3, RDS',
                    'Deploying Spring Boot Applications on AWS',
                    'Application Monitoring and Logging',
                    'Best Practices for Production Deployment'
                ]
            },
            {
                id: 10,
                title: 'Capstone Project - Full Stack Application',
                duration: '2 Weeks',
                topics: [
                    'Project Planning and Requirement Analysis',
                    'Database Design and Schema Creation',
                    'Backend Development with Spring Boot and Microservices',
                    'RESTful API Development and Documentation',
                    'Frontend Development with React.js',
                    'Authentication and Authorization (JWT)',
                    'Payment Gateway Integration',
                    'Email Notifications',
                    'File Upload and Management',
                    'Testing: Unit Tests (JUnit), Integration Tests',
                    'Docker Containerization',
                    'Deployment on Cloud Platform',
                    'Project Options: E-commerce Platform, Banking System, Healthcare Portal',
                    'Final Presentation and Code Review'
                ]
            }
        ]
    };

    // Key Features
    const features = [
        {
            icon: Code,
            title: 'Expert Training',
            description: 'Learn from Java architects with 12+ years at top product companies',
            color: 'orange'
        },
        {
            icon: Laptop,
            title: 'Modern Labs',
            description: 'Dedicated coding labs with IntelliJ IDEA, VS Code, Docker',
            color: 'orange'
        },
        {
            icon: Award,
            title: 'Certification',
            description: 'Java SE, Spring Framework, and React certification preparation',
            color: 'orange'
        },
        {
            icon: Briefcase,
            title: 'Job Assistance',
            description: '100% placement support with 400+ hiring partners in Mumbai',
            color: 'orange'
        },
        {
            icon: Layers,
            title: 'Live Projects',
            description: '35+ full stack projects including e-commerce, banking apps',
            color: 'orange'
        },
        {
            icon: Users,
            title: 'Small Batches',
            description: 'Limited batch size for personalized coding mentorship',
            color: 'orange'
        }
    ];

    // Eligibility
    const eligibility = [
        { label: 'BE/B.Tech/BCA/MCA students and graduates', eligible: true },
        { label: 'BSc IT/Computer Science students', eligible: true },
        { label: 'Working professionals upgrading to Java', eligible: true },
        { label: 'Backend developers learning frontend', eligible: true },
        { label: 'Frontend developers learning backend', eligible: true },
        { label: 'Career switchers with basic programming knowledge', eligible: true }
    ];

    // Tools Covered
    const tools = [
        { name: 'Java 17', icon: Code },
        { name: 'Spring Boot', icon: Zap },
        { name: 'React.js', icon: Layout },
        { name: 'MySQL', icon: Database },
        { name: 'MongoDB', icon: Server },
        { name: 'Docker', icon: Boxes },
        { name: 'Git/GitHub', icon: GitBranch },
        { name: 'AWS Cloud', icon: Cloud }
    ];

    // Batch Schedule
    const batches = [
        {
            id: 'FSJ-2025-01',
            startDate: '14/01/2025',
            mode: 'Online',
            timing: 'Weekday Evening (Mon-Fri)',
            schedule: '7:00 PM - 9:30 PM',
            location: 'Mumbai',
            seats: 'Available'
        },
        {
            id: 'FSJ-2025-02',
            startDate: '20/01/2025',
            mode: 'Offline',
            timing: 'Weekend (Sat-Sun)',
            schedule: '10:00 AM - 5:00 PM',
            location: 'Andheri East, Mumbai',
            seats: 'Filling Fast'
        },
        {
            id: 'FSJ-2025-03',
            startDate: '27/01/2025',
            mode: 'Hybrid',
            timing: 'Fast Track (Mon-Fri)',
            schedule: '9:00 AM - 5:00 PM',
            location: 'Mumbai',
            seats: 'Available'
        },
        {
            id: 'FSJ-2025-04',
            startDate: '04/02/2025',
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
            name: 'Aditya Singh',
            designation: 'Full Stack Developer at TCS Digital',
            rating: 5,
            avatar: 'AS',
            review: 'Excellent Full Stack Java course! Started from Core Java basics and built complete e-commerce application by the end. Got placed at TCS Digital with 11 LPA package. The Spring Boot and React modules were outstanding!'
        },
        {
            name: 'Pooja Sharma',
            designation: 'Java Developer at Infosys',
            rating: 5,
            avatar: 'PS',
            review: 'Best Full Stack training in Mumbai! The instructors explained complex concepts like microservices and Spring Security very clearly. The capstone project gave me real-world experience. Highly recommended!'
        },
        {
            name: 'Rohan Patil',
            designation: 'Backend Engineer at Wipro',
            rating: 5,
            avatar: 'RP',
            review: 'Amazing curriculum covering everything from Java basics to cloud deployment. The hands-on approach with 35+ projects made learning practical. Got multiple job offers within 3 weeks of course completion!'
        },
        {
            name: 'Sneha Kulkarni',
            designation: 'Software Engineer at Accenture',
            rating: 5,
            avatar: 'SK',
            review: 'From zero coding experience to full stack developer! The course structure is perfect for beginners. Learned Java, Spring Boot, React, and DevOps. The placement support team is phenomenal. Thank you!'
        }
    ];

    // FAQs
    const faqs = [
        {
            id: 1,
            question: 'Do I need prior programming experience for this Full Stack Java course?',
            answer: 'Basic programming knowledge is helpful but not mandatory. We start from Java fundamentals and gradually progress to advanced topics. If you have basic understanding of any programming language or strong logical thinking, you can join this course.'
        },
        {
            id: 2,
            question: 'What is the duration of the Full Stack Java course?',
            answer: 'The complete course duration is 24 weeks (approximately 6 months). This includes Core Java, Advanced Java, Spring Boot, Hibernate, React.js, Microservices, DevOps, and 35+ hands-on projects with capstone project.'
        },
        {
            id: 3,
            question: 'Why should I learn Java for Full Stack Development?',
            answer: 'Java is the #1 enterprise programming language with maximum job opportunities globally. Spring Boot is the most popular backend framework. Java + React combination is highly demanded by companies like TCS, Infosys, Wipro, banks, and startups. Java developers get premium salaries compared to other technologies.'
        },
        {
            id: 4,
            question: 'Will I learn both frontend and backend in this course?',
            answer: 'Yes! This is a complete Full Stack course. Backend covers Java, Spring Boot, Hibernate, REST APIs, Microservices. Frontend covers HTML, CSS, JavaScript, React.js, Redux. You will also learn databases (MySQL, MongoDB), Git, Docker, and AWS deployment.'
        },
        {
            id: 5,
            question: 'What is the fee structure for the Full Stack Java course?',
            answer: 'Our course fee is competitive with flexible payment options including 0% EMI plans. Contact our admissions team for detailed fee structure, early enrollment discounts, and scholarship opportunities for students.'
        },
        {
            id: 6,
            question: 'Do you provide job placement assistance?',
            answer: 'Yes! We provide 100% job placement assistance including resume building, GitHub portfolio creation, mock interviews, DSA preparation, system design guidance, and direct referrals to 400+ companies including TCS, Infosys, Wipro, Accenture, Capgemini, and startups across Mumbai and pan-India.'
        },
        {
            id: 7,
            question: 'What job roles can I apply for after this course?',
            answer: 'After completing this course, you can apply for Full Stack Java Developer, Java Developer, Backend Developer, Spring Boot Developer, Software Engineer, Microservices Developer, and Application Developer roles with salaries ranging from ₹5-14 LPA for freshers.'
        },
        {
            id: 8,
            question: 'Is the course suitable for working professionals?',
            answer: 'Absolutely! We offer flexible timings including weekday evenings (7-9:30 PM) and weekend batches (Sat-Sun) designed for working professionals. Online and hybrid modes ensure you can upskill without career breaks.'
        },
        {
            id: 9,
            question: 'Will I build real-world projects?',
            answer: 'Yes! You will build 35+ projects including e-commerce platform, banking system, blog application, social media app, REST APIs, microservices architecture, and a comprehensive capstone project. All projects use industry-standard tools and best practices.'
        },
        {
            id: 10,
            question: 'Which Java version will be taught?',
            answer: 'We teach Java 17 (LTS - Long Term Support), which is the latest enterprise-standard version. The concepts apply to Java 11, 8, and later versions. We also cover important features introduced in Java 8+ like Lambda, Stream API, and Functional Programming.'
        },
        {
            id: 11,
            question: 'Do you teach Microservices architecture?',
            answer: 'Yes! Microservices is a crucial module covering Spring Cloud, Eureka, API Gateway, Circuit Breaker, Kafka, Docker, and Kubernetes. You will build a complete microservices-based application from scratch with service discovery and inter-service communication.'
        },
        {
            id: 12,
            question: 'What is the difference between Full Stack Java and MERN Stack?',
            answer: 'Full Stack Java uses Java/Spring Boot for backend (enterprise-grade, highly scalable) while MERN uses Node.js. Java is preferred by large enterprises, banks, and service companies with typically higher packages. MERN is popular in startups. Java has more job opportunities in Mumbai\'s IT sector.'
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
                <h1>Full Stack Java Developer Course in Mumbai - Best Java Training Institute</h1>
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
                    href="https://api.whatsapp.com/send?phone=+918421176876&text=Hi+I+am+looking+for+Full+Stack+Java+Course+in+Mumbai"
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
                            <Code className="w-5 h-5 text-orange-300" />
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
                                <div className="text-2xl font-bold text-orange-700">35+</div>
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
                    mailTo="vivekmandiya178@gmail.com"
                    course='Full Stack Java Developer'
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
                                <Package className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Tools & Technologies</h2>
                                <p className="text-sm text-gray-600">Master industry-standard Java tools</p>
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
                                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                                    batch.mode === 'Online' ? 'bg-orange-100 text-orange-700' :
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
                                            <td className="p-4">
                                                <button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
                                                    Enroll Now
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Reviews Section */}
                <section className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-xl flex items-center justify-center">
                                <Star className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Student Success Stories</h2>
                                <p className="text-sm text-gray-600">Hear from our successful alumni</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <div className="grid md:grid-cols-2 gap-6">
                            {reviews.map((review, idx) => (
                                <div key={idx} className="p-6 bg-orange-50 border border-orange-200 rounded-xl hover:shadow-lg transition-all duration-300">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                            {review.avatar}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900">{review.name}</h4>
                                            <p className="text-sm text-gray-600">{review.designation}</p>
                                            <div className="flex gap-1 mt-1">
                                                {renderStars(review.rating)}
                                            </div>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Full Stack Java Journey?</h2>
                        <p className="text-xl text-orange-200 mb-8">Join 5500+ students and become a certified Full Stack Java Developer</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <a href="tel:022-48904395" className="flex items-center justify-center gap-2 bg-white text-orange-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300">
                                <Phone className="w-5 h-5" />
                                022-48904395
                            </a>
                            <a href="mailto:info@fullstackjava-mumbai.com" className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300">
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
                    <p className="text-gray-400">© 2025 Full Stack Java Training Institute Mumbai. All rights reserved.</p>
                    <p className="text-sm text-gray-500 mt-2">Best Java Course | Spring Boot Training | React Certification | Microservices | Mumbai</p>
                </div>
            </footer>
        </div>
    );
}
