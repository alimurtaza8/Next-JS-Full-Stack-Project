"use client";

import React, { useState,useContext } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
// import { motion } from 'framer-motion';

import { CartDrawer,CartContext } from './cart/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
    const cart = useContext(CartContext);


  


  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-blue-600">SmartNext</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="/#" className="text-gray-600 hover:text-blue-600">Products</a>
            <a href="/#" className="text-gray-600 hover:text-blue-600">Categories</a>
            <a href="/#" className="text-gray-600 hover:text-blue-600">About</a>
          </div>

          {/* Search and Cart */}
          {/* <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="h-5 w-5 text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full relative">
              <ShoppingCart className="h-5 w-5 text-gray-600" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-blue-600 rounded-full text-xs text-white flex items-center justify-center">
                0
              </span>
            </button>
          </div> */}

          <>
  <button 
    onClick={() => setIsCartOpen(true)}
    className="p-2 hover:bg-gray-100 rounded-full relative"
  >
    <ShoppingCart className="h-5 w-5 text-gray-600" />
    <span className="absolute -top-1 -right-1 h-5 w-5 bg-blue-600 rounded-full text-xs text-white flex items-center justify-center">
      {cart?.state.items.length || 0}
    </span>
  </button>
  <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
</>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="/" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                Home
              </a>
              <a href="/#" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                Products
              </a>
              <a href="/#" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                Categories
              </a>
              <a href="/#" className="block px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                About
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};


export default Header;