

import React from 'react';
// import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '@/app/components/types/product';
// import { ProductCard } from '@app/components/products/ProductCard';
import ProductCard from './ProductCard';


const ProductGrid = () => {
    // Sample products data - replace with your API data
    const products: Product[] = [
      {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 199.99,
        description: "High-quality wireless headphones with noise cancellation",
        category: "Electronics",
        rating: 4,
        image: "/images/c-1.webp"
      },
      {
        id: 2,
        name: "Smart Fitness Watch",
        price: 149.99,
        description: "Advanced fitness tracking with heart rate monitoring",
        category: "Wearables",
        rating: 5,
        image: "/images/c-4.jpg"
      },
      {
        id: 3,
        name: "T Shirt",
        price: 100.99,
        description: "High-quality Shirt",
        category: "Branded",
        rating: 6,
        image: "/images/c-2.png"
      },
      {
        id: 4,
        name: "Smart Fitness Ring Watch",
        price: 149.99,
        description: "Advanced fitness tracking with heart rate monitoring",
        category: "Wearables",
        rating: 5,
        image: "/images/c-6.webp"
      },
    ];
  
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  };



export default ProductGrid;