"use client";


import React, { useState } from 'react';

const HomeFAQ = () => {
 // State to track which FAQ item is open
 const [openFAQ, setOpenFAQ] = useState<number | null>(null);

 
 const faqItems = [
   {
     id: 1,
     question: 'What is Journey Health?',
     answer: 'Trust your health journey to Journey Health. Our team of experienced UK-based clinicians and pharmacists provides expert care through quick online consultations. We prioritize your privacy and deliver your medications discreetly to your door. Experience the convenience and quality of care with Journey Health'
   },
   {
     id: 2,
     question: 'How does the process work?',
     answer: 'Start your health journey with Journey Health. Simply select the area you need support with, complete a brief online consultation, and receive personalized advice from our pharmacists. We will dispense your medications against our robust PGDs issued by expert clinicians, and deliver them discreetly to your door, making accessing quality healthcare convenient and hassle-free'
   },
   {
    id: 3,
    question: 'Is my information safe?',
    answer: 'Absolutely! Your medical data and order history are treated with the utmost confidentiality. Access is strictly limited to our qualified pharmacy staff and registered prescribers. We employ robust security measures to protect your personal information in accordance with data protection regulations.'
  },
   
 ];

 // Toggle function to open/close FAQ items
 const toggleFAQ = (id: number) => {
   if (openFAQ === id) {
     setOpenFAQ(null);
   } else {
     setOpenFAQ(id);
   }
 };

 return (
   <div className="w-full py-12 px-4 md:px-6 lg:px-8">
     <div className="max-w-7xl mx-auto">
       {/* Heading Section */}
       <h2 className="text-4xl md:text-5xl font-bold mb-12">
         <span className="text-[#b9d765]">FAQs</span>
       </h2>
       
       {/* FAQ Items */}
       <div className="space-y-6">
         {faqItems.map((item) => (
           <div 
             key={item.id} 
             className="bg-gray-50 rounded-lg overflow-hidden"
           >
             <button 
               className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
               onClick={() => toggleFAQ(item.id)}
             >
               <h3 className="text-xl font-medium text-[#1d3c4b]">{item.question}</h3>
               <svg 
                 className={`w-6 h-6 text-[#1d3c4b] transform transition-transform duration-200 ${openFAQ === item.id ? 'rotate-180' : ''}`} 
                 fill="none" 
                 viewBox="0 0 24 24" 
                 stroke="currentColor"
               >
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
               </svg>
             </button>
             
             {/* Collapsible content */}
             <div 
               className={`overflow-hidden transition-all duration-300 ${
                 openFAQ === item.id ? 'max-h-96 p-6 pt-0' : 'max-h-0'
               }`}
             >
               <p className="text-[#1d3c4b]">{item.answer}</p>
             </div>
           </div>
         ))}
       </div>
     </div>
   </div>
 );
};

export default HomeFAQ;