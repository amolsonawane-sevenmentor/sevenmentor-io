'use client';
import { useState } from 'react';
import {
    Code, Database, Table, BarChart3, TrendingUp, Zap,
    Users, Clock, Award, Briefcase, Star, CheckCircle,
    ChevronDown, ChevronUp, BookOpen, Target, LineChart,
    Calendar, MapPin, Phone, Mail, Globe, Laptop,
    MessageCircle, FileCheck, ShieldCheck, Server, Layers, FileSpreadsheet
} from 'lucide-react';
import EnrollForm from "../../../components/EnrollForm/EnrollForm.jsx"

export default function FullStackDataAnalystCoursePage() {
    const [expandedModule, setExpandedModule] = useState(null);
    const [expandedFaq, setExpandedFaq] = useState(null);

    // Course Hero Data
    const heroData = {
        title: 'Full Stack Data Analyst Course in Mumbai',
        subtitle: 'Master Python, SQL, Advanced Excel & Power BI in One Program',
        description: 'Become a complete Data Professional with comprehensive training in Python Programming, SQL Database, Advanced Excel, and Power BI - The ultimate data analytics combo course',
        badges: [
            { icon: Clock, label: '16 Weeks', color: 'bg-orange-500' },
            { icon: Users, label: '4000+ Students', color: 'bg-orange-600' },
            { icon: Award, label: 'Certified Program', color: 'bg-orange-700' },
            { icon: Briefcase, label: '100% Job Support', color: 'bg-orange-500' }
        ]
    };

    // Statistics
    const stats = [
        { value: '16 Weeks', label: 'Course Duration', icon: Clock, color: 'orange' },
        { value: '4000+', label: 'Students Trained', icon: Users, color: 'orange' },
        { value: '97%', label: 'Placement Rate', icon: TrendingUp, color: 'orange' },
        { value: '50+', label: 'Industry Projects', icon: Briefcase, color: 'orange' }
    ];

    // About Course
    const aboutCourse = {
        title: 'About Full Stack Data Analyst Course',
        description: 'This comprehensive Full Stack Data Analyst course combines four powerful technologies - Python, SQL, Advanced Excel, and Power BI - into one integrated program. Designed for aspiring data professionals in Mumbai, this course covers the complete data analytics lifecycle from data extraction and manipulation to advanced analysis and interactive visualization. You will master the most in-demand tools used by top companies worldwide.',
        highlights: [
            'Learn Python programming, SQL databases, Excel mastery, and Power BI in one course',
            'Hands-on training with 50+ real-world projects across all four technologies',
            'Master data extraction, cleaning, analysis, and visualization',
            'Work on end-to-end analytics projects from Mumbai-based companies',
            'Get certified in Python, SQL, Microsoft Excel, and Power BI',
            'Complete data stack training - from programming to business intelligence'
        ],
        sections: [
            {
                heading: 'What is Full Stack Data Analytics?',
                content: 'Full Stack Data Analytics refers to expertise across the entire data analysis spectrum - from programming and database management to spreadsheet analysis and business intelligence visualization. This course equips you with Python for data manipulation and automation, SQL for database querying, Advanced Excel for complex analysis and reporting, and Power BI for creating interactive dashboards. This combination makes you a complete data professional capable of handling any analytics challenge.'
            },
            {
                heading: 'Why Choose This 4-in-1 Data Analytics Course?',
                content: 'Companies in Mumbai and globally seek professionals who can work across multiple data tools. Rather than learning these skills separately, our integrated program teaches you how Python, SQL, Excel, and Power BI work together in real projects. You will save time and money while becoming more employable. Average salaries for professionals with this skill combination range from ₹5-15 LPA for freshers and ₹18-45 LPA for experienced professionals in roles like Data Analyst, Business Intelligence Analyst, Analytics Consultant, and Data Engineer.'
            },
            {
                heading: 'Best Full Stack Data Analytics Training in Mumbai',
                content: 'Our training institute in Mumbai offers this unique 4-in-1 program designed by industry experts from analytics firms, banks, and tech companies. Located in Andheri East, we provide state-of-the-art labs with Python, SQL databases, Excel 365, and Power BI. Students work on integrated projects where they extract data with SQL, analyze with Python, report in Excel, and visualize in Power BI - exactly how it\'s done in the industry.'
            }
        ]
    };

    // Syllabus
    const syllabus = {
        modules: [
            {
                id: 1,
                title: 'Python Programming Fundamentals',
                duration: '3 Weeks',
                topics: [
                    'Introduction to Python and Environment Setup',
                    'Variables, Data Types, and Operators',
                    'Control Flow: If-Else, Loops (For, While)',
                    'Functions: Definition, Parameters, Return Values',
                    'Data Structures: Lists, Tuples, Dictionaries, Sets',
                    'String Manipulation and Methods',
                    'File Handling: Reading and Writing Files',
                    'Exception Handling: try-except blocks',
                    'Python Projects and Exercises'
                ]
            },
            {
                id: 2,
                title: 'Python for Data Analysis',
                duration: '2 Weeks',
                topics: [
                    'Introduction to NumPy: Arrays and Operations',
                    'Pandas: DataFrames and Series',
                    'Data Loading: CSV, Excel, JSON files',
                    'Data Cleaning: Handling Missing Values, Duplicates',
                    'Data Transformation and Filtering',
                    'Grouping, Aggregation, and Pivot Tables in Pandas',
                    'Merging and Joining Datasets',
                    'Data Visualization with Matplotlib and Seaborn',
                    'Exploratory Data Analysis (EDA) Projects'
                ]
            },
            {
                id: 3,
                title: 'SQL & Database Management',
                duration: '3 Weeks',
                topics: [
                    'Introduction to Databases and RDBMS Concepts',
                    'SQL Basics: SELECT, FROM, WHERE, ORDER BY',
                    'Filtering Data: Comparison and Logical Operators',
                    'SQL Joins: INNER, LEFT, RIGHT, FULL OUTER, CROSS',
                    'Aggregate Functions: COUNT, SUM, AVG, MIN, MAX',
                    'GROUP BY and HAVING Clauses',
                    'Subqueries and Nested Queries',
                    'Window Functions: ROW_NUMBER, RANK, DENSE_RANK',
                    'Common Table Expressions (CTE)',
                    'Views, Stored Procedures, and Functions',
                    'Database Design and Normalization',
                    'MySQL and PostgreSQL Practical Labs'
                ]
            },
            {
                id: 4,
                title: 'Advanced Excel for Data Analysis',
                duration: '3 Weeks',
                topics: [
                    'Excel Interface Mastery and Shortcuts',
                    'Advanced Formulas: VLOOKUP, XLOOKUP, INDEX-MATCH',
                    'Logical Functions: IF, IFS, AND, OR, NOT',
                    'Text Functions: CONCATENATE, TEXTJOIN, LEFT, RIGHT',
                    'Date & Time Functions for Analysis',
                    'SUMIF, SUMIFS, COUNTIF, COUNTIFS',
                    'Pivot Tables: Creation, Customization, Analysis',
                    'Power Query: Data Import and Transformation',
                    'Power Pivot and Data Modeling',
                    'Conditional Formatting and Data Validation',
                    'What-If Analysis: Goal Seek, Scenario Manager',
                    'Excel Dashboards with Charts and Slicers',
                    'VBA Basics and Macro Recording for Automation'
                ]
            },
            {
                id: 5,
                title: 'Power BI for Business Intelligence',
                duration: '3 Weeks',
                topics: [
                    'Introduction to Power BI Desktop and Service',
                    'Connecting to Data Sources: Excel, SQL, Web, APIs',
                    'Power Query Editor: Data Cleaning and Transformation',
                    'Data Modeling: Relationships and Star Schema',
                    'DAX (Data Analysis Expressions) Fundamentals',
                    'Calculated Columns and Measures in DAX',
                    'Time Intelligence Functions in DAX',
                    'Creating Visualizations: Charts, Tables, Maps, Gauges',
                    'Interactive Dashboards with Slicers and Filters',
                    'Drill-down and Drill-through Features',
                    'Report Design Best Practices',
                    'Publishing Reports to Power BI Service',
                    'Row-level Security and Data Sharing',
                    'Power BI Mobile and Real-time Dashboards'
                ]
            },
            {
                id: 6,
                title: 'Integration Projects - Python + SQL',
                duration: '1 Week',
                topics: [
                    'Connecting Python with MySQL/PostgreSQL Databases',
                    'Executing SQL Queries from Python Scripts',
                    'CRUD Operations with Python: Create, Read, Update, Delete',
                    'Data Extraction from Databases using Pandas',
                    'Automating Database Operations with Python',
                    'Building Data Pipeline: Database to Python to Excel',
                    'Project: Sales Analysis System with Python and SQL',
                    'Project: Inventory Management Dashboard'
                ]
            },
            {
                id: 7,
                title: 'Integration Projects - Excel + Power BI',
                duration: '1 Week',
                topics: [
                    'Importing Excel Data into Power BI',
                    'Connecting Power BI to Multiple Excel Files',
                    'Excel as Data Source for Power BI Dashboards',
                    'Complementing Excel Reports with Power BI',
                    'Building Executive Dashboards: Excel + Power BI',
                    'Project: Financial Reporting Dashboard',
                    'Project: HR Analytics Dashboard with Excel and Power BI',
                    'Project: Sales Performance Tracker'
                ]
            },
            {
                id: 8,
                title: 'Capstone Project - End-to-End Analytics',
                duration: '2 Weeks',
                topics: [
                    'Project Planning and Requirement Analysis',
                    'Data Extraction from Multiple Sources using SQL',
                    'Data Processing and Cleaning with Python',
                    'Advanced Analysis and Modeling in Excel',
                    'Interactive Dashboard Creation in Power BI',
                    'Complete Data Analytics Workflow Integration',
                    'Project Options: E-commerce Analytics, Banking Dashboard, Healthcare Analytics',
                    'Project Presentation and Documentation',
                    'Industry Best Practices and Case Studies'
                ]
            }
        ]
    };

    // Key Features
    const features = [
        {
            icon: Layers,
            title: '4-in-1 Training',
            description: 'Master Python, SQL, Excel, and Power BI in one integrated program',
            color: 'orange'
        },
        {
            icon: Laptop,
            title: 'Hands-on Labs',
            description: 'Access to dedicated labs with all software and real datasets',
            color: 'orange'
        },
        {
            icon: Award,
            title: 'Multiple Certifications',
            description: 'Get certified in Python, SQL, Excel, and Power BI',
            color: 'orange'
        },
        {
            icon: Briefcase,
            title: 'Job Assistance',
            description: '100% placement support with 450+ hiring partners in Mumbai',
            color: 'orange'
        },
        {
            icon: Code,
            title: '50+ Projects',
            description: 'Real-world projects integrating all four technologies',
            color: 'orange'
        },
        {
            icon: Users,
            title: 'Expert Mentors',
            description: 'Learn from industry professionals with 15+ years experience',
            color: 'orange'
        }
    ];

    // Eligibility
    const eligibility = [
        { label: 'Any Graduate (BE, B.Tech, BCA, B.Com, BBA)', eligible: true },
        { label: 'Working professionals wanting data analytics skills', eligible: true },
        { label: 'Career switchers to data analytics field', eligible: true },
        { label: 'Business Analysts upgrading technical skills', eligible: true },
        { label: 'Fresh graduates seeking analytics careers', eligible: true },
        { label: 'Complete beginners - no programming required', eligible: true }
    ];

    // Tools Covered
    const tools = [
        { name: 'Python 3.x', icon: Code },
        { name: 'MySQL', icon: Database },
        { name: 'PostgreSQL', icon: Server },
        { name: 'Excel 365', icon: Table },
        { name: 'Power BI', icon: BarChart3 },
        { name: 'Pandas', icon: FileSpreadsheet },
        { name: 'NumPy', icon: Layers },
        { name: 'Jupyter', icon: BookOpen }
    ];

    // Batch Schedule
    const batches = [
        {
            id: 'FSDA-2025-01',
            startDate: '13/01/2025',
            mode: 'Online',
            timing: 'Weekday Evening (Mon-Fri)',
            schedule: '7:00 PM - 9:00 PM',
            location: 'Mumbai',
            seats: 'Available'
        },
        {
            id: 'FSDA-2025-02',
            startDate: '19/01/2025',
            mode: 'Offline',
            timing: 'Weekend (Sat-Sun)',
            schedule: '10:00 AM - 5:00 PM',
            location: 'Andheri East, Mumbai',
            seats: 'Filling Fast'
        },
        {
            id: 'FSDA-2025-03',
            startDate: '26/01/2025',
            mode: 'Hybrid',
            timing: 'Fast Track (Mon-Fri)',
            schedule: '9:00 AM - 4:00 PM',
            location: 'Mumbai',
            seats: 'Available'
        },
        {
            id: 'FSDA-2025-04',
            startDate: '03/02/2025',
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
            name: 'Amit Patel',
            designation: 'Data Analyst at HDFC Bank',
            rating: 5,
            avatar: 'AP',
            review: 'This 4-in-1 course is a game changer! I learned Python, SQL, Excel, and Power BI all in one program. Got placed at HDFC Bank as Data Analyst with 9 LPA package. The integrated projects made learning so practical!'
        },
        {
            name: 'Priya Kulkarni',
            designation: 'Business Intelligence Analyst at Reliance',
            rating: 5,
            avatar: 'PK',
            review: 'Best investment in my career! Instead of taking 4 separate courses, I learned everything together. The instructors showed how these tools work together in real scenarios. Highly recommend!'
        },
        {
            name: 'Rajesh Kumar',
            designation: 'Analytics Consultant at Deloitte',
            rating: 5,
            avatar: 'RK',
            review: 'Outstanding curriculum! The capstone project where we integrated Python, SQL, Excel, and Power BI was incredible. Got multiple job offers within a month. Thank you for this amazing program!'
        },
        {
            name: 'Sneha Joshi',
            designation: 'Data Engineer at TCS Digital',
            rating: 5,
            avatar: 'SJ',
            review: 'From zero to hero in 16 weeks! As a complete beginner, I was worried but the step-by-step teaching made it easy. Now I confidently work with all four tools. Worth every penny!'
        }
    ];

    // FAQs
    const faqs = [
        {
            id: 1,
            question: 'Do I need any prior programming or technical knowledge?',
            answer: 'No prior knowledge is required! This course is designed for complete beginners. We start from the basics of each tool and gradually build your skills. Basic computer knowledge is sufficient to join.'
        },
        {
            id: 2,
            question: 'What is the total duration of this course?',
            answer: 'The complete course duration is 16 weeks (approximately 4 months). This covers Python programming, SQL databases, Advanced Excel, Power BI, and integration projects with 50+ hands-on assignments.'
        },
        {
            id: 3,
            question: 'Why should I learn all four tools together?',
            answer: 'In the real world, data professionals use multiple tools together. Python for automation, SQL for data extraction, Excel for reporting, and Power BI for dashboards. Learning them together saves time, money, and makes you more employable with integrated skills.'
        },
        {
            id: 4,
            question: 'Will I get certified in all four technologies?',
            answer: 'Yes! You will receive course completion certificates and be prepared for industry certifications including Python Programming, SQL Database, Microsoft Excel Expert, and Microsoft Power BI Data Analyst certifications.'
        },
        {
            id: 5,
            question: 'What is the fee structure for this 4-in-1 course?',
            answer: 'Our 4-in-1 combo course offers significant savings compared to taking four separate courses. We offer flexible payment options including 0% EMI. Contact our admissions team for detailed fee structure and limited-time combo discounts.'
        },
        {
            id: 6,
            question: 'Do you provide job placement assistance?',
            answer: 'Yes! We provide 100% job placement assistance including resume building, portfolio creation on GitHub, mock interviews, technical assessments, and direct referrals to 450+ hiring partners including banks, IT companies, consulting firms, and startups across Mumbai.'
        },
        {
            id: 7,
            question: 'What job roles can I apply for after this course?',
            answer: 'After completing this course, you can apply for Data Analyst, Business Intelligence Analyst, SQL Developer, Python Developer, Power BI Developer, Analytics Consultant, Data Engineer, MIS Executive, and Business Analyst roles with salaries ranging from ₹5-15 LPA.'
        },
        {
            id: 8,
            question: 'Is this course suitable for working professionals?',
            answer: 'Absolutely! We offer flexible schedules including weekday evenings (7-9 PM) and weekend batches (Sat-Sun) designed for working professionals. Online and hybrid learning options ensure you can upskill without career breaks.'
        },
        {
            id: 9,
            question: 'Will I work on real industry projects?',
            answer: 'Yes! You will work on 50+ projects including sales analytics dashboards, customer segmentation, financial modeling, HR analytics, e-commerce analysis, and end-to-end capstone projects integrating Python, SQL, Excel, and Power BI.'
        },
        {
            id: 10,
            question: 'Which software and tools will be provided?',
            answer: 'You will get access to Python 3.x, Jupyter Notebook, MySQL, PostgreSQL, Microsoft Excel 365, Power BI Desktop, and all necessary libraries. We provide cloud lab access and setup support for your personal computer.'
        },
        {
            id: 11,
            question: 'How is this different from separate Python/SQL/Excel courses?',
            answer: 'Our integrated approach teaches you how these tools work together in real workflows - extracting data with SQL, processing with Python, analyzing in Excel, and visualizing in Power BI. You learn the complete data analytics stack, making you more valuable than someone who knows tools in isolation.'
        },
        {
            id: 12,
            question: 'Can I get a job without a technical degree?',
            answer: 'Yes! Many of our successful students come from non-technical backgrounds (B.Com, BBA, Arts). This course focuses on practical skills over degrees. We have placed students from diverse backgrounds in top companies based on their project portfolios and technical skills.'
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
                <h1>Full Stack Data Analyst Course in Mumbai - Python, SQL, Excel, Power BI Training</h1>
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
                    href="https://api.whatsapp.com/send?phone=+918421176876&text=Hi+I+am+looking+for+Python+SQL+Excel+Power+BI+Course+in+Mumbai"
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
                            <Layers className="w-5 h-5 text-orange-300" />
                            <span className="text-sm font-semibold text-orange-200">4-in-1 Certified Training Program</span>
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
                                <div className="text-2xl font-bold text-orange-700">16 Weeks</div>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                                <div className="text-sm text-orange-600 font-medium">Modules</div>
                                <div className="text-2xl font-bold text-orange-700">{syllabus.modules.length}</div>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                                <div className="text-sm text-orange-600 font-medium">Projects</div>
                                <div className="text-2xl font-bold text-orange-700">50+</div>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                                <div className="text-sm text-orange-600 font-medium">Technologies</div>
                                <div className="text-2xl font-bold text-orange-700">4 Tools</div>
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
                    course='Python + SQL + Advanced Excel + Power BI'
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
                                <p className="text-sm text-gray-600">Master these industry-standard tools</p>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Become a Full Stack Data Analyst?</h2>
                        <p className="text-xl text-orange-200 mb-8">Join 4000+ students and master all 4 technologies in one program</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <a href="tel:022-48904395" className="flex items-center justify-center gap-2 bg-white text-orange-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300">
                                <Phone className="w-5 h-5" />
                                022-48904395
                            </a>
                            <a href="mailto:info@dataanalytics-mumbai.com" className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300">
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
                    <p className="text-gray-400">© 2025 Full Stack Data Analyst Training Institute Mumbai. All rights reserved.</p>
                    <p className="text-sm text-gray-500 mt-2">Best Python SQL Excel Power BI Course | Data Analytics Training | Mumbai</p>
                </div>
            </footer>
        </div>
    );
}
