"use client";

import React from 'react';

const WeightSection = () => {
  return (
    <div className="w-full py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <h2 className="text-5xl font-bold text-[#1d3c4b] mb-2">
          Weight loss, <span className="text-[#b9d765]">backed by</span>
        </h2>
        <h2 className="text-5xl font-bold text-[#b9d765] mb-12">science</h2>
        
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1d3c4b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1d3c4b] mb-4">Proven Treatment</h3>
            <p className="text-[#1d3c4b]">
              Clinical trials have seen clients reduce body weight by up to 22%* when combined with a balanced diet and exercise.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1d3c4b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1d3c4b] mb-4">Reduce Cravings</h3>
            <p className="text-[#1d3c4b]">
              Prescribed, weight loss medication that reduces cravings and helps control your appetite.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="bg-white p-3 rounded-full w-12 h-12 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1d3c4b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-[#1d3c4b] mb-4">Clinical Care</h3>
            <p className="text-[#1d3c4b]">
              Dedicated team of clinicians on hand to help you throughout your plan, adjust dosages and manage potential side effects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeightSection;