
"use client";

import React, { useState,useContext } from 'react';
import { useRouter } from 'next/navigation';
import { Star, ArrowLeft } from 'lucide-react';
import { Product } from '@/app/components/types/product';
import { CartContext } from '@/app/components/cart/CartContext';

// Enhanced Product Details Component
const ProductDetails = ({ product }: { product: Product }) => {
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const cart = useContext(CartContext);

  const sizes = ['S', 'M', 'L', 'XL'];

  const handleAddToCart = () => {
    if (!cart) return;
    cart.dispatch({ type: 'ADD_ITEM', payload: { ...product} });
    router.push('/checkout');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button 
        onClick={() => router.back()}
        className="flex items-center text-gray-600 hover:text-gray-900 mb-8"
      >
        <ArrowLeft className=" h-16 w-5 mr-2" />
        Back to Products
      </button>

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="lg:max-w-lg lg:self-end">
          <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={product.image}
                alt={`View ${i}`}
                className="rounded-lg cursor-pointer hover:opacity-75"
              />
            ))}
          </div>
        </div>

        <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            {product.name}
          </h1>
          
          <div className="mt-3 flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < product.rating ? 'text-yellow-400' : 'text-gray-200'
                  }`}
                  fill="currentColor"
                />
              ))}
            </div>
            <span className="ml-3 text-gray-500">{product.rating} out of 5 stars</span>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Description</h3>
            <p className="text-base text-gray-700">{product.description}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-medium text-gray-900">Size</h2>
            <div className="mt-4 flex space-x-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`${
                    selectedSize === size
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  } px-6 py-2 rounded-md font-medium`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center space-x-4">
            <div className="flex items-center border rounded-md">
              <button 
                className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                
              </button>
              <span className="px-4 py-2 border-x">{quantity}</span>
              <button 
                className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Add to Cart & Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


export default ProductDetails;