import { GraduationCap, CheckCircle, Info } from 'lucide-react';
import { coursePageData } from '../../../data/coursePageData';

export default function EligibilitySection() {
    const { eligibility, proficiency } = coursePageData;

    return (
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-50 to-white p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-400 rounded-xl flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">{eligibility.title}</h2>
                        <p className="text-sm text-gray-600">Who can enroll in this course</p>
                    </div>
                </div>
            </div>

            <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4 text-lg">Eligible Candidates</h3>
                        <div className="space-y-3">
                            {eligibility.requirements.map((req, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl"
                                >
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <span className="text-gray-800 font-medium">{req.label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl flex gap-3">
                            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <p className="text-sm text-gray-700">{eligibility.additionalInfo}</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900 mb-4 text-lg">{proficiency.title}</h3>
                        <div className="space-y-3">
                            {proficiency.skills.map((skill, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-start gap-3 p-4 bg-orange-50 border border-orange-200 rounded-xl"
                                >
                                    <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
