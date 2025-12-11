import { Star } from 'lucide-react';

export default function CourseCard({ course }) {
    // Render stars based on rating
    const renderStars = () => {
        const fullStars = Math.floor(course.rating);
        const stars = [];

        for (let i = 0; i < 5; i++) {
            stars.push(
                <Star
                    key={i}
                    className={`w-4 h-4 ${i < fullStars ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                />
            );
        }

        return stars;
    };

    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full">
            {/* Badge */}
            {course.badge && (
                <div className="relative">
                    <div className="absolute top-4 left-0 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-r-full shadow-md z-10">
                        {course.badge}
                    </div>
                </div>
            )}

            {/* Card Content */}
            <div className="p-8 pt-16">
                {/* Course Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors min-h-[64px]">
                    {course.title}
                </h3>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-6">
                    {renderStars()}
                </div>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 min-h-[96px] line-clamp-4">
                    {course.description || "Enhance your skills with our comprehensive training program designed by industry experts."}
                </p>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                    Explore Now →
                </button>
            </div>
        </div>
    );
}
