import { useState } from 'react';
import { List, ChevronDown, ChevronUp, Clock, CheckCircle } from 'lucide-react';
import { syllabusData } from '../../../data/syllabusData';

export default function SyllabusSection() {
    const [expandedModule, setExpandedModule] = useState(1);

    return (
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-50 to-white p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl flex items-center justify-center">
                        <List className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">{syllabusData.title}</h2>
                        <p className="text-sm text-gray-600">{syllabusData.subtitle}</p>
                    </div>
                </div>
            </div>

            <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-4 mb-8">
                    <div className="bg-orange-50 border border-orange-200 px-6 py-3 rounded-xl">
                        <div className="text-sm text-orange-600 font-medium">Total Duration</div>
                        <div className="text-2xl font-bold text-orange-700">{syllabusData.totalDuration}</div>
                    </div>
                    <div className="bg-green-50 border border-green-200 px-6 py-3 rounded-xl">
                        <div className="text-sm text-green-600 font-medium">Modules</div>
                        <div className="text-2xl font-bold text-green-700">{syllabusData.modules.length}</div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 px-6 py-3 rounded-xl">
                        <div className="text-sm text-blue-600 font-medium">Certification</div>
                        <div className="text-sm font-bold text-blue-700 mt-1">Upon Completion</div>
                    </div>
                </div>

                <div className="space-y-4">
                    {syllabusData.modules.map((module) => (
                        <div
                            key={module.id}
                            className="border border-gray-200 rounded-xl overflow-hidden hover:border-orange-300 transition-colors duration-300"
                        >
                            <button
                                onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                                className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-400 rounded-lg flex items-center justify-center text-white font-bold">
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
                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
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
    );
}
