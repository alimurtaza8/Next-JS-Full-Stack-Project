"use client";

import React from 'react';

const ProgressSection = () => {
 return (
   <div className="w-full bg-[#1a1e2c] py-16 px-4 md:px-6 lg:px-8">
     <div className="max-w-7xl mx-auto">
       {/* Heading Section */}
       <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 md:mb-24">
         The progress you can<br />expect
       </h2>
       
       {/* Timeline Grid */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
         {/* Timeline line */}
         <div className="hidden md:block absolute top-10 left-1/3 w-1/3 h-0.5 bg-gray-700"></div>
         <div className="hidden md:block absolute top-10 right-1/3 w-1/3 h-0.5 bg-gray-700"></div>
         
         {/* First column */}
         <div className="text-white">
           <div className="bg-[#b9d765] text-[#1a1e2c] text-sm font-bold py-1 px-4 rounded-full inline-block mb-6">
             TODAY
           </div>
           <h3 className="text-2xl font-bold mb-4">Simple assessment</h3>
           <p className="text-gray-300">
             Book an appointment for a free consultation at Chatham Pharmacy. If eligible, you&apos;ll receive your clinically-prescribed medication swiftly.
           </p>
         </div>
         
         {/* Second column */}
         <div className="text-white">
           <div className="bg-[#b9d765] text-[#1a1e2c] text-sm font-bold py-1 px-4 rounded-full inline-block mb-6">
             1-6 MONTHS
           </div>
           <h3 className="text-2xl font-bold mb-4">Healthy weight loss</h3>
           <p className="text-gray-300">
             Lose weight and learn how to reframe your relationship with food. Expect increased fitness, energy, and confidence.
           </p>
         </div>
         
         {/* Third column */}
         <div className="text-white">
           <div className="bg-[#b9d765] text-[#1a1e2c] text-sm font-bold py-1 px-4 rounded-full inline-block mb-6">
             6-12 MONTHS
           </div>
           <h3 className="text-2xl font-bold mb-4">Lasting change</h3>
           <p className="text-gray-300">
             With continued support from your coach, adopt healthier lifestyle habits to help maintain weight loss.
           </p>
         </div>
       </div>
     </div>
   </div>
 );
};

export default ProgressSection;