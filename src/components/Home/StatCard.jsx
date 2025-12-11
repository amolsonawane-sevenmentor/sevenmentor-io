export default function StatCard({ stat }) {
    return (
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg p-8 text-center transform hover:scale-105 transition-transform duration-300 shadow-lg">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
            </h3>
            <p className="text-white text-lg font-medium opacity-90">
                {stat.label}
            </p>
        </div>
    );
}
