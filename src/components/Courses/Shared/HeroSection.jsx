import { Search } from 'lucide-react';

export default function HeroSection({ hero }) {
    if (!hero) return null;

    return (
        <section className="relative bg-gray-900 text-white py-20 px-4 overflow-hidden">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-cover bg-center z-0 opacity-20" style={{ backgroundImage: `url(${hero.image})` }}></div>

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="mb-4">
                        <h2 className="text-xl font-bold text-white tracking-widest">{hero.subtitle}</h2>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            {hero.title}
                        </h1>
                    </div>

                    <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg">
                        {hero.description}
                    </p>

                    <div className="flex gap-4">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded transition shadow-lg">
                            Download Brochure
                        </button>
                        <button className="bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white font-bold px-8 py-3 rounded transition">
                            Contact Us
                        </button>
                    </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-2xl max-w-md ml-auto w-full">
                    <h3 className="text-2xl font-bold mb-6 text-center text-white">Enquiry Now</h3>
                    <form className="space-y-4">
                        <input type="text" placeholder="Name" className="w-full px-4 py-3 bg-white/80 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-500" />
                        <input type="email" placeholder="Email" className="w-full px-4 py-3 bg-white/80 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-500" />
                        <input type="tel" placeholder="Phone" className="w-full px-4 py-3 bg-white/80 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900 placeholder-gray-500" />
                        <select className="w-full px-4 py-3 bg-white/80 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-900">
                            <option value="">Select Course</option>
                            <option value="data-analytics">Data Analytics</option>
                            {/* We can make this dynamic later */}
                        </select>
                        <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded transition mt-4">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}