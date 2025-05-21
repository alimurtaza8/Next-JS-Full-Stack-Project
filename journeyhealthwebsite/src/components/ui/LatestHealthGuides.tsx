"use client";

import React from 'react';
import Link from 'next/link';

interface Guide {
  category: string;
  title: string;
  image: string;
  link: string;
}

const LatestHealthGuides: React.FC = () => {
  const guides: Guide[] = [
    {
      category: 'Skin',
      title: 'Eczema Triggers and How to Avoid Them',
      image: '/images/blog_1.webp',
      link: '/blog/eczema-triggers-and-how-to-avoid-them',
    },
    {
      category: 'Hayfever',
      title: 'All About Hayfever and How to Alleviate Symptoms',
      image: '/images/blog_2.webp',
      link: '/blog/all-about-hayfever-and-how-to-alleviate-symptoms',
    },
    {
      category: 'Weight Loss',
      title: 'An Introduction to Weight Loss Injections for Effective Results',
      image: '/images/blog_3.webp',
      link: '/blog/weight-loss-injections',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="text-gray-900">Latest </span>
          <span className="text-lime-400">health guides</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <Link
              key={index}
              href={guide.link}
              className="block rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="inline-block px-4 py-1 rounded-full border border-teal-900 text-teal-900 text-sm font-medium mb-4">
                  {guide.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  {guide.title}
                </h3>
              </div>

              <div className="h-60 w-full">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestHealthGuides;
