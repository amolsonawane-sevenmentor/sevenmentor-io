import { Star, CheckCircle, TrendingUp, Award, Users, Briefcase } from 'lucide-react';
import { reviewsData } from '../../../data/reviewsData';

export default function ReviewsSection() {
    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, idx) => (
            <Star
                key={idx}
                className={`w-4 h-4 ${idx < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    }`}
            />
        ));
    };

    return (
        <section className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-yellow-50 to-white p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-yellow-400 rounded-xl flex items-center justify-center">
                        <Star className="w-6 h-6 text-white fill-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">{reviewsData.title}</h2>
                        <p className="text-sm text-gray-600">{reviewsData.subtitle}</p>
                    </div>
                </div>
            </div>

            <div className="p-6 md:p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl border border-yellow-200">
                        <div className="flex items-center gap-2 mb-2">
                            <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                            <span className="text-3xl font-bold text-gray-900">{reviewsData.averageRating}</span>
                        </div>
                        <p className="text-sm text-gray-600">Average Rating</p>
                        <p className="text-xs text-gray-500 mt-1">{reviewsData.totalReviews} reviews</p>
                    </div>

                    {reviewsData.testimonialHighlights.map((highlight, idx) => {
                        const icons = [TrendingUp, Award, Users, Briefcase];
                        const Icon = icons[idx];
                        const colors = ['green', 'blue', 'orange', 'purple'];
                        const color = colors[idx];

                        return (
                            <div
                                key={idx}
                                className={`bg-${color}-50 p-6 rounded-xl border border-${color}-200`}
                            >
                                <Icon className={`w-6 h-6 text-${color}-600 mb-2`} />
                                <p className="text-sm text-gray-700 font-medium">{highlight}</p>
                            </div>
                        );
                    })}
                </div>

                <div className="mb-8">
                    <h3 className="font-bold text-gray-900 mb-4 text-lg">Rating Distribution</h3>
                    <div className="space-y-2">
                        {Object.entries(reviewsData.ratingDistribution)
                            .reverse()
                            .map(([stars, count]) => {
                                const percentage = (count / reviewsData.totalReviews) * 100;
                                return (
                                    <div key={stars} className="flex items-center gap-4">
                                        <div className="flex items-center gap-1 w-20">
                                            <span className="text-sm font-medium text-gray-700">{stars}</span>
                                            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        </div>
                                        <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500"
                                                style={{ width: `${percentage}%` }}
                                            ></div>
                                        </div>
                                        <span className="text-sm text-gray-600 w-12 text-right">{count}</span>
                                    </div>
                                );
                            })}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {reviewsData.reviews.map((review) => (
                        <div
                            key={review.id}
                            className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                    {review.avatar}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="font-bold text-gray-900">{review.name}</h4>
                                        {review.verified && (
                                            <CheckCircle className="w-4 h-4 text-green-500 fill-green-500" />
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-600 mb-2">{review.designation}</p>
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-0.5">{renderStars(review.rating)}</div>
                                        <span className="text-xs text-gray-500">{review.date}</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">{review.review}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center">
                    <button className="bg-gradient-to-r from-orange-500 to-orange-400 hover:from-orange-600 hover:to-orange-500 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg">
                        View All Reviews
                    </button>
                </div>
            </div>
        </section>
    );
}
