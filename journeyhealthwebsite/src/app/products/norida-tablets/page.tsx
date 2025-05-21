"use client";


import Image from 'next/image';

import React, { useState } from 'react';
const ProductCheck = () => {
    const product = {
        id: 'norida-tablets',
        title: 'Noriday Tablets',
        price: '£20.00',
        image: '/images/products/noriday.webp',
        link: '/products/norida-tablets',
    };
    

  return (
    <div className="mt-10 w-full max-w-6xl mx-auto px-4 py-6">
      {/* Content Container with 2 columns on desktop, stacked on mobile */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8 md:gap-16">
        {/* Left side - Product Image */}
        <div className="w-full md:w-auto flex justify-center md:justify-end">
          <div className="w-64 md:w-80">
            <Image 
              src={product.image} 
              alt={product.title}
              width={320}
              height={320}
              priority
              className="w-70 h-auto"
            />
          </div>
        </div>

        {/* Right side - Title, Price and Button */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-start">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-medium text-gray-800 mb-4">{product.title}</h1>
          
          {/* Price */}
          <p className="text-xl md:text-2xl font-medium text-gray-800 mb-6">{product.price}</p>
          
          {/* Add to Cart Button */}
          <button 
            className="bg-teal-900 hover:bg-teal-800 text-white text-base font-medium 
                      py-3 px-8 w-full md:w-72 rounded-3xl transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};





const ProductDetails = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6">
      {/* Delivery Benefits Section */}
      <div className="border border-gray-200 rounded-xl p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Fast Delivery */}
          <div className="flex items-start gap-3">
            <div className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Fast, discreet delivery</h3>
              <p className="text-sm text-gray-600 mt-1">Delivered in secure, plain packaging or fully tracked delivery from just £2.95</p>
            </div>
          </div>

          {/* UK Based */}
          <div className="flex items-start gap-3">
            <div className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">100% UK-based pharmacy</h3>
              <p className="text-sm text-gray-600 mt-1">Our team of doctors and pharmacists, and our support staff, are all UK-based.</p>
            </div>
          </div>

          {/* Free Advice */}
          <div className="flex items-start gap-3">
            <div className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Free advice and support</h3>
              <p className="text-sm text-gray-600 mt-1">Have a question? Telephone support is always free; Monday - Friday, 9am - 5pm.</p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-start gap-3">
            <div className="text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">We&apos;re rated 4.9 out of 5</h3>
              <p className="text-sm text-gray-600 mt-1">Based on over 24,000 reviews collected on Google and Reviews.io.</p>
            </div>
          </div>
        </div>

        {/* Bottom Text with Certification Logo */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 pt-4 border-t border-gray-100">
          <p className="text-gray-700 mb-4 md:mb-0">
            We maintain the highest possible regulation for a UK online pharmacy, ensuring your experience is safe, and confidential.
          </p>
          <div className="w-36">
            <Image 
              src="/images/general.webp" 
              alt="General Pharmaceutical Council" 
              width={150} 
              height={50}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Product Description Section */}
      <div className="flex flex-col md:flex-row gap-6 my-8">
        {/* Left Column - Dark Background */}
        <div className="w-full md:w-1/2 bg-slate-800 bg-gradient-to-br from-slate-700 to-slate-900 text-white p-10 rounded-2xl shadow-md">
          <h2 className="text-3xl font-medium mb-6">Noriday Tablets






          </h2>
          <p className="text-gray-200 text-lg leading-relaxed">
         
          Noriday Tablets offer reliable contraception for women seeking an effective and safe natural approach to managing their reproductive health.









          </p>
        </div>

        {/* Right Column - Light Background */}
        <div className="w-full md:w-1/2 bg-gray-50 p-10 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-700 text-lg leading-relaxed">

          Noriday Tablets are a trusted contraceptive option designed for women who prefer a natural method to control fertility. Made with high quality ingredients, these tablets work by modulating the natural hormonal balance without synthetic additives. They are easy to take and suitable for long term use under medical guidance. Our service ensures expert support and detailed advice to help you make an informed decision for your health and wellbeing.















          </p>
        </div>
      </div>
    </div>
  );
};


const HowItWorks = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* <h2 className="text-5xl font-bold mb-16">
        <span className="text-teal-900">How it </span>
        <span className="text-lime-400">works</span>
      </h2> */}
      
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






const FAQSection = () => {
 // State to track which FAQ item is open
 const [openFAQ, setOpenFAQ] = useState<number | null>(null);

 
 const faqItems = [
   {
     id: 1,
     question: 'What are Noriday Tablets?',
     answer: 'They are a natural contraceptive option for women that help manage fertility by influencing the natural hormonal cycle.',

   },
   {
    id: 2,
    question: 'How do they work?',
    answer: 'The tablets work by gently adjusting the body s natural hormone levels to reduce the chance of pregnancy.',
  },
  {
   id: 3,
   question: 'Who should consider using them?',
   answer: 'Women seeking a natural, non synthetic method of contraception and who have discussed their suitability with a healthcare professional.'
 },
 {
   id: 4,
   question: 'How should I take them?',
   answer: 'They should be taken as advised by your healthcare provider during the appropriate phase of your cycle.'
 },
 {
   id: 5,
   question: 'Are there any side effects?',
   answer: 'Some women may experience mild changes in their cycle or mood. Always consult your healthcare provider if concerned.',
 },
 {
   id: 6,
   question: 'Do I need a prescription?',
   answer: 'Yes please consult your doctor to discuss whether Noriday Tablets are right for you.',
 },
 {
   id: 7,
   question: 'Can I use them long term?',
   answer: 'They are suitable for long term use under regular medical supervision to ensure your ongoing health.',
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
         <span className="text-[#1d3c4b]">FAQ&apos;S</span>
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


export default function ProductCard() {
  return (
    <div className='pt-16'>
      <ProductCheck />
      <ProductDetails />
      <HowItWorks />
      <FAQSection />
    </div>
  )
}