
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const HomeHero = () => {
  const headingOptions = [
    'weight loss',
    'better sleep',
    'hair growth',
    'headache relief',
    "women's health",
  ];

  // Typewriter state
  const [displayText, setDisplayText] = useState('');
  const [loopIndex, setLoopIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed,] = useState(150);

  useEffect(() => {
    const fullText = headingOptions[loopIndex % headingOptions.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length - 1));
      }, typingSpeed / 2);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, displayText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && displayText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    }

    if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setLoopIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, headingOptions, loopIndex, typingSpeed]);

  const treatments = [
    {
      title: 'Lose weight',
      icon: '/images/lose_weight.webp',
      link: '/treatments/weight-loss',     
    },
    {
      title: 'Headaches',
      icon: '/images/headaches.webp',
      link: '/treatments/migraine-relief',       
    },
    {
      title: 'Longer intimacy',
      icon: '/images/longer.webp',
      link: '/treatments/erectile-dysfunction',  
    },
    {
      title: "Women's health",
      icon: '/images/womens_healthe.webp',
      link: '/treatments/contraception',         
    },
    {
      title: 'Hair growth',
      icon: '/images/hair_groth.webp',
      link: '/treatments/hair-loss',         
    },
    {
      title: 'Sleep better',
      icon: '/images/sleep_better.webp',
      link: '/treatments/sleep-aid',    
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start mt-10">
          {/* Left side (60%) */}
          <div className="lg:w-3/5 mb-12 lg:mb-0 pr-8">
          <h1 className="text-6xl md:text-7xl font-bold text-lime-400 mb-2">
              On-demand
            </h1>
            <h2 className="text-6xl md:text-7xl font-bold text-teal-900 mb-6">
              {displayText}
              <span className="blinking-cursor">|</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              Achieve a happier and healthier you, backed by science.
            </p>
            {/* <button className="bg-teal-900 text-white rounded-full px-8 py-3 text-lg font-medium hover:bg-teal-800 transition-colors"
            href="/treatments">
              Browse treatments
            </button> */}

            <Link
  href="/treatments"
  className=" bg-teal-900 text-white rounded-full px-8 py-3 text-lg font-medium hover:bg-teal-800 transition-colors"
>
  Browse treatments
</Link>
          </div>

          {/* Right side (40%) */}
          <div className="lg:w-2/5">
            <div className="grid grid-cols-2 gap-4">
              {treatments.map(({ title, icon, link }) => (
                <Link
                  key={title}
                  href={link}
                  className="block bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="font-medium mb-2">{title}</h3>
                  <div className="h-20 flex items-center justify-center">
                    <img
                      src={icon}
                      alt={title}
                      className="max-h-full"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Blinking cursor CSS */}
      <style jsx>{`
        .blinking-cursor {
          display: inline-block;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default HomeHero;
