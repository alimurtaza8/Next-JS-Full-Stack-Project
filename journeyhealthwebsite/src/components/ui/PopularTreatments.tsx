"use client";

import React, { FC } from 'react';
import Link from 'next/link';

interface Treatment {
  title: string;
  description: string;
  image: string;
  price: string;
  slug: string;
}

const PopularTreatments: FC = () => {
  const treatments: Treatment[] = [
    {
      title: "Weight Loss",
      description: "Enhances weight management and stabilizes blood sugar for metabolic support.",
      image: "/images/price_1.webp",
      price: "£125.00",
      slug: "weight-loss",
    },
    {
      title: "Hair Loss",
      description: "Reduces DHT levels, combating hair loss while encouraging healthier regrowth.",
      image: "/images/headaches.webp",
      price: "£27.00",
      slug: "hair-loss",
    },
    {
      title: "Erectile Dysfunction",
      description: "Enhances male sexual function by boosting blood flow and performance.",
      image: "/images/3.webp",
      price: "£125.00",
      slug: "erectile-dysfunction",
    },
    {
      title: "Period Delay",
      description: "Manages hormonal balance alleviating menstrual issues and regulating cycles effectively.",
      image: "/images/1.webp",
      price: "£27.00",
      slug: "period-delay",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-12">
        <span className="text-teal-900">Popular </span>
        <span className="text-lime-400">treatments</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {treatments.map((treatment) => (
          <Link
            key={treatment.slug}
            href={`/treatments/${treatment.slug}`}
            className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow block"
          >
            {/* Card Content */}
            <h3 className="text-3xl font-bold text-teal-900 mb-2">
              {treatment.title}
            </h3>
            <p className="text-gray-600 mb-8 h-16">
              {treatment.description}
            </p>
            
            <div className="h-40 flex items-center justify-center mb-8">
              <img 
                src={treatment.image} 
                alt={treatment.title} 
                className="max-h-full object-contain" 
              />
            </div>
            
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold">
                From {treatment.price}
              </p>
              <div className="text-teal-900">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth={2} 
                  stroke="currentColor" 
                  className="w-6 h-6"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" 
                  />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularTreatments;
