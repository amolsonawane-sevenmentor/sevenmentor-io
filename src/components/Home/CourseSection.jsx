"use client";

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import CourseCard from './CourseCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CourseSection({ title, courses, description }) {
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            skipSnaps: false,
        },
        [Autoplay({ delay: 3000, stopOnInteraction: true })]
    );

    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setPrevBtnEnabled(emblaApi.canScrollPrev());
        setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);
    }, [emblaApi, onSelect]);

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {title}
                    </h2>
                    {description && (
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {description}
                        </p>
                    )}
                    <div className="w-24 h-1 bg-orange-600 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* Carousel Container */}
                <div className="relative px-12">
                    {/* Navigation Buttons */}
                    <button
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                        onClick={scrollPrev}
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-orange-600 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                        onClick={scrollNext}
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Embla Carousel */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {courses.map((course) => (
                                <div
                                    key={course.id}
                                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
                                >
                                    <CourseCard course={course} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
