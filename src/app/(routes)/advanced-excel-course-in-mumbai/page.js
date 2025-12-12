'use client';
import { useState } from 'react';
import {
    Table, BarChart3, PieChart, LineChart, TrendingUp, Calculator,
    Users, Clock, Award, Briefcase, Star, CheckCircle,
    ChevronDown, ChevronUp, BookOpen, Target, FileSpreadsheet,
    Calendar, MapPin, Phone, Mail, Globe, Laptop,
    MessageCircle, FileCheck, ShieldCheck, Database, Zap, Filter
} from 'lucide-react';
import EnrollForm from "../../../components/EnrollForm/EnrollForm.jsx"

export default function AdvancedExcelCoursePage() {
    const [expandedModule, setExpandedModule] = useState(null);
    const [expandedFaq, setExpandedFaq] = useState(null);

    // Course Hero Data
    const heroData = {
        title: 'Advanced Excel Course in Mumbai',
        subtitle: 'Master Excel, VBA, Macros, Pivot Tables & Data Analysis',
        description: 'Become an Excel expert with hands-on training in advanced formulas, data analysis, dashboard creation, VBA programming, and business intelligence',
        badges: [
            { icon: Clock, label: '8 Weeks', color: 'bg-orange-500' },
            { icon: Users, label: '7000+ Students', color: 'bg-orange-600' },
            { icon: Award, label: 'Certified Program', color: 'bg-orange-700' },
            { icon: Briefcase, label: '100% Job Support', color: 'bg-orange-500' }
        ]
    };

    // Statistics
    const stats = [
        { value: '8 Weeks', label: 'Course Duration', icon: Clock, color: 'orange' },
        { value: '7000+', label: 'Students Trained', icon: Users, color: 'orange' },
        { value: '95%', label: 'Placement Rate', icon: TrendingUp, color: 'orange' },
        { value: '40+', label: 'Industry Projects', icon: Briefcase, color: 'orange' }
    ];

    // About Course
    const aboutCourse = {
        title: 'About Advanced Excel Course',
        description: 'Advanced Excel is a critical skill for professionals across finance, accounting, business analysis, and data analytics. Our comprehensive Advanced Excel course in Mumbai transforms you from a basic Excel user to an expert who can handle complex data analysis, create interactive dashboards, automate tasks with VBA macros, and make data-driven business decisions.',
        highlights: [
            'Learn from Excel experts with 15+ years of corporate experience',
            'Hands-on training with real business datasets and scenarios',
            'Master VLOOKUP, Pivot Tables, Power Query, Power Pivot, VBA',
            'Work on 40+ real-world projects from finance, HR, and sales',
            'Get certified in Microsoft Excel Specialist and Expert',
            'Learn dashboard creation, financial modeling, and automation'
        ],
        sections: [
            {
                heading: 'What is Advanced Excel?',
                content: 'Advanced Excel goes beyond basic formulas and functions to include complex data analysis, automation, and business intelligence capabilities. It encompasses advanced formulas (VLOOKUP, INDEX-MATCH, array formulas), Pivot Tables and Pivot Charts, Power Query for data transformation, Power Pivot for data modeling, VBA programming for automation, dashboard creation, financial modeling, and data visualization techniques used by Fortune 500 companies.'
            },
            {
                heading: 'Why Choose Advanced Excel as a Career Skill?',
                content: 'Advanced Excel skills are highly valued across all industries and job roles. From financial analysts to HR managers, marketing professionals to operations heads - everyone needs Excel expertise. Mumbai\'s corporate sector, especially in banking, finance, consulting, and analytics, pays premium salaries to Excel experts. Professionals with advanced Excel skills earn 30-50% more than those with basic knowledge. This course prepares you for roles like Business Analyst, Financial Analyst, Data Analyst, MIS Executive, and Operations Analyst.'
            },
            {
                heading: 'Best Advanced Excel Training in Mumbai',
                content: 'Our Advanced Excel training institute in Mumbai offers industry-focused curriculum designed by corporate trainers from top companies like Deloitte, EY, and KPMG. Located in Andheri East with excellent connectivity, we provide hands-on training with real corporate datasets. Students work on actual business problems from Mumbai-based companies in banking, finance, retail, and consulting sectors, gaining practical experience that directly translates to workplace productivity.'
            }
        ]
    };

    // Syllabus
    const syllabus = {
        modules: [
            {
                id: 1,
                title: 'Excel Fundamentals & Interface Mastery',
                duration: '3 Days',
                topics: [
                    'Excel Interface: Ribbon, Quick Access Toolbar, Worksheets',
                    'Essential Keyboard Shortcuts for Productivity',
                    'Cell Formatting: Numbers, Dates, Currency, Custom Formats',
                    'Workbook Management: Multiple Sheets, Protection',
                    'Page Layout and Print Settings for Professional Reports',
                    'Excel Options and Customization',
                    'Data Entry Best Practices and Validation'
                ]
            },
            {
                id: 2,
                title: 'Advanced Formulas & Functions',
                duration: '1 Week',
                topics: [
                    'Logical Functions: IF, AND, OR, NOT, IFS, SWITCH',
                    'Lookup Functions: VLOOKUP, HLOOKUP, INDEX, MATCH',
                    'INDEX-MATCH Combination for Dynamic Lookups',
                    'XLOOKUP: The Modern Lookup Function',
                    'Text Functions: CONCATENATE, TEXTJOIN, LEFT, RIGHT, MID',
                    'Date & Time Functions: DATE, EDATE, NETWORKDAYS, DATEDIF',
                    'Mathematical Functions: SUMIF, SUMIFS, COUNTIF, COUNTIFS',
                    'Statistical Functions: AVERAGE, MEDIAN, MODE, STDEV',
                    'Array Formulas and Dynamic Arrays'
                ]
            },
            {
                id: 3,
                title: 'Data Management & Analysis',
                duration: '1 Week',
                topics: [
                    'Data Sorting: Single and Multiple Criteria',
                    'Advanced Filtering: AutoFilter, Advanced Filter',
                    'Data Validation: Drop-down Lists, Custom Rules',
                    'Conditional Formatting: Rules, Color Scales, Icon Sets',
                    'Remove Duplicates and Data Cleaning Techniques',
                    'Text to Columns and Data Transformation',
                    'Consolidate Data from Multiple Sources',
                    'What-If Analysis: Goal Seek, Scenario Manager, Data Tables'
                ]
            },
            {
                id: 4,
                title: 'Pivot Tables & Pivot Charts',
                duration: '1 Week',
                topics: [
                    'Introduction to Pivot Tables: Benefits and Use Cases',
                    'Creating Pivot Tables: Layout and Design',
                    'Pivot Table Fields: Rows, Columns, Values, Filters',
                    'Grouping Data: Dates, Numbers, Custom Groups',
                    'Calculated Fields and Calculated Items',
                    'Slicers and Timelines for Interactive Filtering',
                    'Pivot Charts: Visualization of Pivot Data',
                    'Advanced Pivot Table Techniques and Troubleshooting',
                    'Refresh and Update Pivot Tables with New Data'
                ]
            },
            {
                id: 5,
                title: 'Power Query for Data Transformation',
                duration: '1 Week',
                topics: [
                    'Introduction to Power Query: Get & Transform Data',
                    'Importing Data from Multiple Sources: CSV, Excel, Database',
                    'Query Editor Interface and Tools',
                    'Data Transformation: Remove, Split, Merge Columns',
                    'Data Type Conversion and Error Handling',
                    'Append Queries: Combining Multiple Tables',
                    'Merge Queries: Joining Tables (Inner, Outer, Left, Right)',
                    'Group By and Aggregate Functions',
                    'Creating Custom Columns with M Language',
                    'Refresh Queries and Schedule Updates'
                ]
            },
            {
                id: 6,
                title: 'Power Pivot & Data Modeling',
                duration: '4 Days',
                topics: [
                    'Introduction to Power Pivot: Data Model',
                    'Importing Data into Power Pivot',
                    'Creating Relationships between Tables',
                    'DAX (Data Analysis Expressions) Fundamentals',
                    'Calculated Columns vs Measures',
                    'Common DAX Functions: SUM, AVERAGE, CALCULATE, FILTER',
                    'Time Intelligence Functions in DAX',
                    'KPIs (Key Performance Indicators) Creation',
                    'Building Data Models for Analysis'
                ]
            },
            {
                id: 7,
                title: 'Interactive Dashboards & Data Visualization',
                duration: '1 Week',
                topics: [
                    'Dashboard Design Principles and Best Practices',
                    'Creating Charts: Column, Bar, Line, Pie, Combo',
                    'Advanced Chart Types: Waterfall, Funnel, Sunburst',
                    'Sparklines: Mini Charts in Cells',
                    'Form Controls: Buttons, Drop-downs, Scroll Bars',
                    'Dynamic Charts with Named Ranges',
                    'Interactive Dashboards with Slicers',
                    'Dashboard Layout and Design for Executive Reporting',
                    'Linking Charts and Tables for Interactivity',
                    'Real-time Dashboard Projects'
                ]
            },
            {
                id: 8,
                title: 'VBA & Macros for Automation',
                duration: '1.5 Weeks',
                topics: [
                    'Introduction to VBA (Visual Basic for Applications)',
                    'Macro Recording and Editing',
                    'VBA Editor: Project Explorer, Properties, Code Window',
                    'VBA Basics: Variables, Data Types, Constants',
                    'Control Structures: If-Then-Else, Select Case',
                    'Loops: For, Do While, Do Until, For Each',
                    'Working with Worksheets and Workbooks via VBA',
                    'Range Object: Selecting, Copying, Formatting Cells',
                    'User Forms: Creating Custom Dialog Boxes',
                    'Error Handling and Debugging in VBA',
                    'Automating Repetitive Tasks with Macros',
                    'VBA Projects: Report Automation, Data Import/Export'
                ]
            },
            {
                id: 9,
                title: 'Financial Modeling & Business Analysis',
                duration: '4 Days',
                topics: [
                    'Financial Functions: PMT, FV, PV, IRR, NPV, XIRR',
                    'Loan Amortization Schedule Creation',
                    'Investment Analysis and ROI Calculation',
                    'Break-even Analysis',
                    'Budgeting and Forecasting Models',
                    'Variance Analysis and Performance Metrics',
                    'Profit & Loss Statement Modeling',
                    'Sensitivity Analysis with Data Tables',
                    'Financial Dashboard for Business Reporting'
                ]
            },
            {
                id: 10,
                title: 'Advanced Tips, Tricks & Real Projects',
                duration: '3 Days',
                topics: [
                    'Excel Performance Optimization Techniques',
                    'Protecting Workbooks and Worksheets',
                    'Sharing and Collaboration Features',
                    'Excel Add-ins and Third-party Tools',
                    'Integration with Other Office Applications',
                    'Data Import/Export: CSV, PDF, Database',
                    'Excel Best Practices for Corporate Environment',
                    'Capstone Project: Complete Business Dashboard',
                    'Interview Preparation and Excel Tests',
                    'Tips for Microsoft Excel Certification Exam'
                ]
            }
        ]
    };

    // Key Features
    const features = [
        {
            icon: Table,
            title: 'Expert Training',
            description: 'Learn from Excel experts with 15+ years in corporate training',
            color: 'orange'
        },
        {
            icon: Laptop,
            title: 'Hands-on Practice',
            description: 'Dedicated Excel labs with real business datasets',
            color: 'orange'
        },
        {
            icon: Award,
            title: 'Certification',
            description: 'Microsoft Excel Specialist and Expert certification prep',
            color: 'orange'
        },
        {
            icon: Briefcase,
            title: 'Job Assistance',
            description: '100% placement support with 400+ hiring partners',
            color: 'orange'
        },
        {
            icon: FileSpreadsheet,
            title: 'Live Projects',
            description: '40+ real projects from finance, HR, sales, operations',
            color: 'orange'
        },
        {
            icon: Users,
            title: 'Small Batches',
            description: 'Limited batch size for personalized attention',
            color: 'orange'
        }
    ];

    // Eligibility
    const eligibility = [
        { label: 'Working professionals from any domain', eligible: true },
        { label: 'Finance, Accounting, and Banking professionals', eligible: true },
        { label: 'HR, Admin, and Operations executives', eligible: true },
        { label: 'Business Analysts and Data Analysts', eligible: true },
        { label: 'MBA, B.Com, BBA students and graduates', eligible: true },
        { label: 'Anyone with basic Excel knowledge', eligible: true }
    ];

    // Tools Covered
    const tools = [
        { name: 'Excel 365', icon: Table },
        { name: 'Pivot Tables', icon: BarChart3 },
        { name: 'Power Query', icon: Database },
        { name: 'Power Pivot', icon: PieChart },
        { name: 'VBA Macros', icon: Zap },
        { name: 'Dashboards', icon: LineChart },
        { name: 'Power BI', icon: TrendingUp },
        { name: 'Data Analysis', icon: Calculator }
    ];

    // Batch Schedule
    const batches = [
        {
            id: 'AE-2025-01',
            startDate: '08/01/2025',
            mode: 'Online',
            timing: 'Weekday Evening (Mon-Fri)',
            schedule: '7:00 PM - 9:00 PM',
            location: 'Mumbai',
            seats: 'Available'
        },
        {
            id: 'AE-2025-02',
            startDate: '15/01/2025',
            mode: 'Offline',
            timing: 'Weekend (Sat-Sun)',
            schedule: '10:00 AM - 5:00 PM',
            location: 'Andheri East, Mumbai',
            seats: 'Filling Fast'
        },
        {
            id: 'AE-2025-03',
            startDate: '22/01/2025',
            mode: 'Hybrid',
            timing: 'Fast Track (Mon-Fri)',
            schedule: '9:00 AM - 3:00 PM',
            location: 'Mumbai',
            seats: 'Available'
        },
        {
            id: 'AE-2025-04',
            startDate: '29/01/2025',
            mode: 'Online',
            timing: 'Weekend (Sat-Sun)',
            schedule: '11:00 AM - 5:00 PM',
            location: 'Mumbai',
            seats: 'Available'
        }
    ];

    // FAQs
    const faqs = [
        {
            id: 1,
            question: 'Do I need prior Excel knowledge for this Advanced Excel course?',
            answer: 'Basic Excel knowledge is recommended but not mandatory. We start with a quick refresher of Excel fundamentals before moving to advanced topics. If you can create basic formulas and format cells, you are ready for this course.'
        },
        {
            id: 2,
            question: 'What is the duration of the Advanced Excel course?',
            answer: 'The complete course duration is 8 weeks (approximately 2 months). This includes advanced formulas, Pivot Tables, Power Query, Power Pivot, VBA programming, dashboard creation, and 40+ hands-on projects.'
        },
        {
            id: 3,
            question: 'Will I learn VBA and Macros in this course?',
            answer: 'Yes! The course includes comprehensive VBA training covering macro recording, VBA programming fundamentals, user forms, automation scripts, and real-world automation projects for repetitive tasks.'
        },
        {
            id: 4,
            question: 'Which Excel version is covered in the training?',
            answer: 'We teach Excel 365 (latest version) which includes all modern features like dynamic arrays, XLOOKUP, Power Query, and Power Pivot. The concepts apply to Excel 2016, 2019, and 2021 as well.'
        },
        {
            id: 5,
            question: 'What is the fee structure for the Advanced Excel course?',
            answer: 'Our course fee is highly affordable with flexible payment options including EMI. Contact our admissions team for detailed fee structure, corporate training discounts, and early enrollment offers.'
        },
        {
            id: 6,
            question: 'Do you provide job placement assistance?',
            answer: 'Yes! We provide 100% job placement assistance including resume optimization, Excel skill tests, mock interviews, and direct referrals to 400+ companies across Mumbai including banks, consulting firms, and corporate offices.'
        },
        {
            id: 7,
            question: 'What job roles require Advanced Excel skills?',
            answer: 'Advanced Excel is essential for Business Analyst, Financial Analyst, Data Analyst, MIS Executive, Accountant, Financial Controller, Operations Manager, HR Analyst, and almost all corporate roles involving data handling and reporting.'
        },
        {
            id: 8,
            question: 'Is the course suitable for working professionals?',
            answer: 'Absolutely! We offer flexible timings including weekday evenings (7-9 PM) and weekend batches (Sat-Sun) specifically designed for working professionals. Online and hybrid options ensure you can learn without disrupting your work.'
        },
        {
            id: 9,
            question: 'Will I get hands-on project experience?',
            answer: 'Yes! You will work on 40+ real-world projects including financial dashboards, sales analysis reports, HR analytics, inventory management, automated report generation, budgeting models, and executive dashboards.'
        },
        {
            id: 10,
            question: 'Do you provide Microsoft Excel certification preparation?',
            answer: 'Yes! Our course prepares you for Microsoft Office Specialist (MOS) Excel certification and Microsoft Excel Expert certification. We provide practice tests, exam tips, and guidance for clearing these globally recognized certifications.'
        },
        {
            id: 11,
            question: 'Can I learn Power Query and Power Pivot in this course?',
            answer: 'Absolutely! Power Query (Get & Transform) and Power Pivot (Data Modeling) are core components of our curriculum. You will learn data transformation, M language basics, DAX functions, and creating data models for analysis.'
        },
        {
            id: 12,
            question: 'What is the difference between basic and advanced Excel?',
            answer: 'Basic Excel covers simple formulas, formatting, and charts. Advanced Excel includes complex formulas (VLOOKUP, INDEX-MATCH), Pivot Tables, Power Query, Power Pivot, VBA programming, automation, dashboard creation, financial modeling, and business intelligence - skills that make you 10x more productive.'
        }
    ];

    const colorClasses = {
        orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* SEO-friendly Header */}
            <header className="sr-only">
                <h1>Advanced Excel Course in Mumbai - Best Excel Training Institute</h1>
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
                    href="https://api.whatsapp.com/send?phone=+918421176876&text=Hi+I+am+looking+for+Advanced+Excel+Course+in+Mumbai"
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
                            <Table className="w-5 h-5 text-orange-300" />
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
                                <div className="text-2xl font-bold text-orange-700">8 Weeks</div>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                                <div className="text-sm text-orange-600 font-medium">Modules</div>
                                <div className="text-2xl font-bold text-orange-700">{syllabus.modules.length}</div>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                                <div className="text-sm text-orange-600 font-medium">Projects</div>
                                <div className="text-2xl font-bold text-orange-700">40+</div>
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
                    course='Advanced Excel'
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
                                <FileSpreadsheet className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900">Tools & Technologies</h2>
                                <p className="text-sm text-gray-600">Master industry-standard Excel tools</p>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Master Advanced Excel?</h2>
                        <p className="text-xl text-orange-200 mb-8">Join 7000+ professionals and become an Excel expert</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <a href="tel:022-48904395" className="flex items-center justify-center gap-2 bg-white text-orange-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300">
                                <Phone className="w-5 h-5" />
                                022-48904395
                            </a>
                            <a href="mailto:info@excel-mumbai.com" className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300">
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
                    <p className="text-gray-400">© 2025 Advanced Excel Training Institute Mumbai. All rights reserved.</p>
                    <p className="text-sm text-gray-500 mt-2">Best Excel Course | VBA Training | Pivot Tables | Power Query | Mumbai</p>
                </div>
            </footer>
        </div>
    );
}
