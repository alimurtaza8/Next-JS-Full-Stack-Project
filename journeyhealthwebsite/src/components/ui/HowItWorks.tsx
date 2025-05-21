"use client";


import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold mb-16">
        <span className="text-teal-900">How it </span>
        <span className="text-lime-400">works</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="w-10 h-10 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal-900">
              <path d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
            </svg>
          </div>
          <p className="text-gray-800">
            Choose from a range of <span className="font-bold">UK Licensed</span> medication
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="w-10 h-10 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal-900">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
          <p className="text-gray-800">
            <span className="font-bold">No GP or pharmacy visits</span>, just a quick online consultation.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="w-10 h-10 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal-900">
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
            </svg>
          </div>
          <p className="text-gray-800">
            Get it <span className="font-bold">delivered fast</span>, as quickly as tomorrow.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="w-10 h-10 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal-900">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <p className="text-gray-800">
            Benefit from ongoing <span className="font-bold">medical support</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;