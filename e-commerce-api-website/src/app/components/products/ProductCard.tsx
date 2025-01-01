"use client";


import React, { useState } from 'react';
// import { useRouter } from 'next/router';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '@/app/components/types/product';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';

// Product Card Component
const ProductCard = ({ product }: { product: Product }) => {
    const [isHovered, setIsHovered] = useState(false);

    const router = useRouter();

    const handleClick = () => {
      router.push(`/products/${product.id}`);
    };
  
    return (
      <div
        onClick={handleClick}
        // className="cursor-pointer ..."
        className="group cursor-pointer relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover object-center group-hover:opacity-75 transition-opacity"
          />
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center space-x-4">
              <button className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors">
                <ShoppingCart className="h-6 w-6 text-gray-600" />
              </button>
              <button className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors">
                <Heart className="h-6 w-6 text-gray-600" />
              </button>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
          <div className="mt-1 flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < product.rating ? 'text-yellow-400' : 'text-gray-200'
                }`}
                fill="currentColor"
              />
            ))}
          </div>
          <p className="mt-1 text-gray-500">{product.category}</p>
          <div className="mt-2 flex items-center justify-between">
            <p className="text-xl font-bold text-blue-600">${product.price}</p>
            <button className="text-sm text-blue-600 hover:text-blue-800">
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  };


export default ProductCard;