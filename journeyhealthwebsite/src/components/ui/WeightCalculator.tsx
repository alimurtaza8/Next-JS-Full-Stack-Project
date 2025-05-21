"use client";


import React, { useState, useEffect } from 'react';

const WeightCalculator = () => {
  const [currentWeight, setCurrentWeight] = useState(138);
  const [potentialLoss, setPotentialLoss] = useState(28);
  
  // Calculate potential weight loss (20% of current weight)
  useEffect(() => {
    const calculatedLoss = Math.round(currentWeight * 0.2);
    setPotentialLoss(calculatedLoss);
  }, [currentWeight]);

  // Handle slider change
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentWeight(Number(e.target.value));
  };

  return (
    <div className="w-full bg-gray-50 py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Heading Section */}
        <h2 className="text-4xl md:text-5xl font-bold text-[#1d3c4b] text-center mb-4">
          How much weight could you lose?
        </h2>
        <p className="text-center text-[#1d3c4b] mb-12">
          Try our weight loss calculator to see how much weight you could lose over a long-term period.
        </p>
        
        {/* Calculator Box */}
        <div className="bg-white rounded-lg p-8 shadow-sm max-w-3xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-[#1d3c4b]">Select your current weight</h3>
            <span className="text-xl font-bold text-[#1d3c4b]">{currentWeight} kg</span>
          </div>
          
          {/* Slider */}
          <div className="mb-8">
            <input
              type="range"
              min="50"
              max="250"
              value={currentWeight}
              onChange={handleSliderChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #3b82f6 ${(currentWeight - 50) / 2}%, #e5e7eb ${(currentWeight - 50) / 2}%)`,
              }}
            />
          </div>
          
          {/* Results Box */}
          <div className="bg-[#1a1e2c] text-white rounded-lg p-4 flex justify-between items-center">
            <h3 className="text-xl font-semibold">Weight you could lose</h3>
            <div className="bg-white text-[#1d3c4b] py-2 px-4 rounded-lg font-bold text-xl">
              {potentialLoss} kg
            </div>
          </div>
        </div>
        
        {/* Disclaimer */}
        <p className="text-sm text-[#1d3c4b] mt-4 max-w-3xl mx-auto">
          *This calculator is only an example for illustrative purposes and the results are not guaranteed. Every weight loss
          experience is unique. This example is based on research showing weight loss of up to 20% over a 72-week period
        </p>
      </div>
    </div>
  );
};

export default WeightCalculator;