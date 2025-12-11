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
        course: 'Data Analytics Course',
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
            course: 'Data Analytics Course',
            batchPreference: '',
            experience: '',
            message: ''
        });
    };

    const heroData = {
        title: 'Data Analytics Course',
        subtitle: 'Master Data Analysis, Visualization, SQL, Python & Business Intelligence',
        description:
            'Become a job-ready Data Analyst with hands-on training in Excel, SQL, Power BI, Python, and real-time business datasets. Learn data cleaning, visualization, predictive analytics, dashboard building, and industry-standard tools from expert trainers at SevenMentor.',
        badges: [
            { icon: Clock, label: '120–150 Hours Training', color: 'bg-orange-600' },
            { icon: Users, label: '10,000+ Learners', color: 'bg-blue-600' },
            { icon: Award, label: 'Industry-Recognized Certification', color: 'bg-orange-600' },
            { icon: Briefcase, label: '100% Placement Support', color: 'bg-purple-600' }
        ]
    };
    

    const stats = [
        { value: '100-120', label: 'Hours Training', icon: Clock, color: 'orange' },
        { value: '1500+', label: 'Students Trained', icon: Users, color: 'orange' },
        { value: '92+', label: 'Batches Completed', icon: TrendingUp, color: 'orange' },
        { value: '15+ Years', label: 'Expert Trainers', icon: Award, color: 'orange' }
    ];

    const aboutCourse = {
        title: 'About Data Analytics Training',
        description:
            'Data Analytics is the process of collecting, cleaning, analyzing, and visualizing data to help organizations make informed decisions. Skilled Data Analysts use tools like Excel, SQL, Power BI, Python, and Tableau to uncover trends, build dashboards, create reports, and solve business problems. The Data Analytics Course in Mumbai by SevenMentor provides hands-on training using real-world datasets, industry tools, and practical case studies to help you become a job-ready Data Analyst.',
        highlights: [
            'Trainers with 10+ Years of Industry & BI Reporting Experience',
            'Hands-on Projects Using Real Business Datasets',
            'Excel, SQL, Power BI, Python & Tableau Training Included',
            'Flexible Batches: Weekday, Weekend & Fast-Track Options',
            '100% Placement Assistance with Resume & Interview Training',
            'Industry-Recognized Certification & Job-Ready Skills'
        ],
        sections: [
            {
                heading: 'What is Data Analytics?',
                content:
                    'Data Analytics involves examining raw data to uncover meaningful insights, patterns, and trends that help businesses make smarter decisions. Data Analysts work with tools like Excel, SQL, Power BI, Python, and Tableau to clean data, perform statistical analysis, create dashboards, and deliver actionable insights. It is one of the fastest-growing career fields across IT, finance, healthcare, retail, and all data-driven industries.'
            },
            {
                heading: 'Why is Data Analytics Training Important?',
                content:
                    'With companies becoming increasingly data-driven, the demand for Data Analysts has grown rapidly. Organizations rely on data to optimize processes, improve customer experience, increase sales, and reduce operational costs. Learning data analytics helps you build strong analytical thinking, technical skills, and business understanding. It also opens doors to high-paying roles like Data Analyst, Business Analyst, BI Analyst, and Reporting Specialist.'
            },
            {
                heading: 'What Does a Data Analyst Do?',
                content:
                    'A Data Analyst collects, organizes, and interprets data to support key business decisions. Their responsibilities include data cleaning and preprocessing, generating reports, creating dashboards, performing statistical analysis, identifying trends, automating workflows, and presenting insights to stakeholders. They work with tools like SQL for querying data, Excel for reporting, Python for analysis, and Power BI/Tableau for visualization.'
            },
            {
                heading: 'Why Choose SevenMentor for Data Analytics Training?',
                content:
                    'SevenMentor has trained over 10,000 successful Data Analytics professionals across India. Our trainers come from top MNCs with real industry experience in analytics and BI. Students work on real-time business data, case studies, and end-to-end projects to build practical skills. The course covers everything from basic Excel to advanced Power BI and Python analytics, ensuring you become fully job-ready with placement support and certification.'
            }
        ]
    };
    
    const syllabus = {
        modules: [
            {
                id: 1,
                title: 'Introduction to Data Analytics',
                duration: '1 Week',
                topics: [
                    'What is Data Analytics?',
                    'Types of Data Analytics: Descriptive, Diagnostic, Predictive, Prescriptive',
                    'Role of a Data Analyst',
                    'Understanding Business Problems',
                    'Data Lifecycle Management',
                    'Key Analytics Tools (Excel, SQL, Power BI, Python)',
                    'Career Opportunities in Data Analytics'
                ]
            },
            {
                id: 2,
                title: 'Fundamentals of Excel for Analysis',
                duration: '2 Weeks',
                topics: [
                    'Excel Interface and Essential Shortcuts',
                    'Data Cleaning and Preparation',
                    'Conditional Formatting for Insights',
                    'Advanced Sorting and Filtering',
                    'Lookup Functions (VLOOKUP, XLOOKUP, HLOOKUP)',
                    'Pivot Tables & Pivot Charts',
                    'Excel Dashboards',
                    'Basic to Advanced Formulas',
                    'What-if Analysis & Scenario Building'
                ]
            },
            {
                id: 3,
                title: 'Data Cleaning & Preprocessing Concepts',
                duration: '2 Weeks',
                topics: [
                    'Types of Data: Structured vs Unstructured',
                    'Handling Missing, Duplicate & Inconsistent Data',
                    'Data Normalization & Standardization',
                    'Data Transformation Techniques',
                    'Feature Engineering Basics',
                    'Outliers Detection',
                    'Dataset Understanding with Real-Time Examples'
                ]
            },
            {
                id: 4,
                title: 'SQL for Data Analysis',
                duration: '3 Weeks',
                topics: [
                    'Introduction to RDBMS (MySQL, PostgreSQL)',
                    'SQL Queries: SELECT, WHERE, ORDER BY',
                    'Joins (INNER, LEFT, RIGHT, FULL)',
                    'GROUP BY & HAVING for Aggregations',
                    'Subqueries and Nested Queries',
                    'Window Functions (ROW_NUMBER, RANK, LEAD, LAG)',
                    'Stored Procedures & Functions',
                    'Query Optimization Techniques',
                    'Real-Time Business SQL Case Studies'
                ]
            },
            {
                id: 5,
                title: 'Statistics & Probability for Analytics',
                duration: '3 Weeks',
                topics: [
                    'Descriptive Statistics (Mean, Median, Mode)',
                    'Variance & Standard Deviation',
                    'Probability Fundamentals',
                    'Sampling Techniques',
                    'Hypothesis Testing',
                    'Correlation & Covariance',
                    'Normal Distribution & Z-Scores',
                    'ANOVA & Chi-Square Tests',
                    'Real-World Statistical Applications'
                ]
            },
            {
                id: 6,
                title: 'Python for Data Analytics',
                duration: '3 Weeks',
                topics: [
                    'Python Basics & Data Types',
                    'Jupyter Notebook for Analysis',
                    'Pandas for Data Cleaning',
                    'NumPy for Numerical Computation',
                    'Matplotlib & Seaborn for Visualization',
                    'Handling Large Datasets',
                    'Working with CSV, Excel & JSON Files',
                    'Intro to SciPy'
                ]
            },
            {
                id: 7,
                title: 'Advanced Data Visualization Using Power BI',
                duration: '2 Weeks',
                topics: [
                    'Power BI Desktop & Service Overview',
                    'Connecting to Data Sources',
                    'Power Query for Data Transformation',
                    'Data Modeling & Relationships',
                    'DAX (Data Analysis Expressions)',
                    'Creating Interactive Dashboards',
                    'Publishing & Sharing Reports',
                    'Row-Level Security (RLS)',
                    'Workspace Management'
                ]
            },
            {
                id: 8,
                title: 'Tableau for Business Visualization',
                duration: '3 Weeks',
                topics: [
                    'Tableau Interface & Concepts',
                    'Connecting with Multiple Data Sources',
                    'Advanced Charts (Histograms, Heatmaps, Tree Maps)',
                    'Calculated Fields & Parameters',
                    'Interactive Dashboards',
                    'Storytelling with Data',
                    'Publishing Tableau Dashboards',
                    'Filters, Sets, and Groups'
                ]
            },
            {
                id: 9,
                title: 'Business Intelligence Concepts',
                duration: '1 Week',
                topics: [
                    'Introduction to BI Systems',
                    'ETL (Extract, Transform, Load) Concepts',
                    'Data Warehousing Basics',
                    'Star & Snowflake Schemas',
                    'OLAP vs OLTP',
                    'KPIs & Business Metrics'
                ]
            },
            {
                id: 10,
                title: 'Exploratory Data Analysis (EDA)',
                duration: '2 Weeks',
                topics: [
                    'Univariate, Bivariate & Multivariate Analysis',
                    'Data Distribution Understanding',
                    'Handling Skewed Data',
                    'Visual EDA with Python',
                    'Detecting Trends, Patterns & Relationships'
                ]
            },
            {
                id: 11,
                title: 'Machine Learning Basics',
                duration: '2 Weeks',
                topics: [
                    'What is Machine Learning?',
                    'Supervised vs Unsupervised Learning',
                    'Regression Models (Linear & Logistic)',
                    'Clustering Techniques (K-Means, Hierarchical)',
                    'Model Evaluation Metrics',
                    'Cross Validation Techniques'
                ]
            },
            {
                id: 12,
                title: 'Advanced Excel for Analytics',
                duration: '3 Weeks',
                topics: [
                    'Power Query Editor',
                    'Power Pivot & Data Modeling',
                    'Macros & VBA',
                    'Advanced Dashboard Techniques',
                    'Solver & Optimization Models'
                ]
            },
            {
                id: 13,
                title: 'Data Storytelling & Presentation',
                duration: '2 Weeks',
                topics: [
                    'Principles of Data Storytelling',
                    'Designing Insightful Dashboards',
                    'Color Theory in Visualization',
                    'Creating Executive-Ready Reports',
                    'Presenting Insights to Stakeholders'
                ]
            },
            {
                id: 14,
                title: 'Big Data Concepts for Analysts',
                duration: '2 Weeks',
                topics: [
                    'Understanding Big Data Ecosystem',
                    'Introduction to Hadoop & Spark',
                    'Distributed Data Processing',
                    'Cloud Analytics (AWS, Azure, Google Cloud)'
                ]
            },
            {
                id: 15,
                title: 'Business Domain Analytics',
                duration: '1 Week',
                topics: [
                    'Finance Analytics',
                    'Marketing Analytics',
                    'HR Analytics',
                    'Retail and Sales Analysis',
                    'E-Commerce Analytics'
                ]
            },
            {
                id: 16,
                title: 'Real-World SQL & Python Case Studies',
                duration: '2 Weeks',
                topics: [
                    'Sales Analysis Using SQL',
                    'Customer Segmentation with Python',
                    'Churn Prediction Project',
                    'Market Basket Analysis',
                    'Time Series Forecasting Basics'
                ]
            },
            {
                id: 17,
                title: 'Project Work on Power BI & Tableau',
                duration: '2 Weeks',
                topics: [
                    'Power BI End-to-End Project',
                    'Tableau End-to-End Dashboard',
                    'ETL + Data Modeling Project',
                    'Real-Time Data Projects',
                    'KPI-Based Dashboard Creation'
                ]
            },
            {
                id: 18,
                title: 'Analytics Deployment & Automation',
                duration: '2 Weeks',
                topics: [
                    'Automating Reports',
                    'Excel/Python/Power BI Automation',
                    'Data Refresh Scheduling',
                    'Integration with Cloud Services',
                    'Version Control Basics (Git)'
                ]
            },
            {
                id: 19,
                title: 'Business Case Studies & Assignments',
                duration: '2 Weeks',
                topics: [
                    'Financial KPI Dashboards',
                    'Product Analytics',
                    'Customer Retention & Insights',
                    'Operational & Supply Chain Analysis',
                    'Business Forecasting Models'
                ]
            },
            {
                id: 20,
                title: 'Final Capstone Project',
                duration: '3 Weeks',
                topics: [
                    'Capstone Project Definition',
                    'Data Collection & Cleaning',
                    'Model Building & Analysis',
                    'Dashboard Development',
                    'Report Writing & Presentation',
                    'Interview-Focused Project Guidance'
                ]
            }
        ]
    };
    

    const features = [
        {
            icon: GraduationCap,
            title: 'Expert Data Analytics Trainers',
            description: 'Learn from industry professionals with 10+ years of real experience in analytics, BI tools, and data-driven decision-making.',
            color: 'orange'
        },
        {
            icon: Laptop,
            title: 'Hands-On Training With Top Tools',
            description: 'Get practical experience with Excel, SQL, Power BI, Tableau, and Python using real business datasets.',
            color: 'orange'
        },
        {
            icon: Award,
            title: 'Industry-Recognized Certification',
            description: 'Become certified with job-ready Data Analytics skills aligned with current industry standards.',
            color: 'orange'
        },
        {
            icon: Briefcase,
            title: '100% Placement Assistance',
            description: 'Resume building, mock interviews, and guaranteed placement support with top companies hiring Data Analysts.',
            color: 'orange'
        },
        {
            icon: Zap,
            title: 'Flexible Learning Modes',
            description: 'Choose from weekday, weekend, and fast-track batches to fit your schedule.',
            color: 'orange'
        },
        {
            icon: Building,
            title: 'Real-World Projects & Case Studies',
            description: 'Work on end-to-end analytics projects across finance, sales, marketing, HR, and operations to build practical expertise.',
            color: 'orange'
        }
    ];
    
    const proficiencies = [
        'Data Cleaning, Transformation, and Preprocessing Techniques',
        'Advanced Excel Skills for Data Analysis and Reporting',
        'SQL Querying, Joins, Subqueries, and Database Management',
        'Data Visualization using Power BI and Tableau',
        'Python for Data Analysis (Pandas, NumPy, Matplotlib)',
        'Building Interactive Dashboards and BI Reports',
        'Statistical Analysis and Business Problem Solving',
        'Real-World Project Implementation and Professional Documentation'
    ];
    

    const eligibility = [
        { label: 'Students and Fresh Graduates from Any Stream', eligible: true },
        { label: 'Working Professionals Looking to Switch Careers', eligible: true },
        { label: 'IT and Non-IT Professionals Seeking Data Skills', eligible: true },
        { label: 'Business Analysts and Reporting Executives', eligible: true },
        { label: 'Marketing, Finance, and Operations Professionals', eligible: true },
        { label: 'Software Developers and Engineers', eligible: true },
        { label: 'Entrepreneurs and Business Owners', eligible: true },
        { label: 'Professionals Interested in Data-Driven Decision Making', eligible: true },
        { label: 'Anyone Interested in Becoming a Data Analyst', eligible: true }
    ];
    

    const whyLearn = [
        {
            title: 'Massive Industry Demand',
            description: 'Data Analytics is one of the fastest-growing fields, with companies actively seeking skilled data professionals.'
        },
        {
            title: 'High Salary Growth',
            description: 'Data Analysts earn excellent salaries, with opportunities to grow into roles like Data Scientist and BI Analyst.'
        },
        {
            title: 'Powerful Career Skill',
            description: 'Data-driven decision-making is essential today—analytics skills are valuable across every industry and job role.'
        },
        {
            title: 'Work From Home Opportunities',
            description: 'Many data analytics and reporting roles fully support remote and hybrid work environments.'
        },
        {
            title: 'Strong Career Transition Advantage',
            description: 'Professionals from IT, finance, marketing, HR, and operations can easily move into high-paying analytics roles.'
        },
        {
            title: 'Future-Proof Career',
            description: 'Data Analytics continues to evolve with AI and automation, offering continuous growth and learning opportunities.'
        }
    ];
    

    const batches = [
        {
            id: 'DA-2025-01',
            startDate: '28/01/2025',
            mode: 'Online',
            timing: 'Weekday Evening (Mon-Fri)',
            schedule: '7:00 PM - 9:00 PM',
            duration: '100-120 Hours',
            location: 'Online Live Training',
            seats: 'Available'
        },
        {
            id: 'DA-2025-02',
            startDate: '03/02/2025',
            mode: 'Offline',
            timing: 'Weekend (Sat-Sun)',
            schedule: '10:00 AM - 6:00 PM',
            duration: '100-120 Hours',
            location: 'Dadar, Mumbai',
            seats: 'Filling Fast'
        },
        {
            id: 'DA-2025-03',
            startDate: '10/02/2025',
            mode: 'Hybrid',
            timing: 'Fast Track (Mon-Fri)',
            schedule: '9:00 AM - 5:00 PM',
            duration: '100-120 Hours',
            location: 'Mumbai + Online Live',
            seats: 'Available'
        },
        {
            id: 'DA-2025-04',
            startDate: '17/02/2025',
            mode: 'Online',
            timing: 'Weekend (Sat-Sun)',
            schedule: '11:00 AM - 7:00 PM',
            duration: '100-120 Hours',
            location: 'Online Live Training',
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
            question: 'What is Data Analytics?',
            answer:
                'Data Analytics is the process of examining raw data to uncover trends, patterns, and insights that help businesses make informed decisions. It involves data cleaning, transformation, visualization, and reporting using tools like Excel, SQL, Power BI, Tableau, and Python. Data Analysts play a key role in solving business problems and improving performance through data-driven insights.'
        },
        {
            id: 2,
            question: 'What are the prerequisites for the Data Analytics course?',
            answer:
                'There are no strict prerequisites. Basic computer skills and familiarity with Excel are helpful but not mandatory. The course starts from fundamentals and progresses to advanced analytics. Whether you are a student, working professional, or career switcher, you can learn Data Analytics successfully with proper guidance and practice.'
        },
        {
            id: 3,
            question: 'What is the duration and structure of the course?',
            answer:
                'The complete Data Analytics training is 100–120 hours and covers Excel, SQL, Power BI, Tableau, Python basics, statistics, dashboards, and real-world projects. Duration varies by batch type: weekday (4–5 months), weekend (5–6 months), and fast-track (2–3 months). Practical hands-on sessions and assignments ensure strong job-ready skills.'
        },
        {
            id: 4,
            question: 'Which tools will I learn in this Data Analytics course?',
            answer:
                'You will learn Excel (advanced), SQL for database querying, Power BI and Tableau for dashboards, Python libraries such as Pandas and NumPy for analysis, and industry tools like Jupyter Notebook, Google Sheets, and MySQL. The training ensures you master the most in-demand analytics tools used by companies today.'
        },
        {
            id: 5,
            question: 'Will I get hands-on practice with real datasets?',
            answer:
                'Yes. You will work with real business datasets from domains like finance, marketing, sales, HR, and operations. The course includes practical case studies, data cleaning exercises, dashboard creation, project-based learning, and end-to-end capstone projects that simulate real company requirements.'
        },
        {
            id: 6,
            question: 'Does the course cover Power BI and Tableau?',
            answer:
                'Absolutely. Both Power BI and Tableau are covered in-depth. You will learn dashboards, DAX, data modeling, data connections, storytelling, publishing reports, and best visualization practices. These tools are essential for modern Business Intelligence roles.'
        },
        {
            id: 7,
            question: 'What career opportunities are available after Data Analytics training?',
            answer:
                'After completing the Data Analytics course, you can apply for roles like Data Analyst, Business Analyst, MIS Executive, Reporting Analyst, Power BI Developer, Tableau Developer, and Junior Data Scientist. Companies across industries hire data professionals. Entry-level salaries range from 3–6 LPA, with experienced analysts earning 8–20 LPA or more.'
        },
        {
            id: 8,
            question: 'Can a non-IT person learn Data Analytics?',
            answer:
                'Yes! Many successful Data Analysts come from non-technical backgrounds such as commerce, marketing, finance, HR, and operations. Since Data Analytics focuses on logical thinking and business understanding, non-IT learners can excel with proper training and hands-on practice.'
        },
        {
            id: 9,
            question: 'Is certification included in the Data Analytics course?',
            answer:
                'Yes. After completing the course, you will receive an industry-recognized certification from SevenMentor. The certification helps improve your resume and boosts your chances of getting hired for analytics and reporting roles.'
        },
        {
            id: 10,
            question: 'How is this Data Analytics course different from Data Science?',
            answer:
                'Data Analytics focuses on analyzing existing data, creating reports, dashboards, and solving business problems. Data Science is more advanced and involves machine learning, statistics, and algorithm development. Data Analytics is easier to start with and ideal for beginners or career switchers, while Data Science is a specialized advanced field.'
        },
        {
            id: 11,
            question: 'Do you provide placement assistance for Data Analytics?',
            answer:
                'Yes, we offer 100% placement assistance which includes resume building, mock interviews, project portfolio guidance, aptitude preparation, and interview scheduling with partner companies. Our placement team actively supports students until they secure a job.'
        },
        {
            id: 12,
            question: 'What makes SevenMentor’s Data Analytics training unique?',
            answer:
                'SevenMentor offers a practical, job-oriented program taught by industry experts. You get hands-on training on real datasets, Power BI and Tableau mastery, SQL deep dive, Python basics, capstone projects, flexible batch timings, and strong placement support. Our curriculum is aligned with current industry demands, ensuring you become job-ready.'
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
                <h1>Data Analytics Course Training Course in Mumbai | SevenMentor</h1>
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
                                <p className="text-orange-100 text-sm">Start your Data Analytics today</p>
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
                                <h2 className="text-3xl font-bold text-gray-900">Why Learn Data Analytics?</h2>
                                <p className="text-sm text-gray-600">Benefits of pursuing Data Analytics Course career</p>
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
                                <h2 className="text-3xl font-bold text-gray-900">Data Analytics  Course Syllabus</h2>
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
                mailTo="mumbaileads@sevenmentor.com"
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
                                <p className="text-sm text-gray-600">Everything you need to know about Data Analytics Course</p>
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
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Become a Data Analytics?</h2>
                                <p className="text-xl text-gray-300 mb-8">Join 1500+ students trained by SevenMentor and start your Data Analytics career</p>

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
                    <p className="text-gray-400">© 2025 SevenMentor - Data Analytics Institute Mumbai. All rights reserved.</p>
                    <p className="text-sm text-gray-500 mt-2">Data Analytics | Data Analytics Course | OWASP Top 10 | Burp Suite Training | Mumbai | SevenMentor</p>
                </div>
            </footer>
        </div>
    );
}

