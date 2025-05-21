"use client";


import React from 'react';

const AssessmentSection = () => {
 return (
   <div className="w-full py-12 px-4 md:px-6 lg:px-8">
     <div className="max-w-7xl mx-auto">
       <div className="bg-[#1e2435] rounded-3xl shadow-lg overflow-hidden">
         <div className="p-8 md:p-12 flex flex-col md:flex-row">
           {/* Left Content */}
           <div className="md:w-1/2 mb-8 md:mb-0">
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
               Start your <span className="text-[#b9d765]">assessment for</span>
               <br />
               <span className="text-[#b9d765]">Weight loss</span>
             </h2>
             
             <div className="space-y-4">
               {/* Feature 1 */}
               <div className="flex items-center">
                 <div className="mr-3 text-white">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                   </svg>
                 </div>
                 <p className="text-white">Reviewed by our UK-based medical team</p>
               </div>
               
               {/* Feature 2 */}
               <div className="flex items-center">
                 <div className="mr-3 text-white">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
                 <p className="text-white">Takes less than 3 minutes to complete</p>
               </div>
               
               {/* Feature 3 */}
               <div className="flex items-center">
                 <div className="mr-3 text-white">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                   </svg>
                 </div>
                 <p className="text-white">Approved treatments dispatched same day (before 3pm)</p>
               </div>
             </div>
           </div>
           
           {/* Right Content (White Card) */}
           <div className="md:w-1/2 md:pl-8">
             <div className="bg-white rounded-lg p-6 md:p-8">
               <h3 className="text-2xl font-bold text-[#1d3c4b] mb-4">
                 Don&apos;t wait to get the medical help you need.
               </h3>
               <p className="text-[#1d3c4b] mb-6">
                 Once you complete a short online assessment about your condition, you will be able to select your preferred treatment and choose from a list of appropriate options for you.
               </p>
               <button className="w-full bg-[#b9d765] hover:bg-[#a8c257] text-[#1d3c4b] font-semibold py-3 px-6 rounded-lg transition duration-200">
                 Start Assessment
               </button>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};

export default AssessmentSection;