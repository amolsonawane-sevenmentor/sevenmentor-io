'use client';
import { useState } from 'react';
import {
    Code, Terminal, FileCode, Layers, Cpu, Box,
    Users, Clock, Award, Briefcase, Star, CheckCircle,
    ChevronDown, ChevronUp, BookOpen, Target, Database,
    Calendar, MapPin, Phone, Mail, Globe, Laptop,
    MessageCircle, FileCheck, ShieldCheck, Server, Zap, Package,
    TrendingUp
} from 'lucide-react';
import EnrollForm from "../../../components/EnrollForm/EnrollForm.jsx"

export default function PythonCoursePage() {
    const [expandedModule, setExpandedModule] = useState(null);
    const [expandedFaq, setExpandedFaq] = useState(null);

    // Course Hero Data
    const heroData = {
        title: 'Python Programming Course in Mumbai',
        subtitle: 'Master Python, Django, Flask & Full Stack Development',
        description: 'Become a certified Python Developer with hands-on training in Python programming, web development, automation, data structures, and real-world projects',
        badges: [
            { icon: Clock, label: '12 Weeks', color: 'bg-orange-500' },
            { icon: Users, label: '6000+ Students', color: 'bg-orange-600' },
            { icon: Award, label: 'Certified Program', color: 'bg-orange-700' },
            { icon: Briefcase, label: '100% Job Support', color: 'bg-orange-500' }
        ]
    };

    // Statistics
    const stats = [
        { value: '12 Weeks', label: 'Course Duration', icon: Clock, color: 'orange' },
        { value: '6000+', label: 'Students Trained', icon: Users, color: 'orange' },
        { value: '96%', label: 'Placement Rate', icon: TrendingUp, color: 'orange' },
        { value: '30+', label: 'Industry Projects', icon: Briefcase, color: 'orange' }
    ];

    // About Course
    const aboutCourse = {
        title: 'About Python Programming Course',
        description: 'Python is the world\'s most popular programming language, powering everything from web applications to artificial intelligence, data science to automation. Our comprehensive Python course in Mumbai takes you from basics to advanced concepts, covering web development with Django and Flask, automation, data structures, algorithms, and real-world project development.',
        highlights: [
            'Learn from Python experts with 12+ years of industry experience',
            'Hands-on training with 30+ real-world projects and assignments',
            'Master Core Python, Django, Flask, REST APIs, Database Integration',
            'Work on live projects from e-commerce, automation, and web apps',
            'Get certified in Python programming and web development',
            'Learn OOP, Data Structures, Algorithms, and Design Patterns'
        ],
        sections: [
            {
                heading: 'What is Python Programming?',
                content: 'Python is a high-level, interpreted, and general-purpose programming language known for its simplicity and readability. Created by Guido van Rossum in 1991, Python emphasizes code readability with its use of significant whitespace. It supports multiple programming paradigms including procedural, object-oriented, and functional programming. Python\'s extensive standard library and massive ecosystem of third-party packages make it ideal for web development, automation, data analysis, machine learning, and more.'
            },
            {
                heading: 'Why Choose Python as a Career?',
                content: 'Python developers are in huge demand across all industries. From startups to tech giants like Google, Netflix, Instagram, and Dropbox - everyone uses Python. Mumbai\'s booming IT sector has thousands of openings for Python developers. Average salaries range from ₹4-12 LPA for freshers and ₹15-40 LPA for experienced professionals. This course prepares you for roles like Python Developer, Django Developer, Backend Engineer, Automation Engineer, Full Stack Developer, and DevOps Engineer.'
            },
            {
                heading: 'Best Python Training in Mumbai',
                content: 'Our Python training institute in Mumbai offers practical, project-based curriculum designed by senior developers from top tech companies. Located in Andheri East with excellent connectivity from all Mumbai locations, we provide modern infrastructure with dedicated coding labs. Students work on real projects including e-commerce platforms, REST APIs, automation scripts, web scrapers, and full-stack applications, gaining hands-on experience with production-grade code.'
            }
        ]
    };

    // Syllabus
    const syllabus = {
        modules: [
            {
                id: 1,
                title: 'Introduction to Python Programming',
                duration: '1 Week',
                topics: [
                    'What is Python? History and Features of Python',
                    'Python Installation and Environment Setup',
                    'Python IDEs: PyCharm, VS Code, Jupyter Notebook',
                    'Your First Python Program - Hello World',
                    'Python Syntax, Indentation, and Comments',
                    'Variables, Data Types, and Type Conversion',
                    'Input and Output Operations'
                ]
            },
            {
                id: 2,
                title: 'Python Fundamentals & Operators',
                duration: '1 Week',
                topics: [
                    'Arithmetic, Comparison, and Logical Operators',
                    'Assignment and Bitwise Operators',
                    'Operator Precedence and Associativity',
                    'String Operations and String Methods',
                    'String Formatting: f-strings, format(), %',
                    'Python Keywords and Identifiers',
                    'Practice Exercises and Mini Projects'
                ]
            },
            {
                id: 3,
                title: 'Control Flow & Decision Making',
                duration: '1 Week',
                topics: [
                    'If, If-Else, and Nested If Statements',
                    'Elif (Else If) Ladder',
                    'Ternary Operator (Conditional Expressions)',
                    'For Loop: Range, Iteration, and Nested Loops',
                    'While Loop and Do-While Simulation',
                    'Break, Continue, and Pass Statements',
                    'Pattern Printing and Loop Exercises'
                ]
            },
            {
                id: 4,
                title: 'Data Structures in Python',
                duration: '2 Weeks',
                topics: [
                    'Lists: Creation, Indexing, Slicing, Methods',
                    'List Comprehensions and Nested Lists',
                    'Tuples: Immutability, Packing, and Unpacking',
                    'Dictionaries: Key-Value Pairs, Methods, Iteration',
                    'Sets: Operations, Methods, and Set Theory',
                    'Strings as Sequence Data Type',
                    'Choosing the Right Data Structure',
                    'Real-world Data Structure Problems'
                ]
            },
            {
                id: 5,
                title: 'Functions & Modules',
                duration: '1 Week',
                topics: [
                    'Defining Functions: def Keyword, Parameters',
                    'Function Arguments: Positional, Keyword, Default, Variable-length',
                    'Return Statement and Multiple Return Values',
                    'Lambda Functions (Anonymous Functions)',
                    'Map, Filter, and Reduce Functions',
                    'Recursion and Recursive Functions',
                    'Modules and Packages: Import, Creating Modules',
                    'Python Standard Library Overview'
                ]
            },
            {
                id: 6,
                title: 'Object-Oriented Programming (OOP)',
                duration: '2 Weeks',
                topics: [
                    'Introduction to OOP Concepts',
                    'Classes and Objects: Definition and Instantiation',
                    'Constructor: __init__ Method',
                    'Instance Variables vs Class Variables',
                    'Methods: Instance, Class, and Static Methods',
                    'Encapsulation: Public, Protected, Private',
                    'Inheritance: Single, Multiple, Multilevel, Hierarchical',
                    'Polymorphism: Method Overriding and Overloading',
                    'Abstraction: Abstract Classes and Interfaces',
                    'Magic Methods and Operator Overloading'
                ]
            },
            {
                id: 7,
                title: 'File Handling & Exception Handling',
                duration: '1 Week',
                topics: [
                    'File Operations: Open, Read, Write, Append',
                    'File Modes and File Methods',
                    'Working with CSV Files',
                    'JSON File Operations: Reading and Writing',
                    'Exception Handling: try, except, else, finally',
                    'Raising Exceptions and Custom Exceptions',
                    'Handling Multiple Exceptions',
                    'Context Managers and with Statement'
                ]
            },
            {
                id: 8,
                title: 'Advanced Python Concepts',
                duration: '1 Week',
                topics: [
                    'Decorators: Function and Class Decorators',
                    'Generators and Iterators',
                    'Regular Expressions (Regex) in Python',
                    'Date and Time Handling: datetime Module',
                    'Collections Module: Counter, defaultdict, namedtuple',
                    'Comprehensions: List, Dict, Set Comprehensions',
                    'Working with APIs and JSON Data'
                ]
            },
            {
                id: 9,
                title: 'Database Connectivity with Python',
                duration: '1 Week',
                topics: [
                    'Introduction to Databases and SQL',
                    'MySQL Database Setup and Configuration',
                    'Connecting Python with MySQL using mysql-connector',
                    'CRUD Operations: Create, Read, Update, Delete',
                    'Executing SQL Queries from Python',
                    'Working with SQLite Database',
                    'Introduction to PostgreSQL with Python',
                    'Database Project: Student Management System'
                ]
            },
            {
                id: 10,
                title: 'Web Development with Django',
                duration: '2 Weeks',
                topics: [
                    'Introduction to Django Framework',
                    'Django Installation and Project Setup',
                    'Django Architecture: MTV Pattern',
                    'URL Routing and Views',
                    'Django Templates and Template Language',
                    'Django Models and ORM (Object-Relational Mapping)',
                    'Django Admin Panel Customization',
                    'Forms and Form Validation',
                    'User Authentication and Authorization',
                    'Static Files and Media Files Handling',
                    'Building a Complete Web Application'
                ]
            },
            {
                id: 11,
                title: 'Flask Web Framework & REST APIs',
                duration: '1 Week',
                topics: [
                    'Introduction to Flask Micro-Framework',
                    'Flask Installation and Application Setup',
                    'Routes, Views, and Templates in Flask',
                    'Flask Forms with WTForms',
                    'Database Integration with Flask-SQLAlchemy',
                    'Building RESTful APIs with Flask',
                    'API Authentication: JWT, OAuth',
                    'Deploying Flask Applications'
                ]
            },
            {
                id: 12,
                title: 'Python Automation & Web Scraping',
                duration: '1 Week',
                topics: [
                    'Introduction to Automation with Python',
                    'Working with Excel Files: openpyxl, pandas',
                    'PDF Processing: PyPDF2, reportlab',
                    'Email Automation with smtplib',
                    'Web Scraping with BeautifulSoup',
                    'Selenium WebDriver for Browser Automation',
                    'Scrapy Framework for Advanced Scraping',
                    'Automation Project: Data Extraction and Reporting'
                ]
            }
        ]
    };

    // Key Features
    const features = [
        {
            icon: Code,
            title: 'Expert Training',
            description: 'Learn from Python developers with 12+ years at top tech companies',
            color: 'orange'
        },
        {
            icon: Laptop,
            title: 'Hands-on Labs',
            description: 'Dedicated coding labs with modern development tools and IDEs',
            color: 'orange'
        },
        {
            icon: Award,
            title: 'Certification',
            description: 'Industry-recognized Python programming certification',
            color: 'orange'
        },
        {
            icon: Briefcase,
            title: 'Job Assistance',
            description: '100% placement support with 350+ hiring partners in Mumbai',
            color: 'orange'
        },
        {
            icon: FileCode,
            title: 'Live Projects',
            description: '30+ real-world projects including web apps, APIs, automation',
            color: 'orange'
        },
        {
            icon: Users,
            title: 'Small Batches',
            description: 'Limited batch size for personalized coding practice',
            color: 'orange'
        }
    ];

    // Eligibility
    const eligibility = [
        { label: 'BE/B.Tech students (any branch)', eligible: true },
        { label: 'BCA/MCA/BSc IT students', eligible: true },
        { label: 'Any Graduate wanting to learn programming', eligible: true },
        { label: 'Working professionals upgrading skills', eligible: true },
        { label: 'Career switchers to software development', eligible: true },
        { label: 'Complete beginners with no coding experience', eligible: true }
    ];

    // Tools Covered
    const tools = [
        { name: 'Python 3.x', icon: Code },
        { name: 'Django', icon: Layers },
        { name: 'Flask', icon: Zap },
        { name: 'MySQL', icon: Database },
        { name: 'VS Code', icon: FileCode },
        { name: 'Git/GitHub', icon: Package },
        { name: 'Jupyter', icon: BookOpen },
        { name: 'PyCharm', icon: Terminal }
    ];

    // Batch Schedule
    const batches = [
        {
            id: 'PY-2025-01',
            startDate: '12/01/2025',
            mode: 'Online',
            timing: 'Weekday Evening (Mon-Fri)',
            schedule: '7:00 PM - 9:00 PM',
            location: 'Mumbai',
            seats: 'Available'
        },
        {
            id: 'PY-2025-02',
            startDate: '18/01/2025',
            mode: 'Offline',
            timing: 'Weekend (Sat-Sun)',
            schedule: '10:00 AM - 5:00 PM',
            location: 'Andheri East, Mumbai',
            seats: 'Filling Fast'
        },
        {
            id: 'PY-2025-03',
            startDate: '25/01/2025',
            mode: 'Hybrid',
            timing: 'Fast Track (Mon-Fri)',
            schedule: '9:00 AM - 4:00 PM',
            location: 'Mumbai',
            seats: 'Available'
        },
        {
            id: 'PY-2025-04',
            startDate: '02/02/2025',
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
            name: 'Rohit Gupta',
            designation: 'Python Developer at Infosys',
            rating: 5,
            avatar: 'RG',
            review: 'Excellent Python course! Started as a complete beginner and now I\'m a confident Python developer at Infosys. The instructors explained every concept with real examples. Highly recommended for beginners!'
        },
        {
            name: 'Sneha Patil',
            designation: 'Backend Engineer at Zomato',
            rating: 5,
            avatar: 'SP',
            review: 'Best Python training in Mumbai! The Django and Flask modules were outstanding. Got placed at Zomato with 10 LPA package. The hands-on projects really prepared me for industry challenges.'
        },
        {
            name: 'Karan Shah',
            designation: 'Full Stack Developer at Swiggy',
            rating: 5,
            avatar: 'KS',
            review: 'Amazing course structure! From Python basics to advanced web development - everything was covered systematically. The placement support team helped me crack multiple interviews. Thank you!'
        },
        {
            name: 'Anjali Desai',
            designation: 'Automation Engineer at TCS',
            rating: 5,
            avatar: 'AD',
            review: 'The automation and web scraping modules were game-changers for me. As a non-CS graduate, I was able to learn Python and get a job in automation. Great teaching methodology!'
        }
    ];

    // FAQs
    const faqs = [
        {
            id: 1,
            question: 'Do I need any programming experience to join this Python course?',
            answer: 'No prior programming experience is required! This course is designed for complete beginners. We start from the very basics and gradually move to advanced topics. Anyone with basic computer knowledge can join.'
        },
        {
            id: 2,
            question: 'What is the duration of the Python course?',
            answer: 'The complete Python course duration is 12 weeks (approximately 3 months). This includes core Python, OOP, Django, Flask, database connectivity, automation, and 30+ hands-on projects.'
        },
        {
            id: 3,
            question: 'Which Python version will be taught?',
            answer: 'We teach Python 3.x (latest stable version). Python 3 is the current and future of Python programming, with all major libraries and frameworks supporting it.'
        },
        {
            id: 4,
            question: 'Will I learn web development with Python?',
            answer: 'Yes! The course covers both Django and Flask frameworks for web development. You will build complete web applications including e-commerce sites, blogs, REST APIs, and full-stack projects.'
        },
        {
            id: 5,
            question: 'What is the fee structure for the Python course?',
            answer: 'Our course fee is very affordable with flexible payment options including 0% EMI. Contact our admissions team for detailed fee structure, early bird discounts, and student offers.'
        },
        {
            id: 6,
            question: 'Do you provide job placement assistance?',
            answer: 'Yes! We provide 100% job placement assistance including resume building, GitHub portfolio creation, mock interviews, coding challenges, and direct referrals to 350+ companies across Mumbai including TCS, Infosys, Wipro, and startups.'
        },
        {
            id: 7,
            question: 'What job roles can I apply for after learning Python?',
            answer: 'After completing this course, you can apply for Python Developer, Django Developer, Backend Developer, Full Stack Developer, Automation Engineer, Data Analyst, Web Developer, and DevOps Engineer roles.'
        },
        {
            id: 8,
            question: 'Is the course suitable for working professionals?',
            answer: 'Absolutely! We offer flexible timings including weekday evenings (7-9 PM) and weekend batches designed for working professionals. Online and hybrid learning modes ensure you can balance work and learning.'
        },
        {
            id: 9,
            question: 'Will I get hands-on project experience?',
            answer: 'Yes! You will work on 30+ projects including e-commerce website, student management system, REST APIs, web scraping tools, automation scripts, blog application, and many more real-world applications.'
        },
        {
            id: 10,
            question: 'What tools and technologies will I learn?',
            answer: 'You will master Python 3.x, Django, Flask, MySQL, PostgreSQL, SQLite, VS Code, PyCharm, Jupyter Notebook, Git/GitHub, REST APIs, HTML/CSS basics, and various Python libraries for automation and web development.'
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
                <h1>Python Programming Course in Mumbai - Best Python Training Institute</h1>
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
                    href="https://api.whatsapp.com/send?phone=+918421176876&text=Hi+I+am+looking+for+Python+Programming+Course+in+Mumbai"
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
                                <div className="text-2xl font-bold text-orange-700">12 Weeks</div>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                                <div className="text-sm text-orange-600 font-medium">Modules</div>
                                <div className="text-2xl font-bold text-orange-700">{syllabus.modules.length}</div>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                                <div className="text-sm text-orange-600 font-medium">Projects</div>
                                <div className="text-2xl font-bold text-orange-700">30+</div>
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
                    course='Python Programming'
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
                                <p className="text-sm text-gray-600">Master industry-standard Python tools</p>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Python Programming Journey?</h2>
                        <p className="text-xl text-orange-200 mb-8">Join 6000+ students and become a certified Python Developer</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <a href="tel:022-48904395" className="flex items-center justify-center gap-2 bg-white text-orange-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300">
                                <Phone className="w-5 h-5" />
                                022-48904395
                            </a>
                            <a href="mailto:info@python-mumbai.com" className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300">
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
                    <p className="text-gray-400">© 2025 Python Training Institute Mumbai. All rights reserved.</p>
                    <p className="text-sm text-gray-500 mt-2">Best Python Course | Django Training | Flask Certification | Mumbai</p>
                </div>
            </footer>
        </div>
    );
}
