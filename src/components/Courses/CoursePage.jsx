"use client";
import { useState } from 'react';
import { BookOpen, List, Sparkles, GraduationCap, Award, Calendar, Star, HelpCircle, Menu, X } from 'lucide-react';
import HeroSection from './Shared/HeroSection';
import AboutCourseSection from './Shared/AboutCourseSection';
import SyllabusSection from './Shared/SyllabusSection';
import KeyFeaturesSection from './Shared/KeyFeaturesSection';
import EligibilitySection from './Shared/EligibilitySection';
import CertificationSection from './Shared/CertificationSection';
import BatchScheduleSection from './Shared/BatchScheduleSection';
import ReviewsSection from './Shared/ReviewSection';
import FAQSection from './Shared/FAQSection';

const navigationItems = [
    { id: 'about', label: 'About Course', icon: BookOpen },
    { id: 'syllabus', label: 'Course Syllabus', icon: List },
    { id: 'features', label: 'Key Features', icon: Sparkles },
    { id: 'eligibility', label: 'Eligibility', icon: GraduationCap },
    { id: 'certification', label: 'Certification', icon: Award },
    { id: 'schedule', label: 'Batch Schedule', icon: Calendar },
    { id: 'reviews', label: 'Student Reviews', icon: Star },
    { id: 'faq', label: 'FAQ', icon: HelpCircle }
];

export default function CoursePage({ courseData }) {
    const [activeSection, setActiveSection] = useState('about');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Use course data if provided, otherwise use default
    const heroData = courseData || {
        title: 'Data Science Course',
        subtitle: 'Master Data Science & Machine Learning',
        description: 'Transform your career with our comprehensive Data Science training program. Learn Python, Machine Learning, AI, and Big Data technologies from industry experts.',
        image: '/assets/course-hero-bg.jpg'
    };

    const scrollToSection = (sectionId) => {
        setActiveSection(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setMobileMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <HeroSection hero={heroData} />

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden fixed top-20 right-4 z-50 bg-orange-500 text-white p-3 rounded-full shadow-lg"
            >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar Navigation */}
                    <aside className={`lg:w-64 flex-shrink-0 ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}>
                        <div className="lg:sticky lg:top-24 bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                            <div className="bg-gradient-to-r from-orange-500 to-orange-400 p-4">
                                <h3 className="text-white font-bold text-lg">Course Navigation</h3>
                            </div>
                            <nav className="p-2">
                                {navigationItems.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <button
                                            key={item.id}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 mb-1 ${activeSection === item.id
                                                    ? 'bg-orange-50 text-orange-600 font-semibold'
                                                    : 'text-gray-700 hover:bg-gray-50'
                                                }`}
                                        >
                                            <Icon className="w-5 h-5" />
                                            <span className="text-sm">{item.label}</span>
                                            {activeSection === item.id && (
                                                <div className="ml-auto w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                                            )}
                                        </button>
                                    );
                                })}
                            </nav>
                        </div>

                        {/* CTA Box */}
                        <div className="hidden lg:block mt-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white">
                            <h4 className="font-bold text-lg mb-2">Ready to Start?</h4>
                            <p className="text-sm text-gray-300 mb-4">
                                Join 5000+ students and kickstart your {heroData.title} career today
                            </p>
                            <button className="w-full bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg">
                                Enroll Now
                            </button>
                        </div>
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 space-y-8">
                        <div id="about">
                            <AboutCourseSection />
                        </div>
                        <div id="syllabus">
                            <SyllabusSection />
                        </div>
                        <div id="features">
                            <KeyFeaturesSection />
                        </div>
                        <div id="eligibility">
                            <EligibilitySection />
                        </div>
                        <div id="certification">
                            <CertificationSection />
                        </div>
                        <div id="schedule">
                            <BatchScheduleSection />
                        </div>
                        <div id="reviews">
                            <ReviewsSection />
                        </div>
                        <div id="faq">
                            <FAQSection />
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
