"use client";

import React from 'react';
// import Image from 'next/image';

const PriceComponent: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Mounjaro Card */}
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 relative">
              <img 
                src="/images/price_1.webp" 
                alt="Mounjaro pen" 
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-medium text-gray-800">Mounjaro 2.5mg</span>
              <span className="font-medium text-green-600">£125.00</span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-medium text-gray-800">Mounjaro 5mg</span>
              <span className="font-medium text-green-600">£140.00</span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-medium text-gray-800">Mounjaro 7.5mg</span>
              <span className="font-medium text-green-600">£165.00</span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-medium text-gray-800">Mounjaro 10mg</span>
              <span className="font-medium text-green-600">£180.00</span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-medium text-gray-800">Mounjaro 12.5mg</span>
              <span className="font-medium text-green-600">£200.00</span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-medium text-gray-800">Mounjaro 15mg</span>
              <span className="font-medium text-green-600">£210.00</span>
            </div>
          </div>
        </div>
        
        {/* Wegovy Card */}
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 relative">
              <img 
                src="/images/price_2.webp" 
                alt="Wegovy pen" 
                className="object-contain"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-medium text-gray-800">Wegovy 0.25mg</span>
              <span className="font-medium text-green-600">£99.00</span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-medium text-gray-800">Wegovy 0.5mg</span>
              <span className="font-medium text-green-600">£120.00</span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-medium text-gray-800">Wegovy 1mg</span>
              <span className="font-medium text-green-600">£140.00</span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-medium text-gray-800">Wegovy 1.7mg</span>
              <span className="font-medium text-green-600">£189.00</span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-medium text-gray-800">Wegovy 2.4mg</span>
              <span className="font-medium text-green-600">£225.00</span>
            </div>
          </div>
        </div>
        
        {/* Bundles Card */}
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <div className="flex justify-center mb-6">
            <div className="w-full h-32 relative bg-[#f0f8f8] rounded-lg">
              <img 
                src="/images/price_3.webp" 
                alt="Bundles" 
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-medium text-gray-800">Starter Bundle</span>
              <span className="font-medium text-green-600">£365.50</span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-medium text-gray-800">Step Bundle</span>
              <span className="font-medium text-green-600">£436.00</span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="font-medium text-gray-800">Sustain Bundle</span>
              <span className="font-medium text-green-600">£490.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceComponent;