"use client";

// import React from 'react';
// import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';


import HowItWorks from '@/components/ui/HowItWorks';


const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f3f6f4] py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left side content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#1e372f] leading-tight mb-6">
              Ease persistent eczema now with soothing betnovate cream
            </h1>
            
            <p className="text-lg md:text-xl text-[#1e372f] mb-8">
            
            Calm inflammation reduce itchiness and achieve clear comfortable skin with targeted betnovate therapy













            </p>
            
            <button className="bg-[#f29a88] hover:bg-[#e88b79] text-black font-medium py-3 px-8 rounded-full transition duration-300">
            Start assessment

            </button>
            
            <div className="mt-10 space-y-4">
              {/* Check marks with text */}
              <div className="flex items-start">
                <div className="mt-1 mr-3 text-[#4cae64]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <p className="text-lg text-[#1e372f] font-medium">
                Rapid relief from redness and itching









                </p>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 text-[#4cae64]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <p className="text-lg text-[#1e372f] font-medium">

                Helps prevent flare ups









                </p>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-3 text-[#4cae64]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <p className="text-lg text-[#1e372f] font-medium">
                Improves skin health for a more comfortable daily life




                </p>
              </div>
            </div>
            
            {/* Google rating */}
            <div className="mt-6 flex items-center">
              {/* <div className="mr-3">
                <svg viewBox="0 0 272 92" width="80" height="30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M115.75 46.95c0 4.15-1.2 7.45-3.6 9.9-2.3 2.35-5.3 3.55-9 3.55-3.55 0-6.55-1.2-9-3.65-2.45-2.45-3.65-5.5-3.65-9.15s1.2-6.7 3.65-9.15c2.45-2.45 5.45-3.65 9-3.65 1.75 0 3.4.35 4.95 1 1.55.65 2.8 1.55 3.7 2.6l-2.1 2.1c-1.5-1.8-3.65-2.7-6.55-2.7-2.55 0-4.75.9-6.6 2.7-1.85 1.8-2.8 4.15-2.8 7.1s.95 5.3 2.8 7.1c1.85 1.8 4.05 2.7 6.6 2.7 2.7 0 4.95-.9 6.7-2.7 1.15-1.15 1.8-2.75 2-4.8h-8.7v-2.85h11.65c.1.6.15 1.2.15 1.9z" fill="#4285F4" />
                  <path d="M134.5 42.65c0 3.4-1.15 6.1-3.5 8.05-2.35 1.95-5.3 2.95-8.85 2.95s-6.5-1-8.85-2.95c-2.35-1.95-3.5-4.65-3.5-8.05s1.15-6.1 3.5-8.05c2.35-1.95 5.3-2.95 8.85-2.95s6.5 1 8.85 2.95c2.35 1.95 3.5 4.65 3.5 8.05zm-3.85 0c0-2.25-.65-4.05-1.95-5.4-1.3-1.35-3.1-2.05-5.55-2.05s-4.25.7-5.55 2.05c-1.3 1.35-1.95 3.15-1.95 5.4s.65 4.05 1.95 5.4c1.3 1.35 3.1 2.05 5.55 2.05s4.25-.7 5.55-2.05c1.3-1.35 1.95-3.15 1.95-5.4z" fill="#EA4335" />
                  <path d="M154.8 42.65c0 3.4-1.15 6.1-3.5 8.05-2.35 1.95-5.3 2.95-8.85 2.95s-6.5-1-8.85-2.95c-2.35-1.95-3.5-4.65-3.5-8.05s1.15-6.1 3.5-8.05c2.35-1.95 5.3-2.95 8.85-2.95s6.5 1 8.85 2.95c2.35 1.95 3.5 4.65 3.5 8.05zm-3.85 0c0-2.25-.65-4.05-1.95-5.4-1.3-1.35-3.1-2.05-5.55-2.05s-4.25.7-5.55 2.05c-1.3 1.35-1.95 3.15-1.95 5.4s.65 4.05 1.95 5.4c1.3 1.35 3.1 2.05 5.55 2.05s4.25-.7 5.55-2.05c1.3-1.35 1.95-3.15 1.95-5.4z" fill="#FBBC05" />
                  <path d="M174.05 32.35v19.9c0 4.1-2.4 7.25-6.95 7.25-3.55 0-5.95-2.05-6.55-4.1l2.8-1.15c.35 1.35 1.75 2.45 3.75 2.45 2.45 0 3.95-1.5 3.95-4.35v-1.6h-.1c-.75 1.05-2.2 1.95-4.05 1.95-3.85 0-7.1-3.4-7.1-7.8 0-4.4 3.25-7.85 7.1-7.85 1.85 0 3.3.95 4.05 1.9h.1v-1.4h3zm-3.55 10.3c0-2.75-1.85-4.65-4.2-4.65-2.4 0-4.4 1.9-4.4 4.65 0 2.7 2 4.6 4.4 4.6 2.35 0 4.2-1.9 4.2-4.6z" fill="#4285F4" />
                  <path d="M179.2 20.15v31.7h-3.75v-31.7h3.75z" fill="#34A853" />
                  <path d="M195.6 46.8l2.5 1.65c-.8 1.2-2.8 3.2-6.15 3.2-4.2 0-7.35-3.25-7.35-7.8 0-4.6 3.15-7.8 7-7.8 3.85 0 5.75 3.1 6.35 4.75l.35.85-9.9 4.1c.75 1.5 1.95 2.25 3.6 2.25s2.8-.8 3.6-1.8zm-7.8-2.65l6.6-2.75c-.35-.95-1.45-1.6-2.75-1.6-1.65 0-3.95 1.45-3.85 4.35z" fill="#EA4335" />
                  <path fill="#fbbc05" d="M165 32l-5 5-5-5 5-5z" />
                  <path d="M222.35 45.15c5.55 0 10.2-3.9 10.2-10.7v-21.7h-4.15v21.7c0 4.4-2.6 6.55-6.05 6.55s-6.05-2.15-6.05-6.55v-21.7h-4.15v21.7c0 6.8 4.65 10.7 10.2 10.7z" fill="#5F6368" />
                  <path d="M245.2 45.15c4.5 0 8.15-2.85 8.15-7.85 0-3.55-2.25-5.85-5.85-6.95l-3.25-1c-2.05-.65-3.5-1.4-3.5-3.1 0-1.9 1.7-3 3.9-3 2.35 0 3.9 1.25 4.55 3.35l3.65-1.5c-1.05-3.4-4.05-5.7-8.2-5.7-4.35 0-7.95 2.85-7.95 7.4 0 3.4 2.25 5.8 5.8 6.95l3.2 1c2.4.8 3.6 1.65 3.6 3.35 0 1.95-1.85 3.25-4.3 3.25-2.9 0-4.65-1.7-5.6-3.75l-3.85 1.6c1.35 3.7 4.75 6.95 9.65 6.95z" fill="#5F6368" />
                  <g fill="#FFBF00">
                    <path d="M211 25.5l-2.05 1.55 2.05 4.5-2.05-1.55zM215 25.5l2.05 1.55-2.05 4.5 2.05-1.55z" />
                    <path d="M213 24.75l-2.25 1.95 2.25 5.25 2.25-5.25z" />
                  </g>
                  <path fill="#DFE1E5" d="M204 25.5h2v6h-2z" />
                  <path fill="#FFF" d="M213 31.5l-2.5 2.5h5z" />
                  <path fill="#DFE1E5" d="M220 25.5h2v6h-2z" />
                  <path d="M269.25 40.45c2.1-1.85 3.15-4.15 3.15-6.8 0-2.5-.9-4.6-2.7-6.3-1.8-1.7-4-2.55-6.7-2.55-2.55 0-4.75.85-6.55 2.5-1.8 1.65-2.7 3.8-2.7 6.35 0 2.65.95 4.9 2.85 6.75 1.9 1.85 4.45 2.8 7.7 2.8 1.3 0 2.55-.25 3.7-.8 1.15-.5 2.05-1.1 2.7-1.75l.7-.85-2.7-2.4-.5.6c-.9.95-2.05 1.4-3.5 1.4-1.95 0-3.45-.6-4.5-1.8-.5-.55-.8-1.2-.95-1.95h10.2zm-10-4c.35-1.7 1.5-3.05 3.75-3.05 1 0 1.85.3 2.5.95.65.65 1 1.35 1 2.1h-7.25z" fill="#5F6368" />
                </svg>
              </div> */}

{/*  */}

<div className="flex items-center space-x-1 mt-6">
  {/* Google logo as an image file */}
  <img
    src="/images/products/google-logo-colour.webp"
    alt="Google logo"
    className="h-6 w-auto"
  />

  {/* “Us” label */}
  <span className="font-medium text-gray-700">Us</span>

  {/* 5-star rating */}
  <div className="flex items-center">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-yellow-400"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.785.57-1.84-.197-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.047 9.393c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.966z"/>
      </svg>
    ))}
  </div>

  {/* Numeric rating */}
  <span className="font-semibold text-gray-800">4.9/5.0</span>
</div>







{/*  */}



              {/* <div className="flex items-center">
                <div className="flex text-[#fbbc05]">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <span className="ml-2 text-[#1e372f] font-medium">4.9/5.0</span>
              </div> */}
            </div>
          </div>
          
          {/* Right side image */}
          <div className="w-full md:w-1/2 relative">
            <div className="rounded-xl overflow-hidden bg-[#ffc0c0] h-full">
              {/* In a real implementation, replace with actual Image component */}
              <div className="relative h-[400px] md:h-[500px]">
                <img 
                  src="/images/ecema.webp"
                  alt="Woman with braided hair in light blue shirt" 
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom border */}
      <div className="w-full h-px bg-gray-200 mt-12"></div>
    </section>
  );
};

// export default HeroSection;




const BestSellersSection = () => {
  const products = [
    {
      name: "Eczema Cream",
      price: "£12.00",
      image: "/images/products/betnovate.webp", 
      link: "/products/nytol-25mg",
    },
  
   
    
     
  
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        {/* <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-teal-900">Our </span>
          <span className="text-lime-400">best sellers</span>
        </h2> */}
        {/* <Link 
          href="/products" 
          className="text-teal-900 font-medium hover:underline"
        >
          Shop all products
        </Link> */}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Link href={product.link} key={index}>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="h-40 flex items-center justify-center mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-h-full object-contain" 
                />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {product.name}
              </h3>
              
              <p className="text-teal-900 font-medium">
                {product.price}
              </p>
          
             
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};


// export default BestSellersSection;


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
                  <span className="text-[#b9d765]">Eczema</span>
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
   
 



const FAQSection = () => {
 // State to track which FAQ item is open
 const [openFAQ, setOpenFAQ] = useState<number | null>(null);

 
 const faqItems = [
   {
     id: 1,
     question: 'When should I see a professional',
     answer: 'If your eczema is persistent severe or not improving with standard treatments book an appointment to explore further options.'
   },
   {
     id: 2,
     question: 'Are there side effects',
     answer: 'Possible side effects include skin thinning dryness or mild irritation. Contact your clinician if side effects worsen or persist.'
   },

  {
    id: 3,
    question: 'What is betnovate and how does it help eczema',
    answer: 'Betnovate is a topical corticosteroid that reduces inflammation and itching in eczema flare ups allowing the skin to heal.'
  },
  {
    id: 4,
    question: 'Who should use betnovate cream',
    answer: 'Betnovate may be suitable for those with moderate to severe eczema. Your clinician will confirm its suitability after reviewing your condition.'
  },
  {
    id: 5,
    question: 'How often should I apply betnovate',
    answer: 'Generally betnovate is applied once or twice daily to the affected areas. Follow the directions provided by your clinician.'
  },

  {
    id: 6,
    question: 'Can betnovate be used on children',
    answer: 'In some cases betnovate can be used on children but only under medical supervision to ensure appropriate dosing.'
  },
  {
    id: 7,
    question: 'What if I miss a dose',
    answer: 'Apply it as soon as you remember then continue as usual. Avoid applying extra cream to make up for a missed dose.'
  },
 
   
 ];


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
         <span className="text-[#1d3c4b]">Frequently asked</span> <span className="text-[#b9d765]">questions</span>
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




export default function Eczema() {
    return (
        <div>
            <HeroSection />
            {/* <BestSellersSection />
             */
             }
             <BestSellersSection />
            <HowItWorks />
            <AssessmentSection />
            <FAQSection />
        </div>
    );
}