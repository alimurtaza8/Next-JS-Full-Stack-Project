"use client";


import Image from 'next/image';

import React, { useState } from 'react';
const ProductCheck = () => {
    const product = {
        id: 'sildenafil-50mg-pack-of-16',
        title: 'Sildenafil 50mg (Pack of 16)',
        price: '£50.00',
        image: '/images/products/slidenafil.webp',
        link: '/products/sildenafil-50mg-pack-of-16',
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
          <h2 className="text-3xl font-medium mb-6">


          Sildenafil 50mg (Pack of 16)













          </h2>
          <p className="text-gray-200 text-lg leading-relaxed">
         
          Enhance your performance with Sildenafil 50mg in a pack of 16. You benefit from a reliable supply that delivers better results than alternative treatments and lower strengths for erectile dysfunction.



















          </p>
        </div>

        {/* Right Column - Light Background */}
        <div className="w-full md:w-1/2 bg-gray-50 p-10 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-gray-700 text-lg leading-relaxed">

          Sildenafil 50mg (Pack of 16) is a trusted prescription treatment designed to address your erectile dysfunction and enhance your sexual performance. With a larger pack, you benefit from a convenient and consistent supply that provides you with greater value compared to smaller packs. This formulation delivers effective results with an optimised dose that outperforms lower strengths and alternative treatments. Under expert guidance, you receive personalised advice and ongoing support to ensure your treatment is safe and effective. Embrace improved intimacy and regain your confidence with a treatment that prioritises your needs and overall wellbeing.







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
     question: 'What is Sildenafil 50mg (Pack of 16)?',
     answer: 'It is a prescription treatment for erectile dysfunction that provides you with 16 tablets of Sildenafil 50mg in one pack.',

   },
   {
    id: 2,
    question: 'How does this pack benefit you over smaller packs?',
    answer: 'You enjoy a larger, more convenient supply that offers better value and ensures your medication is always on hand.',
  },
  {
   id: 3,
   question: 'How does Sildenafil 50mg compare to lower strengths?',
   answer: 'Sildenafil 50mg delivers a potent and optimised dose that offers faster and more effective results than lower strength formulations.',
 },
 {
   id: 4,
   question: 'What makes this treatment superior to alternative options?',
   answer: 'Its proven efficacy and optimised dosing give you reliable performance, making it a trusted choice for managing erectile dysfunction.',
 },
 {
   id: 5,
   question: 'How should you take Sildenafil 50mg?',
   answer: 'It is taken orally with clear instructions from your healthcare provider to ensure you use it safely and effectively.',
 },
 {
   id: 6,
   question: 'Who can benefit from Sildenafil 50mg (Pack of 16)?',
   answer: 'Men experiencing erectile dysfunction can benefit from this treatment after a comprehensive medical assessment tailored to your needs.',
 },
 {
   id: 7,
   question: 'What support do you receive during your treatment?',
   answer: 'You receive personalised advice, regular follow ups and lifestyle recommendations to help optimise your outcomes and improve your intimate life.',
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