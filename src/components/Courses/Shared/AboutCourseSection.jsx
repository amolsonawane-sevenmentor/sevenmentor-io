import { CheckCircle, BookOpen, Target, Lightbulb } from 'lucide-react';
import { coursePageData } from '../../../data/coursePageData';

export default function AboutCourseSection() {
    const { about } = coursePageData;

    return (
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-50 to-white p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">{about.title}</h2>
                        <p className="text-sm text-gray-600">Everything you need to know</p>
                    </div>
                </div>
            </div>

            <div className="p-6 md:p-8 space-y-8">
                <div className="prose max-w-none">
                    <p className="text-gray-700 leading-relaxed text-lg">
                        {about.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {about.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-green-50 border border-green-100 rounded-xl">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-800 text-sm font-medium">{highlight}</span>
                        </div>
                    ))}
                </div>

                {about.sections.map((section, idx) => (
                    <div key={idx} className="border-l-4 border-orange-400 pl-6 py-2">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            {idx === 0 && <Target className="w-5 h-5 text-orange-500" />}
                            {idx === 1 && <Lightbulb className="w-5 h-5 text-orange-500" />}
                            {idx === 2 && <BookOpen className="w-5 h-5 text-orange-500" />}
                            {section.heading}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">{section.content}</p>
                    </div>
                ))}

                <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-6 rounded-xl border border-orange-100">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">
                        {coursePageData.onlineClasses.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        {coursePageData.onlineClasses.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                        {coursePageData.onlineClasses.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                <span className="text-sm text-gray-700">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
