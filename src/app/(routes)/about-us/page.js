import {
  Shield, Target, Users, Award, TrendingUp, Zap,
  BookOpen, CheckCircle, Star, Laptop, Globe,
  Building, Briefcase, GraduationCap, Heart, Trophy,
  Lightbulb, Clock, MessageSquare, Phone, MapPin
} from 'lucide-react';

export default function AboutUsPage() {
  const stats = [
    { value: '2000+', label: 'Students Trained', icon: Users, color: 'from-orange-500 to-orange-600' },
    { value: '100+', label: 'Batches Completed', icon: TrendingUp, color: 'from-blue-500 to-blue-600' },
    { value: '8+', label: 'Years Experience', icon: Award, color: 'from-green-500 to-green-600' },
    { value: '95%', label: 'Placement Rate', icon: Trophy, color: 'from-purple-500 to-purple-600' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence in Training',
      description: 'We are committed to delivering world-class cyber security training that prepares students for real-world challenges and career success.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Heart,
      title: 'Student-Centric Approach',
      description: 'Every student is unique. We provide personalized attention, flexible learning options, and continuous support throughout your journey.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Learning',
      description: 'We constantly update our curriculum with the latest tools, techniques, and industry best practices to keep you ahead of the curve.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Integrity & Trust',
      description: 'We maintain the highest standards of integrity in our training programs, ensuring transparency, quality, and ethical practices.',
      color: 'from-green-500 to-green-600'
    }
  ];

  const features = [
    {
      icon: GraduationCap,
      title: 'Expert Instructors',
      description: 'Learn from certified professionals with 8+ years of hands-on experience in enterprise security operations',
      stats: '8+ Years Experience'
    },
    {
      icon: Laptop,
      title: 'Hands-on Labs',
      description: 'Practice with real SIEM tools, security platforms, and simulated attack scenarios in our state-of-the-art labs',
      stats: '100+ Lab Exercises'
    },
    {
      icon: Award,
      title: 'Industry Certifications',
      description: 'Get certified and prepare for globally recognized certifications like CEH, CHFI, CySA+, and Security+',
      stats: 'Multiple Certifications'
    },
    {
      icon: Briefcase,
      title: 'Placement Support',
      description: 'Dedicated placement team with 150+ hiring partners actively recruiting our trained security professionals',
      stats: '150+ Partners'
    },
    {
      icon: Users,
      title: 'Flexible Batches',
      description: 'Weekday, weekend, and fast-track batches available to suit working professionals and students',
      stats: 'Multiple Time Slots'
    },
    {
      icon: Globe,
      title: 'Online & Offline',
      description: 'Choose between classroom training in Mumbai or live online sessions with the same quality of instruction',
      stats: 'Hybrid Learning'
    }
  ];

  const team = [
    {
      name: 'Industry Expert Trainers',
      role: 'Certified Security Professionals',
      description: 'Our trainers are active security professionals working in enterprise SOC environments with certifications like CEH, CHFI, OSCP, and CISSP.',
      icon: Shield
    },
    {
      name: 'Career Counselors',
      role: 'Placement Team',
      description: 'Dedicated career counselors who guide you through resume building, interview preparation, and job placement in top companies.',
      icon: Briefcase
    },
    {
      name: 'Technical Support',
      role: 'Lab Assistance Team',
      description: 'Technical experts available to help you with lab setup, tool installation, and troubleshooting during your training.',
      icon: Laptop
    }
  ];

  const achievements = [
    {
      title: '2000+ Success Stories',
      description: 'Over 2000 students have successfully completed our training programs and are now working in leading organizations across India and globally.',
      icon: Users,
      color: 'bg-orange-50 border-orange-200 hover:border-orange-400'
    },
    {
      title: '100+ Corporate Batches',
      description: 'Successfully delivered specialized corporate training programs for companies looking to upskill their IT and security teams.',
      icon: Building,
      color: 'bg-blue-50 border-blue-200 hover:border-blue-400'
    },
    {
      title: 'Industry Recognition',
      description: 'Recognized as one of Mumbai\'s leading cyber security training institutes with consistent 4.9/5 ratings from students.',
      icon: Trophy,
      color: 'bg-green-50 border-green-200 hover:border-green-400'
    },
    {
      title: 'Placement Excellence',
      description: '95% placement rate with students placed in top companies like TCS, Infosys, Wipro, Accenture, and many more.',
      icon: TrendingUp,
      color: 'bg-purple-50 border-purple-200 hover:border-purple-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="relative bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 px-5 py-2 rounded-full mb-6">
              <BookOpen className="w-5 h-5 text-orange-400" />
              <span className="text-sm font-semibold text-orange-300">Our Story</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              About SevenMentor
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Mumbai's premier cyber security training institute empowering students and professionals to excel in the rapidly growing field of information security.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 text-center border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </section>

        <section className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-50 to-white p-8 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-500 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Who We Are</h2>
                <p className="text-gray-600 mt-1">Building the next generation of cyber security professionals</p>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12 space-y-6">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  SevenMentor is Mumbai's leading cyber security training institute with a mission to bridge the gap between academic knowledge and industry requirements. Since our inception, we have trained over 2000 students who are now successfully working as security analysts, penetration testers, SOC analysts, and security consultants in top companies.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  What sets us apart is our practical, hands-on approach to learning. We don't just teach theory - we ensure every student gets extensive practice with real security tools, SIEM platforms, and simulated attack scenarios that mirror actual workplace environments.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/5 rounded-2xl p-8 border-2 border-orange-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Students Choose Us</h3>
                <div className="space-y-4">
                  {[
                    'Industry-expert trainers with 8+ years experience',
                    'Hands-on training with real security tools',
                    '100% placement assistance with top companies',
                    'Flexible batch timings for working professionals',
                    'State-of-the-art lab infrastructure',
                    'Industry-recognized certifications'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-50 to-white p-8 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Our Mission & Values</h2>
                <p className="text-gray-600 mt-1">What drives us to excellence</p>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower individuals with cutting-edge cyber security skills and knowledge that enables them to protect organizations from evolving cyber threats. We aim to create a pool of highly skilled security professionals who can contribute to making the digital world safer.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, idx) => {
                const Icon = value.icon;
                return (
                  <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300">
                    <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-green-50 to-white p-8 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-500 rounded-2xl flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">What Makes Us Different</h2>
                <p className="text-gray-600 mt-1">The SevenMentor advantage</p>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="bg-orange-50 p-6 rounded-xl border-2 border-orange-100 hover:border-orange-400 hover:shadow-xl transition-all duration-300">
                    <Icon className="w-12 h-12 text-orange-500 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-700 mb-4">{feature.description}</p>
                    <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      <Zap className="w-4 h-4" />
                      {feature.stats}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-purple-50 to-white p-8 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Our Expert Team</h2>
                <p className="text-gray-600 mt-1">Meet the professionals behind your success</p>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, idx) => {
                const Icon = member.icon;
                return (
                  <div key={idx} className="text-center group">
                    <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <Icon className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-orange-600 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-700">{member.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-yellow-50 to-white p-8 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-2xl flex items-center justify-center">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900">Our Achievements</h2>
                <p className="text-gray-600 mt-1">Milestones that define our journey</p>
              </div>
            </div>
          </div>

          <div className="p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, idx) => {
                const Icon = achievement.icon;
                return (
                  <div key={idx} className={`${achievement.color} p-8 rounded-xl border-2 transition-all duration-300 hover:shadow-xl`}>
                    <Icon className="w-12 h-12 text-gray-700 mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{achievement.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 text-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Join SevenMentor and become part of Mumbai's most successful cyber security training community. Whether you're a beginner or looking to advance your career, we have the perfect program for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:022-48904395"
                    className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Get in Touch
                  </a>
                </div>
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-orange-400">Visit Our Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-gray-300 leading-relaxed">
                        Office no. 101 & part office no.1,<br />
                        Civic Centre, MMGS Marg,<br />
                        Dadar East, Dadar, Mumbai,<br />
                        <span className="text-orange-400 font-semibold">Maharashtra 400014</span>
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-gray-700 pt-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-5 h-5 text-orange-400" />
                      <span className="text-gray-300 font-medium">Mon - Sat: 9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-orange-400" />
                      <span className="text-white font-bold text-lg">022-48904395</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 SevenMentor - Premier Cyber Security Training Institute Mumbai. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
