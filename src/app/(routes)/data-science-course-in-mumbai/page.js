'use client';
import { useState } from 'react';
import {
    Brain, Database, BarChart3, TrendingUp, LineChart, PieChart,
    Users, Clock, Award, Briefcase, Star, CheckCircle,
    ChevronDown, ChevronUp, BookOpen, Target, Code,
    Calendar, MapPin, Phone, Mail, Globe, Laptop,
    MessageCircle, FileCheck, ShieldCheck, Server, Eye, Bug, User
} from 'lucide-react';
import EnrollForm from "../../../components/EnrollForm/EnrollForm.jsx"

export default function DataScienceCoursePage() {
    const [expandedModule, setExpandedModule] = useState(null);
    const [expandedFaq, setExpandedFaq] = useState(null);

    // Course Hero Data
    const heroData = {
        title: 'Data Science Course in Mumbai',
        subtitle: 'Master Machine Learning, AI, Python & Data Analytics',
        description: 'Become a certified Data Scientist with hands-on training in Python, Machine Learning, Deep Learning, AI, and Big Data analytics',
        badges: [
            { icon: Clock, label: '20 Weeks', color: 'bg-orange-500' },
            { icon: Users, label: '5000+ Students', color: 'bg-orange-600' },
            { icon: Award, label: 'Certified Program', color: 'bg-orange-700' },
            { icon: Briefcase, label: '100% Job Support', color: 'bg-orange-500' }
        ]
    };

    // Statistics
    const stats = [
        { value: '20 Weeks', label: 'Course Duration', icon: Clock, color: 'orange' },
        { value: '5000+', label: 'Students Trained', icon: Users, color: 'orange' },
        { value: '98%', label: 'Placement Rate', icon: TrendingUp, color: 'orange' },
        { value: '25+', label: 'Industry Projects', icon: Briefcase, color: 'orange' }
    ];

    // About Course
    const aboutCourse = {
        title: 'About Data Science Course',
        description: 'Data Science is revolutionizing industries worldwide, from healthcare to finance, e-commerce to manufacturing. Our comprehensive Data Science course in Mumbai equips you with cutting-edge skills in Python programming, Machine Learning, Deep Learning, Natural Language Processing, and Big Data technologies to become an industry-ready Data Scientist.',
        highlights: [
            'Learn from certified Data Scientists with 10+ years of industry experience',
            'Hands-on training with real-world datasets and business problems',
            'Master Python, R, SQL, TensorFlow, PyTorch, Scikit-learn',
            'Work on 25+ live projects including Kaggle competitions',
            'Get certified in IBM Data Science, Google Cloud ML',
            'Learn advanced ML algorithms, Neural Networks, and AI techniques'
        ],
        sections: [
            {
                heading: 'What is Data Science?',
                content: 'Data Science is a multidisciplinary field that combines statistics, mathematics, programming, and domain expertise to extract meaningful insights from structured and unstructured data. Data Scientists use advanced analytics, machine learning algorithms, and predictive models to solve complex business problems, make data-driven decisions, and create intelligent systems that learn from data.'
            },
            {
                heading: 'Why Choose Data Science as a Career?',
                content: 'Data Science is one of the highest-paying and most in-demand careers globally. Mumbai, as India\'s financial capital, has thousands of companies actively hiring Data Scientists. From startups to Fortune 500 companies, organizations are investing heavily in data analytics and AI. Average salaries range from ₹6-15 LPA for freshers and ₹20-50 LPA for experienced professionals. This course prepares you for roles like Data Scientist, ML Engineer, AI Specialist, Business Analyst, and Data Engineer.'
            },
            {
                heading: 'Best Data Science Training in Mumbai',
                content: 'Our Data Science training institute in Mumbai offers industry-aligned curriculum designed by experts from top tech companies. Located in Andheri East with easy access from all parts of Mumbai, we provide state-of-the-art infrastructure, cloud-based labs, and access to premium datasets. Students work on projects from Mumbai-based companies in finance, e-commerce, healthcare, and entertainment sectors, gaining practical experience relevant to local industry needs.'
            }
        ]
    };

    // Syllabus
    const syllabus = {
        modules: [
            {
                id: 1,
                title: 'Introduction to Data Science & Analytics',
                duration: '1 Week',
                topics: [
                    'What is Data Science? Applications across industries',
                    'Data Science Life Cycle and Methodology',
                    'Types of Data: Structured, Unstructured, Semi-structured',
                    'Data Science Tools and Technologies Overview',
                    'Career Paths: Data Scientist, ML Engineer, Data Analyst',
                    'Setting up Python Environment (Anaconda, Jupyter, VS Code)'
                ]
            },
            {
                id: 2,
                title: 'Python Programming for Data Science',
                duration: '3 Weeks',
                topics: [
                    'Python Fundamentals: Variables, Data Types, Operators',
                    'Control Structures: Loops, Conditionals, Functions',
                    'Data Structures: Lists, Tuples, Dictionaries, Sets',
                    'Object-Oriented Programming in Python',
                    'File Handling and Exception Handling',
                    'Working with Libraries: NumPy, Pandas, Matplotlib',
                    'Advanced Python: Lambda, Map, Filter, Comprehensions'
                ]
            },
            {
                id: 3,
                title: 'Statistics & Mathematics for Data Science',
                duration: '2 Weeks',
                topics: [
                    'Descriptive Statistics: Mean, Median, Mode, Variance',
                    'Probability Theory and Distributions',
                    'Inferential Statistics and Hypothesis Testing',
                    'Correlation and Regression Analysis',
                    'Linear Algebra: Matrices, Vectors, Eigenvalues',
                    'Calculus for Machine Learning',
                    'Bayesian Statistics and A/B Testing'
                ]
            },
            {
                id: 4,
                title: 'Data Manipulation & Analysis with Pandas',
                duration: '2 Weeks',
                topics: [
                    'Introduction to Pandas DataFrames and Series',
                    'Data Loading: CSV, Excel, JSON, SQL databases',
                    'Data Cleaning: Handling Missing Values, Duplicates',
                    'Data Transformation and Feature Engineering',
                    'Grouping, Aggregation, and Pivot Tables',
                    'Time Series Data Analysis',
                    'Merging and Joining Datasets'
                ]
            },
            {
                id: 5,
                title: 'Data Visualization with Python',
                duration: '1 Week',
                topics: [
                    'Matplotlib: Line plots, Bar charts, Histograms',
                    'Seaborn: Statistical visualizations and heatmaps',
                    'Plotly: Interactive dashboards and 3D plots',
                    'Data Storytelling and Visual Analytics',
                    'Creating Professional Reports and Dashboards',
                    'Visualization Best Practices'
                ]
            },
            {
                id: 6,
                title: 'Machine Learning Fundamentals',
                duration: '3 Weeks',
                topics: [
                    'Introduction to Machine Learning: Types and Applications',
                    'Supervised vs Unsupervised vs Reinforcement Learning',
                    'Linear Regression and Multiple Regression',
                    'Logistic Regression for Classification',
                    'Decision Trees and Random Forests',
                    'Support Vector Machines (SVM)',
                    'K-Nearest Neighbors (KNN)',
                    'Model Evaluation: Accuracy, Precision, Recall, F1-Score'
                ]
            },
            {
                id: 7,
                title: 'Advanced Machine Learning',
                duration: '2 Weeks',
                topics: [
                    'Ensemble Methods: Bagging, Boosting, Stacking',
                    'Gradient Boosting: XGBoost, LightGBM, CatBoost',
                    'Clustering: K-Means, Hierarchical, DBSCAN',
                    'Dimensionality Reduction: PCA, t-SNE',
                    'Association Rule Learning: Apriori, FP-Growth',
                    'Anomaly Detection Techniques',
                    'Hyperparameter Tuning: Grid Search, Random Search'
                ]
            },
            {
                id: 8,
                title: 'Deep Learning & Neural Networks',
                duration: '3 Weeks',
                topics: [
                    'Introduction to Artificial Neural Networks (ANN)',
                    'TensorFlow and Keras Framework',
                    'Convolutional Neural Networks (CNN) for Image Recognition',
                    'Recurrent Neural Networks (RNN) and LSTM',
                    'Transfer Learning with Pre-trained Models',
                    'Computer Vision Applications',
                    'Natural Language Processing with Deep Learning'
                ]
            },
            {
                id: 9,
                title: 'Natural Language Processing (NLP)',
                duration: '2 Weeks',
                topics: [
                    'Text Preprocessing: Tokenization, Stemming, Lemmatization',
                    'Bag of Words and TF-IDF',
                    'Word Embeddings: Word2Vec, GloVe',
                    'Sentiment Analysis and Text Classification',
                    'Named Entity Recognition (NER)',
                    'Topic Modeling with LDA',
                    'Transformers and BERT for NLP'
                ]
            },
            {
                id: 10,
                title: 'Big Data & Cloud Technologies',
                duration: '1 Week',
                topics: [
                    'Introduction to Big Data and Hadoop Ecosystem',
                    'Apache Spark for Large-scale Data Processing',
                    'SQL and NoSQL Databases',
                    'Cloud Platforms: AWS, Google Cloud, Azure',
                    'MLOps and Model Deployment',
                    'Docker and Kubernetes for ML Models'
                ]
            }
        ]
    };

    // Key Features
    const features = [
        {
            icon: Brain,
            title: 'Expert Training',
            description: 'Learn from Data Scientists with 10+ years at top tech companies',
            color: 'orange'
        },
        {
            icon: Laptop,
            title: 'Cloud Labs',
            description: 'Access to AWS, Google Cloud labs with premium datasets',
            color: 'orange'
        },
        {
            icon: Award,
            title: 'Certification',
            description: 'IBM & Google Cloud ML certified training program',
            color: 'orange'
        },
        {
            icon: Briefcase,
            title: 'Job Assistance',
            description: '100% placement support with 300+ hiring partners in Mumbai',
            color: 'orange'
        },
        {
            icon: Code,
            title: 'Live Projects',
            description: '25+ real-world projects from finance, e-commerce, healthcare',
            color: 'orange'
        },
        {
            icon: Users,
            title: 'Small Batches',
            description: 'Limited batch size with personalized mentorship',
            color: 'orange'
        }
    ];

    // Eligibility
    const eligibility = [
        { label: 'BE/B.Tech in any stream', eligible: true },
        { label: 'BCA/MCA/BSc/MSc Students', eligible: true },
        { label: 'Any Graduate with analytical mindset', eligible: true },
        { label: 'IT Professionals wanting to transition', eligible: true },
        { label: 'Business Analysts and Data Analysts', eligible: true },
        { label: 'Working professionals seeking career growth', eligible: true }
    ];

    // Tools Covered
    const tools = [
        { name: 'Python', icon: Code },
        { name: 'TensorFlow', icon: Brain },
        { name: 'Pandas', icon: Database },
        { name: 'Scikit-learn', icon: LineChart },
        { name: 'Jupyter', icon: BookOpen },
        { name: 'AWS', icon: Server },
        { name: 'Tableau', icon: BarChart3 },
        { name: 'Apache Spark', icon: Globe }
    ];

    // Batch Schedule
    const batches = [
        {
            id: 'DS-2025-01',
            startDate: '15/01/2025',
            mode: 'Online',
            timing: 'Weekday Evening (Mon-Fri)',
            schedule: '7:00 PM - 9:00 PM',
            location: 'Mumbai',
            seats: 'Available'
        },
        {
            id: 'DS-2025-02',
            startDate: '20/01/2025',
            mode: 'Offline',
            timing: 'Weekend (Sat-Sun)',
            schedule: '10:00 AM - 5:00 PM',
            location: 'Andheri East, Mumbai',
            seats: 'Filling Fast'
        },
        {
            id: 'DS-2025-03',
            startDate: '27/01/2025',
            mode: 'Hybrid',
            timing: 'Fast Track (Mon-Fri)',
            schedule: '9:00 AM - 5:00 PM',
            location: 'Mumbai',
            seats: 'Available'
        },
        {
            id: 'DS-2025-04',
            startDate: '05/02/2025',
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
            name: 'Rahul Mehta',
            designation: 'Data Scientist at Reliance Jio',
            rating: 5,
            avatar: 'RM',
            review: 'Outstanding course! The practical approach with real Mumbai company projects helped me land a Data Scientist role at Jio. The instructors are incredibly knowledgeable and supportive.'
        },
        {
            name: 'Priyanka Iyer',
            designation: 'ML Engineer at Flipkart',
            rating: 5,
            avatar: 'PI',
            review: 'Best Data Science training in Mumbai! The curriculum is industry-aligned, and the placement support is excellent. Got placed at Flipkart with 12 LPA package within 45 days.'
        },
        {
            name: 'Sanjay Joshi',
            designation: 'Senior Data Analyst at HDFC Bank',
            rating: 5,
            avatar: 'SJ',
            review: 'The hands-on projects and expert mentorship transformed my career. From a non-IT background, I became a Data Analyst at HDFC Bank. Highly recommend this course!'
        },
        {
            name: 'Neha Sharma',
            designation: 'AI Specialist at TCS Digital',
            rating: 5,
            avatar: 'NS',
            review: 'Comprehensive coverage of ML, Deep Learning, and NLP. The cloud labs and Kaggle projects gave me confidence to tackle real-world problems. Thank you for this amazing journey!'
        }
    ];

    // FAQs
    const faqs = [
        {
            id: 1,
            question: 'What are the prerequisites for the Data Science course?',
            answer: 'Basic knowledge of mathematics and statistics is helpful. We teach Python from scratch, so no prior programming experience is required. Any graduate with analytical thinking can join.'
        },
        {
            id: 2,
            question: 'What is the duration of the Data Science course?',
            answer: 'The complete course duration is 20 weeks (approximately 5 months). This includes theoretical sessions, hands-on labs, 25+ live projects, and certification preparation for IBM and Google Cloud.'
        },
        {
            id: 3,
            question: 'Which certifications will I be prepared for?',
            answer: 'Our course prepares you for IBM Data Science Professional Certificate, Google Cloud Machine Learning Engineer certification, and TensorFlow Developer Certificate.'
        },
        {
            id: 4,
            question: 'Do you provide access to datasets and cloud platforms?',
            answer: 'Yes! Students get access to premium datasets, AWS credits, Google Cloud labs, Kaggle competitions, and GitHub repositories with real-world projects.'
        },
        {
            id: 5,
            question: 'What is the fee structure for the Data Science course?',
            answer: 'Our course fee is competitive and affordable with flexible EMI options available. Contact our admissions team for detailed fee structure and early bird discounts.'
        },
        {
            id: 6,
            question: 'Do you provide job placement assistance?',
            answer: 'Yes, we provide 100% job placement assistance including resume building, mock interviews, portfolio projects, and direct referrals to 300+ hiring partners across Mumbai including Reliance, TCS, Infosys, and startups.'
        },
        {
            id: 7,
            question: 'What job roles can I apply for after this course?',
            answer: 'After completing this course, you can apply for Data Scientist, Machine Learning Engineer, AI Specialist, Data Analyst, Business Intelligence Analyst, Deep Learning Engineer, and NLP Engineer roles.'
        },
        {
            id: 8,
            question: 'Is the course suitable for working professionals?',
            answer: 'Absolutely! We offer flexible timings including weekday evenings (7-9 PM) and weekend batches specifically for working professionals. Online and hybrid modes are also available.'
        },
        {
            id: 9,
            question: 'Will I work on real-world projects?',
            answer: 'Yes! You will work on 25+ live projects including customer churn prediction, recommendation systems, image classification, sentiment analysis, fraud detection, and participate in Kaggle competitions.'
        },
        {
            id: 10,
            question: 'What tools and technologies will I learn?',
            answer: 'You will master Python, NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow, Keras, PyTorch, SQL, MongoDB, Apache Spark, AWS, Google Cloud, Tableau, Power BI, and Git.'
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
                <h1>Data Science Course in Mumbai - Best Machine Learning & AI Training Institute</h1>
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
                    href="https://api.whatsapp.com/send?phone=+918421176876&text=Hi+I+am+looking+for+Data+Science+Course+in+Mumbai"
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
                            <Brain className="w-5 h-5 text-orange-300" />
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
                                <div className="text-2xl font-bold text-orange-700">20 Weeks</div>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                                <div className="text-sm text-orange-600 font-medium">Modules</div>
                                <div className="text-2xl font-bold text-orange-700">{syllabus.modules.length}</div>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                                <div className="text-sm text-orange-600 font-medium">Projects</div>
                                <div className="text-2xl font-bold text-orange-700">25+</div>
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
                    course='Data Science'
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
                                <p className="text-sm text-gray-600">Master industry-standard data science tools</p>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Data Science Career?</h2>
                        <p className="text-xl text-orange-200 mb-8">Join 5000+ students and become a certified Data Scientist</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                            <a href="tel:022-48904395" className="flex items-center justify-center gap-2 bg-white text-orange-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300">
                                <Phone className="w-5 h-5" />
                                022-48904395
                            </a>
                            <a href="mailto:info@datascience-mumbai.com" className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300">
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
                    <p className="text-gray-400">© 2025 Data Science Training Institute Mumbai. All rights reserved.</p>
                    <p className="text-sm text-gray-500 mt-2">Best Data Science Course | Machine Learning Training | Python Certification | Mumbai</p>
                </div>
            </footer>
        </div>
    );
}
