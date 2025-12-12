import HeroSection from './HeroSection';
import StatCard from './StatCard';
import FeatureCard from './FeatureCard';
import CourseSection from './CourseSection';
import {
  statistics,
  features,
  getCoursesByCategory,
  categories,
} from './CourseCardData';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-100 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide the best learning experience with industry experts and comprehensive support
            </p>
            <div className="w-24 h-1 bg-orange-600 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <div className="bg-gray-50">
        <CourseSection
          title="Popular Courses"
          courses={getCoursesByCategory('Popular')}
          description="Explore our most in-demand courses designed to boost your career"
        />
      </div>

      {/* Trending Courses */}
      <div className="bg-white">
        <CourseSection
          title="Trending Courses"
          courses={getCoursesByCategory('Trending')}
          description="Stay ahead with the latest technology trends and skills"
        />
      </div>

      {/* Networking Courses */}
      <div className="bg-gray-50">
        <CourseSection
          title="Networking Courses"
          courses={getCoursesByCategory('Networking')}
          description="Master networking fundamentals and advanced concepts"
        />
      </div>

      {/* Software Courses */}
      <div className="bg-white">
       
      </div>

      {/* Data Science Courses */}
      <div className="bg-gray-50">
        <CourseSection
          title="Data Science Courses"
          courses={getCoursesByCategory('Data Science')}
          description="Unlock the power of data with our comprehensive data science programs"
        />
      </div>

      {/* SAP Courses */}
      <div className="bg-white">
        <CourseSection
          title="SAP Courses"
          courses={getCoursesByCategory('SAP')}
          description="Get certified in SAP modules and enhance your enterprise software skills"
        />
      </div>

      {/* CAD Courses */}
      <div className="bg-gray-50">

      </div>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8">
            Join thousands of successful students and transform your career today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg transform hover:scale-105">
              Browse All Courses
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
