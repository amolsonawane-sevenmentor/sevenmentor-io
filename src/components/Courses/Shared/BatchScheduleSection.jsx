import { Calendar, Clock, MapPin, Briefcase, Zap } from 'lucide-react';
import { scheduleData } from '../../../data/scheduleData.js';

const iconMap = {
    Briefcase,
    Calendar,
    Zap
};

export default function BatchScheduleSection() {
    return (
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-50 to-white p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-400 rounded-xl flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">{scheduleData.title}</h2>
                        <p className="text-sm text-gray-600">{scheduleData.subtitle}</p>
                    </div>
                </div>
            </div>

            <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                    {scheduleData.batchTypes.map((type, idx) => {
                        const Icon = iconMap[type.icon];
                        return (
                            <div
                                key={idx}
                                className="p-4 bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-xl"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <Icon className="w-5 h-5 text-orange-600" />
                                    <h3 className="font-bold text-gray-900">{type.type}</h3>
                                </div>
                                <p className="text-sm text-gray-600 mb-1">{type.description}</p>
                                <div className="flex items-center gap-2 text-sm text-gray-700">
                                    <Clock className="w-4 h-4 text-orange-500" />
                                    {type.timing}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-200">Batch ID</th>
                                <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-200">Start Date</th>
                                <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-200">Mode</th>
                                <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-200">Timing</th>
                                <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-200">Location</th>
                                <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-200">Status</th>
                                <th className="text-left p-4 font-bold text-gray-900 border-b-2 border-gray-200">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scheduleData.upcomingBatches.map((batch) => (
                                <tr key={batch.id} className="border-b border-gray-100 hover:bg-orange-50 transition-colors duration-200">
                                    <td className="p-4">
                                        <span className="font-semibold text-gray-900">{batch.batchId}</span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-gray-500" />
                                            <span className="text-gray-700">{batch.startDate}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${batch.mode === 'Online' ? 'bg-blue-100 text-blue-700' :
                                                batch.mode === 'Offline' ? 'bg-green-100 text-green-700' :
                                                    'bg-purple-100 text-purple-700'
                                            }`}>
                                            {batch.mode}
                                        </span>
                                    </td>
                                    <td className="p-4 text-gray-700 text-sm">{batch.timing}</td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-gray-500" />
                                            <span className="text-gray-700">{batch.schedule}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${batch.status === 'open' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                                            }`}>
                                            {batch.seats}
                                        </span>
                                    </td>
                                    <td className="p-4">
                                        <button className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300">
                                            Book Now
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                    <p className="text-sm text-gray-700">
                        <span className="font-semibold">Note:</span> {scheduleData.note}
                    </p>
                </div>
            </div>
        </section>
    );
}
