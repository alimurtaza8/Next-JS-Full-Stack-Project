"use client";

import React from 'react';
import Link from 'next/link';

const BestSellersSection = () => {
  const products = [
    {
      name: "Nytol 25mg",
      price: "£5.00",
      image: "/images/products/home_p_1.webp", 
      link: "/products/nytol-25mg",
    },
    {
      name: "Promethazine 25mg",
      price: "£12.00",
    //   image: "/images/promethazine-25mg.jpg", 
    image: "/images/products/home_p_2.webp", 
      link: "/products/promethazine-25mg",
    },
    {
      name: "Nytol Liquid 300ml",
      price: "£10.00",
    //   image: "/images/nytol-liquid.jpg", 
    image: "/images/products/home_p_3.webp", 
      link: "/products/nytol-liquid-300ml",
    },
    {
      name: "Allevia - 120mg",
      price: "£10.00",
    //   image: "/images/allevia-120mg.jpg", 
    image: "/images/products/allevia.webp", 
      link: "/products/allevia-120mg",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-teal-900">Our </span>
          <span className="text-lime-400">best sellers</span>
        </h2>
        <Link 
          href="/products" 
          className="text-teal-900 font-medium hover:underline"
        >
          Shop all products
        </Link>
      </div>
      
      <div className="grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Link href={product.link} key={index}>
            <div className="border border-gray-500 rounded-lg p-6 hover:shadow-md transition-shadow">
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

export default BestSellersSection;