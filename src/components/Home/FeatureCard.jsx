import { Award, Users, Clock, Briefcase } from 'lucide-react';

const iconMap = {
    Award,
    Users,
    Clock,
    Briefcase,
};

export default function FeatureCard({ feature }) {
    const Icon = iconMap[feature.icon] || Award;

    return (
        <div className="bg-white rounded-lg p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 group">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                <Icon className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
                {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
                {feature.description}
            </p>
        </div>
    );
}
