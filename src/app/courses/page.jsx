'use client';
import Link from 'next/link';
import { courses } from '../../data/courses';
import {
    Clock, Users, Award, Briefcase, ArrowRight, BookOpen
} from 'lucide-react';

export default function CoursesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <section className="bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Courses</h1>
                    <p className="text-xl text-gray-300">Choose from our comprehensive training programs</p>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => {
                        const firstBadge = course.heroData.badges[0];
                        const BadgeIcon = firstBadge?.icon;

                        return (
                            <Link href={`/${course.slug}`} key={course.slug}>
                                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full">
                                    {/* Course Header */}
                                    <div className="bg-gradient-to-br from-orange-600 to-orange-500 p-6 text-white">
                                        <div className="flex items-center gap-2 mb-3">
                                            <BookOpen className="w-6 h-6" />
                                            <span className="text-sm font-semibold uppercase tracking-wide">Professional Course</span>
                                        </div>
                                        <h2 className="text-2xl font-bold mb-2">{course.heroData.title}</h2>
                                        <p className="text-orange-100 text-sm">{course.heroData.subtitle}</p>
                                    </div>

                                    {/* Course Content */}
                                    <div className="p-6">
                                        <p className="text-gray-700 mb-6 line-clamp-3">{course.heroData.description}</p>

                                        {/* Course Stats */}
                                        <div className="grid grid-cols-2 gap-4 mb-6">
                                            {course.stats.slice(0, 4).map((stat, idx) => {
                                                const StatIcon = stat.icon;
                                                return (
                                                    <div key={idx} className="flex items-center gap-2">
                                                        <StatIcon className="w-5 h-5 text-orange-600" />
                                                        <div>
                                                            <div className="text-sm font-bold text-gray-900">{stat.value}</div>
                                                            <div className="text-xs text-gray-600">{stat.label}</div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* CTA Button */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <span className="text-orange-600 font-semibold">View Details</span>
                                            <ArrowRight className="w-5 h-5 text-orange-600" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
