"use client";

import React from 'react';
// import { Menu, X, ShoppingCart, Search } from 'lucide-react';
import { motion } from 'framer-motion';


const HeroSection = () => {
    return (
      <div className="pt-16"> {/* Added padding to account for fixed header */}
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="sm:text-center lg:text-left"
                >
                  <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block">Discover Amazing</span>
                    <span className="block text-blue-600">Products Today</span>
                  </h2>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Shop the latest trends and discover amazing deals on our carefully curated collection of products.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="/products"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                      >
                        Shop Now
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="/categories"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                      >
                        Browse Categories
                      </a>
                    </div>
                  </div>
                </motion.div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="/images/c-3.jpg"
              alt="Shopping banner"
            />
          </div>
        </div>
      </div>
    );
  };


export default HeroSection;