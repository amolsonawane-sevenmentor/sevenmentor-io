"use client"
import React, { useEffect, useState, useMemo, useRef } from 'react';
import { Award, Wifi, Users, Building } from 'lucide-react';

const stats = [
  {
    icon: <Wifi className="w-10 h-10 text-white" />,
    endValue: 200,
    suffix: '+',
    description: 'Offline/Online Courses',
  },
  {
    icon: <Building className="w-10 h-10 text-white" />,
    endValue: 52,
    suffix: '+',
    description: 'Classrooms',
  },
  {
    icon: <Users className="w-10 h-10 text-white" />,
    endValue: 75,
    suffix: '+',
    description: 'Total Mentors',
  },
  {
    icon: <Award className="w-10 h-10 text-white" />,
    endValue: 72000,
    suffix: '+',
    description: 'Successful Careers Made',
  },
];

const Counter = ({ endValue, suffix, isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2500; 
    const increment = (endValue / duration) * 10; 
    const interval = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        start = endValue;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 10);

    return () => clearInterval(interval);
  }, [endValue, isVisible]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const EducationStats = () => {
  const memoizedStats = useMemo(() => stats, []);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Trigger when at least half of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black bg-gradient-to-br from-black via-black to-orange-500/20 pt-10 md:mb-[-10px]"
    >
      <div className="flex flex-col justify-center items-center mx-auto px-4 md:px-6">
        <h2 className="md:text-5xl text-2xl font-bold text-white text-center mb-5">
          Behind Every <span className='text-orange-500'>Successful</span> Career
        </h2>
        <p className="text-white max-w-5xl mx-auto text-md sm:text-xl mb-5">
          Sevenmentor – A Renowned Brand For Quality Education And In-house Job Placement Services Since Past Decades.
        </p>
        <div className="grid justify-center items-center grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 mb-12 md:mb-2 md:mt-10">
          {memoizedStats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center text-center backdrop-filter !backdrop-blur-4xl bg-gray-500/20 rounded-full h-[170px] w-[170px] md:h-[270px] md:w-[270px] shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center justify-center w-12 h-12 md:w-24 p-2 md:h-24 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full mb-2 md:mb-4">
                {stat.icon}
              </div>
              <h3 className="md:text-2xl text-lg font-bold text-white md:mb-2">
                <Counter endValue={stat.endValue} suffix={stat.suffix} isVisible={isVisible} />
              </h3>
              <p className="text-gray-300 font-semibold text-md ">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationStats;
