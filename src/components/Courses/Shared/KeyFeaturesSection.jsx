import { Sparkles, BarChart3, Users, Clock, Award, Briefcase, Code, CheckCircle } from 'lucide-react';
import { featuresData } from '../../../data/featuresData';

const iconMap = {
    BarChart3,
    Users,
    Clock,
    Award,
    Briefcase,
    Code
};

const colorClasses = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600' },
    green: { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-600' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', icon: 'text-orange-600' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-600' },
    red: { bg: 'bg-red-50', border: 'border-red-200', icon: 'text-red-600' },
    teal: { bg: 'bg-teal-50', border: 'border-teal-200', icon: 'text-teal-600' }
};

export default function KeyFeaturesSection() {
    return (
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-50 to-white p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-400 rounded-xl flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">{featuresData.title}</h2>
                        <p className="text-sm text-gray-600">{featuresData.subtitle}</p>
                    </div>
                </div>
            </div>

            <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {featuresData.features.map((feature) => {
                        const Icon = iconMap[feature.icon];
                        const colors = colorClasses[feature.color];

                        return (
                            <div
                                key={feature.id}
                                className={`p-6 ${colors.bg} border ${colors.border} rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                            >
                                <div className={`w-12 h-12 ${colors.bg} border ${colors.border} rounded-lg flex items-center justify-center mb-4`}>
                                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <div className="text-2xl font-bold text-gray-900 mb-3">{feature.value}</div>
                                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">Additional Features</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                        {featuresData.additionalFeatures.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
