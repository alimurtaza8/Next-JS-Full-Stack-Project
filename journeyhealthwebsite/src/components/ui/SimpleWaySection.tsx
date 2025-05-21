
'use client';

import { useState } from 'react';
import Link from 'next/link';

const SimpleWaySection = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slides = [
    {
      title: 'Long-term weight loss',
      image: '/images/long_term.webp',
      cta: 'Get started',
      link: '/treatments/weight-loss',
    },
    {
      title: 'Better intimacy',
      image: '/images/better.webp',
      cta: 'Get started',
      link: '/treatments/erectile-dysfunction',
    },
    {
      title: 'Stop and reverse hair loss',
      image: '/images/stop.webp',
      cta: 'Get started',
      link: '/treatments/hair-loss',
    },
    {
      title: 'Sleep Better',
      image: '/images/sleep_ok.webp',
      cta: 'Get started',
      link: '/treatments/sleep-aid',
    },
    {
      title: 'Quick migraine relief',
      image: '/images/quick.webp',
      cta: 'Get started',
      link: '/treatments/migraine-relief',
    },
  ];

  const visibleCount = 3;
  const maxIndex = slides.length - visibleCount;

  const goToNextSlide = () =>
    setCurrentSlideIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const goToPrevSlide = () =>
    setCurrentSlideIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section className="w-full bg-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            A simple way to feel great
          </h2>
          <p className="text-2xl md:text-3xl font-light text-lime-400">
            on your own terms
          </p>
        </div>

        <div className="relative">
          {/* Prev/Next */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between z-10 px-2">
            <button
              onClick={goToPrevSlide}
              className="bg-white rounded-full p-2 shadow-md"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNextSlide}
              className="bg-gray-900 rounded-full p-2 shadow-md"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Slides viewport */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 gap-4"
              style={{
                transform: `translateX(-${(currentSlideIndex * 100) / visibleCount}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="flex-shrink-0 w-full md:w-1/3 p-2">
                  <div className="relative h-96 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />

                    {/* Background image */}
                    <div
                      className="absolute inset-0 bg-gray-300"
                      style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />

                    {/* Content & CTA */}
                    <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                      <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                        {slide.title}
                      </h3>
                      <Link
                        href={slide.link}
                        className="block w-full py-3 border border-white text-white font-medium rounded hover:bg-white hover:text-gray-900 transition-colors text-center"
                      >
                        {slide.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleWaySection;
